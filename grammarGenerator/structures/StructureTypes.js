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
            substructs: {"g7:HEAD-SOUR-DATA":"0:1"}
        },
        {
            // Abbreviation 
            uri: "g7:ABBR",
            lineType: "",
            lineValType: "",
            tag: "ABBR",
            substructs: {},
            incomplete: true
        },
        {
            // Address 
            uri: "g7:ADDR",
            lineType: lineTypes.NO_XREF,
            level: [3],
            lineValType: dataTypes.Special,
            tag: "ADDR",
            substructs: {"g7:ADR1":"0:1", "g7:ADR2":"0:1", "g7:ADR3":"0:1", "g7:CITY":"0:1", "g7:STAE":"0:1", "g7:POST":"0:1", "g7:CTRY":"0:1"}
        },
        {
            // Adoption 
            uri: "g7:ADOP",
            lineType: "",
            lineValType: "",
            tag: "ADOP",
            substructs: {},
            incomplete: true
        },
        {
            // Adoption 
            uri: "g7:FAMC-ADOP",
            lineType: "",
            lineValType: "",
            tag: "ADOP",
            substructs: {},
            incomplete: true
        },
        {
            // Address Line 1 
            uri: "g7:ADR1",
            lineType: lineTypes.NO_XREF,
            level: [4],
            lineValType: dataTypes.Special,
            tag: "ADR1",
            substructs: {}
        },
        {
            // Address Line 2 
            uri: "g7:ADR2",
            lineType: lineTypes.NO_XREF,
            level: [4],
            lineValType: dataTypes.Special,
            tag: "ADR2",
            substructs: {}
        },
        {
            // Address Line 3 
            uri: "g7:ADR3",
            lineType: lineTypes.NO_XREF,
            level: [4],
            lineValType: dataTypes.Special,
            tag: "ADR3",
            substructs: {}
        },
        {
            // Age at event 
            uri: "g7:AGE",
            lineType: "",
            lineValType: "",
            tag: "AGE",
            substructs: {},
            incomplete: true
        },
        {
            // Responsible agency 
            uri: "g7:AGNC",
            lineType: "",
            lineValType: "",
            tag: "AGNC",
            substructs: {},
            incomplete: true
        },
        {
            // Alias 
            uri: "g7:ALIA",
            lineType: "",
            lineValType: "",
            tag: "ALIA",
            substructs: {},
            incomplete: true
        },
        {
            // Ancestor interest 
            uri: "g7:ANCI",
            lineType: "",
            lineValType: "",
            tag: "ANCI",
            substructs: {},
            incomplete: true
        },
        {
            // Annulment 
            uri: "g7:ANUL",
            lineType: "",
            lineValType: "",
            tag: "ANUL",
            substructs: {},
            incomplete: true
        },
        {
            // Associates 
            uri: "g7:ASSO",
            lineType: "",
            lineValType: "",
            tag: "ASSO",
            substructs: {},
            incomplete: true
        },
        {
            // Author 
            uri: "g7:AUTH",
            lineType: "",
            lineValType: "",
            tag: "AUTH",
            substructs: {},
            incomplete: true
        },
        {
            // Baptism, Latter-Day Saint 
            uri: "g7:BAPL",
            lineType: "",
            lineValType: "",
            tag: "BAPL",
            substructs: {},
            incomplete: true
        },
        {
            // Baptism 
            uri: "g7:BAPM",
            lineType: "",
            lineValType: "",
            tag: "BAPM",
            substructs: {},
            incomplete: true
        },
        {
            // Bar Mitzvah 
            uri: "g7:BARM",
            lineType: "",
            lineValType: "",
            tag: "BARM",
            substructs: {},
            incomplete: true
        },
        {
            // Bas Mitzvah 
            uri: "g7:BASM",
            lineType: "",
            lineValType: "",
            tag: "BASM",
            substructs: {},
            incomplete: true
        },
        {
            // Birth 
            uri: "g7:BIRT",
            lineType: "",
            lineValType: "",
            tag: "BIRT",
            substructs: {},
            incomplete: true
        },
        {
            // Blessing 
            uri: "g7:BLES",
            lineType: "",
            lineValType: "",
            tag: "BLES",
            substructs: {},
            incomplete: true
        },
        {
            // Burial 
            uri: "g7:BURI",
            lineType: "",
            lineValType: "",
            tag: "BURI",
            substructs: {},
            incomplete: true
        },
        {
            // Call number 
            uri: "g7:CALN",
            lineType: "",
            lineValType: "",
            tag: "CALN",
            substructs: {},
            incomplete: true
        },
        {
            // Caste 
            uri: "g7:CAST",
            lineType: "",
            lineValType: "",
            tag: "CAST",
            substructs: {},
            incomplete: true
        },
        {
            // Cause 
            uri: "g7:CAUS",
            lineType: "",
            lineValType: "",
            tag: "CAUS",
            substructs: {},
            incomplete: true
        },
        {
            // Census 
            uri: "g7:FAM-CENS",
            lineType: "",
            lineValType: "",
            tag: "CENS",
            substructs: {},
            incomplete: true
        },
        {
            // Census 
            uri: "g7:INDI-CENS",
            lineType: "",
            lineValType: "",
            tag: "CENS",
            substructs: {},
            incomplete: true
        },
        {
            // Change 
            uri: "g7:CHAN",
            lineType: "",
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
            substructs: {"g7:PHRASE":"0:1"}
        },
        {
            // Christening, adult 
            uri: "g7:CHRA",
            lineType: "",
            lineValType: "",
            tag: "CHRA",
            substructs: {},
            incomplete: true
        },
        {
            // Christening 
            uri: "g7:CHR",
            lineType: "",
            lineValType: "",
            tag: "CHR",
            substructs: {},
            incomplete: true
        },
        {
            // City 
            uri: "g7:CITY",
            lineType: lineTypes.NO_XREF,
            level: [4],
            lineValType: dataTypes.Special,
            tag: "CITY",
            substructs: {}
        },
        {
            // Confirmation 
            uri: "g7:CONF",
            lineType: "",
            lineValType: "",
            tag: "CONF",
            substructs: {},
            incomplete: true
        },
        {
            // Confirmation, Latter-Day Saint 
            uri: "g7:CONL",
            lineType: "",
            lineValType: "",
            tag: "CONL",
            substructs: {},
            incomplete: true
        },
        {
            // 
            uri: "",
            lineType: "",
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
            substructs: {"ADDRESS_STRUCTURE":"0:1", "g7:PHON":"0:M", "g7:EMAIL":"0:M", "g7:FAX":"0:M", "g7:WWW":"0:M"}
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
            lineValType: "",
            tag: "CREM",
            substructs: {},
            incomplete: true
        },
        {
            // Crop 
            uri: "g7:CROP",
            lineType: "",
            lineValType: "",
            tag: "CROP",
            substructs: {},
            incomplete: true
        },
        {
            // Country 
            uri: "g7:CTRY",
            lineType: lineTypes.NO_XREF,
            level: [4],
            lineValType: dataTypes.Special,
            tag: "CTRY",
            substructs: {}
        },
        {
            // Data 
            uri: "g7:DATA",
            lineType: "",
            lineValType: "",
            tag: "DATA",
            substructs: {},
            incomplete: true
        },
        {
            // Data 
            uri: "g7:SOUR-DATA",
            lineType: "",
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
            substructs: {"g7:DATE-exact":"0:1", "g7:COPR":"0:1"}
        },
        {
            // Date 
            uri: "g7:DATE",
            lineType: "",
            lineValType: "",
            tag: "DATE",
            substructs: {},
            incomplete: true
        },
        {
            // Date 
            uri: "g7:DATE-exact",
            lineType: lineTypes.NO_XREF,
            level: [3],
            lineValType: dataTypes.DateExact,
            tag: "DATE",
            substructs: {"g7:TIME":"0:1"}
        },
        {
            // Date 
            uri: "g7:HEAD-DATE",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.DateExact,
            tag: "DATE",
            substructs: {"g7:TIME":"0:1"}
        },
        {
            // Date 
            uri: "g7:NO-DATE",
            lineType: "",
            lineValType: "",
            tag: "DATE",
            substructs: {},
            incomplete: true
        },
        {
            // Date 
            uri: "g7:DATA-EVEN-DATE",
            lineType: "",
            lineValType: "",
            tag: "DATE",
            substructs: {},
            incomplete: true
        },
        {
            // Death 
            uri: "g7:DEAT",
            lineType: "",
            lineValType: "",
            tag: "DEAT",
            substructs: {},
            incomplete: true
        },
        {
            // Descendant Interest 
            uri: "g7:DESI",
            lineType: "",
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
            lineValType: "",
            tag: "DIVF",
            substructs: {},
            incomplete: true
        },
        {
            // Divorce 
            uri: "g7:DIV",
            lineType: "",
            lineValType: "",
            tag: "DIV",
            substructs: {},
            incomplete: true
        },
        {
            // Description 
            uri: "g7:DSCR",
            lineType: "",
            lineValType: "",
            tag: "DSCR",
            substructs: {},
            incomplete: true
        },
        {
            // Description 
            uri: "g7:EDUC",
            lineType: "",
            lineValType: "",
            tag: "EDUC",
            substructs: {},
            incomplete: true
        },
        {
            // Email 
            uri: "g7:EMAIL",
            lineType: lineTypes.NO_XREF,
            level: [3],
            lineValType: dataTypes.Special,
            tag: "EMAIL",
            substructs: {}
        },
        {
            // Description 
            uri: "g7:EMIG",
            lineType: "",
            lineValType: "",
            tag: "EMIG",
            substructs: {},
            incomplete: true
        },
        {
            // Endowment, Latter-Day Saint 
            uri: "g7:ENDL",
            lineType: "",
            lineValType: "",
            tag: "ENDL",
            substructs: {},
            incomplete: true
        },
        {
            // Engagement 
            uri: "g7:ENGA",
            lineType: "",
            lineValType: "",
            tag: "ENGA",
            substructs: {},
            incomplete: true
        },
        {
            // Event 
            uri: "g7:FAM-EVEN",
            lineType: "",
            lineValType: "",
            tag: "EVEN",
            substructs: {},
            incomplete: true
        },
        {
            // Event 
            uri: "g7:INDI-EVEN",
            lineType: "",
            lineValType: "",
            tag: "EVEN",
            substructs: {},
            incomplete: true
        },
        {
            // Event 
            uri: "g7:DATA-EVEN",
            lineType: "",
            lineValType: "",
            tag: "EVEN",
            substructs: {},
            incomplete: true
        },
        {
            // Event 
            uri: "g7:SOUR-EVEN",
            lineType: "",
            lineValType: "",
            tag: "EVEN",
            substructs: {},
            incomplete: true
        },
        {
            // External Identifier 
            uri: "g7:EXID",
            lineType: "",
            lineValType: "",
            tag: "EXID",
            substructs: {},
            incomplete: true
        },
        {
            // Family record 
            uri: "g7:record-FAM",
            lineType: "",
            lineValType: "",
            tag: "FAM",
            substructs: {},
            incomplete: true
        },
        {
            // Fact 
            uri: "g7:FAM-FACT",
            lineType: "",
            lineValType: "",
            tag: "FACT",
            substructs: {},
            incomplete: true
        },
        {
            // Fact 
            uri: "g7:INDI-FACT",
            lineType: "",
            lineValType: "",
            tag: "FACT",
            substructs: {},
            incomplete: true
        },
        {
            // Family child 
            uri: "g7:INDI-FAMC",
            lineType: "",
            lineValType: "",
            tag: "FAMC",
            substructs: {},
            incomplete: true
        },
        {
            // Family child 
            uri: "g7:FAMC",
            lineType: "",
            lineValType: "",
            tag: "FAMC",
            substructs: {},
            incomplete: true
        },
        {
            // Family child 
            uri: "g7:ADOP-FAMC",
            lineType: "",
            lineValType: "",
            tag: "FAMC",
            substructs: {},
            incomplete: true
        },
        {
            // Family spouse 
            uri: "g7:FAMS",
            lineType: "",
            lineValType: "",
            tag: "FAMS",
            substructs: {},
            incomplete: true
        },
        {
            // Facsimile 
            uri: "g7:FAX",
            lineType: lineTypes.NO_XREF,
            level: [3],
            lineValType: dataTypes.Special,
            tag: "FAX",
            substructs: {}
        },
        {
            // First communion 
            uri: "g7:FCOM",
            lineType: "",
            lineValType: "",
            tag: "FCOM",
            substructs: {},
            incomplete: true
        },
        {
            // File reference 
            uri: "g7:FILE",
            lineType: "",
            lineValType: "",
            tag: "FILE",
            substructs: {},
            incomplete: true
        },
        {
            // Format 
            uri: "g7:FORM",
            lineType: "",
            lineValType: "",
            tag: "FORM",
            substructs: {},
            incomplete: true
        },
        {
            // Format 
            uri: "g7:PLAC-FORM",
            lineType: "",
            lineValType: "",
            tag: "FORM",
            substructs: {},
            incomplete: true
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
            substructs: {"g7:GEDC-VERS":"1:1"}
        },
        {
            // Given name 
            uri: "g7:GIVN",
            lineType: "",
            lineValType: "",
            tag: "GIVN",
            substructs: {},
            incomplete: true
        },
        {
            // Graduation 
            uri: "g7:GRAD",
            lineType: "",
            lineValType: "",
            tag: "GRAD",
            substructs: {},
            incomplete: true
        },
        {
            // 
            uri: "",
            lineType: "",
            lineValType: "",
            tag: "HEAD",
            substructs: {},
            incomplete: true
        },
        {
            // Height in pixels 
            uri: "g7:HEIGHT",
            lineType: "",
            lineValType: "",
            tag: "HEIGHT",
            substructs: {},
            incomplete: true
        },
        {
            // Husband 
            uri: "g7:HUSB",
            lineType: "",
            lineValType: "",
            tag: "HUSB",
            substructs: {},
            incomplete: true
        },
        {
            // Husband 
            uri: "g7:FAM-HUSB",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.Xref,
            tag: "HUSB",
            substructs: {"g7:PHRASE":"0:1"}
        },
        {
            // Identification number 
            uri: "g7:IDNO",
            lineType: "",
            lineValType: "",
            tag: "IDNO",
            substructs: {},
            incomplete: true
        },
        {
            // Immigration 
            uri: "g7:IMMI",
            lineType: "",
            lineValType: "",
            tag: "IMMI",
            substructs: {},
            incomplete: true
        },
        {
            // Individual 
            uri: "g7:record-INDI",
            lineType: "",
            lineValType: "",
            tag: "INDI",
            substructs: {},
            incomplete: true
        },
        {
            // Initiatory, Latter-Day Saint 
            uri: "g7:INIL",
            lineType: "",
            lineValType: "",
            tag: "INIL",
            substructs: {},
            incomplete: true
        },
        {
            // Language 
            uri: "g7:LANG",
            lineType: lineTypes.NO_XREF,
            level: [3,4],
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
            lineValType: "",
            tag: "LANG",
            substructs: {},
            incomplete: true
        },
        {
            // Latitude 
            uri: "g7:LATI",
            lineType: "",
            lineValType: "",
            tag: "LATI",
            substructs: {},
            incomplete: true
        },
        {
            // Left crop width 
            uri: "g7:LEFT",
            lineType: "",
            lineValType: "",
            tag: "LEFT",
            substructs: {},
            incomplete: true
        },
        {
            // Longitude 
            uri: "g7:LONG",
            lineType: "",
            lineValType: "",
            tag: "LONG",
            substructs: {},
            incomplete: true
        },
        {
            // Map 
            uri: "g7:MAP",
            lineType: "",
            lineValType: "",
            tag: "MAP",
            substructs: {},
            incomplete: true
        },
        {
            // Marriage banns 
            uri: "g7:MARB",
            lineType: "",
            lineValType: "",
            tag: "MARB",
            substructs: {},
            incomplete: true
        },
        {
            // Marriage contract 
            uri: "g7:MARC",
            lineType: "",
            lineValType: "",
            tag: "MARC",
            substructs: {},
            incomplete: true
        },
        {
            // Marriage license 
            uri: "g7:MARL",
            lineType: "",
            lineValType: "",
            tag: "MARL",
            substructs: {},
            incomplete: true
        },
        {
            // Marriage 
            uri: "g7:MARR",
            lineType: "",
            lineValType: "",
            tag: "MARR",
            substructs: {},
            incomplete: true
        },
        {
            // Marriage settlement 
            uri: "g7:MARS",
            lineType: "",
            lineValType: "",
            tag: "MARS",
            substructs: {},
            incomplete: true
        },
        {
            // Medium 
            uri: "g7:MEDI",
            lineType: "",
            lineValType: "",
            tag: "MEDI",
            substructs: {},
            incomplete: true
        },
        {
            // Media type 
            uri: "g7:MIME",
            lineType: lineTypes.NO_XREF,
            level: [3,4],
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
            lineValType: "",
            tag: "NAME",
            substructs: {},
            incomplete: true
        },
        {
            // Nationality 
            uri: "g7:NATI",
            lineType: "",
            lineValType: "",
            tag: "NATI",
            substructs: {},
            incomplete: true
        },
        {
            // Naturalization 
            uri: "g7:NATU",
            lineType: "",
            lineValType: "",
            tag: "NATU",
            substructs: {},
            incomplete: true
        },
        {
            // Number of children 
            uri: "g7:FAM-NCHI",
            lineType: "",
            lineValType: "",
            tag: "NCHI",
            substructs: {},
            incomplete: true
        },
        {
            // Number of children 
            uri: "g7:INDI-NCHI",
            lineType: "",
            lineValType: "",
            tag: "NCHI",
            substructs: {},
            incomplete: true
        },
        {
            // Nickname 
            uri: "g7:NICK",
            lineType: "",
            lineValType: "",
            tag: "NICK",
            substructs: {},
            incomplete: true
        },
        {
            // Number of marriages 
            uri: "g7:NMR",
            lineType: "",
            lineValType: "",
            tag: "NMR",
            substructs: {},
            incomplete: true
        },
        {
            // Did not happen 
            uri: "g7:NO",
            lineType: "",
            lineValType: "",
            tag: "NO",
            substructs: {},
            incomplete: true
        },
        {
            // Note 
            uri: "g7:NOTE",
            lineType: lineTypes.NO_XREF,
            level: [2],
            lineValType: dataTypes.Text,
            tag: "NOTE",
            substructs: {"g7:MIME":"0:1", "g7:LANG":"0:1", "g7:NOTE-TRAN":"0:M"}
        },
        {
            // Name prefix 
            uri: "g7:NPFX",
            lineType: "",
            lineValType: "",
            tag: "NPFX",
            substructs: {},
            incomplete: true
        },
        {
            // Name suffix 
            uri: "g7:NSFX",
            lineType: "",
            lineValType: "",
            tag: "NSFX",
            substructs: {},
            incomplete: true
        },
        {
            // Object 
            uri: "g7:OBJE",
            lineType: "",
            lineValType: "",
            tag: "OBJE",
            substructs: {},
            incomplete: true
        },
        {
            // Object 
            uri: "g7:record-OBJE",
            lineType: "",
            lineValType: "",
            tag: "OBJE",
            substructs: {},
            incomplete: true
        },
        {
            // Occupation 
            uri: "g7:OCCU",
            lineType: "",
            lineValType: "",
            tag: "OCCU",
            substructs: {},
            incomplete: true
        },
        {
            // Ordination 
            uri: "g7:ORDN",
            lineType: "",
            lineValType: "",
            tag: "ORDN",
            substructs: {},
            incomplete: true
        },
        {
            // Page 
            uri: "g7:PAGE",
            lineType: "",
            lineValType: "",
            tag: "PAGE",
            substructs: {},
            incomplete: true
        },
        {
            // Pedigree 
            uri: "g7:PEDI",
            lineType: "",
            lineValType: "",
            tag: "PEDI",
            substructs: {},
            incomplete: true
        },
        {
            // Phone 
            uri: "g7:PHON",
            lineType: lineTypes.NO_XREF,
            level: [3],
            lineValType: dataTypes.Special,
            tag: "PHON",
            substructs: {}
        },
        {
            // Phrase 
            uri: "g7:PHRASE",
            lineType: lineTypes.NO_XREF,
            level: [2],
            lineValType: dataTypes.Text,
            tag: "PHRASE",
            substructs: {}
        },
        {
            // Place 
            uri: "g7:PLAC",
            lineType: "",
            lineValType: "",
            tag: "PLAC",
            substructs: {},
            incomplete: true
        },
        {
            // Place 
            uri: "g7:HEAD-PLAC",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            level: [1],
            tag: "PLAC",
            substructs: {"g7:HEAD-PLAC-FORM":"1:1"}
        },
        {
            // Postal code 
            uri: "g7:POST",
            lineType: lineTypes.NO_XREF,
            level: [4],
            lineValType: dataTypes.Special,
            tag: "POST",
            substructs: {}
        },
        {
            // Probate 
            uri: "g7:PROB",
            lineType: "",
            lineValType: "",
            tag: "PROB",
            substructs: {},
            incomplete: true
        },
        {
            // Property 
            uri: "g7:PROP",
            lineType: "",
            lineValType: "",
            tag: "PROP",
            substructs: {},
            incomplete: true
        },
        {
            // Publication 
            uri: "g7:PUBL",
            lineType: "",
            lineValType: "",
            tag: "PUBL",
            substructs: {},
            incomplete: true
        },
        {
            // Quality of data 
            uri: "g7:QUAY",
            lineType: "",
            lineValType: "",
            tag: "QUAY",
            substructs: {},
            incomplete: true
        },
        {
            // Reference 
            uri: "g7:REFN",
            lineType: "",
            lineValType: "",
            tag: "REFN",
            substructs: {},
            incomplete: true
        },
        {
            // Religion 
            uri: "g7:RELI",
            lineType: "",
            lineValType: "",
            tag: "RELI",
            substructs: {},
            incomplete: true
        },
        {
            // Religion 
            uri: "g7:INDI-RELI",
            lineType: "",
            lineValType: "",
            tag: "RELI",
            substructs: {},
            incomplete: true
        },
        {
            // Restriction 
            uri: "g7:RESN",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.ListEnum,
            enumType: "g7:enumset-RESN",
            tag: "RESN",
            substructs: {}
        },
        {
            // Repository 
            uri: "g7:REPO",
            lineType: "",
            lineValType: "",
            tag: "REPO",
            substructs: {},
            incomplete: true
        },
        {
            // Repository 
            uri: "g7:record-REPO",
            lineType: "",
            lineValType: "",
            tag: "REPO",
            substructs: {},
            incomplete: true
        },
        {
            // Residence 
            uri: "g7:FAM-RESI",
            lineType: "",
            lineValType: "",
            tag: "RESI",
            substructs: {},
            incomplete: true
        },
        {
            // Residence 
            uri: "g7:INDI-RESI",
            lineType: "",
            lineValType: "",
            tag: "RESI",
            substructs: {},
            incomplete: true
        },
        {
            // Retirement 
            uri: "g7:RETI",
            lineType: "",
            lineValType: "",
            tag: "RETI",
            substructs: {},
            incomplete: true
        },
        {
            // Role 
            uri: "g7:ROLE",
            lineType: "",
            lineValType: "",
            tag: "ROLE",
            substructs: {},
            incomplete: true
        },
        {
            // Extension schema 
            uri: "g7:SCHMA",
            level: [1],
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            tag: "SCHMA",
            substructs: {"g7:TAG":"0:M"}
        },
        {
            // Sort date 
            uri: "g7:SDATE",
            lineType: "",
            lineValType: "",
            tag: "SDATE",
            substructs: {},
            incomplete: true
        },
        {
            // Sex 
            uri: "g7:SEX",
            lineType: "",
            lineValType: "",
            tag: "SEX",
            substructs: {},
            incomplete: true
        },
        {
            // Sealing, child 
            uri: "g7:SLGC",
            lineType: "",
            lineValType: "",
            tag: "SLGC",
            substructs: {},
            incomplete: true
        },
        {
            // Sealing, spouse 
            uri: "g7:SLGS",
            lineType: "",
            lineValType: "",
            tag: "SLGS",
            substructs: {},
            incomplete: true
        },
        {
            // Shared note 
            uri: "g7:SNOTE",
            lineType: lineTypes.NO_XREF,
            level:[2],
            lineValType: dataTypes.Xref,
            tag: "SNOTE",
            substructs: {}
        },
        {
            // Shared note 
            uri: "g7:record-SNOTE",
            lineType: "",
            lineValType: "",
            tag: "SNOTE",
            substructs: {},
            incomplete: true
        },
        {
            // Source 
            uri: "g7:SOUR",
            lineType: "",
            lineValType: "",
            tag: "SOUR",
            substructs: {},
            incomplete: true
        },
        {
            // Source 
            uri: "g7:record-SOUR",
            lineType: "",
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
            substructs: {"g7:VERS":"0:1", "g7:NAME":"0:1", "g7:CORP":"0:1", "g7:HEAD-SOUR-DATA":"0:1"}
        },
        {
            // Surname prefix 
            uri: "g7:SPFX",
            lineType: "",
            lineValType: "",
            tag: "SPFX",
            substructs: {},
            incomplete: true
        },
        {
            // Social security number 
            uri: "g7:SSN",
            lineType: "",
            lineValType: "",
            tag: "SSN",
            substructs: {},
            incomplete: true
        },
        {
            // State 
            uri: "g7:STAE",
            lineType: lineTypes.NO_XREF,
            level: [4],
            lineValType: dataTypes.Special,
            tag: "STAE",
            substructs: {}
        },
        {
            // Status 
            uri: "g7:ord-STAT",
            lineType: "",
            lineValType: "",
            tag: "STAT",
            substructs: {},
            incomplete: true
        },
        {
            // Status 
            uri: "g7:FAMC-STAT",
            lineType: "",
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
            lineValType: "",
            tag: "SUBM",
            substructs: {},
            incomplete: true
        },
        {
            // Surname 
            uri: "g7:SURN",
            lineType: "",
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
            lineValType: "",
            tag: "TEMP",
            substructs: {},
            incomplete: true
        },
        {
            // Text from Source 
            uri: "g7:TEXT",
            lineType: "",
            lineValType: "",
            tag: "TEXT",
            substructs: {},
            incomplete: true
        },
        {
            // Time 
            uri: "g7:TIME",
            lineType: lineTypes.NO_XREF,
            level: [2,4],
            lineValType: dataTypes.Time,
            tag: "TIME",
            substructs: {}
        },
        {
            // Title 
            uri: "g7:TITL",
            lineType: "",
            lineValType: "",
            tag: "TITL",
            substructs: {},
            incomplete: true
        },
        {
            // Title 
            uri: "g7:INDI-TITL",
            lineType: "",
            lineValType: "",
            tag: "TITL",
            substructs: {},
            incomplete: true
        },
        {
            // Top crop width 
            uri: "g7:TOP",
            lineType: "",
            lineValType: "",
            tag: "TOP",
            substructs: {},
            incomplete: true
        },
        {
            // 
            uri: "",
            lineType: "",
            lineValType: "",
            tag: "TRAN",
            substructs: {},
            incomplete: true
        },
        {
            // Translation 
            uri: "g7:NAME-TRAN",
            lineType: "",
            lineValType: "",
            tag: "TRAN",
            substructs: {},
            incomplete: true
        },
        {
            // Translation 
            uri: "g7:PLAC-TRAN",
            lineType: "",
            lineValType: "",
            tag: "TRAN",
            substructs: {},
            incomplete: true
        },
        {
            // Translation 
            uri: "g7:NOTE-TRAN",
            lineType: lineTypes.NO_XREF,
            level: [3],
            lineValType: dataTypes.Text,
            tag: "TRAN",
            substructs: {"g7:MIME":"0:1", "g7:LANG":"0:1"}
        },
        {
            // Translation 
            uri: "g7:FILE-TRAN",
            lineType: "",
            lineValType: "",
            tag: "TRAN",
            substructs: {},
            incomplete: true
        },
        {
            // 
            uri: "",
            lineType: "",
            lineValType: "",
            tag: "TRLR",
            substructs: {},
            incomplete: true
        },
        {
            // Type 
            uri: "g7:TYPE",
            lineType: "",
            lineValType: "",
            tag: "TYPE",
            substructs: {},
            incomplete: true
        },
        {
            // Type 
            uri: "g7:NAME-TYPE",
            lineType: "",
            lineValType: "",
            tag: "TYPE",
            substructs: {},
            incomplete: true
        },
        {
            // Type 
            uri: "g7:EXID-TYPE",
            lineType: "",
            lineValType: "",
            tag: "TYPE",
            substructs: {},
            incomplete: true
        },
        {
            // Unique Identifier 
            uri: "g7:UID",
            lineType: "",
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
            lineValType: "",
            tag: "WIDTH",
            substructs: {},
            incomplete: true
        },
        {
            // Wife 
            uri: "g7:WIFE",
            lineType: "",
            lineValType: "",
            tag: "WIFE",
            substructs: {},
            incomplete: true
        },
        {
            // Wife 
            uri: "g7:FAM-WIFE",
            lineType: lineTypes.NO_XREF,
            level: [1],
            lineValType: dataTypes.Xref,
            tag: "WIFE",
            substructs: {"g7:PHRASE":"0:1"}
        },
        {
            // Will 
            uri: "g7:WILL",
            lineType: "",
            lineValType: "",
            tag: "WILL",
            substructs: {},
            incomplete: true
        },
        {
            // Web address 
            uri: "g7:WWW",
            lineType: lineTypes.NO_XREF,
            level: [3],
            lineValType: dataTypes.Special,
            tag: "WWW",
            substructs: {}
        }
    ]
}
