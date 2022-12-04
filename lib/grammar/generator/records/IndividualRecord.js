const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Individual",
    generateParser: true,
    include: ["StructureTypes.ne", "Substructures.ne"],
    rules:[
        {
            uri: "g7:record-INDI",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
        
    ]
}