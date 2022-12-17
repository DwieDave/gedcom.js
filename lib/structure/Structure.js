const {dataTypes} = require('../Constants.js');
const nearley = require("nearley");

const {ParsingError, GedcomResultUndefinedError, GedcomCardinalityError, DatasetError} = require("../Errors.js");

module.exports = class Structure {
    // a structure consists of a level, optional cross-reference identifier, tag and optional line value
    constructor(level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        this.level = level;
        this.tag = tag;
        this.xref = xref;
        this.lineVal = lineVal;
        this.EOL = EOL;

        // datatype of the linevalue 
        this.lineValType = lineValType? lineValType : dataTypes.NoLineVal;

        // a structure may have multiple substructures
        this.substructures = substructures;

        // every structure has a superstructure, except records with level 0
        this.superstructure = null;

        // associated Record -> null if structure itself is a record
        this.associatedRecord = null;

        this.datasetReference = datasetRef;


    }

    // print structure information
    print() {
        console.log(`Structure Information:\n\tlevel: ${this.level} \n\txref: ${this.xref} \n\ttag: ${this.tag} \n\tlineValue: ${this.lineVal}`);
    }

    // get all substructures of this structure
    getSubstructures() {
        return this.substructures;
    }

    // generell substruct find method for getSubstructuresByTag and getSubstructuresByLineVal
    getSubstructuresBy(searchVal, tagSearch, recursive, dataType=false){
        let foundStructs = [];

        // loop over all substructures
        for(const sub of this.substructures){
            // search for tag
            if(tagSearch){
                if(sub.tag === searchVal){
                    foundStructs.push(sub);
                }

            // search for lineVal
            }else{
                // search for lineVals with given dataType
                if(dataType){
                    if(sub.lineValType === dataType && sub.lineVal === searchVal){
                        foundStructs.push(sub);
                    }
                // search for lineVals independent of the dataType
                }else{
                    if(sub.lineVal === searchVal){
                        foundStructs.push(sub);
                    }
                }
            }
            
            // call recursive for substructs if recursiveFlag is set
            if(recursive){
                let foundRecursive = sub.getSubstructuresBy(searchVal, tagSearch, recursive, dataType);
                foundRecursive.forEach(ele => {
                    foundStructs.push(ele);
                });
            }  
        }

        return foundStructs;
    }

    // return all substructures with given tag
    //  -> recursive false: search for given tag in next level only
    //  -> recursive true: search recursive through whole structure tree
    getSubstructuresByTag(tag, recursive){
        return this.getSubstructuresBy(tag, true, recursive);
    }   

    // return all substructures with given lineVal
    //  -> recursive false: search for given lineVal in next level only
    //  -> recursive true: search recursive through whole structure tree
    getSubstructuresByLineVal(lineVal, recursive, dataType = false){
        return this.getSubstructuresBy(lineVal, false, recursive, dataType);
    }


    // adds a substructure to this structure
    addSubstructure(structure) {
        // associatedRecord is null if struct is a record itself
        //  -> if associatedRecord is set, struct is substruct (of a substruct ...) of associatedRecord
        if(this.associatedRecord){
            this.datasetReference.addStructure(structure, this, this.associatedRecord);
        }else{
            this.datasetReference.addStructure(structure, this, this);
        }
        
    }

    // get the superstructure of this structure
    getSuperstructure() {
        return this.superstructure;
    }
    // set the superstructure of this structure
    setSuperstructure(structure) {
        //this.superstructure = structure;
    }
    
    // returns the record thats associated with this structure 
    //  -> null if structure itself is a record
    getAssociatedRecord(){
        return this.associatedRecord;
    }

    // refer to given record as the associated record
    setAssociatedRecord(record){
        //this.associatedRecord = record;
    }
    
    // return structure information as string
    toString() {
        let str = this.toLine();;

        // add substructures to string
        if (this.substructures.length !== 0) {
            for (let sub of this.substructures) {
                str += sub.toString();
            }
        }
        return str;
    }

    // return line information of the structure
    toLine() {
        return `${this.level} ${this.xref ? `@${this.xref}@ ` : ''}${this.tag}${this.lineVal ? ' ' + this.lineVal : ''}${this.EOL}`;
    }

    // check syntax on basis of given grammar
    checkSyntax(grammar, structureName, structureXref){
        // Create a Parser object from grammar.
        //const parser = GedcomParser.createCustomGedcomParser(grammar);
        //parser.parseString(this.toString())
        // GedcomParser.test();
        // this.parseString(grammar, this.toString())

        /*
        try{
            // feed string representation of structure to parser
            parser.feed(this.toString());
            console.log(`Syntax of ${structureName} Record ${structureXref} is correct!\n`);
            parser.finish();
        } catch(e){
            throw new GedcomSyntaxError(e.message);
        }*/
    }

    /*
    //================
    // parse the string representation of a gedcom file and return a dataset object
    parseString(grammar, gedcomString){
        // Create a Parser object from nearley grammar.
        const Parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

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
            this.checkCardinality(header);
            records.forEach(this.checkCardinality);


            console.log(`Parsing Complete. Syntax of Gedcom-File is correct!`);
            //console.log(`Result:\n${dataset.toString()}`);

            //return dataset;
            
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

    checkCardinality(parsedObject){
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
    //================*/
}