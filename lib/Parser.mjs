import { Dataset } from './Dataset.mjs';
import { GedcomSyntaxError, GedcomTags} from './Syntax.mjs';
import { Individual } from './structure/Individual.mjs';
import { Family } from './structure/Family.mjs';
import { Structure } from './structure/Structure.mjs';

export class Parser {

    constructor() { 
        // regular expression for one Line of gedcom-dataset
        this.gedcomLineRegex = /(?<level>0|[1-9][0-9]*) (?:@(?<xref>[A-Z0-9_]+)@ )?(?<tag>[A-Z0-9_]+)(?: (?:@(?<lineValPointer>[A-Z0-9_]+)@|(?<lineValLineStr>(?:[^@\n\r]|@@)[^\n\r]*))| )?/;
        
        // the dataset contains a header, trailer and optional records
        this.dataset = null;
    }

    parseString(gedcomString) {
        // initialize dataset
        this.dataset = new Dataset();

        // iterate across all lines of string representation of gedcom file 
        for(const line of gedcomString.split(/(?:\r\n?|\n\r?|$)/)){
            this.parseLine(line);
        }

        return this.dataset;
    }

    parseLine(line){
        // match on line of the multi-line string with the gedcome regular expression
        const gedcom = line.match(this.gedcomLineRegex)?.groups

        // if the line matches the gedcom syntax
        if(gedcom){
            // create a structure depending on the tag
            if(gedcom.tag === GedcomTags.INDIVIDUAL){
                this.dataset.addStructure(new Individual(gedcom));
            }else if(gedcom.tag === GedcomTags.FAMILY){
                this.dataset.addStructure(new Family(gedcom));
            }else{
                this.dataset.addStructure(new Structure(gedcom));
            }
        // syntax error if the line doesn't match the gedcom syntax and isn't an empty line
        }else{
            if(line !== "")throw new GedcomSyntaxError(gedcom);
        }
        
        
        
    
    }
}

