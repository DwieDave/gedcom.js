module.exports = {
    GedcomTags : {
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
    },
    GedcomEnumSetSex : {
        "M": "Male",
        "F": "Femal",
        "X": "Does not fit the typical definition of only Male or only Female",
        "U": "Cannot be determined from available sources"
    }, lineTypes : {
        DEFAULT_LINE: "DEFAULT_LINE",
        NO_XREF: "NO_XREF",
        NO_LINEVAL: "NO_LINEVAL",
        NO_XREF_NO_LINEVAL: "NO_XREF_NO_LINEVAL", 
        FAM_RECORD: "FAM_RECORD",
        INDI_RECORD: "INDI_RECORD",
        HEADER: "HEADER"
    }

}
