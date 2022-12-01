# call moo-lexer
@lexer lexer

# =====================================================
# FAMILY
# =====================================================
FAMILY_RECORD 
    -> FAM
        {%id%}
    |  FAM structure:+
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]})%}

structure 
    -> FAMILY_ATTRIBUTE_STRUCTURE 
        {%id%}
    |  FAM_HUSB 
        {%id%}
    |  FAM_WIFE 
        {%id%}
    |  CHIL 
        {%id%}
    |  TEST 
        {%id%}

FAM 
    -> Level D %Xref D "FAM" EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.FAM_RECORD, checkCardinalityOf: {HUSB:"0:1", WIFE:"0:1"}})%}

TEST
    -> Level D "TEST" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}

# =====================================================
# FIRST LEVEL 
# =====================================================
FAM_HUSB 
    -> Level D "HUSB" D %Xref EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF, checkCardinalityOf: {PHRASE:"0:1"}})%} 
    |  FAM_HUSB PHRASE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

FAM_WIFE 
    -> Level D "WIFE" D %Xref EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF, checkCardinalityOf: {PHRASE:"0:1"}})%}
    |  FAM_WIFE PHRASE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

CHIL 
    -> Level D "CHIL" D %Xref EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  CHIL PHRASE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}


FAMILY_ATTRIBUTE_STRUCTURE
    -> NCHI
        {%id%} 
    |  RESI
        {%id%}
    |  FACT
        {%id%}


# =====================================================
# SECOND LEVEL 
# =====================================================
NCHI 
    -> Level D "NCHI" D Integer EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  NCHI TYPE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

RESI
    -> Level D "RESI" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  RESI TYPE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

FACT
    -> Level D "FACT" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  FACT TYPE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

#FAMILY_EVENT_DETAIL
#    -> HUSB
#    |  WIFE
#    |  EVENT_DETAIL







