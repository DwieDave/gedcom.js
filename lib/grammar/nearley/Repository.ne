# call moo-lexer
@lexer lexer

0_g7_record_REPO
	-> "0" D Xref D "REPO" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_REPO", type: "REPO_RECORD"})%}