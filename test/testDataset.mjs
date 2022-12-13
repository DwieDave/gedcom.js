import { expect } from "chai";
import forEach from "mocha-each";
import fs from "fs/promises"
import { diffChars } from "diff";

import { NearleyParser } from "../lib/NearleyParser.js";
import Dataset from "../lib/Dataset.js";
import readGedFile from "../lib/helpers/readGedFile.js";
import Structure from "../lib/ExportGedcomStructureClasses.js"


describe('Test Dataset Class', () => {
    const nearleyParser = new NearleyParser();
    let gedcomString = "";
    let result = null;

    before(async () => {
        // suppress log in before function
        console.log = function () {}
        // parse maximal gedcom example file
        gedcomString = await readGedFile("test/sampleData/ExampleFamilySearchGEDCOMFiles/maximal70_without_extensions.ged");
        result = nearleyParser.parseString(gedcomString);
    });

    // ===============================================================================================================================================
    // GEDCOM READING AND WRITING
    describe('test if gedcom file is equivalent before and after parsing', () => {
        const path = "test/sampleData/ExampleFamilySearchGEDCOMFiles/";
        // correct files
        const gedFiles = [
            "escapes.ged",
            "long-url.ged",
            "maximal70_without_extensions.ged",
            "minimal70.ged",
            "remarriage1.ged",
            "same-sex-marriage.ged",
            "voidptr.ged"
        ];
            

        forEach(gedFiles)
        .it('#%s', async (fileName) => {
            // read Gedcom file as String
            const beforeParsing = await readGedFile(path + fileName);
            // parse Gedcom String and write it to temp.ged
            const dataset = nearleyParser.parseString(beforeParsing);
            await fs.writeFile(path + "temp.ged", "")
            await dataset.write(path + "temp.ged");
            // read temp.ged as String and compare it with original file
            const afterParsing = await readGedFile(path + "temp.ged");
            const test = diffChars(beforeParsing, afterParsing);

            // expect files to be equal
            expect(diffChars(beforeParsing, afterParsing)).to.have.lengthOf(1);
        });
       
        
    })

    // ===============================================================================================================================================
    // GEDCOM HEADER
    describe('Test Gedcom Header', () => {
        it('should contain a Header Record', () => {
            expect(result.getHeaderRecord()).to.be.instanceOf(Structure.Header);
        });
    });

    // ===============================================================================================================================================
    // GetRecordsByConstructor()
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
    // GetRecordsByXref()
    describe('Test "getRecordByXref()" with maximal FamilySearch GEDCOM 7.0 File', () => {
        // Family
        it('should contain Family Record @F1@', () => {
            expect(result.getRecordByXref("F1")).to.be.an.instanceOf(Structure.Family);
        });
        it('should not contain Family Record @F3@', () => {
            expect(result.getRecordByXref("F3")).to.be.null;
        });
        // Individual
        it('should contain Individual Record @I1@', () => {
            expect(result.getRecordByXref("I1")).to.be.an.instanceOf(Structure.Individual);
        });
        it('should not contain Individual Record @I5@', () => {
            expect(result.getRecordByXref("I5")).to.be.null;
        });
        // Multimedia
        it('should contain Multimedia Record @O1@', () => {
            expect(result.getRecordByXref("O1")).to.be.an.instanceOf(Structure.Multimedia);
        });
        it('should not contain Multimedia Record @O3@', () => {
            expect(result.getRecordByXref("O3")).to.be.null;
        });
        // Repository
        it('should contain Repository Record @R1@', () => {
            expect(result.getRecordByXref("R1")).to.be.an.instanceOf(Structure.Repository);
        });
        it('should not contain Repository Record @R3@', () => {
            expect(result.getRecordByXref("R3")).to.be.null;
        });
        // SharedNote
        it('should contain SharedNote Record @N1@', () => {
            expect(result.getRecordByXref("N1")).to.be.an.instanceOf(Structure.SharedNote);
        });
        it('should not contain SharedNote Record @N3@', () => {
            expect(result.getRecordByXref("N3")).to.be.null;
        });
        // Source
        it('should contain Source Record @S1@', () => {
            expect(result.getRecordByXref("S1")).to.be.an.instanceOf(Structure.Source);
        });
        it('should not contain Source Record @S3@', () => {
            expect(result.getRecordByXref("S3")).to.be.null;
        });
        // Submitter
        it('should contain Submitter Record @U1@', () => {
            expect(result.getRecordByXref("U1")).to.be.an.instanceOf(Structure.Submitter);
        });
        it('should not contain Submitter Record @U3@', () => {
            expect(result.getRecordByXref("U3")).to.be.null;
        });
    });

    

    
});

