// a tag encodes the type of a structure
// all standard tags are defined in The FamilySearch GEDCOM Specification
export const Tags =  {
    INDIVIDUAL_TAG: "INDI",
    FAMILY_TAG: "FAM"
};

// line value can either be a pointer or a lineString
export class LineVal {
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
};