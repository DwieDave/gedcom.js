// a tag encodes the type of a structure
// all standard tags are defined in The FamilySearch GEDCOM Specification
const GedcomTags = {
    // Individual
    INDIVIDUAL: "INDI",
    SEX: "SEX",
    NAME: "NAME",
    // FAMILY 
    FAMILY: "FAM",
    HUSBAND: "HUSB",
    WIFE: "WIFE",
    CHILD: "CHIL",
    NUMBER_OF_CHILDREN: "NCHI",
    RESIDENCE: "RESI",
    FACT: "FACT",
    DATE: "DATE",
    BIRTH: "BIRT",
    DEATH: "DEAT",
    FAMILYSPOUSE: "FAMS",
};

const GedcomEnumSetSex = {
    "M": "Male",
    "F": "Femal",
    "X": "Does not fit the typical definition of only Male or only Female",
    "U": "Cannot be determined from available sources"
}

// line value can either be a pointer or a lineString
class LineVal {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
};

class GedcomSyntaxError extends Error {
    constructor(msg) {
        super(msg)
    }
}

class GedcomParserError extends Error {
    constructor(msg) {
        super(`"${msg}" does not match the Gedcom line syntax!`)
    }
}

const CONSTANTS = {
    LINEVAL_POINTER_TYPE: "pointer",
    LINEVAL_LINESTR_TYPE: "lineStr"
}



export { GedcomTags, GedcomEnumSetSex, CONSTANTS, LineVal, GedcomSyntaxError, GedcomParserError };