@include "./DataTypes.ne"
@include "./LineGrammar.ne"
@include "./ReusableSubstructures.ne"

# Leerzeichen am Ende einer Line erlaubt? 
input 
    -> FAM D:* 
    |  FAM D:* (newLine structure D:*):*

structure 
    -> FAMILY_ATTRIBUTE_STRUCTURE
    |  FAM_HUSB
    |  FAM_WIFE
    |  CHIL
    |  TEST

FAM 
    -> Level D Xref D "FAM"

# =====================================================
# FIRST LEVEL 
# =====================================================
FAM_HUSB 
    -> "1" D "HUSB" D Xref
    |  FAM_HUSB newLine PHRASE

HUSB
    -> Level D "HUSB" newLine Level D "AGE" D Age
    |  HUSB newLine PHRASE

FAM_WIFE 
    -> "1" D "WIFE" D Xref
    |  FAM_WIFE newLine PHRASE

WIFE
    -> Level D "WIFE" newLine Level D "AGE" D Age
    |  WIFE newLine PHRASE

CHIL 
    -> "1" D "CHIL" D Xref
    |  CHIL newLine PHRASE

TEST
    -> Level D "TEST" D DateExact
    

FAMILY_ATTRIBUTE_STRUCTURE
    -> NCHI
    |  RESI
    |  FACT

# =====================================================
# SECOND LEVEL 
# =====================================================
NCHI 
    -> Level D "NCHI" D Integer
    |  NCHI newLine TYPE

RESI
    -> Level D "RESI" D Text
    |  RESI newLine TYPE

FACT
    -> Level D "FACT" D Text
    |  FACT newLine TYPE

FAMILY_EVENT_DETAIL
    -> HUSB
    |  WIFE
    |  EVENT_DETAIL

EVENT_DETAIL
    -> DATE






