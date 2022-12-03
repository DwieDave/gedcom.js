const {lineTypes, dataTypes} = require("../../Constants.js");

module.exports = {
    grammarName: "Gedcom",
    generateParser: true,
    include: ["StructureTypes.ne", "Substructures.ne"],
    rules:[
        {
            uri: "g7:FAM-HUSB",
            lineType: lineTypes.FAM_RECORD,
            tag: "FAM",
            substructs: ["g7:FAM-HUSB"],
            checkCardinalityOf: {HUSB:"0:1"}
        }
    ]
}