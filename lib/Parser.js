const Structure = require('./Structure.js');

class Parser {

    constructor() { }

    parse(input) {
        // regular expression for one Line of gedcom-dataset
        var line_re = /(?<level>0|[1-9][0-9]*) (?:@(?<xref>[A-Z0-9_]+)@ )?(?<tag>[A-Z0-9_]+)(?: (?:@(?<lineVal_pointer>[A-Z0-9_]+)@|(?<lineVal_lineStr>(?:[^@\n\r]|@@)[^\n\r]*))| )?(?:\r\n?|\n\r?|$)/g;
        // context of a line
        // context[level-1] contains the superstructure of level
        var context = [];
        // return value: all records (level 0) of the dataset
        var records = [];
        var xref_ids = {};
        var extensions = {};

        // iterate across all lines of the dataset, that match the regular expression 
        for (const match of input.matchAll(line_re)) {
            const line = match.groups;

            // CONT: pseudo-structure to indicate a line break
            // It immediately follows the line to be continued and has level+1
            if (line.tag == "CONT") {
                // Add lineValue of CONT-line to str-Value of superstructure 
                context[line.level - 1].str += "\n" + line.lineVal_lineStr;
                continue;
            }

            // create new Structure-object for the current line
            const s = new Structure(line.tag, line.lineVal_pointer, line.lineVal_lineStr, extensions);

            // extensions are defined in HEAD.SCHMA.TAG line 
            if (s.type == 'TAG' && context[0].type == 'HEAD' && context[1].type == 'SCHMA') {
                // store extension name and definition-url in extension-dictionary
                const tmp = s.str.split(/ (.*)/);
                extensions[tmp[0]] = tmp[1];
            }

            // store structure-object as context for the current line
            context[line.level] = s;

            // line is a substructure
            if (line.level > 0) context[line.level - 1].sub.push(s);
            //line is a record
            else records.push(s);

            // each record to which other structures point must have a cross-reference identifier
            // if the value is set in a line, a structure points to that line
            if (line.xref) xref_ids[line.xref] = s;
        }
        // Replace all pointer lineValues with the structure it points to
        // records.forEach(x => x.fixPtrs(xref_ids));

        return records;
    }

    parseAsJSON(input) {
        let records = this.parse(input);
        records.forEach(x => x.removePtrs());
        return records;
    }

}

module.exports = Parser;
