module.exports = {

// HEADER
"g7:record-HEAD": {
	"uri": "g7:record-HEAD",
	"lineType": "HEADER",
	"level": [
		0
	],
	"tag": "HEAD",
	"substructs": {
		"g7:GEDC": "1:1",
		"g7:SCHMA": "0:1",
		"g7:HEAD-SOUR": "0:1",
		"g7:DEST": "0:1",
		"g7:HEAD-DATE": "0:1",
		"g7:SUBM": "0:1",
		"g7:COPR": "0:1",
		"g7:HEAD-LANG": "0:1",
		"g7:HEAD-PLAC": "0:1",
		"NOTE_STRUCTURE": "0:1"
	}
},
// RECORDS
"g7:record-FAM": {
	"uri": "g7:record-FAM",
	"lineType": "FAM_RECORD",
	"info": "Structure Info coming soon!",
	"level": [
		0
	],
	"tag": "FAM",
	"substructs": {
		"g7:RESN": "0:1",
		"FAMILY_ATTRIBUTE_STRUCTURE": "0:M",
		"FAMILY_EVENT_STRUCTURE": "0:M",
		"NON_EVENT_STRUCTURE": "0:M",
		"g7:FAM-HUSB": "0:1",
		"g7:FAM-WIFE": "0:1",
		"g7:CHIL": "0:M",
		"ASSOCIATION_STRUCTURE": "0:M",
		"g7:SUBM": "0:M",
		"LDS_SPOUSE_SEALING": "0:M",
		"IDENTIFIER_STRUCTURE": "0:M",
		"NOTE_STRUCTURE": "0:M",
		"SOURCE_CITATION": "0:M",
		"MULTIMEDIA_LINK": "0:M",
		"CHANGE_DATE": "0:1",
		"CREATION_DATE": "0:1"
	}
},
"g7:record-INDI": {
	"uri": "g7:record-INDI",
	"lineType": "INDI_RECORD",
	"info": "Structure Info coming soon!",
	"level": [
		0
	],
	"tag": "INDI",
	"substructs": {
		"g7:RESN": "0:1",
		"PERSONAL_NAME_STRUCTURE": "0:M",
		"g7:SEX": "0:1",
		"INDIVIDUAL_ATTRIBUTE_STRUCTURE": "0:M",
		"INDIVIDUAL_EVENT_STRUCTURE": "0:M",
		"NON_EVENT_STRUCTURE": "0:M",
		"LDS_INDIVIDUAL_ORDINANCE": "0:M",
		"g7:INDI-FAMC": "0:M",
		"g7:FAMS": "0:M",
		"g7:SUBM": "0:M",
		"ASSOCIATION_STRUCTURE": "0:M",
		"g7:ALIA": "0:M",
		"g7:ANCI": "0:M",
		"g7:DESI": "0:M",
		"IDENTIFIER_STRUCTURE": "0:M",
		"NOTE_STRUCTURE": "0:M",
		"SOURCE_CITATION": "0:M",
		"MULTIMEDIA_LINK": "0:M",
		"CHANGE_DATE": "0:1",
		"CREATION_DATE": "0:1"
	}
},
"g7:record-OBJE": {
	"uri": "g7:record-OBJE",
	"lineType": "OBJE_RECORD",
	"info": "Structure Info coming soon!",
	"level": [
		0
	],
	"tag": "OBJE",
	"substructs": {
		"g7:RESN": "0:1",
		"g7:FILE": "1:M",
		"IDENTIFIER_STRUCTURE": "0:M",
		"NOTE_STRUCTURE": "0:M",
		"SOURCE_CITATION": "0:M",
		"CHANGE_DATE": "0:1",
		"CREATION_DATE": "0:1"
	}
},
"g7:record-REPO": {
	"uri": "g7:record-REPO",
	"lineType": "REPO_RECORD",
	"info": "Structure Info coming soon!",
	"level": [
		0
	],
	"tag": "REPO",
	"substructs": {
		"g7:NAME": "1:1",
		"ADDRESS_STRUCTURE": "0:1",
		"g7:PHON": "0:M",
		"g7:EMAIL": "0:M",
		"g7:FAX": "0:M",
		"g7:WWW": "0:M",
		"NOTE_STRUCTURE": "0:M",
		"IDENTIFIER_STRUCTURE": "0:M",
		"CHANGE_DATE": "0:1",
		"CREATION_DATE": "0:1"
	}
},
"g7:record-SNOTE": {
	"uri": "g7:record-SNOTE",
	"lineType": "SNOTE_RECORD",
	"info": "Structure Info coming soon!",
	"level": [
		0
	],
	"lineValType": "Text",
	"tag": "SNOTE",
	"substructs": {
		"g7:MIME": "0:1",
		"g7:LANG": "0:1",
		"g7:NOTE-TRAN": "0:M",
		"SOURCE_CITATION": "0:M",
		"IDENTIFIER_STRUCTURE": "0:M",
		"CHANGE_DATE": "0:1",
		"CREATION_DATE": "0:1"
	}
},
"g7:record-SOUR": {
	"uri": "g7:record-SOUR",
	"lineType": "SOUR_RECORD",
	"info": "Structure Info coming soon!",
	"level": [
		0
	],
	"tag": "SOUR",
	"substructs": {
		"g7:DATA": "0:1",
		"g7:AUTH": "0:1",
		"g7:TITL": "0:1",
		"g7:ABBR": "0:1",
		"g7:PUBL": "0:1",
		"g7:TEXT": "0:1",
		"SOURCE_REPOSITORY_CITATION": "0:M",
		"IDENTIFIER_STRUCTURE": "0:M",
		"NOTE_STRUCTURE": "0:M",
		"MULTIMEDIA_LINK": "0:M",
		"CHANGE_DATE": "0:1",
		"CREATION_DATE": "0:1"
	}
},
"g7:record-SUBM": {
	"uri": "g7:record-SUBM",
	"lineType": "SUBM_RECORD",
	"info": "Structure Info coming soon!",
	"level": [
		0
	],
	"tag": "SUBM",
	"substructs": {
		"g7:NAME": "1:1",
		"ADDRESS_STRUCTURE": "0:1",
		"g7:PHON": "0:M",
		"g7:EMAIL": "0:M",
		"g7:FAX": "0:M",
		"g7:WWW": "0:M",
		"MULTIMEDIA_LINK": "0:M",
		"g7:SUBM-LANG": "0:M",
		"IDENTIFIER_STRUCTURE": "0:M",
		"NOTE_STRUCTURE": "0:M",
		"CHANGE_DATE": "0:1",
		"CREATION_DATE": "0:1"
	}
},
// STRUCTURE TYPES
"g7:TEST": {
	"uri": "g7:TEST",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "DatePeriod",
	"tag": "TEST",
	"substructs": {}
},
"g7:ABBR": {
	"uri": "g7:ABBR",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "ABBR",
	"substructs": {}
},
"g7:ADDR": {
	"uri": "g7:ADDR",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3
	],
	"lineValType": "Special",
	"tag": "ADDR",
	"substructs": {
		"g7:ADR1": "0:1",
		"g7:ADR2": "0:1",
		"g7:ADR3": "0:1",
		"g7:CITY": "0:1",
		"g7:STAE": "0:1",
		"g7:POST": "0:1",
		"g7:CTRY": "0:1"
	}
},
"g7:ADOP": {
	"uri": "g7:ADOP",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "ADOP",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1",
		"g7:ADOP-FAMC": "0:1"
	}
},
"g7:FAMC-ADOP": {
	"uri": "g7:FAMC-ADOP",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		3
	],
	"lineValType": "Enum",
	"enumType": "g7:enumset-ADOP",
	"tag": "ADOP",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:ADR1": {
	"uri": "g7:ADR1",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4
	],
	"lineValType": "Special",
	"tag": "ADR1",
	"substructs": {}
},
"g7:ADR2": {
	"uri": "g7:ADR2",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4
	],
	"lineValType": "Special",
	"tag": "ADR2",
	"substructs": {}
},
"g7:ADR3": {
	"uri": "g7:ADR3",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4
	],
	"lineValType": "Special",
	"tag": "ADR3",
	"substructs": {}
},
"g7:AGE": {
	"uri": "g7:AGE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3
	],
	"lineValType": "Age",
	"tag": "AGE",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:AGNC": {
	"uri": "g7:AGNC",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Text",
	"tag": "AGNC",
	"substructs": {}
},
"g7:ALIA": {
	"uri": "g7:ALIA",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Xref",
	"tag": "ALIA",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:ANCI": {
	"uri": "g7:ANCI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Xref",
	"tag": "ANCI",
	"substructs": {}
},
"g7:ANUL": {
	"uri": "g7:ANUL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "ANUL",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:ASSO": {
	"uri": "g7:ASSO",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2
	],
	"lineValType": "Xref",
	"tag": "ASSO",
	"substructs": {
		"g7:PHRASE": "0:1",
		"g7:ROLE": "1:1",
		"NOTE_STRUCTURE": "0:M",
		"SOURCE_CITATION": "0:M"
	}
},
"g7:AUTH": {
	"uri": "g7:AUTH",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "AUTH",
	"substructs": {}
},
"g7:BAPL": {
	"uri": "g7:BAPL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		1
	],
	"tag": "BAPL",
	"substructs": {
		"LDS_ORDINANCE_DETAIL": "0:1"
	}
},
"g7:BAPM": {
	"uri": "g7:BAPM",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "BAPM",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:BARM": {
	"uri": "g7:BARM",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "BARM",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:BASM": {
	"uri": "g7:BASM",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "BASM",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:BIRT": {
	"uri": "g7:BIRT",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "BIRT",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1",
		"g7:FAMC": "0:1"
	}
},
"g7:BLES": {
	"uri": "g7:BLES",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "BLES",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:BURI": {
	"uri": "g7:BURI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "BURI",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:CALN": {
	"uri": "g7:CALN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Special",
	"tag": "CALN",
	"substructs": {
		"g7:MEDI": "0:1"
	}
},
"g7:CAST": {
	"uri": "g7:CAST",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "CAST",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:CAUS": {
	"uri": "g7:CAUS",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Text",
	"tag": "CAUS",
	"substructs": {}
},
"g7:FAM-CENS": {
	"uri": "g7:FAM-CENS",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "CENS",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:INDI-CENS": {
	"uri": "g7:INDI-CENS",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "CENS",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:CHAN": {
	"uri": "g7:CHAN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		1,
		2
	],
	"tag": "CHAN",
	"substructs": {
		"g7:DATE-exact": "1:1",
		"NOTE_STRUCTURE": "0:M"
	}
},
"g7:CHIL": {
	"uri": "g7:CHIL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Xref",
	"tag": "CHIL",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:CHRA": {
	"uri": "g7:CHRA",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "CHRA",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:CHR": {
	"uri": "g7:CHR",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "CHR",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1",
		"g7:FAMC": "0:1"
	}
},
"g7:CITY": {
	"uri": "g7:CITY",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4
	],
	"lineValType": "Special",
	"tag": "CITY",
	"substructs": {}
},
"g7:CONF": {
	"uri": "g7:CONF",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "CONF",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:CONL": {
	"uri": "g7:CONL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		1
	],
	"tag": "CONL",
	"substructs": {
		"LDS_ORDINANCE_DETAIL": "0:1"
	}
},
"g7:COPR": {
	"uri": "g7:COPR",
	"info": "Structure Info coming soon!",
	"level": [
		1,
		3
	],
	"lineType": "NO_XREF",
	"lineValType": "Text",
	"tag": "COPR",
	"substructs": {}
},
"g7:CORP": {
	"uri": "g7:CORP",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Text",
	"tag": "CORP",
	"substructs": {
		"ADDRESS_STRUCTURE": "0:1",
		"g7:PHON": "0:M",
		"g7:EMAIL": "0:M",
		"g7:FAX": "0:M",
		"g7:WWW": "0:M"
	}
},
"g7:CREA": {
	"uri": "g7:CREA",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		1
	],
	"tag": "CREA",
	"substructs": {
		"g7:DATE-exact": "1:1"
	}
},
"g7:CREM": {
	"uri": "g7:CREM",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "CREM",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:CROP": {
	"uri": "g7:CROP",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		2,
		3,
		4,
		5,
		6,
		7
	],
	"tag": "CROP",
	"substructs": {
		"g7:TOP": "0:1",
		"g7:LEFT": "0:1",
		"g7:HEIGHT": "0:1",
		"g7:WIDTH": "0:1"
	}
},
"g7:CTRY": {
	"uri": "g7:CTRY",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4
	],
	"lineValType": "Special",
	"tag": "CTRY",
	"substructs": {}
},
"g7:DATA": {
	"uri": "g7:DATA",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		1
	],
	"tag": "DATA",
	"substructs": {
		"g7:DATA-EVEN": "0:M",
		"g7:AGNC": "0:1",
		"NOTE_STRUCTURE": "0:M"
	}
},
"g7:SOUR-DATA": {
	"uri": "g7:SOUR-DATA",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		2,
		3,
		4,
		5,
		6
	],
	"tag": "DATA",
	"substructs": {
		"g7:DATE": "0:1",
		"g7:TEXT": "0:M"
	}
},
"g7:HEAD-SOUR-DATA": {
	"uri": "g7:HEAD-SOUR-DATA",
	"info": "Structure Info coming soon!",
	"level": [
		2
	],
	"lineType": "NO_XREF",
	"lineValType": "Text",
	"tag": "DATA",
	"substructs": {
		"g7:DATE-exact": "0:1",
		"g7:COPR": "0:1"
	}
},
"g7:DATE": {
	"uri": "g7:DATE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4,
		5,
		6,
		7
	],
	"lineValType": "DateValue",
	"tag": "DATE",
	"substructs": {
		"g7:TIME": "0:1",
		"g7:PHRASE": "0:1"
	}
},
"g7:DATE-exact": {
	"uri": "g7:DATE-exact",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3
	],
	"lineValType": "DateExact",
	"tag": "DATE",
	"substructs": {
		"g7:TIME": "0:1"
	}
},
"g7:HEAD-DATE": {
	"uri": "g7:HEAD-DATE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "DateExact",
	"tag": "DATE",
	"substructs": {
		"g7:TIME": "0:1"
	}
},
"g7:NO-DATE": {
	"uri": "g7:NO-DATE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "DatePeriod",
	"tag": "DATE",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:DATA-EVEN-DATE": {
	"uri": "g7:DATA-EVEN-DATE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		3
	],
	"lineValType": "DatePeriod",
	"tag": "DATE",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:DEAT": {
	"uri": "g7:DEAT",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "DEAT",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:DESI": {
	"uri": "g7:DESI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Xref",
	"tag": "DESI",
	"substructs": {}
},
"g7:DEST": {
	"uri": "g7:DEST",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Special",
	"tag": "DEST",
	"substructs": {}
},
"g7:DIVF": {
	"uri": "g7:DIVF",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "DIVF",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:DIV": {
	"uri": "g7:DIV",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "DIV",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:DSCR": {
	"uri": "g7:DSCR",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "DSCR",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:EDUC": {
	"uri": "g7:EDUC",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "EDUC",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:EMAIL": {
	"uri": "g7:EMAIL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3
	],
	"lineValType": "Special",
	"tag": "EMAIL",
	"substructs": {}
},
"g7:EMIG": {
	"uri": "g7:EMIG",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "EMIG",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:ENDL": {
	"uri": "g7:ENDL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		1
	],
	"tag": "ENDL",
	"substructs": {
		"LDS_ORDINANCE_DETAIL": "0:1"
	}
},
"g7:ENGA": {
	"uri": "g7:ENGA",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "ENGA",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:FAM-EVEN": {
	"uri": "g7:FAM-EVEN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "EVEN",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:INDI-EVEN": {
	"uri": "g7:INDI-EVEN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "EVEN",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:DATA-EVEN": {
	"uri": "g7:DATA-EVEN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "ListText",
	"tag": "EVEN",
	"substructs": {
		"g7:DATA-EVEN-DATE": "0:1",
		"PLACE_STRUCTURE": "0:1"
	}
},
"g7:SOUR-EVEN": {
	"uri": "g7:SOUR-EVEN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4,
		5,
		6
	],
	"lineValType": "Text",
	"tag": "EVEN",
	"substructs": {
		"g7:PHRASE": "0:1",
		"g7:ROLE": "0:1"
	}
},
"g7:EXID": {
	"uri": "g7:EXID",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		3,
		4
	],
	"lineValType": "Special",
	"tag": "EXID",
	"substructs": {
		"g7:EXID-TYPE": "0:1"
	}
},
"g7:FAM-FACT": {
	"uri": "g7:FAM-FACT",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "FACT",
	"substructs": {
		"g7:TYPE": "1:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:INDI-FACT": {
	"uri": "g7:INDI-FACT",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "FACT",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:INDI-FAMC": {
	"uri": "g7:INDI-FAMC",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Xref",
	"tag": "FAMC",
	"substructs": {
		"g7:PEDI": "0:1",
		"g7:FAMC-STAT": "0:1",
		"NOTE_STRUCTURE": "0:M"
	}
},
"g7:FAMC": {
	"uri": "g7:FAMC",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Xref",
	"tag": "FAMC",
	"substructs": {}
},
"g7:ADOP-FAMC": {
	"uri": "g7:ADOP-FAMC",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Xref",
	"tag": "FAMC",
	"substructs": {
		"g7:FAMC-ADOP": "0:1"
	}
},
"g7:FAMS": {
	"uri": "g7:FAMS",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Xref",
	"tag": "FAMS",
	"substructs": {
		"NOTE_STRUCTURE": "0:M"
	}
},
"g7:FAX": {
	"uri": "g7:FAX",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3
	],
	"lineValType": "Special",
	"tag": "FAX",
	"substructs": {}
},
"g7:FCOM": {
	"uri": "g7:FCOM",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "FCOM",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:FILE": {
	"uri": "g7:FILE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Special",
	"tag": "FILE",
	"substructs": {
		"g7:FORM": "1:1",
		"g7:TITL": "0:1",
		"g7:FILE-TRAN": "0:M"
	}
},
"g7:FORM": {
	"uri": "g7:FORM",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3
	],
	"lineValType": "MediaType",
	"tag": "FORM",
	"substructs": {
		"g7:MEDI": "0:1"
	}
},
"g7:PLAC-FORM": {
	"uri": "g7:PLAC-FORM",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		3,
		4
	],
	"lineValType": "ListText",
	"tag": "FORM",
	"substructs": {}
},
"g7:HEAD-PLAC-FORM": {
	"uri": "g7:HEAD-PLAC-FORM",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "ListText",
	"tag": "FORM",
	"substructs": {}
},
"g7:GEDC": {
	"uri": "g7:GEDC",
	"info": "Structure Info coming soon!",
	"level": [
		1
	],
	"lineType": "NO_XREF_NO_LINEVAL",
	"tag": "GEDC",
	"substructs": {
		"g7:GEDC-VERS": "1:1"
	}
},
"g7:GIVN": {
	"uri": "g7:GIVN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3
	],
	"lineValType": "Text",
	"tag": "GIVN",
	"substructs": {}
},
"g7:GRAD": {
	"uri": "g7:GRAD",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "GRAD",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:HEIGHT": {
	"uri": "g7:HEIGHT",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		3,
		4,
		5,
		6,
		7,
		8
	],
	"lineValType": "Integer",
	"tag": "HEIGHT",
	"substructs": {}
},
"g7:HUSB": {
	"uri": "g7:HUSB",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		2
	],
	"tag": "HUSB",
	"substructs": {
		"g7:AGE": "1:1"
	}
},
"g7:FAM-HUSB": {
	"uri": "g7:FAM-HUSB",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Xref",
	"tag": "HUSB",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:IDNO": {
	"uri": "g7:IDNO",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Special",
	"tag": "IDNO",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:IMMI": {
	"uri": "g7:IMMI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "IMMI",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:INIL": {
	"uri": "g7:INIL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		1
	],
	"tag": "INIL",
	"substructs": {
		"LDS_ORDINANCE_DETAIL": "0:1"
	}
},
"g7:LANG": {
	"uri": "g7:LANG",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	],
	"lineValType": "Language",
	"tag": "LANG",
	"substructs": {}
},
"g7:HEAD-LANG": {
	"uri": "g7:HEAD-LANG",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Language",
	"tag": "LANG",
	"substructs": {}
},
"g7:SUBM-LANG": {
	"uri": "g7:SUBM-LANG",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Language",
	"tag": "LANG",
	"substructs": {}
},
"g7:LATI": {
	"uri": "g7:LATI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		4,
		5
	],
	"lineValType": "Special",
	"tag": "LATI",
	"substructs": {}
},
"g7:LEFT": {
	"uri": "g7:LEFT",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		3,
		4,
		5,
		6,
		7,
		8
	],
	"lineValType": "Integer",
	"tag": "LEFT",
	"substructs": {}
},
"g7:LONG": {
	"uri": "g7:LONG",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		4,
		5
	],
	"lineValType": "Special",
	"tag": "LONG",
	"substructs": {}
},
"g7:MAP": {
	"uri": "g7:MAP",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		3,
		4
	],
	"tag": "MAP",
	"substructs": {
		"g7:LATI": "1:1",
		"g7:LONG": "1:1"
	}
},
"g7:MARB": {
	"uri": "g7:MARB",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "MARB",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:MARC": {
	"uri": "g7:MARC",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "MARC",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:MARL": {
	"uri": "g7:MARL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "MARL",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:MARR": {
	"uri": "g7:MARR",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "MARR",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:MARS": {
	"uri": "g7:MARS",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "MARS",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:MEDI": {
	"uri": "g7:MEDI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		3,
		4
	],
	"lineValType": "Enum",
	"enumType": "g7:enumset-MEDI",
	"tag": "MEDI",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:MIME": {
	"uri": "g7:MIME",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	],
	"lineValType": "MediaType",
	"tag": "MIME",
	"substructs": {}
},
"g7:NAME": {
	"uri": "g7:NAME",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2
	],
	"lineValType": "Text",
	"tag": "NAME",
	"substructs": {}
},
"g7:INDI-NAME": {
	"uri": "g7:INDI-NAME",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "PersonalName",
	"tag": "NAME",
	"substructs": {
		"g7:NAME-TYPE": "0:1",
		"PERSONAL_NAME_PIECES": "0:1",
		"g7:NAME-TRAN": "0:M",
		"NOTE_STRUCTURE": "0:M",
		"SOURCE_CITATION": "0:M"
	}
},
"g7:NATI": {
	"uri": "g7:NATI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "NATI",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:NATU": {
	"uri": "g7:NATU",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "NATU",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:FAM-NCHI": {
	"uri": "g7:FAM-NCHI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Integer",
	"tag": "NCHI",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:INDI-NCHI": {
	"uri": "g7:INDI-NCHI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Integer",
	"tag": "NCHI",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:NICK": {
	"uri": "g7:NICK",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3
	],
	"lineValType": "Text",
	"tag": "NICK",
	"substructs": {}
},
"g7:NMR": {
	"uri": "g7:NMR",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Integer",
	"tag": "NMR",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:NO": {
	"uri": "g7:NO",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "NO",
	"substructs": {
		"g7:NO-DATE": "0:1",
		"NOTE_STRUCTURE": "0:M",
		"SOURCE_CITATION": "0:M"
	}
},
"g7:NOTE": {
	"uri": "g7:NOTE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3,
		4
	],
	"lineValType": "Text",
	"tag": "NOTE",
	"substructs": {
		"g7:MIME": "0:1",
		"g7:LANG": "0:1",
		"g7:NOTE-TRAN": "0:M",
		"SOURCE_CITATION": "0:M"
	}
},
"g7:NPFX": {
	"uri": "g7:NPFX",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3
	],
	"lineValType": "Text",
	"tag": "NPFX",
	"substructs": {}
},
"g7:NSFX": {
	"uri": "g7:NSFX",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3
	],
	"lineValType": "Text",
	"tag": "NSFX",
	"substructs": {}
},
"g7:OBJE": {
	"uri": "g7:OBJE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3,
		4,
		5,
		6
	],
	"lineValType": "Xref",
	"tag": "OBJE",
	"substructs": {
		"g7:CROP": "0:1",
		"g7:TITL": "0:1"
	}
},
"g7:OCCU": {
	"uri": "g7:OCCU",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "OCCU",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:ORDN": {
	"uri": "g7:ORDN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "ORDN",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:PAGE": {
	"uri": "g7:PAGE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4,
		5,
		6
	],
	"lineValType": "Text",
	"tag": "PAGE",
	"substructs": {}
},
"g7:PEDI": {
	"uri": "g7:PEDI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Enum",
	"enumType": "g7:enumset-PEDI",
	"tag": "PEDI",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:PHON": {
	"uri": "g7:PHON",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3
	],
	"lineValType": "Special",
	"tag": "PHON",
	"substructs": {}
},
"g7:PHRASE": {
	"uri": "g7:PHRASE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4,
		5,
		6,
		7,
		8
	],
	"lineValType": "Text",
	"tag": "PHRASE",
	"substructs": {}
},
"g7:PLAC": {
	"uri": "g7:PLAC",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3
	],
	"lineValType": "ListText",
	"tag": "PLAC",
	"substructs": {
		"g7:PLAC-FORM": "0:1",
		"g7:LANG": "0:1",
		"g7:PLAC-TRAN": "0:M",
		"g7:MAP": "0:1",
		"g7:EXID": "0:M",
		"NOTE_STRUCTURE": "0:M"
	}
},
"g7:HEAD-PLAC": {
	"uri": "g7:HEAD-PLAC",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		1
	],
	"tag": "PLAC",
	"substructs": {
		"g7:HEAD-PLAC-FORM": "1:1"
	}
},
"g7:POST": {
	"uri": "g7:POST",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4
	],
	"lineValType": "Special",
	"tag": "POST",
	"substructs": {}
},
"g7:PROB": {
	"uri": "g7:PROB",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "PROB",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:PROP": {
	"uri": "g7:PROP",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "PROP",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:PUBL": {
	"uri": "g7:PUBL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "PUBL",
	"substructs": {}
},
"g7:QUAY": {
	"uri": "g7:QUAY",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4,
		5,
		6
	],
	"lineValType": "Enum",
	"enumType": "g7:enumset-QUAY",
	"tag": "QUAY",
	"substructs": {}
},
"g7:REFN": {
	"uri": "g7:REFN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Special",
	"tag": "REFN",
	"substructs": {
		"g7:TYPE": "0:1"
	}
},
"g7:RELI": {
	"uri": "g7:RELI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Text",
	"tag": "RELI",
	"substructs": {}
},
"g7:INDI-RELI": {
	"uri": "g7:INDI-RELI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "RELI",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:RESN": {
	"uri": "g7:RESN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2
	],
	"lineValType": "ListEnum",
	"enumType": "g7:enumset-RESN",
	"tag": "RESN",
	"substructs": {}
},
"g7:REPO": {
	"uri": "g7:REPO",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Xref",
	"tag": "REPO",
	"substructs": {
		"NOTE_STRUCTURE": "0:M",
		"g7:CALN": "0:M"
	}
},
"g7:FAM-RESI": {
	"uri": "g7:FAM-RESI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "RESI",
	"substructs": {
		"g7:TYPE": "0:1",
		"FAMILY_EVENT_DETAIL": "0:1"
	}
},
"g7:INDI-RESI": {
	"uri": "g7:INDI-RESI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "RESI",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:RETI": {
	"uri": "g7:RETI",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "RETI",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:ROLE": {
	"uri": "g7:ROLE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4,
		5,
		6,
		7
	],
	"lineValType": "Enum",
	"enumType": "g7:enumset-ROLE",
	"tag": "ROLE",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:SCHMA": {
	"uri": "g7:SCHMA",
	"info": "Structure Info coming soon!",
	"level": [
		1
	],
	"lineType": "NO_XREF_NO_LINEVAL",
	"tag": "SCHMA",
	"substructs": {
		"g7:TAG": "0:M"
	}
},
"g7:SDATE": {
	"uri": "g7:SDATE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "DateValue",
	"tag": "SDATE",
	"substructs": {
		"g7:TIME": "0:1",
		"g7:PHRASE": "0:1"
	}
},
"g7:SEX": {
	"uri": "g7:SEX",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Enum",
	"enumType": "g7:enumset-SEX",
	"tag": "SEX",
	"substructs": {}
},
"g7:SLGC": {
	"uri": "g7:SLGC",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		1
	],
	"tag": "SLGC",
	"substructs": {
		"LDS_ORDINANCE_DETAIL": "0:1",
		"g7:FAMC": "1:1"
	}
},
"g7:SLGS": {
	"uri": "g7:SLGS",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		1
	],
	"tag": "SLGS",
	"substructs": {
		"LDS_ORDINANCE_DETAIL": "0:1"
	}
},
"g7:SNOTE": {
	"uri": "g7:SNOTE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3,
		4
	],
	"lineValType": "Xref",
	"tag": "SNOTE",
	"substructs": {}
},
"g7:SOUR": {
	"uri": "g7:SOUR",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3,
		4,
		5
	],
	"lineValType": "Xref",
	"tag": "SOUR",
	"substructs": {
		"g7:PAGE": "0:1",
		"g7:SOUR-DATA": "0:1",
		"g7:SOUR-EVEN": "0:1",
		"g7:QUAY": "0:1",
		"MULTIMEDIA_LINK": "0:M",
		"NOTE_STRUCTURE": "0:M"
	}
},
"g7:HEAD-SOUR": {
	"uri": "g7:HEAD-SOUR",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Special",
	"tag": "SOUR",
	"substructs": {
		"g7:VERS": "0:1",
		"g7:NAME": "0:1",
		"g7:CORP": "0:1",
		"g7:HEAD-SOUR-DATA": "0:1"
	}
},
"g7:SPFX": {
	"uri": "g7:SPFX",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3
	],
	"lineValType": "Text",
	"tag": "SPFX",
	"substructs": {}
},
"g7:SSN": {
	"uri": "g7:SSN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Special",
	"tag": "SSN",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:STAE": {
	"uri": "g7:STAE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4
	],
	"lineValType": "Special",
	"tag": "STAE",
	"substructs": {}
},
"g7:ord-STAT": {
	"uri": "g7:ord-STAT",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Enum",
	"enumType": "g7:enumset-ord-STAT",
	"tag": "STAT",
	"substructs": {
		"g7:DATE-exact": "1:1"
	}
},
"g7:FAMC-STAT": {
	"uri": "g7:FAMC-STAT",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Enum",
	"enumType": "g7:enumset-FAMC-STAT",
	"tag": "STAT",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:SUBM": {
	"uri": "g7:SUBM",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Xref",
	"tag": "SUBM",
	"substructs": {}
},
"g7:SURN": {
	"uri": "g7:SURN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3
	],
	"lineValType": "Text",
	"tag": "SURN",
	"substructs": {}
},
"g7:TAG": {
	"uri": "g7:TAG",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Special",
	"tag": "TAG",
	"substructs": {}
},
"g7:TEMP": {
	"uri": "g7:TEMP",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Text",
	"tag": "TEMP",
	"substructs": {}
},
"g7:TEXT": {
	"uri": "g7:TEXT",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		3,
		4,
		5,
		6,
		7
	],
	"lineValType": "Text",
	"tag": "TEXT",
	"substructs": {
		"g7:MIME": "0:1",
		"g7:LANG": "0:1"
	}
},
"g7:TIME": {
	"uri": "g7:TIME",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		3,
		4,
		5,
		6,
		7,
		8
	],
	"lineValType": "Time",
	"tag": "TIME",
	"substructs": {}
},
"g7:TITL": {
	"uri": "g7:TITL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3,
		4,
		5,
		6,
		7
	],
	"lineValType": "Text",
	"tag": "TITL",
	"substructs": {}
},
"g7:INDI-TITL": {
	"uri": "g7:INDI-TITL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Text",
	"tag": "TITL",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:TOP": {
	"uri": "g7:TOP",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		3,
		4,
		5,
		6,
		7,
		8
	],
	"lineValType": "Integer",
	"tag": "TOP",
	"substructs": {}
},
"g7:NAME-TRAN": {
	"uri": "g7:NAME-TRAN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "PersonalName",
	"tag": "TRAN",
	"substructs": {
		"g7:LANG": "1:1",
		"PERSONAL_NAME_PIECES": "0:1"
	}
},
"g7:PLAC-TRAN": {
	"uri": "g7:PLAC-TRAN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		3,
		4
	],
	"lineValType": "ListText",
	"tag": "TRAN",
	"substructs": {
		"g7:LANG": "1:1"
	}
},
"g7:NOTE-TRAN": {
	"uri": "g7:NOTE-TRAN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3,
		4,
		5
	],
	"lineValType": "Text",
	"tag": "TRAN",
	"substructs": {
		"g7:MIME": "0:1",
		"g7:LANG": "0:1"
	}
},
"g7:FILE-TRAN": {
	"uri": "g7:FILE-TRAN",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Special",
	"tag": "TRAN",
	"substructs": {
		"g7:FORM": "1:1"
	}
},
"g7:TYPE": {
	"uri": "g7:TYPE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Text",
	"tag": "TYPE",
	"substructs": {}
},
"g7:NAME-TYPE": {
	"uri": "g7:NAME-TYPE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Enum",
	"enumType": "g7:enumset-NAME-TYPE",
	"tag": "TYPE",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:EXID-TYPE": {
	"uri": "g7:EXID-TYPE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2,
		4,
		5
	],
	"lineValType": "Special",
	"tag": "TYPE",
	"substructs": {}
},
"g7:UID": {
	"uri": "g7:UID",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2
	],
	"lineValType": "Special",
	"tag": "UID",
	"substructs": {}
},
"g7:VERS": {
	"uri": "g7:VERS",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Special",
	"tag": "VERS",
	"substructs": {}
},
"g7:GEDC-VERS": {
	"uri": "g7:GEDC-VERS",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		2
	],
	"lineValType": "Special",
	"tag": "VERS",
	"substructs": {}
},
"g7:WIDTH": {
	"uri": "g7:WIDTH",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		3,
		4,
		5,
		6,
		7,
		8
	],
	"lineValType": "Integer",
	"tag": "WIDTH",
	"substructs": {}
},
"g7:WIFE": {
	"uri": "g7:WIFE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF_NO_LINEVAL",
	"level": [
		2
	],
	"tag": "WIFE",
	"substructs": {
		"g7:AGE": "1:1"
	}
},
"g7:FAM-WIFE": {
	"uri": "g7:FAM-WIFE",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "Xref",
	"tag": "WIFE",
	"substructs": {
		"g7:PHRASE": "0:1"
	}
},
"g7:WILL": {
	"uri": "g7:WILL",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1
	],
	"lineValType": "NullOrY",
	"tag": "WILL",
	"substructs": {
		"g7:TYPE": "0:1",
		"INDIVIDUAL_EVENT_DETAIL": "0:1"
	}
},
"g7:WWW": {
	"uri": "g7:WWW",
	"info": "Structure Info coming soon!",
	"lineType": "NO_XREF",
	"level": [
		1,
		2,
		3
	],
	"lineValType": "Special",
	"tag": "WWW",
	"substructs": {}
},
}