const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "GedcomHeader",
    generateParser: true,
    include: ["StructureTypes.ne", "Substructures.ne"],
    rules:[
        {
            uri: "g7:TEST",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}