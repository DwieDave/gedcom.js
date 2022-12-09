const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Source",
    rules:[
        {
            uri: "g7:record-SOUR",
            lineType: lineTypes.SOUR_RECORD,
            level: [0],
            tag: "SOUR",
            substructs: {}
        }
    ]
}