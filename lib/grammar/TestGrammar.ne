#@include "./DataTypes.ne"
#@include "./Substructures.ne"

# Leerzeichen am Ende einer Line erlaubt? 

@{%
    //const functions = require('./Postprocessors.js');
    //const TYPE = require('../../Types.js')
    const moo = require("moo");

const lexer = moo.compile({
  D : /[ ]/,
  ZWEI: /[2]/,
  notBannedNoEOLNoSpace:  /[^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D\x20]+/,
  EOL: {match: /(?:\r\n?|\n)/, lineBreaks: true }
});
%}

@lexer lexer


# Literal strings now match tokens with that text:
trig -> "test" D "3" D "KARL" %EOL "second" D "foul"

D -> " "