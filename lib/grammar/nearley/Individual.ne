# call moo-lexer
@lexer lexer

g7_record_INDI
	-> recordINDI
		{%id%}
	|  recordINDI recordINDI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

recordINDI
	->Level D Xref D "INDI" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "g7_record_INDI", type: "INDI_RECORD", lineValType: "Text", checkCardinalityOf: {"g7_RESN":"0:1"}})%}
	|  g7_record_INDI g7_RESN
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}