# call moo-lexer
@lexer lexer

1_g7_TEST
	-> 1_TEST
		{%id%}
	|  1_TEST 1_TEST_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_TEST
	->"1" D "TEST" (D DatePeriod):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_TEST", type: "NO_XREF", lineValType: "DatePeriod"})%}

1_TEST_Substructs
	-> 2_TEXT_CONTINUATION
		{%id%}

1_g7_ADDR
	-> 1_ADDR
		{%id%}
	|  1_ADDR 1_ADDR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_ADDR
	->"1" D "ADDR" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_ADDR", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"2_g7_ADR1":"0:1", "2_g7_ADR2":"0:1", "2_g7_ADR3":"0:1", "2_g7_CITY":"0:1", "2_g7_STAE":"0:1", "2_g7_POST":"0:1", "2_g7_CTRY":"0:1"}})%}

1_ADDR_Substructs
	-> 2_g7_ADR1
		{%id%}
	|  2_g7_ADR2
		{%id%}
	|  2_g7_ADR3
		{%id%}
	|  2_g7_CITY
		{%id%}
	|  2_g7_STAE
		{%id%}
	|  2_g7_POST
		{%id%}
	|  2_g7_CTRY
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

1_g7_ADOP
	-> 1_ADOP
		{%id%}
	|  1_ADOP 1_ADOP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_ADOP
	->"1" D "ADOP" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_ADOP", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1", "2_g7_ADOP_FAMC":"0:1"}})%}

1_ADOP_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_g7_ADOP_FAMC
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

3_g7_FAMC_ADOP
	-> 3_FAMCADOP
		{%id%}
	|  3_FAMCADOP 3_FAMCADOP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_FAMCADOP
	->"3" D "ADOP" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_FAMC_ADOP", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_ADOP", checkCardinalityOf: {"4_g7_PHRASE":"0:1"}})%}

3_FAMCADOP_Substructs
	-> 4_g7_PHRASE
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

2_g7_ADR1
	-> 2_ADR1
		{%id%}
	|  2_ADR1 2_ADR1_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_ADR1
	->"2" D "ADR1" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_ADR1", type: "NO_XREF", lineValType: "Special"})%}

2_ADR1_Substructs
	-> 3_TEXT_CONTINUATION
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

2_g7_ADR2
	-> 2_ADR2
		{%id%}
	|  2_ADR2 2_ADR2_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_ADR2
	->"2" D "ADR2" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_ADR2", type: "NO_XREF", lineValType: "Special"})%}

2_ADR2_Substructs
	-> 3_TEXT_CONTINUATION
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

2_g7_ADR3
	-> 2_ADR3
		{%id%}
	|  2_ADR3 2_ADR3_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_ADR3
	->"2" D "ADR3" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_ADR3", type: "NO_XREF", lineValType: "Special"})%}

2_ADR3_Substructs
	-> 3_TEXT_CONTINUATION
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

2_g7_AGE
	-> 2_AGE
		{%id%}
	|  2_AGE 2_AGE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_AGE
	->"2" D "AGE" (D Age):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_AGE", type: "NO_XREF", lineValType: "Age", checkCardinalityOf: {"3_g7_PHRASE":"0:1"}})%}

2_AGE_Substructs
	-> 3_g7_PHRASE
		{%id%}
	|  3_TEXT_CONTINUATION
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

1_g7_ALIA
	-> 1_ALIA
		{%id%}
	|  1_ALIA 1_ALIA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_ALIA
	->"1" D "ALIA" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_ALIA", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"2_g7_PHRASE":"0:1"}})%}

1_ALIA_Substructs
	-> 2_g7_PHRASE
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_ANCI
	-> 1_ANCI
		{%id%}
	|  1_ANCI 1_ANCI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_ANCI
	->"1" D "ANCI" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_ANCI", type: "NO_XREF", lineValType: "Xref"})%}

1_ANCI_Substructs
	-> 2_TEXT_CONTINUATION
		{%id%}

1_g7_ANUL
	-> 1_ANUL
		{%id%}
	|  1_ANUL 1_ANUL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_ANUL
	->"1" D "ANUL" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_ANUL", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_ANUL_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_ASSO
	-> 1_ASSO
		{%id%}
	|  1_ASSO 1_ASSO_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_ASSO
	->"1" D "ASSO" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_ASSO", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"2_g7_PHRASE":"0:1", "2_g7_ROLE":"1:1"}})%}

1_ASSO_Substructs
	-> 2_g7_PHRASE
		{%id%}
	|  2_g7_ROLE
		{%id%}
	|  2_NOTE_STRUCTURE
		{%id%}
	|  2_SOURCE_CITATION
		{%id%}
	|  2_TEXT_CONTINUATION
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

1_g7_BAPL
	-> 1_BAPL
		{%id%}
	|  1_BAPL 1_BAPL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_BAPL
	->"1" D "BAPL" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_BAPL", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"2_LDS_ORDINANCE_DETAIL":"0:1"}})%}

1_BAPL_Substructs
	-> 2_LDS_ORDINANCE_DETAIL
		{%id%}

1_g7_BAPM
	-> 1_BAPM
		{%id%}
	|  1_BAPM 1_BAPM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_BAPM
	->"1" D "BAPM" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_BAPM", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_BAPM_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_BARM
	-> 1_BARM
		{%id%}
	|  1_BARM 1_BARM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_BARM
	->"1" D "BARM" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_BARM", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_BARM_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_BASM
	-> 1_BASM
		{%id%}
	|  1_BASM 1_BASM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_BASM
	->"1" D "BASM" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_BASM", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_BASM_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_BIRT
	-> 1_BIRT
		{%id%}
	|  1_BIRT 1_BIRT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_BIRT
	->"1" D "BIRT" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_BIRT", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1", "2_g7_FAMC":"0:1"}})%}

1_BIRT_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_g7_FAMC
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_BLES
	-> 1_BLES
		{%id%}
	|  1_BLES 1_BLES_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_BLES
	->"1" D "BLES" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_BLES", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_BLES_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_BURI
	-> 1_BURI
		{%id%}
	|  1_BURI 1_BURI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_BURI
	->"1" D "BURI" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_BURI", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_BURI_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_CALN
	-> 2_CALN
		{%id%}
	|  2_CALN 2_CALN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_CALN
	->"2" D "CALN" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_CALN", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"3_g7_MEDI":"0:1"}})%}

2_CALN_Substructs
	-> 3_g7_MEDI
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

1_g7_CAST
	-> 1_CAST
		{%id%}
	|  1_CAST 1_CAST_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_CAST
	->"1" D "CAST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_CAST", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_CAST_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
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

1_g7_FAM_CENS
	-> 1_FAMCENS
		{%id%}
	|  1_FAMCENS 1_FAMCENS_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_FAMCENS
	->"1" D "CENS" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_FAM_CENS", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_FAMCENS_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_INDI_CENS
	-> 1_INDICENS
		{%id%}
	|  1_INDICENS 1_INDICENS_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_INDICENS
	->"1" D "CENS" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_INDI_CENS", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_INDICENS_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_CHAN
	-> 1_CHAN
		{%id%}
	|  1_CHAN 1_CHAN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_CHAN
	->"1" D "CHAN" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_CHAN", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"2_g7_DATE_exact":"1:1"}})%}

1_CHAN_Substructs
	-> 2_g7_DATE_exact
		{%id%}
	|  2_NOTE_STRUCTURE
		{%id%}

2_g7_CHAN
	-> 2_CHAN
		{%id%}
	|  2_CHAN 2_CHAN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_CHAN
	->"2" D "CHAN" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_CHAN", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"3_g7_DATE_exact":"1:1"}})%}

2_CHAN_Substructs
	-> 3_g7_DATE_exact
		{%id%}
	|  3_NOTE_STRUCTURE
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

1_g7_CHRA
	-> 1_CHRA
		{%id%}
	|  1_CHRA 1_CHRA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_CHRA
	->"1" D "CHRA" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_CHRA", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_CHRA_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_CHR
	-> 1_CHR
		{%id%}
	|  1_CHR 1_CHR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_CHR
	->"1" D "CHR" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_CHR", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1", "2_g7_FAMC":"0:1"}})%}

1_CHR_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_g7_FAMC
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_CITY
	-> 2_CITY
		{%id%}
	|  2_CITY 2_CITY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_CITY
	->"2" D "CITY" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_CITY", type: "NO_XREF", lineValType: "Special"})%}

2_CITY_Substructs
	-> 3_TEXT_CONTINUATION
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

1_g7_CONF
	-> 1_CONF
		{%id%}
	|  1_CONF 1_CONF_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_CONF
	->"1" D "CONF" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_CONF", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_CONF_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_CONL
	-> 1_CONL
		{%id%}
	|  1_CONL 1_CONL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_CONL
	->"1" D "CONL" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_CONL", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"2_LDS_ORDINANCE_DETAIL":"0:1"}})%}

1_CONL_Substructs
	-> 2_LDS_ORDINANCE_DETAIL
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

1_g7_CREA
	-> 1_CREA
		{%id%}
	|  1_CREA 1_CREA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_CREA
	->"1" D "CREA" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_CREA", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"2_g7_DATE_exact":"1:1"}})%}

