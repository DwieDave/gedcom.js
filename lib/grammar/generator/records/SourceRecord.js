const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Source",
    generateParser: true,
    include: ["StructureTypes.ne", "Substructures.ne"],
    rules:[
        {
            uri: "g7:SourceTest",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}