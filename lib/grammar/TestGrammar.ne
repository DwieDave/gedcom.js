@include "./DataTypes.ne"
@include "./Substructures.ne"

# Leerzeichen am Ende einer Line erlaubt? 
input 
    -> TEST

TEST
    -> Level D "TEST" D Text

# =====================================================
# FIRST LEVEL 
# =====================================================
FAM_HUSB 
    -> "1" D "HUSB" D Xref
    |  FAM_HUSB EOL PHRASE

HUSB
    -> Level D "HUSB" EOL Level D "AGE" D Age
    |  HUSB EOL PHRASE

FAM_WIFE 
    -> "1" D "WIFE" D Xref
    |  FAM_WIFE EOL PHRASE

WIFE
    -> Level D "WIFE" EOL Level D "AGE" D Age
    |  WIFE EOL PHRASE

CHIL 
    -> "1" D "CHIL" D Xref
    |  CHIL EOL PHRASE

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
    |  NCHI EOL TYPE

RESI
    -> Level D "RESI" D Text
    |  RESI EOL TYPE

FACT
    -> Level D "FACT" D Text
    |  FACT EOL TYPE

FAMILY_EVENT_DETAIL
    -> HUSB
    |  WIFE
    |  EVENT_DETAIL





