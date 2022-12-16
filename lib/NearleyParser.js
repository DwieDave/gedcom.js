const nearley = require("nearley");
const {ParsingError, GedcomResultUndefinedError, GedcomCardinalityError, DatasetError} = require("./Errors.js");
const Dataset = require("./Dataset.js");

class NearleyParser{
    constructor(){
        this.grammar = require("./grammar/parser/GedcomParser.js");
    }

    setGrammar(grammar){
        this.grammar = grammar;
    }

    // TO-DO: Implement support for RESN tag
    // The RESN structure is provided to assist software in filtering data that should not be exported or otherwise used in a particular context. 
    // It is recommended that tools provide an interface to allow users to filter data on export such that certain RESN structure payload entries 
    // result in the RESN structure and its superstructure being removed from the export. 
    // Such removal must abide by some constraints: see Removing data for more

    // TO-DO: implement Line Continuation correctly
    // Line continuation pseudo-structures are not considered to be structures.
    // While they match production Line and their level and position makes them appear to be substructures of the structure, 
    // they are actually a continuation of the encoding of the structure’s payload and are not part of a structure’s collection of substructures. 
    // They must appear immediately following the line whose payload they are encoding and before any other line.

    // TO-DO: implement support for Syntax of Line Continuation 
    // Grammar sees CONT as seperate structure, not as continuation
    // e.g. "2 DATE 17 DEC\n 3 CONT 2022" would be invalid in our grammar

    // TO-DO: implement support for VOID-pointers
    // they can also be used to remove data
    
    // TO-DO: Check Xref's
    // If a line value matches production Xref, the same value must occur as the cross-reference identifier of a structure within the document
    // Each cross-reference identifier must be unique within a given data document

    // TO-DO: remove unneccessary console.log messages from code

    // TO-DO: check "DIV D EOL" in remarriage1.ged & remarriage2.ged 
    // Note that production LineVal does not match the empty string. 
    // Because empty payloads and missing payloads are considered equivalent, both a structure with no payload and a structure 
    // with the empty string as its payload are encoded with no LineVal and no space after the Tag.


    // parse the string representation of a gedcom file and return a dataset object
    parseString(gedcomString){
        // Create a Parser object from nearley grammar.
        const Parser = new nearley.Parser(nearley.Grammar.fromCompiled(this.grammar));

        //console.log(`Try to parse:\n${gedcomString}`);
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
            const bom = result[0];
            const header = result[1];
            const records = result[2];
            const trailer = result[3];

            // check cardinality of the gedcom structures in the parser result via checkCardinaltyOf property of parsing result
            checkCardinality(header);
            records.forEach(checkCardinality);

            // create Dataset object from parsing result with
            const dataset = new Dataset(header, records, trailer, bom);

            // check for warnings in Dataset
            if(!dataset.BOMset){
                console.warn("WARNING: The first character in each Dataset should be U+FEFF, the byte-order mark!")
            }
            if(dataset.multipleEOLCharacters){
                console.warn("WARNING: There are different EOL characters in this Dataset. Make sure to just use one of [\\n, \\r, \\r\\n]!")
            }


            console.log(`Parsing Complete. Syntax of Gedcom-File is correct!`);
            //console.log(`Result:\n${dataset.toString()}`);

            return dataset;
            
        }catch(e){
            if(e instanceof DatasetError){
                throw new DatasetError(e.message);
            }
            throw new ParsingError(e.message);
 
            
        }finally{
            // close parser stream
            Parser.finish();
        }
    }

    // create NearleyParser on basis given grammar
    static createCustomNearleyParser(grammar){
        const Parser = new NearleyParser();
        Parser.setGrammar(grammar);

        return Parser;
    }
}

function checkCardinality(parsedObject){
    const checkCardinalityOf = parsedObject.checkCardinalityOf;
    if(checkCardinalityOf){
        for(const [uri, cardinality] of Object.entries(checkCardinalityOf)){
            //console.log(`check cardinality ${cardinality} of ${uri}`)
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