# call moo-lexer
@lexer lexer

# =====================================================
# HEADER
# =====================================================
Header
    -> HEAD {%id%}
    |  HEAD Header_Subs:+
        {% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

HEAD 
    -> Level D "HEAD" EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.HEADER, checkCardinalityOf: {GEDC:"1:1"}})%}

Header_Subs
    -> GEDC {%id%}
    |  SCHMA {%id%}
# =====================================================
# FIRST LEVEL 
# =====================================================
GEDC
    -> Level D "GEDC" EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.NO_XREF_NO_LINEVAL, checkCardinalityOf: {VERS:"1:1"}})%}
    |  GEDC GEDC_VERS
        {% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

SCHMA
    -> Level D "SCHMA" EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.NO_XREF_NO_LINEVAL})%}
    |  SCHMA TAG
        {% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]}) %}


# =====================================================
# SECOND LEVEL 
# =====================================================
GEDC_VERS
    -> Level D "VERS" D Special EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.NO_XREF})%}

TAG
    -> Level D "TAG" D Special EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.NO_XREF})%}
