const readGedFile = require('./util/readGedFile.js');
const {GedcomParser} = require('./GedcomParser.js');


async function main() {
    
    const gedcomParser = new GedcomParser();

    // parse gedcom-file
    console.log("\nPARSE GEDCOM-FILE:");
    const dataset = await gedcomParser.parseGedFile("test/sampleData/test.ged");
    console.log(dataset.toString())
    const fam = dataset.getRecordByXref("@F1@");
    const test = fam.getChildren();
    console.log(fam.getFamilyResidence())
    

   
    



    

}

async function newTest(){
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
    console.log(indi1.getPossibleSubstructs());


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

main();
