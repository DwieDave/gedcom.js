const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Header",
    rules:[
        {
            uri: "g7:record-HEAD",
            lineType: lineTypes.HEADER,
            tag: "HEAD",
            substructs: {
                "g7:GEDC":"1:1", 
                "g7:SCHMA":"0:1", 
                "g7:HEAD-SOUR":"0:1", 
                "g7:DEST":"0:1",
                "g7:HEAD-DATE":"0:1", 
                "g7:SUBM":"0:1",
                "g7:COPR":"0:1",
                "g7:HEAD-LANG":"0:1",
                "g7:HEAD-PLAC":"0:1"
            }
        }
    ]
}