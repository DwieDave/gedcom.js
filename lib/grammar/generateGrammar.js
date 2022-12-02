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
        substructs: ["g7:PHRASE"]
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

function generateLineString(struct){
    const ruleArrow = "\n\t-> "
    const rulePipe = "\n\t | "
    const doubleQuote = "\"";

    let lineString = "";
    const ruleUri = convertUri(struct.uri);
    
    // name of rule
    lineString += ruleUri;

    // generate rule on basis of lineType
    switch(struct.lineType){
        case lineTypes.NO_LINEVAL:
            lineString += ruleArrow + "Level D %Xref" + doubleQuote + struct.tag + doubleQuote + " EOL";
            break;
        
        case lineTypes.NO_XREF:
            lineString += ruleArrow + "Level D " + doubleQuote + struct.tag + doubleQuote + " " + struct.lineValType + " EOL";
            break;

    }

    // add optional substructs
    for(const sub of struct.substructs){
        lineString += rulePipe + ruleUri + " " + convertUri(sub)
    }
    return lineString;
}

async function main(){
    let nearleyArray = structureTypes.map(generateRuleString);
    // await fs.writeFile("./rules.ne", nearleyArray.join("\n\n"))
    console.log(nearleyArray.join("\n\n"))
}
main();

