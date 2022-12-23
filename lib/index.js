const readGedFile = require('./util/readGedFile.js');
const {GedcomParser} = require('./GedcomParser.js');


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

    const gedcomParser2 = new GedcomParser();
    const dataset2 = await gedcomParser2.parseGedFile("test/sampleData/ExampleFamilySearchGEDCOMFiles/remarriage1.ged");
    console.log(dataset2.toString());



    

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

main();
