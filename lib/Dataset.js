// a set of structures conforming to The FamilySearch GEDCOM Specification is called a FamilySearch GEDCOM dataset
const writeGedFile = require("./helpers/writeGedFile.js");
const Structure = require('./ExportGedcomStructureClasses.js')
const {lineTypes, dataTypes} = require('./Constants.js');
const {GedcomCardinalityError, GedcomSyntaxError} = require('./Errors.js');

module.exports = class Dataset {
    constructor(parsedHeader, parsedRecords, parsedTrlr, bomSet) {
        // every dataset must contain a HEADER and a TLRL 
        // the order of these is significant: the HEADER must come first and TRLR must be last, with any RECORDs in between.
        if(parsedHeader && parsedTrlr){
            this.header = this.createRecord(parsedHeader, null);
            this.trlr = this.createRecord(parsedTrlr, null);
        }else{
            throw new GedcomSyntaxError("No Header or Trailer found!")
        }

        // every structure is either a record, meaning it is not contained in any other structure’s collection of substructures, 
        // or it is a substructure of exactly 1 other structure
        this.records = parsedRecords.map(r => this.createRecord(r, null));

        // the first character in each data stream should be U+FEFF, the byte-order mark. 
        // If present, this initial character has no meaning within this specification but serves to indicate to other systems 
        // that the file uses the UTF-8 character encoding
        this.bomSet = bomSet;
        if(!bomSet){
            console.warn("WARNING: The first character in each data stream should be U+FEFF, the byte-order mark!");
        }
    }

    createRecord(parsedObject, superstruct){
        const line = parsedObject.line;
        const type = parsedObject.type;
        const substructs = parsedObject.substructs;
        let struct = null;

        // create structure depending on type of line
        switch(type){
            // Header
            case lineTypes.HEADER:
                struct = new Structure.Header(line.level, line.xref, line.tag, line.lineVal, []);
                break;

            // Family Record
            case lineTypes.FAM_RECORD:
                struct = new Structure.Family(line.level, line.xref, line.tag, line.lineVal, []);
                break;

            // Individual Record
            case lineTypes.INDI_RECORD:
                struct = new Structure.Individual(line.level, line.xref, line.tag, line.lineVal, []);
                break;
            
            // Multimedia Record
            case lineTypes.OBJE_RECORD:
                struct = new Structure.Multimedia(line.level, line.xref, line.tag, line.lineVal, []);
                break;

            // Repository Record
            case lineTypes.REPO_RECORD:
                struct = new Structure.Repository(line.level, line.xref, line.tag, line.lineVal, []);
                break;

            // SharedNote Record
            case lineTypes.SNOTE_RECORD:
                struct = new Structure.SharedNote(line.level, line.xref, line.tag, line.lineVal, []);
                break;
            
            // Source Record
            case lineTypes.SOUR_RECORD:
                struct = new Structure.Source(line.level, line.xref, line.tag, line.lineVal, []);
                break;
            
            // Submitter Record
            case lineTypes.SUBM_RECORD:
                struct = new Structure.Submitter(line.level, line.xref, line.tag, line.lineVal, []);
                break;
            
            // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
            default:
                // payloads with datatype "list" are encoded as strings, seperated by ","
                if(parsedObject.lineValType === dataTypes.ListText || parsedObject.lineValType === dataTypes.ListEnum){
                    let lineVal = [];
                    // convert string-representation of list to array
                    for(const val of line.lineVal.split(",")){
                        lineVal.push(val);
                    }
                    struct = new Structure.Structure(line.level, line.xref, line.tag, lineVal, []);
                }else{
                    struct = new Structure.Structure(line.level, line.xref, line.tag, line.lineVal, []);
                }
        }

        // set superstructure property of new created object
        struct.setSuperstructure(superstruct)

        // call this method recursive for all substructures
        for(const sub of substructs){
            struct.addSubstructure(this.createRecord(sub, struct));
        }

        return struct;
    }

    // add given record to records-list of this dataset
    addRecord(record){
        this.records.push(record);
    }

    // return record with the given xref
    getRecordByXref(xref){
        for (const record of this.records) {
            if (record.xref == xref) return record;
        }
        
        return null;
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
        let string = this.header.toString();
        for (const record of this.records) {
            string += "\n";
            string += record.toString();
        }
        return string + "\n" + this.trlr.toString() + "\n";
    }

    // export gedcom structure (dataset) as .ged-file into given path
    async write(path) { 
        await writeGedFile(path, this.toString());
    }
}