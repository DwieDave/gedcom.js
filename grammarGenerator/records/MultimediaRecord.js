const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Multimedia",
    rules:[
        {
            uri: "g7:record-OBJE",
            lineType: lineTypes.OBJE_RECORD,
            level: [0],
            tag: "OBJE",
            substructs: {
                "SOURCE_CITATION":"0:M"
            }
        }
    ]
}