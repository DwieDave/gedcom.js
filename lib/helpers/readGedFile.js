const fs = require('fs/promises');

module.exports = async function readGedFile(path) {
    // string representation of gedcom file
    let gedcom_string = "";

    try {
        gedcom_string = await fs.readFile(path, { encoding: 'utf8' });
        return gedcom_string;

    } catch (err) {
        console.error(err);
    }

};


