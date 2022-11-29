class ParsingError extends Error {
    constructor(msg) {
        super(msg)
    }
}

class GedcomSyntaxError extends Error {
    constructor(msg) {
        super(msg)
    }
}

class GedcomCardinalityError extends Error {
    constructor(errorTag, line) {
        super(`Error in Cardinality\nToo many "${errorTag}" tags in Structure "${line.level} ${line.xref ? "@" + line.xref + "@ " : ""}${line.tag}${line.lineVal ? " " + line.lineVal : ""}"`);
    }
}

class GedcomResultUndefinedError extends Error {
    constructor() {
        super(`Result is undefined\nGedcom Syntax is not complete. Check if there are EOL characters at the end of every gedcom line.`);
    }
}

module.exports = {ParsingError, GedcomSyntaxError, GedcomCardinalityError, GedcomResultUndefinedError};