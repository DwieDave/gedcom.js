const nearley = require("nearley");
const grammar = require("./json.js");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
try{
    parser.feed('[12, 1.5, true, false, null, "hello", "world"]');
    //parser.feed('[13, 1.5, true, false, null, "hello", "world"]');
    console.log("Parse successfull ", parser.results);
}catch(e){
    console.log("Parse failed ", e.message);
}
