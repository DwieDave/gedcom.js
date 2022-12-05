# call moo-lexer
@lexer lexer

g7_record_OBJE
	-> Level D "TEST" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_OBJE", type: "NO_XREF"})%}