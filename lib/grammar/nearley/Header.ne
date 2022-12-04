# call moo-lexer
@lexer lexer

g7_record_HEAD
	-> Level D "TEST" EOL
		{% (d) => postprocessor.createStructure({line: d, type: "HEADER"})%}