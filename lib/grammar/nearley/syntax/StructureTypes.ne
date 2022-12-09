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

2_g7_ADDR
	-> 2_ADDR
		{%id%}
	|  2_ADDR 2_ADDR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_ADDR
	->"2" D "ADDR" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_ADDR", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"3_g7_ADR1":"0:1", "3_g7_ADR2":"0:1", "3_g7_ADR3":"0:1", "3_g7_CITY":"0:1", "3_g7_STAE":"0:1", "3_g7_POST":"0:1", "3_g7_CTRY":"0:1"}})%}

2_ADDR_Substructs
	-> 3_g7_ADR1
		{%id%}
	|  3_g7_ADR2
		{%id%}
	|  3_g7_ADR3
		{%id%}
	|  3_g7_CITY
		{%id%}
	|  3_g7_STAE
		{%id%}
	|  3_g7_POST
		{%id%}
	|  3_g7_CTRY
		{%id%}
	|  3_TEXT_CONTINUATION
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

3_g7_ADR1
	-> 3_ADR1
		{%id%}
	|  3_ADR1 3_ADR1_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_ADR1
	->"3" D "ADR1" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_ADR1", type: "NO_XREF", lineValType: "Special"})%}

3_ADR1_Substructs
	-> 4_TEXT_CONTINUATION
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

3_g7_ADR2
	-> 3_ADR2
		{%id%}
	|  3_ADR2 3_ADR2_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_ADR2
	->"3" D "ADR2" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_ADR2", type: "NO_XREF", lineValType: "Special"})%}

3_ADR2_Substructs
	-> 4_TEXT_CONTINUATION
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

3_g7_ADR3
	-> 3_ADR3
		{%id%}
	|  3_ADR3 3_ADR3_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_ADR3
	->"3" D "ADR3" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_ADR3", type: "NO_XREF", lineValType: "Special"})%}

3_ADR3_Substructs
	-> 4_TEXT_CONTINUATION
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

3_g7_AGE
	-> 3_AGE
		{%id%}
	|  3_AGE 3_AGE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_AGE
	->"3" D "AGE" (D Age):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_AGE", type: "NO_XREF", lineValType: "Age", checkCardinalityOf: {"4_g7_PHRASE":"0:1"}})%}

3_AGE_Substructs
	-> 4_g7_PHRASE
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

2_g7_AGNC
	-> 2_AGNC
		{%id%}
	|  2_AGNC 2_AGNC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_AGNC
	->"2" D "AGNC" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_AGNC", type: "NO_XREF", lineValType: "Text"})%}

2_AGNC_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

2_g7_ASSO
	-> 2_ASSO
		{%id%}
	|  2_ASSO 2_ASSO_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_ASSO
	->"2" D "ASSO" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_ASSO", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"3_g7_PHRASE":"0:1", "3_g7_ROLE":"1:1"}})%}

2_ASSO_Substructs
	-> 3_g7_PHRASE
		{%id%}
	|  3_g7_ROLE
		{%id%}
	|  3_NOTE_STRUCTURE
		{%id%}
	|  3_SOURCE_CITATION
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

2_g7_CAUS
	-> 2_CAUS
		{%id%}
	|  2_CAUS 2_CAUS_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_CAUS
	->"2" D "CAUS" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_CAUS", type: "NO_XREF", lineValType: "Text"})%}

2_CAUS_Substructs
	-> 3_TEXT_CONTINUATION
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

3_g7_CITY
	-> 3_CITY
		{%id%}
	|  3_CITY 3_CITY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_CITY
	->"3" D "CITY" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_CITY", type: "NO_XREF", lineValType: "Special"})%}

3_CITY_Substructs
	-> 4_TEXT_CONTINUATION
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

3_g7_CTRY
	-> 3_CTRY
		{%id%}
	|  3_CTRY 3_CTRY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_CTRY
	->"3" D "CTRY" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_CTRY", type: "NO_XREF", lineValType: "Special"})%}

3_CTRY_Substructs
	-> 4_TEXT_CONTINUATION
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

2_g7_DATE
	-> 2_DATE
		{%id%}
	|  2_DATE 2_DATE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_DATE
	->"2" D "DATE" (D DateValue):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_DATE", type: "NO_XREF", lineValType: "DateValue", checkCardinalityOf: {"3_g7_TIME":"0:1", "3_g7_PHRASE":"0:1"}})%}

2_DATE_Substructs
	-> 3_g7_TIME
		{%id%}
	|  3_g7_PHRASE
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

