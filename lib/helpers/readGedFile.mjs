import * as fs from 'fs/promises';

export async function readGedFile(path, file) {
    // string representation of gedcom file
    let gedcom_string = "";

    try {
        gedcom_string = await fs.readFile(path + "/" + file, { encoding: 'utf8' });
        return gedcom_string.slice(0, -2);

    } catch (err) {
        console.error(err);
    }

};


