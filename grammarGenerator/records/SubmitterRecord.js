const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Submitter",
    rules:[
        {
            uri: "g7:record-SUBM",
            lineType: lineTypes.SUBM_RECORD,
            level: [0],
            tag: "SUBM",
            substructs: {
                "g7:NAME":"1:1",
                "ADDRESS_STRUCTURE":"0:1",
                "g7:PHON":"0:M", 
                "g7:EMAIL":"0:M", 
                "g7:FAX":"0:M", 
                "g7:WWW":"0:M",
                "MULTIMEDIA_LINK":"0:M",
                "g7:SUBM-LANG":"0:M",
                "IDENTIFIER_STRUCTURE":"0:M",
                "NOTE_STRUCTURE":"0:M",
                "CHANGE_DATE":"0:1",
                "CREATION_DATE":"0:1"
            }
        }
    ]
}