# call moo-lexer
@lexer lexer

# =====================================================
# REUSABLE SUBSTRUCTURES
# =====================================================

AGE -> Level D "AGE" D Age EOL
        {% (data) => functions.createStructure({line: data, type: lineTypes.NO_XREF})%}
    | AGE PHRASE EOL
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: ["PHRASE"]}) %}
        
PHRASE
    -> Level D "PHRASE" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}

TYPE
    -> Level D "TYPE" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}

TIME
    -> Level D "TIME" D Time EOL

DATE
    -> Level D "DATE" D DateValue EOL
    | DATE TIME:? PHRASE:? EOL
    | DATE PHRASE:? TIME:? 

DATE_EXACT
    -> Level D "DATE" D DateExact EOL
    | DATE TIME EOL

DATEPERIOD
    -> Level D "DATE" D DatePeriod EOL
    | DATEPERIOD PHRASE EOL

TEXT
    -> Level D "TEXT" D Text EOL
    | TEXT Level D "MIME" MediaType EOL
    | TEXT Level D "LANG" language EOL

QUAY 
    -> Level D "QUAY" D ("0" | "1" | "2" | "3")

CROP 
    -> Level D "CROP" D
    | CROP Level D "TOP" D Integer EOL
    | CROP Level D "LEFT" D Integer EOL
    | CROP Level D "HEIGHT" D Integer EOL
    | CROP Level D "WIDTH" D Integer EOL

EVENT_DETAIL
    -> DATE

NAME_PIECES 
    -> Level D NAME_PIECES_ENUM D Text EOL


NON_EVENT_STRUCTURE 
    -> Level D "NO" D EVENTS EOL
    | NON_EVENT_STRUCTURE DATEPERIOD EOL
    | NON_EVENT_STRUCTURE NOTE_STRUCTURE EOL
    | NON_EVENT_STRUCTURE SOURCE_CITATION EOL


# NOTE
NOTE_STRUCTURE 
    -> (Level D "NOTE" D Text EOL
    | NOTE_STRUCTURE Level D "MIME" D MediaType EOL
    | NOTE_STRUCTURE Level D "LANG" D language EOL
    | NOTE_STRUCTURE NOTE_TRAN EOL
    | NOTE_STRUCTURE SOURCE_CITATION) | Level D "SNOTE" D %Xref EOL

NOTE_TRAN 
    -> Level D "TRAN" D Text EOL
    | NOTE_TRAN Level D "MIME" D MediaType EOL
    | NOTE_TRAN Level D "LANG" D language EOL


# Source Citation
SOURCE_CITATION 
    -> Level D "SOUR" D %Xref EOL
    | SOURCE_CITATION Level D "PAGE" D Text EOL
    | SOURCE_CITATION SOUR_DATA EOL
    | SOURCE_CITATION SOUR_EVEN EOL
    | SOURCE_CITATION QUAY EOL
    | SOURCE_CITATION MULTIMEDIA_LINK EOL
    | SOURCE_CITATION NOTE_STRUCTURE EOL

SOUR_DATA 
    -> Level D "DATA" EOL
    | SOUR_DATA DATE EOL
    | SOUR_DATA TEXT EOL

SOUR_EVEN 
    -> Level D "EVEN" (ATTRIBUTES | EVENTS) EOL
    | SOUR_EVEN PHRASE EOL
    | SOUR_EVEN ROLE EOL
    | SOUR_EVEN ROLE EOL PHRASE EOL

# Multimedia Link
MULTIMEDIA_LINK 
    -> Level D "OBJE" D %Xref EOL
    | MULTIMEDIA_LINK CROP EOL
    | MULTIMEDIA_LINK Level D "TITL" D Text EOL

# LDS Ordinance Detail
LDS_ORDINANCE_DETAIL 
    -> DATE EOL
    | Level D "TEMP" D Text EOL
    | PLACE_STRUCTURE EOL
    | Level D "STAT" D FAMC_STAT_ENUM DATE_EXACT EOL
    | NOTE_STRUCTURE EOL
    | SOURCE_CITATION EOL

# Place Structure
PLACE_STRUCTURE 
    -> Level D "PLAC" D List_Text EOL
    | PLACE_STRUCTURE Level D "FORM" D List_Text EOL
    | PLACE_STRUCTURE Level D "LANG" D language EOL
    | PLACE_STRUCTURE PLAC_TRAN EOL
    | PLACE_STRUCTURE MAP EOL
    | PLACE_STRUCTURE EXID EOL
    | PLACE_STRUCTURE NOTE_STRUCTURE EOL


MAP 
    -> Level D "MAP" EOL
    | MAP Level D "LATI" D Special EOL
    | MAP Level D "LONG" D Special EOL

EXID 
    -> Level D "EXID" D Special EOL
    | EXID Level D "TYPE" D Special EOL

PLAC_TRAN 
    -> Level D "TRAN" D Text EOL
    | PLAC_TRAN Level D "LANG" D language EOL


FAMC_STAT 
    -> Level D "STAT" FAMC_STAT_ENUM EOL

PEDI 
    -> Level D "PEDI" D PEDI_ENUM EOL
    | PEDI PHRASE EOL

FAMS 
    -> Level D "FAMS" D %Xref EOL
    | FAMS NOTE_STRUCTURE EOL

ASSOCIATION_STRUCTURE 
    -> Level D "ASSO" D %Xref EOL
    | ASSOCIATION_STRUCTURE PHRASE EOL
    | ASSOCIATION_STRUCTURE ROLE EOL
    | ASSOCIATION_STRUCTURE NOTE_STRUCTURE EOL
    | ASSOCIATION_STRUCTURE SOURCE_CITATION EOL

REFN 
    -> Level D "REFN" D Special EOL
    | REFN Level D "TYPE" D Text EOL

UID 
    -> Level D "UID" D Special EOL

IDENTIFIER_STRUCTURE 
    -> (REFN | UID | EXID) EOL

CHANGE_DATE 
    -> Level D "CHAN" EOL
    | CHANGE_DATE DATE_EXACT EOL
    | CHANGE_DATE NOTE_STRUCTURE EOL

CREATION_DATE 
    -> Level D "CREA" EOL
    | CREATION_DATE DATE_EXACT EOL