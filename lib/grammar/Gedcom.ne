@include "./NearleyHeader.ne"
@include "./GedcomHeader.ne"
@include "./Family.ne"


# call moo-lexer
@lexer lexer

# =====================================================
# GEDCOM INPUT
# =====================================================
input 
    -> Header Record:* TRLR

Record
    -> FAMILY_RECORD {%id%}
    #|  INDIVIDUAL_RECORD
    #|  MULTIMEDIA_RECORD
    #|  REPOSITORY_RECORD
    #|  SHARED_NOTE_RECORD
    #|  SOURCE_RECORD
    #|  SUBMITTER_RECORD

TRLR
    -> Level D "TRLR" EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF_NO_LINEVAL})%}