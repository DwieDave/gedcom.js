const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Repository",
    rules:[
        {
            uri: "g7:record-REPO",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}