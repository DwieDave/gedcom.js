module.exports = class Structure {
    // a structure consists of a level, optional cross-reference identifier, tag and optional line value
    constructor(level, xref, tag, lineVal, substructures) {
        this.level = level;
        this.tag = tag;

        this.xref = xref;
        this.lineVal = lineVal

        // a structure may have multiple subclasses 
        this.substructures = substructures;
        // every structure has a superstructure, except records with level 0
        this.superstructure = null;

    }

    // print structure information
    print() {
        console.log(`Structure Information:\n\tlevel: ${this.level} \n\txref: ${this.xref} \n\ttag: ${this.tag} \n\tlineValue: ${this.lineVal?.value}`);
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


    // searches the substructure for a given tag and returns the lineVals value
    getTag(tag) {
        for (let substructure of this.substructures) {
            if (substructure.tag === tag) {
                return substructure;
            }
        }
        return null;
    }

    getTags(tag) {
        let tags = [];
        for (let substructure of this.substructures) {
            if (substructure.tag === tag) {
                tags.push(substructure);
            }
        }
        return tags;
    }

    getValueOfTag(tag) {
        return this.getTag(tag)?.lineVal?.value;
    }
    
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

    toLine() {
        return `${this.level} ${this.xref ? `@${this.xref}@ ` : ''}${this.tag} ${this.lineVal?.type == CONSTANTS.LINEVAL_POINTER_TYPE ? `@${this.lineVal?.value}@` : this.lineVal?.value || ''}`;
    }

    // abstract method
    checkSyntax(){
        // to be implemented in record-subclasses
    }
}