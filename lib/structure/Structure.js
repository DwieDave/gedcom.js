const {ParsingError, GedcomSyntaxError, GedcomCardinalityError} = require("../Errors.js");
const nearley = require("nearley");

module.exports = class Structure {
    // a structure consists of a level, optional cross-reference identifier, tag and optional line value
    constructor(level, xref, tag, lineVal, substructures) {
        this.level = level;
        this.tag = tag;
        this.xref = xref;
        this.lineVal = lineVal

        // a structure may have multiple substructures
        this.substructures = substructures;

        // every structure has a superstructure, except records with level 0
        this.superstructure = null;
    }

    // print structure information
    print() {
        console.log(`Structure Information:\n\tlevel: ${this.level} \n\txref: ${this.xref} \n\ttag: ${this.tag} \n\tlineValue: ${this.lineVal}`);
    }

    // get all substructures of this structure
    getSubstructures() {
        return this.substructures;
    }

    // adds a substructure to this structure
    addSubstructure(structure) {
        this.substructures.push(structure);
    }

    // get the superstructure of this structure
    getSuperstructure() {
        return this.superstructure;
    }
    // set the superstructure of this structure
    setSuperstructure(structure) {
        this.superstructure = structure;
    }

    // search and return the substructure for a given tag
    getTag(tag) {
        for (let substructure of this.substructures) {
            if (substructure.tag === tag) {
                return substructure;
            }
        }
        return null;
    }

    // search and return multiple substructures for given tags and return them as array
    getTags(tag) {
        let substructures = [];
        for (let sub of this.substructures) {
            if (sub.tag === tag) {
                substructures.push(sub);
            }
        }
        return substructures;
    }

    // searches the substructure for a given tag and returns the value of lineVal 
    getValueOfTag(tag) {
        return this.getTag(tag)?.lineVal;
    }
    
    // return structure information as string
    toString() {
        let str = "";
        if (this.substructures.length !== 0) {
            if (str != "") str += "\n";
            str += this.toLine();
            for (let substructure of this.substructures) {
                str += '\n' + substructure.toString();
            }
        } else {
            if (str != "") str += "\n";
            str += this.toLine();
        }
        return str;
    }

    // return line information of the structure
    toLine() {
        return `${this.level} ${this.xref ? `@${this.xref}@ ` : ''}${this.tag}${this.lineVal ? ' ' + this.lineVal : ''}`;
    }

    // check syntax on basis of given grammar
    checkSyntax(grammar){
        // Create a Parser object from grammar.
        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

        try{
            console.log(`\nCkeck Syntax of:\n${this.toString()}`);
            // feed string representation of structure to parser
            let test = this.toString();
            parser.feed(this.toString());
            console.log(`Syntax correct!\n`);
            parser.finish();
        } catch(e){
            throw new GedcomSyntaxError(e.message);
        }
    }

    // =======================================================================================================================
    // getter & setter 
    get level() {
        return this._level;
    }

    get xref() {
        return this._xref;
    }

    get tag() {
        return this._tag;
    }

    get value() {
        return this._lineVal?.value;
    }

    get lineVal() {
        return this._lineVal;
    }

    set level(level) {
        this._level = level;
    }

    set xref(xref) {
        this._xref = xref;
    }

    set tag(tag) {
        this._tag = tag;
    }

    set lineVal(lineVal) {
        this._lineVal = lineVal;
    }
}