const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Submitter",
    rules:[
        {
            uri: "g7:record-SUBM",
            lineType: lineTypes.SUBM_RECORD,
            level: [0],
            tag: "SUBM",
            substructs: {}
        }
    ]
}