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
    }
}