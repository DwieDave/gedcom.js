// The individual record is a compilation of facts or hypothesized facts about an individual.
// These facts may come from multiple sources.

import { Structure } from "../Structure.mjs";

export class Individual extends Structure  {
    constructor(level, xref, tag, lineValue) {
        super(level,xref,tag,lineValue);
    }

}