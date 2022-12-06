# call moo-lexer
@lexer lexer

g7_record_SNOTE
	-> Level D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_SNOTE", type: "NO_XREF", lineValType: "Text"})%}
	|  g7_record_SNOTE TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}