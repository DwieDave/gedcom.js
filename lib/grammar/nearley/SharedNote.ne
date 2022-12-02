# call moo-lexer
@lexer lexer

g7_ShareNoteTest
	-> Level D "TEST" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}