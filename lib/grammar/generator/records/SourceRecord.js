const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Source",
    rules:[
        {
            uri: "g7:record-SOUR",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}