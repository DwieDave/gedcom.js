import { LineVal, GedcomSyntaxError, CONSTANTS } from "../Syntax.mjs";


export class Structure {
    // a structure consists of a level, optional cross-reference identifier, tag and optional line value
    constructor(line) {
        if(!line.level || !line.tag) throw new GedcomSyntaxError(line);
        this.level = line.level;
        this.xref = line.xref;
        this.tag = line.tag;
        
        // line value can either be a pointer or a lineString
        if(line.lineValPointer){
            this.lineVal = new LineVal(CONSTANTS.LINEVAL_POINTER_TYPE, line.lineValPointer);
        }
        else if(line.lineValLineStr){
            this.lineVal = new LineVal(CONSTANTS.LINEVAL_LINESTR_TYPE, line.lineValLineStr);
        }

        // a structure may have multiple subclasses 
        this.substructures = [];
        // every structure has a superstructure, except records with level 0
        this.superstructure = null;
        
    }

    // adds a substructure to this structure
    addSubstructure(structure){
        this.substructures.push(structure);
    }

    // get all substructures of this structure
    getSubstructures(){
        return this.substructures;
    }

    // get the superstructure of this structure
    getSuperstructure(){
        return this.superstructure;
    }
    // set the superstructure of this structure
    setSuperstructure(superstructure){
        this.superstructure = superstructure;
    }

    // print structure information
    print(){
        console.log(`Structure Information:\n\tlevel: ${this.level} \n\txref: ${this.xref} \n\ttag: ${this.tag} \n\tlineValue: ${this.lineVal?.value}`);
    }

    // getter & setter 
    get level(){
        return this._level;
    }

    get xref(){
        return this._xref;
    }

    get tag(){
        return this._tag;
    }

    get lineVal(){
        return this._lineVal;
    }

    set level(level){
        this._level = level;
    }

    set xref(xref){
        this._xref = xref;
    }

    set tag(tag){
        this._tag = tag;
    }

    set lineVal(lineVal){
        this._lineVal = lineVal;
    }



    
}