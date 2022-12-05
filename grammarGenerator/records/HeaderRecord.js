const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Header",
    rules:[
        {
            uri: "g7:record-HEAD",
            lineType: lineTypes.HEADER,
            tag: "HEAD",
            substructs: {"g7:GEDC":"1:1", "g7:SCHMA":"0:1"}
        }
    ]
}