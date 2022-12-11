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
                "g7:RESN":"0:1",
                "g7:FILE":"1:M",
                "IDENTIFIER_STRUCTURE":"0:M",
                "NOTE_STRUCTURE":"0:M",
                "SOURCE_CITATION" :"0:M",
                "CHANGE_DATE":"0:1",
                "CREATION_DATE":"0:1"

            }
        }
    ]
}