const Record = require('./Record.js');
const grammar = require('../grammar/parser/SharedNoteParser.js');

module.exports = class SharedNote extends Record {
  // ES2015 provides a default class constructor if one is not specified
  //  -> As such, it is unnecessary to provide an empty constructor or one that simply delegates into its parent class

  checkSyntax () {
    super.checkSyntax(grammar, 'SharedNote', this.xref);
  }
};
