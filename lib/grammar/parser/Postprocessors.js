const {lineTypes} = require('../../Constants.js');

// depth of the flat-operation of method joinAndUnpackAll
const flatDepth = 10;

// TO-DO: add level check -> "1 HUSB @I1@ 4 PHRASE test" is still possible
function flatArray(data){
    const dataArray = [];
    for(const d of data){
        if(Array.isArray(d)) dataArray.push(...d);
        else dataArray.push(d);
    }
    return dataArray.flat(flatDepth).join('');
}

function checkCardinality(checkCardinalityOf){
    for(const [tag, cardinality] of Object.entries(checkCardinalityOf)){
        // superstructure must contain minimum of min and maximum of max substructures with TAG tag
        let [min, max] = cardinality.split(":");
        max = (max === 'M') ? Infinity : parseInt(max);
        min = parseInt(min);
        let counter = 0;
        
        // count through all substructs of superstruct
        for(const sub of superstruct.getSubstructures()){
            if(sub.tag === tag){
                counter += 1;
            }
        }
        if(counter < min || counter > max) throw new GedcomCardinalityError(tag, superstruct);
    }
}

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
            substruct.superstructFound = true;
            superstruct.substructs.push(substruct);
         }
        
        return superstruct;
    }
}