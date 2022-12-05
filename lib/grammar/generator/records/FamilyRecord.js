const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Family",
    rules:[
        {
            uri: "g7:record-FAM",
            lineType: lineTypes.FAM_RECORD,
            tag: "FAM",
            substructs:{"g7:FAM-HUSB":"0:1", "g7:FAM-WIFE":"0:1"}
        }
    ]
}