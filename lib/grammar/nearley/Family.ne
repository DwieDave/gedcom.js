# call moo-lexer
@lexer lexer

g7_record_FAM
	-> recordFAM
		{%id%}
	|  recordFAM recordFAMSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

recordFAM
	->Level D %Xref D "FAM" EOL
		{% (d) => postprocessor.createStructure({line: d, type: "FAM_RECORD", checkCardinalityOf: {HUSB:"0:1"}})%}

recordFAMSubstructs
	-> g7_FAM_HUSB
		{%id%}
	|  g7_FAM_WIFE
		{%id%}