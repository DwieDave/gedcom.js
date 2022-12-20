const fs = require('fs/promises');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fsExists = require('fs.promises.exists');
const OSPath = require('path');
const nearley = require("nearley");
const {lineTypes, dataTypes, gedcomEnumTypes, continuationTypes} = require("../lib/Constants");

//TO-DO: fix cyclic dependency between NOTE_STRUCTURE and SOURCE_CITATION


class GrammarGenerator{
    // class constructor (don't call constructor directly - instead use build method)
    constructor(path, nearleyHeader){
        // path at which grammar is build
        this.path = path;

        // path of Dummy.ne file in which the grammars are temporarily assembled and compiled to parser
        this.dummyPath = OSPath.join(__dirname, "Dummy.ne")

        // header of .ne-files with imports and lexer definition; imported from NearleyHeader.ne
        this.nearleyHeader = nearleyHeader;

        // object notation of grammar rules for a whole Gedcom Dataset
        this.dataset = require("./DatasetGrammar.js");

        // object notation of grammar rules for a Gedcom Header Record
        this.headerRecord = require("./structures/HeaderRecordGrammar")

        this.records = [];
        for(const record of require("./structures/Records.js")){
            this.records.push(record);
        }

        // object notation of grammar rules for all Gedcom Substructures
        this.substructures = require("./structures/Substructures.js");

        // object notation of grammar rules for all Gedcom Substructures (low level structures that are used to build records and substructures)
        this.structureTypes = require("./structures/StructureTypes.js");

        // nearley-building constants
        this.ruleArrow = "\n\t->"
        this.rulePipe = "\n\t| "
        this.postprocessorLine = "\n\t\t{% (d) => postprocessor."
        this.idPostprocessor = "\n\t\t{%id%}"
        this.callLexer = "# call moo-lexer\n@lexer lexer\n\n"

    }

    // class method to build an instance of GrammarGenerator asynchronously 
    static async build(path){
        // read nearley header
        const nearleyHeader = await fs.readFile(OSPath.join(__dirname, "NearleyHeader.ne"), { encoding: 'utf8' });

        // return instance of GrammarGenerator 
        return new GrammarGenerator(path, nearleyHeader);
    }

    // build nearley grammar files on basis of the object notation of grammar rules for Gedcom Structures given in this instance
    async buildGrammar(){
        // create nearley folder if not exist
        if(!await fsExists(this.path + "nearley")){
            await fs.mkdir(this.path + "nearley")
        }

        // generate nearley-string with all rules for Gedcom StructureTypes and Substructures and save it as .ne-file
        await fs.writeFile(`${this.path}nearley/syntax/${this.structureTypes.grammarName}.ne`, this.generateRuleString(this.structureTypes.rules))
        await fs.writeFile(`${this.path}nearley/syntax/${this.substructures.grammarName}.ne`, this.generateRuleString(this.substructures.rules))

        // generate nearley-string with all rules for Gedcom Header Record and save it as .ne-file
        await fs.writeFile(`${this.path}nearley/${this.headerRecord.grammarName}.ne`, this.generateRuleString(this.headerRecord.rules))

        // generate nearley-string with all rules for Gedcom Records and save it as .ne-file
        for(const record of this.records){
            await fs.writeFile(`${this.path}nearley/${record.grammarName}.ne`, this.generateRuleString(record.rules))
        }

        // generate nearley-string with all rules for a Gedcom Dataset and save it as .ne-file
        await fs.writeFile(`${this.path}nearley/${this.dataset.grammarName}.ne`, this.generateRuleString(this.dataset.rules))

    }

    // reads all rules from given ruleDefinition, convert them to a nearley-conform rule string and return them as one composed nearley string
    generateRuleString(ruleDefinition){
        // string array with nearley rules
        const ruleArray = [];

        // convert ruleDefinition to nearley rules
        for(const rule of ruleDefinition){
            this.generateRule(rule).forEach(ele => {
                ruleArray.push(ele);
            })
        }

        // return rules as one string seperated with two newline characters
        return this.callLexer + ruleArray.join("\n\n");
    }
    
