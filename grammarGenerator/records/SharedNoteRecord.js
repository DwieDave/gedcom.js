const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "SharedNote",
    rules:[
        {
            uri: "g7:record-SNOTE",
            lineType: lineTypes.NO_XREF,
            level: [0],
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: {}
        }
    ]
}