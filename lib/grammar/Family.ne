# call moo-lexer
@lexer lexer

# =====================================================
# MACROS
# =====================================================
STRUCT_NO_XREF[Level, Tag, LineVal] 
    -> $Level D $Tag D $LineVal EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}

# =====================================================
# FAMILY
# =====================================================
FAMILY_RECORD 
    -> FAM
        {%id%}
    |  FAM structure:+
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: {HUSB:"0:1", WIFE:"0:1"}}) %}

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
        {% (d) => functions.createStructure({line: d, type: lineTypes.FAM_RECORD})%}

TEST
    -> Level D "TEST" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}

# =====================================================
# FIRST LEVEL 
# =====================================================
FAM_HUSB 
    -> "1" D "HUSB" D %Xref EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%} 
    |  FAM_HUSB PHRASE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: {PHRASE:"0:1"}}) %}

FAM_WIFE 
    -> "1" D "WIFE" D %Xref EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  FAM_WIFE PHRASE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: {PHRASE:"0:1"}}) %}

CHIL 
    -> "1" D "CHIL" D %Xref EOL
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

#HUSB
#    -> Level D "HUSB" EOL Level D "AGE" D Age EOL
#    |  HUSB PHRASE EOL
#WIFE
#    -> Level D "WIFE" Level D "AGE" D Age EOL
#    |  WIFE PHRASE EOL


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







