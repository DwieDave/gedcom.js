const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Submitter",
    rules:[
        {
            uri: "g7:record-SUBM",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}