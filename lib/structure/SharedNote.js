const Structure = require('./Structure.js');
const grammar = require('../grammar/parser/SharedNoteParser.js');

module.exports = class SharedNote extends Structure {
  constructor (uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
    super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
  }

  checkSyntax () {
    super.checkSyntax(grammar, 'SharedNote', this.xref);
  }
};
