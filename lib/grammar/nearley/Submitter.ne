# call moo-lexer
@lexer lexer

g7_record_SUBM
	-> Level D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_SUBM", type: "NO_XREF", lineValType: "Text"})%}
	|  g7_record_SUBM TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}