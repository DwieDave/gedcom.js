const {lineTypes, dataTypes} = require("../../lib/Constants");

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