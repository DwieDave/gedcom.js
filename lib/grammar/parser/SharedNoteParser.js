// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "g7_TEST$string$1", "symbols": [{"literal":"T"}, {"literal":"E"}, {"literal":"S"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "g7_TEST", "symbols": ["Level", "D", "g7_TEST$string$1", "D", "Text", "EOL"], "postprocess": (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})}
]
  , ParserStart: "g7_TEST"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
