const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Header",
    rules:[
        {
            uri: "g7:record-HEAD",
            lineType: lineTypes.HEADER,
            tag: "HEAD",
            substructs: ["g7:GEDC", "g7:SCHMA"],
            checkCardinalityOf: {GEDC:"1:1", SCHMA:"0:1"}
        }
    ]
}