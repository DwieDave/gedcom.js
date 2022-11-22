import { readGedFile } from './helpers/readGedFile.mjs';
import grammar from "./grammar/parser/IndividualParser.js";
import nearley from "nearley"
import {GedcomSyntaxError} from './Syntax.mjs'
import { NearleyParser } from './NearleyParser.mjs';


async function main() {
    // string representation of gedcom file
    const gedcomString = await readGedFile("./sampleData/nearleyParserTest.ged");

    testNearleyParser("0 @F1@ FAM\r\n");
    //testNearleyParser(gedcomString);
}

function testNearleyParser(gedcomString){
    const nearleyParser = new NearleyParser();
    const family = nearleyParser.parseString(gedcomString);
}

function testFamily(dataset){
    // check syntax of family F1
    const myFamily = dataset.getFamily("F1");
    try{
        myFamily.checkSyntax();
    }catch(e){
        console.error(e)
    }
}
function testIndi(dataset){
    // Create a Parser object from family grammar.
    const ne_parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    const myIndi = dataset.getIndividual("I1");

    // check grammar of current substructure
    try{
        console.log(`Try to parse:\n${myIndi.toString()}`);
        ne_parser.feed(myIndi.toString());
        console.log(`Grammar correct!\n`);
        ne_parser.finish();
    }catch(e){
        throw new GedcomSyntaxError(e.message);
    }
}
function showFunctionality(dataset) {
    console.log(`Dataset toString:\n${dataset.toString()}\n\n`)
    const myFamily = dataset.getFamily("F1");
    console.log(`
    THIS IS MY FAMILY
    husband: ${dataset.getIndividual(myFamily.getHusbandXref()).getName()}
    wife: ${dataset.getIndividual(myFamily.getWifeXref()).getName()}
    number of children: ${myFamily.getChildren().length}
    first child: ${dataset.getIndividual(myFamily.getChildrenXref()[0]).getName()}
    second child: ${dataset.getIndividual(myFamily.getChildrenXref()[1]).getName()}
    `);

    const individuals = dataset.getIndividuals();

    console.log("\n\n write dataset to remarriage-export-test.ged")
    dataset.write("./sampleData/remarriage-export-test.ged");
}
main();
