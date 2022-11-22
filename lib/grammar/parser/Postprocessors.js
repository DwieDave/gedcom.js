const Structure = require('../../structure/Structure.js')
const TYPE = require('../../Types.js')
const flatDepth = 20;

module.exports = {
    joinAndUnpack: (data, indices) => {
        const dataArray = [];
        for(const i of indices){
            const item = data[i];
            if(Array.isArray(item)) dataArray.push(...item);
            else dataArray.push(item);
        }
        return dataArray.flat(flatDepth).join('');
    },
    joinAndUnpackAll: (data) => {
        const dataArray = [];
        for(const d of data){
            if(Array.isArray(d)) dataArray.push(...d);
            else dataArray.push(d);
        }
        return dataArray.flat(flatDepth).join('');
    },
    parseLineNoXref: (data, lineValType) => {
        return new Structure(data[0], "", data[2], { type: lineValType, value: data[4]}, []);

    },
    parseLineNoLineVal: (data) => {
        return new Structure(data[0], data[2], data[4], "", []);
    },
    createRecord: (data) => {
        const FAM = data[0];
        const substructures = [];
        for(const sub of data[2]){
            substructures.push(sub[1][0]);
        }
        return new Structure(FAM.level, FAM.xref, FAM.tag, "", substructures);
    },
    createStructureNoXref: (data) => {
        return new Structure(data[0], "", data[2], data[4], []);
    },
    createStructureWithSubstructures: (structure, substructures) => {
        structure.addSubstructure(substructures);
        return structure;
    },
    createStructure: (options) => {
        console.log("createStructure called");
        // line and type must be present to create a Structure
        if(!options.line && !options.type) throw new Error("data and type required!");

        const line = options.line;
        const type = options.type;
        let struct = undefined;

        // create structure depending on type of line
        switch(type){
            // Structure of the form: LEVEL D TAG D LINEVAL EOL
            case TYPE.NO_XREF:
                struct = new Structure(line[0], "", line[2], line[4], []);
                break;
            
            // Structure of the form: LEVEL D XREF D TAG EOL
            case TYPE.NO_LINEVAL:
                // Remove @-sign from beginning and end of XREF
                struct = new Structure(line[0], line[2].slice(1,line[2].length-1), line[4], "", []);
                break;
            
            // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
            default:
                // Remove @-sign from beginning and end of XREF
                struct = new Structure(line[0], line[2].slice(1,line[2].length-1), line[4], line[6], []);

        }

        if(options.substructures){
            for(const sub of options.substructures){
                struct.addSubstructure(sub);
            }
        }

        return struct;
    },
    addSubstructure: (options) => {
        console.log("addSubstructure called");

        // make substructs iterable if it's just a single Structure
        const substructs = Array.isArray(options.substructs) ? options.substructs : [options.substructs];
        const superstruct = options.superstruct;
        const checkCardinalityOf = options.checkCardinalityOf;
        

        // add substructures to superstructure
        for(const sub of substructs){
            // ISSUE: nearley is a streaming parser it never knows when you're done feeding input, so it will (most certainly) call the postprocessor multiple times 
            // FIX: check if substructure was already added to superstructure
            if(!superstruct.getSubstructures().map(s => s.toString()).includes(sub.toString())){
                superstruct.addSubstructure(sub);
                sub.setSuperstructure(superstruct);
            }
        }

        // check cardinality of given TAGs inside of superstructure 
        if(checkCardinalityOf){
            for(const tag of checkCardinalityOf){
                let counter = 0;
                for(const sub of superstruct.getSubstructures()){
                    if(sub.tag == tag) counter += 1;
                }
                if(counter > 1) throw new Error(`Cardinality Error: Too many "${tag}" tags in Structure "${superstruct.level} ${superstruct.xref ? "@" + superstruct.xref + "@ " : ""}${superstruct.tag} ${superstruct.lineVal ? superstruct.lineVal : ""}"`);
            }
        }
        return superstruct;
    }
}