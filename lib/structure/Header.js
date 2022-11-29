// The FAM record was originally structured to represent families where a male HUSB (husband or father) and female WIFE (wife or mother) 
// produce CHIL (children). The FAM record may also be used for cultural parallels to this, including nuclear families, marriage, 
// cohabitation, fostering, adoption, and so on, regardless of the gender of the partners

const { GedcomTags } = require("../Constants.js");
const Structure = require("./Structure.js");
const nearley = require("nearley");
//const grammar = require("../grammar/parser/HeaderParser.js");
const {ParsingError, GedcomSyntaxError, GedcomCardinalityError} = require("../Errors.js");

module.exports = class Header extends Structure  {
    constructor(level, xref, tag, lineVal, substructures) {
        super(level, xref, tag, lineVal, substructures);
    }

}