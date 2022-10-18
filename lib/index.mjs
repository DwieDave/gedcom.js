import { Parser } from './Parser.mjs';
import { readGedFile } from './helpers/readGedFile.mjs';
import { printGedcomRecords } from './helpers/printGedcomRecords.mjs';
import { Structure } from "./Structure.mjs";
import {Individual} from "./records/Individual.mjs";

async function main() {

    // initialize the parser 
    const parser = new Parser();

    // string representation of gedcom file
    const gedcom_string = await readGedFile("./sampleData", "remarriage1.ged");

    // parse a gedcom file
    parser.parseFile(gedcom_string);

}
main();
