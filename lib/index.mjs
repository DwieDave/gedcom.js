import { Parser } from './Parser.mjs';
import { readGedFile } from './helpers/readGedFile.mjs';
import { printGedcomRecords } from './helpers/printGedcomRecords.mjs';
import { Structure } from "./Structure.mjs";
import {Individual} from "./records/Individual.mjs";

async function main() {
    const parser = new Parser();
    const gedcom_string = await readGedFile("./sampleData", "gedcomExample.ged");

    // records with all substructures 
    parser.parseFile(gedcom_string);
    
    



}
main();
