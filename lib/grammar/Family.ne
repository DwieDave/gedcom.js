# call moo-lexer
@lexer lexer

# =====================================================
# FAMILY
# =====================================================
g7_record_FAM 
    -> Fam
        {%id%}
    |  Fam FamilySubstructures:+
        {% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}

Fam 
    -> Level D %Xref D "FAM" EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.FAM_RECORD, checkCardinalityOf: {HUSB:"0:1", WIFE:"0:1"}})%}

FamilySubstructures 
    -> FAMILY_ATTRIBUTE_STRUCTURE 
        {%id%}
    |  FAM_HUSB 
        {%id%}
    |  FAM_WIFE 
        {%id%}
    |  CHIL 
        {%id%}

# =====================================================
# FIRST LEVEL 
# =====================================================
FAMILY_ATTRIBUTE_STRUCTURE
    -> NCHI
        {%id%} 
    |  RESI
        {%id%}
    |  FACT
        {%id%}

# FAMILY_EVENT_STRUCTURE
# NON_EVENT_STRUCTURE



# ASSOCIATION_STRUCTURE
# SUBM
# LDS_SPOUSE_SEALING
# IDENTIFIER_STRUCTURE
# NOTE_STRUCTURE
# SOURCE_STRUCTURE
# MULTIMEDIA_STRUCTURE
# CHANGE_DATE
# CREATION_DATE


# =====================================================
# SECOND LEVEL 
# =====================================================
NCHI 
    -> Level D "NCHI" D Integer EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  NCHI TYPE
        {% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

RESI
    -> Level D "RESI" D Text EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  RESI TYPE
        {% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

FACT
    -> Level D "FACT" D Text EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  FACT TYPE
        {% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

#FAMILY_EVENT_DETAIL
#    -> HUSB
#    |  WIFE
#    |  EVENT_DETAIL







