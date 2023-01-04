// The header pseudo-structure provides metadata about the entire dataset
const Structure = require('./Structure.js');
const grammar = require('../grammar/parser/HeaderParser.js');

module.exports = class Header extends Structure {
  constructor (uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
    super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
  }

  checkSyntax () {
    super.checkSyntax(grammar, 'Header', this.xref);
  }
};
