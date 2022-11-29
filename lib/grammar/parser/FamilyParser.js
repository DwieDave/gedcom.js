// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "input$ebnf$1", "symbols": ["Family"]},
    {"name": "input$ebnf$1", "symbols": ["input$ebnf$1", "Family"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input", "symbols": ["input$ebnf$1"], "postprocess": id},
    {"name": "Family", "symbols": ["FAM"], "postprocess": id},
    {"name": "Family$ebnf$1", "symbols": ["structure"]},
    {"name": "Family$ebnf$1", "symbols": ["Family$ebnf$1", "structure"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Family", "symbols": ["FAM", "Family$ebnf$1"], "postprocess": (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: {HUSB:"0:1", WIFE:"0:1"}})},
    {"name": "structure", "symbols": ["FAMILY_ATTRIBUTE_STRUCTURE"], "postprocess": id},
    {"name": "structure", "symbols": ["FAM_HUSB"], "postprocess": id},
    {"name": "structure", "symbols": ["FAM_WIFE"], "postprocess": id},
    {"name": "structure", "symbols": ["CHIL"], "postprocess": id},
    {"name": "structure", "symbols": ["TEST"], "postprocess": id},
    {"name": "FAM", "symbols": ["Level", "D", (lexer.has("Xref") ? {type: "Xref"} : Xref), "D", {"literal":"FAM"}, "EOL"], "postprocess": (d) => functions.createStructure({line: d, type: lineTypes.FAM_RECORD})},
    {"name": "TEST", "symbols": ["Level", "D", {"literal":"TEST"}, "D", "Text", "EOL"], "postprocess": (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})},
    {"name": "FAM_HUSB", "symbols": [{"literal":"1"}, "D", {"literal":"HUSB"}, "D", (lexer.has("Xref") ? {type: "Xref"} : Xref), "EOL"], "postprocess": (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})},
    {"name": "FAM_HUSB", "symbols": ["FAM_HUSB", "PHRASE"], "postprocess": (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: {PHRASE:"0:1"}})},
    {"name": "FAM_WIFE", "symbols": [{"literal":"1"}, "D", {"literal":"WIFE"}, "D", (lexer.has("Xref") ? {type: "Xref"} : Xref), "EOL"], "postprocess": (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})},
    {"name": "FAM_WIFE", "symbols": ["FAM_WIFE", "PHRASE"], "postprocess": (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: {PHRASE:"0:1"}})},
    {"name": "CHIL", "symbols": [{"literal":"1"}, "D", {"literal":"CHIL"}, "D", (lexer.has("Xref") ? {type: "Xref"} : Xref), "EOL"], "postprocess": (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})},
    {"name": "CHIL", "symbols": ["CHIL", "PHRASE"], "postprocess": (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]})},
    {"name": "FAMILY_ATTRIBUTE_STRUCTURE", "symbols": ["NCHI"], "postprocess": id},
    {"name": "FAMILY_ATTRIBUTE_STRUCTURE", "symbols": ["RESI"], "postprocess": id},
    {"name": "FAMILY_ATTRIBUTE_STRUCTURE", "symbols": ["FACT"], "postprocess": id},
    {"name": "NCHI", "symbols": ["Level", "D", {"literal":"NCHI"}, "D", "Integer", "EOL"], "postprocess": (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})},
    {"name": "NCHI", "symbols": ["NCHI", "TYPE"], "postprocess": (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]})},
    {"name": "RESI", "symbols": ["Level", "D", {"literal":"RESI"}, "D", "Text", "EOL"], "postprocess": (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})},
    {"name": "RESI", "symbols": ["RESI", "TYPE"], "postprocess": (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]})},
    {"name": "FACT", "symbols": ["Level", "D", {"literal":"FACT"}, "D", "Text", "EOL"], "postprocess": (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})},
    {"name": "FACT", "symbols": ["FACT", "TYPE"], "postprocess": (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]})}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
