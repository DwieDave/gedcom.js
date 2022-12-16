// a set of structures conforming to The FamilySearch GEDCOM Specification is called a FamilySearch GEDCOM dataset
const writeGedFile = require("./helpers/writeGedFile.js");
const Structure = require('./ExportGedcomStructureClasses.js')
const {lineTypes, dataTypes, emptyHeader, emptyTrailer} = require('./Constants.js');
const {GedcomCardinalityError, GedcomSyntaxError, DatasetError, Warning} = require('./Errors.js');

module.exports = class Dataset {
    constructor(parsedHeader, parsedRecords, parsedTrlr, BOMset) {
        // the first character in each data stream should be U+FEFF, the byte-order mark. 
        //  -> if present, this initial character has no meaning within this specification but serves to indicate to other systems 
        //  that the file uses the UTF-8 character encoding
        this.BOMset = BOMset ? true : false;

        // Byte-Order-Mark Unicode
        this.BOM = "\ufeff";

        // count different EOL characters -> each dataset should just use one type of EOL-character
        this.multipleEOLCharacters = false;
        this.EOL = {
            "\n": 0,
            "\r": 0,
            "\r\n": 0
        };
        
        // All Cross-Reference Identifier used in this dataset
        //  -> The Cross-Reference Identifier matches production Xref (but not voidPtr) and indicates that this is a structure 
        //  to which pointer-type payloads may point.
        // DatasetError when duplicate-xref found
        //  -> Each Cross-Reference Identifier must be unique within a given data document.
        this.xrefMap = {};

        // All substructures with DataType Xref of this dataset
        //  -> indicates that this substructure references a record 
        // DatasetError if linevalue matches xref, but xref is not defined in this dataset
        //  -> If a line value matches production Xref, the same value must occur as the Cross-Reference Identifier of a structure within the document.
        this.substructsWithXrefDatatype = {}


        // every dataset must contain a HEADER and a TLRL 
        // the order of these is significant: the HEADER must come first and TRLR must be last, with any RECORDs in between.
        if(parsedHeader && parsedTrlr){
            this.header = this.createStructure(parsedHeader, this, null);
            this.trlr = this.createStructure(parsedTrlr, this, null);
        }else{
            throw new GedcomSyntaxError("No Header or Trailer found!")
        }

        // every structure is either a record, meaning it is not contained in any other structure’s collection of substructures, 
        // or it is a substructure of exactly 1 other structure
        this.records = parsedRecords.map(r => this.createStructure(r, this, null));

        // check for different EOL characters in Dataset
        if((this.EOL["\n"]*this.EOL["\r"] + this.EOL["\n"]*this.EOL["\r\n"] + this.EOL["\r"]*this.EOL["\r\n"]) !== 0){
            this.multipleEOLCharacters = true;
        }

        // check for substructures with DataType Xref, that point to a record that doesn't exists in this Datatype
        //  -> throws Error if found
        if(this.substructsWithXrefDatatype){
            for(const [xref,struct] of Object.entries(this.substructsWithXrefDatatype)){
                this.checkXref(xref,struct);
            }
        }
    }

    static createEmptyDataset(gedcomVersion){
        let header = emptyHeader;
        header.substructs[0].substructs[0].line.lineVal = `${gedcomVersion}`;
        return new Dataset(emptyHeader, [], emptyTrailer, true);
    }

    createStructure(parsedObject, superstruct, associatedRecord){
        const line = parsedObject.line;
        const structureType = parsedObject.type;
        const lineValType = parsedObject.lineValType;
        const substructs = parsedObject.substructs;
        let struct = null;

        // create structure depending on type of line
        switch(structureType){
            // Header
            case lineTypes.HEADER:
                struct = new Structure.Header(line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, []);
                break;

            // Family Record
            case lineTypes.FAM_RECORD:
                struct = new Structure.Family(line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, []);
                break;

            // Individual Record
            case lineTypes.INDI_RECORD:
                struct = new Structure.Individual(line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, []);
                break;
            
            // Multimedia Record
            case lineTypes.OBJE_RECORD:
                struct = new Structure.Multimedia(line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, []);
                break;

            // Repository Record
            case lineTypes.REPO_RECORD:
                struct = new Structure.Repository(line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, []);
                break;

            // SharedNote Record
            case lineTypes.SNOTE_RECORD:
                struct = new Structure.SharedNote(line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, []);
                break;
            
            // Source Record
            case lineTypes.SOUR_RECORD:
                struct = new Structure.Source(line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, []);
                break;
            
            // Submitter Record
            case lineTypes.SUBM_RECORD:
                struct = new Structure.Submitter(line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, []);
                break;
            
            // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
            default:
                // payloads with datatype "list" are encoded as strings, seperated by ","
                if(lineValType === dataTypes.ListText || lineValType === dataTypes.ListEnum){
                    let lineVal = [];
                    // convert string-representation of list to array
                    for(const val of line.lineVal.split(",")){
                        lineVal.push(val);
                    }
                    struct = new Structure.Structure(line.level, line.xref, line.tag, lineVal, lineValType, line.EOL, []);

                }else if(lineValType === dataTypes.Xref){
                    struct = new Structure.Structure(line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, []);
                    this.substructsWithXrefDatatype[line.lineVal] = struct;

                }else{
                    struct = new Structure.Structure(line.level, line.xref, line.tag, line.lineVal, lineValType, line.EOL, []);
                }
        }

        // save EOL character
        this.EOL[line.EOL] += 1;

        // save xref in xrefMap, if struct is a record (xref is set)
        if(struct?.xref){
            this.addXref(struct);
        }
        
        // set superstructure property of new created object
        struct.superstructure = superstruct

        // set associated record
        struct.associatedRecord = associatedRecord;


        // call this method recursive for all substructures
        for(const sub of substructs){
            // associatedRecord is null if struct is a record itself
            //  -> if associatedRecord is set, struct is substruct of associatedRecord
            if(associatedRecord){
                struct.substructures.push(this.createStructure(sub, struct, associatedRecord));
            }else{
                struct.substructures.push(this.createStructure(sub, struct, struct));
            }
            
        }

        return struct;
    }

    // add structure identified by xref to xrefMap of this dataset
    addXref(struct){
        if(this.xrefMap[`@${struct.xref}@`]){
            throw new DatasetError(`Multiple "@${struct.xref}@" Cross-Reference Identifier!\nEach Cross-Reference Identifier must be unique within a given Dataset.`)
        }else{
            this.xrefMap[`@${struct.xref}@`] = struct;
        }
    }

    // check if xref is defined in this Dataset
    checkXref(xref, struct){
        if(xref !== "@VOID@" && !this.xrefMap[xref]){
            throw new DatasetError(`Cross-Reference Identifier ${xref} used as LineValue in "${struct.toLine()}" not found in this Dataset \nIf a line value matches production Xref, the same value must occur as the Cross-Reference Identifier of a structure within the document.`);
        }
    }

    // add given record to records-list of this dataset
    addRecord(record){
        this.records.push(record);
    }

    // return record with the given xref
    getRecordByXref(xref){
        return this.xrefMap[`@${xref}@`];
    }

    // return all records included in this dataset that are an instance of the given constructor
    getRecordsByConstructor(constructor){
        const recordsFound = [];
        for (const record of this.records) {
            if (record instanceof constructor) recordsFound.push(record);
        }
        return recordsFound;
    }

    // print all records from this dataset
    printRecords() {
        for (const record of this.records) {
            record.print();
        }
    }

    // return Header record
    getHeaderRecord(){
        return this.header;
    }

    // return all Family Records included in this dataset
    getFamilyRecords() {
        return this.getRecordsByConstructor(Structure.Family);
    }

    // return all Individual Records included in this dataset
    getIndividualRecords() {
        return this.getRecordsByConstructor(Structure.Individual);
    }

    // return all Multimedia Records included in this dataset
    getMultimediaRecords() {
        return this.getRecordsByConstructor(Structure.Multimedia);
    }

    // return all Repository Records included in this dataset
    getRepositoryRecords() {
        return this.getRecordsByConstructor(Structure.Repository);
    }

    // return all SharedNote Records included in this dataset
    getSharedNoteRecords() {
        return this.getRecordsByConstructor(Structure.SharedNote);
    }

    // return all Source Records included in this dataset
    getSourceRecords() {
        return this.getRecordsByConstructor(Structure.Source);
    }

    // return all Submitter Records included in this dataset
    getSubmitterRecords() {
        return this.getRecordsByConstructor(Structure.Submitter);
    }

    // return string representation of gedcom structure
    toString() {
        let string = (this.BOMset) ? this.BOM : "";
        string += this.header.toString();

        for (const record of this.records) {
            string += record.toString();
        }

        return string + this.trlr.toString();
    }

    // export gedcom structure (dataset) as .ged-file into given path
    async write(path) { 
        await writeGedFile(path, this.toString());
    }
}