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
            level: [2,3],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "ADOP",
            substructs: {},
            incomplete: true
        },
        {
            // Adoption 
            uri: "g7:FAMC-ADOP",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "ADOP",
            substructs: {},
            incomplete: true
        },
        {
            // Address Line 1 
            uri: "g7:ADR1",
            lineType: lineTypes.NO_XREF,
            level: [3,4],
            lineValType: dataTypes.Special,
            tag: "ADR1",
            substructs: {}
        },
        {
            // Address Line 2 
            uri: "g7:ADR2",
            lineType: lineTypes.NO_XREF,
            level: [3,4],
            lineValType: dataTypes.Special,
            tag: "ADR2",
            substructs: {}
        },
        {
            // Address Line 3 
            uri: "g7:ADR3",
            lineType: lineTypes.NO_XREF,
            level: [3,4],
            lineValType: dataTypes.Special,
            tag: "ADR3",
            substructs: {}
        },
        {
            // Age at event 
            uri: "g7:AGE",
            lineType: lineTypes.NO_XREF,
            level:[3],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "ANUL",
            substructs: {},
            incomplete: true
        },
        {
            // Associates 
            uri: "g7:ASSO",
            lineType: lineTypes.NO_XREF,
            level:[2],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "BAPL",
            substructs: {},
            incomplete: true
        },
        {
            // Baptism 
            uri: "g7:BAPM",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "BAPM",
            substructs: {},
            incomplete: true
        },
        {
            // Bar Mitzvah 
            uri: "g7:BARM",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "BARM",
            substructs: {},
            incomplete: true
        },
        {
            // Bas Mitzvah 
            uri: "g7:BASM",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "BASM",
            substructs: {},
            incomplete: true
        },
        {
            // Birth 
            uri: "g7:BIRT",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "BIRT",
            substructs: {},
            incomplete: true
        },
        {
            // Blessing 
            uri: "g7:BLES",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "BLES",
            substructs: {},
            incomplete: true
        },
        {
            // Burial 
            uri: "g7:BURI",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "BURI",
            substructs: {},
            incomplete: true
        },
        {
            // Call number 
            uri: "g7:CALN",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CALN",
            substructs: {},
            incomplete: true
        },
        {
            // Caste 
            uri: "g7:CAST",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CAST",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CENS",
            substructs: {},
            incomplete: true
        },
        {
            // Census 
            uri: "g7:INDI-CENS",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CENS",
            substructs: {},
            incomplete: true
        },
        {
            // Change 
            uri: "g7:CHAN",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CHAN",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CHRA",
            substructs: {},
            incomplete: true
        },
        {
            // Christening 
            uri: "g7:CHR",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CHR",
            substructs: {},
            incomplete: true
        },
        {
            // City 
            uri: "g7:CITY",
            lineType: lineTypes.NO_XREF,
            level: [3,4],
            lineValType: dataTypes.Special,
            tag: "CITY",
            substructs: {}
        },
        {
            // Confirmation 
            uri: "g7:CONF",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CONF",
            substructs: {},
            incomplete: true
        },
        {
            // Confirmation, Latter-Day Saint 
            uri: "g7:CONL",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CONL",
            substructs: {},
            incomplete: true
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
            lineType: "",
            lineValType: "",
            tag: "CREA",
            substructs: {},
            incomplete: true
        },
        {
            // Cremation 
            uri: "g7:CREM",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CREM",
            substructs: {},
            incomplete: true
        },
        {
            // Crop 
            uri: "g7:CROP",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "CROP",
            substructs: {},
            incomplete: true
        },
        {
            // Country 
            uri: "g7:CTRY",
            lineType: lineTypes.NO_XREF,
            level: [3,4],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "DATA",
            substructs: {},
            incomplete: true
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
            level:[2],
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
            level: [3],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "DATE",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "DEAT",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "DIVF",
            substructs: {},
            incomplete: true
        },
        {
            // Divorce 
            uri: "g7:DIV",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "DIV",
            substructs: {},
            incomplete: true
        },
        {
            // Description 
            uri: "g7:DSCR",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "DSCR",
            substructs: {},
            incomplete: true
        },
        {
            // Description 
            uri: "g7:EDUC",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "EDUC",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "EMIG",
            substructs: {},
            incomplete: true
        },
        {
            // Endowment, Latter-Day Saint 
            uri: "g7:ENDL",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "ENDL",
            substructs: {},
            incomplete: true
        },
        {
            // Engagement 
            uri: "g7:ENGA",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "ENGA",
            substructs: {},
            incomplete: true
        },
        {
            // Event 
            uri: "g7:FAM-EVEN",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "EVEN",
            substructs: {},
            incomplete: true
        },
        {
            // Event 
            uri: "g7:INDI-EVEN",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "EVEN",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "EVEN",
            substructs: {},
            incomplete: true
        },
        {
            // External Identifier 
            uri: "g7:EXID",
            lineType: lineTypes.NO_XREF,
            level:[3],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "FACT",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "FAMC",
            substructs: {},
            incomplete: true
        },
        {
            // Family child 
            uri: "g7:ADOP-FAMC",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "FAMC",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "FCOM",
            substructs: {},
            incomplete: true
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
            level:[3],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "GIVN",
            substructs: {},
            incomplete: true
        },
        {
            // Graduation 
            uri: "g7:GRAD",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "GRAD",
            substructs: {},
            incomplete: true
        },
        {
            // Height in pixels 
            uri: "g7:HEIGHT",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "HEIGHT",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "IDNO",
            substructs: {},
            incomplete: true
        },
        {
            // Immigration 
            uri: "g7:IMMI",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "IMMI",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "INIL",
            substructs: {},
            incomplete: true
        },
        {
            // Language 
            uri: "g7:LANG",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4,5],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "LEFT",
            substructs: {},
            incomplete: true
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
            level:[3],
            tag: "MAP",
            substructs: {
                "g7:LATI":"1:1", 
                "g7:LONG":"1:1"
            }
        },
        {
            // Marriage banns 
            uri: "g7:MARB",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "MARB",
            substructs: {},
            incomplete: true
        },
        {
            // Marriage contract 
            uri: "g7:MARC",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "MARC",
            substructs: {},
            incomplete: true
        },
        {
            // Marriage license 
            uri: "g7:MARL",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "MARL",
            substructs: {},
            incomplete: true
        },
        {
            // Marriage 
            uri: "g7:MARR",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "MARR",
            substructs: {},
            incomplete: true
        },
        {
            // Marriage settlement 
            uri: "g7:MARS",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "MARS",
            substructs: {},
            incomplete: true
        },
        {
            // Medium 
            uri: "g7:MEDI",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "MEDI",
            substructs: {},
            incomplete: true
        },
        {
            // Media type 
            uri: "g7:MIME",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4,5],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "NAME",
            substructs: {},
            incomplete: true
        },
        {
            // Nationality 
            uri: "g7:NATI",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "NATI",
            substructs: {},
            incomplete: true
        },
        {
            // Naturalization 
            uri: "g7:NATU",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "NATU",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "NCHI",
            substructs: {},
            incomplete: true
        },
        {
            // Nickname 
            uri: "g7:NICK",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "NICK",
            substructs: {},
            incomplete: true
        },
        {
            // Number of marriages 
            uri: "g7:NMR",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "NMR",
            substructs: {},
            incomplete: true
        },
        {
            // Did not happen 
            uri: "g7:NO",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "NO",
            substructs: {},
            incomplete: true
        },
        {
            // Note 
            uri: "g7:NOTE",
            lineType: lineTypes.NO_XREF,
            level: [1,3],
            lineValType: dataTypes.Text,
            tag: "NOTE",
            substructs: {
                "g7:MIME":"0:1", 
                "g7:LANG":"0:1", 
                "g7:NOTE-TRAN":"0:M"}
        },
        {
            // Name prefix 
            uri: "g7:NPFX",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "NPFX",
            substructs: {},
            incomplete: true
        },
        {
            // Name suffix 
            uri: "g7:NSFX",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "NSFX",
            substructs: {},
            incomplete: true
        },
        {
            // Object 
            uri: "g7:OBJE",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "OBJE",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "OCCU",
            substructs: {},
            incomplete: true
        },
        {
            // Ordination 
            uri: "g7:ORDN",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "ORDN",
            substructs: {},
            incomplete: true
        },
        {
            // Page 
            uri: "g7:PAGE",
            lineType: lineTypes.NO_XREF,
            level:[4],
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
            level: [2,3,4],
            lineValType: dataTypes.Text,
            tag: "PHRASE",
            substructs: {}
        },
        {
            // Place 
            uri: "g7:PLAC",
            lineType: lineTypes.NO_XREF,
            level:[2],
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
            level: [3,4],
            lineValType: dataTypes.Special,
            tag: "POST",
            substructs: {}
        },
        {
            // Probate 
            uri: "g7:PROB",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "PROB",
            substructs: {},
            incomplete: true
        },
        {
            // Property 
            uri: "g7:PROP",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "PROP",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "QUAY",
            substructs: {},
            incomplete: true
        },
        {
            // Reference 
            uri: "g7:REFN",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "REFN",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "RELI",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "REPO",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "RESI",
            substructs: {},
            incomplete: true
        },
        {
            // Retirement 
            uri: "g7:RETI",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "RETI",
            substructs: {},
            incomplete: true
        },
        {
            // Role 
            uri: "g7:ROLE",
            lineType: lineTypes.NO_XREF,
            level:[3],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "SLGC",
            substructs: {},
            incomplete: true
        },
        {
            // Sealing, spouse 
            uri: "g7:SLGS",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "SLGS",
            substructs: {},
            incomplete: true
        },
        {
            // Shared note 
            uri: "g7:SNOTE",
            lineType: lineTypes.NO_XREF,
            level:[1,3],
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
            level:[3],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "SPFX",
            substructs: {},
            incomplete: true
        },
        {
            // Social security number 
            uri: "g7:SSN",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "SSN",
            substructs: {},
            incomplete: true
        },
        {
            // State 
            uri: "g7:STAE",
            lineType: lineTypes.NO_XREF,
            level: [3,4],
            lineValType: dataTypes.Special,
            tag: "STAE",
            substructs: {}
        },
        {
            // Status 
            uri: "g7:ord-STAT",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "STAT",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "SURN",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "TEMP",
            substructs: {},
            incomplete: true
        },
        {
            // Text from Source 
            uri: "g7:TEXT",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "TEXT",
            substructs: {},
            incomplete: true
        },
        {
            // Time 
            uri: "g7:TIME",
            lineType: lineTypes.NO_XREF,
            level: [2,3,4],
            lineValType: dataTypes.Time,
            tag: "TIME",
            substructs: {}
        },
        {
            // Title 
            uri: "g7:TITL",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "TITL",
            substructs: {},
            incomplete: true
        },
        {
            // Title 
            uri: "g7:INDI-TITL",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "TITL",
            substructs: {},
            incomplete: true
        },
        {
            // Top crop width 
            uri: "g7:TOP",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "TOP",
            substructs: {},
            incomplete: true
        },
        {
            // Translation 
            uri: "g7:NAME-TRAN",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "TRAN",
            substructs: {},
            incomplete: true
        },
        {
            // Translation 
            uri: "g7:PLAC-TRAN",
            lineType: lineTypes.NO_XREF,
            level:[3],
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
            level: [2,4],
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "TYPE",
            substructs: {},
            incomplete: true
        },
        {
            // Type 
            uri: "g7:EXID-TYPE",
            lineType: lineTypes.NO_XREF,
            level:[4],
            lineValType: dataTypes.Special,
            tag: "TYPE",
            substructs: {}
        },
        {
            // Unique Identifier 
            uri: "g7:UID",
            lineType: "",
            level:[],
            lineValType: "",
            tag: "UID",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "WIDTH",
            substructs: {},
            incomplete: true
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
            lineType: "",
            level:[],
            lineValType: "",
            tag: "WILL",
            substructs: {},
            incomplete: true
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
