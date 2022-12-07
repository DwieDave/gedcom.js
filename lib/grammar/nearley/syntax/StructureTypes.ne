# call moo-lexer
@lexer lexer

g7_ADDR
	-> ADDR
		{%id%}
	|  ADDR ADDRSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

ADDR
	->Level D "ADDR" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_ADDR", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"g7_ADR1":"0:1", "g7_ADR2":"0:1", "g7_ADR3":"0:1", "g7_CITY":"0:1", "g7_STAE":"0:1", "g7_POST":"0:1", "g7_CTRY":"0:1"}})%}

ADDRSubstructs
	-> g7_ADR1
		{%id%}
	|  g7_ADR2
		{%id%}
	|  g7_ADR3
		{%id%}
	|  g7_CITY
		{%id%}
	|  g7_STAE
		{%id%}
	|  g7_POST
		{%id%}
	|  g7_CTRY
		{%id%}
	|  TEXT_CONTINUATION
		{%id%}

g7_ADR1
	-> Level D "ADR1" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_ADR1", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_ADR1 TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_ADR2
	-> Level D "ADR2" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_ADR2", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_ADR2 TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_ADR3
	-> Level D "ADR3" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_ADR3", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_ADR3 TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_CHIL
	-> CHIL
		{%id%}
	|  CHIL CHILSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

CHIL
	->Level D "CHIL" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_CHIL", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"g7_PHRASE":"0:1"}})%}

CHILSubstructs
	-> g7_PHRASE
		{%id%}
	|  TEXT_CONTINUATION
		{%id%}

g7_CITY
	-> Level D "CITY" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_CITY", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_CITY TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_COPR
	-> Level D "COPR" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_COPR", type: "NO_XREF", lineValType: "Text"})%}
	|  g7_COPR TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_CORP
	-> CORP
		{%id%}
	|  CORP CORPSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

CORP
	->Level D "CORP" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_CORP", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"ADDRESS_STRUCTURE":"0:1"}})%}

CORPSubstructs
	-> ADDRESS_STRUCTURE
		{%id%}
	|  g7_PHON
		{%id%}
	|  g7_EMAIL
		{%id%}
	|  g7_FAX
		{%id%}
	|  g7_WWW
		{%id%}
	|  TEXT_CONTINUATION
		{%id%}

g7_CTRY
	-> Level D "CTRY" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_CTRY", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_CTRY TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_HEAD_SOUR_DATA
	-> HEADSOURDATA
		{%id%}
	|  HEADSOURDATA HEADSOURDATASubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

HEADSOURDATA
	->Level D "DATA" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_HEAD_SOUR_DATA", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"g7_DATE_exact":"0:1", "g7_COPR":"0:1"}})%}

HEADSOURDATASubstructs
	-> g7_DATE_exact
		{%id%}
	|  g7_COPR
		{%id%}
	|  TEXT_CONTINUATION
		{%id%}

g7_DATE_exact
	-> DATEexact
		{%id%}
	|  DATEexact DATEexactSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

DATEexact
	->Level D "DATE" (D DateExact):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_DATE_exact", type: "NO_XREF", lineValType: "DateExact", checkCardinalityOf: {"g7_TIME":"0:1"}})%}

DATEexactSubstructs
	-> g7_TIME
		{%id%}
	|  TEXT_CONTINUATION
		{%id%}

g7_HEAD_DATE
	-> HEADDATE
		{%id%}
	|  HEADDATE HEADDATESubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

HEADDATE
	->Level D "DATE" (D DateExact):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_HEAD_DATE", type: "NO_XREF", lineValType: "DateExact", checkCardinalityOf: {"g7_TIME":"0:1"}})%}

HEADDATESubstructs
	-> g7_TIME
		{%id%}
	|  TEXT_CONTINUATION
		{%id%}

g7_DEST
	-> Level D "DEST" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_DEST", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_DEST TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_EMAIL
	-> Level D "EMAIL" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_EMAIL", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_EMAIL TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_FAX
	-> Level D "FAX" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_FAX", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_FAX TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_HEAD_PLAC_FORM
	-> Level D "FORM" (D ListText):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_HEAD_PLAC_FORM", type: "NO_XREF", lineValType: "ListText"})%}
	|  g7_HEAD_PLAC_FORM TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_GEDC
	-> GEDC
		{%id%}
	|  GEDC GEDCSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

