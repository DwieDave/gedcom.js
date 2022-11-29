// a set of structures conforming to The FamilySearch GEDCOM Specification is called a FamilySearch GEDCOM dataset
const writeGedFile = require("./helpers/writeGedFile.js");
const Family = require("./structure/Family.js");
const Individual = require("./structure/Individual.js");
const {GedcomSyntaxError} = require("./Errors.js");

module.exports = class Dataset {
    constructor(header, records, trlr) {
        // every dataset must contain a HEADER and a TLRL 
        // the order of these is significant: the HEADER must come first and TRLR must be last, with any RECORDs in between.
        if(header && trlr){
            this.header = header;
            this.trlr = trlr;
        }else{
            throw new GedcomSyntaxError("No Header or Trailer found!")
        }
        
        // every structure is either a record, meaning it is not contained in any other structure’s collection of substructures, 
        // or it is a substructure of exactly 1 other structure
        this.records = records;
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