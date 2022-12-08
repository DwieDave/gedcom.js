# call moo-lexer
@lexer lexer

1_g7_TEST
	-> 1_TEST
		{%id%}
	|  1_TEST 1_TEST_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_TEST
	->"1" D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_TEST", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_HEAD_SOUR_DATA":"0:1"}})%}

1_TEST_Substructs
	-> 2_g7_HEAD_SOUR_DATA
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

3_g7_ADDR
	-> 3_ADDR
		{%id%}
	|  3_ADDR 3_ADDR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_ADDR
	->"3" D "ADDR" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_ADDR", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"4_g7_ADR1":"0:1", "4_g7_ADR2":"0:1", "4_g7_ADR3":"0:1", "4_g7_CITY":"0:1", "4_g7_STAE":"0:1", "4_g7_POST":"0:1", "4_g7_CTRY":"0:1"}})%}

3_ADDR_Substructs
	-> 4_g7_ADR1
		{%id%}
	|  4_g7_ADR2
		{%id%}
	|  4_g7_ADR3
		{%id%}
	|  4_g7_CITY
		{%id%}
	|  4_g7_STAE
		{%id%}
	|  4_g7_POST
		{%id%}
	|  4_g7_CTRY
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

4_g7_ADR1
	-> 4_ADR1
		{%id%}
	|  4_ADR1 4_ADR1_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_ADR1
	->"4" D "ADR1" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_ADR1", type: "NO_XREF", lineValType: "Special"})%}

4_ADR1_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

4_g7_ADR2
	-> 4_ADR2
		{%id%}
	|  4_ADR2 4_ADR2_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_ADR2
	->"4" D "ADR2" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_ADR2", type: "NO_XREF", lineValType: "Special"})%}

4_ADR2_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

4_g7_ADR3
	-> 4_ADR3
		{%id%}
	|  4_ADR3 4_ADR3_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_ADR3
	->"4" D "ADR3" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_ADR3", type: "NO_XREF", lineValType: "Special"})%}

4_ADR3_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

1_g7_CHIL
	-> 1_CHIL
		{%id%}
	|  1_CHIL 1_CHIL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_CHIL
	->"1" D "CHIL" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_CHIL", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"2_g7_PHRASE":"0:1"}})%}

1_CHIL_Substructs
	-> 2_g7_PHRASE
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

4_g7_CITY
	-> 4_CITY
		{%id%}
	|  4_CITY 4_CITY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_CITY
	->"4" D "CITY" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_CITY", type: "NO_XREF", lineValType: "Special"})%}

4_CITY_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

1_g7_COPR
	-> 1_COPR
		{%id%}
	|  1_COPR 1_COPR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_COPR
	->"1" D "COPR" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_COPR", type: "NO_XREF", lineValType: "Text"})%}

1_COPR_Substructs
	-> 2_TEXT_CONTINUATION
		{%id%}

3_g7_COPR
	-> 3_COPR
		{%id%}
	|  3_COPR 3_COPR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_COPR
	->"3" D "COPR" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_COPR", type: "NO_XREF", lineValType: "Text"})%}

3_COPR_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

2_g7_CORP
	-> 2_CORP
		{%id%}
	|  2_CORP 2_CORP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_CORP
	->"2" D "CORP" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_CORP", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"3_ADDRESS_STRUCTURE":"0:1"}})%}

2_CORP_Substructs
	-> 3_ADDRESS_STRUCTURE
		{%id%}
	|  3_g7_PHON
		{%id%}
	|  3_g7_EMAIL
		{%id%}
	|  3_g7_FAX
		{%id%}
	|  3_g7_WWW
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

4_g7_CTRY
	-> 4_CTRY
		{%id%}
	|  4_CTRY 4_CTRY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_CTRY
	->"4" D "CTRY" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_CTRY", type: "NO_XREF", lineValType: "Special"})%}

4_CTRY_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

2_g7_HEAD_SOUR_DATA
	-> 2_HEADSOURDATA
		{%id%}
	|  2_HEADSOURDATA 2_HEADSOURDATA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_HEADSOURDATA
	->"2" D "DATA" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_HEAD_SOUR_DATA", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"3_g7_DATE_exact":"0:1", "3_g7_COPR":"0:1"}})%}

2_HEADSOURDATA_Substructs
	-> 3_g7_DATE_exact
		{%id%}
	|  3_g7_COPR
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

3_g7_DATE_exact
	-> 3_DATEexact
		{%id%}
	|  3_DATEexact 3_DATEexact_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_DATEexact
	->"3" D "DATE" (D DateExact):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_DATE_exact", type: "NO_XREF", lineValType: "DateExact", checkCardinalityOf: {"4_g7_TIME":"0:1"}})%}

3_DATEexact_Substructs
	-> 4_g7_TIME
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