1_CREA_Substructs
	-> 2_g7_DATE_exact
		{%id%}

1_g7_CREM
	-> 1_CREM
		{%id%}
	|  1_CREM 1_CREM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_CREM
	->"1" D "CREM" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_CREM", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_CREM_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_CROP
	-> 2_CROP
		{%id%}
	|  2_CROP 2_CROP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_CROP
	->"2" D "CROP" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_CROP", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"3_g7_TOP":"0:1", "3_g7_LEFT":"0:1", "3_g7_HEIGHT":"0:1", "3_g7_WIDTH":"0:1"}})%}

2_CROP_Substructs
	-> 3_g7_TOP
		{%id%}
	|  3_g7_LEFT
		{%id%}
	|  3_g7_HEIGHT
		{%id%}
	|  3_g7_WIDTH
		{%id%}

3_g7_CROP
	-> 3_CROP
		{%id%}
	|  3_CROP 3_CROP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_CROP
	->"3" D "CROP" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_CROP", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"4_g7_TOP":"0:1", "4_g7_LEFT":"0:1", "4_g7_HEIGHT":"0:1", "4_g7_WIDTH":"0:1"}})%}

3_CROP_Substructs
	-> 4_g7_TOP
		{%id%}
	|  4_g7_LEFT
		{%id%}
	|  4_g7_HEIGHT
		{%id%}
	|  4_g7_WIDTH
		{%id%}

4_g7_CROP
	-> 4_CROP
		{%id%}
	|  4_CROP 4_CROP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_CROP
	->"4" D "CROP" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_CROP", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"5_g7_TOP":"0:1", "5_g7_LEFT":"0:1", "5_g7_HEIGHT":"0:1", "5_g7_WIDTH":"0:1"}})%}

4_CROP_Substructs
	-> 5_g7_TOP
		{%id%}
	|  5_g7_LEFT
		{%id%}
	|  5_g7_HEIGHT
		{%id%}
	|  5_g7_WIDTH
		{%id%}

5_g7_CROP
	-> 5_CROP
		{%id%}
	|  5_CROP 5_CROP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_CROP
	->"5" D "CROP" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_CROP", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"6_g7_TOP":"0:1", "6_g7_LEFT":"0:1", "6_g7_HEIGHT":"0:1", "6_g7_WIDTH":"0:1"}})%}

5_CROP_Substructs
	-> 6_g7_TOP
		{%id%}
	|  6_g7_LEFT
		{%id%}
	|  6_g7_HEIGHT
		{%id%}
	|  6_g7_WIDTH
		{%id%}

6_g7_CROP
	-> 6_CROP
		{%id%}
	|  6_CROP 6_CROP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_CROP
	->"6" D "CROP" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_CROP", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"7_g7_TOP":"0:1", "7_g7_LEFT":"0:1", "7_g7_HEIGHT":"0:1", "7_g7_WIDTH":"0:1"}})%}

6_CROP_Substructs
	-> 7_g7_TOP
		{%id%}
	|  7_g7_LEFT
		{%id%}
	|  7_g7_HEIGHT
		{%id%}
	|  7_g7_WIDTH
		{%id%}

7_g7_CROP
	-> 7_CROP
		{%id%}
	|  7_CROP 7_CROP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_CROP
	->"7" D "CROP" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_CROP", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"8_g7_TOP":"0:1", "8_g7_LEFT":"0:1", "8_g7_HEIGHT":"0:1", "8_g7_WIDTH":"0:1"}})%}

7_CROP_Substructs
	-> 8_g7_TOP
		{%id%}
	|  8_g7_LEFT
		{%id%}
	|  8_g7_HEIGHT
		{%id%}
	|  8_g7_WIDTH
		{%id%}

2_g7_CTRY
	-> 2_CTRY
		{%id%}
	|  2_CTRY 2_CTRY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_CTRY
	->"2" D "CTRY" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_CTRY", type: "NO_XREF", lineValType: "Special"})%}

2_CTRY_Substructs
	-> 3_TEXT_CONTINUATION
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

2_g7_SOUR_DATA
	-> 2_SOURDATA
		{%id%}
	|  2_SOURDATA 2_SOURDATA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_SOURDATA
	->"2" D "DATA" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_SOUR_DATA", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"3_g7_DATE":"0:1", "3_g7_TEXT":"0:1"}})%}

2_SOURDATA_Substructs
	-> 3_g7_DATE
		{%id%}
	|  3_g7_TEXT
		{%id%}

3_g7_SOUR_DATA
	-> 3_SOURDATA
		{%id%}
	|  3_SOURDATA 3_SOURDATA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_SOURDATA
	->"3" D "DATA" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_SOUR_DATA", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"4_g7_DATE":"0:1", "4_g7_TEXT":"0:1"}})%}

3_SOURDATA_Substructs
	-> 4_g7_DATE
		{%id%}
	|  4_g7_TEXT
		{%id%}

4_g7_SOUR_DATA
	-> 4_SOURDATA
		{%id%}
	|  4_SOURDATA 4_SOURDATA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_SOURDATA
	->"4" D "DATA" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_SOUR_DATA", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"5_g7_DATE":"0:1", "5_g7_TEXT":"0:1"}})%}

4_SOURDATA_Substructs
	-> 5_g7_DATE
		{%id%}
	|  5_g7_TEXT
		{%id%}

5_g7_SOUR_DATA
	-> 5_SOURDATA
		{%id%}
	|  5_SOURDATA 5_SOURDATA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_SOURDATA
	->"5" D "DATA" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_SOUR_DATA", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"6_g7_DATE":"0:1", "6_g7_TEXT":"0:1"}})%}

5_SOURDATA_Substructs
	-> 6_g7_DATE
		{%id%}
	|  6_g7_TEXT
		{%id%}

6_g7_SOUR_DATA
	-> 6_SOURDATA
		{%id%}
	|  6_SOURDATA 6_SOURDATA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_SOURDATA
	->"6" D "DATA" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_SOUR_DATA", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"7_g7_DATE":"0:1", "7_g7_TEXT":"0:1"}})%}

6_SOURDATA_Substructs
	-> 7_g7_DATE
		{%id%}
	|  7_g7_TEXT
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

3_g7_DATE
	-> 3_DATE
		{%id%}
	|  3_DATE 3_DATE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_DATE
	->"3" D "DATE" (D DateValue):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_DATE", type: "NO_XREF", lineValType: "DateValue", checkCardinalityOf: {"4_g7_TIME":"0:1", "4_g7_PHRASE":"0:1"}})%}

3_DATE_Substructs
	-> 4_g7_TIME
		{%id%}
	|  4_g7_PHRASE
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

4_g7_DATE
	-> 4_DATE
		{%id%}
	|  4_DATE 4_DATE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_DATE
	->"4" D "DATE" (D DateValue):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_DATE", type: "NO_XREF", lineValType: "DateValue", checkCardinalityOf: {"5_g7_TIME":"0:1", "5_g7_PHRASE":"0:1"}})%}

4_DATE_Substructs
	-> 5_g7_TIME
		{%id%}
	|  5_g7_PHRASE
		{%id%}
	|  5_TEXT_CONTINUATION
		{%id%}

5_g7_DATE
	-> 5_DATE
		{%id%}
	|  5_DATE 5_DATE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_DATE
	->"5" D "DATE" (D DateValue):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_DATE", type: "NO_XREF", lineValType: "DateValue", checkCardinalityOf: {"6_g7_TIME":"0:1", "6_g7_PHRASE":"0:1"}})%}

5_DATE_Substructs
	-> 6_g7_TIME
		{%id%}
	|  6_g7_PHRASE
		{%id%}
	|  6_TEXT_CONTINUATION
		{%id%}

6_g7_DATE
	-> 6_DATE
		{%id%}
	|  6_DATE 6_DATE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_DATE
	->"6" D "DATE" (D DateValue):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_DATE", type: "NO_XREF", lineValType: "DateValue", checkCardinalityOf: {"7_g7_TIME":"0:1", "7_g7_PHRASE":"0:1"}})%}

6_DATE_Substructs
	-> 7_g7_TIME
		{%id%}
	|  7_g7_PHRASE
		{%id%}
	|  7_TEXT_CONTINUATION
		{%id%}

7_g7_DATE
	-> 7_DATE
		{%id%}
	|  7_DATE 7_DATE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_DATE
	->"7" D "DATE" (D DateValue):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_DATE", type: "NO_XREF", lineValType: "DateValue", checkCardinalityOf: {"8_g7_TIME":"0:1", "8_g7_PHRASE":"0:1"}})%}

7_DATE_Substructs
	-> 8_g7_TIME
		{%id%}
	|  8_g7_PHRASE
		{%id%}
	|  8_TEXT_CONTINUATION
		{%id%}

2_g7_DATE_exact
	-> 2_DATEexact
		{%id%}
	|  2_DATEexact 2_DATEexact_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_DATEexact
	->"2" D "DATE" (D DateExact):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_DATE_exact", type: "NO_XREF", lineValType: "DateExact", checkCardinalityOf: {"3_g7_TIME":"0:1"}})%}

2_DATEexact_Substructs
	-> 3_g7_TIME
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

