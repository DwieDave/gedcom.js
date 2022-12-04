const {lineTypes, dataTypes} = require("../../../Constants.js");
module.exports = {
    grammarName: "StructureTypes",
    generateParser: false,
    rules:[
        {
            uri: "g7:ADDR",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Special,
            tag: "ADDR",
            substructs: ["g7:ADDR1", "g7:ADDR2", "g7:ADDR3"],
            checkCardinalityOf: {ADDR1:"0:1", ADDR2:"0:1", ADDR3:"0:1"}
        },
        {
            uri: "g7:ADDR1",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Special,
            tag: "ADDR1",
            substructs: []
        },
        {
            uri: "g7:ADDR2",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Special,
            tag: "ADDR2",
            substructs: []
        },
        {
            uri: "g7:ADDR3",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Special,
            tag: "ADDR3",
            substructs: []
        },
        {
            uri: "g7:FAM-HUSB",
            lineType: lineTypes.NO_LINEVAL,
            tag: "HUSB",
            substructs: ["g7:PHRASE"],
            checkCardinalityOf: {PHRASE:"0:1"}
        },
        {
            uri: "g7:FAM-WIFE",
            lineType: lineTypes.NO_LINEVAL,
            tag: "WIFE",
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
