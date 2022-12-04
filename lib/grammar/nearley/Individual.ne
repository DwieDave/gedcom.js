# call moo-lexer
@lexer lexer

g7_record_INDI
	-> Level D "TEST" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}