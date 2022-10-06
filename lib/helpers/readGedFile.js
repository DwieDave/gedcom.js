const events = require('events');
const fs = require('fs');
const readline = require('readline');

module.exports = async function (path, file) {
    // string representation of gedcom file
    gedcom_string = "";

    try {
        // open gedcome file from directory "path"
        const rl = readline.createInterface({
        input: fs.createReadStream(path + "/" + file),
        crlfDelay: Infinity
        });

        // read line by line
        rl.on('line', (line) => {
            gedcom_string += (line + "\n")
        });

        await events.once(rl, 'close');
        // return gedcom string-representation without last new-line 
        return gedcom_string.slice(0,-2);

    }catch (err) {
        console.error(err);
    }
    
};


