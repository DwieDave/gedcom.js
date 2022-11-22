@include "./DataTypes.ne"
@include "./Substructures.ne"

@{%
    const functions = require('./Postprocessors.js');
    const TYPE = require('../../Types.js')
    const moo = require("moo");

    const lexer = moo.compile({
        D : /[ ]/,
        digit      : /[0-9]/,
        underscore : /[_]/,
        atsign     : /[@]/,
        EOL: {match: /(?:\r\n?|\n)/, lineBreaks: true },
        // not Banned, no EOL, no Space, no @, no _
        notBannedNoEOLNoSpace:  /[^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D\x20\x40\x5F]+/
    });
%}

@lexer lexer

# Leerzeichen am Ende einer Line erlaubt? 

input 
    -> FAM {%id%}
    |  FAM structure:*
        {% functions.addSubstructure %}

structure 
    -> FAMILY_ATTRIBUTE_STRUCTURE {%id%}
    |  FAM_HUSB {%id%}
    |  FAM_WIFE {%id%}
    |  CHIL {%id%}
    |  TEST {%id%}

FAM 
    -> Level D Xref D "FAM" EOL
        {% (data) => functions.createStructure({line: data, type: TYPE.NO_LINEVAL})%}

# =====================================================
# FIRST LEVEL 
# =====================================================
FAM_HUSB 
    -> "1" D "HUSB" D Xref EOL
        {% (data) => functions.createStructure({line: data, type: TYPE.NO_XREF})%}
    |  FAM_HUSB PHRASE
        {% functions.addSubstructure %}

PHRASE
    -> Level D "PHRASE" D Text EOL
        {% (data) => functions.createStructure({line: data, type: TYPE.NO_XREF})%}

HUSB
    -> Level D "HUSB" EOL Level D "AGE" D Age EOL
    |  HUSB PHRASE EOL

FAM_WIFE 
    -> "1" D "WIFE" D Xref EOL
    |  FAM_WIFE PHRASE EOL

WIFE
    -> Level D "WIFE" Level D "AGE" D Age EOL
    |  WIFE PHRASE EOL

CHIL 
    -> "1" D "CHIL" D Xref EOL
        {% (data) => functions.createStructure({line: data, type: TYPE.NO_XREF})%}
    |  CHIL PHRASE EOL

TEST
    -> Level D "TEST" D Text EOL
    

FAMILY_ATTRIBUTE_STRUCTURE
    -> NCHI
    |  RESI
    |  FACT

# =====================================================
# SECOND LEVEL 
# =====================================================
NCHI 
    -> Level D "NCHI" D Integer EOL
    |  NCHI TYPE EOL

RESI
    -> Level D "RESI" D Text EOL
    |  RESI TYPE EOL

FACT
    -> Level D "FACT" D Text EOL
    |  FACT TYPE EOL

FAMILY_EVENT_DETAIL
    -> HUSB
    |  WIFE
    |  EVENT_DETAIL





