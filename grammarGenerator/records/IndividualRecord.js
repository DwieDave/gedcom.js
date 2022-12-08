const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Individual",
    rules:[
        {
            uri: "g7:record-INDI",
            lineType: lineTypes.INDI_RECORD,
            level: [0],
            lineValType: dataTypes.Text,
            tag: "INDI",
            substructs: {
                "g7:RESN":"0:1"
            }
        }
        
    ]
}