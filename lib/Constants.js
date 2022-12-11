// TO-DO: check meaning of g7:enumset-EVEN and g7:enumset-EVENATTR

module.exports = {
    GedcomTags : {
        INDIVIDUAL: "INDI",
        SEX: "SEX",
        NAME: "NAME",
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
    lineTypes : {
        GEDCOM: "GEDCOM",

        // records
        HEADER: "HEADER",
        FAM_RECORD: "FAM_RECORD",
        INDI_RECORD: "INDI_RECORD",
        OBJE_RECORD: "OBJE_RECORD",
        REPO_RECORD: "REPO_RECORD",
        SNOTE_RECORD: "SNOTE_RECORD",
        SOUR_RECORD: "SOUR_RECORD",
        SUBM_RECORD: "SUBM_RECORD",

        // structures
        NO_XREF: "NO_XREF",
        NO_LINEVAL: "NO_LINEVAL",
        NO_XREF_NO_LINEVAL: "NO_XREF_NO_LINEVAL",
        SUBSTRUCTURE: "SUBSTRUCTURE",
        DEFAULT_LINE: "DEFAULT_LINE"
    },
    dataTypes: {
        Text: "Text",     
        Integer: "Integer",
        stdEnum: "stdEnum",
        Enum: "Enum",   
        DateValue: "DateValue",
        DateExact: "DateExact",   
        DatePeriod: "DatePeriod",
        Time: "Time",      
        Age: "Age", 
        ListText: "ListText",   
        ListEnum: "ListEnum",
        PersonalName: "PersonalName",
        Language: "Language",     
        MediaType: "MediaType",      
        Special: "Special",     
        NullOrY: "NullOrY",
        Xref: "Xref"
    },
    gedcomEnumTypes: {
        g7_enumset_ADOP: ["HUSB", "WIFE", "BOTH"],
        //g7_enumset_EVEN
        //g7_enumset_EVENATTR
        g7_enumset_MEDI: ["AUDIO", "BOOK", "CARD", "ELECTRONIC", "FICHE", "FILM", "MAGAZINE", "MANUSCRIPT", "MAP", "NEWSPAPER", "PHOTO", "TOMBSTONE", "VIDEO", "OTHER"],     
        g7_enumset_PEDI: ["ADOPTED", "BIRTH", "FOSTER", "SEALING", "OTHER"],  
        g7_enumset_QUAY: ["0", "1", "2", "3"],
        g7_enumset_RESN: ["CONFIDENTIAL", "LOCKED", "PRIVACY"],     
        g7_enumset_ROLE: ["CHIL", "CLERGY", "FATH", "FRIEND", "GODP", "HUSB", "MOTH", "MULTIPLE", "NGHBR", "OFFICIATOR", "PARENT", "SPOU", "WIFE", "WITN", "OTHER"],      
        g7_enumset_SEX:  ["M", "F", "X", "U"],
        g7_enumset_FAMC_STAT: ["CHALLENGED", "DISPROVEN", "PROVEN"],
        g7_enumset_ord_STAT: ["BIC", "CANCELED", "CHILD", "COMPLETED", "EXCLUDED", "DNS", "DNS_CAN", "INFANT", "PRE_1970", "STILLBORN", "SUBMITTED", "UNCLEARED"],  
        g7_enumset_NAME_TYPE: ["AKA", "BIRTH", "IMMIGRANT", "MAIDEN", "MARRIED", "PROFESSIONAL", "OTHER"]   
    },
    continuationTypes: {
        Text: "TEXT_CONTINUATION",     
        Integer: "INTEGER_CONTINUATION", 
        stdEnum: "TEXT_CONTINUATION", 
        Enum: "TEXT_CONTINUATION", 
        DateValue: "TEXT_CONTINUATION", 
        DateExact: "TEXT_CONTINUATION",    
        DatePeriod: "TEXT_CONTINUATION", 
        Time: "TEXT_CONTINUATION",    
        Age: "TEXT_CONTINUATION", 
        ListText: "TEXT_CONTINUATION", 
        ListEnum: "TEXT_CONTINUATION", 
        PersonalName: "TEXT_CONTINUATION", 
        Language: "TEXT_CONTINUATION",  
        MediaType: "TEXT_CONTINUATION",    
        Special: "TEXT_CONTINUATION",     
        NullOrY: "TEXT_CONTINUATION",  
        Xref: "TEXT_CONTINUATION", 
    }

       
}
