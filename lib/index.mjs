import { Parser } from './Parser.mjs';
import { readGedFile } from './helpers/readGedFile.mjs';
import { Structure } from "./structure/Structure.mjs";
import { Family } from './structure/Family.mjs';
import { writeGedFile } from './helpers/writeGedFile.mjs';


async function main() {

    // initialize the parser 
    const parser = new Parser();

    // string representation of gedcom file
    const gedcomString = await readGedFile("./sampleData", "remarriage1.ged");

    // parse a gedcom file
    let dataset = parser.parseString(gedcomString);
    //dataset.printRecords();

    const myFamily = dataset.getFamily("F1");
    // console.log(`
    // THIS IS MY FAMILY
    // husband: ${dataset.getIndividual(myFamily.getHusbandXref()).getName()}
    // wife: ${dataset.getIndividual(myFamily.getWifeXref()).getName()}
    // number of children: ${myFamily.getChildren().length}
    // first child: ${dataset.getIndividual(myFamily.getChildrenXref()[0]).getName()}
    // second child: ${dataset.getIndividual(myFamily.getChildrenXref()[1]).getName()}
    // `);
    const individuals = dataset.getIndividuals();

    console.log(dataset.toString());

    await dataset.write("./sampleData", "remarriage-export-test.ged");

}
main();
