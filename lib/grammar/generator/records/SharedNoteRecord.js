const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "SharedNote",
    generateParser: true,
    include: ["StructureTypes.ne", "Substructures.ne"],
    rules:[
        {
            uri: "g7:ShareNoteTest",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}