2_g7_EMAIL
	-> 2_EMAIL
		{%id%}
	|  2_EMAIL 2_EMAIL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_EMAIL
	->"2" D "EMAIL" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_EMAIL", type: "NO_XREF", lineValType: "Special"})%}

2_EMAIL_Substructs
	-> 3_TEXT_CONTINUATION
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

3_g7_EXID
	-> 3_EXID
		{%id%}
	|  3_EXID 3_EXID_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_EXID
	->"3" D "EXID" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_EXID", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"4_g7_EXID_TYPE":"0:1"}})%}

3_EXID_Substructs
	-> 4_g7_EXID_TYPE
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

1_g7_FAM_FACT
	-> 1_FAMFACT
		{%id%}
	|  1_FAMFACT 1_FAMFACT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_FAMFACT
	->"1" D "FACT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_FAM_FACT", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"1:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_FAMFACT_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_FAX
	-> 2_FAX
		{%id%}
	|  2_FAX 2_FAX_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_FAX
	->"2" D "FAX" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_FAX", type: "NO_XREF", lineValType: "Special"})%}

2_FAX_Substructs
	-> 3_TEXT_CONTINUATION
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

3_g7_PLAC_FORM
	-> 3_PLACFORM
		{%id%}
	|  3_PLACFORM 3_PLACFORM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_PLACFORM
	->"3" D "FORM" (D ListText):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_PLAC_FORM", type: "NO_XREF", lineValType: "ListText"})%}

3_PLACFORM_Substructs
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

2_g7_HUSB
	-> 2_HUSB
		{%id%}
	|  2_HUSB 2_HUSB_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_HUSB
	->"2" D "HUSB" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_HUSB", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"3_g7_AGE":"1:1"}})%}

2_HUSB_Substructs
	-> 3_g7_AGE
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

2_g7_LANG
	-> 2_LANG
		{%id%}
	|  2_LANG 2_LANG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_LANG
	->"2" D "LANG" (D Language):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_LANG", type: "NO_XREF", lineValType: "Language"})%}

2_LANG_Substructs
	-> 3_TEXT_CONTINUATION
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

5_g7_LANG
	-> 5_LANG
		{%id%}
	|  5_LANG 5_LANG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_LANG
	->"5" D "LANG" (D Language):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_LANG", type: "NO_XREF", lineValType: "Language"})%}

5_LANG_Substructs
	-> 6_TEXT_CONTINUATION
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

4_g7_LATI
	-> 4_LATI
		{%id%}
	|  4_LATI 4_LATI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_LATI
	->"4" D "LATI" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_LATI", type: "NO_XREF", lineValType: "Special"})%}

4_LATI_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

4_g7_LONG
	-> 4_LONG
		{%id%}
	|  4_LONG 4_LONG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_LONG
	->"4" D "LONG" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_LONG", type: "NO_XREF", lineValType: "Special"})%}

4_LONG_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

3_g7_MAP
	-> 3_MAP
		{%id%}
	|  3_MAP 3_MAP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_MAP
	->"3" D "MAP" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_MAP", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"4_g7_LATI":"1:1", "4_g7_LONG":"1:1"}})%}

3_MAP_Substructs
	-> 4_g7_LATI
		{%id%}
	|  4_g7_LONG
		{%id%}

2_g7_MIME
	-> 2_MIME
		{%id%}
	|  2_MIME 2_MIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_MIME
	->"2" D "MIME" (D MediaType):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_MIME", type: "NO_XREF", lineValType: "MediaType"})%}

2_MIME_Substructs
	-> 3_TEXT_CONTINUATION
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

5_g7_MIME
	-> 5_MIME
		{%id%}
	|  5_MIME 5_MIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_MIME
	->"5" D "MIME" (D MediaType):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_MIME", type: "NO_XREF", lineValType: "MediaType"})%}

5_MIME_Substructs
	-> 6_TEXT_CONTINUATION
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

1_g7_FAM_NCHI
	-> 1_FAMNCHI
		{%id%}
	|  1_FAMNCHI 1_FAMNCHI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_FAMNCHI
	->"1" D "NCHI" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_FAM_NCHI", type: "NO_XREF", lineValType: "Integer", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_FAMNCHI_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_INTEGER_CONTINUATION
		{%id%}

1_g7_NOTE
	-> 1_NOTE
		{%id%}
	|  1_NOTE 1_NOTE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_NOTE
	->"1" D "NOTE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_NOTE", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_MIME":"0:1", "2_g7_LANG":"0:1"}})%}

1_NOTE_Substructs
	-> 2_g7_MIME
		{%id%}
	|  2_g7_LANG
		{%id%}
	|  2_g7_NOTE_TRAN
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