2_g7_NO_DATE
	-> 2_NODATE
		{%id%}
	|  2_NODATE 2_NODATE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_NODATE
	->"2" D "DATE" (D DatePeriod):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_NO_DATE", type: "NO_XREF", lineValType: "DatePeriod", checkCardinalityOf: {"3_g7_PHRASE":"0:1"}})%}

2_NODATE_Substructs
	-> 3_g7_PHRASE
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

1_g7_DEAT
	-> 1_DEAT
		{%id%}
	|  1_DEAT 1_DEAT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_DEAT
	->"1" D "DEAT" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_DEAT", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_DEAT_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_DESI
	-> 1_DESI
		{%id%}
	|  1_DESI 1_DESI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_DESI
	->"1" D "DESI" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_DESI", type: "NO_XREF", lineValType: "Xref"})%}

1_DESI_Substructs
	-> 2_TEXT_CONTINUATION
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

1_g7_DIVF
	-> 1_DIVF
		{%id%}
	|  1_DIVF 1_DIVF_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_DIVF
	->"1" D "DIVF" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_DIVF", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_DIVF_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_DIV
	-> 1_DIV
		{%id%}
	|  1_DIV 1_DIV_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_DIV
	->"1" D "DIV" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_DIV", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_DIV_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_DSCR
	-> 1_DSCR
		{%id%}
	|  1_DSCR 1_DSCR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_DSCR
	->"1" D "DSCR" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_DSCR", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_DSCR_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_EDUC
	-> 1_EDUC
		{%id%}
	|  1_EDUC 1_EDUC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_EDUC
	->"1" D "EDUC" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_EDUC", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_EDUC_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
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

1_g7_EMIG
	-> 1_EMIG
		{%id%}
	|  1_EMIG 1_EMIG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_EMIG
	->"1" D "EMIG" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_EMIG", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_EMIG_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_ENDL
	-> 1_ENDL
		{%id%}
	|  1_ENDL 1_ENDL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_ENDL
	->"1" D "ENDL" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_ENDL", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"2_LDS_ORDINANCE_DETAIL":"0:1"}})%}

1_ENDL_Substructs
	-> 2_LDS_ORDINANCE_DETAIL
		{%id%}

1_g7_ENGA
	-> 1_ENGA
		{%id%}
	|  1_ENGA 1_ENGA_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_ENGA
	->"1" D "ENGA" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_ENGA", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_ENGA_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_FAM_EVEN
	-> 1_FAMEVEN
		{%id%}
	|  1_FAMEVEN 1_FAMEVEN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_FAMEVEN
	->"1" D "EVEN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_FAM_EVEN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_FAMEVEN_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_INDI_EVEN
	-> 1_INDIEVEN
		{%id%}
	|  1_INDIEVEN 1_INDIEVEN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_INDIEVEN
	->"1" D "EVEN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_INDI_EVEN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_INDIEVEN_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_SOUR_EVEN
	-> 2_SOUREVEN
		{%id%}
	|  2_SOUREVEN 2_SOUREVEN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_SOUREVEN
	->"2" D "EVEN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_SOUR_EVEN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"3_g7_PHRASE":"0:1", "3_g7_ROLE":"0:1"}})%}

2_SOUREVEN_Substructs
	-> 3_g7_PHRASE
		{%id%}
	|  3_g7_ROLE
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

3_g7_SOUR_EVEN
	-> 3_SOUREVEN
		{%id%}
	|  3_SOUREVEN 3_SOUREVEN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_SOUREVEN
	->"3" D "EVEN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_SOUR_EVEN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"4_g7_PHRASE":"0:1", "4_g7_ROLE":"0:1"}})%}

3_SOUREVEN_Substructs
	-> 4_g7_PHRASE
		{%id%}
	|  4_g7_ROLE
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

4_g7_SOUR_EVEN
	-> 4_SOUREVEN
		{%id%}
	|  4_SOUREVEN 4_SOUREVEN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_SOUREVEN
	->"4" D "EVEN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_SOUR_EVEN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"5_g7_PHRASE":"0:1", "5_g7_ROLE":"0:1"}})%}

4_SOUREVEN_Substructs
	-> 5_g7_PHRASE
		{%id%}
	|  5_g7_ROLE
		{%id%}
	|  5_TEXT_CONTINUATION
		{%id%}

5_g7_SOUR_EVEN
	-> 5_SOUREVEN
		{%id%}
	|  5_SOUREVEN 5_SOUREVEN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_SOUREVEN
	->"5" D "EVEN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_SOUR_EVEN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"6_g7_PHRASE":"0:1", "6_g7_ROLE":"0:1"}})%}

5_SOUREVEN_Substructs
	-> 6_g7_PHRASE
		{%id%}
	|  6_g7_ROLE
		{%id%}
	|  6_TEXT_CONTINUATION
		{%id%}

6_g7_SOUR_EVEN
	-> 6_SOUREVEN
		{%id%}
	|  6_SOUREVEN 6_SOUREVEN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_SOUREVEN
	->"6" D "EVEN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_SOUR_EVEN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"7_g7_PHRASE":"0:1", "7_g7_ROLE":"0:1"}})%}

6_SOUREVEN_Substructs
	-> 7_g7_PHRASE
		{%id%}
	|  7_g7_ROLE
		{%id%}
	|  7_TEXT_CONTINUATION
		{%id%}

1_g7_EXID
	-> 1_EXID
		{%id%}
	|  1_EXID 1_EXID_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_EXID
	->"1" D "EXID" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_EXID", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"2_g7_EXID_TYPE":"0:1"}})%}

1_EXID_Substructs
	-> 2_g7_EXID_TYPE
		{%id%}
	|  2_TEXT_CONTINUATION
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

4_g7_EXID
	-> 4_EXID
		{%id%}
	|  4_EXID 4_EXID_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_EXID
	->"4" D "EXID" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_EXID", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"5_g7_EXID_TYPE":"0:1"}})%}

4_EXID_Substructs
	-> 5_g7_EXID_TYPE
		{%id%}
	|  5_TEXT_CONTINUATION
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

1_g7_INDI_FACT
	-> 1_INDIFACT
		{%id%}
	|  1_INDIFACT 1_INDIFACT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_INDIFACT
	->"1" D "FACT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_INDI_FACT", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_INDIFACT_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_INDI_FAMC
	-> 1_INDIFAMC
		{%id%}
	|  1_INDIFAMC 1_INDIFAMC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_INDIFAMC
	->"1" D "FAMC" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_INDI_FAMC", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"2_g7_PEDI":"0:1", "2_g7_FAMC_STAT":"0:1"}})%}

1_INDIFAMC_Substructs
	-> 2_g7_PEDI
		{%id%}
	|  2_g7_FAMC_STAT
		{%id%}
	|  2_NOTE_STRUCTURE
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_FAMC
	-> 2_FAMC
		{%id%}
	|  2_FAMC 2_FAMC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_FAMC
	->"2" D "FAMC" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_FAMC", type: "NO_XREF", lineValType: "Xref"})%}

2_FAMC_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

2_g7_ADOP_FAMC
	-> 2_ADOPFAMC
		{%id%}
	|  2_ADOPFAMC 2_ADOPFAMC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_ADOPFAMC
	->"2" D "FAMC" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_ADOP_FAMC", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"3_g7_FAMC_ADOP":"0:1"}})%}

2_ADOPFAMC_Substructs
	-> 3_g7_FAMC_ADOP
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

1_g7_FAMS
	-> 1_FAMS
		{%id%}
	|  1_FAMS 1_FAMS_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_FAMS
	->"1" D "FAMS" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_FAMS", type: "NO_XREF", lineValType: "Xref"})%}

1_FAMS_Substructs
	-> 2_NOTE_STRUCTURE
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

1_g7_FCOM
	-> 1_FCOM
		{%id%}
	|  1_FCOM 1_FCOM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_FCOM
	->"1" D "FCOM" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_FCOM", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_FCOM_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
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

4_g7_PLAC_FORM
	-> 4_PLACFORM
		{%id%}
	|  4_PLACFORM 4_PLACFORM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_PLACFORM
	->"4" D "FORM" (D ListText):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_PLAC_FORM", type: "NO_XREF", lineValType: "ListText"})%}

4_PLACFORM_Substructs
	-> 5_TEXT_CONTINUATION
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

2_g7_GIVN
	-> 2_GIVN
		{%id%}
	|  2_GIVN 2_GIVN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_GIVN
	->"2" D "GIVN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_GIVN", type: "NO_XREF", lineValType: "Text"})%}

2_GIVN_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

3_g7_GIVN
	-> 3_GIVN
		{%id%}
	|  3_GIVN 3_GIVN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_GIVN
	->"3" D "GIVN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_GIVN", type: "NO_XREF", lineValType: "Text"})%}

3_GIVN_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

1_g7_GRAD
	-> 1_GRAD
		{%id%}
	|  1_GRAD 1_GRAD_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_GRAD
	->"1" D "GRAD" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_GRAD", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_GRAD_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

3_g7_HEIGHT
	-> 3_HEIGHT
		{%id%}
	|  3_HEIGHT 3_HEIGHT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_HEIGHT
	->"3" D "HEIGHT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_HEIGHT", type: "NO_XREF", lineValType: "Integer"})%}

