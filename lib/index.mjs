import { Parser } from './Parser.mjs';
import { readGedFile } from './helpers/readGedFile.mjs';
import { Structure } from "./structure/Structure.mjs";


async function main() {

    // initialize the parser 
    const parser = new Parser();

    // string representation of gedcom file
    const gedcom_string = await readGedFile("./sampleData", "individualTest.ged");

    // parse a gedcom file
    let dataset = parser.parseFile(gedcom_string);
    dataset.printRecords();

    // print all tags
    for(const record of dataset.records){
        console.log(record.tag);
    }

    let indi1 = dataset.records[0];
    indi1.addSubstructure(new Structure({level: "1", tag: "NAME", lineValLineStr: "John Doe"}));
    indi1.addSubstructure(new Structure({level: "1", tag: "SEX", lineValLineStr: "M"}));
    console.log(`Sex of individual: ${indi1.getSex()}`);
    

}
main();
