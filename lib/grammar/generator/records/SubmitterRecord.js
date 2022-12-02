const {lineTypes, dataTypes} = require("../../../Constants.js");

module.exports = {
    grammarName: "Submitter",
    generateParser: true,
    include: ["StructureTypes.ne", "Substructures.ne"],
    rules:[
        {
            uri: "g7:SubmitterTest",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "TEST",
            substructs: []
        }
    ]
}