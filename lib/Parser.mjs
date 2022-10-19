import { Dataset } from './Dataset.mjs';
import { Tags, LineVal } from './Syntax.mjs';

import { Individual } from './structure/Individual.mjs';
import { Family } from './structure/Family.mjs';

export class Parser {

    constructor() { 
       
    }

    parseFile(input) {
        // regular expression for one Line of gedcom-dataset
        var line_re = /(?<level>0|[1-9][0-9]*) (?:@(?<xref>[A-Z0-9_]+)@ )?(?<tag>[A-Z0-9_]+)(?: (?:@(?<lineValPointer>[A-Z0-9_]+)@|(?<lineValLineStr>(?:[^@\n\r]|@@)[^\n\r]*))| )?(?:\r\n?|\n\r?|$)/g;

        // initialize dataset
        let dataset = new Dataset();

        // iterate across all lines of the dataset, that match the regular expression 
        for (const match of input.matchAll(line_re)) {
            const structure = this.parseLine(match.groups);
            if(structure)dataset.addRecord(structure);
        }

        dataset.printRecords();
    }

    parseLine(line){
        let structure = null;
        
        // create a structure depending on the tag
        if(line.tag === Tags.INDIVIDUAL_TAG){
            structure =  new Individual(line);
        }
        else if(line.tag === Tags.FAMILY_TAG){
            structure =  new Family(line);
        }

        return structure;
    }
}

