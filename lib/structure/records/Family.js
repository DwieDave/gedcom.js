const Record = require('../Record');
const grammar = require('../../grammar/parser/FamilyParser.js');

// The FAM record was originally structured to represent families where a male HUSB (husband or father) and female WIFE (wife or mother)
// produce CHIL (children). The FAM record may also be used for cultural parallels to this, including nuclear families, marriage,
// cohabitation, fostering, adoption, and so on, regardless of the gender of the partners
module.exports = class Family extends Record {
  // ES2015 provides a default class constructor if one is not specified
  //  -> As such, it is unnecessary to provide an empty constructor or one that simply delegates into its parent class

  // call checkSyntax()-Method of superclass with family grammar
  checkSyntax () {
    super.checkSyntax(grammar, 'Family', this.xref);
  }

  // ============================================================================================================================
  // FAMILY_ATTRIBUTE_STRUCTURE
  // ============================================================================================================================

  // returns information about the numberOfChildren-Structure of this family
  // TO-DO: Check if number of children (NCHI) and actual number of CHIL-Structures in Record must match
  getChildrenInformation () {
    const famNCHI = this.getSubstructuresByUri('g7:FAM-NCHI', false)[0];

    if (famNCHI) {
      return {
        numberOfChildren: Number.parseInt(famNCHI.lineVal) || null,
        type: famNCHI.getSubstructuresByUri('g7:TYPE', false)[0]?.lineVal || null,
        parentInformation: this.extractFamilyEventDetail(famNCHI)?.parentInformation || null,
        eventDetails: this.extractFamilyEventDetail(famNCHI)?.eventDetails || null
      };
    }

    return null;
  }

  // Where possible, the residence should be identified in PLAC and/or ADDR substructures of the RESI structure.
  // The payload text should not duplicate PLAC or ADDR information, but may be used for residence information that cannot be expressed by those structures
  getFamilyResidence () {
    const famResidence = this.getSubstructuresByUri('g7:FAM-RESI', false)[0];

    if (famResidence) {
      return {
        familyResidence: famResidence.lineVal || null,
        type: famResidence.getSubstructuresByUri('g7:TYPE', false)[0]?.lineVal || null,
        parentInformation: this.extractFamilyEventDetail(famResidence)?.parentInformation || null,
        eventDetails: this.extractFamilyEventDetail(famResidence)?.eventDetails || null
      };
    }

    return null;
  }

  // A noteworthy attribute or fact concerning a family
  //  -> If a specific attribute type exists, it should be used instead of a generic FACT structure
  getFamilyFacts () {
    // get all facts about this family
    const famFacts = this.getSubstructuresByUri('g7:FAM-FACT', false);

    // if there are facts about this family, return them with required TYPE and potentional FAMILY_EVENT_DETAIL
    if (famFacts.length !== 0) {
      return famFacts.map((fact) => {
        const type = fact.getSubstructuresByUri('g7:TYPE', false)[0];
        const familyEventDetail = this.extractFamilyEventDetail(fact);

        return {
          fact: fact.lineVal,
          type: type?.lineVal,
          parentInformation: familyEventDetail?.parentInformation || null,
          eventDetails: familyEventDetail?.eventDetails || null
        };
      });
    }

    return null;
  }

  // ============================================================================================================================
  // FAMILY_EVENT_STRUCTURE
  // ============================================================================================================================

  // An event: a noteworthy happening related to an individual or family
  //  -> If a specific event type exists, it should be used instead of a generic EVEN structure
  //  -> Each EVEN must be classified by a subordinate use of the TYPE tag and may be further described in the structure’s payload
  getFamilyEvents () {
    const familyEvents = this.getSubstructuresByUri('g7:FAM-EVEN', false);
    return this.eventStructureToJson(familyEvents, 'events');
  }

  // census of this family
  getFamilyCensuses () {
    const familyCensuses = this.getSubstructuresByUri('g7:FAM-CENS', false);
    return this.eventStructureToJson(familyCensuses, 'censuses');
  }

  // returns all information concerning marriage in this family
  getMarriageInformation () {
    // Annulment of a marriage
    const annulments = this.getSubstructuresByUri('g7:ANUL', false);

    // Divorce of a marriage
    const divorces = this.getSubstructuresByUri('g7:DIV', false);

    // Divorce filings of a marriage
    const divorceFilings = this.getSubstructuresByUri('g7:DIVF', false);

    // Engagements to a marriage
    const engagements = this.getSubstructuresByUri('g7:ENGA', false);

    // Marriage banns -> public announcement
    const marriageBans = this.getSubstructuresByUri('g7:MARB', false);

    // Marriage contracts
    const marriageContracts = this.getSubstructuresByUri('g7:MARC', false);

    // Marriage licence
    const marriageLicences = this.getSubstructuresByUri('g7:MARL', false);

    // Marriage
    const marriages = this.getSubstructuresByUri('g7:MARR', false);

    // Marriage settelment
    const marriageSettelments = this.getSubstructuresByUri('g7:MARS', false);

    return {
      annulment: this.eventStructureToJson(annulments, 'annulments') || null,
      divorce: this.eventStructureToJson(divorces, 'divorces') || null,
      divorceFiling: this.eventStructureToJson(divorceFilings, 'divorceFilings') || null,
      engagement: this.eventStructureToJson(engagements, 'engagements') || null,
      marriageBan: this.eventStructureToJson(marriageBans, 'marriageBans') || null,
      marriageContract: this.eventStructureToJson(marriageContracts, 'marriageContracts') || null,
      marriageLicence: this.eventStructureToJson(marriageLicences, 'marriageLicences') || null,
      marriages: this.eventStructureToJson(marriages, 'marriages') || null,
      marriageSettelment: this.eventStructureToJson(marriageSettelments, 'marriageSettelments') || null
    };
  }

  // ============================================================================================================================
  // INDIVIDUALS ASSOCIATED WITH THIS FAMILY
  // ============================================================================================================================

  // a partner in a FAM record
  getHusband () {
    // get family husband from this family record
    const famHusb = this.getSubstructuresByUri('g7:FAM-HUSB', false)[0];

    // if family husband is given, return corresponding Individual-Object and potentional Phrase
    if (famHusb) {
      const phrase = famHusb.getSubstructuresByUri('g7:PHRASE', false)[0];
      return {
        husband: this.datasetReference?.getRecordByXref(famHusb.lineVal) || null,
        phrase: phrase?.lineVal || null
      };
    }

    return null;
  }

  // a partner in a FAM record
  getWife () {
    // get family husband from this family record
    const famWife = this.getSubstructuresByUri('g7:FAM-WIFE', false)[0];

    // if family husband is given, return corresponding Individual-Object and potentional Phrase
    if (famWife) {
      const phrase = famWife.getSubstructuresByUri('g7:PHRASE', false)[0];
      return {
        wife: this.datasetReference?.getRecordByXref(famWife.lineVal) || null,
        phrase: phrase?.lineVal || null
      };
    }

    return null;
  }

  // the child in a family, whether biological, adopted, foster, sealed, or other relationship
  getChildren () {
    // get all children of this family
    const famChildren = this.getSubstructuresByUri('g7:CHIL', false);

    // if there are children in this family, return corresponding Individual-Object and potentional Phrase
    if (famChildren.length !== 0) {
      return famChildren.map((childStruct) => {
        const phrase = childStruct.getSubstructuresByUri('g7:PHRASE', false)[0];

        // return corresponding Individual-Object and potentional Phrase
        return {
          child: this.datasetReference?.getRecordByXref(childStruct?.lineVal) || null,
          phrase: phrase?.lineVal || null
        };
      });
    }

    return null;
  }

  // get all members of this family
  //  -> Husband, Wife, Children
  getFamilyMembers () {
    return {
      husband: this.getHusband(),
      wife: this.getWife(),
      children: this.getChildren()
    };
  }

  // An individual associated with this family
  //  -> The nature of the association is indicated in the ROLE substructure (1:1)
  getAssociatedIndividuals () {
    const associatedIndividuals = this.getSubstructuresByUri('g7:ASSO', false);

    if (associatedIndividuals) {
      return associatedIndividuals.map((asso) => this.extractAssociationStructure(asso));
    }

    return null;
  }

  // ============================================================================================================================
  // META-DATA
  // ============================================================================================================================

  // A contributor of information in the substructure
  //  -> This is metadata about the structure itself, not data about its subject
  getSubmitter () {
    const submitter = this.getSubstructuresByUri('g7:FAM-HUSB', false);

    if (submitter) {
      return submitter.map(() => this.datasetReference?.getRecordByXref(submitter.lineVal));
    }

    return null;
  }

  // provided identifier for for this family
  getIdentifiers () {
    return this.extractIdentifierStructures();
  }

  // The date of the most recent modification of the superstructure, optionally with notes about that modification
  getChangeDate () {
    const changeDateStructure = this.getSubstructuresByUri('g7:CHAN', false)[0];

    if (changeDateStructure) {
      return {
        changeDate: changeDateStructure.getSubstructuresByUri('g7:DATE-exact', false)[0]?.lineVal || null,
        time: changeDateStructure.getSubstructuresByUri('g7:DATE-exact', false)[0]?.getSubstructuresByUri('g7:TIME', false)[0].lineVal || null,
        note: this.extractNoteStructures(changeDateStructure) || null
      };
    }

    return null;
  }

  // The date of the initial creation of the superstructure
  //  -> Because this refers to the initial creation, it should not be modified after the structure is created
  getCreationDate () {
    const creationDateStructure = this.getSubstructuresByUri('g7:CREA', false)[0];

    if (creationDateStructure) {
      return {
        creationDate: creationDateStructure.getSubstructuresByUri('g7:DATE-exact', false)[0]?.lineVal || null,
        time: creationDateStructure.getSubstructuresByUri('g7:DATE-exact', false)[0]?.getSubstructuresByUri('g7:TIME', false)[0].lineVal || null
      };
    }

    return null;
  }

  // ============================================================================================================================
  // HELPERS
  // ============================================================================================================================

  // extract family events
  extractFamilyEventDetail (struct) {
    // A container for information relevant to the subject of the superstructure specific to the individual described by the associated
    // FAM’s HUSB substructure and FAM's WIFE substructure respectively
    const husb = struct.getSubstructuresByUri('g7:HUSB', false)[0];
    const wife = struct.getSubstructuresByUri('g7:WIFE', false)[0];

    let parentInformation = null;
    if (husb || wife) {
      parentInformation = {
        husbandAge: husb?.getSubstructuresByUri('g7:AGE', false)[0]?.lineVal || null,
        husbandPhrase: husb?.getSubstructuresByUri('g7:AGE', false)[0]?.getSubstructuresByUri('g7:PHRASE', false)[0]?.lineVal || null,
        wifeAge: wife?.getSubstructuresByUri('g7:AGE', false)[0]?.lineVal || null,
        wifePhrase: wife?.getSubstructuresByUri('g7:AGE', false)[0]?.getSubstructuresByUri('g7:PHRASE', false)[0]?.lineVal || null
      };
    }

    // Substructures that may be shared by most individual and family events and attributes
    const eventDetails = this.extractEventDetail(struct);

    if (parentInformation || eventDetails) {
      return {
        parentInformation: parentInformation || null,
        eventDetails: eventDetails || null
      };
    }

    return null;
  }

  // Extracts LineValue, Type and FAMILY_EVENT_DETAIL of given structure
  eventStructureToJson (structArray, propertyName) {
    if (structArray.length !== 0) {
      return structArray.map((struct) => {
        const type = struct.getSubstructuresByUri('g7:TYPE', false)[0];
        const familyEventDetail = this.extractFamilyEventDetail(struct);

        if (familyEventDetail || type) {
          return {
            type: type?.lineVal || null,
            parentInformation: familyEventDetail?.parentInformation || null,
            eventDetails: familyEventDetail?.eventDetails || null
          };
        }

        // if no event information is given, we either just know that marriage took place or have no information
        const eventTookPlace = {};
        eventTookPlace[`${propertyName}TookPlace`] = struct.lineVal ? true : 'unknown';
        return eventTookPlace;
      });
    }

    return null;
  }
};
