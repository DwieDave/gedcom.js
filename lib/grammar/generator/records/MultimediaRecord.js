const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Multimedia",
    generateParser: true,
    include: ["StructureTypes.ne", "Substructures.ne"],
    rules:[
        {
            uri: "g7:MultimediaTest",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}