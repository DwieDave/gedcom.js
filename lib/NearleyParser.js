const nearley = require('nearley');
const { NearleyResultUndefinedError, GedcomCardinalityError, GedcomSyntaxError } = require('./util/Errors.js');

module.exports = class NearleyParser {
  constructor (grammar) {
    this.grammar = grammar;
    this.Parser = new nearley.Parser(nearley.Grammar.fromCompiled(this.grammar));
  }

  parseString (string, checkCardinality = []) {
    try {
      // feed string to parser
      this.Parser.feed(string);

      // nearley returns parsing result inside an array (because ambigious grammars with multiple results are possible)
      // gedcom grammar is not ambigious, so we are just interested in first result
      const results = this.Parser.results;
      const result = results[0];

      // check if there are multiple results and warn user
      if (results.length > 1) {
        console.warn('WARNING: Grammar is ambigious! There are multiple parsing results.');
      }

      // nearley is a streaming parser, so the result will be undefined if syntax is incomplete but not wrong
      if (result === undefined) {
        throw new NearleyResultUndefinedError();
      }

      // check cardinality for all given resultIndices
      checkCardinality.forEach(resultIndex => {
        // result[index] is an Array
        //  -> multiple result with multiple records
        if (Array.isArray(result[resultIndex])) {
          result[resultIndex].forEach(records => {
            this.checkCardinality(records);
          });

          // result is an Array
          //  -> multiple result with single record
        } else if (Array.isArray(result)) {
          this.checkCardinality(result[resultIndex]);
          // single result with single record
        } else {
          this.checkCardinality(result);
        }
      });

      return result;
    } catch (e) {
      throw new GedcomSyntaxError(e.message);
    } finally {
      // close parser stream
      this.Parser.finish();
    }
  }

  // check cardinality of given uris
  checkCardinality (parsedObject) {
    const checkCardinalityOf = parsedObject.checkCardinalityOf;
    if (checkCardinalityOf) {
      for (const [uri, cardinality] of Object.entries(checkCardinalityOf)) {
        // console.log(`check cardinality ${cardinality} of ${uri}`)
        // superstructure must contain minimum of min and maximum of max substructures with URI uri
        let [min, max] = cardinality.split(':');
        max = (max === 'M') ? Infinity : parseInt(max);
        min = parseInt(min);
        let counter = 0;

        // count through all substructs of superstruct
        for (const sub of parsedObject.substructs) {
          if (sub.uri === uri) {
            counter += 1;
          }
        }
        if (counter < min) throw new GedcomCardinalityError(uri, parsedObject.line, true);
        if (counter > max) throw new GedcomCardinalityError(uri, parsedObject.line, false);
      }
    }
  }
};
