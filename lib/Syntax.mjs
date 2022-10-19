// a tag encodes the type of a structure
// all standard tags are defined in The FamilySearch GEDCOM Specification
const GedcomTags =  {
    INDIVIDUAL: "INDI",
    FAMILY: "FAM",
    SEX: "SEX",
    NAME: "NAME"
};

const GedcomEnumSetSex = {
    "M": "Male",
    "F": "Femal",
    "X": "Does not fit the typical definition of only Male or only Female",
    "U": "Cannot be determined from available sources"
}

// line value can either be a pointer or a lineString
class LineVal {
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
};

class GedcomSyntaxError extends Error{
    constructor(line){
        super(`Line does not match the The FamilySearch GEDCOM Specification
        7.0.10. Visit https://gedcom.io/specifications/FamilySearchGEDCOMv7.html for further information.`)
    }
}

export {GedcomTags, GedcomEnumSetSex, LineVal, GedcomSyntaxError};