export class Structure {
    constructor(level, xref, tag, lineValue) {
        this.level = level;
        this.xref = xref;
        this.tag = tag;
        this.lineValue = lineValue;

        this.substructures = [];
        this.superstructure = null;
        
    }



    print(){
        console.log("Structure Information:" + "\n\tlevel: " + this.level + "\n\txref: " + this.xref + "\n\ttag: " + this.tag + "\n\tlineValue: " + this.lineValue);
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

    get lineValue(){
        return this._lineValue;
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

    set lineValue(lineValue){
        this._lineValue = lineValue;
    }



    
}