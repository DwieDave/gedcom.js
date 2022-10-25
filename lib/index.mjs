import { Parser } from './Parser.mjs';
import { readGedFile } from './helpers/readGedFile.mjs';
import { Structure } from "./structure/Structure.mjs";


async function main() {

    // initialize the parser 
    const parser = new Parser();

    // string representation of gedcom file
    const gedcomString = await readGedFile("./sampleData", "remarriage1.ged");

    // parse a gedcom file
    let dataset = parser.parseString(gedcomString);
    dataset.printRecords();

    // print all tags
    for(const record of dataset.records){
        console.log(record.tag);
    }

    let indi1 = dataset.records[0];
    

    

}
main();
