// The FAM record was originally structured to represent families where a male HUSB (husband or father) and female WIFE (wife or mother) 
// produce CHIL (children). The FAM record may also be used for cultural parallels to this, including nuclear families, marriage, 
// cohabitation, fostering, adoption, and so on, regardless of the gender of the partners

import { CONSTANTS, GedcomTags, GedcomSyntaxError } from "../Syntax.mjs";
import { Structure } from "./Structure.mjs";
import nearley from "nearley"
import grammar from "../grammar/FamilyGrammar.js";

export class Family extends Structure  {
    constructor(line) {
        super(line);
    }

    // a partner in a FAM record
    getHusband(){
        for(const sub of this.substructures){
            if(sub.tag == GedcomTags.HUSBAND) return sub;
        }
    }

    getHusbandXref(){
        return this.getHusband().lineVal.value;
    }

    // a partner in a FAM record
    getWife(){
        for(const sub of this.substructures){
            if(sub.tag == GedcomTags.WIFE) return sub;
        }
    }

    getWifeXref(){
        return this.getWife().lineVal.value;
    }

    // the child in a family, whether biological, adopted, foster, sealed, or other relationship
    getChildren(){
        const structs = [];
        for(const sub of this.substructures){
            if(sub.tag == GedcomTags.CHILD) structs.push(sub);
        }
        return structs;
    }

    getChildrenXref(){
        return this.getChildren().map(child => child.lineVal.value)
    }

    // family attributes can contain the number of children, the family's residence or a gerneric family attribute
    getFamilyAttributeStructures(){
        const structs = [];
        for(const sub of this.substructures){
            // the number of children that belong to this family.
            if(sub.tag == GedcomTags.NUMBER_OF_CHILDREN) structs.push(sub);
            // an address or place of residence where a family resided.
            if(sub.tag == GedcomTags.RESIDENCE) structs.push(sub);
            // a structure for a generic attribute or fact concerning an family
            // it must have a TYPE substructure to define what kind of attribute is being provided
            if(sub.tag == GedcomTags.FACT) structs.push(sub);
        }
        return structs;
    }

    getNumbersOfChildren(){
        const structs = [];
        for(const sub of this.substructures){
            // the number of children that belong to this family.
            if(sub.tag == GedcomTags.NUMBER_OF_CHILDREN) structs.push(sub);
        }
        return structs;
    }

    getResidenceInformation(){
        const structs = [];
        for(const sub of this.substructures){
            // an address or place of residence where a family resided.
            if(sub.tag == GedcomTags.RESIDENCE) structs.push(sub);
        }
        return structs;
    }

    getFamilyFacts(){
        const structs = [];
        for(const sub of this.substructures){
            // a structure for a generic attribute or fact concerning an family
            // it must have a TYPE substructure to define what kind of attribute is being provided
            if(sub.tag == GedcomTags.FACT) structs.push(sub);
        }
        return structs;
    }

    checkSyntax(){
        // Create a Parser object from family grammar.
        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
        let test = this.toString();

        // check grammar of current substructure
        try{
            console.log(`Try to parse:\n${this.toString()}`);
            parser.feed(this.toString());
            console.log(`Grammar correct!\n`);
            parser.finish();
        }catch(e){
            throw new GedcomSyntaxError(e.message);
        }
    }



}