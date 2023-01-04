const fs = require('fs/promises');
const { GedcomFileNotFoundError } = require('./Errors.js');

module.exports = async function readGedFile (path) {
  // string representation of gedcom file
  let gedcom_string = '';

  try {
    gedcom_string = await fs.readFile(path, { encoding: 'utf8' });
    return gedcom_string;
  } catch (err) {
    throw new GedcomFileNotFoundError(path);
  }
};
