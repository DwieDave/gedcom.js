const {lineTypes, dataTypes} = require("../util/Constants.js");

module.exports = {
    grammarName: "Dataset",
    rules:[
        {
            uri: "DATASET",
            lineType: lineTypes.DATASET,
            info: "Structure Info coming soon!",
            level: [0],
            substructs: {
                "g7:record-FAM":"0:M", 
                "g7:record-INDI":"0:M", 
                "g7:record-OBJE":"0:M", 
                "g7:record-REPO":"0:M", 
                "g7:record-SNOTE":"0:M", 
                "g7:record-SOUR":"0:M", 
                "g7:record-SUBM":"0:M"
            }
        }
    ]
}