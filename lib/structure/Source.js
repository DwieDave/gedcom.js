const { GedcomTags } = require("../util/Constants.js");
const Structure = require("./Structure.js");
const grammar = require("../grammar/parser/SourceParser.js");
const {ParsingError, GedcomSyntaxError, GedcomCardinalityError} = require("../util/Errors.js");

module.exports = class Source extends Structure  {
    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
    }

    checkSyntax(){
        super.checkSyntax(grammar, "Source", this.xref);
    }



}