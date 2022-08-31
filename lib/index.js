const Parser = require('./Parser');
const readGedFile = require('../helpers/readGedFile');
const printGedcomRecords = require('../helpers/printGedcomRecords');

async function main(){
    const parser = new Parser();
    const gedcom_string = await readGedFile("./sample_data", "gedcom_example.ged");

    // records with all substructures 
    const records = parser.parse(gedcom_string);
    printGedcomRecords(records);
}
main();
