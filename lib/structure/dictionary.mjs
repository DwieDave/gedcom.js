const records = {
    INDIVIDUAL: {
        NAME: [
            {
                TAG: "NAME",
                URI: "g7:NAME",
                TYPE: "Text",
                CARDINALITY: "0:1"
            },
            {
                SUBTYPE: "PERSONAL_NAME_STRUCTURE",
                CARDINALITY: "0:M",
            }
        ],
        SEX: {
            URI: "g7:SEX",
            TYPE: "Enum",
            CARDINALITY: "0:1"
        }
    }
};

const subTypes = {
    PERSONAL_NAME_STRUCTURE: {
        TAG: "NAME",
        URI: "g7:INDI-NAME",
        TYPE: "PersonalName",
        SUBSTRUCTURES: [
            {
                TAG: "TYPE",
                URI: "g7:NAME-TYPE",
                TYPE: "Enum",
                CARDINALITY: "0:1",
                SUBSTRUCTURES: [
                    {
                        TAG: "PHRASE",
                        URI: "g7:PHRASE",
                        TYPE: "Text",
                        CARDINALITY: "0:1"
                    }
                ]
            },
            {
                SUBTYPE: "PERSONAL_NAME_PIECES",
                CARDINALITY: "0:1"
            },
            {
                TAG: "TRAN",
                URI: "g7:NAME-TRAN",
                TYPE: "PersonalName",
                CARDINALITY: "0:M",
                SUBSTRUCTURES: [
                    {
                        TAG: "LANG",
                        TYPE: "Language",
                        URI: "g7:LANG",
                        CARDINALITY: "1:1",
                    },
                    {
                        SUBTYPE: "PERSONAL_NAME_PIECES",
                        CARDINALITY: "0:1"
                    }
                ]
            },
            // TODO: Note_Structure & Source_Citation_Structure
        ]
    },

    PERSONAL_NAME_PIECES: {
        TAG: "",
        URI: "",
        SUBSTRUCTURES: [
            {
                TAG: "NPFX",
                URI: "g7:NPFX",
                TYPE: "Text",
                CARDINALITY: "0:1"
            },
            {
                TAG: "GIVN",
                URI: "g7:GIVN",
                TYPE: "Text",
                CARDINALITY: "0:1"
            },
            {
                TAG: "NICK",
                URI: "g7:NICK",
                TYPE: "Text",
                CARDINALITY: "0:1"
            },
            {
                TAG: "SPFX",
                URI: "g7:SPFX",
                TYPE: "Text",
                CARDINALITY: "0:1"
            },
            {
                TAG: "SURN",
                URI: "g7:SUR",
                TYPE: "Text",
                CARDINALITY: "0:1"
            },
            {
                TAG: "NSFX",
                URI: "g7:NSFX",
                TYPE: "Text",
                CARDINALITY: "0:1"
            }
        ]
    }
};

const enums = {
    "g7:SEX": "^[MBXU]$",
};

const types = {
    "PersonalName": "^([^\t\/]*)\/?([^\t\/]*)\/?([^\t\/]*)\/?([^\t\/]*)$",
    "Text": ""
};