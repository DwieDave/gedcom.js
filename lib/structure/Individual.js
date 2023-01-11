const Record = require("./Record.js");
const grammar = require("../grammar/parser/IndividualParser.js");

// The individual record is a compilation of facts or hypothesized facts about an individual.
// These facts may come from multiple sources.
module.exports =  class Individual extends Record {
    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
    }

    checkSyntax(){
        super.checkSyntax(grammar, "Individual", this.xref);
    }

}