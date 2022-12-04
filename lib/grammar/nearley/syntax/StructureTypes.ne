# call moo-lexer
@lexer lexer

g7_ADDR
	-> ADDR
		{%id%}
	|  ADDR ADDRSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

ADDR
	->Level D "ADDR" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF", checkCardinalityOf: {ADDR1:"0:1", ADDR2:"0:1", ADDR3:"0:1"}})%}

ADDRSubstructs
	-> g7_ADDR1
		{%id%}
	|  g7_ADDR2
		{%id%}
	|  g7_ADDR3
		{%id%}

g7_ADDR1
	-> Level D "ADDR1" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}

g7_ADDR2
	-> Level D "ADDR2" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}

g7_ADDR3
	-> Level D "ADDR3" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}

g7_FAM_HUSB
	-> Level D %Xref D "HUSB" EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_LINEVAL", checkCardinalityOf: {PHRASE:"0:1"}})%}
	|  g7_FAM_HUSB g7_PHRASE
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_FAM_WIFE
	-> Level D %Xref D "WIFE" EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_LINEVAL", checkCardinalityOf: {PHRASE:"0:1"}})%}
	|  g7_FAM_WIFE g7_PHRASE
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_PHRASE
	-> Level D "PHRASE" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}