const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Individual",
    rules:[
        {
            uri: "g7:record-INDI",
            lineType: lineTypes.INDI_RECORD,
            level: [0],
            tag: "INDI",
            substructs: {
                "SOURCE_CITATION":"0:M"
            }
        }
        
    ]
}