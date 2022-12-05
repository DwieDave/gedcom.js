# call moo-lexer
@lexer lexer

g7_record_SOUR
	-> Level D "TEST" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_SOUR", type: "NO_XREF"})%}