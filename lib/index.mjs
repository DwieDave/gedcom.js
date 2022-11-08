import { Parser } from './Parser.mjs';
import { readGedFile } from './helpers/readGedFile.mjs';
import { Structure } from "./structure/Structure.mjs";
import { Family } from './structure/Family.mjs';
import { writeGedFile } from './helpers/writeGedFile.mjs';
import grammar from "./grammar/IndividualGrammar.js";
import nearley from "nearley"
import {GedcomSyntaxError} from './Syntax.mjs'
import {makeLexer, moo} from "moo-ignore"


async function main() {
    // initialize the parser 
    const parser = new Parser();

    // string representation of gedcom file
    //const gedcomString = await readGedFile("./sampleData/syntaxTest.ged");
    const gedcomString = await readGedFile("./sampleData/remarriage1.ged");

    // parse a gedcom file
    let dataset = parser.parseString(gedcomString);

    // check syntax of family F1
    const indi = dataset.getIndividual("I3");
    try {
        indi.checkSyntax();
    } catch (e) {
        console.error(e)
    }

    // // init lexer 
    // let lexer = moo.compile({
    //     HUSB: {match:/\n[0-9] HUSB/, lineBreaks: true},
    //     ANYTHING_ELSE: {match:/[^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F]/, lineBreaks: true},
    //   })

    // // count HUSB-Tags
    // lexer.reset('0 @F1@ FAM \n1 TEST 12 JUNE 2001\n1 HUSB @I1@\n2 PHRASE hat ein sehr \n1 HUSB schönes Haus')
    // let counter = 0;
    // for(let next of lexer){
    //     if(next.type === "HUSB") counter += 1;
    // }

    // console.log("husband counter: " + counter);

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
