const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Repository",
    rules:[
        {
            uri: "g7:record-REPO",
            lineType: lineTypes.REPO_RECORD,
            level: [0],
            tag: "REPO",
            substructs: {
                "g7:NAME":"1:1",
                "ADDRESS_STRUCTURE":"0:1",
                "g7:PHON":"0:M", 
                "g7:EMAIL":"0:M", 
                "g7:FAX":"0:M", 
                "g7:WWW":"0:M",
                "NOTE_STRUCTURE":"0:M",
                "IDENTIFIER_STRUCTURE":"0:M",
                "CHANGE_DATE":"0:1",
                "CREATION_DATE":"0:1"
            }
        }
    ]
}