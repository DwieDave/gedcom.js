const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Substructures",
    generateParser: false,
    rules:[
        {
            uri: "ADDRESS_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: ["g7:ADDR"],
            checkCardinalityOf: {ADDR:"0:1"}
        }
    ]
}