    // generate a nearley-conform rule string for the given struct
    generateRule(struct){
        // rule information of struct
        const uri = this.convertUri(struct.uri);
        const lineType = struct.lineType;
        let lineStrings = [];
        const levels = struct.level;

        for(const level of struct.level){
            let substructs = [];
            let checkCardinalityOf = {};

            // read cardinality and uri of substructs
            for(const [uri, cardinality] of Object.entries(struct.substructs)){
                // save substruct uri in substructs-array so it can be included in the nearley-rule-string
                substructs.push(uri);
                // cardinality check is only necessary for "0:1", "1:1" and "1:M"
                if(cardinality !== "0:M"){
                    checkCardinalityOf[`${level+1}_${this.convertUri(uri)}`] = cardinality;
                }
            }

            // string representation of nearley rule for given struct
            let lineString = `${level}_${uri}${this.ruleArrow} `;

            // given struct is a Gedcom Structure for a whole Dataset
            if(lineType === lineTypes.DATASET){
                // top-level input rule for a Gedcom Dataset with Header, Records and Trailer
                lineString += `%BOM:? ${level}_${this.convertUri(this.headerRecord.rules[0].uri)} RECORDS:* TRLR\n\n`;

                // add records Gedcom rule
                lineString += `RECORDS${this.ruleArrow} ${level}_${this.convertUri(substructs[0])}${this.idPostprocessor}`;
                for(let i=1; i<this.records.length; i++){
                    lineString += `${this.rulePipe} ${level}_${this.convertUri(substructs[i])}${this.idPostprocessor}`;
                }

                // add rule for Gedcom Trailer
                lineString += `\n\nTRLR${this.ruleArrow} "0" D "TRLR" EOL${this.postprocessorLine}createStructure({line: d, uri: "0_g7_record_TRLR",type: lineTypes.NO_XREF_NO_LINEVAL})%}`;
            
            // given struct is a Gedcom Substructure
            }else if(lineType === lineTypes.SUBSTRUCTURE){

                // add substructs to rule
                lineString += `${level}_${this.convertUri(substructs[0])}${this.idPostprocessor}`;
                for(let i=1; i<substructs.length; i++){
                    lineString += `${this.rulePipe} ${level}_${this.convertUri(substructs[i])}${this.idPostprocessor}`;
                }
            
            // given struct is a Gedcom Record or StructureType
            }else{
                const tag = struct.tag;
                const lineValType = struct.lineValType;
            
                let helperRuleName = "";

                // there has to be a helper-rule for substructs, if a structure has more than one substruct (line continuation inclusive)
                if(substructs.length > 0 || lineType === lineTypes.NO_XREF){
                    // example helperRuleName: "CORP_Substructs"
                    helperRuleName = uri.split("_");
                    helperRuleName.shift();
                    helperRuleName = helperRuleName.join("");

                    // add helper rule
                    lineString += `${level}_${helperRuleName}${this.idPostprocessor}`;

                    // add helper substructs
                    lineString += `${this.rulePipe} ${level}_${helperRuleName} ${level}_${helperRuleName}_Substructs:+`
                    lineString += `${this.postprocessorLine}addSubstructure({superstruct: d[0], substructs: d[1]})%}\n\n`

                    // create helper rule
                    lineString += `${level}_${helperRuleName}${this.ruleArrow}`;
                }
            
                // generate rule on basis of lineType
                switch(lineType){
                    // structure of the form: LEVEL D TAG EOL
                    case lineTypes.NO_XREF_NO_LINEVAL:
                    case lineTypes.HEADER:
                        lineString += `"${level}" D "${tag}" EOL`;
                        break;

                    // structure of the form: LEVEL D XREF D TAG EOL
                    case lineTypes.NO_LINEVAL:
                    case lineTypes.FAM_RECORD:
                    case lineTypes.INDI_RECORD:
                    case lineTypes.OBJE_RECORD:
                    case lineTypes.REPO_RECORD:
                    case lineTypes.SOUR_RECORD:
                    case lineTypes.SUBM_RECORD:
                        lineString += `"${level}" D Xref D "${tag}" EOL`;
                        break;

                    // structure of the form: LEVEL D TAG D LINEVAL EOL
                    case lineTypes.NO_XREF:
                        lineString += `"${level}" D "${tag}" (D ${lineValType}):? EOL`;

                        // structures with a line value can contain a line-continuation
                        substructs.push(continuationTypes[lineValType]);
                        break;
                    
                    // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
                    case lineTypes.SNOTE_RECORD:
                    default:
                        lineString += `"${level}" D Xref D "${tag}" (D ${lineValType}):? EOL`;
                            
                        
                }
                // add postprocessor to rule string
                lineString += `${this.postprocessorLine}createStructure({line: d`;
                lineString += `, uri: "${level}_${this.convertUri(uri)}"`;
                lineString += `, type: "${lineType}"`;
                lineString += `${struct.lineValType ? `, lineValType: "${lineValType}"`: ``}`;
                lineString += `${(lineValType && (lineValType === dataTypes.ListEnum || lineValType === dataTypes.Enum)) ? `, enumType: "${this.convertUri(struct.enumType)}"`: ``}`;
                lineString += `${(Object.entries(checkCardinalityOf).length !== 0) ? `, checkCardinalityOf: ${this.convertCheckCardinalityOf(checkCardinalityOf)}` : ``}})%}`;
                
                // generate rule for substructs 
                if(substructs.length > 0){
                    lineString += `\n\n${level}_${helperRuleName}_Substructs${this.ruleArrow} ${level+1}_${this.convertUri(substructs[0])}`
                    lineString += this.idPostprocessor;
                    
                    // add all remaining substructs with pipe
                    for(let i=1; i<substructs.length; i++){
                        lineString += `${this.rulePipe} ${level+1}_${this.convertUri(substructs[i])}`
                        lineString += this.idPostprocessor;
                    }
                } 
            }

            lineStrings.push(lineString);
        }
        
        
        return lineStrings;
    }

