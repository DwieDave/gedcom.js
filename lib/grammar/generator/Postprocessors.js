const {lineTypes} = require('../../Constants.js');
const {GedcomLevelError} = require('../../Errors.js')

// depth of the flat-operation of method joinAndUnpackAll
const flatDepth = 10;

module.exports = {
    // resolve nearley array structure into one string
    joinAndUnpackAll: (data) => {
        const dataArray = [];
        for(const d of data){
            if(Array.isArray(d)) dataArray.push(...d);
            else dataArray.push(d);
        }
        return dataArray.flat(flatDepth).join('');
    },

    // create an Structure-Object 
    createStructure: (options) => {
        // line and type must be present to create a Structure
        if(!options.line && !options.type) throw new Error("data and type required!");
        
        // line information can be given as lexer-object
        const line = options.line.map(part => (typeof part === "object") ? part.value : part);
        const type = options.type;
        
        // create line-object depending on type of line
        switch(type){
            // Structure of the form: LEVEL D TAG EOL
            case lineTypes.NO_XREF_NO_LINEVAL:
            // Header
            case lineTypes.HEADER:
                lineObject = {"level": line[0], "xref": "", "tag": line[2], "lineVal": ""}
                break;

            // Structure of the form: LEVEL D XREF D TAG EOL
            case lineTypes.NO_LINEVAL:
            // Family Record
            case lineTypes.FAM_RECORD:
            // Individual Record
            case lineTypes.INDI_RECORD:
                // Remove @-sign from beginning and end of XREF
                lineObject = {"level": line[0], "xref": line[2].replaceAll("@", ""), "tag": line[4], "lineVal": ""}
                break;

            // Structure of the form: LEVEL D TAG D LINEVAL EOL
            case lineTypes.NO_XREF:
                lineObject = {"level": line[0], "xref": "", "tag": line[2], "lineVal": line[4]}
                break;
            
            // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
            default:
                // Remove @-sign from beginning and end of XREF
                lineObject = {"level": line[0], "xref": line[2].replaceAll("@", ""), "tag": line[4], "lineVal": line[6]}
        }

        // create data object with meta-information of line structure
        return {
            "uri": options.uri,
            "line": lineObject,
            "type": type,
            "superstructFound": false,
            "substructs": [],
            "checkCardinalityOf": options.checkCardinalityOf
        };

    },
    // add substructures to given superstructure and check cardinality (optional)
    addSubstructure: (options) => {
        let superstruct = options.superstruct;
        let substruct = options.substructs;

        // unpack parsed line from array
        while(substruct.length){
            // just add the most recent line to gedcom tree, when there are multiple lines in sub-array
            substruct = substruct[substruct.length-1];
        }
        while(superstruct.length){
            superstruct = superstruct[superstruct.length-1];
        }

        // superstructFound is set, when substruct is already present in parsing tree
        if(!substruct.superstructFound){
            // level of substructure must be the increment of level of superstructure
            if(parseInt(substruct.line.level) != parseInt(superstruct.line.level) + 1) throw new GedcomLevelError(superstruct, substruct);
            // put substruct in gedcom parsing tree
            substruct.superstructFound = true;
            superstruct.substructs.push(substruct);
         }
        
        return superstruct;
    }
}