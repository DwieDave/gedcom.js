const nearley = require("nearley");
const gedcomGrammar = require("./grammar/parser/GedcomParser.js");
const {ParsingError, GedcomResultUndefinedError, GedcomCardinalityError} = require("./Errors.js");
const Dataset = require("./structure/Dataset.js");

class NearleyParser{
    constructor(){
        this.NEARLEY_REJECT = [];
    }

    // TO-DO: implement Line Continuation correctly
    // Line continuation pseudo-structures are not considered to be structures.
    // While they match production Line and their level and position makes them appear to be substructures of the structure, 
    // they are actually a continuation of the encoding of the structure’s payload and are not part of a structure’s collection of substructures. 
    // They must appear immediately following the line whose payload they are encoding and before any other line.

    // TO-DO: implement support for Syntax of Line Continuation 
    // Grammar sees CONT as seperate structure, not as continuation
    // e.g. "2 DATE 17 DEC\n 3 CONT 2022" would be invalid in our grammar
    
    // TO-DO: Check Xref's
    // If a line value matches production Xref, the same value must occur as the cross-reference identifier of a structure within the document
    // Each cross-reference identifier must be unique within a given data document

    // parse the string representation of a gedcom file and return a dataset object
    parseString(gedcomString){
        // Create a Parser object from nearley grammar.
        const Parser = new nearley.Parser(nearley.Grammar.fromCompiled(gedcomGrammar));

        console.log(`Try to parse:\n${gedcomString}`);
        try{
            // feed gedcom string to parser and log results
            Parser.feed(gedcomString);

            // nearley returns parsing result inside an array (because ambigious grammars with multiple results are possible)
            // gedcom grammar is not ambigious, so we are just interested in first result
            const result = Parser.results[0];
            const test = Parser.results;

            // nearley is a streaming parser, so the result will be undefined if syntax is incomplete but not wrong
            if(result === undefined){
                throw new GedcomResultUndefinedError();
            }

            // gedcom parsing tree is split into header, (multiple) records and trailer
            const header = result[0];
            const records = result[1];
            const trailer = result[2];

            // check cardinality of the gedcom structures in the parser result via checkCardinaltyOf property of parsing result
            checkCardinality(header);
            records.forEach(checkCardinality);

            // create Dataset object from parsing result with
            const dataset = new Dataset(header, records, trailer);

            console.log(`Syntax correct!\n`);
            console.log(`Result:\n${dataset.toString()}`);

            return dataset;
            
        }catch(e){
            throw new ParsingError(e.message);
        }finally{
            // close parser stream
            Parser.finish();
        }
    }
}

function checkCardinality(parsedObject){
    const checkCardinalityOf = parsedObject.checkCardinalityOf;
    if(checkCardinalityOf){
        for(const [uri, cardinality] of Object.entries(checkCardinalityOf)){
            console.log(`check cardinality ${cardinality} of ${uri}`)
            // superstructure must contain minimum of min and maximum of max substructures with URI uri
            let [min, max] = cardinality.split(":");
            max = (max === 'M') ? Infinity : parseInt(max);
            min = parseInt(min);
            let counter = 0;
            
            // count through all substructs of superstruct
            for(const sub of parsedObject.substructs){
                if(sub.uri === uri){
                    counter += 1;
                }
            }
            if(counter < min) throw new GedcomCardinalityError(uri, parsedObject.line, true);
            if(counter > max) throw new GedcomCardinalityError(uri, parsedObject.line, false);

        }
    }

    // check cardinality recursive for alle substructures
    for(const sub of parsedObject.substructs){
        checkCardinality(sub);
    }
    
}

module.exports = {NearleyParser, checkCardinality}