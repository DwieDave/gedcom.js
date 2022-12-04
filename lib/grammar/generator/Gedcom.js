const {lineTypes, dataTypes} = require("../../Constants.js");

module.exports = {
    grammarName: "Gedcom",
    rules:[
        {
            uri: "GEDCOM",
            lineType: lineTypes.GEDCOM,
            substructs: ["g7:record-FAM", "g7:record-INDI", "g7:record-OBJE", "g7:record-REPO", "g7:record-SNOTE", "g7:record-SOUR", "g7:record-SUBM"]
        }
    ]
}