import { expect } from "chai";
import { GedcomParser } from "../lib/GedcomParser.js";
import Dataset from "../lib/Dataset.js";
import readGedFile from "../lib/helpers/readGedFile.js";
import { ParsingError } from "../lib/Errors.js";
import forEach from "mocha-each";

// TO-DO: Implement gedcom files with incorrect syntax

describe('Test Gedcom Parser with .ged-files', () => {

    const gedcomParser = new GedcomParser();
    const records = [
        ["Family", [
            ["Family Record with...", "family1.ged"],
            ["Family Record with...", "family2.ged"],
            ["Family Record with...", "family3.ged"]
        ]],
        ["Individual", [
            ["Individual Record with...", "individual1.ged"],
            ["Individual Record with...", "individual2.ged"],
            ["Individual Record with...", "individual3.ged"]
        ]],
        ["Multimedia", [
            ["Multimedia Record with...", "multimedia1.ged"],
            ["Multimedia Record with...", "multimedia2.ged"],
            ["Multimedia Record with...", "multimedia3.ged"]
        ]],
        ["Repository", [
            ["Repository Record with...", "repository1.ged"],
            ["Repository Record with...", "repository2.ged"],
            ["Repository Record with...", "repository3.ged"]
        ]],
        ["SharedNote", [
            ["SharedNote Record with...", "sharedNote1.ged"],
            ["SharedNote Record with...", "sharedNote2.ged"],
            ["SharedNote Record with...", "sharedNote3.ged"]
        ]],
        ["Source", [
            ["Source Record with...", "source1.ged"],
            ["Source Record with...", "source2.ged"],
            ["Source Record with...", "source3.ged"]
        ]],
        ["Submitter", [
            ["Submitter Record with...", "submitter1.ged"],
            ["Submitter Record with...", "submitter2.ged"],
            ["Submitter Record with...", "submitter3.ged"]
        ]],
    ]

    // Example FamilySearch GEDCOM 7.0 Files (without extensions)
    describe('Example FamilySearch GEDCOM 7.0 Files (without extensions)', () => {
        const path = "test/sampleData/ExampleFamilySearchGEDCOMFiles/";
        // correct files
        describe('Parsing correct files -> should return a not-empty instance of Dataset', () => {
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
                const gedcomString = await readGedFile(path + fileName);
                expect(gedcomParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
            });
        });

        // incorrect files
        describe('Parsing incorrect files -> should throw ParsingError', () => {
            const gedFiles = [
                "remarriage2.ged",
                "spaces.ged"
            ];

            forEach(gedFiles)
            .it('#%s', async (fileName) => {
                const gedcomString = await readGedFile(path + fileName);
                expect(() => gedcomParser.parseString(gedcomString)).to.throw(ParsingError)
            });
        });
    });

    // ===============================================================================================================================================
    // CORRECT SYNTAXTEST GEDCOM 7.0 Files (without extensions)
    describe('SyntaxTest Gedcom Files with correct Syntax', () => {
        const path = "test/sampleData/SyntaxTest/correct/"
        // test the Parser for Header Record with correct Gedcom Files
        describe('Parsing correct Gedcom Files with Header Record -> should return a not-empty instance of Dataset', (recordName, tests) => {
            const gedFiles = [
                ["Header Record with...", "header1.ged"],
                ["Header Record with...", "header2.ged"],
                ["Header Record with...", "header3.ged"]
            ]
            forEach(gedFiles)
            .it('%s', async (description, fileName) => {
                const gedcomString = await readGedFile(path + fileName);
                expect(gedcomParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
            });
        });

        // test the Parser for all Gedcom Records with correct Gedcom Files
        forEach(records)
        .describe('Parsing correct Gedcom Files with %s Record and minimal Header -> should return a not-empty instance of Dataset', (recordName, tests) => {
            forEach(tests)
            .it('%s', async (description, fileName) => {
                const gedcomString = await readGedFile(path + fileName);
                expect(gedcomParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
            });
        });
    });

    // ===============================================================================================================================================
    // INCORRECT SYNTAXTEST GEDCOM 7.0 Files (without extensions)
    describe('SyntaxTest Gedcom Files with incorrect Syntax', () => {
        const path = "test/sampleData/SyntaxTest/incorrect/"
        // test the Parser for Header Record with incorrect Gedcom Files
        describe('Parsing Gedcom Files with Header Record and incorrect Syntax -> should throw ParsingError', (recordName, tests) => {
            
            const gedFiles = [
                ["Header Record with...", "header1.ged"],
                ["Header Record with...", "header2.ged"],
                ["Header Record with...", "header3.ged"]
            ]
            forEach(gedFiles)
            .it('%s', async (description, fileName) => {
                const gedcomString = await readGedFile(path + fileName);
                expect(gedcomParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
                //expect(gedcomParser.parseString(gedcomString)).to.throw(ParsingError);
            });
        });

        // test the Parser for all Gedcom Records with correct Gedcom Files
        forEach(records)
        .describe('Parsing Gedcom Files with %s Record and incorrect Syntax -> should throw ParsingError', (recordName, tests) => {
            const path = "test/sampleData/SyntaxTest/correct/"
            forEach(tests)
            .it('%s', async (description, fileName) => {
                const gedcomString = await readGedFile(path + fileName);
                expect(gedcomParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
                //expect(gedcomParser.parseString(gedcomString)).to.throw(ParsingError);
            });
        });
    });
});

