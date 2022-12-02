const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Substructures",
    generateParser: false,
    rules:[
        {
            uri: "g7:TEST",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}