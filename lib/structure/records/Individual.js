const Record = require('../Record.js');
const grammar = require('../../grammar/parser/IndividualParser.js');

// The individual record is a compilation of facts or hypothesized facts about an individual.
// These facts may come from multiple sources.
module.exports = class Individual extends Record {
  // ES2015 provides a default class constructor if one is not specified
  //  -> As such, it is unnecessary to provide an empty constructor or one that simply delegates into its parent class

  checkSyntax () {
    super.checkSyntax(grammar, 'Individual', this.xref);
  }
};
