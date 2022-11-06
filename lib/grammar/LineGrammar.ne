# =====================================================
# LINE GRAMMAR
# =====================================================
# Defined in https://gedcom.io/specifications/FamilySearchGEDCOMv7.html#lines

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