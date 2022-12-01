const nearley = require("nearley");
const gedcomGrammar = require("./grammar/parser/GedcomParser.js");
const {ParsingError, GedcomResultUndefinedError} = require("./Errors.js");
const Dataset = require("./Dataset.js");

module.exports = class NearleyParser{
    constructor(){
        this.NEARLEY_REJECT = [];
    }

    // ISSUE: Parser is accepting Strings without EOL but returns undefined
    parseString(gedcomString){
        // Create a Parser object from nearley grammar.
        const Parser = new nearley.Parser(nearley.Grammar.fromCompiled(gedcomGrammar));

        console.log(`Try to parse:\n${gedcomString}\n`);
        try{
            // feed gedcom string to parser and log results
            Parser.feed(gedcomString);
            const result = Parser.results[0];
            if(result === undefined){
                throw new GedcomResultUndefinedError();
            }
            console.log(`\nGrammar correct!`);

            const dataset = new Dataset(result[0], result[1], result[2]);
            //console.log(`Result:\n${dataset.toString()}`);

            //return dataset;
            //return result;
            
        }catch(e){
            throw new ParsingError(e.message);
        }finally{
            // close parser stream
            Parser.finish();
        }
    }
}