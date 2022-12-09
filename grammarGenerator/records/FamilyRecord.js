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
                "g7:FAM-HUSB":"0:1", 
                "g7:FAM-WIFE":"0:1",
                "g7:CHIL":"0:1",
                "FAMILY_ATTRIBUTE_STRUCTURE":"0:M",
                "SOURCE_CITATION":"0:M"
            }
        }
    ]
}