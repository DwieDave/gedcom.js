const Record = require("./Record.js");
const grammar = require("../grammar/parser/HeaderParser.js");

// The header pseudo-structure provides metadata about the entire dataset
module.exports = class Header extends Record  {
    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
    }

    checkSyntax(){
        super.checkSyntax(grammar, "Header", this.xref);
    }

}