const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "SharedNote",
    rules:[
        {
            uri: "g7:record-SNOTE",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}