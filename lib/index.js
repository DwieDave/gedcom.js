const readGedFile = require('./util/readGedFile.js');
const {GedcomParser} = require('./GedcomParser.js');


async function main() {
    
    const gedcomParser = new GedcomParser();

    // parse gedcom-file
    console.log("\nPARSE GEDCOM-FILE:");
    const dataset = await gedcomParser.parseGedFile("test/sampleData/StructureTest/addStructures.ged");

    // print string-representation
    console.log("\nSTRING REPRESENTATION:");
    console.log(dataset.toString());


    // ===================================================================================================
    // add name to INDI
    console.log("\nADD NAME TO INDIVIDUAL @I1@:");
    const indi1 = dataset.getRecordByXref("I1");
    const newIndiNameType = {
        uri: "g7:NAME-TYPE",
        lineVal: "AKA"
    }
    const newIndiName = {
        uri: "g7:INDI-NAME",
        lineVal: "Marius",
        substructs: [newIndiNameType]
    }
    indi1.addSubstructure(newIndiName)

    // print string-representation
    console.log("\nSTRING REPRESENTATION:");
    console.log(dataset.toString());


    // ===================================================================================================
    // try to remove structure CHILD from Family @I1@
    const fam = dataset.getRecordByXref("F1");
    console.log("\nTRY TO REMOVE STRUCTURE CHILD FROM FAMILY @F1@:");
    const toBeRemoved1 = fam.getChildren()[0];
    dataset.removeStructure(toBeRemoved1)

    // print string-representation
    console.log("\nSTRING REPRESENTATION:");
    console.log(dataset.toString());


    // ===================================================================================================
    // try to remove required structure
    console.log("\nTRY TO REMOVE REQUIRED STRUCTURE TYPE FROM FACT-STRUCTURE")
    const toBeRemoved2 = fam.getSubstructuresByTag("TYPE", true)[0]
    dataset.removeStructure(toBeRemoved2)

    // print string-representation
    console.log("\nSTRING REPRESENTATION:");
    console.log(dataset.toString());


    // ===================================================================================================
    // try to remove structure so that superstructure is empty
    //  -> If removing a structure leaves its superstructure with no payload and no substructures, the superstructure should also be removed
    console.log("\nTRY TO REMOVE STRUCTURE DATE SO THAT SUPERSTRUCTURE IS EMPTY:")
    const toBeRemoved3 = fam.getSubstructuresByTag("DATE", true)[0]
    dataset.removeStructure(toBeRemoved3)

    // print string-representation
    console.log("\nSTRING REPRESENTATION:");
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

main();
