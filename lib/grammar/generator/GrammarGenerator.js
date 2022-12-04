const fs = require('fs/promises');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fsExists = require('fs.promises.exists');
const nearley = require("nearley");
const {lineTypes, dataTypes} = require("../../Constants.js");
//const gedcomGrammar = require("../parser/rules.js");

// TO-DO: add support for SUBSTRUCTURES (name is not starting with g7)

class GrammarGenerator{
    constructor(path, nearleyHeader){
        // path at which grammar is build
        this.path = path;
        this.dummyPath = this.path + "generator/Dummy.ne"

        // header of .ne-files with include statements, imports and lexer definition
        // imported from NearleyHeader.ne
        this.nearleyHeader = nearleyHeader;

        // 
        this.gedcom = require("./Gedcom.js");

        // Header structure of a gedcom dataset
        this.headerRecord = require("./records/HeaderRecord")

        // gedcom records that build a dataset
        this.records = [
            require("./records/FamilyRecord.js"),
            require("./records/IndividualRecord.js"),
            require("./records/MultimediaRecord.js"),
            require("./records/RepositoryRecord.js"),
            require("./records/SharedNoteRecord.js"),
            require("./records/SourceRecord.js"),
            require("./records/SubmitterRecord.js")
        ]

        // structures composed of structureTypes
        this.substructures = require("./structures/Substructures.js");

        // low level structures that are used to build records and substructures
        this.structureTypes = require("./structures/StructureTypes.js");

        // nearley-building constants
        this.ruleArrow = "\n\t->"
        this.rulePipe = "\n\t| "
        this.postprocessorLine = "\n\t\t{% (d) => postprocessor."
        this.idPostprocessor = "\n\t\t{%id%}"
        this.callLexer = "# call moo-lexer\n@lexer lexer\n\n"

    }

    static async build(path){
        // read nearley header
        const nearleyHeader = await fs.readFile(path + "generator/NearleyHeader.ne", { encoding: 'utf8' });

        // return instance of GrammarGenerator 
        return new GrammarGenerator(path, nearleyHeader);
    }

    async buildGrammar(){
        // create nearley folder if not exist
        if(!await fsExists(this.path + "nearley")){
            await fs.mkdir(this.path + "nearley")
        }

        // generate nearley-string with all rules from rule definition
        // and save nearley-string as .ne-file
        await fs.writeFile(`${this.path}nearley/syntax/${this.structureTypes.grammarName}.ne`, this.generateRuleString(this.structureTypes.rules))
        await fs.writeFile(`${this.path}nearley/syntax/${this.substructures.grammarName}.ne`, this.generateRuleString(this.substructures.rules))

        for(const record of this.records){
            await fs.writeFile(`${this.path}nearley/${record.grammarName}.ne`, this.generateRuleString(record.rules))
        }

        // generate Gedcom Header
        await fs.writeFile(`${this.path}nearley/${this.headerRecord.grammarName}.ne`, this.generateRuleString(this.headerRecord.rules))

        // generate Gedcom
        await fs.writeFile(`${this.path}nearley/${this.gedcom.grammarName}.ne`, this.generateRuleString(this.gedcom.rules))
    }

    generateRuleString(ruleDefinition){
        // string array with nearley rules
        const ruleArray = [];
        // convert ruleDefinition to nearley rules
        for(const rule of ruleDefinition){
            ruleArray.push(this.generateRule(rule));
        }

        // return rules as one string
        return this.callLexer + ruleArray.join("\n\n");
    }
    
