import { expect } from "chai";
import { NearleyParser } from "../lib/NearleyParser.js";
import Dataset from "../lib/Dataset.js";
import Structure from "../lib/ExportGedcomStructureClasses.js";
import readGedFile from "../lib/helpers/readGedFile.js";
import { ParsingError } from "../lib/Errors.js";

describe('Test Nearley Parser', () => {

    const nearleyParser = new NearleyParser();

    describe('Parsing correct Example FamilySearch GEDCOM 7.0 Files (without extensions)', () => {
        const path = "test/sampleData/ExampleFamilySearchGEDCOMFiles/"
        it('#escapes.ged', async () => {
            const gedcomString = await readGedFile(path + "escapes.ged");
            expect(nearleyParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
        });
        it('#long-url.ged', async () => {
            const gedcomString = await readGedFile(path + "long-url.ged");
            expect(nearleyParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
        });
        it('#minimal70.ged', async () => {
            const gedcomString = await readGedFile(path + "minimal70.ged");
            expect(nearleyParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
        });
        it('#remarriage1.ged', async () => {
            const gedcomString = await readGedFile(path + "remarriage1.ged");
            expect(nearleyParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
        });
        it('#same-sex-marriage.ged', async () => {
            const gedcomString = await readGedFile(path + "same-sex-marriage.ged");
            expect(nearleyParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
        });
        it('#voidptr.ged', async () => {
            const gedcomString = await readGedFile(path + "voidptr.ged");
            expect(nearleyParser.parseString(gedcomString)).to.be.instanceOf(Dataset)
        });
    });

    describe('Parsing incorrect Example FamilySearch GEDCOM 7.0 Files (without extensions)', () => {
        const path = "test/sampleData/ExampleFamilySearchGEDCOMFiles/"
        it('#remarriage2.ged should throw ParsingError', async () => {
            const gedcomString = await readGedFile(path + "remarriage2.ged");
            expect(() => nearleyParser.parseString(gedcomString)).to.throw(ParsingError)
        });
        it('#spaces.ged should throw ParsingError', async () => {
            const gedcomString = await readGedFile(path + "spaces.ged");
            expect(() => nearleyParser.parseString(gedcomString)).to.throw(ParsingError)
        });
    });
});

