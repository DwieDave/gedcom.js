const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Multimedia",
    rules:[
        {
            uri: "g7:record-OBJE",
            lineType: lineTypes.NO_XREF,
            level: [0],
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: {}
        }
    ]
}