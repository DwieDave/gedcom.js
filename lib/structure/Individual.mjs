// The individual record is a compilation of facts or hypothesized facts about an individual.
// These facts may come from multiple sources.

import { Structure } from "./Structure.mjs";
import { GedcomTags, GedcomEnumSetSex, GedcomSyntaxError } from "../Syntax.mjs";

export class Individual extends Structure {
    constructor(line) {
        super(line);
    }

    // TO-DO: add detection for RESN tag: 
    // The RESN structure is provided to assist software in filtering data that should not be exported or otherwise used in a particular context. 
    // It is recommended that tools provide an interface to allow users to filter data on export such that certain RESN structure payload entries 
    // result in the RESN structure and its superstructure being removed from the export.

    // 
    getName() {
        return this.getTag(GedcomTags.NAME).value;
    }

    // An enumerated value that indicates the sex of the individual at birth.
    getSex() {
        return this.getTag(GedcomTags.SEX).value;
    }

    // A date value that indicates when an individual was entered into life.
    getBirthDate() {
        return this.getTag(GedcomTags.BIRTH)?.getTag(GedcomTags.DATE)?.value;
    }

    // A date value that indicates when mortal life ends for an individual.
    getDeathDate() {
        return this.getTag(GedcomTags.DEATH)?.getTag(GedcomTags.DATE)?.value;
    }

    // An address or place of residence where an individual resides.
    getResidenceInformation() {
        return this.getTags(GedcomTags.RESIDENCE);
    }

    // A date value that indicates when mortal life ends for an individual.
    getFamiliesXref() {
        return this.getTags(GedcomTags.FAMILYSPOUSE).map(tag => tag.value);
    }



}