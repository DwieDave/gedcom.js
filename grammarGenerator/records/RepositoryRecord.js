const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Repository",
    rules:[
        {
            uri: "g7:record-REPO",
            lineType: lineTypes.NO_XREF,
            level: [0],
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: {}
        }
    ]
}