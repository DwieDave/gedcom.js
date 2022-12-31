# call moo-lexer
@lexer lexer

0_g7_record_OBJE
	-> 0_recordOBJE
		{%id%}
	|  0_recordOBJE 0_recordOBJE_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordOBJE
	->"0" D Xref D "OBJE" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_OBJE", type: "OBJE_RECORD", checkCardinalityOf: {"1_g7_RESN":"0:1", "1_g7_FILE":"1:M", "1_CHANGE_DATE":"0:1", "1_CREATION_DATE":"0:1"}})%}

0_recordOBJE_Substructs
	-> 1_g7_RESN
		{%id%}
	|  1_g7_FILE
		{%id%}
	|  1_IDENTIFIER_STRUCTURE
		{%id%}
	|  1_NOTE_STRUCTURE
		{%id%}
	|  1_SOURCE_CITATION
		{%id%}
	|  1_CHANGE_DATE
		{%id%}
	|  1_CREATION_DATE
		{%id%}