1_g7_HEAD_DATE
	-> 1_HEADDATE
		{%id%}
	|  1_HEADDATE 1_HEADDATE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_HEADDATE
	->"1" D "DATE" (D DateExact):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_HEAD_DATE", type: "NO_XREF", lineValType: "DateExact", checkCardinalityOf: {"2_g7_TIME":"0:1"}})%}

1_HEADDATE_Substructs
	-> 2_g7_TIME
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_DEST
	-> 1_DEST
		{%id%}
	|  1_DEST 1_DEST_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_DEST
	->"1" D "DEST" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_DEST", type: "NO_XREF", lineValType: "Special"})%}

1_DEST_Substructs
	-> 2_TEXT_CONTINUATION
		{%id%}

3_g7_EMAIL
	-> 3_EMAIL
		{%id%}
	|  3_EMAIL 3_EMAIL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_EMAIL
	->"3" D "EMAIL" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_EMAIL", type: "NO_XREF", lineValType: "Special"})%}

3_EMAIL_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

3_g7_FAX
	-> 3_FAX
		{%id%}
	|  3_FAX 3_FAX_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_FAX
	->"3" D "FAX" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_FAX", type: "NO_XREF", lineValType: "Special"})%}

3_FAX_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

2_g7_HEAD_PLAC_FORM
	-> 2_HEADPLACFORM
		{%id%}
	|  2_HEADPLACFORM 2_HEADPLACFORM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_HEADPLACFORM
	->"2" D "FORM" (D ListText):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_HEAD_PLAC_FORM", type: "NO_XREF", lineValType: "ListText"})%}

2_HEADPLACFORM_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

1_g7_GEDC
	-> 1_GEDC
		{%id%}
	|  1_GEDC 1_GEDC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_GEDC
	->"1" D "GEDC" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_GEDC", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"2_g7_GEDC_VERS":"1:1"}})%}

1_GEDC_Substructs
	-> 2_g7_GEDC_VERS
		{%id%}

1_g7_FAM_HUSB
	-> 1_FAMHUSB
		{%id%}
	|  1_FAMHUSB 1_FAMHUSB_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_FAMHUSB
	->"1" D "HUSB" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_FAM_HUSB", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"2_g7_PHRASE":"0:1"}})%}

1_FAMHUSB_Substructs
	-> 2_g7_PHRASE
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

3_g7_LANG
	-> 3_LANG
		{%id%}
	|  3_LANG 3_LANG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_LANG
	->"3" D "LANG" (D Language):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_LANG", type: "NO_XREF", lineValType: "Language"})%}

3_LANG_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

4_g7_LANG
	-> 4_LANG
		{%id%}
	|  4_LANG 4_LANG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_LANG
	->"4" D "LANG" (D Language):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_LANG", type: "NO_XREF", lineValType: "Language"})%}

4_LANG_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

1_g7_HEAD_LANG
	-> 1_HEADLANG
		{%id%}
	|  1_HEADLANG 1_HEADLANG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_HEADLANG
	->"1" D "LANG" (D Language):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_HEAD_LANG", type: "NO_XREF", lineValType: "Language"})%}

1_HEADLANG_Substructs
	-> 2_TEXT_CONTINUATION
		{%id%}

3_g7_MIME
	-> 3_MIME
		{%id%}
	|  3_MIME 3_MIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_MIME
	->"3" D "MIME" (D MediaType):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_MIME", type: "NO_XREF", lineValType: "MediaType"})%}

3_MIME_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

4_g7_MIME
	-> 4_MIME
		{%id%}
	|  4_MIME 4_MIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_MIME
	->"4" D "MIME" (D MediaType):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_MIME", type: "NO_XREF", lineValType: "MediaType"})%}

4_MIME_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

2_g7_NAME
	-> 2_NAME
		{%id%}
	|  2_NAME 2_NAME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_NAME
	->"2" D "NAME" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_NAME", type: "NO_XREF", lineValType: "Text"})%}

2_NAME_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

2_g7_NOTE
	-> 2_NOTE
		{%id%}
	|  2_NOTE 2_NOTE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_NOTE
	->"2" D "NOTE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_NOTE", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"3_g7_MIME":"0:1", "3_g7_LANG":"0:1"}})%}

2_NOTE_Substructs
	-> 3_g7_MIME
		{%id%}
	|  3_g7_LANG
		{%id%}
	|  3_g7_NOTE_TRAN
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

3_g7_PHON
	-> 3_PHON
		{%id%}
	|  3_PHON 3_PHON_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_PHON
	->"3" D "PHON" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_PHON", type: "NO_XREF", lineValType: "Special"})%}

3_PHON_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

2_g7_PHRASE
	-> 2_PHRASE
		{%id%}
	|  2_PHRASE 2_PHRASE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_PHRASE
	->"2" D "PHRASE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_PHRASE", type: "NO_XREF", lineValType: "Text"})%}

2_PHRASE_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

1_g7_HEAD_PLAC
	-> 1_HEADPLAC
		{%id%}
	|  1_HEADPLAC 1_HEADPLAC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_HEADPLAC
	->"1" D "PLAC" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_HEAD_PLAC", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"2_g7_HEAD_PLAC_FORM":"1:1"}})%}

