const {lineTypes, dataTypes, gedcomEnumTypes} = require('../Constants.js');
const {GedcomLevelError, GedcomSyntaxError} = require('../Errors.js')

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
    unpackList: (data) => {
        // postprocessor is called on every comma and every space-character
        console.log(data)
        return 0;
    },
    // create an Structure-Object 
    createStructure: (options) => {
        // line and type must be present to create a Structure
        if(!options.line && !options.type) throw new Error("data and type required!");
        
        // convert line object
        const line = options.line.map(part => {
            if(part){
                // if lineString is given as payload, it is encoded as array (because empty payload is possible)
                if(Array.isArray(part)){
                    // part[0] is equivalent to D
                    // part[1] is equivalent to lineString
                    part = part[1];
                }
                // line information can be given as lexer-object
                if(typeof part === "object") {
                    part = part.value;
                }
                return part;    
            }
            return null;
        });
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
                if(options.lineValType === dataTypes.ListEnum){
                    const enumValues = gedcomEnumTypes[options.enumType];
                    let offset = 0;
                    for(const val of line[3].split(",")){
                        if(!enumValues.includes(val.trim())){
                            const spaces = Array(offset + 7 + 2).join(" ");
                            throw new GedcomSyntaxError(`LineValue ${val} is not listed in ${options.enumType}!\n${line[0]} ${line[2]} ${line[3]}\n` + spaces + "^")
                        }
                        offset += val.length + 1;
                    }
                }
                lineObject = {"level": line[0], "xref": "", "tag": line[2], "lineVal": line[3]}
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
            "lineValType": options.lineValType ? options.lineValType : null,
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