GEDC
	->Level D "GEDC" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_GEDC", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"g7_GEDC_VERS":"1:1"}})%}
	|  g7_GEDC g7_GEDC_VERS
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_FAM_HUSB
	-> FAMHUSB
		{%id%}
	|  FAMHUSB FAMHUSBSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

FAMHUSB
	->Level D "HUSB" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_FAM_HUSB", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"g7_PHRASE":"0:1"}})%}

FAMHUSBSubstructs
	-> g7_PHRASE
		{%id%}
	|  TEXT_CONTINUATION
		{%id%}

g7_HEAD_LANG
	-> Level D "LANG" (D Language):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_HEAD_LANG", type: "NO_XREF", lineValType: "Language"})%}
	|  g7_HEAD_LANG TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_NAME
	-> Level D "NAME" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_NAME", type: "NO_XREF", lineValType: "Text"})%}
	|  g7_NAME TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_PHON
	-> Level D "PHON" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_PHON", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_PHON TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_PHRASE
	-> Level D "PHRASE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_PHRASE", type: "NO_XREF", lineValType: "Text"})%}
	|  g7_PHRASE TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_HEAD_PLAC
	-> HEADPLAC
		{%id%}
	|  HEADPLAC HEADPLACSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

HEADPLAC
	->Level D "PLAC" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_HEAD_PLAC", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"g7_HEAD_PLAC_FORM":"1:1"}})%}
	|  g7_HEAD_PLAC g7_HEAD_PLAC_FORM
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_POST
	-> Level D "POST" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_POST", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_POST TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_RESN
	-> Level D "RESN" (D ListEnum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_RESN", type: "NO_XREF", lineValType: "ListEnum", enumType: "g7_enumset_RESN"})%}
	|  g7_RESN TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_SCHMA
	-> SCHMA
		{%id%}
	|  SCHMA SCHMASubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

SCHMA
	->Level D "SCHMA" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_SCHMA", type: "NO_XREF_NO_LINEVAL"})%}
	|  g7_SCHMA g7_TAG
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_HEAD_SOUR
	-> HEADSOUR
		{%id%}
	|  HEADSOUR HEADSOURSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

HEADSOUR
	->Level D "SOUR" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_HEAD_SOUR", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"g7_VERS":"0:1", "g7_NAME":"0:1", "g7_CORP":"0:1", "g7_HEAD_SOUR_DATA":"0:1"}})%}

HEADSOURSubstructs
	-> g7_VERS
		{%id%}
	|  g7_NAME
		{%id%}
	|  g7_CORP
		{%id%}
	|  g7_HEAD_SOUR_DATA
		{%id%}
	|  TEXT_CONTINUATION
		{%id%}

g7_STAE
	-> Level D "STAE" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_STAE", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_STAE TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_SUBM
	-> Level D "SUBM" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_SUBM", type: "NO_XREF", lineValType: "Xref"})%}
	|  g7_SUBM TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_TAG
	-> Level D "TAG" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_TAG", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_TAG TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_TIME
	-> Level D "TIME" (D Time):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_TIME", type: "NO_XREF", lineValType: "Time"})%}
	|  g7_TIME TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_VERS
	-> Level D "VERS" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_VERS", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_VERS TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_GEDC_VERS
	-> Level D "VERS" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_GEDC_VERS", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_GEDC_VERS TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_FAM_WIFE
	-> FAMWIFE
		{%id%}
	|  FAMWIFE FAMWIFESubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

FAMWIFE
	->Level D "WIFE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_FAM_WIFE", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"g7_PHRASE":"0:1"}})%}

FAMWIFESubstructs
	-> g7_PHRASE
		{%id%}
	|  TEXT_CONTINUATION
		{%id%}

g7_WWW
	-> Level D "WWW" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_WWW", type: "NO_XREF", lineValType: "Special"})%}
	|  g7_WWW TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}