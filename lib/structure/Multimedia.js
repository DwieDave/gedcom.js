const { GedcomTags } = require("../Constants.js");
const Structure = require("./Structure.js");
const grammar = require("../grammar/parser/MultimediaParser.js");
const {ParsingError, GedcomSyntaxError, GedcomCardinalityError} = require("../Errors.js");

module.exports = class Multimedia extends Structure  {
    constructor(level, xref, tag, lineVal, substructures) {
        super(level, xref, tag, lineVal, substructures);
    }

    checkSyntax(){
        super.checkSyntax(grammar, "Multimedia", this.xref);
    }



}