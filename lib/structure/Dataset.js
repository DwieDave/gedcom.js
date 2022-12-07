// a set of structures conforming to The FamilySearch GEDCOM Specification is called a FamilySearch GEDCOM dataset
const writeGedFile = require("../helpers/writeGedFile.js");
const Header = require('./Header.js');
const Family = require('./Family.js');
const Individual = require('./Individual.js');
const Multimedia = require('./Multimedia.js');
const Repository = require('./Repository.js');
const SharedNote = require('./SharedNote.js');
const Source = require('./Source.js');
const Submitter = require('./Submitter.js');
const Structure = require('./Structure.js');
const {lineTypes, dataTypes} = require('../Constants.js');
const {GedcomCardinalityError, GedcomSyntaxError} = require('../Errors.js');

module.exports = class Dataset {
    constructor(parsedHeader, parsedRecords, parsedTrlr) {
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
                struct = new Header(line.level, line.xref, line.tag, line.lineVal, []);
                break;

            // Family Record
            case lineTypes.FAM_RECORD:
                struct = new Family(line.level, line.xref, line.tag, line.lineVal, []);
                break;

            // Individual Record
            case lineTypes.INDI_RECORD:
                struct = new Individual(line.level, line.xref, line.tag, line.lineVal, []);
                break;
            
            // Multimedia Record
            case lineTypes.OBJE_RECORD:
                struct = new Multimedia(line.level, line.xref, line.tag, line.lineVal, []);
                break;

            // Repository Record
            case lineTypes.REPO_RECORD:
                struct = new Repository(line.level, line.xref, line.tag, line.lineVal, []);
                break;

            // SharedNote Record
            case lineTypes.SNOTE_RECORD:
                struct = new SharedNote(line.level, line.xref, line.tag, line.lineVal, []);
                break;
            
            // Source Record
            case lineTypes.SOUR_RECORD:
                struct = new Source(line.level, line.xref, line.tag, line.lineVal, []);
                break;
            
            // Submitter Record
            case lineTypes.SUBM_RECORD:
                struct = new Submitter(line.level, line.xref, line.tag, line.lineVal, []);
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
                    struct = new Structure(line.level, line.xref, line.tag, lineVal, []);
                }else{
                    struct = new Structure(line.level, line.xref, line.tag, line.lineVal, []);
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

    // print all records from this dataset
    printRecords() {
        for (const record of this.records) {
            record.print();
        }
    }

    getHeader(){
        return this.header;
    }

    // return all individuals included in this dataset
    getIndividuals() {
        const individuals = [];
        for (const record of this.records) {
            if (record instanceof Individual) individuals.push(record);
        }
        return individuals;
    }

    // search for individual with given xref
    getIndividual(xref) {
        for (const record of this.records) {
            if (record instanceof Individual && record.xref == xref) return record;
        }
    }

    // return all families included in this dataset
    getFamilies() {
        const families = [];
        for (const record of this.records) {
            if (record instanceof Family) families.push(record);
        }
        return families;
    }

    // search for family with given xref
    getFamily(xref) {
        for (const record of this.records) {
            if (record instanceof Family && record.xref == xref) return record;
        }
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