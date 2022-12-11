# call moo-lexer
@lexer lexer

0_g7_record_SUBM
	-> 0_recordSUBM
		{%id%}
	|  0_recordSUBM 0_recordSUBM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordSUBM
	->"0" D Xref D "SUBM" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_SUBM", type: "SUBM_RECORD", checkCardinalityOf: {"1_g7_NAME":"1:1", "1_ADDRESS_STRUCTURE":"0:1", "1_CHANGE_DATE":"0:1", "1_CREATION_DATE":"0:1"}})%}

0_recordSUBM_Substructs
	-> 1_g7_NAME
		{%id%}
	|  1_ADDRESS_STRUCTURE
		{%id%}
	|  1_g7_PHON
		{%id%}
	|  1_g7_EMAIL
		{%id%}
	|  1_g7_FAX
		{%id%}
	|  1_g7_WWW
		{%id%}
	|  1_MULTIMEDIA_LINK
		{%id%}
	|  1_g7_SUBM_LANG
		{%id%}
	|  1_IDENTIFIER_STRUCTURE
		{%id%}
	|  1_NOTE_STRUCTURE
		{%id%}
	|  1_CHANGE_DATE
		{%id%}
	|  1_CREATION_DATE
		{%id%}