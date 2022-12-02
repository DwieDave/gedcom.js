// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "g7_FAM_HUSB$string$1", "symbols": [{"literal":"F"}, {"literal":"A"}, {"literal":"M"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "g7_FAM_HUSB", "symbols": ["Level", "D", Xref, "D", "g7_FAM_HUSB$string$1", "EOL"], "postprocess": (d) => postprocessor.createStructure({line: d, type: "FAM_RECORD", checkCardinalityOf: {HUSB:"0:1"}})},
    {"name": "g7_FAM_HUSB", "symbols": ["g7_FAM_HUSB", "g7_FAM_HUSB"], "postprocess": (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]})}
]
  , ParserStart: "g7_FAM_HUSB"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
