
export class Dataset{
    constructor() { 
        this.header = null;
        this.records = [];
        this.trailer = null;
    }

    addRecord(record){
        this.records.unshift(record);
    }

    printRecords(){
        for(const record of this.records){
            record.print();
        }
    }
}