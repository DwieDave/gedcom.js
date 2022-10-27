// The individual record is a compilation of facts or hypothesized facts about an individual.
// These facts may come from multiple sources.

import { Structure } from "./Structure.mjs";
import { GedcomTags, GedcomEnumSetSex, GedcomSyntaxError } from "../Syntax.mjs";

export class Individual extends Structure  {
    constructor(line) {
        super(line);
    }

    // TO-DO: add detection for RESN tag: 
    // The RESN structure is provided to assist software in filtering data that should not be exported or otherwise used in a particular context. 
    // It is recommended that tools provide an interface to allow users to filter data on export such that certain RESN structure payload entries 
    // result in the RESN structure and its superstructure being removed from the export.

    // 
    getName(){
        for(const sub of this.substructures){
            if(sub.tag === GedcomTags.NAME){
                return sub.lineVal.value;
           }
        }
    }

    // An enumerated value that indicates the sex of the individual at birth.
    getSex(){
        for(const sub of this.substructures){
            if(sub.tag === GedcomTags.SEX){
                return sub.lineVal.value;
           }
        }
        
    }

}