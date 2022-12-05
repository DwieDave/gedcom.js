# call moo-lexer
@lexer lexer

g7_record_SNOTE
	-> Level D "TEST" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_SNOTE", type: "NO_XREF"})%}