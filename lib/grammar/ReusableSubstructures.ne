# =====================================================
# REUSABLE SUBSTRUCTURES
# =====================================================

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
