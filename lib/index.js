const { GedcomParser } = require('./GedcomParser.js');

async function main () {
  const gedcomParser = new GedcomParser();

  // parse gedcom-file
  console.log('\nPARSE GEDCOM-FILE:');
  // const dataset = await gedcomParser.parseGedFile("test/sampleData/ExampleFamilySearchGEDCOMFiles/maximal70_without_extensions.ged");
  const dataset = await gedcomParser.parseGedFile('test/sampleData/ausarbeitung.ged');
  const famF1 = dataset.getRecordByXref('@F1@');
  const nchi = famF1.getChildrenInformation();
  const marrInfo = famF1.getMarriageInformation();
  console.log(famF1.getSubstructuresByTag("MARR")[0].getSubstructuresByTag("DATE")[0].getDateObject());
  const div = {
    uri: 'g7:DIV',
    substructs: [{
      uri: 'g7:DATE',
      lineVal: '28 DEC 1963',
    }]
  };
  famF1.addSubstructure(div);
  console.log(famF1.toString())
}


main();
