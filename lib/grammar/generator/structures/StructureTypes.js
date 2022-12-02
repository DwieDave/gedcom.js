const {lineTypes, dataTypes} = require("../../../Constants.js");
module.exports = {
    grammarName: "StructureTypes",
    generateParser: false,
    rules:[
        {
            uri: "g7:FAM-HUSB",
            lineType: lineTypes.NO_LINEVAL,
            tag: "HUSB",
            substructs: ["g7:PHRASE"],
            checkCardinalityOf: {PHRASE:"0:1"}
        },
        {
            uri: "g7:PHRASE",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "PHRASE",
            substructs: []
        }
    ]
}
