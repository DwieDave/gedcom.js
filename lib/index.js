const { GedcomParser } = require('./GedcomParser.js');

async function main () {
  const gedcomParser = new GedcomParser();

  // parse gedcom-file
  console.log('\nPARSE GEDCOM-FILE:');
  // const dataset = await gedcomParser.parseGedFile("test/sampleData/ExampleFamilySearchGEDCOMFiles/maximal70_without_extensions.ged");
  const dataset = await gedcomParser.parseGedFile('test/sampleData/test.ged');
  console.log(dataset.toString());
  const fam = dataset.getRecordByXref('@F1@');
  const restriction = fam.getRestriction();
  const husb = fam.getHusband();
  const wife = fam.getWife();
  const children = fam.getChildren();
  const familyMembers = fam.getFamilyMembers();
  const nchi = fam.getChildrenInformation();
  const residence = fam.getFamilyResidence();
  const famFacts = fam.getFamilyFacts();
  const marriageInformation = fam.getMarriageInformation();
  const events = fam.getFamilyEvents();
  const assos = fam.getAssociatedIndividuals();
  const ids = fam.getIdentifiers();
  const creationDate = fam.getCreationDate();
  const changeDate = fam.getChangeDate();
  //console.log(changeDate);

  const dateObj = dataset.getRecordByXref('@I3@').getSubstructuresByTag("DEAT")[0].getSubstructuresByTag("DATE")[0].getDateObject();
  console.log(dateObj);

  // console.log(JSON.stringify(events, null, 2));
  // console.log(residence)

  //newTest();
}

async function newTest () {
  const gedcomParser = new GedcomParser();

  // parse gedcom-file
  console.log('\nPARSE GEDCOM-FILE:');
  const dataset = await gedcomParser.parseGedFile('test/sampleData/StructureTest/addStructures.ged');

  // print string-representation
  console.log('\nSTRING REPRESENTATION:');
  console.log(dataset.toString());

  // ===================================================================================================
  // add name to INDI
  console.log('\nADD NAME TO INDIVIDUAL @I1@:');
  const indi1 = dataset.getRecordByXref('@I1@');
  const newIndiNameType = {
    uri: 'g7:NAME-TYPE',
    lineVal: 'AKA'
  };
  const newIndiName = {
    uri: 'g7:INDI-NAME',
    lineVal: 'Marius',
    substructs: [newIndiNameType]
  };
  indi1.addSubstructure(newIndiName);

  // print string-representation
  console.log('\nSTRING REPRESENTATION:');
  console.log(dataset.toString());
  console.log(indi1.getPossibleSubstructs());

  // ===================================================================================================
  // try to remove structure CHILD from Family @I1@
  const fam = dataset.getRecordByXref('@F1@');
  console.log('\nTRY TO REMOVE STRUCTURE CHILD FROM FAMILY @F1@:');
  const toBeRemoved1 = fam.getChildren()[0];
  dataset.removeStructure(toBeRemoved1.child);

  // print string-representation
  console.log('\nSTRING REPRESENTATION:');
  console.log(dataset.toString());

  // ===================================================================================================
  // try to remove required structure
  console.log('\nTRY TO REMOVE REQUIRED STRUCTURE TYPE FROM FACT-STRUCTURE');
  const toBeRemoved2 = fam.getSubstructuresByTag('TYPE', true)[0];
  dataset.removeStructure(toBeRemoved2);

  // print string-representation
  console.log('\nSTRING REPRESENTATION:');
  console.log(dataset.toString());

  // ===================================================================================================
  // try to remove structure so that superstructure is empty
  //  -> If removing a structure leaves its superstructure with no payload and no substructures, the superstructure should also be removed
  console.log('\nTRY TO REMOVE STRUCTURE DATE SO THAT SUPERSTRUCTURE IS EMPTY:');
  const toBeRemoved3 = fam.getSubstructuresByTag('DATE', true)[0];
  dataset.removeStructure(toBeRemoved3);

  // print string-representation
  console.log('\nSTRING REPRESENTATION:');
  console.log(dataset.toString());
}

main();
