import familyGrammar from "./grammar/FamilyGrammar.js";
import nearley from "nearley"
import { GedcomSyntaxError } from "./Syntax.mjs";

export class NearleyParser{


    constructor(){

    }

    parseString(gedcomString){
        // Create a Parser object from family grammar.
        const Parser = new nearley.Parser(nearley.Grammar.fromCompiled(familyGrammar));

        console.log(`Try to parse:\n${gedcomString}`);
        try{
            Parser.feed(gedcomString);
            let record = Parser.results;
            console.log(Parser.results);
            Parser.finish();
        }catch(e){
            throw new GedcomSyntaxError(e.message);
        }

        

    }
}