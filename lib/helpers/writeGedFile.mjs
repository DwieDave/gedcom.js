import * as fs from 'fs/promises';

export async function writeGedFile(path, file, data) {
    try {
        await fs.writeFile(path + "/" + file, data, { encoding: 'utf8' });
    } catch (err) {
        console.error(err);
    }
};