# call moo-lexer
@lexer lexer

0_g7_record_SOUR
	-> 0_recordSOUR
		{%id%}
	|  0_recordSOUR 0_recordSOUR_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordSOUR
	->"0" D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_SOUR", type: "NO_XREF", lineValType: "Text"})%}

0_recordSOUR_Substructs
	-> 1_TEXT_CONTINUATION
		{%id%}