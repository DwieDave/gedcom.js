// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "structure", "symbols": ["HUSB"]},
    {"name": "structure", "symbols": ["WIFE"]},
    {"name": "structure", "symbols": ["CHIL"]},
    {"name": "Level", "symbols": [{"literal":"0"}]},
    {"name": "Level$ebnf$1", "symbols": []},
    {"name": "Level$ebnf$1", "symbols": ["Level$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Level", "symbols": ["nonzero", "Level$ebnf$1"]},
    {"name": "D", "symbols": [/[ ]/]},
    {"name": "Xref$ebnf$1", "symbols": ["tagChar"]},
    {"name": "Xref$ebnf$1", "symbols": ["Xref$ebnf$1", "tagChar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Xref", "symbols": ["atsign", "Xref$ebnf$1", "atsign"]},
    {"name": "stdTag$ebnf$1", "symbols": []},
    {"name": "stdTag$ebnf$1", "symbols": ["stdTag$ebnf$1", "tagChar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "stdTag", "symbols": ["ucletter", "stdTag$ebnf$1"]},
    {"name": "extTag$ebnf$1", "symbols": ["tagChar"]},
    {"name": "extTag$ebnf$1", "symbols": ["extTag$ebnf$1", "tagChar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "extTag", "symbols": ["underscore", "extTag$ebnf$1"]},
    {"name": "tagChar", "symbols": ["ucletter"]},
    {"name": "tagChar", "symbols": ["digit"]},
    {"name": "tagChar", "symbols": ["underscore"]},
    {"name": "lineStr$ebnf$1", "symbols": []},
    {"name": "lineStr$ebnf$1", "symbols": ["lineStr$ebnf$1", "nonEOL"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "lineStr", "symbols": ["nonAt", "lineStr$ebnf$1"]},
    {"name": "lineStr$ebnf$2", "symbols": []},
    {"name": "lineStr$ebnf$2", "symbols": ["lineStr$ebnf$2", "nonEOL"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "lineStr", "symbols": ["atsign", "atsign", "lineStr$ebnf$2"]},
    {"name": "nonAt", "symbols": [/[^@\n]/]},
    {"name": "nonEOL", "symbols": [/[^\n]/]},
    {"name": "digit", "symbols": [/[0-9]/]},
    {"name": "nonzero", "symbols": [/[1-9]/]},
    {"name": "ucletter", "symbols": [/[A-Z]/]},
    {"name": "underscore", "symbols": [{"literal":"_"}]},
    {"name": "atsign", "symbols": [{"literal":"@"}]},
    {"name": "HUSB$string$1", "symbols": [{"literal":"1"}, {"literal":" "}, {"literal":"H"}, {"literal":"U"}, {"literal":"S"}, {"literal":"B"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HUSB", "symbols": ["HUSB$string$1", "Xref"]},
    {"name": "WIFE$string$1", "symbols": [{"literal":"1"}, {"literal":" "}, {"literal":"W"}, {"literal":"I"}, {"literal":"F"}, {"literal":"E"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WIFE", "symbols": ["WIFE$string$1", "Xref"]},
    {"name": "CHIL$string$1", "symbols": [{"literal":"1"}, {"literal":" "}, {"literal":"C"}, {"literal":"H"}, {"literal":"I"}, {"literal":"L"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHIL", "symbols": ["CHIL$string$1", "Xref"]}
]
  , ParserStart: "structure"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