3_HEIGHT_Substructs
	-> 4_INTEGER_CONTINUATION
		{%id%}

4_g7_HEIGHT
	-> 4_HEIGHT
		{%id%}
	|  4_HEIGHT 4_HEIGHT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_HEIGHT
	->"4" D "HEIGHT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_HEIGHT", type: "NO_XREF", lineValType: "Integer"})%}

4_HEIGHT_Substructs
	-> 5_INTEGER_CONTINUATION
		{%id%}

5_g7_HEIGHT
	-> 5_HEIGHT
		{%id%}
	|  5_HEIGHT 5_HEIGHT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_HEIGHT
	->"5" D "HEIGHT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_HEIGHT", type: "NO_XREF", lineValType: "Integer"})%}

5_HEIGHT_Substructs
	-> 6_INTEGER_CONTINUATION
		{%id%}

6_g7_HEIGHT
	-> 6_HEIGHT
		{%id%}
	|  6_HEIGHT 6_HEIGHT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_HEIGHT
	->"6" D "HEIGHT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_HEIGHT", type: "NO_XREF", lineValType: "Integer"})%}

6_HEIGHT_Substructs
	-> 7_INTEGER_CONTINUATION
		{%id%}

7_g7_HEIGHT
	-> 7_HEIGHT
		{%id%}
	|  7_HEIGHT 7_HEIGHT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_HEIGHT
	->"7" D "HEIGHT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_HEIGHT", type: "NO_XREF", lineValType: "Integer"})%}

7_HEIGHT_Substructs
	-> 8_INTEGER_CONTINUATION
		{%id%}

8_g7_HEIGHT
	-> 8_HEIGHT
		{%id%}
	|  8_HEIGHT 8_HEIGHT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

8_HEIGHT
	->"8" D "HEIGHT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "8_g7_HEIGHT", type: "NO_XREF", lineValType: "Integer"})%}

8_HEIGHT_Substructs
	-> 9_INTEGER_CONTINUATION
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

1_g7_IDNO
	-> 1_IDNO
		{%id%}
	|  1_IDNO 1_IDNO_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_IDNO
	->"1" D "IDNO" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_IDNO", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_IDNO_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_IMMI
	-> 1_IMMI
		{%id%}
	|  1_IMMI 1_IMMI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_IMMI
	->"1" D "IMMI" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_IMMI", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_IMMI_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_INIL
	-> 1_INIL
		{%id%}
	|  1_INIL 1_INIL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_INIL
	->"1" D "INIL" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_INIL", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"2_LDS_ORDINANCE_DETAIL":"0:1"}})%}

1_INIL_Substructs
	-> 2_LDS_ORDINANCE_DETAIL
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

6_g7_LANG
	-> 6_LANG
		{%id%}
	|  6_LANG 6_LANG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_LANG
	->"6" D "LANG" (D Language):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_LANG", type: "NO_XREF", lineValType: "Language"})%}

6_LANG_Substructs
	-> 7_TEXT_CONTINUATION
		{%id%}

7_g7_LANG
	-> 7_LANG
		{%id%}
	|  7_LANG 7_LANG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_LANG
	->"7" D "LANG" (D Language):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_LANG", type: "NO_XREF", lineValType: "Language"})%}

7_LANG_Substructs
	-> 8_TEXT_CONTINUATION
		{%id%}

8_g7_LANG
	-> 8_LANG
		{%id%}
	|  8_LANG 8_LANG_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

8_LANG
	->"8" D "LANG" (D Language):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "8_g7_LANG", type: "NO_XREF", lineValType: "Language"})%}

8_LANG_Substructs
	-> 9_TEXT_CONTINUATION
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

3_g7_LEFT
	-> 3_LEFT
		{%id%}
	|  3_LEFT 3_LEFT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_LEFT
	->"3" D "LEFT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_LEFT", type: "NO_XREF", lineValType: "Integer"})%}

3_LEFT_Substructs
	-> 4_INTEGER_CONTINUATION
		{%id%}

4_g7_LEFT
	-> 4_LEFT
		{%id%}
	|  4_LEFT 4_LEFT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_LEFT
	->"4" D "LEFT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_LEFT", type: "NO_XREF", lineValType: "Integer"})%}

4_LEFT_Substructs
	-> 5_INTEGER_CONTINUATION
		{%id%}

5_g7_LEFT
	-> 5_LEFT
		{%id%}
	|  5_LEFT 5_LEFT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_LEFT
	->"5" D "LEFT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_LEFT", type: "NO_XREF", lineValType: "Integer"})%}

5_LEFT_Substructs
	-> 6_INTEGER_CONTINUATION
		{%id%}

6_g7_LEFT
	-> 6_LEFT
		{%id%}
	|  6_LEFT 6_LEFT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_LEFT
	->"6" D "LEFT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_LEFT", type: "NO_XREF", lineValType: "Integer"})%}

6_LEFT_Substructs
	-> 7_INTEGER_CONTINUATION
		{%id%}

7_g7_LEFT
	-> 7_LEFT
		{%id%}
	|  7_LEFT 7_LEFT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_LEFT
	->"7" D "LEFT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_LEFT", type: "NO_XREF", lineValType: "Integer"})%}

7_LEFT_Substructs
	-> 8_INTEGER_CONTINUATION
		{%id%}

8_g7_LEFT
	-> 8_LEFT
		{%id%}
	|  8_LEFT 8_LEFT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

8_LEFT
	->"8" D "LEFT" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "8_g7_LEFT", type: "NO_XREF", lineValType: "Integer"})%}

8_LEFT_Substructs
	-> 9_INTEGER_CONTINUATION
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

4_g7_MAP
	-> 4_MAP
		{%id%}
	|  4_MAP 4_MAP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_MAP
	->"4" D "MAP" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_MAP", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"5_g7_LATI":"1:1", "5_g7_LONG":"1:1"}})%}

4_MAP_Substructs
	-> 5_g7_LATI
		{%id%}
	|  5_g7_LONG
		{%id%}

1_g7_MARB
	-> 1_MARB
		{%id%}
	|  1_MARB 1_MARB_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_MARB
	->"1" D "MARB" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_MARB", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_MARB_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_MARC
	-> 1_MARC
		{%id%}
	|  1_MARC 1_MARC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_MARC
	->"1" D "MARC" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_MARC", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_MARC_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_MARL
	-> 1_MARL
		{%id%}
	|  1_MARL 1_MARL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_MARL
	->"1" D "MARL" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_MARL", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_MARL_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_MARR
	-> 1_MARR
		{%id%}
	|  1_MARR 1_MARR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_MARR
	->"1" D "MARR" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_MARR", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_MARR_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_MARS
	-> 1_MARS
		{%id%}
	|  1_MARS 1_MARS_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_MARS
	->"1" D "MARS" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_MARS", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_FAMILY_EVENT_DETAIL":"0:1"}})%}

1_MARS_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_FAMILY_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

3_g7_MEDI
	-> 3_MEDI
		{%id%}
	|  3_MEDI 3_MEDI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_MEDI
	->"3" D "MEDI" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_MEDI", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_MEDI", checkCardinalityOf: {"4_g7_PHRASE":"0:1"}})%}

3_MEDI_Substructs
	-> 4_g7_PHRASE
		{%id%}
	|  4_TEXT_CONTINUATION
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

6_g7_MIME
	-> 6_MIME
		{%id%}
	|  6_MIME 6_MIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_MIME
	->"6" D "MIME" (D MediaType):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_MIME", type: "NO_XREF", lineValType: "MediaType"})%}

6_MIME_Substructs
	-> 7_TEXT_CONTINUATION
		{%id%}

7_g7_MIME
	-> 7_MIME
		{%id%}
	|  7_MIME 7_MIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_MIME
	->"7" D "MIME" (D MediaType):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_MIME", type: "NO_XREF", lineValType: "MediaType"})%}

7_MIME_Substructs
	-> 8_TEXT_CONTINUATION
		{%id%}

8_g7_MIME
	-> 8_MIME
		{%id%}
	|  8_MIME 8_MIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

8_MIME
	->"8" D "MIME" (D MediaType):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "8_g7_MIME", type: "NO_XREF", lineValType: "MediaType"})%}

8_MIME_Substructs
	-> 9_TEXT_CONTINUATION
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

1_g7_INDI_NAME
	-> 1_INDINAME
		{%id%}
	|  1_INDINAME 1_INDINAME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_INDINAME
	->"1" D "NAME" (D PersonalName):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_INDI_NAME", type: "NO_XREF", lineValType: "PersonalName", checkCardinalityOf: {"2_g7_NAME_TYPE":"0:1", "2_PERSONAL_NAME_PIECES":"0:1"}})%}

1_INDINAME_Substructs
	-> 2_g7_NAME_TYPE
		{%id%}
	|  2_PERSONAL_NAME_PIECES
		{%id%}
	|  2_g7_NAME_TRAN
		{%id%}
	|  2_NOTE_STRUCTURE
		{%id%}
	|  2_SOURCE_CITATION
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_NATI
	-> 1_NATI
		{%id%}
	|  1_NATI 1_NATI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_NATI
	->"1" D "NATI" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_NATI", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_NATI_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_NATU
	-> 1_NATU
		{%id%}
	|  1_NATU 1_NATU_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_NATU
	->"1" D "NATU" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_NATU", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_NATU_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
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

