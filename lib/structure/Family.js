// The FAM record was originally structured to represent families where a male HUSB (husband or father) and female WIFE (wife or mother) 
// produce CHIL (children). The FAM record may also be used for cultural parallels to this, including nuclear families, marriage, 
// cohabitation, fostering, adoption, and so on, regardless of the gender of the partners
const Structure = require("./Structure.js");
const grammar = require("../grammar/parser/FamilyParser.js");

module.exports = class Family extends Structure  {
    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
    }

    // a partner in a FAM record
    getHusband(){
        // get family husband from this family record
        const famHusb = this.getSubstructuresByUri("g7:FAM-HUSB", false)[0];

        // if family husband is given, return corresponding Individual-Object and potentional Phrase
        if(famHusb){
            const phrase = famHusb.getSubstructuresByUri("g7:PHRASE", false)[0];
            return {
                "Husband": this.datasetReference.getRecordByXref(famHusb.lineVal),
                "Phrase": phrase ? phrase.lineVal : "" 
            }
        }

        return null;
    }

    // a partner in a FAM record
    getWife(){
        // get family husband from this family record
        const famWife = this.getSubstructuresByUri("g7:FAM-WIFE", false)[0];

        // if family husband is given, return corresponding Individual-Object and potentional Phrase
        if(famWife){
            const phrase = famWife.getSubstructuresByUri("g7:PHRASE", false)[0];
            return {
                "Wife": this.datasetReference.getRecordByXref(famWife.lineVal),
                "Phrase": phrase ? phrase.lineVal : "" 
            }
        }

        return null;
    }

    // the child in a family, whether biological, adopted, foster, sealed, or other relationship
    getChildren(){
        // get all children of this family
        const famChildren = this.getSubstructuresByUri("g7:CHIL", false);

        // if there are children in this family, return corresponding Individual-Object and potentional Phrase
        if(famChildren.length !== 0){
            return {
                "Children": famChildren.map((child_struct) => {
                    const phrase = child_struct.getSubstructuresByUri("g7:PHRASE", false)[0];

                    // return corresponding Individual-Object and potentional Phrase
                    return {
                        "Child": this.datasetReference.getRecordByXref(child_struct.lineVal),
                        "Phrase": phrase ? phrase.lineVal : "" 
                    }
                })
            }
        }

        return null;
    }

    // returns information about the numberOfChildren-Structure of this family
    // TO-DO: Check if number of children (NCHI) and actual number of CHIL-Structures in Record must match 
    getNumberOfChildren(){
        const famNCHI = this.getSubstructuresByUri("g7:FAM-NCHI", false)[0];
        
        if(famNCHI){
            return {
                "numberOfChildren": Number.parseInt(famNCHI.lineVal),
                "type": famNCHI.getSubstructuresByUri("g7:TYPE", false)[0]?.lineVal || "",
                "parentInformation": this.extractParentInformation(famNCHI),
                "eventDetails": this.extractEventDetail(famNCHI)
            }
        }

        return null
    }

    // Where possible, the residence should be identified in PLAC and/or ADDR substructures of the RESI structure. 
    // The payload text should not duplicate PLAC or ADDR information, but may be used for residence information that cannot be expressed by those structures
    getFamilyResidence(){
        const famResidences = this.getSubstructuresByUri("g7:FAM-RESI", false)[0];
        
        if(famResidences){
            return {
                "familyResidence": famResidences.lineVal,
                "type": famNCHI.getSubstructuresByUri("g7:TYPE", false)[0]?.lineVal || "",
                "parentInformation": this.extractParentInformation(famNCHI),
                "eventDetails": this.extractEventDetail(famNCHI)
            }
        }

        return null

    }


    // extracts Information about the parents of this family from a FAMILY_EVENT_DETAIL
    extractParentInformation(struct){
        // A container for information relevant to the subject of the superstructure specific to the individual described by the associated
        // FAM’s HUSB substructure and FAM's WIFE substructure respectively
        const husb = struct.getSubstructuresByUri("g7:HUSB", false)[0];
        const wife = struct.getSubstructuresByUri("g7:WIFE", false)[0];

        if(husb || wife){
            return {
                "husbandAge": husb?.getSubstructuresByUri("g7:AGE", false)[0]?.lineVal || "",
                "husbandPhrase": husb?.getSubstructuresByUri("g7:AGE", false)[0]?.getSubstructuresByUri("g7:PHRASE", false)[0]?.lineVal || "",
                "wifeAge": wife?.getSubstructuresByUri("g7:AGE", false)[0]?.lineVal || "",
                "wifePhrase": wife?.getSubstructuresByUri("g7:AGE", false)[0]?.getSubstructuresByUri("g7:PHRASE", false)[0]?.lineVal || ""
            }
        }

        return null;   
    }

    // extracts details about an given event from and EVENT_DETAIL Substructure
    extractEventDetail(struct){
        // {O:1} Cardinality
        // Substructures that may be shared by most individual and family events and attributes.
        const date = struct.getSubstructuresByUri("g7:DATE", false)[0];
        // The organization, institution, corporation, person, or other entity that has responsibility for the associated context
        const responsibleAgency = struct.getSubstructuresByUri("g7:AGNC", false)[0];
        // A religious denomination associated with the event or attribute described by the superstructur
        const religion = struct.getSubstructuresByUri("g7:AGNC", false)[0];
        // The reasons which precipitated an event. 
        //  -> It is often used subordinate to a death event to show cause of death, such as might be listed on a death certificate
        const cause = struct.getSubstructuresByUri("g7:CAUS", false)[0];
        // A date to be used as a sorting hint
        //  -> It is intended for use when the actual date is unknown, but the display order may be dependent on date
        const sortDate = struct.getSubstructuresByUri("g7:SDATE", false)[0];

        // {0:M} CARDINALITY
        // A telephone number. Telephone numbers have many regional variations and can contain non-digit characters
        const phoneNumbers = struct.getSubstructuresByUri("g7:PHON", false);
        // An electronic mail address, as defined by any relevant standard such as RFC 3696
        const emailAdresses = struct.getSubstructuresByUri("g7:EMAIL", false);
        // A fax telephone number appropriate for sending data facsimiles
        const faxAdresses = struct.getSubstructuresByUri("g7:FAX", false);
        // A URL or other locator for a World Wide Web page, as defined by any relevant standard such as whatwg/url, RFC 3986, RFC 3987, and so forth.
        const wwwAdresses = struct.getSubstructuresByUri("g7:WWW", false);

        if(date || responsibleAgency || religion || cause ||sortDate || phoneNumbers.length > 0 || emailAdresses.length > 0 ||faxAdresses.length > 0 ||wwwAdresses.length > 0){
            return {
                "date": date?.lineVal || "",
                "responsibleAgency": responsibleAgency?.lineVal || "",
                "religion": religion?.lineVal || "",
                "cause": cause?.lineVal || "",
                "sortDate": sortDate?.lineVal || "",
                "phoneNumbers": phoneNumbers?.map((struct) => struct.lineVal),
                "emailAdresses": emailAdresses?.map((struct) => struct.lineVal),
                "faxAdresses": faxAdresses?.map((struct) => struct.lineVal),
                "wwwAdresses": wwwAdresses?.map((struct) => struct.lineVal)
            }
        }

        return null
    }


    checkSyntax(){
        super.checkSyntax(grammar, "Family", this.xref);
    }



}