const {lineTypes, dataTypes} = require("../../../Constants.js");
module.exports = {
    grammarName: "StructureTypes",
    rules:[
        {
            uri: "g7:ADDR",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Special,
            tag: "ADDR",
            substructs: {"g7:ADDR1": "0:1", "g7:ADDR2": "0:1", "g7:ADDR3":"0:1"}
        },
        {
            uri: "g7:ADDR1",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Special,
            tag: "ADDR1",
            substructs: {}
        },
        {
            uri: "g7:ADDR2",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Special,
            tag: "ADDR2",
            substructs: {}
        },
        {
            uri: "g7:ADDR3",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Special,
            tag: "ADDR3",
            substructs: {}
        },
        {
            uri: "g7:GEDC",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            tag: "GEDC",
            substructs: {"g7:GEDC-VERS":"1:1"}
        },
        {
            uri: "g7:GEDC-VERS",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Special,
            tag: "VERS",
            substructs: {}
        },
        {
            uri: "g7:SCHMA",
            lineType: lineTypes.NO_XREF_NO_LINEVAL,
            tag: "SCHMA",
            substructs: {"g7:TAG":"0:M"}
        },
        {
            uri: "g7:TAG",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Special,
            tag: "TAG",
            substructs: {}
        },
        {
            uri: "g7:FAM-HUSB",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Xref,
            tag: "HUSB",
            substructs: {"g7:PHRASE":"0:1"}
        },
        {
            uri: "g7:FAM-WIFE",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Xref,
            tag: "WIFE",
            substructs: {"g7:PHRASE":"0:1"}
        },
        {
            uri: "g7:PHRASE",
            lineType: lineTypes.NO_XREF,
            lineValType: dataTypes.Text,
            tag: "PHRASE",
            substructs: {}
        }
    ]
}
