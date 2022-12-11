# call moo-lexer
@lexer lexer

0_g7_record_INDI
	-> 0_recordINDI
		{%id%}
	|  0_recordINDI 0_recordINDI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordINDI
	->"0" D Xref D "INDI" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_INDI", type: "INDI_RECORD", checkCardinalityOf: {"1_g7_RESN":"0:1", "1_g7_SEX":"0:1", "1_CHANGE_DATE":"0:1", "1_CREATION_DATE":"0:1"}})%}

0_recordINDI_Substructs
	-> 1_g7_RESN
		{%id%}
	|  1_PERSONAL_NAME_STRUCTURE
		{%id%}
	|  1_g7_SEX
		{%id%}
	|  1_INDIVIDUAL_ATTRIBUTE_STRUCTURE
		{%id%}
	|  1_INDIVIDUAL_EVENT_STRUCTURE
		{%id%}
	|  1_NON_EVENT_STRUCTURE
		{%id%}
	|  1_LDS_INDIVIDUAL_ORDINANCE
		{%id%}
	|  1_g7_INDI_FAMC
		{%id%}
	|  1_g7_FAMS
		{%id%}
	|  1_g7_SUBM
		{%id%}
	|  1_ASSOCIATION_STRUCTURE
		{%id%}
	|  1_g7_ALIA
		{%id%}
	|  1_g7_ANCI
		{%id%}
	|  1_g7_DESI
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