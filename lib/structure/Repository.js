const Record = require("./Record.js");
const grammar = require("../grammar/parser/RepositoryParser.js");

module.exports = class Repository extends Record {
    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
    }

    checkSyntax(){
        super.checkSyntax(grammar, "Repository", this.xref);
    }



}