# call moo-lexer
@lexer lexer

g7_record_HEAD
	-> recordHEAD
		{%id%}
	|  recordHEAD recordHEADSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

recordHEAD
	->Level D "HEAD" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_HEAD", type: "HEADER", checkCardinalityOf: {"g7_GEDC":"1:1", "g7_SCHMA":"0:1"}})%}

recordHEADSubstructs
	-> g7_GEDC
		{%id%}
	|  g7_SCHMA
		{%id%}