# call moo-lexer
@lexer lexer

0_g7_record_HEAD
	-> 0_recordHEAD
		{%id%}
	|  0_recordHEAD 0_recordHEAD_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordHEAD
	->"0" D "HEAD" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_HEAD", type: "HEADER", checkCardinalityOf: {"1_g7_GEDC":"1:1", "1_g7_SCHMA":"0:1", "1_g7_HEAD_SOUR":"0:1", "1_g7_DEST":"0:1", "1_g7_HEAD_DATE":"0:1", "1_g7_SUBM":"0:1", "1_g7_COPR":"0:1", "1_g7_HEAD_LANG":"0:1", "1_g7_HEAD_PLAC":"0:1"}})%}

0_recordHEAD_Substructs
	-> 1_g7_GEDC
		{%id%}
	|  1_g7_SCHMA
		{%id%}
	|  1_g7_HEAD_SOUR
		{%id%}
	|  1_g7_DEST
		{%id%}
	|  1_g7_HEAD_DATE
		{%id%}
	|  1_g7_SUBM
		{%id%}
	|  1_g7_COPR
		{%id%}
	|  1_g7_HEAD_LANG
		{%id%}
	|  1_g7_HEAD_PLAC
		{%id%}