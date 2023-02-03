class ParsingError extends Error {
    constructor(msg) {
        super(msg)
    }
}

class GedcomSyntaxError extends Error {
    constructor(msg) {
        super(`${msg}`);
    }
}

class GedcomLevelError extends Error {
    constructor(superstruct, substruct){
        super(`Level is not correct\n${superstruct.line.level} ${superstruct.line.xref} ${superstruct.line.tag} ${superstruct.line.lineVal}\n^\n${substruct.line.level} ${substruct.line.xref} ${substruct.line.tag} ${substruct.line.lineVal}\n^`);
    }
}

class GedcomCardinalityError extends Error {
    constructor(errorTag, line, minimumError) {
        if(minimumError){
            super(`Missing gedcom line\nNo "${errorTag}" in Structure "${line.level} ${line.xref ? "@" + line.xref + "@ " : ""}${line.tag}${line.lineVal ? " " + line.lineVal : ""}"`);
        }else{
            super(`Ambigious gedcom lines\nToo many "${errorTag}" in Structure "${line.level} ${line.xref ? "@" + line.xref + "@ " : ""}${line.tag}${line.lineVal ? " " + line.lineVal : ""}"`);
        }
    }
}

class NearleyResultUndefinedError extends Error {
    constructor() {
        super(`Result is undefined\nGedcom Syntax is not complete. Check if there are EOL characters at the end of every gedcom line.`);
    }
}

class GedcomFileNotFoundError extends Error {
    constructor(path) {
        super(`Gedcom File at location ${path} does not exist.`);
    }
}

class DatasetError extends Error {
    constructor(msg){
        super(msg);
    }
}

module.exports = {ParsingError, GedcomSyntaxError, GedcomCardinalityError, NearleyResultUndefinedError, GedcomLevelError, GedcomFileNotFoundError, DatasetError};