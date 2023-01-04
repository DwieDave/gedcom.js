const fs = require('fs/promises');
const { GedcomFileNotFoundError } = require('./Errors.js');

module.exports = async function readGedFile (path) {
  // string representation of gedcom file
  let gedcomString = '';

  try {
    gedcomString = await fs.readFile(path, { encoding: 'utf8' });
    return gedcomString;
  } catch (err) {
    throw new GedcomFileNotFoundError(path);
  }
};
