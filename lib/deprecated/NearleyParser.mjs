import familyGrammar from "../grammar/parser/FamilyParser.js";
import nearley from "nearley"
import { GedcomSyntaxError } from "./Syntax.mjs";

export class NearleyParser{
    constructor(){
        this.NEARLEY_REJECT = [];
    }

    // ISSUE: Parser is accepting Strings without EOL but returns undefined
    parseString(gedcomString){
        // Create a Parser object from nearley grammar.
        const Parser = new nearley.Parser(nearley.Grammar.fromCompiled(familyGrammar));

        console.log(`Try to parse:\n${gedcomString}\n`);
        try{
            // feed gedcom string to parser and log results
            Parser.feed(gedcomString);
            const r = Parser.results;
            const result = Parser.results[0];
            console.log(`Grammar correct! Result:\n${result}\n`);

            // close parser stream
            Parser.finish();

            // ISSUE: some line values are represented as lexer-objects and therefor don't match our Structure-Syntax
            // FIX: call helper function to resolve objects into strings
            this.resolveObjectValues(result);
            
            return result;
            
        }catch(e){
            throw new GedcomSyntaxError(e.message);
        }
    }

    // convert line information represented as lexer-object in string value recursive for structure and each of its substructures
    resolveObjectValues(structure){
        if(typeof structure.level === 'object') structure.level = structure.level.value;
        if(typeof structure.xref === 'object') structure.xref = structure.xref.value;
        if(typeof structure.tag === 'object') structure.tag = structure.tag.value;
        if(typeof structure.lineVal === 'object') structure.lineVal = structure.lineVal.value;

        // call recursive for every substructure
        for(const sub of structure.substructures){
            this.resolveObjectValues(sub);
        }

    }
}