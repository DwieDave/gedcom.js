g7_TEST
	-> Level D "TEST" D undefined EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF", checkCardinalityOf: {PHRASE:"0:1"}})%}
	|  g7_TEST g7_PHRASE
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}