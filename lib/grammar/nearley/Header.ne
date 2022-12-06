# call moo-lexer
@lexer lexer

g7_record_HEAD
	-> recordHEAD
		{%id%}
	|  recordHEAD recordHEADSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

recordHEAD
	->Level D "HEAD" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_HEAD", type: "HEADER", checkCardinalityOf: {"g7_GEDC":"1:1", "g7_SCHMA":"0:1", "g7_HEAD_SOUR":"0:1", "g7_DEST":"0:1", "g7_HEAD_DATE":"0:1", "g7_SUBM":"0:1", "g7_COPR":"0:1", "g7_HEAD_LANG":"0:1", "g7_HEAD_PLAC":"0:1"}})%}

recordHEADSubstructs
	-> g7_GEDC
		{%id%}
	|  g7_SCHMA
		{%id%}
	|  g7_HEAD_SOUR
		{%id%}
	|  g7_DEST
		{%id%}
	|  g7_HEAD_DATE
		{%id%}
	|  g7_SUBM
		{%id%}
	|  g7_COPR
		{%id%}
	|  g7_HEAD_LANG
		{%id%}
	|  g7_HEAD_PLAC
		{%id%}