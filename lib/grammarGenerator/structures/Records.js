const {lineTypes, dataTypes} = require("../../util/Constants.js");

module.exports = [
    {
        grammarName: "Family",
        rules:[
            {
                uri: "g7:record-FAM",
                lineType: lineTypes.FAM_RECORD,
                info: "Structure Info coming soon!",
                level: [0],
                tag: "FAM",
                substructs:{
                    "g7:RESN":"0:1", 
                    "FAMILY_ATTRIBUTE_STRUCTURE":"0:M",
                    "FAMILY_EVENT_STRUCTURE":"0:M",
                    "NON_EVENT_STRUCTURE":"0:M",
                    "g7:FAM-HUSB":"0:1", 
                    "g7:FAM-WIFE":"0:1",
                    "g7:CHIL":"0:M",
                    "ASSOCIATION_STRUCTURE":"0:M",
                    "g7:SUBM":"0:M",
                    "LDS_SPOUSE_SEALING":"0:M",
                    "IDENTIFIER_STRUCTURE":"0:M",
                    "NOTE_STRUCTURE":"0:M",
                    "SOURCE_CITATION" :"0:M",
                    "MULTIMEDIA_LINK":"0:M",
                    "CHANGE_DATE":"0:1",
                    "CREATION_DATE":"0:1"
                }
            }
        ]
    },
    {
        grammarName: "Individual",
        rules:[
            {
                uri: "g7:record-INDI",
                lineType: lineTypes.INDI_RECORD,
                info: "Structure Info coming soon!",
                level: [0],
                tag: "INDI",
                substructs: {
                    "g7:RESN":"0:1",
                    "PERSONAL_NAME_STRUCTURE":"0:M",
                    "g7:SEX":"0:1",
                    "INDIVIDUAL_ATTRIBUTE_STRUCTURE":"0:M",
                    "INDIVIDUAL_EVENT_STRUCTURE":"0:M",
                    "NON_EVENT_STRUCTURE":"0:M",
                    "LDS_INDIVIDUAL_ORDINANCE":"0:M",
                    "g7:INDI-FAMC":"0:M",
                    "g7:FAMS":"0:M",
                    "g7:SUBM":"0:M",
                    "ASSOCIATION_STRUCTURE":"0:M",
                    "g7:ALIA":"0:M",
                    "g7:ANCI":"0:M",
                    "g7:DESI":"0:M",
                    "IDENTIFIER_STRUCTURE":"0:M",
                    "NOTE_STRUCTURE":"0:M",
                    "SOURCE_CITATION" :"0:M",
                    "MULTIMEDIA_LINK":"0:M",
                    "CHANGE_DATE":"0:1",
                    "CREATION_DATE":"0:1"
                }
            }
            
        ]
    },
    {
        grammarName: "Multimedia",
        rules:[
            {
                uri: "g7:record-OBJE",
                lineType: lineTypes.OBJE_RECORD,
                info: "Structure Info coming soon!",
                level: [0],
                tag: "OBJE",
                substructs: {
                    "g7:RESN":"0:1",
                    "g7:FILE":"1:M",
                    "IDENTIFIER_STRUCTURE":"0:M",
                    "NOTE_STRUCTURE":"0:M",
                    "SOURCE_CITATION" :"0:M",
                    "CHANGE_DATE":"0:1",
                    "CREATION_DATE":"0:1"
    
                }
            }
        ]
    },
    {
        grammarName: "Repository",
        rules:[
            {
                uri: "g7:record-REPO",
                lineType: lineTypes.REPO_RECORD,
                info: "Structure Info coming soon!",
                level: [0],
                tag: "REPO",
                substructs: {
                    "g7:NAME":"1:1",
                    "ADDRESS_STRUCTURE":"0:1",
                    "g7:PHON":"0:M", 
                    "g7:EMAIL":"0:M", 
                    "g7:FAX":"0:M", 
                    "g7:WWW":"0:M",
                    "NOTE_STRUCTURE":"0:M",
                    "IDENTIFIER_STRUCTURE":"0:M",
                    "CHANGE_DATE":"0:1",
                    "CREATION_DATE":"0:1"
                }
            }
        ]
    },
    {
        grammarName: "SharedNote",
        rules:[
            {
                uri: "g7:record-SNOTE",
                lineType: lineTypes.SNOTE_RECORD,
                info: "Structure Info coming soon!",
                level: [0],
                lineValType: dataTypes.Text,
                tag: "SNOTE",
                substructs: {
                    "g7:MIME":"0:1",
                    "g7:LANG":"0:1",
                    "g7:NOTE-TRAN":"0:M",
                    "SOURCE_CITATION":"0:M",
                    "IDENTIFIER_STRUCTURE":"0:M",
                    "CHANGE_DATE":"0:1",
                    "CREATION_DATE":"0:1"
                }
            }
        ]
    },
    {
        grammarName: "Source",
        rules:[
            {
                uri: "g7:record-SOUR",
                lineType: lineTypes.SOUR_RECORD,
                info: "Structure Info coming soon!",
                level: [0],
                tag: "SOUR",
                substructs: {
                    "g7:DATA":"0:1",
                    "g7:AUTH":"0:1",
                    "g7:TITL":"0:1",
                    "g7:ABBR":"0:1",
                    "g7:PUBL":"0:1",
                    "g7:TEXT":"0:1",
                    "SOURCE_REPOSITORY_CITATION":"0:M",
                    "IDENTIFIER_STRUCTURE":"0:M",
                    "NOTE_STRUCTURE":"0:M",
                    "MULTIMEDIA_LINK":"0:M",
                    "CHANGE_DATE":"0:1",
                    "CREATION_DATE":"0:1"
    
                }
            }
        ]
    },
    {
        grammarName: "Submitter",
        rules:[
            {
                uri: "g7:record-SUBM",
                lineType: lineTypes.SUBM_RECORD,
                info: "Structure Info coming soon!",
                level: [0],
                tag: "SUBM",
                substructs: {
                    "g7:NAME":"1:1",
                    "ADDRESS_STRUCTURE":"0:1",
                    "g7:PHON":"0:M", 
                    "g7:EMAIL":"0:M", 
                    "g7:FAX":"0:M", 
                    "g7:WWW":"0:M",
                    "MULTIMEDIA_LINK":"0:M",
                    "g7:SUBM-LANG":"0:M",
                    "IDENTIFIER_STRUCTURE":"0:M",
                    "NOTE_STRUCTURE":"0:M",
                    "CHANGE_DATE":"0:1",
                    "CREATION_DATE":"0:1"
                }
            }
        ]
    }
]