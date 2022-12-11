# call moo-lexer
@lexer lexer

0_g7_record_SNOTE
	-> 0_recordSNOTE
		{%id%}
	|  0_recordSNOTE 0_recordSNOTE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordSNOTE
	->"0" D Xref D "SNOTE" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_SNOTE", type: "SNOTE_RECORD", lineValType: "Text", checkCardinalityOf: {"1_g7_MIME":"0:1", "1_g7_LANG":"0:1", "1_CHANGE_DATE":"0:1", "1_CREATION_DATE":"0:1"}})%}

0_recordSNOTE_Substructs
	-> 1_g7_MIME
		{%id%}
	|  1_g7_LANG
		{%id%}
	|  1_g7_NOTE_TRAN
		{%id%}
	|  1_SOURCE_CITATION
		{%id%}
	|  1_IDENTIFIER_STRUCTURE
		{%id%}
	|  1_CHANGE_DATE
		{%id%}
	|  1_CREATION_DATE
		{%id%}