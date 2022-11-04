structure 
    -> FAMILY_ATTRIBUTE_STRUCTURE
    |  HUSB
    |  WIFE
    |  CHIL

# =====================================================
# LINE GRAMMAR
# =====================================================
Level       -> "0" | nonzero digit:*
D           -> [ ]
Xref        -> atsign tagChar:+ atsign
Tag         -> stdTag | extTag
LineVal     -> pointer | lineStr
EOL         -> [\x0D] [\x0A]:? | [\x0A]

stdTag      -> ucletter tagChar:*
extTag      -> underscore tagChar:+
tagChar     -> ucletter | digit | underscore

pointer     -> voidPrt | Xref
voidPrt     -> "@VOID@"

nonAt       -> [^@\n]
nonEOL      -> [^\n]
lineStr     -> nonAt nonEOL:* | atsign atsign nonEOL:*

digit       -> [0-9]
nonzero     -> [1-9]
ucletter    -> [A-Z]
underscore  -> "_"
atsign      -> "@"
newLine     -> "\n"

banned
    -> [\x00-\x08]     # C0 other than LF CR and Tab
    |  [\x0B-\x0C] 
    |  [\x0E-\x1F] 
    |  [\x7F]          # DEL
    |  [\x80-\x9F]     # C1

notBanned -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F]     


# =====================================================
# DATA TYPES
# =====================================================
anychar -> notBanned
Text    -> anychar:*

Integer -> digit:+

stdEnum -> stdTag | Integer
Enum    -> stdEnum | extTag


ageDuration 
    -> years 
years   -> Integer "y"
months  -> Integer "m"
weeks   -> Integer "w"
days    -> Integer "d"



# =====================================================
# SUBSTRUCTURES
# =====================================================
HUSB 
    -> "1" D "HUSB" D Xref
    |  HUSB newLine PHRASE

WIFE 
    -> "1" D "WIFE" D Xref
    |  WIFE newLine PHRASE

CHIL 
    -> "1" D "CHIL" D Xref
    |  CHIL newLine PHRASE
    

# Family attributes
FAMILY_ATTRIBUTE_STRUCTURE
    -> NCHI
    |  RESI
    |  FACT

NCHI 
    -> Level D "NCHI" D Integer
    |  NCHI newLine TYPE

RESI
    -> Level D "RESI" D Text
    |  RESI newLine TYPE

FACT
    -> Level D "FACT" D Text
    |  FACT newLine TYPE


# Substructures shared by most family events and attributes
FAMILY_EVENT_DETAIL
    -> Level D "HUSB" newLine Level D "AGE" 

# =====================================================
# MULTIFUNCTIONAL SUBSTRUCTURES
# =====================================================

PHRASE
    -> Level D "PHRASE" D Text

TYPE
    -> Level D "TYPE" D Text




