const {lineTypes, dataTypes, gedcomEnumTypes} = require("../../lib/Constants");
module.exports = {
    grammarName: "StructureTypes",
    rules:[
        {
            // Test
            uri: "g7:TEST",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: {
                "g7:HEAD-SOUR-DATA":"0:1"
            }
        },
        {
            // Abbreviation 
            uri: "g7:ABBR",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "ABBR",
            substructs: {},
            incomplete: true
        },
        {
            // Address 
            uri: "g7:ADDR",
            lineType: lineTypes.NO_XREF,
            level: [1,2,3],
            lineValType: dataTypes.Special,
            tag: "ADDR",
            substructs: {
                "g7:ADR1":"0:1", 
                "g7:ADR2":"0:1", 
                "g7:ADR3":"0:1", 
                "g7:CITY":"0:1", 
                "g7:STAE":"0:1", 
                "g7:POST":"0:1", 
                "g7:CTRY":"0:1"
            }
        },
        {
            // Adoption 
            uri: "g7:ADOP",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "ADOP",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1",
                "g7:ADOP-FAMC":"0:1"
            }
        },
        {
            // Adoption 
            uri: "g7:FAMC-ADOP",
            lineType: lineTypes.NO_XREF,
            level:[3],
            lineValType: dataTypes.Enum,
            enumType:"g7:enumset-ADOP",
            tag: "ADOP",
            substructs: {
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Address Line 1 
            uri: "g7:ADR1",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4],
            lineValType: dataTypes.Special,
            tag: "ADR1",
            substructs: {}
        },
        {
            // Address Line 2 
            uri: "g7:ADR2",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4],
            lineValType: dataTypes.Special,
            tag: "ADR2",
            substructs: {}
        },
        {
            // Address Line 3 
            uri: "g7:ADR3",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4],
            lineValType: dataTypes.Special,
            tag: "ADR3",
            substructs: {}
        },
        {
            // Age at event 
            uri: "g7:AGE",
            lineType: lineTypes.NO_XREF,
            level:[2,3],
            lineValType: dataTypes.Age,
            tag: "AGE",
            substructs: {
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Responsible agency 
            uri: "g7:AGNC",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Text,
            tag: "AGNC",
            substructs: {}
        },
        {
            // Alias 
            uri: "g7:ALIA",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "ALIA",
            substructs: {},
            incomplete: true
        },
        {
            // Ancestor interest 
            uri: "g7:ANCI",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "ANCI",
            substructs: {},
            incomplete: true
        },
        {
            // Annulment 
            uri: "g7:ANUL",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "ANUL",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Associates 
            uri: "g7:ASSO",
            lineType: lineTypes.NO_XREF,
            level:[1,2],
            lineValType: dataTypes.Xref,
            tag: "ASSO",
            substructs: {
                "g7:PHRASE":"0:1",
                "g7:ROLE":"1:1",
                "NOTE_STRUCTURE":"0:M",
                "SOURCE_CITATION":"0:M"
            }
        },
        {
            // Author 
            uri: "g7:AUTH",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "AUTH",
            substructs: {},
            incomplete: true
        },
        {
            // Baptism, Latter-Day Saint 
            uri: "g7:BAPL",
            lineType: dataTypes.NO_XREF_NO_LINEVAL,
            level:[1],
            tag: "BAPL",
            substructs: {
                "LDS_ORDIANCE_DETAIL":"0:1"
            }
        },
        {
            // Baptism 
            uri: "g7:BAPM",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "BAPM",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Bar Mitzvah 
            uri: "g7:BARM",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "BARM",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Bas Mitzvah 
            uri: "g7:BASM",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "BASM",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Birth 
            uri: "g7:BIRT",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "BIRT",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1",
                "g7:FAMC":"0:1"
            }
        },
        {
            // Blessing 
            uri: "g7:BLES",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "BLES",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Burial 
            uri: "g7:BURI",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "BURI",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Call number 
            uri: "g7:CALN",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Special,
            tag: "CALN",
            substructs: {
                "g7:MEDI":"0:1"
            }
        },
        {
            // Caste 
            uri: "g7:CAST",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "CAST",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Cause 
            uri: "g7:CAUS",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Text,
            tag: "CAUS",
            substructs: {}
        },
        {
            // Census 
            uri: "g7:FAM-CENS",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "CENS",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Census 
            uri: "g7:INDI-CENS",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "CENS",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Change 
            uri: "g7:CHAN",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[1,2],
            tag: "CHAN",
            substructs: {
                "g7:DATE-exact":"1:1",
                "NOTE_STRUCTURE":"0:M"
            }
        },
        {
            // Child 
            uri: "g7:CHIL",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.Xref,
            tag: "CHIL",
            substructs: {
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Christening, adult 
            uri: "g7:CHRA",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "CHRA",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Christening 
            uri: "g7:CHR",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "CHR",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1",
                "g7:FAMC":"0:1"
            }
        },
        {
            // City 
            uri: "g7:CITY",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4],
            lineValType: dataTypes.Special,
            tag: "CITY",
            substructs: {}
        },
        {
            // Confirmation 
            uri: "g7:CONF",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "CONF",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Confirmation, Latter-Day Saint 
            uri: "g7:CONL",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[1],
            tag: "CONL",
            substructs: {
                "LDS_ORDIANCE_DETAIL":"0:1"
            }
        },
        {
            // 
            uri: "",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CONT",
            substructs: {},
            incomplete: true
        },
        {
            // Copyright 
            uri: "g7:COPR",
            level: [1,3],
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "COPR",
            substructs: {}
        },
        {
            // Corporate name 
            uri: "g7:CORP",
            lineType: lineTypes.NO_XREF,
            level: [2],
            lineValType: dataTypes.Text,
            tag: "CORP",
            substructs: {
                "ADDRESS_STRUCTURE":"0:1", 
                "g7:PHON":"0:M", 
                "g7:EMAIL":"0:M", 
                "g7:FAX":"0:M", 
                "g7:WWW":"0:M"
            }
        },
        {
            // Creation 
            uri: "g7:CREA",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[1],
            tag: "CREA",
            substructs: {
                "g7:DATE-exact":"1:1"
            }
        },
        {
            // Cremation 
            uri: "g7:CREM",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "CREM",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Crop 
            uri: "g7:CROP",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[2,3,4,5,6,7],
            tag: "CROP",
            substructs: {
                "g7:TOP":"0:1",
                "g7:LEFT":"0:1",
                "g7:HEIGHT":"0:1",
                "g7:WIDTH":"0:1"
            }
        },
        {
            // Country 
            uri: "g7:CTRY",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4],
            lineValType: dataTypes.Special,
            tag: "CTRY",
            substructs: {}
        },
        {
            // Data 
            uri: "g7:DATA",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "DATA",
            substructs: {},
            incomplete: true
        },
        {
            // Data 
            uri: "g7:SOUR-DATA",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[2,3,4,5,6],
            tag: "DATA",
            substructs: {
                "g7:DATE":"0:1",
                "g7:TEXT":"0:1"
            }
        },
        {
            // Data 
            uri: "g7:HEAD-SOUR-DATA",
            level: [2],
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "DATA",
            substructs: {
                "g7:DATE-exact":"0:1", 
                "g7:COPR":"0:1"
            }
        },
        {
            // Date 
            uri: "g7:DATE",
            lineType: lineTypes.NO_XREF,
            level:[2,3,4,5,6,7],
            lineValType: dataTypes.DateValue,
            tag: "DATE",
            substructs: {
                "g7:TIME":"0:1", 
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Date 
            uri: "g7:DATE-exact",
            lineType: lineTypes.NO_XREF,
            level: [2,3],
            lineValType: dataTypes.DateExact,
            tag: "DATE",
            substructs: {
                "g7:TIME":"0:1"
            }
        },
        {
            // Date 
            uri: "g7:HEAD-DATE",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.DateExact,
            tag: "DATE",
            substructs: {
                "g7:TIME":"0:1"
            }
        },
        {
            // Date 
            uri: "g7:NO-DATE",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.DatePeriod,
            tag: "DATE",
            substructs: {
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Date 
            uri: "g7:DATA-EVEN-DATE",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "DATE",
            substructs: {},
            incomplete: true
        },
        {
            // Death 
            uri: "g7:DEAT",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "DEAT",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Descendant Interest 
            uri: "g7:DESI",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "DESI",
            substructs: {},
            incomplete: true
        },
        {
            // Destination 
            uri: "g7:DEST",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.Special,
            tag: "DEST",
            substructs: {}
        },
        {
            // Divorce filing 
            uri: "g7:DIVF",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "DIVF",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Divorce 
            uri: "g7:DIV",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "DIV",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Description 
            uri: "g7:DSCR",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "DSCR",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Description 
            uri: "g7:EDUC",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "EDUC",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Email 
            uri: "g7:EMAIL",
            lineType: lineTypes.NO_XREF,
            level: [2,3],
            lineValType: dataTypes.Special,
            tag: "EMAIL",
            substructs: {}
        },
        {
            // Description 
            uri: "g7:EMIG",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "EMIG",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Endowment, Latter-Day Saint 
            uri: "g7:ENDL",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[1],
            tag: "ENDL",
            substructs: {
                "LDS_ORDIANCE_DETAIL":"0:1"
            }
        },
        {
            // Engagement 
            uri: "g7:ENGA",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "ENGA",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Event 
            uri: "g7:FAM-EVEN",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "EVEN",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Event 
            uri: "g7:INDI-EVEN",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "EVEN",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Event 
            uri: "g7:DATA-EVEN",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "EVEN",
            substructs: {},
            incomplete: true
        },
        {
            // Event 
            uri: "g7:SOUR-EVEN",
            lineType: lineTypes.NO_XREF,
            level:[2,3,4,5,6],
            lineValType: dataTypes.Enum,
            enumType:"g7:enumset-EVENATTR",
            tag: "EVEN",
            substructs: {
                "g7:PHRASE":"0:1",
                "g7:ROLE":"0:1"
            }
        },
        {
            // External Identifier 
            uri: "g7:EXID",
            lineType: lineTypes.NO_XREF,
            level:[1,3,4],
            lineValType: dataTypes.Special,
            tag: "EXID",
            substructs: {
                "g7:EXID-TYPE":"0:1"
            }
        },
        {
            // Family record 
            uri: "g7:record-FAM",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "FAM",
            substructs: {},
            incomplete: true
        },
        {
            // Fact 
            uri: "g7:FAM-FACT",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "FACT",
            substructs: {
                "g7:TYPE":"1:1", 
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Fact 
            uri: "g7:INDI-FACT",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "FACT",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Family child 
            uri: "g7:INDI-FAMC",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "FAMC",
            substructs: {},
            incomplete: true
        },
        {
            // Family child 
            uri: "g7:FAMC",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Xref,
            tag: "FAMC",
            substructs: {}
        },
        {
            // Family child 
            uri: "g7:ADOP-FAMC",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Xref,
            tag: "FAMC",
            substructs: {
                "g7:FAMC-ADOP":"0:1"
            }
        },
        {
            // Family spouse 
            uri: "g7:FAMS",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "FAMS",
            substructs: {},
            incomplete: true
        },
        {
            // Facsimile 
            uri: "g7:FAX",
            lineType: lineTypes.NO_XREF,
            level: [2,3],
            lineValType: dataTypes.Special,
            tag: "FAX",
            substructs: {}
        },
        {
            // First communion 
            uri: "g7:FCOM",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "FCOM",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // File reference 
            uri: "g7:FILE",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "FILE",
            substructs: {},
            incomplete: true
        },
        {
            // Format 
            uri: "g7:FORM",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "FORM",
            substructs: {},
            incomplete: true
        },
        {
            // Format 
            uri: "g7:PLAC-FORM",
            lineType: lineTypes.NO_XREF,
            level:[3,4],
            lineValType: dataTypes.ListText,
            tag: "FORM",
            substructs: {}
        },
        {
            // Format 
            uri: "g7:HEAD-PLAC-FORM",
            lineType: lineTypes.NO_XREF,
            level: [2],
            lineValType: dataTypes.ListText,
            tag: "FORM",
            substructs: {}
        },
        {
            // GEDCOM 
            uri: "g7:GEDC",
            level: [1],
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            tag: "GEDC",
            substructs: {
                "g7:GEDC-VERS":"1:1"
            }
        },
        {
            // Given name 
            uri: "g7:GIVN",
            lineType: lineTypes.NO_XREF,
            level:[2,3],
            lineValType: dataTypes.Text,
            tag: "GIVN",
            substructs: {}
        },
        {
            // Graduation 
            uri: "g7:GRAD",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "GRAD",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Height in pixels 
            uri: "g7:HEIGHT",
            lineType: lineTypes.NO_XREF,
            level:[3,4,5,6,7,8],
            lineValType: dataTypes.Integer,
            tag: "HEIGHT",
            substructs: {}
        },
        {
            // Husband 
            uri: "g7:HUSB",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[2],
            tag: "HUSB",
            substructs: {
                "g7:AGE":"1:1"
            }
        },
        {
            // Husband 
            uri: "g7:FAM-HUSB",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.Xref,
            tag: "HUSB",
            substructs: {
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Identification number 
            uri: "g7:IDNO",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Special,
            tag: "IDNO",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Immigration 
            uri: "g7:IMMI",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "IMMI",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Individual 
            uri: "g7:record-INDI",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "INDI",
            substructs: {},
            incomplete: true
        },
        {
            // Initiatory, Latter-Day Saint 
            uri: "g7:INIL",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[1],
            tag: "INIL",
            substructs: {
                "LDS_ORDIANCE_DETAIL":"0:1"
            }
        },
        {
            // Language 
            uri: "g7:LANG",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4,5,6,7,8],
            lineValType: dataTypes.Language,
            tag: "LANG",
            substructs: {}
        },
        {
            // Language 
            uri: "g7:HEAD-LANG",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.Language,
            tag: "LANG",
            substructs: {}
        },
        {
            // Language 
            uri: "g7:SUBM-LANG",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "LANG",
            substructs: {},
            incomplete: true
        },
        {
            // Latitude 
            uri: "g7:LATI",
            lineType: lineTypes.NO_XREF,
            level:[4],
            lineValType: dataTypes.Special,
            tag: "LATI",
            substructs: {}
        },
        {
            // Left crop width 
            uri: "g7:LEFT",
            lineType: lineTypes.NO_XREF,
            level:[3,4,5,6,7,8],
            lineValType: dataTypes.Integer,
            tag: "LEFT",
            substructs: {}
        },
        {
            // Longitude 
            uri: "g7:LONG",
            lineType: lineTypes.NO_XREF,
            level:[4],
            lineValType: dataTypes.Special,
            tag: "LONG",
            substructs: {}
        },
        {
            // Map 
            uri: "g7:MAP",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[3,4],
            tag: "MAP",
            substructs: {
                "g7:LATI":"1:1", 
                "g7:LONG":"1:1"
            }
        },
        {
            // Marriage banns 
            uri: "g7:MARB",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "MARB",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Marriage contract 
            uri: "g7:MARC",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "MARC",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Marriage license 
            uri: "g7:MARL",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "MARL",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Marriage 
            uri: "g7:MARR",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "MARR",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Marriage settlement 
            uri: "g7:MARS",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "MARS",
            substructs: {
                "g7:TYPE":"0:1",
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Medium 
            uri: "g7:MEDI",
            lineType: lineTypes.NO_XREF,
            level:[3],
            lineValType: dataTypes.Enum,
            enumType:"g7:enumset-MEDI",
            tag: "MEDI",
            substructs: {
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Media type 
            uri: "g7:MIME",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4,5,6,7,8],
            lineValType: dataTypes.MediaType,
            tag: "MIME",
            substructs: {}
        },
        {
            // Name 
            uri: "g7:NAME",
            lineType: lineTypes.NO_XREF,
            level: [2],
            lineValType: dataTypes.Text,
            tag: "NAME",
            substructs: {}
        },
        {
            // Name 
            uri: "g7:INDI-NAME",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.PersonalName,
            tag: "NAME",
            substructs: {
                "g7:NAME-TYPE":"0:1",
                "PERSONAL_NAME_PIECES":"0:1",
                "g7:NAME-TRAN":"0:M",
                "NOTE_STRUCTURE":"0:M",
                "SOURCE_CITATION":"0:M",
            }
        },
        {
            // Nationality 
            uri: "g7:NATI",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "NATI",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Naturalization 
            uri: "g7:NATU",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "NATU",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Number of children 
            uri: "g7:FAM-NCHI",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Integer,
            tag: "NCHI",
            substructs: {
                "g7:TYPE":"0:1", 
                "FAMILY_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Number of children 
            uri: "g7:INDI-NCHI",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Integer,
            tag: "NCHI",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Nickname 
            uri: "g7:NICK",
            lineType: lineTypes.NO_XREF,
            level:[2,3],
            lineValType: dataTypes.Text,
            tag: "NICK",
            substructs: {}
        },
        {
            // Number of marriages 
            uri: "g7:NMR",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Integer,
            tag: "NMR",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Did not happen 
            uri: "g7:NO",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Enum,
            enumType: "g7:enumset-EVEN",
            tag: "NO",
            substructs: {
                "g7:NO-DATE":"0:1",
                "NOTE_STRUCTURE":"0:M",
                "SOURCE_CITATION":"0:M"
            }
        },
        {
            // Note 
            uri: "g7:NOTE",
            lineType: lineTypes.NO_XREF,
            level: [1,2,3,4],
            lineValType: dataTypes.Text,
            tag: "NOTE",
            substructs: {
                "g7:MIME":"0:1", 
                "g7:LANG":"0:1", 
                "g7:NOTE-TRAN":"0:M",
                "SOURCE_CITATION":"0:M"
            }
        },
        {
            // Name prefix 
            uri: "g7:NPFX",
            lineType: lineTypes.NO_XREF,
            level:[2,3],
            lineValType: dataTypes.Text,
            tag: "NPFX",
            substructs: {}
        },
        {
            // Name suffix 
            uri: "g7:NSFX",
            lineType: lineTypes.NO_XREF,
            level:[2,3],
            lineValType: dataTypes.Text,
            tag: "NSFX",
            substructs: {}
        },
        {
            // Object 
            uri: "g7:OBJE",
            lineType: dataTypes.NO_XREF,
            level:[1,2,3,4,5,6],
            lineValType: dataTypes.Xref,
            tag: "OBJE",
            substructs: {
                "g7:CROP":"0:1",
                "g7:TITL":"0:1"
            }
        },
        {
            // Object 
            uri: "g7:record-OBJE",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "OBJE",
            substructs: {},
            incomplete: true
        },
        {
            // Occupation 
            uri: "g7:OCCU",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "OCCU",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Ordination 
            uri: "g7:ORDN",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "ORDN",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Page 
            uri: "g7:PAGE",
            lineType: lineTypes.NO_XREF,
            level:[2,3,4,5,6],
            lineValType: dataTypes.Text,
            tag: "PAGE",
            substructs: {}
        },
        {
            // Pedigree 
            uri: "g7:PEDI",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "PEDI",
            substructs: {},
            incomplete: true
        },
        {
            // Phone 
            uri: "g7:PHON",
            lineType: lineTypes.NO_XREF,
            level: [2,3],
            lineValType: dataTypes.Special,
            tag: "PHON",
            substructs: {}
        },
        {
            // Phrase 
            uri: "g7:PHRASE",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4,5,6,7,8],
            lineValType: dataTypes.Text,
            tag: "PHRASE",
            substructs: {}
        },
        {
            // Place 
            uri: "g7:PLAC",
            lineType: lineTypes.NO_XREF,
            level:[2,3],
            lineValType: dataTypes.ListText,
            tag: "PLAC",
            substructs: {
                "g7:PLAC-FORM":"0:1",
                "g7:LANG":"0:1",
                "g7:PLAC-TRAN":"0:M",
                "g7:MAP":"0:1",
                "g7:EXID":"0:M",
                "NOTE_STRUCTURE":"0:M"
            }
        },
        {
            // Place 
            uri: "g7:HEAD-PLAC",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level: [1],
            tag: "PLAC",
            substructs: {
                "g7:HEAD-PLAC-FORM":"1:1"
            }
        },
        {
            // Postal code 
            uri: "g7:POST",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4],
            lineValType: dataTypes.Special,
            tag: "POST",
            substructs: {}
        },
        {
            // Probate 
            uri: "g7:PROB",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "PROB",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Property 
            uri: "g7:PROP",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "PROP",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Publication 
            uri: "g7:PUBL",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "PUBL",
            substructs: {},
            incomplete: true
        },
        {
            // Quality of data 
            uri: "g7:QUAY",
            lineType: lineTypes.NO_XREF,
            level:[2,3,4,5,6],
            lineValType: dataTypes.Enum,
            enumType:"g7:enumset-QUAY",
            tag: "QUAY",
            substructs: {}
        },
        {
            // Reference 
            uri: "g7:REFN",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Special,
            tag: "REFN",
            substructs: {
                "g7:TYPE":"0:1"
            }
        },
        {
            // Religion 
            uri: "g7:RELI",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Text,
            tag: "RELI",
            substructs: {}
        },
        {
            // Religion 
            uri: "g7:INDI-RELI",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "RELI",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Restriction 
            uri: "g7:RESN",
            lineType: lineTypes.NO_XREF,
            level: [1,2],
            lineValType: dataTypes.ListEnum,
            enumType: "g7:enumset-RESN",
            tag: "RESN",
            substructs: {}
        },
        {
            // Repository 
            uri: "g7:REPO",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Xref,
            tag: "REPO",
            substructs: {
                "NOTE_STRUCTURE":"0:M",
                "g7:CALN":"0:M"
            }
        },
        {
            // Repository 
            uri: "g7:record-REPO",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "REPO",
            substructs: {},
            incomplete: true
        },
        {
            // Residence 
            uri: "g7:FAM-RESI",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "RESI",
            substructs: {
                "g7:TYPE":"0:1", 
                "FAMILY_EVENT_DETAIL":"0:1"}
        },
        {
            // Residence 
            uri: "g7:INDI-RESI",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "RESI",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Retirement 
            uri: "g7:RETI",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "RETI",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Role 
            uri: "g7:ROLE",
            lineType: lineTypes.NO_XREF,
            level:[2,3,4,5,6,7],
            lineValType: dataTypes.Enum,
            enumType:"g7:enumset-ROLE",
            tag: "ROLE",
            substructs: {
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Extension schema 
            uri: "g7:SCHMA",
            level: [1],
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            tag: "SCHMA",
            substructs: {
                "g7:TAG":"0:M"
            }
        },
        {
            // Sort date 
            uri: "g7:SDATE",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.DateValue,
            tag: "SDATE",
            substructs: {
                "g7:TIME":"0:1",
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Sex 
            uri: "g7:SEX",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "SEX",
            substructs: {},
            incomplete: true
        },
        {
            // Sealing, child 
            uri: "g7:SLGC",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[1],
            tag: "SLGC",
            substructs: {
                "LDS_ORDIANCE_DETAIL":"0:1",
                "g7:FAMC":"1:1"
            }
        },
        {
            // Sealing, spouse 
            uri: "g7:SLGS",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[1],
            tag: "SLGS",
            substructs: {
                "LDS_ORDIANCE_DETAIL":"0:1"
            }
        },
        {
            // Shared note 
            uri: "g7:SNOTE",
            lineType: lineTypes.NO_XREF,
            level:[1,2,3,4],
            lineValType: dataTypes.Xref,
            tag: "SNOTE",
            substructs: {}
        },
        {
            // Shared note 
            uri: "g7:record-SNOTE",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "SNOTE",
            substructs: {},
            incomplete: true
        },
        {
            // Source 
            uri: "g7:SOUR",
            lineType: lineTypes.NO_XREF,
            level:[1,2,3,4,5],
            lineValType: dataTypes.Xref,
            tag: "SOUR",
            substructs: {
                "g7:PAGE":"0:1",
                "g7:SOUR-DATA":"0:1",
                "g7:SOUR-EVEN":"0:1",
                "g7:QUAY":"0:1",
                "MULTIMEDIA_LINK":"0:M",
                "NOTE_STRUCTURE":"0:M"

            }
        },
        {
            // Source 
            uri: "g7:record-SOUR",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "SOUR",
            substructs: {},
            incomplete: true
        },
        {
            // Source 
            uri: "g7:HEAD-SOUR",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.Special,
            tag: "SOUR",
            substructs: {
                "g7:VERS":"0:1", 
                "g7:NAME":"0:1", 
                "g7:CORP":"0:1", 
                "g7:HEAD-SOUR-DATA":"0:1"
            }
        },
        {
            // Surname prefix 
            uri: "g7:SPFX",
            lineType: lineTypes.NO_XREF,
            level:[2,3],
            lineValType: dataTypes.Text,
            tag: "SPFX",
            substructs: {}
        },
        {
            // Social security number 
            uri: "g7:SSN",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Special,
            tag: "SSN",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // State 
            uri: "g7:STAE",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4],
            lineValType: dataTypes.Special,
            tag: "STAE",
            substructs: {}
        },
        {
            // Status 
            uri: "g7:ord-STAT",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Enum,
            enumType: "g7:enumset-ord-STAT",
            tag: "STAT",
            substructs: {
                "g7:DATE-exact":"1:1",
            }
        },
        {
            // Status 
            uri: "g7:FAMC-STAT",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "STAT",
            substructs: {},
            incomplete: true
        },
        {
            // Submitter 
            uri: "g7:SUBM",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.Xref,
            tag: "SUBM",
            substructs: {}
        },
        {
            // Submitter 
            uri: "g7:record-SUBM",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "SUBM",
            substructs: {},
            incomplete: true
        },
        {
            // Surname 
            uri: "g7:SURN",
            lineType: lineTypes.NO_XREF,
            level:[2,3],
            lineValType: dataTypes.Text,
            tag: "SURN",
            substructs: {}
        },
        {
            // Extension tag 
            uri: "g7:TAG",
            lineType: lineTypes.NO_XREF,
            level: [2],
            lineValType: dataTypes.Special,
            tag: "TAG",
            substructs: {}
        },
        {
            // Temple 
            uri: "g7:TEMP",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Text,
            tag: "TEMP",
            substructs: {}
        },
        {
            // Text from Source 
            uri: "g7:TEXT",
            lineType: lineTypes.NO_XREF,
            level:[3,4,5,6,7],
            lineValType: dataTypes.Text,
            tag: "TEXT",
            substructs: {
                "g7:MIME":"0:1",
                "g7:LANG":"0:1"
            }
        },
        {
            // Time 
            uri: "g7:TIME",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4,5,6,7,8],
            lineValType: dataTypes.Time,
            tag: "TIME",
            substructs: {}
        },
        {
            // Title 
            uri: "g7:TITL",
            lineType: lineTypes.NO_XREF,
            level:[2,3,4,5,6,7],
            lineValType: dataTypes.Text,
            tag: "TITL",
            substructs: {}
        },
        {
            // Title 
            uri: "g7:INDI-TITL",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.Text,
            tag: "TITL",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Top crop width 
            uri: "g7:TOP",
            lineType: lineTypes.NO_XREF,
            level:[3,4,5,6,7,8],
            lineValType: dataTypes.Integer,
            tag: "TOP",
            substructs: {}
        },
        {
            // Translation 
            uri: "g7:NAME-TRAN",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.PersonalName,
            tag: "TRAN",
            substructs: {
                "g7:LANG":"1:1",
                "PERSONAL_NAME_PIECES":"0:1"
            }
        },
        {
            // Translation 
            uri: "g7:PLAC-TRAN",
            lineType: lineTypes.NO_XREF,
            level:[3,4],
            lineValType: dataTypes.ListText,
            tag: "TRAN",
            substructs: {
                "g7:LANG":"1:1"
            }
        },
        {
            // Translation 
            uri: "g7:NOTE-TRAN",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4,5],
            lineValType: dataTypes.Text,
            tag: "TRAN",
            substructs: {
                "g7:MIME":"0:1", 
                "g7:LANG":"0:1"}
        },
        {
            // Translation 
            uri: "g7:FILE-TRAN",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "TRAN",
            substructs: {},
            incomplete: true
        },
        {
            // Type 
            uri: "g7:TYPE",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Text,
            tag: "TYPE",
            substructs: {}
        },
        {
            // Type 
            uri: "g7:NAME-TYPE",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Enum,
            enumType: "g7:enumset-NAME-TYPE",
            tag: "TYPE",
            substructs: {
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Type 
            uri: "g7:EXID-TYPE",
            lineType: lineTypes.NO_XREF,
            level:[2,4,5],
            lineValType: dataTypes.Special,
            tag: "TYPE",
            substructs: {}
        },
        {
            // Unique Identifier 
            uri: "g7:UID",
            lineType: lineTypes.NO_XREF,
            level:[1,2],
            lineValType: dataTypes.Special,
            tag: "UID",
            substructs: {}
        },
        {
            // Version 
            uri: "g7:VERS",
            lineType: lineTypes.NO_XREF,
            level: [2],
            lineValType: dataTypes.Special,
            tag: "VERS",
            substructs: {}
        },
        {
            // Version 
            uri: "g7:GEDC-VERS",
            lineType: lineTypes.NO_XREF,
            level: [2],
            lineValType: dataTypes.Special,
            tag: "VERS",
            substructs: {}
        },
        {
            // Width in pixels 
            uri: "g7:WIDTH",
            lineType: lineTypes.NO_XREF,
            level:[3,4,5,6,7,8],
            lineValType: dataTypes.Integer,
            tag: "WIDTH",
            substructs: {}
        },
        {
            // Wife 
            uri: "g7:WIFE",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level:[2],
            tag: "WIFE",
            substructs: {"g7:AGE":"1:1"}
        },
        {
            // Wife 
            uri: "g7:FAM-WIFE",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.Xref,
            tag: "WIFE",
            substructs: {
                "g7:PHRASE":"0:1"
            }
        },
        {
            // Will 
            uri: "g7:WILL",
            lineType: lineTypes.NO_XREF,
            level:[1],
            lineValType: dataTypes.NullOrY,
            tag: "WILL",
            substructs: {
                "g7:TYPE":"0:1",
                "INDIVIDUAL_EVENT_DETAIL":"0:1"
            }
        },
        {
            // Web address 
            uri: "g7:WWW",
            lineType: lineTypes.NO_XREF,
            level: [2,3],
            lineValType: dataTypes.Special,
            tag: "WWW",
            substructs: {}
        }
    ]
}
