const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Substructures",
    rules:[
        {
            uri: "ADDRESS_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {"g7:ADDR":"1:1"}
        }
    ]
}