1_g7_INDI_NCHI
	-> 1_INDINCHI
		{%id%}
	|  1_INDINCHI 1_INDINCHI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_INDINCHI
	->"1" D "NCHI" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_INDI_NCHI", type: "NO_XREF", lineValType: "Integer", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_INDINCHI_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_INTEGER_CONTINUATION
		{%id%}

2_g7_NICK
	-> 2_NICK
		{%id%}
	|  2_NICK 2_NICK_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_NICK
	->"2" D "NICK" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_NICK", type: "NO_XREF", lineValType: "Text"})%}

2_NICK_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

3_g7_NICK
	-> 3_NICK
		{%id%}
	|  3_NICK 3_NICK_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_NICK
	->"3" D "NICK" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_NICK", type: "NO_XREF", lineValType: "Text"})%}

3_NICK_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

1_g7_NMR
	-> 1_NMR
		{%id%}
	|  1_NMR 1_NMR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_NMR
	->"1" D "NMR" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_NMR", type: "NO_XREF", lineValType: "Integer", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_NMR_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_INTEGER_CONTINUATION
		{%id%}

1_g7_NO
	-> 1_NO
		{%id%}
	|  1_NO 1_NO_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_NO
	->"1" D "NO" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_NO", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_NO_DATE":"0:1"}})%}

1_NO_Substructs
	-> 2_g7_NO_DATE
		{%id%}
	|  2_NOTE_STRUCTURE
		{%id%}
	|  2_SOURCE_CITATION
		{%id%}
	|  2_TEXT_CONTINUATION
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
	|  2_SOURCE_CITATION
		{%id%}
	|  2_TEXT_CONTINUATION
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
	|  3_SOURCE_CITATION
		{%id%}
	|  3_TEXT_CONTINUATION
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
	|  4_SOURCE_CITATION
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

4_g7_NOTE
	-> 4_NOTE
		{%id%}
	|  4_NOTE 4_NOTE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_NOTE
	->"4" D "NOTE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_NOTE", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"5_g7_MIME":"0:1", "5_g7_LANG":"0:1"}})%}

4_NOTE_Substructs
	-> 5_g7_MIME
		{%id%}
	|  5_g7_LANG
		{%id%}
	|  5_g7_NOTE_TRAN
		{%id%}
	|  5_SOURCE_CITATION
		{%id%}
	|  5_TEXT_CONTINUATION
		{%id%}

2_g7_NPFX
	-> 2_NPFX
		{%id%}
	|  2_NPFX 2_NPFX_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_NPFX
	->"2" D "NPFX" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_NPFX", type: "NO_XREF", lineValType: "Text"})%}

2_NPFX_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

3_g7_NPFX
	-> 3_NPFX
		{%id%}
	|  3_NPFX 3_NPFX_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_NPFX
	->"3" D "NPFX" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_NPFX", type: "NO_XREF", lineValType: "Text"})%}

3_NPFX_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

2_g7_NSFX
	-> 2_NSFX
		{%id%}
	|  2_NSFX 2_NSFX_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_NSFX
	->"2" D "NSFX" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_NSFX", type: "NO_XREF", lineValType: "Text"})%}

2_NSFX_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

3_g7_NSFX
	-> 3_NSFX
		{%id%}
	|  3_NSFX 3_NSFX_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_NSFX
	->"3" D "NSFX" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_NSFX", type: "NO_XREF", lineValType: "Text"})%}

3_NSFX_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

1_g7_OBJE
	-> 1_OBJE
		{%id%}
	|  1_OBJE 1_OBJE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_OBJE
	->"1" D "OBJE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_OBJE", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"2_g7_CROP":"0:1", "2_g7_TITL":"0:1"}})%}

1_OBJE_Substructs
	-> 2_g7_CROP
		{%id%}
	|  2_g7_TITL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_OBJE
	-> 2_OBJE
		{%id%}
	|  2_OBJE 2_OBJE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_OBJE
	->"2" D "OBJE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_OBJE", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"3_g7_CROP":"0:1", "3_g7_TITL":"0:1"}})%}

2_OBJE_Substructs
	-> 3_g7_CROP
		{%id%}
	|  3_g7_TITL
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

3_g7_OBJE
	-> 3_OBJE
		{%id%}
	|  3_OBJE 3_OBJE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_OBJE
	->"3" D "OBJE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_OBJE", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"4_g7_CROP":"0:1", "4_g7_TITL":"0:1"}})%}

3_OBJE_Substructs
	-> 4_g7_CROP
		{%id%}
	|  4_g7_TITL
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

4_g7_OBJE
	-> 4_OBJE
		{%id%}
	|  4_OBJE 4_OBJE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_OBJE
	->"4" D "OBJE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_OBJE", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"5_g7_CROP":"0:1", "5_g7_TITL":"0:1"}})%}

4_OBJE_Substructs
	-> 5_g7_CROP
		{%id%}
	|  5_g7_TITL
		{%id%}
	|  5_TEXT_CONTINUATION
		{%id%}

5_g7_OBJE
	-> 5_OBJE
		{%id%}
	|  5_OBJE 5_OBJE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_OBJE
	->"5" D "OBJE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_OBJE", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"6_g7_CROP":"0:1", "6_g7_TITL":"0:1"}})%}

5_OBJE_Substructs
	-> 6_g7_CROP
		{%id%}
	|  6_g7_TITL
		{%id%}
	|  6_TEXT_CONTINUATION
		{%id%}

6_g7_OBJE
	-> 6_OBJE
		{%id%}
	|  6_OBJE 6_OBJE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_OBJE
	->"6" D "OBJE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_OBJE", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"7_g7_CROP":"0:1", "7_g7_TITL":"0:1"}})%}

6_OBJE_Substructs
	-> 7_g7_CROP
		{%id%}
	|  7_g7_TITL
		{%id%}
	|  7_TEXT_CONTINUATION
		{%id%}

1_g7_OCCU
	-> 1_OCCU
		{%id%}
	|  1_OCCU 1_OCCU_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_OCCU
	->"1" D "OCCU" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_OCCU", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_OCCU_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_ORDN
	-> 1_ORDN
		{%id%}
	|  1_ORDN 1_ORDN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_ORDN
	->"1" D "ORDN" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_ORDN", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_ORDN_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_PAGE
	-> 2_PAGE
		{%id%}
	|  2_PAGE 2_PAGE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_PAGE
	->"2" D "PAGE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_PAGE", type: "NO_XREF", lineValType: "Text"})%}

2_PAGE_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

3_g7_PAGE
	-> 3_PAGE
		{%id%}
	|  3_PAGE 3_PAGE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_PAGE
	->"3" D "PAGE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_PAGE", type: "NO_XREF", lineValType: "Text"})%}

3_PAGE_Substructs
	-> 4_TEXT_CONTINUATION
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

5_g7_PAGE
	-> 5_PAGE
		{%id%}
	|  5_PAGE 5_PAGE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_PAGE
	->"5" D "PAGE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_PAGE", type: "NO_XREF", lineValType: "Text"})%}

5_PAGE_Substructs
	-> 6_TEXT_CONTINUATION
		{%id%}

6_g7_PAGE
	-> 6_PAGE
		{%id%}
	|  6_PAGE 6_PAGE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_PAGE
	->"6" D "PAGE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_PAGE", type: "NO_XREF", lineValType: "Text"})%}

6_PAGE_Substructs
	-> 7_TEXT_CONTINUATION
		{%id%}

2_g7_PEDI
	-> 2_PEDI
		{%id%}
	|  2_PEDI 2_PEDI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_PEDI
	->"2" D "PEDI" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_PEDI", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_PEDI", checkCardinalityOf: {"3_g7_PHRASE":"0:1"}})%}

2_PEDI_Substructs
	-> 3_g7_PHRASE
		{%id%}
	|  3_TEXT_CONTINUATION
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

5_g7_PHRASE
	-> 5_PHRASE
		{%id%}
	|  5_PHRASE 5_PHRASE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_PHRASE
	->"5" D "PHRASE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_PHRASE", type: "NO_XREF", lineValType: "Text"})%}

5_PHRASE_Substructs
	-> 6_TEXT_CONTINUATION
		{%id%}

6_g7_PHRASE
	-> 6_PHRASE
		{%id%}
	|  6_PHRASE 6_PHRASE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_PHRASE
	->"6" D "PHRASE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_PHRASE", type: "NO_XREF", lineValType: "Text"})%}

6_PHRASE_Substructs
	-> 7_TEXT_CONTINUATION
		{%id%}

7_g7_PHRASE
	-> 7_PHRASE
		{%id%}
	|  7_PHRASE 7_PHRASE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_PHRASE
	->"7" D "PHRASE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_PHRASE", type: "NO_XREF", lineValType: "Text"})%}

7_PHRASE_Substructs
	-> 8_TEXT_CONTINUATION
		{%id%}

