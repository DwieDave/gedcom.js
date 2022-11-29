@include "./DataTypes.ne"
@include "./Substructures.ne"

@include "./Family.ne"
@include "./Header.ne"

@{%
    // required modules
    const functions = require('./Postprocessors.js');
    const {lineTypes} = require('../../Constants.js')
    const moo = require("moo");

    // moo-lexer to pre-compile input
    const lexer = moo.compile({
        D : /[ ]/,
        digit      : /[0-9]/,
        underscore : /[_]/,
        Xref     : /\@[A-Z0-9\_]+\@/,
        EOL: {match: /(?:\r\n?|\n)/, lineBreaks: true },
        // not Banned, no EOL, no Space, no @, no _
        notBannedNoEOLNoSpace:  /[^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D\x20\x40\x5F]+/
    });
%}

# call moo-lexer
@lexer lexer

# =====================================================
# FAMILY
# =====================================================

input 
    -> Header Record:* TRLR

Record
    -> FAMILY_RECORD
    #|  INDIVIDUAL_RECORD
    #|  MULTIMEDIA_RECORD
    #|  REPOSITORY_RECORD
    #|  SHARED_NOTE_RECORD
    #|  SOURCE_RECORD
    #|  SUBMITTER_RECORD

TRLR
    -> Level D "TRLR" EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF_NO_LINEVAL})%}