const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "SharedNote",
    rules:[
        {
            uri: "g7:record-SNOTE",
            lineType: lineTypes.SNOTE_RECORD,
            level: [0],
            lineValType: dataTypes.Text,
            tag: "SNOTE",
            substructs: {
                "SOURCE_CITATION":"0:M"
            }
        }
    ]
}