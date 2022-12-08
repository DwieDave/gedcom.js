# call moo-lexer
@lexer lexer

0_g7_record_OBJE
	-> 0_recordOBJE
		{%id%}
	|  0_recordOBJE 0_recordOBJE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordOBJE
	->"0" D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_OBJE", type: "NO_XREF", lineValType: "Text"})%}

0_recordOBJE_Substructs
	-> 1_TEXT_CONTINUATION
		{%id%}