# call moo-lexer
@lexer lexer

0_g7_record_SOUR
	-> 0_recordSOUR
		{%id%}
	|  0_recordSOUR 0_recordSOUR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordSOUR
	->"0" D Xref D "SOUR" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_SOUR", type: "SOUR_RECORD", checkCardinalityOf: {"1_g7_DATA":"0:1", "1_g7_AUTH":"0:1", "1_g7_TITL":"0:1", "1_g7_ABBR":"0:1", "1_g7_PUBL":"0:1", "1_g7_TEXT":"0:1", "1_CHANGE_DATE":"0:1", "1_CREATION_DATE":"0:1"}})%}

0_recordSOUR_Substructs
	-> 1_g7_DATA
		{%id%}
	|  1_g7_AUTH
		{%id%}
	|  1_g7_TITL
		{%id%}
	|  1_g7_ABBR
		{%id%}
	|  1_g7_PUBL
		{%id%}
	|  1_g7_TEXT
		{%id%}
	|  1_SOURCE_REPOSITORY_CITATION
		{%id%}
	|  1_IDENTIFIER_STRUCTURE
		{%id%}
	|  1_NOTE_STRUCTURE
		{%id%}
	|  1_MULTIMEDIA_LINK
		{%id%}
	|  1_CHANGE_DATE
		{%id%}
	|  1_CREATION_DATE
		{%id%}