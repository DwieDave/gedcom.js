# call moo-lexer
@lexer lexer

0_g7_record_FAM
	-> 0_recordFAM
		{%id%}
	|  0_recordFAM 0_recordFAM_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordFAM
	->"0" D Xref D "FAM" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_FAM", type: "FAM_RECORD", checkCardinalityOf: {"1_g7_RESN":"0:1", "1_g7_FAM_HUSB":"0:1", "1_g7_FAM_WIFE":"0:1", "1_CHANGE_DATE":"0:1", "1_CREATION_DATE":"0:1"}})%}

0_recordFAM_Substructs
	-> 1_g7_RESN
		{%id%}
	|  1_FAMILY_ATTRIBUTE_STRUCTURE
		{%id%}
	|  1_FAMILY_EVENT_STRUCTURE
		{%id%}
	|  1_NON_EVENT_STRUCTURE
		{%id%}
	|  1_g7_FAM_HUSB
		{%id%}
	|  1_g7_FAM_WIFE
		{%id%}
	|  1_g7_CHIL
		{%id%}
	|  1_ASSOCIATION_STRUCTURE
		{%id%}
	|  1_g7_SUBM
		{%id%}
	|  1_LDS_SPOUSE_SEALING
		{%id%}
	|  1_IDENTIFIER_STRUCTURE
		{%id%}
	|  1_NOTE_STRUCTURE
		{%id%}
	|  1_SOURCE_CITATION
		{%id%}
	|  1_MULTIMEDIA_LINK
		{%id%}
	|  1_CHANGE_DATE
		{%id%}
	|  1_CREATION_DATE
		{%id%}