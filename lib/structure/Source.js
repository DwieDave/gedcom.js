const Record = require("./Record.js");
const grammar = require("../grammar/parser/SourceParser.js");

module.exports = class Source extends Record {
    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
    }

    checkSyntax(){
        super.checkSyntax(grammar, "Source", this.xref);
    }



}