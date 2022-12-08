# call moo-lexer
@lexer lexer

0_g7_record_REPO
	-> 0_recordREPO
		{%id%}
	|  0_recordREPO 0_recordREPO_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordREPO
	->"0" D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_REPO", type: "NO_XREF", lineValType: "Text"})%}

0_recordREPO_Substructs
	-> 1_TEXT_CONTINUATION
		{%id%}