// The individual record is a compilation of facts or hypothesized facts about an individual.
// These facts may come from multiple sources.

const { GedcomTags } = require("../util/Constants.js");
const Structure = require("./Structure.js");
const nearley = require("nearley");
const grammar = require("../grammar/parser/IndividualParser.js");
const StructureInfo = require("../grammar/StructureInfo.js");
const {ParsingError, GedcomSyntaxError, GedcomCardinalityError} = require("../util/Errors.js");

module.exports =  class Individual extends Structure {
    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
    }

    // 
    getName() {
        return this.getTag(GedcomTags.NAME).value;
    }

    // An enumerated value that indicates the sex of the individual at birth.
    getSex() {
        return this.getTag(GedcomTags.SEX).value;
    }

    // A date value that indicates when an individual was entered into life.
    getBirthDate() {
        return this.getTag(GedcomTags.BIRTH)?.getTag(GedcomTags.DATE)?.value;
    }

    // A date value that indicates when mortal life ends for an individual.
    getDeathDate() {
        return this.getTag(GedcomTags.DEATH)?.getTag(GedcomTags.DATE)?.value;
    }

    // An address or place of residence where an individual resides.
    getResidenceInformation() {
        return this.getTags(GedcomTags.RESIDENCE);
    }

    // A date value that indicates when mortal life ends for an individual.
    getFamiliesXref() {
        return this.getTags(GedcomTags.FAMILYSPOUSE).map(tag => tag.value);
    }

    
    checkSyntax(){
        super.checkSyntax(grammar, "Individual", this.xref);
    }

}