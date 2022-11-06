@include "./DataTypes.ne"
@include "./LineGrammar.ne"
@include "./ReusableSubstructures.ne"

input 
    -> INDI D:* 
    |  INDI D:* (newLine structure D:*):*

structure 
    -> RESN
    |  PERSONAL_NAME_STRUCTURE
    |  SEX
    |  INDIVIDUAL_ATTRIBUTE_STRUCTURE
    |  INDIVIDUAL_EVENT_STRUCTURE
    |  NON_EVENT_STRUCTURE

INDI 
    -> Level D Xref D "INDI"


# =====================================================
# FIRST LEVEL 
# =====================================================

RESN -> Level D "RESN" RESN_ENUM

PERSONAL_NAME_STRUCTURE -> Level D "NAME" PersonalName 
    | PERSONAL_NAME_STRUCTURE newLine TYPE
    | PERSONAL_NAME_STRUCTURE newLine TYPE newLine PHRASE
    | PERSONAL_NAME_STRUCTURE newLine NAME_PIECES
    | PERSONAL_NAME_STRUCTURE newLine NOTE_STRUCTURE
    | PERSONAL_NAME_STRUCTURE newLine "TRAN" PersonalName newLine Level D "LANG" language
    | PERSONAL_NAME_STRUCTURE newLine "TRAN" PersonalName newLine Level D "LANG" language newLine NAME_PIECES

SEX -> Level D SEX_ENUM

INDIVIDUAL_EVENT_STRUCTURE -> INDIVIDUAL_EVENT | INDIVIDUAL_EVENT_BIRT_CHR | INDIVIDUAL_EVENT_ADOP

# =====================================================
# SECOND LEVEL 
# =====================================================


INDIVIDUAL_ATTRIBUTE_STRUCTURE_CAST -> Level D "CAST" Text
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE_CAST newLine Level D "TYPE" Text
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE_CAST newLine INDIVIDUAL_EVENT_DETAIL

INDIVIDUAL_ATTRIBUTE_STRUCTURE_DSCR -> Level D "DSCR" Text
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE_DSCR newLine Level D "TYPE" Text
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE_DSCR newLine INDIVIDUAL_EVENT_DETAIL

INDIVIDUAL_ATTRIBUTE_STRUCTURE_EDUC -> Level D "EDUC" Text
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE_EDUC newLine Level D "TYPE" Text
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE_EDUC newLine INDIVIDUAL_EVENT_DETAIL

INDIVIDUAL_ATTRIBUTE_STRUCTURE -> INDIVIDUAL_ATTRIBUTE_STRUCTURE_CAST 
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE newLine INDIVIDUAL_ATTRIBUTE_STRUCTURE_DSCR 
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE newLine INDIVIDUAL_ATTRIBUTE_STRUCTURE_EDUC
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE newLine Level D "IDNO" Special



INDIVIDUAL_EVENT -> Level D INDIVIDUAL_EVENTS
    | INDIVIDUAL_EVENT newLine Level D "TYPE" Text
    | INDIVIDUAL_EVENT newLine INDIVIDUAL_EVENT_DETAIL

INDIVIDUAL_EVENT_DETAIL -> EVENT_DETAIL | AGE

INDIVIDUAL_EVENT_BIRT_CHR -> INDIVIDUAL_EVENT newLine Level D "FAMC" Xref
INDIVIDUAL_EVENT_ADOP -> INDIVIDUAL_EVENT_BIRT_CHR
    | INDIVIDUAL_EVENT_ADOP newLine Level D "ADOP" ADOP_ENUM
    | INDIVIDUAL_EVENT_ADOP newLine Level D "ADOP" ADOP_ENUM newLine PHRASE