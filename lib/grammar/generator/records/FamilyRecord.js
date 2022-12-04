const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Family",
    rules:[
        {
            uri: "g7:record-FAM",
            lineType: lineTypes.FAM_RECORD,
            tag: "FAM",
            substructs: ["g7:FAM-HUSB", "g7:FAM-WIFE"],
            checkCardinalityOf: {HUSB:"0:1"}
        }
    ]
}