const Structure = require('../../structure/Structure.js')
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
    }
}