@include "../lib/grammar/nearley/syntax/DataTypes.ne"
@include "../lib/grammar/nearley/syntax/Enums.ne"
@include "../lib/grammar/nearley/syntax/Line.ne"
@include "../lib/grammar/nearley/syntax/StructureTypes.ne"
@include "../lib/grammar/nearley/syntax/Substructures.ne"
@include "../lib/grammar/nearley/Header.ne"
@include "../lib/grammar/nearley/Family.ne"
@include "../lib/grammar/nearley/Individual.ne"
@include "../lib/grammar/nearley/Multimedia.ne"
@include "../lib/grammar/nearley/Repository.ne"
@include "../lib/grammar/nearley/SharedNote.ne"
@include "../lib/grammar/nearley/Source.ne"
@include "../lib/grammar/nearley/Submitter.ne"
@{%
    // required modules
    const postprocessor = require('../Postprocessors.js');
    const {lineTypes} = require('../../Constants.js')
    const moo = require("moo");

    // moo-lexer to pre-compile input
    const lexer = moo.compile({
        D           : /[ ]/,
        digit       : /[0-9]/,
        underscore  : /[_]/,
        Xref        : /\@[A-Z0-9\_]+\@/,
        atsign      : /\@/,
        EOL         : {match: /(?:\r\n?|\n)/, lineBreaks: true },

        // not Banned, no EOL, no Space, no @, no _
        notBannedNoEOLNoSpace:  /[^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D\x20\x40\x5F]+/
    });
%}



# call moo-lexer
@lexer lexer

GEDCOM
	-> g7_record_HEAD RECORDS:* TRLR

RECORDS
	-> g7_record_FAM
		{%id%}
	|  g7_record_INDI
		{%id%}
	|  g7_record_OBJE
		{%id%}
	|  g7_record_REPO
		{%id%}
	|  g7_record_SNOTE
		{%id%}
	|  g7_record_SOUR
		{%id%}
	|  g7_record_SUBM
		{%id%}

TRLR
	-> Level D "TRLR" EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "GEDCOM",type: lineTypes.NO_XREF_NO_LINEVAL})%}