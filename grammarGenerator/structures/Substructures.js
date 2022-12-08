const {lineTypes, dataTypes} = require("../../lib/Constants");

module.exports = {
    grammarName: "Substructures",
    rules:[
        {
            uri: "ADDRESS_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            level: [3],
            substructs: {"g7:ADDR":"1:1"}
        },
        {
            uri: "ASSOCIATION_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "CHANGE_DATE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "CREATION_DATE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "EVENT_DETAIL",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "FAMILY_ATTRIBUTE_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "FAMILY_EVENT_DETAIL",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "FAMILY_EVENT_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "IDENTIFIER_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "INDIVIDUAL_ATTRIBUTE_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "INDIVIDUAL_EVENT_DETAIL",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "INDIVIDUAL_EVENT_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "LDS_INDIVIDUAL_ORDINANCE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "LDS_ORDINANCE_DETAIL",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "LDS_SPOUSE_SEALING",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "MULTIMEDIA_LINK",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "NON_EVENT_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "NOTE_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            level: [1],
            substructs: {"g7:NOTE":"1:1", "g7:SNOTE":"1:1"}
        },
        {
            uri: "PERSONAL_NAME_PIECES",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "PERSONAL_NAME_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "PLACE_STRUCTURE",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "SOURCE_CITATION",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        },
        {
            uri: "SOURCE_REPOSITORY_CITATION",
            lineType: lineTypes.SUBSTRUCTURE,
            substructs: {},
            incomplete: true
        }
    ]
}