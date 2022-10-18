import { LineVal } from "./Syntax.mjs";

export class Structure {
    constructor(line) {
        this.level = line.level;
        this.xref = line.xref;
        this.tag = line.tag;
        
        if(line.lineValPointer){
            this.lineVal = new LineVal("pointer", line.lineValPointer);
        }
        else if(line.lineValLineStr){
            this.lineVal = new LineVal("lineStr", line.lineValLineStr);
        }

        this.substructures = [];
        this.superstructure = null;
        
    }

    addSubstructure(structure){
        // throw new Error('You have to implement the method addSubstructure!');
    }



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