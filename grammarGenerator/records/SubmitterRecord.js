const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Submitter",
    rules:[
        {
            uri: "g7:record-SUBM",
            lineType: lineTypes.NO_XREF,
            level: [0],
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: {}
        }
    ]
}