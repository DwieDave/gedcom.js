# =====================================================
# REUSABLE SUBSTRUCTURES
# =====================================================
AGE -> Level D "AGE" D Age
    | AGE newLine PHRASE

PHRASE
    -> Level D "PHRASE" D Text

TYPE
    -> Level D "TYPE" D Text

TIME
    -> Level D "TIME" D Time

DATE
    -> Level D "DATE" D DateValue
    | DATE newLine TIME:? PHRASE:?
    | DATE newLine PHRASE:? TIME:?

DATEPERIOD
    -> Level D "DATE" D DatePeriod
    | DATEPERIOD newLine PHRASE

TEXT
    -> Level D "TEXT" D Text
    | TEXT newLine Level D "MIME" MediaType
    | TEXT newLine Level D "LANG" language

QUAY -> Level D "QUAY" D ("0" | "1" | "2" | "3")

CROP -> Level D "CROP" D
    | CROP newLine Level D "TOP" D Integer
    | CROP newLine Level D "LEFT" D Integer
    | CROP newLine Level D "HEIGHT" D Integer
    | CROP newLine Level D "WIDTH" D Integer

EVENT_DETAIL
    -> DATE

NAME_PIECES -> Level D NAME_PIECES_ENUM D Text


NON_EVENT_STRUCTURE -> Level D "NO" D EVENTS
    | NON_EVENT_STRUCTURE newLine DATEPERIOD
    | NON_EVENT_STRUCTURE newLine NOTE_STRUCTURE
    | NON_EVENT_STRUCTURE newLine SOURCE_CITATION

# NOTE
NOTE_STRUCTURE -> (Level D "NOTE" D Text
    | NOTE_STRUCTURE newLine Level D "MIME" D MediaType
    | NOTE_STRUCTURE newLine Level D "LANG" D language
    | NOTE_STRUCTURE newLine NOTE_TRAN
    | NOTE_STRUCTURE newLine SOURCE_CITATION) | Level D "SNOTE" D Xref

NOTE_TRAN -> Level D "TRAN" D Text 
        | NOTE_TRAN newLine Level D "MIME" D MediaType
        | NOTE_TRAN newLine Level D "LANG" D language


SOURCE_CITATION -> Level D "SOUR" D Xref
    | SOURCE_CITATION newLine Level D "PAGE" D Text
    | SOURCE_CITATION newLine SOUR_DATA
    | SOURCE_CITATION newLine SOUR_EVEN
    | SOURCE_CITATION newLine QUAY
    | SOURCE_CITATION newLine MULTIMEDIA_LINK
    | SOURCE_CITATION newLine NOTE_STRUCTURE

SOUR_DATA -> Level D "DATA"
    | SOUR_DATA newLine DATE
    | SOUR_DATA newLine TEXT

SOUR_EVEN -> Level D "EVEN" (ATTRIBUTES | EVENTS)
    | SOUR_EVEN newLine PHRASE
    | SOUR_EVEN newLine ROLE
    | SOUR_EVEN newLine ROLE newLine PHRASE

MULTIMEDIA_LINK -> Level D "OBJE" D Xref
    | MULTIMEDIA_LINK newLine CROP
    | MULTIMEDIA_LINK newLine Level D "TITL" D Text





