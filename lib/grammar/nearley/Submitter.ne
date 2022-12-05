# call moo-lexer
@lexer lexer

g7_record_SUBM
	-> Level D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_SUBM", type: "NO_XREF"})%}