# call moo-lexer
@lexer lexer

g7_SubmitterTest
	-> Level D "TEST" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}