8_g7_PHRASE
	-> 8_PHRASE
		{%id%}
	|  8_PHRASE 8_PHRASE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

8_PHRASE
	->"8" D "PHRASE" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "8_g7_PHRASE", type: "NO_XREF", lineValType: "Text"})%}

8_PHRASE_Substructs
	-> 9_TEXT_CONTINUATION
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

3_g7_PLAC
	-> 3_PLAC
		{%id%}
	|  3_PLAC 3_PLAC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_PLAC
	->"3" D "PLAC" (D ListText):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_PLAC", type: "NO_XREF", lineValType: "ListText", checkCardinalityOf: {"4_g7_PLAC_FORM":"0:1", "4_g7_LANG":"0:1", "4_g7_MAP":"0:1"}})%}

3_PLAC_Substructs
	-> 4_g7_PLAC_FORM
		{%id%}
	|  4_g7_LANG
		{%id%}
	|  4_g7_PLAC_TRAN
		{%id%}
	|  4_g7_MAP
		{%id%}
	|  4_g7_EXID
		{%id%}
	|  4_NOTE_STRUCTURE
		{%id%}
	|  4_TEXT_CONTINUATION
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

2_g7_POST
	-> 2_POST
		{%id%}
	|  2_POST 2_POST_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_POST
	->"2" D "POST" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_POST", type: "NO_XREF", lineValType: "Special"})%}

2_POST_Substructs
	-> 3_TEXT_CONTINUATION
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

1_g7_PROB
	-> 1_PROB
		{%id%}
	|  1_PROB 1_PROB_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_PROB
	->"1" D "PROB" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_PROB", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_PROB_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_PROP
	-> 1_PROP
		{%id%}
	|  1_PROP 1_PROP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_PROP
	->"1" D "PROP" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_PROP", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_PROP_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_QUAY
	-> 2_QUAY
		{%id%}
	|  2_QUAY 2_QUAY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_QUAY
	->"2" D "QUAY" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_QUAY", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_QUAY"})%}

2_QUAY_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

3_g7_QUAY
	-> 3_QUAY
		{%id%}
	|  3_QUAY 3_QUAY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_QUAY
	->"3" D "QUAY" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_QUAY", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_QUAY"})%}

3_QUAY_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

4_g7_QUAY
	-> 4_QUAY
		{%id%}
	|  4_QUAY 4_QUAY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_QUAY
	->"4" D "QUAY" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_QUAY", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_QUAY"})%}

4_QUAY_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

5_g7_QUAY
	-> 5_QUAY
		{%id%}
	|  5_QUAY 5_QUAY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_QUAY
	->"5" D "QUAY" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_QUAY", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_QUAY"})%}

5_QUAY_Substructs
	-> 6_TEXT_CONTINUATION
		{%id%}

6_g7_QUAY
	-> 6_QUAY
		{%id%}
	|  6_QUAY 6_QUAY_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_QUAY
	->"6" D "QUAY" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_QUAY", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_QUAY"})%}

6_QUAY_Substructs
	-> 7_TEXT_CONTINUATION
		{%id%}

1_g7_REFN
	-> 1_REFN
		{%id%}
	|  1_REFN 1_REFN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_REFN
	->"1" D "REFN" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_REFN", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"2_g7_TYPE":"0:1"}})%}

1_REFN_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_TEXT_CONTINUATION
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

1_g7_INDI_RELI
	-> 1_INDIRELI
		{%id%}
	|  1_INDIRELI 1_INDIRELI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_INDIRELI
	->"1" D "RELI" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_INDI_RELI", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_INDIRELI_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
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

1_g7_REPO
	-> 1_REPO
		{%id%}
	|  1_REPO 1_REPO_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_REPO
	->"1" D "REPO" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_REPO", type: "NO_XREF", lineValType: "Xref"})%}

1_REPO_Substructs
	-> 2_NOTE_STRUCTURE
		{%id%}
	|  2_g7_CALN
		{%id%}
	|  2_TEXT_CONTINUATION
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

1_g7_INDI_RESI
	-> 1_INDIRESI
		{%id%}
	|  1_INDIRESI 1_INDIRESI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_INDIRESI
	->"1" D "RESI" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_INDI_RESI", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_INDIRESI_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

1_g7_RETI
	-> 1_RETI
		{%id%}
	|  1_RETI 1_RETI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_RETI
	->"1" D "RETI" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_RETI", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_RETI_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_ROLE
	-> 2_ROLE
		{%id%}
	|  2_ROLE 2_ROLE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_ROLE
	->"2" D "ROLE" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_ROLE", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_ROLE", checkCardinalityOf: {"3_g7_PHRASE":"0:1"}})%}

2_ROLE_Substructs
	-> 3_g7_PHRASE
		{%id%}
	|  3_TEXT_CONTINUATION
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

4_g7_ROLE
	-> 4_ROLE
		{%id%}
	|  4_ROLE 4_ROLE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_ROLE
	->"4" D "ROLE" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_ROLE", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_ROLE", checkCardinalityOf: {"5_g7_PHRASE":"0:1"}})%}

4_ROLE_Substructs
	-> 5_g7_PHRASE
		{%id%}
	|  5_TEXT_CONTINUATION
		{%id%}

5_g7_ROLE
	-> 5_ROLE
		{%id%}
	|  5_ROLE 5_ROLE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_ROLE
	->"5" D "ROLE" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_ROLE", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_ROLE", checkCardinalityOf: {"6_g7_PHRASE":"0:1"}})%}

5_ROLE_Substructs
	-> 6_g7_PHRASE
		{%id%}
	|  6_TEXT_CONTINUATION
		{%id%}

6_g7_ROLE
	-> 6_ROLE
		{%id%}
	|  6_ROLE 6_ROLE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_ROLE
	->"6" D "ROLE" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_ROLE", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_ROLE", checkCardinalityOf: {"7_g7_PHRASE":"0:1"}})%}

6_ROLE_Substructs
	-> 7_g7_PHRASE
		{%id%}
	|  7_TEXT_CONTINUATION
		{%id%}

7_g7_ROLE
	-> 7_ROLE
		{%id%}
	|  7_ROLE 7_ROLE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_ROLE
	->"7" D "ROLE" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_ROLE", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_ROLE", checkCardinalityOf: {"8_g7_PHRASE":"0:1"}})%}

7_ROLE_Substructs
	-> 8_g7_PHRASE
		{%id%}
	|  8_TEXT_CONTINUATION
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

1_g7_SEX
	-> 1_SEX
		{%id%}
	|  1_SEX 1_SEX_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_SEX
	->"1" D "SEX" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_SEX", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_SEX"})%}

1_SEX_Substructs
	-> 2_TEXT_CONTINUATION
		{%id%}

1_g7_SLGC
	-> 1_SLGC
		{%id%}
	|  1_SLGC 1_SLGC_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_SLGC
	->"1" D "SLGC" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_SLGC", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"2_LDS_ORDINANCE_DETAIL":"0:1", "2_g7_FAMC":"1:1"}})%}

1_SLGC_Substructs
	-> 2_LDS_ORDINANCE_DETAIL
		{%id%}
	|  2_g7_FAMC
		{%id%}

1_g7_SLGS
	-> 1_SLGS
		{%id%}
	|  1_SLGS 1_SLGS_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_SLGS
	->"1" D "SLGS" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_SLGS", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"2_LDS_ORDINANCE_DETAIL":"0:1"}})%}

1_SLGS_Substructs
	-> 2_LDS_ORDINANCE_DETAIL
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

4_g7_SNOTE
	-> 4_SNOTE
		{%id%}
	|  4_SNOTE 4_SNOTE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_SNOTE
	->"4" D "SNOTE" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_SNOTE", type: "NO_XREF", lineValType: "Xref"})%}

4_SNOTE_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

1_g7_SOUR
	-> 1_SOUR
		{%id%}
	|  1_SOUR 1_SOUR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_SOUR
	->"1" D "SOUR" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_SOUR", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"2_g7_PAGE":"0:1", "2_g7_SOUR_DATA":"0:1", "2_g7_SOUR_EVEN":"0:1", "2_g7_QUAY":"0:1"}})%}

1_SOUR_Substructs
	-> 2_g7_PAGE
		{%id%}
	|  2_g7_SOUR_DATA
		{%id%}
	|  2_g7_SOUR_EVEN
		{%id%}
	|  2_g7_QUAY
		{%id%}
	|  2_MULTIMEDIA_LINK
		{%id%}
	|  2_NOTE_STRUCTURE
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_SOUR
	-> 2_SOUR
		{%id%}
	|  2_SOUR 2_SOUR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_SOUR
	->"2" D "SOUR" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_SOUR", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"3_g7_PAGE":"0:1", "3_g7_SOUR_DATA":"0:1", "3_g7_SOUR_EVEN":"0:1", "3_g7_QUAY":"0:1"}})%}

2_SOUR_Substructs
	-> 3_g7_PAGE
		{%id%}
	|  3_g7_SOUR_DATA
		{%id%}
	|  3_g7_SOUR_EVEN
		{%id%}
	|  3_g7_QUAY
		{%id%}
	|  3_MULTIMEDIA_LINK
		{%id%}
	|  3_NOTE_STRUCTURE
		{%id%}
	|  3_TEXT_CONTINUATION
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

