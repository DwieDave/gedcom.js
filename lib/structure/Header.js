const Record = require('./Record.js');
const grammar = require('../grammar/parser/HeaderParser.js');

// The header pseudo-structure provides metadata about the entire dataset
module.exports = class Header extends Record {
  // ES2015 provides a default class constructor if one is not specified
  //  -> As such, it is unnecessary to provide an empty constructor or one that simply delegates into its parent class

  checkSyntax () {
    super.checkSyntax(grammar, 'Header', this.xref);
  }
};
