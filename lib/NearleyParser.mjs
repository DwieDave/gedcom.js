import familyGrammar from "./grammar/parser/FamilyParser.js";
import nearley from "nearley"
import { GedcomSyntaxError } from "./Syntax.mjs";

export class NearleyParser{


    constructor(){
        this.NEARLEY_REJECT = [];
    }

    parseString(gedcomString){
        // Create a Parser object from family grammar.
        const Parser = new nearley.Parser(nearley.Grammar.fromCompiled(familyGrammar));

        console.log(`Try to parse:\n${gedcomString}\n`);
        try{
            Parser.feed(gedcomString);
            const results = Parser.results[0];
            console.log(`Grammar correct! Result:\n${results}\n`);
            Parser.finish();
        }catch(e){
            throw new GedcomSyntaxError(e.message);
        }

        

    }
}