import { expect } from "chai";
import forEach from "mocha-each";
import fs from "fs/promises"
import { diffChars } from "diff";

import { GedcomParser } from "../lib/GedcomParser.js";
import Dataset from "../lib/Dataset.js";
import readGedFile from "../lib/util/readGedFile.js";
import Structure from "../lib/util/ExportGedcomStructureClasses.js"
import { GedcomSyntaxError } from "../lib/util/Errors.js";
import constants from "../lib/util/Constants.js";


describe('Test Structure Class', () => {
    const gedcomParser = new GedcomParser();
    let gedcomString = "";
    let dataset = null;

    before(async () => {
        // suppress log in before function
        console.log = function () {}
        // parse maximal gedcom example file
        gedcomString = await readGedFile("test/sampleData/ExampleFamilySearchGEDCOMFiles/maximal70_without_extensions.ged");
        dataset = gedcomParser.parseString(gedcomString);
    });

    // ===============================================================================================================================================
    // checkSyntax() method 
    describe('Test checkSyntax() method of record Structure-Classes with Maximal-Gedcom-File', () => {
        const records = [
            ["Family", ["F1", "F2"]], 
            ["Individual", ["I1", "I2", "I3", "I4"]], 
            ["Multimedia", ["O1", "O2"]], 
            ["Repository", ["R1", "R2"]], 
            ["SharedNote", ["N1", "N2"]], 
            ["Source", ["S1", "S2"]],
            ["Submitter", ["U1", "U2"]]
        ]
        
        forEach(records)
        .describe('Call checkSyntax() for %s Records', (recordName, xrefs) => {
            forEach(xrefs)
            .it('#%s', (xref) => {
                expect(() => dataset.getRecordByXref(xref).checkSyntax()).to.not.throw(GedcomSyntaxError);
            })
        })
    });

    // ===============================================================================================================================================
    // Find Substructures by TAG
    describe('Find Substructures by TAG in Dataset', () => {
        let gedcomString = "";
        let dataset = null;

        const searchForTag = [
            ["Individual", [
                ["NAME", "I1", true, 4],
                ["NAME", "I1", false, 4],
                ["TYPE", "I1", true, 2],
                ["TYPE", "I1", false, 0],
                ["PHRASE", "I1", true, 2],
                ["PHRASE", "I1", false, 0],
                ["SEX", "I1", true, 1],
                ["SEX", "I1", false, 1]
            ]],
        ]

        before(async () => {
            // suppress log in before function
            console.log = function () {}
            // parse maximal gedcom example file
            gedcomString = await readGedFile("test/sampleData/StructureTest/findStructures.ged");
            dataset = gedcomParser.parseString(gedcomString);
        });

        forEach(searchForTag)
        .describe('#%s Structure', (structureName, input) => {

            forEach(input)
            .it('Search for Tag "%s" in %s, recursive %s -> expect %s results', (tag, xref, recursive, count) => {
                const Individual = dataset.getRecordByXref(xref);
                expect(Individual.getSubstructuresByTag(tag, recursive)).to.have.lengthOf(count);
            })
        })
        
        
    });

    // ===============================================================================================================================================
    // Find Substructures by LINEVAL
    describe('Find Substructures by Lineval in Dataset', () => {
        let gedcomString = "";
        let dataset = null;

        const searchForLineVal = [
            ["LineVal doesn't occur", [
                ["Marius Mueller ", "I1", true, false, 0],
                ["Marius Mueller ", "I1", false, false, 0],
                ["Marius Mueller ", "I1", true, constants.dataTypes.PersonalName, 0],
                ["Marius Mueller ", "I1", false, constants.dataTypes.PersonalName, 0],
            ]],
            ["LineVal occurs one time", [
                ["Marius Mueller", "I1", true, false, 1],
                ["Marius Mueller", "I1", false, false, 1],
                ["Marius Mueller", "I1", true, constants.dataTypes.PersonalName, 1],
                ["Marius Mueller", "I1", false, constants.dataTypes.PersonalName, 1],
            ]],
            ["LineVal occurs multiple times", [
                ["Jule Mueller", "I1", true, false, 2],
                ["Jule Mueller", "I1", false, false, 2],
                ["Jule Mueller", "I1", true, constants.dataTypes.PersonalName, 2],
                ["Jule Mueller", "I1", false, constants.dataTypes.PersonalName, 2],
            ]],
            ["LineVal occurs on higher level", [
                ["Hallo Welt", "I1", true, false, 1],
                ["Hallo Welt", "I1", false, false, 0],
                ["Hallo Welt", "I1", true, constants.dataTypes.Text, 1],
                ["Hallo Welt", "I1", false, constants.dataTypes.Text, 0],
            ]],
            ["LineVal occurs multiple times, but with differen Datatypes", [
                ["M", "I1", true, false, 2],
                ["M", "I1", false, false, 1],
                ["M", "I1", true, constants.dataTypes.Text, 1],
                ["M", "I1", false, constants.dataTypes.Text, 0],
                ["M", "I1", true, constants.dataTypes.Enum, 1],
                ["M", "I1", false, constants.dataTypes.Enum, 1],
            ]],
            
           
        ]

        before(async () => {
            // suppress log in before function
            console.log = function () {}
            // parse maximal gedcom example file
            gedcomString = await readGedFile("test/sampleData/StructureTest/findStructures.ged");
            dataset = gedcomParser.parseString(gedcomString);
        });

        forEach(searchForLineVal)
        .describe('#%s', (structureName, input) => {

            forEach(input)
            .it('Search for LineVal "%s" in %s, recursive %s, dataType %s -> expect %s results', (tag, xref, recursive, dataType = false, count) => {
                const Individual = dataset.getRecordByXref(xref);
                expect(Individual.getSubstructuresByLineVal(tag, recursive, dataType)).to.have.lengthOf(count);
            })
        })
        
        
    });

    // ===============================================================================================================================================
    // TEST SETLINEVAL() METHOD
    describe('Test setLineVal() method', () => {

    })

    // ===============================================================================================================================================
    // TEST SETXREF() METHOD
    describe('Test setXref() method', () => {
        
    })

    // ===============================================================================================================================================
    // TEST ADDSUBSTRUCTURE METHOD
    describe('Test addSubstructure() method', () => {
        const gedcomParser = new GedcomParser();

        // Add single structure without substructs
        describe('Add single structure without substructs to Individual I1', () => {
            it('#g7:SEX added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const indi1 = dataset.getRecordByXref("I1");
                const newStr = "0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n1 SEX M\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n"
                let newStruct = {
                    uri: "g7:SEX",
                    lineVal: "M"
                }
                indi1.addSubstructure(newStruct)

                expect(dataset.toString()).to.equal(newStr);
            });
            it('#g7:INDI-NAME added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const indi1 = dataset.getRecordByXref("I1");
                const newStr = "0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n1 NAME Marius Mueller\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n"
                let newStruct = {
                    uri: "g7:INDI-NAME",
                    lineVal: "Marius Mueller"
                }
                indi1.addSubstructure(newStruct)

                expect(dataset.toString()).to.equal(newStr);
            });
        });

        // Add single structure with one substruct
        describe('Add single structure with one substruct to Individual I1', () => {
            it('#g7:INDI-NAME with g7:NAME-TYPE substruct added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const indi1 = dataset.getRecordByXref("I1");
                const newStr = "0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n1 NAME McMarius\n2 TYPE AKA\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n"
                let newIndiNameType = {
                    uri: "g7:NAME-TYPE",
                    lineVal: "AKA"
                }
                let newIndiName = {
                    uri: "g7:INDI-NAME",
                    lineVal: "McMarius",
                    substructs: [newIndiNameType]
                }
                indi1.addSubstructure(newIndiName)

                expect(dataset.toString()).to.equal(newStr);
            });
            it('#g7:ADOP with g7:ADOP-FAMC substruct added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const indi1 = dataset.getRecordByXref("I1");
                const newStr = "0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n1 ADOP Y\n2 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n"
                let newAdopFamc = {
                    uri: "g7:ADOP-FAMC",
                    lineVal: "@F1@"
                }
                let newAdop = {
                    uri: "g7:ADOP",
                    lineVal: "Y",
                    substructs: [newAdopFamc]
                }
                indi1.addSubstructure(newAdop)

                expect(dataset.toString()).to.equal(newStr);
            });
        });

        // Add single structure with multiple substructs
        describe('Add single structure with one substruct to Individual I1', () => {
            it('#g7:INDI-NAME with g7:NAME-TYPE (with g7:PHRASE), g7:NAME-TRAN (with g7:LANG) substructs added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const indi1 = dataset.getRecordByXref("I1");
                const newStr = "0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n1 NAME Thoriad\n2 TYPE AKA\n3 PHRASE He is also known as Thoriad\n2 TRAN CoolDude\n3 LANG en-US\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n"
                
                // third level
                let newPhrase = {
                    uri: "g7:PHRASE",
                    lineVal: "He is also known as Thoriad"
                }
                let newLang = {
                    uri: "g7:LANG",
                    lineVal: "en-US"
                }

                // second level
                let newIndiNameType = {
                    uri: "g7:NAME-TYPE",
                    lineVal: "AKA",
                    substructs: [newPhrase]
                }

                let newIndiNameTran = {
                    uri: "g7:NAME-TRAN",
                    lineVal: "CoolDude",
                    substructs: [newLang]
                }

                // first level
                let newIndiName = {
                    uri: "g7:INDI-NAME",
                    lineVal: "Thoriad",
                    substructs: [newIndiNameType, newIndiNameTran]
                }
                indi1.addSubstructure(newIndiName)

                expect(dataset.toString()).to.equal(newStr);
            });
        });

        // Add multiple structures without substructs
        describe('Add multiple structures without substructs to Individual I1', () => {
            it('#g7:SEX and g7:INDI-NAME added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const indi1 = dataset.getRecordByXref("I1");
                const newStr = "0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n1 SEX M\n1 NAME Marius Mueller\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n"
                
                let newSex = {
                    uri: "g7:SEX",
                    lineVal: "M"
                }
                let newName = {
                    uri: "g7:INDI-NAME",
                    lineVal: "Marius Mueller"
                }

                indi1.addSubstructure(newSex);
                indi1.addSubstructure(newName);

                expect(dataset.toString()).to.equal(newStr);
            });
        });


        // ===============================================================================================================================================
        // UNDEFINED URI
        // Add structures without substructs, but undefined URI
        describe('Add structures without substructs, but undefined URI', () => {
            describe('#g7:SEXY added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const strVal = dataset.toString();
                const indi1 = dataset.getRecordByXref("I1");
                
                let newSex = {
                    uri: "g7:SEXY",
                    lineVal: "M"
                }

                it('expect to throw Error', () => {
                    expect(() => indi1.addSubstructure(newSex)).to.throw(GedcomSyntaxError);
                });
                it('expect that dataset did NOT change', () => {
                    try{
                        indi1.addSubstructure(newSex);
                    }catch(e){}
                    expect(dataset.toString()).to.equal(strVal);
                });
            });
        
            describe('#g7:INDI-NAMES with Substruct g7:NAME-TYPE added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const strVal = dataset.toString();
                const indi1 = dataset.getRecordByXref("I1");
                let newIndiNameType = {
                    uri: "g7:NAME-TYPE",
                    lineVal: "AKA"
                }
                let newIndiName = {
                    uri: "g7:INDI-NAMES",
                    lineVal: "McMarius",
                    substructs: [newIndiNameType]
                }

                it('expect to throw Error', () => {
                    expect(() => indi1.addSubstructure(newIndiName)).to.throw(GedcomSyntaxError);
                });
                it('expect that dataset did NOT change', () => {
                    try{
                        indi1.addSubstructure(newIndiName);
                    }catch(e){}
                    expect(dataset.toString()).to.equal(strVal);
                });
            });

            describe('#g7:INDI-NAME with Substruct g7:NAME-TYPES added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const strVal = dataset.toString();
                const indi1 = dataset.getRecordByXref("I1");
                let newIndiNameType = {
                    uri: "g7:NAME-TYPES",
                    lineVal: "AKA"
                }
                let newIndiName = {
                    uri: "g7:INDI-NAME",
                    lineVal: "McMarius",
                    substructs: [newIndiNameType]
                }

                it('expect to throw Error', () => {
                    expect(() => indi1.addSubstructure(newIndiName)).to.throw(GedcomSyntaxError);
                });
                it('expect that dataset did NOT change', () => {
                    try{
                        indi1.addSubstructure(newIndiName);
                    }catch(e){}
                    expect(dataset.toString()).to.equal(strVal);
                });
            });

            describe('#g7:INDI-NAMES with Substruct g7:NAME-TYPES added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const strVal = dataset.toString();
                const indi1 = dataset.getRecordByXref("I1");
                let newIndiNameType = {
                    uri: "g7:NAME-TYPES",
                    lineVal: "AKA"
                }
                let newIndiName = {
                    uri: "g7:INDI-NAMES",
                    lineVal: "McMarius",
                    substructs: [newIndiNameType]
                }

                it('expect to throw Error', () => {
                    expect(() => indi1.addSubstructure(newIndiName)).to.throw(GedcomSyntaxError);
                });
                it('expect that dataset did NOT change', () => {
                    try{
                        indi1.addSubstructure(newIndiName);
                    }catch(e){}
                    expect(dataset.toString()).to.equal(strVal);
                });
            });
        });

        // ===============================================================================================================================================
        // ADD STRUCTURE THAT IS NOT A VALID SUBSTRUCTURE
        describe('Add structures that is not a valid substructure without substructs', () => {
            describe('#g7:SEX added to Family F1', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const strVal = dataset.toString();
                const fam1 = dataset.getRecordByXref("F1");
                
                let newSex = {
                    uri: "g7:SEX",
                    lineVal: "M"
                }

                it('expect to throw Error', () => {
                    expect(() => fam1.addSubstructure(newSex)).to.throw(GedcomSyntaxError);
                });
                it('expect that dataset did NOT change', () => {
                    try{
                        fam1.addSubstructure(newSex);
                    }catch(e){}
                    expect(dataset.toString()).to.equal(strVal);
                });
            });
        });


        // ===============================================================================================================================================
        // SYNTAX ERROR IN LINEVAL
        describe('Add structures without substructs, but syntax error in lineVal', () => {
            describe('#g7:SEX with wrong Enum-Value (Male) added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const strVal = dataset.toString();
                const indi1 = dataset.getRecordByXref("I1");
                
                let newSex = {
                    uri: "g7:SEX",
                    lineVal: "Male"
                }

                it('expect to throw Error', () => {
                    expect(() => indi1.addSubstructure(newSex)).to.throw(GedcomSyntaxError);
                });
                it('expect that dataset did NOT change', () => {
                    try{
                        indi1.addSubstructure(newSex);
                    }catch(e){}
                    expect(dataset.toString()).to.equal(strVal);
                });
            });
        });

        describe('Add structures with substructs, but syntax error in lineVal', () => {
            describe('#g7:INDI-NAME with substruct g7:NAME-TYPE with wrong Enum-Value (AKAxx) added', () => {
                const dataset = gedcomParser.parseString("0 HEAD\n1 GEDC\n2 VERS 7.0\n0 @F1@ FAM\n1 HUSB @I1@\n1 CHIL @I1@\n0 @I1@ INDI\n1 FAMC @F1@\n0 @I2@ INDI\n1 SEX M\n1 FAMC @F1@\n0 TRLR\n");
                const strVal = dataset.toString();
                const indi1 = dataset.getRecordByXref("I1");
                
                let newIndiNameType = {
                    uri: "g7:NAME-TYPE",
                    lineVal: "AKAxx"
                }
                let newIndiName = {
                    uri: "g7:INDI-NAME",
                    lineVal: "McMarius",
                    substructs: [newIndiNameType]
                }

                it('expect to throw Error', () => {
                    expect(() => indi1.addSubstructure(newIndiName)).to.throw(GedcomSyntaxError);
                });
                it('expect that dataset did NOT change', () => {
                    try{
                        indi1.addSubstructure(newIndiName);
                    }catch(e){}
                    expect(dataset.toString()).to.equal(strVal);
                });
            });
        });
    });
});