4_g7_SOUR
	-> 4_SOUR
		{%id%}
	|  4_SOUR 4_SOUR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_SOUR
	->"4" D "SOUR" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_SOUR", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"5_g7_PAGE":"0:1", "5_g7_SOUR_DATA":"0:1", "5_g7_SOUR_EVEN":"0:1", "5_g7_QUAY":"0:1"}})%}

4_SOUR_Substructs
	-> 5_g7_PAGE
		{%id%}
	|  5_g7_SOUR_DATA
		{%id%}
	|  5_g7_SOUR_EVEN
		{%id%}
	|  5_g7_QUAY
		{%id%}
	|  5_MULTIMEDIA_LINK
		{%id%}
	|  5_NOTE_STRUCTURE
		{%id%}
	|  5_TEXT_CONTINUATION
		{%id%}

5_g7_SOUR
	-> 5_SOUR
		{%id%}
	|  5_SOUR 5_SOUR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_SOUR
	->"5" D "SOUR" (D Xref):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_SOUR", type: "NO_XREF", lineValType: "Xref", checkCardinalityOf: {"6_g7_PAGE":"0:1", "6_g7_SOUR_DATA":"0:1", "6_g7_SOUR_EVEN":"0:1", "6_g7_QUAY":"0:1"}})%}

5_SOUR_Substructs
	-> 6_g7_PAGE
		{%id%}
	|  6_g7_SOUR_DATA
		{%id%}
	|  6_g7_SOUR_EVEN
		{%id%}
	|  6_g7_QUAY
		{%id%}
	|  6_MULTIMEDIA_LINK
		{%id%}
	|  6_NOTE_STRUCTURE
		{%id%}
	|  6_TEXT_CONTINUATION
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

2_g7_SPFX
	-> 2_SPFX
		{%id%}
	|  2_SPFX 2_SPFX_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_SPFX
	->"2" D "SPFX" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_SPFX", type: "NO_XREF", lineValType: "Text"})%}

2_SPFX_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

3_g7_SPFX
	-> 3_SPFX
		{%id%}
	|  3_SPFX 3_SPFX_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_SPFX
	->"3" D "SPFX" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_SPFX", type: "NO_XREF", lineValType: "Text"})%}

3_SPFX_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

1_g7_SSN
	-> 1_SSN
		{%id%}
	|  1_SSN 1_SSN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_SSN
	->"1" D "SSN" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_SSN", type: "NO_XREF", lineValType: "Special", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_SSN_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

2_g7_STAE
	-> 2_STAE
		{%id%}
	|  2_STAE 2_STAE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_STAE
	->"2" D "STAE" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_STAE", type: "NO_XREF", lineValType: "Special"})%}

2_STAE_Substructs
	-> 3_TEXT_CONTINUATION
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

2_g7_ord_STAT
	-> 2_ordSTAT
		{%id%}
	|  2_ordSTAT 2_ordSTAT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_ordSTAT
	->"2" D "STAT" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_ord_STAT", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_ord_STAT", checkCardinalityOf: {"3_g7_DATE_exact":"1:1"}})%}

2_ordSTAT_Substructs
	-> 3_g7_DATE_exact
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

2_g7_FAMC_STAT
	-> 2_FAMCSTAT
		{%id%}
	|  2_FAMCSTAT 2_FAMCSTAT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_FAMCSTAT
	->"2" D "STAT" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_FAMC_STAT", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_FAMC_STAT", checkCardinalityOf: {"3_g7_PHRASE":"0:1"}})%}

2_FAMCSTAT_Substructs
	-> 3_g7_PHRASE
		{%id%}
	|  3_TEXT_CONTINUATION
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

2_g7_SURN
	-> 2_SURN
		{%id%}
	|  2_SURN 2_SURN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_SURN
	->"2" D "SURN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_SURN", type: "NO_XREF", lineValType: "Text"})%}

2_SURN_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

3_g7_SURN
	-> 3_SURN
		{%id%}
	|  3_SURN 3_SURN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_SURN
	->"3" D "SURN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_SURN", type: "NO_XREF", lineValType: "Text"})%}

3_SURN_Substructs
	-> 4_TEXT_CONTINUATION
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

2_g7_TEMP
	-> 2_TEMP
		{%id%}
	|  2_TEMP 2_TEMP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_TEMP
	->"2" D "TEMP" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_TEMP", type: "NO_XREF", lineValType: "Text"})%}

2_TEMP_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

3_g7_TEXT
	-> 3_TEXT
		{%id%}
	|  3_TEXT 3_TEXT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_TEXT
	->"3" D "TEXT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_TEXT", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"4_g7_MIME":"0:1", "4_g7_LANG":"0:1"}})%}

3_TEXT_Substructs
	-> 4_g7_MIME
		{%id%}
	|  4_g7_LANG
		{%id%}
	|  4_TEXT_CONTINUATION
		{%id%}

4_g7_TEXT
	-> 4_TEXT
		{%id%}
	|  4_TEXT 4_TEXT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_TEXT
	->"4" D "TEXT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_TEXT", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"5_g7_MIME":"0:1", "5_g7_LANG":"0:1"}})%}

4_TEXT_Substructs
	-> 5_g7_MIME
		{%id%}
	|  5_g7_LANG
		{%id%}
	|  5_TEXT_CONTINUATION
		{%id%}

5_g7_TEXT
	-> 5_TEXT
		{%id%}
	|  5_TEXT 5_TEXT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_TEXT
	->"5" D "TEXT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_TEXT", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"6_g7_MIME":"0:1", "6_g7_LANG":"0:1"}})%}

5_TEXT_Substructs
	-> 6_g7_MIME
		{%id%}
	|  6_g7_LANG
		{%id%}
	|  6_TEXT_CONTINUATION
		{%id%}

6_g7_TEXT
	-> 6_TEXT
		{%id%}
	|  6_TEXT 6_TEXT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_TEXT
	->"6" D "TEXT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_TEXT", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"7_g7_MIME":"0:1", "7_g7_LANG":"0:1"}})%}

6_TEXT_Substructs
	-> 7_g7_MIME
		{%id%}
	|  7_g7_LANG
		{%id%}
	|  7_TEXT_CONTINUATION
		{%id%}

7_g7_TEXT
	-> 7_TEXT
		{%id%}
	|  7_TEXT 7_TEXT_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_TEXT
	->"7" D "TEXT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_TEXT", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"8_g7_MIME":"0:1", "8_g7_LANG":"0:1"}})%}

7_TEXT_Substructs
	-> 8_g7_MIME
		{%id%}
	|  8_g7_LANG
		{%id%}
	|  8_TEXT_CONTINUATION
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

5_g7_TIME
	-> 5_TIME
		{%id%}
	|  5_TIME 5_TIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_TIME
	->"5" D "TIME" (D Time):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_TIME", type: "NO_XREF", lineValType: "Time"})%}

5_TIME_Substructs
	-> 6_TEXT_CONTINUATION
		{%id%}

6_g7_TIME
	-> 6_TIME
		{%id%}
	|  6_TIME 6_TIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_TIME
	->"6" D "TIME" (D Time):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_TIME", type: "NO_XREF", lineValType: "Time"})%}

6_TIME_Substructs
	-> 7_TEXT_CONTINUATION
		{%id%}

7_g7_TIME
	-> 7_TIME
		{%id%}
	|  7_TIME 7_TIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_TIME
	->"7" D "TIME" (D Time):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_TIME", type: "NO_XREF", lineValType: "Time"})%}

7_TIME_Substructs
	-> 8_TEXT_CONTINUATION
		{%id%}

8_g7_TIME
	-> 8_TIME
		{%id%}
	|  8_TIME 8_TIME_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

8_TIME
	->"8" D "TIME" (D Time):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "8_g7_TIME", type: "NO_XREF", lineValType: "Time"})%}

8_TIME_Substructs
	-> 9_TEXT_CONTINUATION
		{%id%}

2_g7_TITL
	-> 2_TITL
		{%id%}
	|  2_TITL 2_TITL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_TITL
	->"2" D "TITL" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_TITL", type: "NO_XREF", lineValType: "Text"})%}

2_TITL_Substructs
	-> 3_TEXT_CONTINUATION
		{%id%}

3_g7_TITL
	-> 3_TITL
		{%id%}
	|  3_TITL 3_TITL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_TITL
	->"3" D "TITL" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_TITL", type: "NO_XREF", lineValType: "Text"})%}

3_TITL_Substructs
	-> 4_TEXT_CONTINUATION
		{%id%}

4_g7_TITL
	-> 4_TITL
		{%id%}
	|  4_TITL 4_TITL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_TITL
	->"4" D "TITL" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_TITL", type: "NO_XREF", lineValType: "Text"})%}

4_TITL_Substructs
	-> 5_TEXT_CONTINUATION
		{%id%}

5_g7_TITL
	-> 5_TITL
		{%id%}
	|  5_TITL 5_TITL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_TITL
	->"5" D "TITL" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_TITL", type: "NO_XREF", lineValType: "Text"})%}

5_TITL_Substructs
	-> 6_TEXT_CONTINUATION
		{%id%}

