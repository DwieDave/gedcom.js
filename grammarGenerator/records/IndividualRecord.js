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
                "g7:RESN":"0:1",
                "PERSONAL_NAME_STRUCTURE":"0:M",
                "g7:SEX":"0:1",
                "INDIVIDUAL_ATTRIBUTE_STRUCTURE":"0:M",
                "INDIVIDUAL_EVENT_STRUCTURE":"0:M",
                "NON_EVENT_STRUCTURE":"0:M",
                "LDS_INDIVIDUAL_ORDINANCE":"0:M",
                "g7:INDI-FAMC":"0:M",
                "g7:FAMS":"0:M",
                "g7:SUBM":"0:M",
                "ASSOCIATION_STRUCTURE":"0:M",
                "g7:ALIA":"0:M",
                "g7:ANCI":"0:M",
                "g7:DESI":"0:M",
                "IDENTIFIER_STRUCTURE":"0:M",
                "NOTE_STRUCTURE":"0:M",
                "SOURCE_CITATION" :"0:M",
                "MULTIMEDIA_LINK":"0:M",
                "CHANGE_DATE":"0:1",
                "CREATION_DATE":"0:1"
            }
        }
        
    ]
}