const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Source",
    rules:[
        {
            uri: "g7:record-SOUR",
            lineType: lineTypes.SOUR_RECORD,
            level: [0],
            tag: "SOUR",
            substructs: {
                "g7:DATA":"0:1",
                "g7:AUTH":"0:1",
                "g7:TITL":"0:1",
                "g7:ABBR":"0:1",
                "g7:PUBL":"0:1",
                "g7:TEXT":"0:1",
                "SOURCE_REPOSITORY_CITATION":"0:M",
                "IDENTIFIER_STRUCTURE":"0:M",
                "NOTE_STRUCTURE":"0:M",
                "MULTIMEDIA_LINK":"0:M",
                "CHANGE_DATE":"0:1",
                "CREATION_DATE":"0:1"

            }
        }
    ]
}