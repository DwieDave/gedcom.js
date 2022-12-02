const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Substructures",
    generateParser: false,
    rules:[
        {
            uri: "g7:TEST",
            lineType: lineTypes.NO_XREF,
            tag: "TEST",
            substructs: ["g7:PHRASE"],
            checkCardinalityOf: {PHRASE:"0:1"}
        }
    ]
}