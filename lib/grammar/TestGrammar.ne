#FAM 
#    -> Level D %Xref D "FAM" EOL
#        {% (d) => functions.createStructure({line: d, type: lineTypes.FAM_RECORD})%}

STRUCT_NO_XREF[Level, Xref, Tag, LineVal] 
    -> $Level D $Xref D $Tag EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}

        FAM_HUSB 
    -> "1" D "HUSB" D %Xref EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  FAM_HUSB PHRASE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: {PHRASE:"0:1"}}) %}
