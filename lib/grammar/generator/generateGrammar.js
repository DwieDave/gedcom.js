const fs = require('fs/promises');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fsExists = require('fs.promises.exists');
const nearley = require("nearley");
const {lineTypes, dataTypes} = require("../../Constants.js");
//const gedcomGrammar = require("../parser/rules.js");


class GrammarGenerator{
    constructor(path, nearleyHeader){
        // path at which grammar is build
        this.path = path;

        // header of .ne-files with include statements, imports and lexer definition
        // imported from NearleyHeader.ne
        this.nearleyHeader = nearleyHeader;

        // Header structure of a gedcom dataset
        this.gedcomHeader = require("./records/GedcomHeader"),

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
        await fs.writeFile(`${this.path}nearley/${this.structureTypes.grammarName}.ne`, this.generateRuleString(this.structureTypes.rules))
        await fs.writeFile(`${this.path}nearley/${this.substructures.grammarName}.ne`, this.generateRuleString(this.substructures.rules))

        for(const record of this.records){
            await fs.writeFile(`${this.path}nearley/${record.grammarName}.ne`, this.generateRuleString(record.rules))
        }
    }

    generateRuleString(ruleDefinition, include = false){
        let ruleStr = "";
        if(include){
            for(const name of include){
                ruleStr += `@include "./${name}.ne"\n`
            }
            ruleStr += "\n"
            
        }

        // string array with nearley rules
        const ruleArray = [];
        // convert ruleDefinition to nearley rules
        for(const rule of ruleDefinition){
            ruleArray.push(this.generateRule(rule));
        }

        // return rules as one string
        return ruleStr + ruleArray.join("\n\n");
    }
    
    generateRule(struct){
        // rule information
        const uri = this.convertUri(struct.uri);
        const tag = struct.tag;
        const lineType = struct.lineType;
        const lineValType = struct.lineValType;
        const checkCardinalityOf = struct.checkCardinalityOf;

        // string representation of nearley rule for given struct
        let lineString = "";
        
        // name of rule
        lineString += uri;
    
        // generate rule on basis of lineType
        switch(lineType){
            // Structure of the form: LEVEL D TAG EOL
            case lineTypes.NO_XREF_NO_LINEVAL:
            // Header
            case lineTypes.HEADER:
                lineString += `${this.ruleArrow} Level D "${tag}" EOL`;
                break;

            // Structure of the form: LEVEL D XREF D TAG EOL
            case lineTypes.NO_LINEVAL:
            case lineTypes.FAM_RECORD:
            case lineTypes.INDI_RECORD:
                lineString += `${this.ruleArrow} Level D %Xref D "${tag}" EOL`;
                break;

            // Structure of the form: LEVEL D TAG D LINEVAL EOL
            case lineTypes.NO_XREF:
                lineString += `${this.ruleArrow} Level D "${tag}" D ${lineValType} EOL`;
                break;
            
            // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
            default:
                lineString += `${this.ruleArrow} Level D %Xref D "${tag}" D ${lineValType} EOL`;
        }
        // add postprocessor
        lineString += `${this.postprocessorLine}createStructure({line: d, type: "${lineType}"${checkCardinalityOf ? `, checkCardinalityOf: ${this.convertCheckCardinalityOf(checkCardinalityOf)}` : ``}})%}`
    
        // add optional substructs
        for(const sub of struct.substructs){
            // generate rule
            lineString += `${this.rulePipe} ${uri} ${this.convertUri(sub)}`
    
            // add postprocessor
            lineString += `${this.postprocessorLine}addSubstructure({superstruct: d[0], substructs: d[1]})%}`
        }
        return lineString;
    }

    async generateParser(){
        let neFiles = [];
        // open all nearley files of directory "nearley"
        if(await fsExists(this.path + "nearley")){
            try{
                neFiles = await fs.readdir(this.path + "nearley")
            }catch(e){
                console.log(e.message)
            }
            
        }else{
            throw new Error("There are no nearley files generated yet!");
        }
        
        // compile copy of nearleyHeader.ne and appended grammar
        for(const file of neFiles){
            const fileName = file.split(".");
            // check if file is of type "fileName.ne"
            if(fileName.length === 2 && fileName[1] === "ne"){
                await exec(`npx nearleyc ${this.path}nearley/${file} -o ${this.path}parser/${fileName[0]}Parser.js`);
            }
            
        }
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

async function main(){
    console.log("Build GrammarGenerator");
    const grammarGenerator = await GrammarGenerator.build("./lib/grammar/");
    console.log("Build nearley grammar");
    await grammarGenerator.buildGrammar();
    console.log("Generate gedcom-parser");
    await grammarGenerator.generateParser();
    console.log("Process finished");
    //grammarGenerator.testGrammar("1 @I1@ HUSB\n2 PHRASE schoenes haus\n", "../parser/FamilyParser.js");
}
main();