1_HEADPLAC_Substructs
	-> 2_g7_HEAD_PLAC_FORM
		{%id%}

4_g7_POST
	-> 4_POST
		{%id%}
	|  4_POST 4_POST_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_POST
	->"4" D "POST" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_POST", type: "NO_XREF", lineValType: "Special"})%}

4_POST_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

1_g7_RESN
	-> 1_RESN
		{%id%}
	|  1_RESN 1_RESN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_RESN
	->"1" D "RESN" (D ListEnum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_RESN", type: "NO_XREF", lineValType: "ListEnum", enumType: "g7_enumset_RESN"})%}

1_RESN_Substructs
	-> 2_TEXT_CONTINUATION
		{%id%}

1_g7_SCHMA
	-> 1_SCHMA
		{%id%}
	|  1_SCHMA 1_SCHMA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_SCHMA
	->"1" D "SCHMA" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_SCHMA", type: "NO_XREF_NO_LINEVAL"})%}

1_SCHMA_Substructs
	-> 2_g7_TAG
		{%id%}

2_g7_SNOTE
	-> 2_SNOTE
		{%id%}
	|  2_SNOTE 2_SNOTE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_SNOTE
	->"2" D "SNOTE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_SNOTE", type: "NO_XREF", lineValType: "Xref"})%}

2_SNOTE_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

1_g7_HEAD_SOUR
	-> 1_HEADSOUR
		{%id%}
	|  1_HEADSOUR 1_HEADSOUR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_HEADSOUR
	->"1" D "SOUR" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_HEAD_SOUR", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"2_g7_VERS":"0:1", "2_g7_NAME":"0:1", "2_g7_CORP":"0:1", "2_g7_HEAD_SOUR_DATA":"0:1"}})%}

1_HEADSOUR_Substructs
	-> 2_g7_VERS
		{%id%}
	|  2_g7_NAME
		{%id%}
	|  2_g7_CORP
		{%id%}
	|  2_g7_HEAD_SOUR_DATA
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

4_g7_STAE
	-> 4_STAE
		{%id%}
	|  4_STAE 4_STAE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_STAE
	->"4" D "STAE" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_STAE", type: "NO_XREF", lineValType: "Special"})%}

4_STAE_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

1_g7_SUBM
	-> 1_SUBM
		{%id%}
	|  1_SUBM 1_SUBM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_SUBM
	->"1" D "SUBM" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_SUBM", type: "NO_XREF", lineValType: "Xref"})%}

1_SUBM_Substructs
	-> 2_TEXT_CONTINUATION
		{%id%}

2_g7_TAG
	-> 2_TAG
		{%id%}
	|  2_TAG 2_TAG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_TAG
	->"2" D "TAG" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_TAG", type: "NO_XREF", lineValType: "Special"})%}

2_TAG_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

2_g7_TIME
	-> 2_TIME
		{%id%}
	|  2_TIME 2_TIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_TIME
	->"2" D "TIME" (D Time):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_TIME", type: "NO_XREF", lineValType: "Time"})%}

2_TIME_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

4_g7_TIME
	-> 4_TIME
		{%id%}
	|  4_TIME 4_TIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_TIME
	->"4" D "TIME" (D Time):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_TIME", type: "NO_XREF", lineValType: "Time"})%}

4_TIME_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

3_g7_NOTE_TRAN
	-> 3_NOTETRAN
		{%id%}
	|  3_NOTETRAN 3_NOTETRAN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_NOTETRAN
	->"3" D "TRAN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_NOTE_TRAN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"4_g7_MIME":"0:1", "4_g7_LANG":"0:1"}})%}

3_NOTETRAN_Substructs
	-> 4_g7_MIME
		{%id%}
	|  4_g7_LANG
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

2_g7_VERS
	-> 2_VERS
		{%id%}
	|  2_VERS 2_VERS_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_VERS
	->"2" D "VERS" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_VERS", type: "NO_XREF", lineValType: "Special"})%}

2_VERS_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

2_g7_GEDC_VERS
	-> 2_GEDCVERS
		{%id%}
	|  2_GEDCVERS 2_GEDCVERS_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_GEDCVERS
	->"2" D "VERS" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_GEDC_VERS", type: "NO_XREF", lineValType: "Special"})%}

2_GEDCVERS_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

1_g7_FAM_WIFE
	-> 1_FAMWIFE
		{%id%}
	|  1_FAMWIFE 1_FAMWIFE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_FAMWIFE
	->"1" D "WIFE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_FAM_WIFE", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"2_g7_PHRASE":"0:1"}})%}

1_FAMWIFE_Substructs
	-> 2_g7_PHRASE
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

3_g7_WWW
	-> 3_WWW
		{%id%}
	|  3_WWW 3_WWW_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_WWW
	->"3" D "WWW" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_WWW", type: "NO_XREF", lineValType: "Special"})%}

3_WWW_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}