import assert from "assert"
import { Parser } from '../lib/Parser.mjs';
import { readGedFile } from '../lib/helpers/readGedFile.mjs';



export async function testGedcomFam(){
  // initialize the parser 
  const parser = new Parser();

  // string representation of gedcom file
  const gedcomString = await readGedFile("./sampleData/familyTest.ged");

  // parse a gedcom file
  let dataset = parser.parseString(gedcomString);

  // check syntax of family F1
  const familyF1 = dataset.getFamily("F1");

    describe('Test Family with familyTest.ged file', () => {
      describe('FAM record with Xref @F1@', () => {
        describe('#getHusbandXref()', () => {
          it('should return I1', () => {
            assert.equal(familyF1.getHusbandXref(), 'I1');
          });
        });
        describe('#getWifeXref()', () => {
          it('should return I2', () => {
            assert.equal(familyF1.getWifeXref(), 'I2');
          });
        });
      })
          
      });
}