3_g7_NOTE
	-> 3_NOTE
		{%id%}
	|  3_NOTE 3_NOTE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_NOTE
	->"3" D "NOTE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_NOTE", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"4_g7_MIME":"0:1", "4_g7_LANG":"0:1"}})%}

3_NOTE_Substructs
	-> 4_g7_MIME
		{%id%}
	|  4_g7_LANG
		{%id%}
	|  4_g7_NOTE_TRAN
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

4_g7_PAGE
	-> 4_PAGE
		{%id%}
	|  4_PAGE 4_PAGE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_PAGE
	->"4" D "PAGE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_PAGE", type: "NO_XREF", lineValType: "Text"})%}

4_PAGE_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

2_g7_PHON
	-> 2_PHON
		{%id%}
	|  2_PHON 2_PHON_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_PHON
	->"2" D "PHON" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_PHON", type: "NO_XREF", lineValType: "Special"})%}

2_PHON_Substructs
	-> 3_TEXT_CONTINUATION
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

3_g7_PHRASE
	-> 3_PHRASE
		{%id%}
	|  3_PHRASE 3_PHRASE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_PHRASE
	->"3" D "PHRASE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_PHRASE", type: "NO_XREF", lineValType: "Text"})%}

3_PHRASE_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

4_g7_PHRASE
	-> 4_PHRASE
		{%id%}
	|  4_PHRASE 4_PHRASE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_PHRASE
	->"4" D "PHRASE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_PHRASE", type: "NO_XREF", lineValType: "Text"})%}

4_PHRASE_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

2_g7_PLAC
	-> 2_PLAC
		{%id%}
	|  2_PLAC 2_PLAC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_PLAC
	->"2" D "PLAC" (D ListText):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_PLAC", type: "NO_XREF", lineValType: "ListText", checkCardinalityOf: {"3_g7_PLAC_FORM":"0:1", "3_g7_LANG":"0:1", "3_g7_MAP":"0:1"}})%}

2_PLAC_Substructs
	-> 3_g7_PLAC_FORM
		{%id%}
	|  3_g7_LANG
		{%id%}
	|  3_g7_PLAC_TRAN
		{%id%}
	|  3_g7_MAP
		{%id%}
	|  3_g7_EXID
		{%id%}
	|  3_NOTE_STRUCTURE
		{%id%}
	|  3_TEXT_CONTINUATION
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

3_g7_POST
	-> 3_POST
		{%id%}
	|  3_POST 3_POST_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_POST
	->"3" D "POST" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_POST", type: "NO_XREF", lineValType: "Special"})%}

3_POST_Substructs
	-> 4_TEXT_CONTINUATION
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

2_g7_RELI
	-> 2_RELI
		{%id%}
	|  2_RELI 2_RELI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_RELI
	->"2" D "RELI" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_RELI", type: "NO_XREF", lineValType: "Text"})%}

2_RELI_Substructs
	-> 3_TEXT_CONTINUATION
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

2_g7_RESN
	-> 2_RESN
		{%id%}
	|  2_RESN 2_RESN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_RESN
	->"2" D "RESN" (D ListEnum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_RESN", type: "NO_XREF", lineValType: "ListEnum", enumType: "g7_enumset_RESN"})%}

2_RESN_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

1_g7_FAM_RESI
	-> 1_FAMRESI
		{%id%}
	|  1_FAMRESI 1_FAMRESI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_FAMRESI
	->"1" D "RESI" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_FAM_RESI", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_FAMRESI_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

3_g7_ROLE
	-> 3_ROLE
		{%id%}
	|  3_ROLE 3_ROLE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_ROLE
	->"3" D "ROLE" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_ROLE", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_ROLE", checkCardinalityOf: {"4_g7_PHRASE":"0:1"}})%}

3_ROLE_Substructs
	-> 4_g7_PHRASE
		{%id%}
	|  4_TEXT_CONTINUATION
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

2_g7_SDATE
	-> 2_SDATE
		{%id%}
	|  2_SDATE 2_SDATE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_SDATE
	->"2" D "SDATE" (D DateValue):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_SDATE", type: "NO_XREF", lineValType: "DateValue", checkCardinalityOf: {"3_g7_TIME":"0:1", "3_g7_PHRASE":"0:1"}})%}

2_SDATE_Substructs
	-> 3_g7_TIME
		{%id%}
	|  3_g7_PHRASE
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

