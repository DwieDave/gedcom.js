# =====================================================
# ENUMS
# =====================================================

RESN_ENUM -> "CONFIDENTIAL" | "LOCKED" | "PRIVACY"
NAME_PIECES_ENUM -> "NPFX" | "GIVN" | "NICK" | "SPFX" | "SURN" | "NSFX"
ROLE -> "CHIL" | "CLERGY" | "FATH" | "FRIEND" | "GODP" | "HUSB" | "MOTH" | "MULTIPLE" | "NGHBR" | "OFFICIATOR" | "SPOU" | "WIFE" | "WITN" | "OTHER"
SEX_ENUM -> "M" | "F" | "X" | "U"
ADOP_ENUM -> "HUSB" | "WIFE" | "BOTH"

# EVENTS
EVENTS -> INDIVIDUAL_EVENTS | FAMILY_EVENTS
INDIVIDUAL_EVENTS -> "ADOP" | "BAPM" | "BARM" | "BASM" | "BIRT" | "BLES" | "BURI" | "CENS" | "CHR" | "CHRA" | "CONF" | "CREM" | "DEAT" | "EMIG" | "FCOM" | "GRAD" | "IMMI" | "NATU" | "ORDN" | "PROB" | "RETI" | "WILL"
FAMILY_EVENTS -> "ANUL" | "CENS" | "DIV" | "DIVFG" | "ENGA" | "MARB" | "MARC" | "MARR" | "MARS"

# ATTRIBUTES
ATTRIBUTES -> INDIVIDUAL_ATTRIBUTES | FAMILY_ATTRIBUTES
INDIVIDUAL_ATTRIBUTES -> "CAST" | "DSCR" | "EDUC" | "IDNO" | "NATI" | "NCHI" | "NMR" | "OCCU" | "PROP" | "RELI" | "RESI" | "SSN" | "TITL"
FAMILY_ATTRIBUTES -> "NCHI" | "RESI"

