# call moo-lexer
@lexer lexer

g7_record_FAM
	-> recordFAM
		{%id%}
	|  recordFAM recordFAMSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

recordFAM
	->Level D Xref D "FAM" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_FAM", type: "FAM_RECORD", checkCardinalityOf: {"g7_RESN":"0:1", "g7_FAM_HUSB":"0:1", "g7_FAM_WIFE":"0:1"}})%}

recordFAMSubstructs
	-> g7_RESN
		{%id%}
	|  g7_FAM_HUSB
		{%id%}
	|  g7_FAM_WIFE
		{%id%}