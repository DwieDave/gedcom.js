const {lineTypes, dataTypes} = require("../../lib/Constants.js");

module.exports = {
    grammarName: "Repository",
    rules:[
        {
            uri: "g7:record-REPO",
            lineType: lineTypes.REPO_RECORD,
            level: [0],
            tag: "REPO",
            substructs: {}
        }
    ]
}