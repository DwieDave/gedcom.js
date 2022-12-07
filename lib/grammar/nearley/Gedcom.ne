# call moo-lexer
@lexer lexer

GEDCOM
	-> g7_record_HEAD RECORDS:* TRLR

RECORDS
	-> g7_record_HEAD
		{%id%}
	|  g7_record_FAM
		{%id%}
	|  g7_record_INDI
		{%id%}
	|  g7_record_OBJE
		{%id%}
	|  g7_record_REPO
		{%id%}
	|  g7_record_SNOTE
		{%id%}
	|  g7_record_SOUR
		{%id%}
	|  g7_record_SUBM
		{%id%}

TRLR
	-> Level D "TRLR" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "GEDCOM",type: lineTypes.NO_XREF_NO_LINEVAL})%}