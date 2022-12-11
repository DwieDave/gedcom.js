# call moo-lexer
@lexer lexer

0_g7_record_SUBM
	-> "0" D Xref D "SUBM" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_SUBM", type: "SUBM_RECORD"})%}