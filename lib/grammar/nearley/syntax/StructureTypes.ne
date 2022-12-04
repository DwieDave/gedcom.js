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

g7_GEDC
	-> Level D "GEDC" EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF_NO_LINEVAL"})%}
	|  g7_GEDC g7_GEDC_VERS
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_GEDC_VERS
	-> Level D "VERS" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}

g7_SCHMA
	-> Level D "SCHMA" EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF_NO_LINEVAL"})%}
	|  g7_SCHMA g7_TAG
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_TAG
	-> Level D "TAG" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}

g7_FAM_HUSB
	-> Level D "HUSB" D %Xref EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF", checkCardinalityOf: {PHRASE:"0:1"}})%}
	|  g7_FAM_HUSB g7_PHRASE
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_FAM_WIFE
	-> Level D "WIFE" D %Xref EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF", checkCardinalityOf: {PHRASE:"0:1"}})%}
	|  g7_FAM_WIFE g7_PHRASE
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_PHRASE
	-> Level D "PHRASE" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})%}