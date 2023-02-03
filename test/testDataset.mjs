/* eslint-env mocha */
import { expect } from 'chai';
import forEach from 'mocha-each';
import fs from 'fs/promises';
import { diffChars } from 'diff';

import { GedcomParser } from '../lib/GedcomParser.js';
import Dataset from '../lib/Dataset.js';
import readGedFile from '../lib/util/readGedFile.js';
import Structure from '../lib/util/ExportGedcomStructureClasses.js';
import { DatasetError } from '../lib/util/Errors.js';

describe('Test Dataset Class', () => {
  const gedcomParser = new GedcomParser();
  let gedcomString = '';
  let result = null;

  before(async () => {
    // suppress log in before function
    console.log = function () {};
    // parse maximal gedcom example file
    gedcomString = await readGedFile('test/sampleData/ExampleFamilySearchGEDCOMFiles/maximal70_without_extensions.ged');
    result = gedcomParser.parseString(gedcomString);
  });

  // ===============================================================================================================================================
  // GEDCOM READING AND WRITING
  describe('test if gedcom file is equivalent before and after parsing', () => {
    const path = 'test/sampleData/ExampleFamilySearchGEDCOMFiles/';
    // correct files
    const gedFiles = [
      'escapes.ged',
      'long-url.ged',
      'maximal70_without_extensions.ged',
      'minimal70.ged',
      'remarriage1.ged',
      'same-sex-marriage.ged',
      'voidptr.ged'
    ];

    forEach(gedFiles)
      .it('#%s', async (fileName) => {
        // read Gedcom file as String
        const beforeParsing = await readGedFile(path + fileName);
        // parse Gedcom String and write it to temp.ged
        const dataset = gedcomParser.parseString(beforeParsing);
        await fs.writeFile(path + 'temp.ged', '');
        await dataset.write(path + 'temp.ged');
        // read temp.ged as String and compare it with original file
        const afterParsing = await readGedFile(path + 'temp.ged');

        // expect files to be equal
        expect(diffChars(beforeParsing, afterParsing)).to.have.lengthOf(1);
      });
  });

  // ===============================================================================================================================================
  // GEDCOM HEADER
  describe('Test Gedcom Header', () => {
    it('should contain a Header Record', () => {
      expect(result.getHeaderRecord()).to.be.instanceOf(Structure.Header);
    });
  });

  // ===============================================================================================================================================
  // TEST GetRecordsByConstructor()
  describe('Test "getRecordsByConstructor()" with maximal FamilySearch GEDCOM 7.0 File', () => {
    it('should contain two Family Records', () => {
      expect(result.getFamilyRecords()).to.have.lengthOf(2);
    });
    it('should contain four Individual Records', () => {
      expect(result.getIndividualRecords()).to.have.lengthOf(4);
    });
    it('should contain two Multimedia Records', () => {
      expect(result.getMultimediaRecords()).to.have.lengthOf(2);
    });
    it('should contain two Repository Records', () => {
      expect(result.getRepositoryRecords()).to.have.lengthOf(2);
    });
    it('should contain two SharedNote Records', () => {
      expect(result.getSharedNoteRecords()).to.have.lengthOf(2);
    });
    it('should contain two Source Records', () => {
      expect(result.getSourceRecords()).to.have.lengthOf(2);
    });
    it('should contain two Submitter Records', () => {
      expect(result.getSubmitterRecords()).to.have.lengthOf(2);
    });
  });

  // ===============================================================================================================================================
  // TEST GetRecordsByXref()
  describe('Test "getRecordByXref()" with maximal FamilySearch GEDCOM 7.0 File', () => {
    const shouldContain = [
      ['@F1@', Structure.Family],
      ['@I1@', Structure.Individual],
      ['@O1@', Structure.Multimedia],
      ['@R1@', Structure.Repository],
      ['@N1@', Structure.SharedNote],
      ['@S1@', Structure.Source],
      ['@U1@', Structure.Submitter]
    ];
    const shouldNotContain = [
      '@F3@', '@I5@', '@O4@', '@R6@', '@N7@', '@S8@', '@U9@'
    ];

    // Dataset should contain records with given Xrefs
    forEach(shouldContain)
      .it('should contain Family Record @%s@', async (xref, structureType) => {
        expect(result.getRecordByXref(xref)).to.be.an.instanceOf(structureType);
      });

    // Dataset should NOT contain records with given Xrefs
    forEach(shouldNotContain)
      .it('should NOT contain Family Record @%s@', async (xref) => {
        expect(result.getRecordByXref(xref)).to.be.undefined;
      });
  });

  // ===============================================================================================================================================
  // TEST duplicated xref detection
  describe('Test duplicated xref detection', () => {
    const path = 'test/sampleData/DatasetTest/DuplicatedXref/';
    const noDuplicate = [
      'noDuplicatedXrefsMinimal.ged',
      'noDuplicatedXrefsMaximal.ged'
    ];
    const duplicates = [
      'oneDuplicatedXrefMinimal.ged',
      'oneDuplicatedXrefMaximal.ged',
      'multipleDuplicatedXrefsMinimal.ged',
      'multipleDuplicatedXrefsMaximal.ged'
    ];

    // Parse Gedcom files without duplicated xrefs
    forEach(noDuplicate)
      .it('#%s -> should return not-empty instance of Dataset', async (fileName) => {
        // read Gedcom file as String
        const gedcomString = await readGedFile(path + fileName);
        // parse Gedcom String
        expect(gedcomParser.parseString(gedcomString)).to.be.instanceOf(Dataset);
      });

    // Parse Gedcom files with one or more duplicated xrefs
    forEach(duplicates)
      .it('#%s -> should throw DatasetError', async (fileName) => {
        // read Gedcom file as String
        const gedcomString = await readGedFile(path + fileName);
        // parse Gedcom String
        expect(() => gedcomParser.parseString(gedcomString)).to.throw(DatasetError);
      });
  });

  // ===============================================================================================================================================
  // TEST missing xref detection
  describe('Test missing xref detection', () => {
    const path = 'test/sampleData/DatasetTest/MissingXref/';
    const files = [
      'missingF1.ged',
      'missingI1.ged',
      'missingN1.ged',
      'missingO1.ged',
      'missingR1.ged',
      'missingS1.ged',
      'missingU1.ged'
    ];

    // Parse Gedcom files with missing Xrefs
    forEach(files)
      .it('#%s -> should throw DatasetError', async (fileName) => {
        // read Gedcom file as String
        const gedcomString = await readGedFile(path + fileName);
        // parse Gedcom String
        expect(() => gedcomParser.parseString(gedcomString)).to.throw(DatasetError);
      });
  });

  // ===============================================================================================================================================
  // TEST detection of byte-order-mark
  describe('Test detection of byte-order-mark', () => {
    const path = 'test/sampleData/DatasetTest/BOMdetection/';
    const BOMset = [
      'BOMsetMinimal.ged',
      'BOMsetMaximal.ged'
    ];
    const noBOM = [
      'noBOMMinimal.ged',
      'noBOMMaximal.ged'
    ];

    // Parse Gedcom files with byte-order-mark as first character of .ged file
    forEach(BOMset)
      .it('#%s -> BOMset should be true', async (fileName) => {
        // read Gedcom file as String
        const gedcomString = await readGedFile(path + fileName);
        // parse Gedcom String
        const dataset = gedcomParser.parseString(gedcomString);
        expect(dataset.BOMset).to.be.true;
      });

    // Parse Gedcom files without byte-order-mark as first character of .ged file
    forEach(noBOM)
      .it('#%s -> BOMset should be false', async (fileName) => {
        const gedcomString = await readGedFile(path + fileName);
        // parse Gedcom String
        const dataset = gedcomParser.parseString(gedcomString);
        expect(dataset.BOMset).to.be.false;
      });
  });

  // ===============================================================================================================================================
  // TEST detection of EOL-Characters
  describe('Test detection of EOL-Characters', () => {
    const input = [
      ['Gedcom String with \\n EOL characters only', 'false', '0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n0 TRLR\n'],
      ['Gedcom String with \\r EOL characters only', 'false', '0 HEAD\r1 GEDC\r2 VERS 7.0\r0 @F1@ FAM\r0 TRLR\r'],
      ['Gedcom String with \\r\\n EOL characters only', 'false', '0 HEAD\r\n1 GEDC\r\n2 VERS 7.0\r\n0 @F1@ FAM\r\n0 TRLR\r\n'],
      ['Gedcom String with multiple EOL characters (\\n, \\r)', 'true', '0 HEAD\n1 GEDC\n2 VERS 7.0\r0 @F1@ FAM\r0 TRLR\r'],
      ['Gedcom String with multiple EOL characters (\\n, \\r\\n)', 'true', '0 HEAD\n1 GEDC\n2 VERS 7.0\r\n0 @F1@ FAM\r\n0 TRLR\r\n'],
      ['Gedcom String with multiple EOL characters (\\r, \\r\\n)', 'true', '0 HEAD\r1 GEDC\r2 VERS 7.0\r\n0 @F1@ FAM\r\n0 TRLR\r'],
      ['Gedcom String with multiple EOL characters (\\n, \\r, \\r\\n)', 'true', '0 HEAD\n1 GEDC\n2 VERS 7.0\r\n0 @F1@ FAM\r0 TRLR\r']
    ];

    forEach(input)
      .it('%s -> multipleEOLCharacters should be %s', (name, value, str) => {
        // parse Gedcom String
        const dataset = gedcomParser.parseString(str);
        if (value === 'true') {
          expect(dataset.multipleEOLCharacters).to.be.true;
        } else {
          expect(dataset.multipleEOLCharacters).to.be.false;
        }
      });
  });
});
