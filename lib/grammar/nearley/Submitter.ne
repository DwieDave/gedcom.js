# call moo-lexer
@lexer lexer

0_g7_record_SUBM
	-> 0_recordSUBM
		{%id%}
	|  0_recordSUBM 0_recordSUBM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordSUBM
	->"0" D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_SUBM", type: "NO_XREF", lineValType: "Text"})%}

0_recordSUBM_Substructs
	-> 1_TEXT_CONTINUATION
		{%id%}