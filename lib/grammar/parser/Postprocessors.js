const Structure = require('../../structure/Structure.js');
const Family = require('../../structure/Family.js');
const Header = require('../../structure/Header.js');
const Individual = require('../../structure/Individual.js');
const {lineTypes} = require('../../Constants.js');
const {GedcomCardinalityError} = require('../../Errors.js');

// depth of the flat-operation of method joinAndUnpackAll
const flatDepth = 20;

// TO-DO: add level check -> "1 HUSB @I1@ 4 PHRASE test" is still possible

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
        console.log("createStructure called");
        // line and type must be present to create a Structure
        if(!options.line && !options.type) throw new Error("data and type required!");

        const type = options.type;
        const line = options.line;
        let struct = undefined;

        // convert line information represented as lexer-object in string values
        for(let i=0; i<line.length; i++){
            if(typeof line[i] === 'object'){
                line[i] = line[i].value;
            }
        }

        // create structure depending on type of line
        switch(type){
            // Header
            case lineTypes.HEADER:
                struct = new Header(line[0], "", line[2], "", []);
                break;

            // Family Record
            case lineTypes.FAM_RECORD:
                // Remove @-sign from beginning and end of XREF
                struct = new Family(line[0], line[2].replaceAll("@", ""), line[4], "", []);
                break;

            // Individual Record
            case lineTypes.INDI_RECORD:
                // Remove @-sign from beginning and end of XREF
                struct = new Individual(line[0], line[2].replaceAll("@", ""), line[4], "", []);
                break;

            // Structure of the form: LEVEL D TAG D LINEVAL EOL
            case lineTypes.NO_XREF:
                struct = new Structure(line[0], "", line[2], line[4], []);
                break;
            
            // Structure of the form: LEVEL D XREF D TAG EOL
            case lineTypes.NO_LINEVAL:
                // Remove @-sign from beginning and end of XREF
                struct = new Structure(line[0], line[2].replaceAll("@", ""), line[4], "", []);
                break;
            
            // Structure of the form: LEVEL D TAG EOL
            case lineTypes.NO_XREF_NO_LINEVAL:
                struct = new Structure(line[0], "", line[2], "", []);
                break;
            
            // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
            default:
                // Remove @-sign from beginning and end of XREF
                struct = new Structure(line[0], line[2].replaceAll("@", ""), line[4], line[6], []);

        }

        return struct;
    },
    // add substructures to given superstructure and check cardinality (optional)
    addSubstructure: (options) => {
        const superstruct = options.superstruct;
        const checkCardinalityOf = options.checkCardinalityOf;

        // make substructs iterable if it's just a single Structure
        const substructs = Array.isArray(options.substructs) ? options.substructs : [options.substructs];
        
        // add substructures to superstructure
        for(const sub of substructs){
            // if the superstructure is not set, the structure has not yet been hung into the parsing-tree
            if(!sub.getSuperstructure()){
                console.log("Substructure added");
                superstruct.addSubstructure(sub);
                sub.setSuperstructure(superstruct);

                // check cardinality of given TAGs inside of superstructure 
                if(checkCardinalityOf){
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
            }
        }

        return superstruct;
    }
}