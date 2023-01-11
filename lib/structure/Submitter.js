const Record = require("./Record.js");
const grammar = require("../grammar/parser/SubmitterParser.js");

module.exports = class Submitter extends Record {
    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
    }
    
    checkSyntax(){
        super.checkSyntax(grammar, "Submitter", this.xref);
    }



}