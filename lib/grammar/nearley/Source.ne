# call moo-lexer
@lexer lexer

g7_SourceTest
	-> Level D "TEST" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}