6_g7_TITL
	-> 6_TITL
		{%id%}
	|  6_TITL 6_TITL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_TITL
	->"6" D "TITL" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_TITL", type: "NO_XREF", lineValType: "Text"})%}

6_TITL_Substructs
	-> 7_TEXT_CONTINUATION
		{%id%}

7_g7_TITL
	-> 7_TITL
		{%id%}
	|  7_TITL 7_TITL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_TITL
	->"7" D "TITL" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_TITL", type: "NO_XREF", lineValType: "Text"})%}

7_TITL_Substructs
	-> 8_TEXT_CONTINUATION
		{%id%}

1_g7_INDI_TITL
	-> 1_INDITITL
		{%id%}
	|  1_INDITITL 1_INDITITL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_INDITITL
	->"1" D "TITL" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_INDI_TITL", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_INDITITL_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
		{%id%}
	|  2_TEXT_CONTINUATION
		{%id%}

3_g7_TOP
	-> 3_TOP
		{%id%}
	|  3_TOP 3_TOP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_TOP
	->"3" D "TOP" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_TOP", type: "NO_XREF", lineValType: "Integer"})%}

3_TOP_Substructs
	-> 4_INTEGER_CONTINUATION
		{%id%}

4_g7_TOP
	-> 4_TOP
		{%id%}
	|  4_TOP 4_TOP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_TOP
	->"4" D "TOP" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_TOP", type: "NO_XREF", lineValType: "Integer"})%}

4_TOP_Substructs
	-> 5_INTEGER_CONTINUATION
		{%id%}

5_g7_TOP
	-> 5_TOP
		{%id%}
	|  5_TOP 5_TOP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_TOP
	->"5" D "TOP" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_TOP", type: "NO_XREF", lineValType: "Integer"})%}

5_TOP_Substructs
	-> 6_INTEGER_CONTINUATION
		{%id%}

6_g7_TOP
	-> 6_TOP
		{%id%}
	|  6_TOP 6_TOP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_TOP
	->"6" D "TOP" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_TOP", type: "NO_XREF", lineValType: "Integer"})%}

6_TOP_Substructs
	-> 7_INTEGER_CONTINUATION
		{%id%}

7_g7_TOP
	-> 7_TOP
		{%id%}
	|  7_TOP 7_TOP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_TOP
	->"7" D "TOP" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_TOP", type: "NO_XREF", lineValType: "Integer"})%}

7_TOP_Substructs
	-> 8_INTEGER_CONTINUATION
		{%id%}

8_g7_TOP
	-> 8_TOP
		{%id%}
	|  8_TOP 8_TOP_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

8_TOP
	->"8" D "TOP" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "8_g7_TOP", type: "NO_XREF", lineValType: "Integer"})%}

8_TOP_Substructs
	-> 9_INTEGER_CONTINUATION
		{%id%}

2_g7_NAME_TRAN
	-> 2_NAMETRAN
		{%id%}
	|  2_NAMETRAN 2_NAMETRAN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_NAMETRAN
	->"2" D "TRAN" (D PersonalName):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_NAME_TRAN", type: "NO_XREF", lineValType: "PersonalName", checkCardinalityOf: {"3_g7_LANG":"1:1", "3_PERSONAL_NAME_PIECES":"0:1"}})%}

2_NAMETRAN_Substructs
	-> 3_g7_LANG
		{%id%}
	|  3_PERSONAL_NAME_PIECES
		{%id%}
	|  3_TEXT_CONTINUATION
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

4_g7_PLAC_TRAN
	-> 4_PLACTRAN
		{%id%}
	|  4_PLACTRAN 4_PLACTRAN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_PLACTRAN
	->"4" D "TRAN" (D ListText):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_PLAC_TRAN", type: "NO_XREF", lineValType: "ListText", checkCardinalityOf: {"5_g7_LANG":"1:1"}})%}

4_PLACTRAN_Substructs
	-> 5_g7_LANG
		{%id%}
	|  5_TEXT_CONTINUATION
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

5_g7_NOTE_TRAN
	-> 5_NOTETRAN
		{%id%}
	|  5_NOTETRAN 5_NOTETRAN_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_NOTETRAN
	->"5" D "TRAN" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_NOTE_TRAN", type: "NO_XREF", lineValType: "Text", checkCardinalityOf: {"6_g7_MIME":"0:1", "6_g7_LANG":"0:1"}})%}

5_NOTETRAN_Substructs
	-> 6_g7_MIME
		{%id%}
	|  6_g7_LANG
		{%id%}
	|  6_TEXT_CONTINUATION
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

2_g7_NAME_TYPE
	-> 2_NAMETYPE
		{%id%}
	|  2_NAMETYPE 2_NAMETYPE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_NAMETYPE
	->"2" D "TYPE" (D Enum):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_NAME_TYPE", type: "NO_XREF", lineValType: "Enum", enumType: "g7_enumset_NAME_TYPE", checkCardinalityOf: {"3_g7_PHRASE":"0:1"}})%}

2_NAMETYPE_Substructs
	-> 3_g7_PHRASE
		{%id%}
	|  3_TEXT_CONTINUATION
		{%id%}

2_g7_EXID_TYPE
	-> 2_EXIDTYPE
		{%id%}
	|  2_EXIDTYPE 2_EXIDTYPE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_EXIDTYPE
	->"2" D "TYPE" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_EXID_TYPE", type: "NO_XREF", lineValType: "Special"})%}

2_EXIDTYPE_Substructs
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

5_g7_EXID_TYPE
	-> 5_EXIDTYPE
		{%id%}
	|  5_EXIDTYPE 5_EXIDTYPE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_EXIDTYPE
	->"5" D "TYPE" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_EXID_TYPE", type: "NO_XREF", lineValType: "Special"})%}

5_EXIDTYPE_Substructs
	-> 6_TEXT_CONTINUATION
		{%id%}

1_g7_UID
	-> 1_UID
		{%id%}
	|  1_UID 1_UID_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_UID
	->"1" D "UID" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_UID", type: "NO_XREF", lineValType: "Special"})%}

1_UID_Substructs
	-> 2_TEXT_CONTINUATION
		{%id%}

2_g7_UID
	-> 2_UID
		{%id%}
	|  2_UID 2_UID_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

2_UID
	->"2" D "UID" (D Special):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "2_g7_UID", type: "NO_XREF", lineValType: "Special"})%}

2_UID_Substructs
	-> 3_TEXT_CONTINUATION
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

3_g7_WIDTH
	-> 3_WIDTH
		{%id%}
	|  3_WIDTH 3_WIDTH_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

3_WIDTH
	->"3" D "WIDTH" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "3_g7_WIDTH", type: "NO_XREF", lineValType: "Integer"})%}

3_WIDTH_Substructs
	-> 4_INTEGER_CONTINUATION
		{%id%}

4_g7_WIDTH
	-> 4_WIDTH
		{%id%}
	|  4_WIDTH 4_WIDTH_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

4_WIDTH
	->"4" D "WIDTH" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "4_g7_WIDTH", type: "NO_XREF", lineValType: "Integer"})%}

4_WIDTH_Substructs
	-> 5_INTEGER_CONTINUATION
		{%id%}

5_g7_WIDTH
	-> 5_WIDTH
		{%id%}
	|  5_WIDTH 5_WIDTH_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

5_WIDTH
	->"5" D "WIDTH" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "5_g7_WIDTH", type: "NO_XREF", lineValType: "Integer"})%}

5_WIDTH_Substructs
	-> 6_INTEGER_CONTINUATION
		{%id%}

6_g7_WIDTH
	-> 6_WIDTH
		{%id%}
	|  6_WIDTH 6_WIDTH_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

6_WIDTH
	->"6" D "WIDTH" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "6_g7_WIDTH", type: "NO_XREF", lineValType: "Integer"})%}

6_WIDTH_Substructs
	-> 7_INTEGER_CONTINUATION
		{%id%}

7_g7_WIDTH
	-> 7_WIDTH
		{%id%}
	|  7_WIDTH 7_WIDTH_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

7_WIDTH
	->"7" D "WIDTH" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "7_g7_WIDTH", type: "NO_XREF", lineValType: "Integer"})%}

7_WIDTH_Substructs
	-> 8_INTEGER_CONTINUATION
		{%id%}

8_g7_WIDTH
	-> 8_WIDTH
		{%id%}
	|  8_WIDTH 8_WIDTH_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

8_WIDTH
	->"8" D "WIDTH" (D Integer):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "8_g7_WIDTH", type: "NO_XREF", lineValType: "Integer"})%}

8_WIDTH_Substructs
	-> 9_INTEGER_CONTINUATION
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

1_g7_WILL
	-> 1_WILL
		{%id%}
	|  1_WILL 1_WILL_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

1_WILL
	->"1" D "WILL" (D NullOrY):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "1_g7_WILL", type: "NO_XREF", lineValType: "NullOrY", checkCardinalityOf: {"2_g7_TYPE":"0:1", "2_INDIVIDUAL_EVENT_DETAIL":"0:1"}})%}

1_WILL_Substructs
	-> 2_g7_TYPE
		{%id%}
	|  2_INDIVIDUAL_EVENT_DETAIL
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