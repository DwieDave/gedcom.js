# call moo-lexer
@lexer lexer

0_g7_record_SNOTE
	-> 0_recordSNOTE
		{%id%}
	|  0_recordSNOTE 0_recordSNOTE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordSNOTE
	->"0" D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_SNOTE", type: "NO_XREF", lineValType: "Text"})%}

0_recordSNOTE_Substructs
	-> 1_TEXT_CONTINUATION
		{%id%}