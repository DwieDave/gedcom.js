// a set of structures conforming to The FamilySearch GEDCOM Specification is called a FamilySearch GEDCOM dataset

export class Dataset{
    constructor() { 
        // every dataset must contain a HEADER and a TLRL 
        // the order of these is significant: the HEADER must come first and TRLR must be last, with any RECORDs in between.
        this.header = null;
        this.records = [];
        this.trlr = null;
    }

    // adds a record to this dataset
    addRecord(structure){
        this.records.push(structure);
    }
    

    // print all records from this dataset
    printRecords(){
        for(const record of this.records){
            record.print();
        }
    }
}