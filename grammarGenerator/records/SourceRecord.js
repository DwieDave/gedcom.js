const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Source",
    rules:[
        {
            uri: "g7:record-SOUR",
            lineType: lineTypes.NO_XREF,
            level: [0],
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: {}
        }
    ]
}