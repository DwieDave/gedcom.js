import * as fs from 'fs/promises';

export async function writeGedFile(path, data) {
    try {
        await fs.writeFile(path, data, { encoding: 'utf8' });
    } catch (err) {
        console.error(err);
    }
};