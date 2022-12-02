const fs = require('fs/promises');
const {lineTypes, dataTypes} = require("../Constants.js");


const structureTypes = [
    {
        uri: "g7:FAM-HUSB",
        lineType: lineTypes.NO_LINEVAL,
        tag: "HUSB",
        substructs: ["g7:PHRASE"],
        checkCardinalityOf: {PHRASE:"0:1"}
    },
    {
        uri: "g7:PHRASE",
        lineType: lineTypes.NO_XREF,
        lineValType: dataTypes.Text,
        tag: "PHRASE",
        substructs: []
    }
]
class GrammarGenerator{
    constructor(path){
        // path at which grammar is build
        this.path = path;
        this.ruleArrow = "\n\t->"
        this.rulePipe = "\n\t| "
        this.postprocessorLine = "\n\t\t{% (d) => postprocessor."
    }

    async buildGrammar(structureDefinition){
        const ruleString = this.generateRuleString(structureDefinition);
        await fs.writeFile(this.path + "rules.ne", ruleString)
    }

    

    generateRuleString(structureDefinition){
        const ruleArray = [];
        for(const def of structureDefinition){
            ruleArray.push(this.generateRule(def));
        }
        return ruleArray.join("\n\n");
    }
    
    generateRule(struct){
        let lineString = "";
        const uri = this.convertUri(struct.uri);
        const tag = struct.tag;
        const lineType = struct.lineType;
        const lineValType = struct.lineValType;
        const checkCardinalityOf = struct.checkCardinalityOf;
        
        // name of rule
        lineString += uri;
    
        // generate rule on basis of lineType
        switch(lineType){
            // Structure of the form: LEVEL D TAG EOL
            case lineTypes.NO_XREF_NO_LINEVAL:
                // Header
                case lineTypes.HEADER:
                    lineObject = {"level": line[0], "xref": "", "tag": line[2], "lineVal": ""}
                    break;
    
                // Structure of the form: LEVEL D XREF D TAG EOL
                case lineTypes.NO_LINEVAL:
                case lineTypes.FAM_RECORD:
                case lineTypes.INDI_RECORD:
                    lineString += `${this.ruleArrow} Level D %Xref "${tag}" EOL`;
                    break;
    
                // Structure of the form: LEVEL D TAG D LINEVAL EOL
                case lineTypes.NO_XREF:
                    lineString += `${this.ruleArrow} Level D "${tag}" ${lineValType} EOL`;
                    break;
                
                // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
                default:
                    lineString += `${this.ruleArrow} Level D %Xref "${tag}" ${lineValType} EOL`;
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
}



async function main(){
    const grammarGenerator = new GrammarGenerator("./lib/newGrammar/");
    await grammarGenerator.buildGrammar(structureTypes)

}
main();

