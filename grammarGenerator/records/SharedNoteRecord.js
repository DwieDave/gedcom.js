const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "SharedNote",
    rules:[
        {
            uri: "g7:record-SNOTE",
            lineType: lineTypes.SNOTE_RECORD,
            level: [0],
            lineValType: dataTypes.Text,
            tag: "SNOTE",
            substructs: {
                "g7:MIME":"0:1",
                "g7:LANG":"0:1",
                "g7:NOTE-TRAN":"0:M",
                "SOURCE_CITATION":"0:M",
                "IDENTIFIER_STRUCTURE":"0:M",
                "CHANGE_DATE":"0:1",
                "CREATION_DATE":"0:1"
            }
        }
    ]
}