// a set of structures conforming to The FamilySearch GEDCOM Specification is called a FamilySearch GEDCOM dataset

import { writeGedFile } from "./helpers/writeGedFile.mjs";
import { Family } from "./structure/Family.mjs";
import { Individual } from "./structure/Individual.mjs";
import { GedcomSyntaxError } from "./Syntax.mjs";

export class Dataset {
    constructor() {
        // every dataset must contain a HEADER and a TLRL 
        // the order of these is significant: the HEADER must come first and TRLR must be last, with any RECORDs in between.
        this.header = null;
        this.trlr = null;

        // every structure is either a record, meaning it is not contained in any other structure’s collection of substructures, 
        // or it is a substructure of exactly 1 other structure
        this.records = [];

        // last parsed Structure of this dataset
        this.lastStructure = null;
    }


    // print all records from this dataset
    printRecords() {
        for (const record of this.records) {
            record.print();
        }
    }

    // adds a structure to the dataset
    addStructure(structure) {
        // integer representation of levels
        const structureLevelInt = parseInt(structure.level);
        const lastStructureLevelInt = this.lastStructure ? parseInt(this.lastStructure.level) : 0;

        // if the level is 0, it is a record
        if (structureLevelInt == 0) {
            this.records.push(structure);
            this.lastStructure = structure;
        } else {
            // if the level is smaller, the new parsed structure stands above the last parsed structure
            if (structureLevelInt < lastStructureLevelInt) {
                this.lastStructure = this.lastStructure.superstructure;
                this.addStructure(structure);
                // if the level is equal, the new parsed structure is a substructure of the the last parsed structures superstructure
            } else if (structureLevelInt == lastStructureLevelInt) {
                this.lastStructure.superstructure.addSubstructure(structure);
                structure.superstructure = this.lastStructure.superstructure;
                this.lastStructure = structure;
                // if the level is one greater, the new parsed structure is a direct substructure of the last parsed structure
            } else if (structureLevelInt == lastStructureLevelInt + 1) {
                this.lastStructure.addSubstructure(structure);
                structure.superstructure = this.lastStructure;
                this.lastStructure = structure;
                // if the level is more than one greater, it's a syntax error 
            } else if (structureLevelInt > lastStructureLevelInt + 1) {
                throw new GedcomSyntaxError(structure);
            }
        }
    }

    // return all individuals included in this dataset
    getIndividuals() {
        const individuals = [];
        for (const record of this.records) {
            if (record instanceof Individual) individuals.push(record);
        }
        return individuals;
    }

    // search for individual with given xref
    getIndividual(xref) {
        for (const record of this.records) {
            if (record instanceof Individual && record.xref == xref) return record;
        }
    }

    // return all families included in this dataset
    getFamilies() {
        const families = [];
        for (const record of this.records) {
            if (record instanceof Family) families.push(record);
        }
        return families;
    }

    // search for family with given xref
    getFamily(xref) {
        for (const record of this.records) {
            if (record instanceof Family && record.xref == xref) return record;
        }
    }

    toString() {
        let string = "";
        for (const record of this.records) {
            if (string != "") string += "\n";
            string += record.toString();
        }
        return string;
    }

    async write(path) {
        await writeGedFile(path, this.toString());
    }
}