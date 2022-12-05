# call moo-lexer
@lexer lexer

g7_ADDR
	-> ADDR
		{%id%}
	|  ADDR ADDRSubstructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

ADDR
	->Level D "ADDR" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_ADDR", type: "NO_XREF", checkCardinalityOf: {"g7_ADDR1":"0:1", "g7_ADDR2":"0:1", "g7_ADDR3":"0:1"}})%}

ADDRSubstructs
	-> g7_ADDR1
		{%id%}
	|  g7_ADDR2
		{%id%}
	|  g7_ADDR3
		{%id%}

g7_ADDR1
	-> Level D "ADDR1" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_ADDR1", type: "NO_XREF"})%}

g7_ADDR2
	-> Level D "ADDR2" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_ADDR2", type: "NO_XREF"})%}

g7_ADDR3
	-> Level D "ADDR3" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_ADDR3", type: "NO_XREF"})%}

g7_GEDC
	-> Level D "GEDC" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_GEDC", type: "NO_XREF_NO_LINEVAL", checkCardinalityOf: {"g7_GEDC_VERS":"1:1"}})%}
	|  g7_GEDC g7_GEDC_VERS
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_GEDC_VERS
	-> Level D "VERS" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_GEDC_VERS", type: "NO_XREF"})%}

g7_SCHMA
	-> Level D "SCHMA" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_SCHMA", type: "NO_XREF_NO_LINEVAL"})%}
	|  g7_SCHMA g7_TAG
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_TAG
	-> Level D "TAG" D Special EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_TAG", type: "NO_XREF"})%}

g7_FAM_HUSB
	-> Level D "HUSB" D %Xref EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_FAM_HUSB", type: "NO_XREF", checkCardinalityOf: {"g7_PHRASE":"0:1"}})%}
	|  g7_FAM_HUSB g7_PHRASE
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_FAM_WIFE
	-> Level D "WIFE" D %Xref EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_FAM_WIFE", type: "NO_XREF", checkCardinalityOf: {"g7_PHRASE":"0:1"}})%}
	|  g7_FAM_WIFE g7_PHRASE
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

g7_PHRASE
	-> Level D "PHRASE" D Text EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_PHRASE", type: "NO_XREF"})%}