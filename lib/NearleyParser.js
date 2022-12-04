const nearley = require("nearley");
const gedcomGrammar = require("./grammar/parser/GedcomParser.js");
const {ParsingError, GedcomResultUndefinedError, GedcomCardinalityError} = require("./Errors.js");
const Dataset = require("./structure/Dataset.js");

class NearleyParser{
    constructor(){
        this.NEARLEY_REJECT = [];
    }

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
        for(const [tag, cardinality] of Object.entries(checkCardinalityOf)){
            console.log(`check cardinality ${cardinality} of tag ${tag}`)
            // superstructure must contain minimum of min and maximum of max substructures with TAG tag
            let [min, max] = cardinality.split(":");
            max = (max === 'M') ? Infinity : parseInt(max);
            min = parseInt(min);
            let counter = 0;
            
            // count through all substructs of superstruct
            for(const sub of parsedObject.substructs){
                if(sub.line.tag === tag){
                    counter += 1;
                }
            }
            if(counter < min) throw new GedcomCardinalityError(tag, parsedObject.line, true);
            if(counter > max) throw new GedcomCardinalityError(tag, parsedObject.line, false);

        }
    }

    // check cardinality recursive for alle substructures
    for(const sub of parsedObject.substructs){
        checkCardinality(sub);
    }
    
}

module.exports = {NearleyParser, checkCardinality}