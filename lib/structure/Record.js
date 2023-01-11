const Structure = require('./Structure');
const Parser = require("../Parser.js");
const {GedcomSyntaxError} = require("../util/Errors.js");

module.exports = class Record extends Structure {
    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
    }

    // check syntax on basis of given grammar
    checkSyntax(grammar, structureName, structureXref){
        const parser = new Parser(grammar);

        try{
            console.log(`check syntax of ${structureName} ${structureXref}`)
            // parse string-representation of structure and check cardinality of first result (record)
            parser.parseString(this.toString(),[0])
            console.log(`syntax correct!`)
        }catch(e){
            throw new GedcomSyntaxError(e.message)
        }

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

        // A place, which can be represented in several ways
        const placeStructure = this.extractPlaceStructure(struct);

        // {0:M} CARDINALITY
        // A telephone number. Telephone numbers have many regional variations and can contain non-digit characters
        const phoneNumbers = struct.getSubstructuresByUri("g7:PHON", false);
        // An electronic mail address, as defined by any relevant standard such as RFC 3696
        const emailAdresses = struct.getSubstructuresByUri("g7:EMAIL", false);
        // A fax telephone number appropriate for sending data facsimiles
        const faxAdresses = struct.getSubstructuresByUri("g7:FAX", false);
        // A URL or other locator for a World Wide Web page, as defined by any relevant standard such as whatwg/url, RFC 3986, RFC 3987, and so forth.
        const wwwAdresses = struct.getSubstructuresByUri("g7:WWW", false);

        if(date || placeStructure || responsibleAgency || religion || cause ||sortDate || phoneNumbers.length > 0 || emailAdresses.length > 0 ||faxAdresses.length > 0 ||wwwAdresses.length > 0){
            return {
                "date": date?.lineVal || "",
                "placeInformation": placeStructure || "",
                "responsibleAgency": responsibleAgency?.lineVal || "",
                "religion": religion?.lineVal || "",
                "cause": cause?.lineVal || "",
                "sortDate": sortDate?.lineVal || "",
                "phoneNumbers": phoneNumbers?.map((struct) => struct.lineVal) || "",
                "emailAdresses": emailAdresses?.map((struct) => struct.lineVal) || "",
                "faxAdresses": faxAdresses?.map((struct) => struct.lineVal) || "",
                "wwwAdresses": wwwAdresses?.map((struct) => struct.lineVal) || ""
            }
        }

        return null
    }

    // extracts details about an given place from an PLACE_STRUCTURE Substructure
    extractPlaceStructure(struct){
        // The principal place in which the superstructure’s subject occurred, represented as a List of jurisdictional entities in a sequence from the lowest to the highest jurisdiction
        // As with other lists, the jurisdictions are separated by commas. Any jurisdiction’s name that is missing is still accounted for by an empty string in the list.
        const place = struct.getSubstructuresByUri("g7:PLAC", false)[0];

        if(place){
            // g7:PLACE SUBSTRUCTS 
            // A comma-separated list of jurisdictional titles, which has the same number of elements and in the same order as the PLAC structure
            // As with PLAC, this shall be ordered from lowest to highest jurisdiction
            const format = place.getSubstructuresByUri("g7:PLAC-FORM", false)[0];

            // The primary human language of the superstructure. The primary language in which the Text-typed payloads of the superstructure and its substructures appear
            const  language = place.getSubstructuresByUri("g7:LANG", false)[0];

            // A type of TRAN substructure specific to places. Each PLAC.TRAN must have a LANG substructure
            const translations = place.getSubstructuresByUri("g7:PLAC-TRAN", false);
            
            // A representative point for a location, as defined by LATI and LONG substructures
            const map = place.getSubstructuresByUri("g7:MAP", false)[0];

            // An identifier for the subject of the superstructure
            const externalIdentifier = place.getSubstructuresByUri("g7:EXID", false);

            // A catch-all location for information that does not fully fit within other structures
            const note = this.extractNoteStructures(place);

            return {
                "place": place?.lineVal || "",
                "format": format?.lineVal || "",
                "language": language?.lineVal || "",
                "translations": translations?.map((trans) => {
                    return {
                        "translation": trans.lineVal,
                        "language": trans.getSubstructuresByUri("g7:LANG", false)[0]?.lineVal
                    }
                }) || "",
                "map": map ? {
                    "latitude": map.getSubstructuresByUri("g7:LATI", false)[0]?.lineVal,
                    "longitude": map.getSubstructuresByUri("g7:LONG", false)[0]?.lineVal
                } : "",
                "externalIdentifier": externalIdentifier?.map((exid) => {
                    return {
                        "identifier": exid.lineVal,
                        "type": exid.getSubstructuresByUri("g7:EXID-TYPE", false)[0]?.lineVal
                    }
                }) || "",
                "note":  note || ""
            }
        }

        return null;
    }

    // extracts details about an given note from an NOTE_STRUCTURE Substructure
    extractNoteStructures(struct){
        // A catch-all location for information that does not fully fit within other structures
        const notes = struct.getSubstructuresByUri("g7:NOTE", false);
        const snotes = struct.getSubstructuresByUri("g7:SNOTE", false);

        if(notes || snotes){
            return {
                "sharedNotes": snotes ? snotes.map((snote) => struct.datasetReference.getRecordByXref(snote.lineVal)) : "",
                "noteValues": notes? notes.map((note) => note.lineVal) : "",
                "structures": notes ? notes : "" 
            }
        }

        return null;
        
    }

    // extracts content of IDENTIFIER_STRUCTURE
    //  -> Each value provides an identifier for a structure or its subject, and each is different in purpose
    extractIdentifierStructures(){
        // REFN (Reference) is user-defined number or text that the submitter uses to identify the superstructure
        const references = this.getSubstructuresByUri("g7:REFN", false);

        // UID is a globally-unique identifier of the superstructure, to be preserved across edits
        const UIDs = this.getSubstructuresByUri("g7:UID", false);

        // EXID is an identifier maintained by an external authority that applies to the subject of the structure.
        const externalIdentifier = this.getSubstructuresByUri("g7:EXID", false);

        if(references || UIDs || externalIdentifier){
            return {
                "references": references?.map((ref) => {
                    return {
                        "reference": ref.lineVal || "",
                        "type": ref.getSubstructuresByUri("g7:TYPE",false)[0]?.lineVal || ""
                    }
                }) || "",
                "uniqueIdentifier": UIDs?.map((uid) => uid.lineVal),
                "externalIdentifier": externalIdentifier?.map((exid) => {
                    return {
                        "id": exid.lineVal || "",
                        "type": exid.getSubstructuresByUri("g7:EXID-TYPE",false)[0]?.lineVal || ""
                    }
                }) || ""
            }
        }

        return null;
    }

    // extracts details about an given individual thats associated with the calling structure
    extractAssociationStructure(struct){
        return {
             // if associatedStructure points no void, there is no Individual associated to the calling structure
            "associatedIndividual": struct.lineVal === "@VOID@" ? "unknown" : struct.datasetReference.getRecordByXref(struct.lineVal),
            "phrase": struct.getSubstructuresByUri("g7:PHRASE", false)[0]?.lineVal || "",
            "roleInSuperstructure": {
                "role": struct.getSubstructuresByUri("g7:ROLE", false)[0]?.lineVal || "",
                "phrase": struct.getSubstructuresByUri("g7:ROLE", false)[0]?.getSubstructuresByUri("g7:PHRASE",false)[0]?.lineVal || ""
            },
            "note": this.extractNoteStructures(struct) || ""
        }
    }



    


    

}