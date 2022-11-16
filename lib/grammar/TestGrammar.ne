@include "./DataTypes.ne"
@include "./Substructures.ne"

# Leerzeichen am Ende einer Line erlaubt? 

@{%
    const functions = require('./Postprocessors.js');
    const CONSTANTS = {
        LINEVAL_POINTER_TYPE: "pointer",
        LINEVAL_LINESTR_TYPE: "lineStr"
    }


%}

TEST 
    -> PHRASE
        {% functions.joinAndUnpackAll %}

