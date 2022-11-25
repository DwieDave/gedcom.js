class ParsingError extends Error {
    constructor(msg) {
        super(`Parsing Error:"${msg}"`)
    }
}

class GedcomSyntaxError extends Error {
    constructor(msg) {
        super(msg)
    }
}

class GedcomCardinalityError extends Error {
    constructor(errorTag, line) {
        super(`Cardinality Error\nToo many "${errorTag}" tags in Structure "${line.level} ${line.xref ? "@" + line.xref + "@ " : ""}${line.tag}${line.lineVal ? " " + line.lineVal : ""}"`);
    }
}

module.exports = {ParsingError, GedcomSyntaxError, GedcomCardinalityError};