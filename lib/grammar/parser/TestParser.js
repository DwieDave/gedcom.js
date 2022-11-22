// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    //const functions = require('./Postprocessors.js');
    //const TYPE = require('../../Types.js')
    const moo = require("moo");

const lexer = moo.compile({
  D : /[ ]/,
  ZWEI: /[2]/,
  notBannedNoEOLNoSpace:  /[^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D\x20]+/,
  EOL: {match: /(?:\r\n?|\n)/, lineBreaks: true }
});
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "trig", "symbols": [{"literal":"test"}, "D", {"literal":"3"}, "D", {"literal":"KARL"}, (lexer.has("EOL") ? {type: "EOL"} : EOL), {"literal":"second"}, "D", {"literal":"foul"}]},
    {"name": "D", "symbols": [{"literal":" "}]}
]
  , ParserStart: "trig"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
