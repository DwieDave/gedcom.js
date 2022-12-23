const readGedFile = require('./util/readGedFile.js');
const {lineTypes, dataTypes} = require('./util/Constants.js');
const {GedcomParser} = require('./GedcomParser.js');
const process = require('process')


async function main() {
    // string representation of gedcom file
    const gedcomString = await readGedFile("test/sampleData/ExampleFamilySearchGEDCOMFiles/remarriage1.ged");
    //const gedcomString = await readGedFile("test/sampleData/StructureTest/addStructures.ged");

    //testGedcomParser("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n0 @I1@ INDI\n1 SEX M\n0 TRLR\n");
    //testGedcomParser(gedcomString);
    //newTest();
    const gedcomParser = new GedcomParser();
    const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n1 MARR\n2 DATE 1998\n1 FACT Woodworking\n2 TYPE Skills\n0 @I1@ INDI\n1 FAMC @F1@\n0 TRLR\n");
    console.log(dataset.toString());
    const fam = dataset.getRecordByXref("F1");
    const toBeRemoved = fam.getSubstructuresByTag("TYPE", true)[0]
    dataset.removeStructure(toBeRemoved)
    console.log(dataset.toString());

    

}

function newTest(){
    const gedcomParser = new GedcomParser();
    const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
    console.log(dataset.toString());
    const before = dataset.toString();
    const fam = dataset.getRecordByXref("F1");
    const indi1 = dataset.getRecordByXref("I1");
    const indi2 = dataset.getRecordByXref("I2");
    const husb = fam.getHusband();
    
    try{
        let newIndiNameType = {
            uri: "g7:NAME-TYPE",
            lineVal: "AKA"
        }
        let newIndiName = {
            uri: "g7:INDI-NAME",
            lineVal: "McMarius",
            substructs: [newIndiNameType]
        }
        indi1.addSubstructure(newIndiName)
    }catch(e){
        console.log(e.message)
    }
    
    console.log(dataset.toString());

    let newSex = {
        uri: "g7:SEX",
        lineVal: "Male"
    }

    let newHusb = {
        uri: "g7:FAM-HUSB",
        lineVal: "@I2@"
    }

    let newFam = {
        uri: "g7:record-FAM",
        xref: "F3",
        substructs: [newSex]
    }
    try{
        dataset.addRecord(newFam);
    }catch(e){
        console.log("error")
    }
    

    console.log(dataset.toString());

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
