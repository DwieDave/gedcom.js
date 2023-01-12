import { expect } from "chai";
import forEach from "mocha-each";
import fs from "fs/promises"
import { diffChars } from "diff";

import { GedcomParser } from "../lib/GedcomParser.js";
import Dataset from "../lib/Dataset.js";
import readGedFile from "../lib/util/readGedFile.js";
import Structure from "../lib/util/ExportGedcomStructureClasses.js"
import { DatasetError } from "../lib/util/Errors.js";

describe('Test Family Class', () => {
    /*
    const gedcomParser = new GedcomParser();
    // Header
    let gedcomString = "\ufeff0 HEAD\n1 GEDC\n2 VERS 7.0\n";
    // Family @F1@
    gedcomString += "0 @F1@ FAM\n1 HUSB @I1@\n1 WIFE @I2@\n1 CHIL @I3@\n1 CHIL @I4@\n1 NCHI 2\n";
    // Family @F2@
    gedcomString += "0 @F2@ FAM\n1 HUSB @I1@\n2 PHRASE This is a TestPhrase\n1 CHIL @I3@\n2 PHRASE This is a TestPhrase\n1 CHIL @I4@\n2 PHRASE This is a TestPhrase\n1 NCHI 0\n";
    // Family @F3@
    gedcomString += "0 @F3@ FAM\n1 WIFE @I4@\n2 PHRASE This is a TestPhrase\n";
    // Individual @I1@
    gedcomString += "0 @I1@ INDI\n1 NAME Jane Doe\n1 FAMC @F1@\n";
    // Individual @I2@
    gedcomString += "0 @I2@ INDI\n1 NAME John Q\n1 SEX M\n"
    // Individual @I3@
    gedcomString += "0 @I3@ INDI\n1 NAME Mary /Roe/\n1 SEX F\n"
    // Individual @I3@
    gedcomString += "0 @I4@ INDI\n1 NAME Max Mustermann\n1 SEX F\n"
    // Trailer
    gedcomString += "0 TRLR\n";

    const dataset = gedcomParser.parseString(gedcomString);
    const familyF1 = dataset.getRecordByXref("@F1@");
    const familyF2 = dataset.getRecordByXref("@F2@");
    const familyF3 = dataset.getRecordByXref("@F3@");

    // ============================================================================
    // TEST getHusband() FUNCTION
    describe('#getHusband()', () => {
        it('Family @F1@: should have Husband @I1@ without PHRASE', () => {
            const result = familyF1.getHusband();
            expect(result.Husband.xref).to.equal("@I1@");
            expect(result.Phrase).to.equal("");
        });

        it('Family @F2@: should have Husband @I1@ with PHRASE "This is a TestPhrase"', () => {
            const result = familyF2.getHusband();
            expect(result.Husband.xref).to.equal("@I1@");
            expect(result.Phrase).to.equal("This is a TestPhrase");
        });

        it('Family @F3@: Husband should not be set (null expected)', () => {
            const result = familyF3.getHusband();
            expect(result).to.be.null;
        });
    });

    // ============================================================================
    // TEST getWife() FUNCTION
    describe('#getWife()', () => {
        it('Family @F1@: should have Wife @I2@ without PHRASE', () => {
            const result = familyF1.getWife();
            expect(result.Wife.xref).to.equal("@I2@");
            expect(result.Phrase).to.equal("");
        });

        it('Family @F2@: Wife should not be set (null expected)', () => {
            const result = familyF2.getWife();
            expect(result).to.be.null;
        });

        it('Family @F3@: should have Wife @I4@ with PHRASE "This is a TestPhrase"', () => {
            const result = familyF3.getWife();
            expect(result.Wife.xref).to.equal("@I4@");
            expect(result.Phrase).to.equal("This is a TestPhrase");
        });

        
    })

    // ============================================================================
    // TEST getChildren() FUNCTION
    describe('#getChildren()', () => {
        it('Family @F1@: should have Children @I3@ and @I4@ without PHRASE', () => {
            const result = familyF1.getChildren().Children;
            expect(result.length).to.equal(2);
            expect(result[0].Child.xref).to.equal("@I3@");
            expect(result[0].Phrase).to.equal("");
            expect(result[1].Child.xref).to.equal("@I4@");
            expect(result[1].Phrase).to.equal("");
        });

        it('Family @F2@: should have Children @I3@ and @I4@ with PHRASE "This is a TestPhrase"', () => {
            const result = familyF2.getChildren().Children;
            expect(result.length).to.equal(2);
            expect(result[0].Child.xref).to.equal("@I3@");
            expect(result[0].Phrase).to.equal("This is a TestPhrase");
            expect(result[1].Child.xref).to.equal("@I4@");
            expect(result[1].Phrase).to.equal("This is a TestPhrase");
        });

        it('Family @F3@: Children should not be set (null expected)', () => {
            const result = familyF3.getChildren();
            expect(result).to.be.null;
        });
    })

    // ============================================================================
    // TEST getNumberOfChildren() FUNCTION

    */
    
})