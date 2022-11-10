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
            if(Parser.results.length === 0) throw new GedcomSyntaxError("Cardinality Error!");
            console.log(Parser.results);
            Parser.finish();
        }catch(e){
            throw new GedcomSyntaxError(e.message);
        }

        

    }
}