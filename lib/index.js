const readGedFile = require('./helpers/readGedFile.js');
const NearleyParser = require('./NearleyParser.js');


async function main() {
    // string representation of gedcom file
    const gedcomString = await readGedFile("./sampleData/nearleyParserTest.ged");

    // testNearleyParser("0 @F1@ FAM\n");
    testNearleyParser(gedcomString);

}

function testNearleyParser(gedcomString){
    const nearleyParser = new NearleyParser();
    const family = nearleyParser.parseString(gedcomString);
    console.log(family.getHusbandXref());

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
