const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Header",
    generateParser: true,
    include: ["StructureTypes.ne", "Substructures.ne"],
    rules:[
        {
            uri: "g7:record-HEAD",
            lineType: lineTypes.HEADER,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}