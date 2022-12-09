# call moo-lexer
@lexer lexer

0_g7_record_SOUR
	-> "0" D Xref D "SOUR" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_SOUR", type: "SOUR_RECORD"})%}