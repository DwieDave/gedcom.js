import familyGrammar from "./grammar/parser/TestParser.js";
import nearley from "nearley"
import { GedcomSyntaxError } from "./Syntax.mjs";

export class NearleyParser{


    constructor(){
        this.NEARLEY_REJECT = [];
    }

    parseString(gedcomString){
        // Create a Parser object from family grammar.
        const Parser = new nearley.Parser(nearley.Grammar.fromCompiled(familyGrammar));

        console.log(`Try to parse:\n${gedcomString}`);
        try{
            Parser.feed(gedcomString);
            const results = Parser.results[0];
            console.log(results);
            Parser.finish();
        }catch(e){
            throw new GedcomSyntaxError(e.message);
        }

        

    }
}