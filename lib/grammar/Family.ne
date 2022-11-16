@include "./DataTypes.ne"
@include "./Substructures.ne"

# Leerzeichen am Ende einer Line erlaubt? 
input 
    -> FAM D:* 
    |  FAM D:* structure:*

structure 
    -> FAMILY_ATTRIBUTE_STRUCTURE
    |  FAM_HUSB
    |  FAM_WIFE
    |  CHIL
    |  TEST

FAM 
    -> Level D Xref D "FAM" D:* EOL

# =====================================================
# FIRST LEVEL 
# =====================================================
FAM_HUSB 
    -> "1" D "HUSB" D Xref EOL
    |  FAM_HUSB PHRASE EOL

HUSB
    -> Level D "HUSB" EOL Level D "AGE" D Age EOL
    |  HUSB PHRASE EOL

FAM_WIFE 
    -> "1" D "WIFE" D Xref EOL
    |  FAM_WIFE PHRASE EOL

WIFE
    -> Level D "WIFE" Level D "AGE" D Age EOL
    |  WIFE PHRASE EOL

CHIL 
    -> "1" D "CHIL" D Xref EOL
    |  CHIL PHRASE EOL

TEST
    -> Level D "TEST" D Text EOL
    

FAMILY_ATTRIBUTE_STRUCTURE
    -> NCHI
    |  RESI
    |  FACT

# =====================================================
# SECOND LEVEL 
# =====================================================
NCHI 
    -> Level D "NCHI" D Integer EOL
    |  NCHI TYPE EOL

RESI
    -> Level D "RESI" D Text EOL
    |  RESI TYPE EOL

FACT
    -> Level D "FACT" D Text EOL
    |  FACT TYPE EOL

FAMILY_EVENT_DETAIL
    -> HUSB
    |  WIFE
    |  EVENT_DETAIL




