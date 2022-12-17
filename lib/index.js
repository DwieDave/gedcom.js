const readGedFile = require('./helpers/readGedFile.js');
const {lineTypes, dataTypes} = require('./Constants.js');
const {GedcomParser} = require('./GedcomParser.js');
const process = require('process')


async function main() {
    // string representation of gedcom file
    const gedcomString = await readGedFile("test/sampleData/DatasetTest/BOMdetection/BOMsetMaximal.ged");
    //const gedcomString = await readGedFile("test/sampleData/StructureTest/addStructures.ged");

    //testGedcomParser("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n0 @I1@ INDI\n1 SEX M\n0 TRLR\n");
    testGedcomParser(gedcomString);
    //testAdd()



    

}

function testGedcomParser(gedcomString){
    const gedcomParser = new GedcomParser();
    const ne = new GedcomParser();
    const dataset = gedcomParser.parseString(gedcomString);


    const indi = dataset.getRecordByXref("I1")
    console.log(indi.toString())

    const name = {
        type: lineTypes.NO_XREF,
        lineValType: dataTypes.PersonalName,
        line: {
            level: 1,
            xref: "",
            tag: "NAME",
            lineVal: "M"
        },
        substructs: []
    }

    console.log(indi.toString())
    indi.addSubstructure(name);
    console.log("substruct added")

    
    
    dataset.write("./result.ged")

    const used = process.memoryUsage();
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }

}

function testAdd(){
    const gedcomString = "0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n0 @I1@ INDI\n1 SEX M\n0 TRLR\n"

    const gedcomParser = new GedcomParser();
    const dataset = gedcomParser.parseString(gedcomString);
    console.log(dataset.toString())

    const indi = dataset.getRecordByXref("I1")
    const name = {
        type: lineTypes.NO_XREF,
        lineValType: dataTypes.PersonalName,
        line: {
            level: 1,
            xref: "",
            tag: "SEXI",
            lineVal: "M"
        },
        substructs: []
    }
    indi.addSubstructure(name);
    indi.checkSyntax();

    //const gedcomString2 = dataset.toString();
    //const dataset2 = gedcomParser.parseString(gedcomString2);

    
    
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
