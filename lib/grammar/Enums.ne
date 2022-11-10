# =====================================================
# ENUMS
# =====================================================

RESN_ENUM   -> "CONFIDENTIAL" {%id%} 
            |  "LOCKED"  {%id%}
            |  "PRIVACY" {%id%}
NAME_PIECES_ENUM -> "NPFX" {%id%} 
            |  "GIVN" {%id%} 
            |  "NICK" {%id%}  
            |  "SPFX" {%id%} 
            |  "SURN" {%id%} 
            |  "NSFX" {%id%}
ROLE        -> "CHIL" {%id%} 
            |  "CLERGY" {%id%} 
            |  "FATH" {%id%} 
            |  "FRIEND" {%id%} 
            |  "GODP" {%id%} 
            |  "HUSB" {%id%} 
            |  "MOTH" {%id%} 
            |  "MULTIPLE" {%id%} 
            |  "NGHBR" {%id%} 
            |  "OFFICIATOR" {%id%} 
            |  "SPOU" {%id%} 
            |  "WIFE" {%id%} 
            |  "WITN" {%id%} 
            |  "OTHER" {%id%}
SEX_ENUM    -> "M" {%id%} 
            |  "F" {%id%} 
            |  "X" {%id%} 
            |  "U" {%id%}
ADOP_ENUM   -> "HUSB" {%id%} 
            |  "WIFE" {%id%} 
            |  "BOTH" {%id%}

# EVENTS
EVENTS      -> INDIVIDUAL_EVENTS 
            |  FAMILY_EVENTS
INDIVIDUAL_EVENTS -> "ADOP" {%id%} 
            | "BAPM" {%id%} 
            | "BARM" {%id%} 
            | "BASM" {%id%} 
            | "BIRT" {%id%} 
            | "BLES" {%id%} 
            | "BURI" {%id%} 
            | "CENS" {%id%} 
            | "CHR"  {%id%} 
            | "CHRA" {%id%} 
            | "CONF" {%id%} 
            | "CREM" {%id%} 
            | "DEAT" {%id%} 
            | "EMIG" {%id%} 
            | "FCOM" {%id%} 
            | "GRAD" {%id%} 
            | "IMMI" {%id%} 
            | "NATU" {%id%} 
            | "ORDN" {%id%} 
            | "PROB" {%id%} 
            | "RETI" {%id%} 
            | "WILL" {%id%}
FAMILY_EVENTS -> "ANUL" {%id%} 
            | "CENS" {%id%} 
            | "DIV"  {%id%}
            | "DIVFG" {%id%} 
            | "ENGA" {%id%} 
            | "MARB" {%id%} 
            | "MARC" {%id%} 
            | "MARR" {%id%} 
            | "MARS" {%id%}

# ATTRIBUTES
ATTRIBUTES  -> INDIVIDUAL_ATTRIBUTES 
            |  FAMILY_ATTRIBUTES
INDIVIDUAL_ATTRIBUTES -> "CAST" {%id%} 
            |  "DSCR" {%id%} 
            |  "EDUC" {%id%} 
            |  "IDNO" {%id%} 
            |  "NATI" {%id%} 
            |  "NCHI" {%id%} 
            |  "NMR"  {%id%} 
            |  "OCCU" {%id%} 
            |  "PROP" {%id%} 
            |  "RELI" {%id%} 
            |  "RESI" {%id%} 
            |  "SSN"  {%id%}
            |  "TITL" {%id%}
FAMILY_ATTRIBUTES -> "NCHI" {%id%} 
            |  "RESI" {%id%}

FAMC_STAT_ENUM -> "CHALLENGED" {%id%} 
            |  "DISPROVEN" {%id%} 
            |  "PROVEN" {%id%}

PEDI_ENUM   -> "ADOPTED" {%id%} 
            |  "BIRTH" {%id%} 
            |  "FOSTER" {%id%} 
            |  "SEALING" {%id%} 
            |  "OTHER" {%id%}

