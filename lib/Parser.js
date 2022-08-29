const Structure = require('./Structure.js');

class Parser {

    Parser() { }

    parse(input) {
        var lre = /(0|[1-9][0-9]*) (?:@([A-Z0-9_]+)@ )?([A-Z0-9_]+)(?: (?:@([A-Z0-9_]+)@|((?:[^@\n\r]|@@)[^\n\r]*))| )?(?:\r\n?|\n\r?|$)/g;
        var context = [];
        var records = [];
        var ids = {};
        var ext = {};
        for (match of input.matchAll(lre)) {
            var level = Number(match[1]);
            if (match[3] == "CONT") {
                context[level - 1].str += "\n" + match[5];
                continue;
            }
            var s = new Structure(match[3], match[4], match[5], ext);
            if (s.type == 'TAG' && context[0].type == 'HEAD' && context[1].type == 'SCHMA') {
                var tmp = s.str.split(/ (.*)/);
                ext[tmp[0]] = tmp[1];
            }
            context[level] = s;
            if (level > 0) context[level - 1].sub.push(s);
            else records.push(s);
            if (match[2]) ids[match[2]] = s;
        }
        records.forEach(x => x.fixPtrs(ids));
        return records;
    }

    parseAsJSON(input) {
        let records = this.parse(input);
        records.forEach(x => x.removePtrs());
        return records;
    }

}

module.exports = Parser;
