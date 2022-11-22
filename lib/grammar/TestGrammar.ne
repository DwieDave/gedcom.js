@include "./DataTypes.ne"
@include "./Substructures.ne"

# Leerzeichen am Ende einer Line erlaubt? 
@{%
    const functions = require('./Postprocessors.js');
    const TYPE = require('../../Types.js')
    const moo = require("moo");

const lexer = moo.compile({
  D : /[ ]/,
  digit      : /[0-9]/,
  underscore : /[_]/,
  atsign     : /[@]/,
  EOL: {match: /(?:\r\n?|\n)/, lineBreaks: true },
  // not Banned, no EOL, no Space, no @, no _
  notBannedNoEOLNoSpace:  /[^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D\x20\x40\x5F]+/
});
%}

@lexer lexer

main -> AGE

AGE -> Level D "AGE" D Age EOL
        {% (data) => functions.createStructure({line: data, type: TYPE.NO_XREF})%}
    | AGE PHRASE
        {% (data) => functions.addSubstructure(data[0], data[1])%}
        

PHRASE
    -> Level D "PHRASE" D Text EOL
        {% (data) => functions.createStructure({line: data, type: TYPE.NO_XREF})%}



