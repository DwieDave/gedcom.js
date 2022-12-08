# call moo-lexer
@lexer lexer

0_g7_record_INDI
	-> 0_recordINDI
		{%id%}
	|  0_recordINDI 0_recordINDI_Substructs:+
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

0_recordINDI
	->"0" D Xref D "INDI" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "0_g7_record_INDI", type: "INDI_RECORD", lineValType: "Text", checkCardinalityOf: {"1_g7_RESN":"0:1"}})%}

0_recordINDI_Substructs
	-> 1_g7_RESN
		{%id%}