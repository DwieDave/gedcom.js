structure 
    -> HUSB
    |  WIFE
    |  CHIL


# Line grammar
Level 
    -> "0"
    |  nonzero digit:*

D -> [ ]
Xref -> atsign tagChar:+ atsign

stdTag -> ucletter tagChar:*
extTag -> underscore tagChar:+
tagChar
    -> ucletter
    |  digit
    |  underscore

lineStr
    -> nonAt nonEOL:*
    |  atsign atsign nonEOL:*

nonAt       -> [^@\n]
nonEOL      -> [^\n]
digit       -> [0-9]
nonzero     -> [1-9]
ucletter    -> [A-Z]
underscore  -> "_"
atsign      -> "@"





# Husband 
HUSB -> "1 HUSB " Xref

WIFE -> "1 WIFE " Xref

CHIL -> "1 CHIL " Xref


