// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "g7_FAM_HUSB$string$1", "symbols": [{"literal":"H"}, {"literal":"U"}, {"literal":"S"}, {"literal":"B"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "g7_FAM_HUSB", "symbols": ["Level", "D", Xref, "D", "g7_FAM_HUSB$string$1", "EOL"], "postprocess": (d) => postprocessor.createStructure({line: d, type: "NO_LINEVAL", checkCardinalityOf: {PHRASE:"0:1"}})},
    {"name": "g7_FAM_HUSB", "symbols": ["g7_FAM_HUSB", "g7_PHRASE"], "postprocess": (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})},
    {"name": "g7_PHRASE$string$1", "symbols": [{"literal":"P"}, {"literal":"H"}, {"literal":"R"}, {"literal":"A"}, {"literal":"S"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "g7_PHRASE", "symbols": ["Level", "D", "g7_PHRASE$string$1", "D", "Text", "EOL"], "postprocess": (d) => postprocessor.createStructure({line: d, type: "NO_XREF"})}
]
  , ParserStart: "g7_FAM_HUSB"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
