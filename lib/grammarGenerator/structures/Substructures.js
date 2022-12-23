const {lineTypes, dataTypes} = require("../../util/Constants");

module.exports = {
    grammarName: "Substructures",
    rules:[
        {
            uri: "ADDRESS_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level: [1,2,3],
            substructs: {
                "g7:ADDR":"1:1"
            }
        },
        {
            uri: "ASSOCIATION_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1,2],
            substructs: {
                "g7:ASSO":"1:1"
            }
        },
        {
            uri: "CHANGE_DATE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1,2],
            substructs: {
                "g7:CHAN":"1:1"
            }
        },
        {
            uri: "CREATION_DATE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:CREA":"1:1"
            }
        },
        {
            uri: "EVENT_DETAIL",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[2],
            substructs: {
                "g7:DATE":"0:1",
                "PLACE_STRUCTURE":"0:1",
                "ADDRESS_STRUCTURE":"0:1",
                "g7:PHON":"0:M",
                "g7:EMAIL":"0:M",
                "g7:FAX":"0:M",
                "g7:WWW":"0:M",
                "g7:AGNC":"0:1",
                "g7:RELI":"0:1",
                "g7:CAUS":"0:1",
                "g7:RESN":"0:1",
                "g7:SDATE":"0:1",
                "ASSOCIATION_STRUCTURE":"0:M",
                "NOTE_STRUCTURE":"0:M",
                "SOURCE_CITATION":"0:M",
                "MULTIMEDIA_LINK":"0:M",
                "g7:UID":"0:M"
            }
        },
        {
            uri: "FAMILY_ATTRIBUTE_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:FAM-NCHI":"1:1", 
                "g7:FAM-RESI":"1:1", 
                "g7:FAM-FACT":"1:1"
            }
        },
        {
            uri: "FAMILY_EVENT_DETAIL",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[2],
            substructs: {
                "g7:HUSB":"0:1", 
                "g7:WIFE":"0:1", 
                "EVENT_DETAIL":"0:1"
            }
        },
        {
            uri: "FAMILY_EVENT_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:ANUL":"1:1",
                "g7:FAM-CENS":"1:1",
                "g7:DIV":"1:1",
                "g7:DIVF":"1:1",
                "g7:ENGA":"1:1",
                "g7:MARB":"1:1",
                "g7:MARC":"1:1",
                "g7:MARL":"1:1",
                "g7:MARR":"1:1",
                "g7:MARS":"1:1",
                "g7:FAM-EVEN":"1:1",
            }
        },
        {
            uri: "IDENTIFIER_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:REFN":"1:1",
                "g7:UID":"1:1",
                "g7:EXID":"1:1",
            }
        },
        {
            uri: "INDIVIDUAL_ATTRIBUTE_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:CAST":"1:1",
                "g7:DSCR":"1:1",
                "g7:EDUC":"1:1",
                "g7:IDNO":"1:1",
                "g7:NATI":"1:1",
                "g7:INDI-NCHI":"1:1",
                "g7:NMR":"1:1",
                "g7:OCCU":"1:1",
                "g7:PROP":"1:1",
                "g7:INDI-RELI":"1:1",
                "g7:INDI-RESI":"1:1",
                "g7:SSN":"1:1",
                "g7:INDI-TITL":"1:1",
                "g7:INDI-FACT":"1:1"
            }
        },
        {
            uri: "INDIVIDUAL_EVENT_DETAIL",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[2],
            substructs: {
                "EVENT_DETAIL":"1:1",
                "g7:AGE":"0:1"
            }
        },
        {
            uri: "INDIVIDUAL_EVENT_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:ADOP":"1:1",
                "g7:BAPM":"1:1",
                "g7:BARM":"1:1",
                "g7:BASM":"1:1",
                "g7:BIRT":"1:1",
                "g7:BLES":"1:1",
                "g7:BURI":"1:1",
                "g7:INDI-CENS":"1:1",
                "g7:CHR":"1:1",
                "g7:CHRA":"1:1",
                "g7:CONF":"1:1",
                "g7:CREM":"1:1",
                "g7:DEAT":"1:1",
                "g7:EMIG":"1:1",
                "g7:FCOM":"1:1",
                "g7:GRAD":"1:1",
                "g7:IMMI":"1:1",
                "g7:NATU":"1:1",
                "g7:ORDN":"1:1",
                "g7:PROB":"1:1",
                "g7:RETI":"1:1",
                "g7:WILL":"1:1",
                "g7:INDI-EVEN":"1:1",
            }
        },
        {
            uri: "LDS_INDIVIDUAL_ORDINANCE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:BAPL":"1:1",
                "g7:CONL":"1:1",
                "g7:ENDL":"1:1",
                "g7:INIL":"1:1",
                "g7:SLGC":"1:1",
            }
        },
        {
            uri: "LDS_ORDINANCE_DETAIL",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[2],
            substructs: {
                "g7:DATE":"0:1",
                "g7:TEMP":"0:1",
                "PLACE_STRUCTURE":"0:1",
                "g7:ord-STAT":"0:1",
                "NOTE_STRUCTURE":"0:M",
                "SOURCE_CITATION":"0:M"
            }
        },
        {
            uri: "LDS_SPOUSE_SEALING",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:SLGS":"1:1"
            }
        },
        {
            uri: "MULTIMEDIA_LINK",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1,2,3,4,5,6],
            substructs: {
                "g7:OBJE":"1:1"
            }
        },
        {
            uri: "NON_EVENT_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:NO":"1:1"
            }
        },
        {
            uri: "NOTE_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level: [1,2,3,4],
            substructs: {
                "g7:NOTE":"1:1", 
                "g7:SNOTE":"1:1"
            }
        },
        {
            uri: "PERSONAL_NAME_PIECES",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[2,3],
            substructs: {
                "g7:NPFX":"0:M",
                "g7:GIVN":"0:M",
                "g7:NICK":"0:M",
                "g7:SPFX":"0:M",
                "g7:SURN":"0:M",
                "g7:NSFX":"0:M",
            }
        },
        {
            uri: "PERSONAL_NAME_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:INDI-NAME":"1:1"
            }
        },
        {
            uri: "PLACE_STRUCTURE",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[2,3],
            substructs: {
                "g7:PLAC":"1:1"
            }
        },
        {
            uri: "SOURCE_CITATION",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1,2,3,4,5],
            substructs: {
                "g7:SOUR":"1:1"
            }
        },
        {
            uri: "SOURCE_REPOSITORY_CITATION",
			info: "Structure Info coming soon!",
            lineType: lineTypes.SUBSTRUCTURE,
            level:[1],
            substructs: {
                "g7:REPO":"1:1"
            }
        }
    ]
}