    // generate Nearley Parser for a whole Gedcom Dataset and all Gedcom Records
    async generateParser(){
        let syntaxNeFile = [];
        
        try{
            // open all nearley files inside directory "nearley/syntax"
            if(await fsExists(this.path + "nearley/syntax")){
                syntaxNeFile = await fs.readdir(this.path + "nearley/syntax");
                syntaxNeFile = syntaxNeFile.map(file => `syntax/${file}`)
            }
        }catch(e){
            console.log(e.message)
        }

        // build Gedcom Header Record Parser
        await this.buildParser(this.headerRecord.grammarName, syntaxNeFile);

        // build Parser for all other Gedcom Records
        for(const record of this.records){
            await this.buildParser(record.grammarName, syntaxNeFile);
        }

        // add all Gedcom Records to include statement for Gedcom Parser
        let gedcomInclude = syntaxNeFile;
        gedcomInclude.push(`${this.headerRecord.grammarName}.ne`)
        for(const record of this.records){
            gedcomInclude.push(`${record.grammarName}.ne`);
        }

        // build Gedcom Parser for a whole Gedcom Dataset
        await this.buildParser(this.dataset.grammarName, gedcomInclude);
        
        // clear dummy.ne file
        await fs.writeFile(this.dummyPath, "");
    }

    // build nearley-file with include statements and NearleyHeader inside of dummy.ne-file and compile it to a nearley parser
    async buildParser(fileName, include){
        // string representation of the grammar to be compiled
        let fileStr = ""; 
                
        // add given include statements
        for(const file of include){
            fileStr += `@include ".${this.path}nearley/${file}"\n`;
        }

        // add nearley header
        fileStr += this.nearleyHeader;

        // overwrite content of dummy-file
        await fs.writeFile(this.dummyPath, fileStr);

        // read grammar of given file
        const grammar = await fs.readFile(`${this.path}nearley/${fileName}.ne`, { encoding: 'utf8' });

        // append grammar to dummy-file
        fs.appendFile(this.dummyPath, grammar);

        // compile composed dummy.ne-file to nearley parser
        await exec(`npx nearleyc ${this.dummyPath} -o ${this.path}parser/${fileName}Parser.js`);
    }

    // convenience function to make gedcom uri's nearley-readable
    convertUri(uri){
        return uri.replaceAll(":", "_").replaceAll("-", "_")
    }
    
    // convenience function to convert checkCardinalityOf-attribute to appropriate nearley string
    convertCheckCardinalityOf(checkCardinalityOf){
        let str = "{";
        for(const [uri, cardinality] of Object.entries(checkCardinalityOf)){
            str += `"${uri}":"${cardinality}", `;
        }
        return str.slice(0,-2) + "}";
    }

    // function to test a given nearley grammar with given input
    static testGrammar(input, grammarPath){
        const Parser = new nearley.Parser(nearley.Grammar.fromCompiled(require(grammarPath)));
        try{
            console.log(`Try to parse:\n${input}`)
            Parser.feed(input);
            console.log("grammar correct!")
            
        }catch(e){
            console.log(e.message);
        } 
    }
}

async function generateGrammar(){
    console.log("Build GrammarGenerator");
    const grammarGenerator = await GrammarGenerator.build("./lib/grammar/");
    console.log("Build nearley grammar");
    await grammarGenerator.buildGrammar();
    console.log("Process finished");
}

async function generateGrammarAndParser(){
    console.log("Build GrammarGenerator");
    const grammarGenerator = await GrammarGenerator.build("./lib/grammar/");
    console.log("Build nearley grammar");
    await grammarGenerator.buildGrammar();
    console.log("Generate gedcom-parser");
    await grammarGenerator.generateParser();
    console.log("Process finished");
}

module.exports = {generateGrammar, generateGrammarAndParser}

generateGrammarAndParser();

