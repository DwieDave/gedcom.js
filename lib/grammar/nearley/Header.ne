# call moo-lexer
@lexer lexer

g7_HeaderTest
	-> Level D "TEST" EOL
		{% (d) => postprocessor.createStructure({line: d, type: "HEADER"})%}