const fs = require('fs/promises');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function appendGrammarToNearleyHeader(grammarName) {
    const grammarPath = "./lib/grammar/";
    const nearleyHeader = grammarPath + "NearleyHeader.ne";
    const nearleyHeaderCopy = grammarPath + "NearleyHeaderCopy.ne";

    try {
        // copy nearleyHeader.ne
        await fs.copyFile(nearleyHeader, nearleyHeaderCopy);

        // read given grammar
        let grammarString = await fs.readFile(grammarPath + grammarName + ".ne", { encoding: 'utf8' });

        // append grammar to copy of nearleyHeader.ne
        await fs.appendFile(nearleyHeaderCopy, grammarString);

        // compile copy of nearleyHeader.ne and appended grammar 
        await exec("npx nearleyc ./lib/grammar/NearleyHeaderCopy.ne -o ./lib/grammar/parser/" + grammarName + "Parser.js");

        // delete copy of nearleyGrammar.ne
        await fs.unlink(nearleyHeaderCopy);

    } catch (err) {
        console.error(err);
    }

};

(async function main(){
    await appendGrammarToNearleyHeader("GedcomHeader");
    await appendGrammarToNearleyHeader("Family");
    await appendGrammarToNearleyHeader("Individual");
})();


