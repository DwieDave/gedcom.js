import { Parser } from './Parser.mjs';
import { readGedFile } from './helpers/readGedFile.mjs';
import { printGedcomRecords } from './helpers/printGedcomRecords.mjs';

async function main() {
    const parser = new Parser();
    const gedcom_string = await readGedFile("./sampleData", "gedcomExample.ged");

    // records with all substructures 
    const records = parser.parse(gedcom_string);
    printGedcomRecords(records);
}
main();
