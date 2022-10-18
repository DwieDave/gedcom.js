// The FAM record was originally structured to represent families where a male HUSB (husband or father) and female WIFE (wife or mother) 
// produce CHIL (children). The FAM record may also be used for cultural parallels to this, including nuclear families, marriage, 
// cohabitation, fostering, adoption, and so on, regardless of the gender of the partners

import { Structure } from "../Structure.mjs";

export class Family extends Structure  {
    constructor(line) {
        super(line);
    }

}