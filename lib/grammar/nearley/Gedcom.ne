# call moo-lexer
@lexer lexer

g7_FAM_HUSB
	-> Level D %Xref D "FAM" EOL
		{% (d) => postprocessor.createStructure({line: d, type: "FAM_RECORD", checkCardinalityOf: {HUSB:"0:1"}})%}
	|  g7_FAM_HUSB g7_FAM_HUSB
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}