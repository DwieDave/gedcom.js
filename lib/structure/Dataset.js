// a set of structures conforming to The FamilySearch GEDCOM Specification is called a FamilySearch GEDCOM dataset
const writeGedFile = require('../util/writeGedFile.js');
const Structure = require('../util/ExportGedcomStructureClasses.js');
const { lineTypes, dataTypes, emptyHeader, emptyTrailer, gedcomSpecialValues } = require('../util/Constants.js');
const StructureInfo = require('../grammar/StructureInfo.js');
const Parser = require('./Parser.js');
const grammar = require('../grammar/parser/DatasetParser.js');
const { GedcomSyntaxError, DatasetError } = require('../util/Errors.js');

module.exports = class Dataset {
  constructor (parsedHeader, parsedRecords, parsedTrlr, BOMset) {
    // the first character in each data stream should be U+FEFF, the byte-order mark.
    //  -> if present, this initial character has no meaning within this specification but serves to indicate to other systems
    //  that the file uses the UTF-8 character encoding
    this.BOMset = !!BOMset;

    // Byte-Order-Mark Unicode
    this.BOM = '\ufeff';

    // count different EOL characters -> each dataset should just use one type of EOL-character
    this.multipleEOLCharacters = false;
    this.EOL = {
      '\n': 0,
      '\r': 0,
      '\r\n': 0
    };

    // All Cross-Reference Identifier used in this dataset mapped to corresponding sturctures (records)
    //  -> The Cross-Reference Identifier matches production Xref (but not voidPtr) and indicates that this is a structure
    //  to which pointer-type payloads may point.
    // DatasetError when duplicate-xref found
    //  -> Each Cross-Reference Identifier must be unique within a given data document.
    this.xrefMap = {};

    // All substructures with DataType Xref in this dataset
    //  -> indicates that this substructure references a record
    // If a line value matches production Xref, the same value must occur as the Cross-Reference Identifier of a structure within the document
    //  -> DatasetError if linevalue matches xref, but xref is not defined in this dataset
    this.substructsWithXrefDatatype = {};

    // every dataset must contain a HEADER and a TLRL
    // the order of these is significant: the HEADER must come first and TRLR must be last, with any RECORDs in between.
    if (parsedHeader && parsedTrlr) {
      this.header = this.createStructure(parsedHeader, null, null);
      this.trlr = this.createStructure(parsedTrlr, null, null);
    } else {
      throw new GedcomSyntaxError('No Header or Trailer found!');
    }

    // every structure is either a record, meaning it is not contained in any other structure’s collection of substructures,
    // or it is a substructure of exactly 1 other structure
    this.records = parsedRecords.map(r => this.createStructure(r, null, null));

    // check for different EOL characters in Dataset
    if ((this.EOL['\n'] * this.EOL['\r'] + this.EOL['\n'] * this.EOL['\r\n'] + this.EOL['\r'] * this.EOL['\r\n']) !== 0) {
      this.multipleEOLCharacters = true;
    }

    // check for substructures with DataType Xref, that point to a record that doesn't exists in this Datatype
    //  -> throws Error if found
    this.checkForNotDefinedXrefs();
  }

  static createEmptyDataset (gedcomVersion) {
    const header = emptyHeader;
    header.substructs[0].substructs[0].line.lineVal = `${gedcomVersion}`;
    return new Dataset(emptyHeader, [], emptyTrailer, true);
  }

  createStructure (parsedObject, superstruct, associatedRecord, addStructureFlag = false) {
    const uri = parsedObject.uri.startsWith('g7:') ? parsedObject.uri : this.convertUri(parsedObject.uri);
    const line = parsedObject.line;
    const structureType = parsedObject.type;
    const lineValType = parsedObject.lineValType;
    const substructs = parsedObject.substructs;
    const isDateType = lineValType === dataTypes.DateValue || lineValType === dataTypes.DatePeriod || lineValType === dataTypes.DateExact;
    let struct = null;

    // create structure depending on type of line
    switch (structureType) {
      // Header
      case lineTypes.HEADER:
        struct = new Structure.Header(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
        break;

        // Family Record
      case lineTypes.FAM_RECORD:
        struct = new Structure.Family(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
        break;

        // Individual Record
      case lineTypes.INDI_RECORD:
        struct = new Structure.Individual(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
        break;

        // Multimedia Record
      case lineTypes.OBJE_RECORD:
        struct = new Structure.Multimedia(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
        break;

        // Repository Record
      case lineTypes.REPO_RECORD:
        struct = new Structure.Repository(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
        break;

        // SharedNote Record
      case lineTypes.SNOTE_RECORD:
        struct = new Structure.SharedNote(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
        break;

        // Source Record
      case lineTypes.SOUR_RECORD:
        struct = new Structure.Source(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
        break;

        // Submitter Record
      case lineTypes.SUBM_RECORD:
        struct = new Structure.Submitter(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
        break;

        // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
      default:
        /* // payloads with datatype "list" are encoded as strings, seperated by ","
                if(lineValType === dataTypes.ListText || lineValType === dataTypes.ListEnum){
                    let lineVal = [];
                    // convert string-representation of list to array
                    for(const val of line.lineVal.split(",")){
                        lineVal.push(val.trim());
                    }
                    struct = new Structure.Structure(uri, line.level, line.xref, line.tag, lineVal, lineValType, line.EOL, [], this);

                }else */ if (lineValType === dataTypes.Xref) {
          struct = new Structure.Structure(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
          this.addSubstructWithXrefDatatype(struct);
        } else if (isDateType) {
          // all Gedcom-Date-DataTypes create a GedcomDate-Object
          struct = new Structure.GedcomDate(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
        } else {
          
          struct = new Structure.Structure(uri, line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, [], this);
        }
    }

    // save EOL character
    this.EOL[line.EOL] += 1;

    // save xref in xrefMap, if struct is a record (xref is set)
    if (struct?.xref) {
      this.addXrefToXrefMap(struct);
    }

    // set superstructure property of new created structure-object
    struct.superstructure = superstruct;

    // set associated record property of new created structure-object
    struct.associatedRecord = associatedRecord;

    // if the addStructureFlag is set, this method was called from a structure-object, to add a substruct
    //  -> substructs of superstruct must be adjusted
    if (addStructureFlag) {
      superstruct.substructures.push(struct);
    }

    // call the createStructure-method recursive for all substructures
    for (const sub of substructs) {
      // associatedRecord is null if struct is a record itself
      //  -> if associatedRecord is set, struct is substruct (of a substruct ...) of associatedRecord
      if (associatedRecord) {
        struct.substructures.push(this.createStructure(sub, struct, associatedRecord));
      } else {
        struct.substructures.push(this.createStructure(sub, struct, struct));
      }
    }

    if (isDateType) {
      struct.initDate();
    }

    return struct;
  }

  createStructureFromStructureParameters (structureParameters, level) {
    const structInfo = StructureInfo[structureParameters.uri];
    if (!structInfo) throw new GedcomSyntaxError('URI is not defined in Gedcom Specification!');
    const structure = {};

    // set structure information on basis of given parameters and StructureInformation
    structure.uri = structureParameters.uri;
    structure.type = structInfo.lineType;
    structure.lineValType = structInfo.lineValType;
    structure.line = {
      level: level,
      xref: structureParameters.xref ? structureParameters.xref : '',
      tag: structInfo.tag,
      lineVal: structureParameters.lineVal ? structureParameters.lineVal : '',
      EOL: this.getEOL()
    };

    // create substructures recursively
    let givenSubstructs = structureParameters.substructs;
    if (givenSubstructs) {
      for (let i = 0; i < givenSubstructs.length; i++) {
        givenSubstructs[i] = this.createStructureFromStructureParameters(givenSubstructs[i], (parseInt(level) + 1).toString());
      }
    } else {
      givenSubstructs = [];
    }

    // set substructs property
    structure.substructs = givenSubstructs;

    return structure;
  }

  // add an additional record to this dataset
  addRecord (recordParameters) {
    // create a structure from given information and set it as record for this dataset
    const struct = this.createStructureFromStructureParameters(recordParameters, '0');
    const record = this.createStructure(struct, null, null);
    this.records.push(record);

    console.log('\n\nafter adding');
    console.log(this.toString());
    try {
      // if new record results in GedcomSyntaxError, restore old value and rethrow error
      //  -> if not remove new record from dataset and rethrow error
      this.checkSyntax();
      // check if references in new record are all defined in this dataset
      //  -> if not remove new record from dataset and rethrow error
      this.checkForNotDefinedXrefs();
    } catch (e) {
      this.removeRecord(record);
      throw e;
    }

    return record;
  }

  // removes given record from this dataset
  removeRecord (record) {
    // find index of record
    const index = this.records.findIndex((rec) => {
      return rec.equals(record);
    });

    // remove record from record-list
    this.records.splice(index, 1);

    // check if any substructs referenced this record
    //  -> if so, set reference to @VOID@-pointer
    for (const structs of Object.values(this.substructsWithXrefDatatype)) {
      structs.forEach(struct => {
        if (struct.lineVal === record.xref) {
          struct.setLineVal('@VOID@');
        }
      });
    }

    // remove record from xrefMap
    delete this.xrefMap[record.xref];
  }

  // add an additional Structure to this dataset
  addStructure (struct, superstruct, associatedRecord) {
    // create a structure from given information and mount it into Gedcom-Structure-Tree as substruct of given superstruct
    return this.createStructure(struct, superstruct, associatedRecord, true);
  }

  // removes given structure from this dataset
  removeStructure (struct, warnUser = true) {
    if (warnUser)console.warn('WARNING: Removing a Structure from Dataset means that all potential substructures are removed as well!');

    // structure is a record
    if (struct.associatedRecord === null) {
      // remove record from dataset record-list
      this.removeRecord(struct);

      // structure is not a record
    } else {
      const superstruct = struct.superstructure;
      // find index of structure in superstructs substructure-list
      const index = superstruct.substructures.findIndex((sub) => {
        return sub.equals(struct);
      });

      // remove structure from Gedcom-Tree
      superstruct.substructures.splice(index, 1);

      // If removing a structure leaves its superstructure with no payload and no substructures, the superstructure should also be removed
      this.searchAndRemoveEmptyStructures(superstruct);

      // If removal of a structure makes the superstructure invalid because the superstructure required the substructure, the structure should instead
      // be retained and have its payload changed to a voidPtr if a pointer, or to a data type-appropriate empty value if a non-pointer
      for (const [uri, cardinality] of Object.entries(superstruct.getPossibleSubstructs())) {
        // check if structure with uri is required
        if (struct.uri === uri) {
          if (cardinality.split(':')[0] === '1') {
            // set lineVal to type-appropriate void-value
            if (struct.lineValType === dataTypes.Xref) {
              struct.lineVal = gedcomSpecialValues.VOID_POINTER;
            } else {
              struct.lineVal = gedcomSpecialValues.VOID_LINE_VAL;
            }

            // remount structure in Gedcom-Tree
            superstruct.substructures.splice(index, 0, struct);

            console.warn(`WARNING: Structure "${struct.toLine(false)}" is required in "${superstruct.toLine(false)}" and therefore can't be removed! Instead the structure is retained and it's lineValue is set to a dataType-appropriate emtpy value.`);

            // remove all substructures
            for (const sub of struct.substructures) {
              this.removeStructure(sub);
            }
          }
        }
      }
    }
  }

  searchAndRemoveEmptyStructures (struct) {
    // search for empty structures recursively to the top of the Gedcom-Tree
    if (struct.lineVal === '' && struct.substructures.length === 0) {
      // struct is a recrod
      if (struct.superstructure === null) {
        this.removeRecord(struct, false);
        console.log(`INFO: "${struct.toLine(false)}" was removed from Dataset, because it has no payload and no substructures.`);

        // struct is not a record
      } else {
        this.removeStructure(struct, false);
        console.log(`INFO: "${struct.toLine(false)}" was removed from Dataset, because it has no payload and no substructures.`);
      }
    }
  }

  // check syntax on basis of dataset-grammar
  checkSyntax () {
    const parser = new Parser(grammar);

    try {
      console.log('check syntax of Dataset');
      // parse string-representation of structure and check cardinality of first result (record)
      parser.parseString(this.toString(), [1, 2]);
      console.log('syntax correct!');
    } catch (e) {
      throw new GedcomSyntaxError(e.message);
    }
  }

  // returns the EOL-character that's most used in this dataset
  getEOL () {
    const nCount = this.EOL['\n'];
    const rCount = this.EOL['\r'];
    const rnCount = this.EOL['\r\n'];

    if (nCount >= rCount && nCount >= rnCount) return '\n';
    if (rCount >= nCount && rCount >= rnCount) return '\r';
    return '\r\n';
  }

  // nearley can't process ":" or "-" characters, so the Gedcom-URIs must be converted
  //  -> this method reconverts them to the original form, so that they match Gedcom-Specification
  convertUri (uri) {
    const uriArr = uri.split('_');
    let convertedUri = `${uriArr[1]}:${uriArr[2]}`;
    for (let i = 3; i < uriArr.length; i++) {
      convertedUri += `-${uriArr[i]}`;
    }
    return convertedUri;
  }

  // add structure identified by xref to xrefMap of this dataset
  //  -> check if there is already a struct with this xref (in this case throw error)
  addXrefToXrefMap (struct) {
    if (this.xrefMap[struct.xref]) {
      throw new DatasetError(`Multiple ${struct.xref} Cross-Reference Identifier!\nEach Cross-Reference Identifier must be unique within a given Dataset.`);
    } else {
      this.xrefMap[struct.xref] = struct;
    }
  }

  // structure with DataType Xref was created for this dataset
  //  -> therefore substructsWithXrefDatatype must be adjusted
  addSubstructWithXrefDatatype (struct) {
    // there is already a structure with the same xref-lineVal
    //  -> e.g. another structure refering to the same FAM-Record
    if (this.substructsWithXrefDatatype[struct.lineVal]) {
      const val = this.substructsWithXrefDatatype[struct.lineVal];
      val.push(struct);
      this.substructsWithXrefDatatype[struct.lineVal] = val;
      // first structure with this xref-lineVal
    } else {
      this.substructsWithXrefDatatype[struct.lineVal] = [struct];
    }
  }

  // remove a structure from subStructsWithXrefDatatype-map
  removeSubstructWithXrefDatatype (struct) {
    const entries = this.substructsWithXrefDatatype[struct.lineVal];
    // if there is just one struct refering to this xref, the entry can be deleted
    if (entries.length === 1) {
      delete this.substructsWithXrefDatatype[struct.lineVal];
      // if there are multiple structs refering to this xref, the struct has to be removed from this list
    } else {
      const index = entries.findIndex((ele) => {
        return (ele.uri === struct.uri && ele.level === struct.level && ele.lineVal === struct.lineVal);
      });
      entries.splice(index, 1);
    }
  }

  // check if xref of all structures with xref lineValType is defined in this dataset
  checkForNotDefinedXrefs () {
    if (this.substructsWithXrefDatatype) {
      for (const [xref, structs] of Object.entries(this.substructsWithXrefDatatype)) {
        structs.forEach(struct => {
          this.isXrefDefined(xref, struct);
        });
      }
    }
  }

  // check if xref is defined in this Dataset
  isXrefDefined (xref, struct) {
    if (xref !== '@VOID@' && !this.xrefMap[xref]) {
      throw new DatasetError(`Cross-Reference Identifier ${xref} used as LineValue in "${struct.toLine()}" not found in this Dataset \nIf a line value matches production Xref, the same value must occur as the Cross-Reference Identifier of a structure within the document.`);
    }
  }

  // return record with the given xref
  getRecordByXref (xref) {
    return this.xrefMap[xref];
  }

  // return all records included in this dataset that are an instance of the given constructor
  getRecordsByConstructor (constructor) {
    const recordsFound = [];
    for (const record of this.records) {
      if (record instanceof constructor) recordsFound.push(record);
    }
    return recordsFound;
  }

  // print all records from this dataset
  printRecords () {
    for (const record of this.records) {
      record.print();
    }
  }

  // return Header record
  getHeaderRecord () {
    return this.header;
  }

  // return all Family Records included in this dataset
  getFamilyRecords () {
    return this.getRecordsByConstructor(Structure.Family);
  }

  // return all Individual Records included in this dataset
  getIndividualRecords () {
    return this.getRecordsByConstructor(Structure.Individual);
  }

  // return all Multimedia Records included in this dataset
  getMultimediaRecords () {
    return this.getRecordsByConstructor(Structure.Multimedia);
  }

  // return all Repository Records included in this dataset
  getRepositoryRecords () {
    return this.getRecordsByConstructor(Structure.Repository);
  }

  // return all SharedNote Records included in this dataset
  getSharedNoteRecords () {
    return this.getRecordsByConstructor(Structure.SharedNote);
  }

  // return all Source Records included in this dataset
  getSourceRecords () {
    return this.getRecordsByConstructor(Structure.Source);
  }

  // return all Submitter Records included in this dataset
  getSubmitterRecords () {
    return this.getRecordsByConstructor(Structure.Submitter);
  }

  // return string representation of gedcom structure
  toString () {
    let string = (this.BOMset) ? this.BOM : '';
    string += this.header.toString();

    for (const record of this.records) {
      string += record.toString();
    }

    return string + this.trlr.toString();
  }

  // export gedcom structure (dataset) as .ged-file into given path
  async write (path) {
    await writeGedFile(path, this.toString());
  }
};
