# call moo-lexer
@lexer lexer

0_g7_record_FAM
	-> 0_recordFAM
		{%id%}
	|  0_recordFAM 0_recordFAM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordFAM
	->"0" D Xref D "FAM" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_FAM", type: "FAM_RECORD", checkCardinalityOf: {"1_g7_RESN":"0:1", "1_g7_FAM_HUSB":"0:1", "1_g7_FAM_WIFE":"0:1", "1_g7_CHIL":"0:1"}})%}

0_recordFAM_Substructs
	-> 1_g7_RESN
		{%id%}
	|  1_g7_FAM_HUSB
		{%id%}
	|  1_g7_FAM_WIFE
		{%id%}
	|  1_g7_CHIL
		{%id%}
	|  1_FAMILY_ATTRIBUTE_STRUCTURE
		{%id%}