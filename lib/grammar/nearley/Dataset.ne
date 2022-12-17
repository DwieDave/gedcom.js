# call moo-lexer
@lexer lexer

0_DATASET
	-> %BOM:? 0_g7_record_HEAD RECORDS:* TRLR

RECORDS
	-> 0_g7_record_FAM
		{%id%}
	|  0_g7_record_INDI
		{%id%}
	|  0_g7_record_OBJE
		{%id%}
	|  0_g7_record_REPO
		{%id%}
	|  0_g7_record_SNOTE
		{%id%}
	|  0_g7_record_SOUR
		{%id%}
	|  0_g7_record_SUBM
		{%id%}

TRLR
	-> "0" D "TRLR" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "DATASET",type: lineTypes.NO_XREF_NO_LINEVAL})%}