1_g7_SNOTE
	-> 1_SNOTE
		{%id%}
	|  1_SNOTE 1_SNOTE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_SNOTE
	->"1" D "SNOTE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_SNOTE", type: "NO_XREF", lineValType: "Xref"})%}

1_SNOTE_Substructs
	-> 2_TEXT_CONTINUATION
		{%id%}

3_g7_SNOTE
	-> 3_SNOTE
		{%id%}
	|  3_SNOTE 3_SNOTE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_SNOTE
	->"3" D "SNOTE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_SNOTE", type: "NO_XREF", lineValType: "Xref"})%}

3_SNOTE_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

3_g7_SOUR
	-> 3_SOUR
		{%id%}
	|  3_SOUR 3_SOUR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_SOUR
	->"3" D "SOUR" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_SOUR", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"4_g7_PAGE":"0:1", "4_g7_SOUR_DATA":"0:1", "4_g7_SOUR_EVEN":"0:1", "4_g7_QUAY":"0:1"}})%}

3_SOUR_Substructs
	-> 4_g7_PAGE
		{%id%}
	|  4_g7_SOUR_DATA
		{%id%}
	|  4_g7_SOUR_EVEN
		{%id%}
	|  4_g7_QUAY
		{%id%}
	|  4_MULTIMEDIA_LINK
		{%id%}
	|  4_NOTE_STRUCTURE
		{%id%}
	|  4_TEXT_CONTINUATION
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

3_g7_STAE
	-> 3_STAE
		{%id%}
	|  3_STAE 3_STAE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_STAE
	->"3" D "STAE" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_STAE", type: "NO_XREF", lineValType: "Special"})%}

3_STAE_Substructs
	-> 4_TEXT_CONTINUATION
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

3_g7_TIME
	-> 3_TIME
		{%id%}
	|  3_TIME 3_TIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_TIME
	->"3" D "TIME" (D Time):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_TIME", type: "NO_XREF", lineValType: "Time"})%}

3_TIME_Substructs
	-> 4_TEXT_CONTINUATION
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

3_g7_PLAC_TRAN
	-> 3_PLACTRAN
		{%id%}
	|  3_PLACTRAN 3_PLACTRAN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_PLACTRAN
	->"3" D "TRAN" (D ListText):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_PLAC_TRAN", type: "NO_XREF", lineValType: "ListText", checkCardinalityOf: {"4_g7_LANG":"1:1"}})%}

3_PLACTRAN_Substructs
	-> 4_g7_LANG
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

2_g7_NOTE_TRAN
	-> 2_NOTETRAN
		{%id%}
	|  2_NOTETRAN 2_NOTETRAN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_NOTETRAN
	->"2" D "TRAN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_NOTE_TRAN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"3_g7_MIME":"0:1", "3_g7_LANG":"0:1"}})%}

2_NOTETRAN_Substructs
	-> 3_g7_MIME
		{%id%}
	|  3_g7_LANG
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

4_g7_NOTE_TRAN
	-> 4_NOTETRAN
		{%id%}
	|  4_NOTETRAN 4_NOTETRAN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_NOTETRAN
	->"4" D "TRAN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_NOTE_TRAN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"5_g7_MIME":"0:1", "5_g7_LANG":"0:1"}})%}

4_NOTETRAN_Substructs
	-> 5_g7_MIME
		{%id%}
	|  5_g7_LANG
		{%id%}
	|  5_TEXT_CONTINUATION
		{%id%}

2_g7_TYPE
	-> 2_TYPE
		{%id%}
	|  2_TYPE 2_TYPE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_TYPE
	->"2" D "TYPE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_TYPE", type: "NO_XREF", lineValType: "Text"})%}

2_TYPE_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

4_g7_EXID_TYPE
	-> 4_EXIDTYPE
		{%id%}
	|  4_EXIDTYPE 4_EXIDTYPE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_EXIDTYPE
	->"4" D "TYPE" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_EXID_TYPE", type: "NO_XREF", lineValType: "Special"})%}

4_EXIDTYPE_Substructs
	-> 5_TEXT_CONTINUATION
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

2_g7_WIFE
	-> 2_WIFE
		{%id%}
	|  2_WIFE 2_WIFE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_WIFE
	->"2" D "WIFE" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_WIFE", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"3_g7_AGE":"1:1"}})%}

2_WIFE_Substructs
	-> 3_g7_AGE
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

2_g7_WWW
	-> 2_WWW
		{%id%}
	|  2_WWW 2_WWW_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_WWW
	->"2" D "WWW" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_WWW", type: "NO_XREF", lineValType: "Special"})%}

2_WWW_Substructs
	-> 3_TEXT_CONTINUATION
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