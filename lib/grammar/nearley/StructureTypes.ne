g7_FAM_HUSB
	-> Level D %Xref D "HUSB" EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_LINEVAL", checkCardinalityOf: {PHRASE:"0:1"}})%}
	|  g7_FAM_HUSB g7_PHRASE
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_PHRASE
	-> Level D "PHRASE" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}