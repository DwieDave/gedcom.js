# call moo-lexer
@lexer lexer

# ISSUE: Header grammar is not functional because imports etc. are relocated at Gedcom.ne

# =====================================================
# HEADER
# =====================================================
Header
    -> HEAD {%id%}
    |  HEAD Header_Subs
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

HEAD 
    -> Level D "HEAD" EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.HEADER})%}

Header_Subs
    -> GEDC {%id%}
    |  SCHMA {%id%}
# =====================================================
# FIRST LEVEL 
# =====================================================
GEDC
    -> Level D "GEDC" EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF_NO_LINEVAL})%}
    |  GEDC GEDC_VERS
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

SCHMA
    -> Level D "SCHMA" EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF_NO_LINEVAL})%}
    |  SCHMA TAG
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}


# =====================================================
# SECOND LEVEL 
# =====================================================
GEDC_VERS
    -> Level D "VERS" D Special EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}

TAG
    -> Level D "TAG" D Special EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
