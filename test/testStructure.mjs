import { expect } from "chai";
import forEach from "mocha-each";
import fs from "fs/promises"
import { diffChars } from "diff";

import { GedcomParser } from "../lib/GedcomParser.js";
import Dataset from "../lib/Dataset.js";
import readGedFile from "../lib/util/readGedFile.js";
import Structure from "../lib/util/ExportGedcomStructureClasses.js"
import { GedcomSyntaxError } from "../lib/util/Errors.js";
import constants from "../lib/util/Constants.js";


describe('Test Structure Class', () => {
    const gedcomParser = new GedcomParser();
    let gedcomString = "";
    let dataset = null;

    before(async () => {
        // suppress log in before function
        console.log = function () {}
        // parse maximal gedcom example file
        gedcomString = await readGedFile("test/sampleData/ExampleFamilySearchGEDCOMFiles/maximal70_without_extensions.ged");
        dataset = gedcomParser.parseString(gedcomString);
    });

    // ===============================================================================================================================================
    // checkSyntax() method 
    describe('Test checkSyntax() method of record Structure-Classes with Maximal-Gedcom-File', () => {
        const records = [
            ["Family", ["F1", "F2"]], 
            ["Individual", ["I1", "I2", "I3", "I4"]], 
            ["Multimedia", ["O1", "O2"]], 
            ["Repository", ["R1", "R2"]], 
            ["SharedNote", ["N1", "N2"]], 
            ["Source", ["S1", "S2"]],
            ["Submitter", ["U1", "U2"]]
        ]
        
        forEach(records)
        .describe('Call checkSyntax() for %s Records', (recordName, xrefs) => {
            forEach(xrefs)
            .it('#%s', (xref) => {
                expect(() => dataset.getRecordByXref(xref).checkSyntax()).to.not.throw(GedcomSyntaxError);
            })
        })
    });

    // ===============================================================================================================================================
    // Find Substructures by TAG
    describe('Find Substructures by TAG in Dataset', () => {
        let gedcomString = "";
        let dataset = null;

        const searchForTag = [
            ["Individual", [
                ["NAME", "I1", true, 4],
                ["NAME", "I1", false, 4],
                ["TYPE", "I1", true, 2],
                ["TYPE", "I1", false, 0],
                ["PHRASE", "I1", true, 2],
                ["PHRASE", "I1", false, 0],
                ["SEX", "I1", true, 1],
                ["SEX", "I1", false, 1]
            ]],
        ]

        before(async () => {
            // suppress log in before function
            console.log = function () {}
            // parse maximal gedcom example file
            gedcomString = await readGedFile("test/sampleData/StructureTest/findStructures.ged");
            dataset = gedcomParser.parseString(gedcomString);
        });

        forEach(searchForTag)
        .describe('#%s Structure', (structureName, input) => {

            forEach(input)
            .it('Search for Tag "%s" in %s, recursive %s -> expect %s results', (tag, xref, recursive, count) => {
                const Individual = dataset.getRecordByXref(xref);
                expect(Individual.getSubstructuresByTag(tag, recursive)).to.have.lengthOf(count);
            })
        })
        
        
    });

    // ===============================================================================================================================================
    // Find Substructures by LINEVAL
    describe('Find Substructures by Lineval in Dataset', () => {
        let gedcomString = "";
        let dataset = null;

        const searchForLineVal = [
            ["LineVal doesn't occur", [
                ["Marius Mueller ", "I1", true, false, 0],
                ["Marius Mueller ", "I1", false, false, 0],
                ["Marius Mueller ", "I1", true, constants.dataTypes.PersonalName, 0],
                ["Marius Mueller ", "I1", false, constants.dataTypes.PersonalName, 0],
            ]],
            ["LineVal occurs one time", [
                ["Marius Mueller", "I1", true, false, 1],
                ["Marius Mueller", "I1", false, false, 1],
                ["Marius Mueller", "I1", true, constants.dataTypes.PersonalName, 1],
                ["Marius Mueller", "I1", false, constants.dataTypes.PersonalName, 1],
            ]],
            ["LineVal occurs multiple times", [
                ["Jule Mueller", "I1", true, false, 2],
                ["Jule Mueller", "I1", false, false, 2],
                ["Jule Mueller", "I1", true, constants.dataTypes.PersonalName, 2],
                ["Jule Mueller", "I1", false, constants.dataTypes.PersonalName, 2],
            ]],
            ["LineVal occurs on higher level", [
                ["Hallo Welt", "I1", true, false, 1],
                ["Hallo Welt", "I1", false, false, 0],
                ["Hallo Welt", "I1", true, constants.dataTypes.Text, 1],
                ["Hallo Welt", "I1", false, constants.dataTypes.Text, 0],
            ]],
            ["LineVal occurs multiple times, but with differen Datatypes", [
                ["M", "I1", true, false, 2],
                ["M", "I1", false, false, 1],
                ["M", "I1", true, constants.dataTypes.Text, 1],
                ["M", "I1", false, constants.dataTypes.Text, 0],
                ["M", "I1", true, constants.dataTypes.Enum, 1],
                ["M", "I1", false, constants.dataTypes.Enum, 1],
            ]],
            
           
        ]

        before(async () => {
            // suppress log in before function
            console.log = function () {}
            // parse maximal gedcom example file
            gedcomString = await readGedFile("test/sampleData/StructureTest/findStructures.ged");
            dataset = gedcomParser.parseString(gedcomString);
        });

        forEach(searchForLineVal)
        .describe('#%s', (structureName, input) => {

            forEach(input)
            .it('Search for LineVal "%s" in %s, recursive %s, dataType %s -> expect %s results', (tag, xref, recursive, dataType = false, count) => {
                const Individual = dataset.getRecordByXref(xref);
                expect(Individual.getSubstructuresByLineVal(tag, recursive, dataType)).to.have.lengthOf(count);
            })
        })
        
        
    });
    


});
