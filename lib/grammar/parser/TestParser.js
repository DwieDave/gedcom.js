// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


    const moo = require("moo");
    // moo-lexer to pre-compile input
    const lexer = moo.compile({
        lexer_D          : /[ ]/,
        lexer_digit      : /[0-9]/,
        lexer_underscore : /[_]/,
        lexer_xref     : /\@[A-Z0-9\_]+\@/,
        lexer_EOL: {match: /[\n]/, lineBreaks: true },
        // not Banned, no EOL, no Space, no @, no _
        lexer_notBannedNoEOLNoSpace:  /[^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D\x20\x40\x5F]+/
    });
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "input", "symbols": ["fam"]},
    {"name": "fam", "symbols": ["Level", "D", (lexer.has("lexer_xref") ? {type: "lexer_xref"} : lexer_xref), "D", {"literal":"FAM"}, "EOL"], "postprocess": 
        (data) => {
            console.log("postprocessor called");
            return data;
        }
            },
    {"name": "EOL", "symbols": [{"literal":"\n"}]},
    {"name": "D", "symbols": [{"literal":" "}]},
    {"name": "Level", "symbols": [{"literal":"0"}], "postprocess": id},
    {"name": "Level$ebnf$1", "symbols": []},
    {"name": "Level$ebnf$1", "symbols": ["Level$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Level", "symbols": ["nonzero", "Level$ebnf$1"]},
    {"name": "digit", "symbols": [/[0-9]/], "postprocess": id},
    {"name": "nonzero", "symbols": [/[1-9]/], "postprocess": id},
    {"name": "Xref", "symbols": [(lexer.has("lexer_atsign") ? {type: "lexer_atsign"} : lexer_atsign), "tagChar", (lexer.has("lexer_atsign") ? {type: "lexer_atsign"} : lexer_atsign)]},
    {"name": "atsign", "symbols": [{"literal":"@"}], "postprocess": id},
    {"name": "tagChar", "symbols": ["ucletter"], "postprocess": id},
    {"name": "tagChar", "symbols": ["digit"], "postprocess": id},
    {"name": "tagChar", "symbols": ["underscore"], "postprocess": id},
    {"name": "ucletter", "symbols": [/[A-Z]/], "postprocess": id},
    {"name": "underscore", "symbols": [{"literal":"_"}], "postprocess": id}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
