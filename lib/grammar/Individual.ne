@include "./DataTypes.ne"
@include "./Substructures.ne"

input 
    -> INDI D:* 
    |  INDI D:* (newLine structure D:*):*

INDI 
    -> Level D %Xref D "INDI"

structure 
    -> RESN
    |  PERSONAL_NAME_STRUCTURE
    |  SEX
    |  INDIVIDUAL_ATTRIBUTE_STRUCTURE
    |  INDIVIDUAL_EVENT_STRUCTURE
    |  NON_EVENT_STRUCTURE
    |  LDS_INDIVIDUAL_ORDINANCE
    |  INDI_FAMC
    |  FAMS
    |  SUBM
    |  ASSOCIATION_STRUCTURE
    |  ALIA
    |  ANCI
    |  DESI
    |  IDENTIFIER_STRUCTURE
    |  NOTE_STRUCTURE
    |  SOURCE_CITATION
    |  MULTIMEDIA_LINK
    |  CHANGE_DATE
    |  CREATION_DATE


# =====================================================
# FIRST LEVEL 
# =====================================================

RESN 
    -> Level D "RESN" RESN_ENUM

PERSONAL_NAME_STRUCTURE 
    -> Level D "NAME" D PersonalName 
    | PERSONAL_NAME_STRUCTURE newLine TYPE
    | PERSONAL_NAME_STRUCTURE newLine TYPE newLine PHRASE
    | PERSONAL_NAME_STRUCTURE newLine NAME_PIECES
    | PERSONAL_NAME_STRUCTURE newLine NOTE_STRUCTURE
    | PERSONAL_NAME_STRUCTURE newLine "TRAN" PersonalName newLine Level D "LANG" D language
    | PERSONAL_NAME_STRUCTURE newLine "TRAN" PersonalName newLine Level D "LANG" D language newLine NAME_PIECES

SEX 
    -> Level D "SEX" D SEX_ENUM

INDIVIDUAL_EVENT_STRUCTURE 
    -> INDIVIDUAL_EVENT 
    | INDIVIDUAL_EVENT_BIRT_CHR 
    | INDIVIDUAL_EVENT_ADOP

LDS_INDIVIDUAL_ORDINANCE 
    -> Level D ("BAPL" | "CONL" | "ENDL" | "INIL" | "SLGC")
    | LDS_INDIVIDUAL_ORDINANCE newLine LDS_ORDINANCE_DETAIL
    | Level D "SLGC" newLine Level D "FAMC" D %Xref

INDI_FAMC 
    -> Level D "FAMC" D %Xref
    | INDI_FAMC newLine PEDI
    | INDI_FAMC newLine FAMC_STAT
    | INDI_FAMC newLine NOTE_STRUCTURE

SUBM 
    -> Level D "SUBM" D %Xref

ALIA 
    -> Level D "ALIA" D %Xref
    | ALIA newLine PHRASE

ANCI 
    -> Level D "ANCI" D %Xref

DESI 
    -> Level D "DESI" D %Xref



# =====================================================
# SECOND LEVEL 
# =====================================================
INDIVIDUAL_ATTRIBUTE_STRUCTURE_NODE 
    -> Level D ("CAST" | "DSCR" | "EDUC") D Text
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE_NODE newLine Level D "TYPE" D Text
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE_NODE newLine INDIVIDUAL_EVENT_DETAIL

INDIVIDUAL_ATTRIBUTE_STRUCTURE 
    -> INDIVIDUAL_ATTRIBUTE_STRUCTURE_NODE 
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE newLine INDIVIDUAL_ATTRIBUTE_STRUCTURE_NODE 
    | INDIVIDUAL_ATTRIBUTE_STRUCTURE newLine Level D "IDNO" D Special

INDIVIDUAL_EVENT 
    -> Level D INDIVIDUAL_EVENTS D:? NullOrY
    | INDIVIDUAL_EVENT newLine Level D "TYPE" D Text
    | INDIVIDUAL_EVENT newLine INDIVIDUAL_EVENT_DETAIL

INDIVIDUAL_EVENT_DETAIL 
    -> EVENT_DETAIL 
    | AGE

INDIVIDUAL_EVENT_BIRT_CHR 
    -> INDIVIDUAL_EVENT newLine Level D "FAMC" D %Xref

INDIVIDUAL_EVENT_ADOP 
    -> INDIVIDUAL_EVENT_BIRT_CHR
    | INDIVIDUAL_EVENT_ADOP newLine Level D "ADOP" D ADOP_ENUM
    | INDIVIDUAL_EVENT_ADOP newLine Level D "ADOP" D ADOP_ENUM newLine PHRASE