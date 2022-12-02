const fs = require('fs/promises');

const {lineTypes, dataTypes} = require("../Constants.js");
const Level = "Level";
const D = "D";
const Xref = "Xref";
const lineVal = "lineVal";
const EOL = "EOL";

const structureTypes = [
    {
        uri: "g7:FAM-HUSB",
        lineType: lineTypes.NO_LINEVAL,
        tag: "HUSB",
        substructs: ["g7:PHRASE"],
        checkCardinalityOf: {PHRASE:"0:1", HUSB:"0:1"}
    },
    {
        uri: "g7:PHRASE",
        lineType: lineTypes.NO_XREF,
        lineValType: dataTypes.Text,
        tag: "PHRASE",
        substructs: []
    }
]

function generateRuleString(struct){
    const lineString = generateLineString(struct);
    return lineString;
}

function convertUri(uri){
    return uri.replace(":", "_").replace("-", "_")
}

function convertCheckCardinalityOf(checkCardinalityOf){
    let str = "{";
    for(const [tag, cardinality] of Object.entries(checkCardinalityOf)){
        str += `${tag}:"${cardinality}", `;
    }
    return str.slice(0,-2) + "}";
}

function generateLineString(struct){
    const ruleArrow = "\n\t->"
    const rulePipe = "\n\t| "
    const doubleQuote = "\"";
    const postprocessorLine = "\n\t\t{% (d) => postprocessor."

    let lineString = "";
    const uri = convertUri(struct.uri);
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
                lineString += `${ruleArrow} Level D %Xref "${tag}" EOL`;
                break;

            // Structure of the form: LEVEL D TAG D LINEVAL EOL
            case lineTypes.NO_XREF:
                lineString += `${ruleArrow} Level D "${tag}" ${lineValType} EOL`;
                break;
            
            // Structure of the form: LEVEL D XREF D TAG D LINEVAL EOL
            default:
                lineString += `${ruleArrow} Level D %Xref "${tag}" ${lineValType} EOL`;

    }
    // add postprocessor
    lineString += `${postprocessorLine}createStructure({line: d, type: "${lineType}"${checkCardinalityOf ? `, checkCardinalityOf: ${convertCheckCardinalityOf(checkCardinalityOf)}` : ``}})%}`


    // add optional substructs
    for(const sub of struct.substructs){
        // generate rule
        lineString += `${rulePipe} ${uri} ${convertUri(sub)}`

        // add postprocessor
        lineString += `${postprocessorLine}addSubstructure({superstruct: d[0], substructs: d[1]})%}`

    }
    return lineString;
}

async function main(){
    let nearleyArray = structureTypes.map(generateRuleString);
    await fs.writeFile("./rules.ne", nearleyArray.join("\n\n"))
    console.log(nearleyArray.join("\n\n"))
}
main();

