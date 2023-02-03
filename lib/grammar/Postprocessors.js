const { lineTypes, dataTypes, gedcomEnumTypes } = require('../util/Constants.js');
const { GedcomLevelError, GedcomSyntaxError } = require('../util/Errors.js');

// depth of the flat-operation of method joinAndUnpackAll
const flatDepth = 10;

module.exports = {
  // resolve nearley array structure into one string
  joinAndUnpackAll: (data) => {
    const dataArray = [];
    for (const d of data) {
      if (Array.isArray(d)) dataArray.push(...d);
      else dataArray.push(d);
    }
    return dataArray.flat(flatDepth).join('');
  },
  // read all given structure information an return it as javascript object
  createStructure: (options) => {
    // line and type must be present to create a Structure
    if (!options.line && !options.type) throw new Error('data and type required!');

    const type = options.type;
    const line = options.line.map(part => {
      if (part) {
        // if lineString is given as payload, it is encoded as array (because empty payload is possible)
        if (Array.isArray(part)) {
          // part[0] is equivalent to D; part[1] is equivalent to lineString
          part = part[1];
        }
        // line information can be given as lexer-object
        if (typeof part === 'object') {
          part = part.value;
        }
        return part;
      }
      return null;
    });

    // create line-object depending on type of line
    let lineObject = {};

    switch (type) {
      // Structure of the form: LEVEL D TAG EOL
      case lineTypes.NO_XREF_NO_LINEVAL:
      case lineTypes.HEADER:
        lineObject = { level: line[0], xref: '', tag: line[2], lineVal: '', EOL: line[3] };
        break;

        // Structure of the form: LEVEL D XREF D TAG EOL
      case lineTypes.NO_LINEVAL:
      case lineTypes.FAM_RECORD:
      case lineTypes.INDI_RECORD:
      case lineTypes.OBJE_RECORD:
      case lineTypes.REPO_RECORD:
      case lineTypes.SOUR_RECORD:
      case lineTypes.SUBM_RECORD:
        // Remove @-sign from beginning and end of XREF
        lineObject = { level: line[0], xref: line[2], tag: line[4], lineVal: '', EOL: line[5] };
        break;

        // Structure of the form: LEVEL D TAG D LINEVAL EOL
      case lineTypes.NO_XREF:
        // check lineValue if it is from type ListEnum
        if (options.lineValType === dataTypes.ListEnum) {
          const enumValues = gedcomEnumTypes[options.enumType];
          // offset for error message
          let offset = 0;
          // line[3] is equivalent to thelineValue
          for (const val of line[3].split(',')) {
            // check if lineValue contains a value, that is not permitted by EnumType
            if (val && !enumValues.includes(val.trim())) {
              const spaces = Array(offset + 7 + 2).join(' ');
              throw new GedcomSyntaxError(`LineValue ${val} is not listed in ${options.enumType}!\n${line[0]} ${line[2]} ${line[3]}\n` + spaces + '^');
            }
            offset += val.length + 1;
          }
          // check lineValue if it is from type Enum
        } else if (options.lineValType === dataTypes.Enum) {
          const enumValues = gedcomEnumTypes[options.enumType];
          // line[3] is equivalent to thelineValue
          const val = line[3].trim();

          // check if lineValue contains a value, that is not permitted by EnumType
          if (val && !enumValues.includes(val)) {
            const spaces = Array(6 + 2).join(' ');
            throw new GedcomSyntaxError(`LineValue ${val} is not listed in ${options.enumType}!\n${line[0]} ${line[2]} ${line[3]}\n` + spaces + '^');
          }
        }
        lineObject = { level: line[0], xref: '', tag: line[2], lineVal: line[3], EOL: line[4] };
        break;

        // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
      case lineTypes.SNOTE_RECORD:
      default:
        // Remove @-sign from beginning and end of XREF
        lineObject = { level: line[0], xref: line[2], tag: line[4], lineVal: line[5], EOL: line[6] };
    }

    // create data object with meta-information of line structure
    return {
      uri: options.uri,
      line: lineObject,
      type: type,
      lineValType: options.lineValType ? options.lineValType : null,
      superstructFound: false,
      substructs: [],
      checkCardinalityOf: options.checkCardinalityOf
    };
  },
  // add substructures to given superstructure and check cardinality (optional)
  addSubstructure: (options) => {
    let superstruct = options.superstruct;
    let substruct = options.substructs;

    // unpack parsed line from array
    while (substruct.length) {
      // just add the most recent line to gedcom tree, when there are multiple lines in sub-array
      substruct = substruct[substruct.length - 1];
    }
    while (superstruct.length) {
      superstruct = superstruct[superstruct.length - 1];
    }

    // superstructFound is set, when substruct is already present in parsing tree
    if (!substruct.superstructFound) {
      // level of substructure must be the increment of level of superstructure
      if (parseInt(substruct.line.level) !== parseInt(superstruct.line.level) + 1) throw new GedcomLevelError(superstruct, substruct);
      // put substruct in gedcom parsing tree
      substruct.superstructFound = true;
      superstruct.substructs.push(substruct);
    }

    return superstruct;
  }
};
