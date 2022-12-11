const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Family",
    rules:[
        {
            uri: "g7:record-FAM",
            lineType: lineTypes.FAM_RECORD,
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
                "CREATION_DATE":"0:1",
                "g7:TEST":"0:1"
            }
        }
    ]
}