const readGedFile = require('./helpers/readGedFile.js');
const {NearleyParser} = require('./NearleyParser.js');
const nearley = require("nearley");
const { gedcomEnumTypes } = require('./Constants.js');
const Diff = require('diff');


async function main() {
    // string representation of gedcom file
    const gedcomString = await readGedFile("test/sampleData/DatasetTest/noDuplicatedXrefsMaximal.ged");

    testNearleyParser("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n0 TRLR\n");
    //testNearleyParser(gedcomString)
    

}

function testNearleyParser(gedcomString){
    const nearleyParser = new NearleyParser();
    const dataset = nearleyParser.parseString(gedcomString);
    //const family = dataset.getFamily("F1");
    //console.log(family.getHusbandXref());
    //family.checkSyntax();
    dataset.write("./result.ged")

    //const header = dataset.getHeader();
    //header.checkSyntax();

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
