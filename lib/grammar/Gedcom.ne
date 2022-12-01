@include "./NearleyHeader.ne"
@include "./GedcomHeader.ne"
@include "./Family.ne"

# call moo-lexer
@lexer lexer

# TO-DO: Implement support for RESN tag
# Naming convention: 
#   * for Structure types use g7-URI from gedcom specification
#   * for Substructures use upper-case name from gedcom specification
#   * for self-defined helpers use CamelCase
# =====================================================
# GEDCOM INPUT
# =====================================================
input 
    -> Header Record:* TRLR

Record
    -> g7_record_FAM {%id%}
    #|  INDIVIDUAL_RECORD
    #|  MULTIMEDIA_RECORD
    #|  REPOSITORY_RECORD
    #|  SHARED_NOTE_RECORD
    #|  SOURCE_RECORD
    #|  SUBMITTER_RECORD

TRLR
    -> Level D "TRLR" EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF_NO_LINEVAL})%}