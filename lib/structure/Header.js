// The header pseudo-structure provides metadata about the entire dataset

const { GedcomTags } = require("../Constants.js");
const Structure = require("./Structure.js");
const nearley = require("nearley");
const grammar = require("../grammar/parser/HeaderParser.js");
const {ParsingError, GedcomSyntaxError, GedcomCardinalityError} = require("../Errors.js");

module.exports = class Header extends Structure  {
    constructor(level, xref, tag, lineVal, substructures) {
        super(level, xref, tag, lineVal, substructures);
    }

    checkSyntax(){
        super.checkSyntax(grammar);
    }

}