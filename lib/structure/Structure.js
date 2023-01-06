const {dataTypes} = require('../util/Constants.js');
const Parser = require("../Parser.js");
const StructureInfo = require("../grammar/StructureInfo.js");
const SubStructureInfo = require("../grammar/SubStructureInfo.js");
const {GedcomSyntaxError, DatasetError} = require("../util/Errors.js");

module.exports = class Structure {
    // a structure consists of a level, optional cross-reference identifier, tag and optional line value
    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        this.uri = uri;
        this.level = level;
        this.tag = tag;
        this.xref = xref? xref : "";
        this.lineVal = lineVal ? lineVal : "";
        this.EOL = EOL;

        // datatype of the linevalue 
        this.lineValType = lineValType? lineValType : dataTypes.NoLineVal;

        // a structure may have multiple substructures
        this.substructures = substructures;

        // every structure has a superstructure, except records with level 0
        this.superstructure = null;

        // associated Record -> null if structure itself is a record
        this.associatedRecord = null;

        // the Dataset-object this structure belongs to
        this.datasetReference = datasetRef;
    }

    // compare method for two structures
    equals(struct){
        if(
            this.uri === struct.uri &&
            this.level === struct.level &&
            this.tag === struct.tag &&
            this.xref === struct.xref &&
            this.lineVal === struct.lineVal &&
            this.EOL === struct.EOL &&
            this.lineValType === struct.lineValType &&
            this.substructures === struct.substructures &&
            this.superstructure === struct.superstructure &&
            this.associatedRecord === struct.associatedRecord &&
            this.datasetReference === struct.datasetReference
        ) return true

        return false;
    }



    // get all substructures of this structure
    getSubstructures() {
        return this.substructures;
    }

    // returns the Gedcom-URIs of the structures that can be set as substructures for this structure
    //  -> if checkCardinalityFlag is set return just the structures, that don't lead to CardinalityError 
    getPossibleSubstructs(checkCardinalityFlag=false){
        let possibleSubstructs = {};
        const entries = StructureInfo[this.uri].substructs;

        // iterate over all possible substructs of this structure via StructureInfo.js
        for(const [uri, cardinality] of Object.entries(entries)){
            // substruct is of Type StructureType, if uri starts with "g7:"
            if(uri.startsWith("g7:")){
                possibleSubstructs[uri] = cardinality;
            // substruct is of type Substructure, if uri doesn't start with "g7:"
            }else{
                // resolve all subs from type Substructure
                let substructures = [{uri: uri, cardinality: cardinality}];
                while(substructures.length !== 0){
                    const subsOfSubstructure = SubStructureInfo[substructures[0].uri].substructs;
                    for(const [subUri, subCardinality] of Object.entries(subsOfSubstructure)){
                        if(subUri.startsWith("g7:")){
                            possibleSubstructs[subUri] = substructures[0].cardinality;
                        }else{
                            substructures.push({uri: subUri, cardinality: subCardinality});
                        }
                    }
                    substructures.shift();
                }
            }
        }

        // if checkCardinalityFlag is set
        //  -> check if addition of substruct would result in an cardinality error
        if(checkCardinalityFlag){
            for(const [uri, cardinality] of Object.entries(possibleSubstructs)){
                if(cardinality.split(":")[1] === "1"){
                    if(this.getSubstructuresByUri(uri, false).length >= 1){
                        delete possibleSubstructs[uri]
                    }
                }
            }
        }
        
        return possibleSubstructs;

    }

    // generell substruct find method for getSubstructuresByTag and getSubstructuresByLineVal
    getSubstructuresBy(searchVal, searchType, recursive, dataType=false){
        let foundStructs = [];

        // loop over all substructures
        for(const sub of this.substructures){
            // search for tag
            if(searchType === "tagSearch"){
                if(sub.tag === searchVal){
                    foundStructs.push(sub);
                }

            // search for uri
            }else if(searchType === "uriSearch"){
                if(sub.uri === searchVal){
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
                let foundRecursive = sub.getSubstructuresBy(searchVal, searchType, recursive, dataType);
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
    getSubstructuresByUri(uri, recursive){
        return this.getSubstructuresBy(uri, "uriSearch", recursive);
    }   

    // return all substructures with given tag
    //  -> recursive false: search for given tag in next level only
    //  -> recursive true: search recursive through whole structure tree
    getSubstructuresByTag(tag, recursive){
        return this.getSubstructuresBy(tag, "tagSearch", recursive);
    }   

    // return all substructures with given lineVal
    //  -> recursive false: search for given lineVal in next level only
    //  -> recursive true: search recursive through whole structure tree
    getSubstructuresByLineVal(lineVal, recursive, dataType = false){
        return this.getSubstructuresBy(lineVal, "lineValSearch", recursive, dataType);
    }


    // adds a substructure to this structure
    addSubstructure(structureParameters) {
        const structure = this.datasetReference.createStructureFromStructureParameters(structureParameters, (parseInt(this.level) + 1).toString());

        // created Structure-Object
        let createdStruct = null;

        try{
            // associatedRecord is null if struct is a record itself
            if(this.associatedRecord){
                createdStruct = this.datasetReference.addStructure(structure, this, this.associatedRecord);

            // associatedRecord is set, struct is substruct (of a substruct ...) of associatedRecord
            }else{
                createdStruct = this.datasetReference.addStructure(structure, this, this);
            }

            // if new substructs results in GedcomSyntaxError, restore old value and rethrow error
            this.checkSyntax();

            // check if xref (if given) is defined in this dataset
            this.datasetReference.checkForNotDefinedXrefs();

        }catch(e){
            
            // TO-DO: remove structure from dataset
            this.datasetReference.removeStructure(createdStruct)
            throw e;
        }
    }

    removeSubstructure(struct){
        this.datasetReference.removeStructure(struct);
    }

    // get the superstructure of this structure
    getSuperstructure() {
        return this.superstructure;
    }

    
    // returns the record thats associated with this structure 
    //  -> null if structure itself is a record
    getAssociatedRecord(){
        return this.associatedRecord;
    }


    // try to set xref of structure 
    //  -> if new value results in GedcomSyntaxError, restore old value and rethrow error 
    setXref(xref){
        // only a record can have a xref
        if(this.associatedRecord === null){
            const oldXref = this.xref;
            this.xref = xref;

            try{
                // change the value of dataset xrefMap to given xref
                delete this.datasetReference.xrefMap[`@${oldXref}@`];
                this.datasetReference.addXrefToXrefMap(this);

                // check if thereby are references to undefined xrefs in the dataset 
                this.datasetReference.checkForNotDefinedXrefs();

                // call checkSyntax-method of the associatedRecord
                if(this.associatedRecord){
                    this.associatedRecord.checkSyntax();
                }else{
                    this.checkSyntax();
                }

            }catch(e){
                // erorr occured -> restore old values
                this.xref = oldXref;
                delete this.datasetReference.xrefMap[`@${xref}@`];
                this.datasetReference.addXrefToXrefMap(this);
                throw e;
            }
        }else{
            throw new GedcomSyntaxError("Only Records can have Cross-Reference-Identifier!")
        }
        
    }

    // try to set lineVal of structure 
    //  -> if new value results in GedcomSyntaxError, restore old value and rethrow error 
    setLineVal(lineVal){
        const oldLineVal = this.lineVal;
        // if lineValue is from datatype Xref (e.g. 1 HUSB @I1@)
        //  -> remove old lineValue from map substructsWithXrefDatatype of dataset
        if(this.lineValType === dataTypes.Xref){
            this.datasetReference.removeSubstructWithXrefDatatype(this)
        }

        this.lineVal = lineVal;
        // if lineValue is from datatype Xref (e.g. 1 HUSB @I1@)
        //  -> add the new lineValue to map substructsWithXrefDatatype of dataset
        if(this.lineValType === dataTypes.Xref){
            this.datasetReference.addSubstructWithXrefDatatype(this)
        }

        try{
            // call checkSyntax-method of the associatedRecord to check if there are any SyntaxErrors because of lineVal-change
            if(this.associatedRecord){
                this.associatedRecord.checkSyntax();
            }else{
                this.checkSyntax();
            }

            // check if thereby are references to undefined xrefs in the dataset 
            this.datasetReference.checkForNotDefinedXrefs();

            // If removing a structure leaves its superstructure with no payload and no substructures, the superstructure should also be removed
            this.datasetReference.searchAndRemoveEmptyStructures(this);

        }catch(e){
            // erorr occured -> restore old values
            if(this.lineValType === dataTypes.Xref){
                this.datasetReference.removeSubstructWithXrefDatatype(this)
            }
            this.lineVal = oldLineVal;
            if(this.lineValType === dataTypes.Xref){
                this.datasetReference.addSubstructWithXrefDatatype(this)
            }
            throw e;
        }
    }

    // print structure information
    print() {
        console.log(`Structure Information:\n\tlevel: ${this.level} \n\txref: ${this.xref} \n\ttag: ${this.tag} \n\tlineValue: ${this.lineVal}`);
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
    toLine(withEOL=true) {
        if(withEOL){
            return `${this.level} ${this.xref ? `@${this.xref}@ ` : ''}${this.tag}${this.lineVal ? ' ' + this.lineVal : ''}${this.EOL}`;
        }
        return `${this.level} ${this.xref ? `@${this.xref}@ ` : ''}${this.tag}${this.lineVal ? ' ' + this.lineVal : ''}`;
    }



    // check syntax on basis of given grammar
    checkSyntax(grammar, structureName, structureXref){
        const parser = new Parser(grammar);

        try{
            console.log(`check syntax of ${structureName} ${structureXref}`)
            // parse string-representation of structure and check cardinality of first result (record)
            parser.parseString(this.toString(),[0])
            console.log(`syntax correct!`)
        }catch(e){
            throw new GedcomSyntaxError(e.message)
        }

    }
}