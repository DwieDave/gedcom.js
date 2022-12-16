const {ParsingError, GedcomSyntaxError, GedcomCardinalityError} = require("../Errors.js");
const {dataTypes} = require('../Constants.js');
const nearley = require("nearley");

module.exports = class Structure {
    // a structure consists of a level, optional cross-reference identifier, tag and optional line value
    constructor(level, xref, tag, lineVal, lineValType, EOL, substructures) {
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
        //this.substructures.push(structure);
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
        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

        try{
            // feed string representation of structure to parser
            parser.feed(this.toString());
            console.log(`Syntax of ${structureName} Record ${structureXref} is correct!\n`);
            parser.finish();
        } catch(e){
            throw new GedcomSyntaxError(e.message);
        }
    }
}