    generateRule(struct){
        // rule information
        const uri = this.convertUri(struct.uri);
        const lineType = struct.lineType;
        const checkCardinalityOf = struct.checkCardinalityOf;
        const substructs = struct.substructs;

        // string representation of nearley rule for given struct
        let lineString = "";
        lineString += `${uri}${this.ruleArrow} `;

        if(lineType === lineTypes.SUBSTRUCTURE){
            // name of rule
            lineString += this.convertUri(substructs[0]) + this.idPostprocessor;

            for(let i=1; i<substructs.length; i++){
                lineString += this.rulePipe + this.convertUri(substructs[i]) + this.idPostprocessor;
            }
        }else if(lineType === lineTypes.GEDCOM){
            
            lineString += `${this.convertUri(this.headerRecord.rules[0].uri)} RECORDS:* TRLR\n\n`;
            lineString += `RECORDS${this.ruleArrow} ${this.convertUri(substructs[0])}${this.idPostprocessor}`;

            for(let i=1; i<this.records.length; i++){
                lineString += `${this.rulePipe} ${this.convertUri(substructs[i])}${this.idPostprocessor}`;
            }

            lineString += `\n\nTRLR${this.ruleArrow} Level D "TRLR" EOL${this.postprocessorLine}createStructure({line: d, type: lineTypes.NO_XREF_NO_LINEVAL})%}`;
        }else{
            const tag = struct.tag;
            const lineValType = struct.lineValType;
        
            let helperRuleName = "";

            // structure has more than one substructure
            if(substructs.length > 1){
                helperRuleName = uri.split("_");
                helperRuleName.shift();
                helperRuleName = helperRuleName.join("");

                // add helper rule
                lineString += helperRuleName + this.idPostprocessor;

                // add helper substructs
                lineString += `${this.rulePipe} ${helperRuleName} ${helperRuleName}Substructs:+`
                lineString += `${this.postprocessorLine}addSubstructure({superstruct: d[0], substructs: d[1]})%}\n\n`

                // create helper rule
                lineString += helperRuleName + this.ruleArrow;
            }
        
            // generate rule on basis of lineType
            switch(lineType){
                // Structure of the form: LEVEL D TAG EOL
                case lineTypes.NO_XREF_NO_LINEVAL:
                // Header
                case lineTypes.HEADER:
                    lineString += `Level D "${tag}" EOL`;
                    break;

                // Structure of the form: LEVEL D XREF D TAG EOL
                case lineTypes.NO_LINEVAL:
                case lineTypes.FAM_RECORD:
                case lineTypes.INDI_RECORD:
                    lineString += `Level D %Xref D "${tag}" EOL`;
                    break;

                // Structure of the form: LEVEL D TAG D LINEVAL EOL
                case lineTypes.NO_XREF:
                    lineString += `Level D "${tag}" D ${lineValType} EOL`;
                    break;
                
                // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
                default:
                    lineString += `Level D %Xref D "${tag}" D ${lineValType} EOL`;
            }
            // add postprocessor
            lineString += `${this.postprocessorLine}createStructure({line: d, type: "${lineType}"${checkCardinalityOf ? `, checkCardinalityOf: ${this.convertCheckCardinalityOf(checkCardinalityOf)}` : ``}})%}`
        
            // structure has more than one substructure
            if(substructs.length > 1){
                lineString += `\n\n${helperRuleName}Substructs${this.ruleArrow} ${this.convertUri(substructs[0])}`
                lineString += this.idPostprocessor;
                
                // add all remaining substructs with pipe
                for(let i=1; i<substructs.length; i++){
                    lineString += `${this.rulePipe} ${this.convertUri(substructs[i])}`
                    lineString += this.idPostprocessor;
                }
            }else if(substructs.length === 1){
                // generate rule
                lineString += `${this.rulePipe} ${uri} ${this.convertUri(substructs[0])}`
                // add postprocessor
                lineString += `${this.postprocessorLine}addSubstructure({superstruct: d[0], substructs: d[1]})%}`
            }
        }
        
        return lineString;
    }

    async generateParser(){
        let syntaxNeFile = [];
        // open all nearley files of directory "nearley/syntax"
        try{
            if(await fsExists(this.path + "nearley/syntax")){
                syntaxNeFile = await fs.readdir(this.path + "nearley/syntax");
                syntaxNeFile = syntaxNeFile.map(file => `syntax/${file}`)
            }
        }catch(e){
            console.log(e.message)
        }

        // Header Record Parser
        await this.buildParser(this.headerRecord.grammarName, syntaxNeFile);

        // Parser for records
        for(const record of this.records){
            await this.buildParser(record.grammarName, syntaxNeFile);
        }

        // Gedcom Parser
        let gedcomInclude = syntaxNeFile;
        gedcomInclude.push(`${this.headerRecord.grammarName}.ne`)
        for(const record of this.records){
            gedcomInclude.push(`${record.grammarName}.ne`);
        }
        await this.buildParser(this.gedcom.grammarName, gedcomInclude);
    }

    async buildParser(fileName, include){
        // build .ne-file with include statements and NearleyHeader inside of dummy.ne-file
        let fileStr = ""; 
                
        // add include statements
        for(const file of include){
            fileStr += `@include "../nearley/${file}"\n`;
        }

        // add nearley header
        fileStr += this.nearleyHeader;

        // overwrite content of dummy-file
        await fs.writeFile(this.dummyPath, fileStr);

        // read grammar of given file
        const grammar = await fs.readFile(`${this.path}nearley/${fileName}.ne`, { encoding: 'utf8' });

        // append grammar of current file to dummy-file
        fs.appendFile(this.dummyPath, grammar);

        // compile dummy .ne-file
        if(fileName === "Gedcom"){
            await fs.writeFile("./gedcomTest.ne", fileStr+grammar);
        }
        
        await exec(`npx nearleyc ${this.dummyPath} -o ${this.path}parser/${fileName}Parser.js`);
    }

    convertUri(uri){
        return uri.replace(":", "_").replace("-", "_")
    }
    
    convertCheckCardinalityOf(checkCardinalityOf){
        let str = "{";
        for(const [tag, cardinality] of Object.entries(checkCardinalityOf)){
            str += `${tag}:"${cardinality}", `;
        }
        return str.slice(0,-2) + "}";
    }

    testGrammar(input, grammarPath){
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
    grammarGenerator.testGrammar("0 @F1@ FAM\n1 HUSB @I1@\n2 PHRASE schoenes haus\n", "../parser/FamilyParser.js");
}

module.exports = {generateGrammar, generateGrammarAndParser}

generateGrammarAndParser();

