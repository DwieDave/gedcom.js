# call moo-lexer
@lexer lexer

g7_record_REPO
	-> Level D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_REPO", type: "NO_XREF", lineValType: "Text"})%}
	|  g7_record_REPO TEXT_CONTINUATION
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}