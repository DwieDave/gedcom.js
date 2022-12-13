const { GedcomTags } = require("../Constants.js");
const Structure = require("./Structure.js");
const grammar = require("../grammar/parser/SharedNoteParser.js");
const {ParsingError, GedcomSyntaxError, GedcomCardinalityError} = require("../Errors.js");

module.exports = class SharedNote extends Structure  {
    constructor(level, xref, tag, lineVal, substructures) {
        super(level, xref, tag, lineVal, substructures);
    }

    checkSyntax(){
        super.checkSyntax(grammar, "SharedNote", this.xref);
    }



}