@include "../nearley/syntax/DataTypes.ne"
@include "../nearley/syntax/Enums.ne"
@include "../nearley/syntax/Line.ne"
@include "../nearley/syntax/StructureTypes.ne"
@include "../nearley/syntax/Substructures.ne"
@include "../nearley/Family.ne"
@include "../nearley/Individual.ne"
@include "../nearley/Multimedia.ne"
@include "../nearley/Repository.ne"
@include "../nearley/SharedNote.ne"
@include "../nearley/Source.ne"
@include "../nearley/Submitter.ne"
@{%
    // required modules
    const postprocessor = require('../generator/Postprocessors.js');
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

g7_FAM_HUSB
	-> Level D %Xref D "FAM" EOL
		{% (d) => postprocessor.createStructure({line: d, type: "FAM_RECORD", checkCardinalityOf: {HUSB:"0:1"}})%}
	|  g7_FAM_HUSB g7_FAM_HUSB
		{% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})%}