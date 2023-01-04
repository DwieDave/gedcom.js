// The header pseudo-structure provides metadata about the entire dataset

const { GedcomTags } = require('../util/Constants.js');
const Structure = require('./Structure.js');
const nearley = require('nearley');
const grammar = require('../grammar/parser/HeaderParser.js');
const StructureInfo = require('../grammar/StructureInfo.js');
const { ParsingError, GedcomSyntaxError, GedcomCardinalityError } = require('../util/Errors.js');

module.exports = class Header extends Structure {
  constructor (uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
    super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
  }

  checkSyntax () {
    super.checkSyntax(grammar, 'Header', this.xref);
  }
};
