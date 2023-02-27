const { ParsingError, DatasetError } = require('./util/Errors.js');
const Dataset = require('./structure/Dataset.js');
const Parser = require('./structure/Parser.js');
const readGedFile = require('./util/readGedFile.js');

class GedcomParser {
  constructor () {
    this.grammar = require('./grammar/parser/DatasetParser.js');
  }

  // parse a gedcom file and return a dataset object
  async parseGedFile (path) {
    const gedcomString = await readGedFile(path);
    return this.parseString(gedcomString);
  }

  // parse the string representation of a gedcom file and return a dataset object
  parseString (gedcomString) {
    try {
      // Create a Parser object from nearley grammar.
      const parser = new Parser(this.grammar);

      // gedcom parsing tree is split into byte-order-mark, header, (multiple) records and trailer
      //  -> check cardinality of result[1] (header) and result[2] (records)
      const result = parser.parseString(gedcomString, [1, 2]);
      const bom = result[0];
      const header = result[1];
      const records = result[2];
      const trailer = result[3];

      // create Dataset object from parsing result
      const dataset = new Dataset(header, records, trailer, bom);

      // check for warnings in Dataset
      if (!dataset.BOMset) {
        console.warn('WARNING: The first character in each Dataset should be U+FEFF, the byte-order mark!');
      }
      if (dataset.multipleEOLCharacters) {
        console.warn('WARNING: There are different EOL characters in this Dataset. Make sure to just use one of [\\n, \\r, \\r\\n]!');
      }

      console.log('Parsing Complete. Syntax of Gedcom-File is correct!');
      return dataset;
    } catch (e) {
      if (e instanceof DatasetError) {
        throw new DatasetError(e.message);
      }
      throw new ParsingError(e.message);
    }
  }
}

module.exports = { GedcomParser };
