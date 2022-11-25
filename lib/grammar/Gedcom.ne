@include "./DataTypes.ne"
@include "./Substructures.ne"
@include "./Family.ne"

@{%
    // required modules
    const functions = require('./Postprocessors.js');
    const {lineTypes} = require('../../Constants.js')
    const moo = require("moo");

    // moo-lexer to pre-compile input
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

# call moo-lexer
@lexer lexer



# =====================================================
# FAMILY
# =====================================================
# ISSUE: postprocessor createStructure is called twice for every line
# ISSUE: postprocessor addSubstructure is called way to often

FAMILY
    -> FAM 
        {%id%}
    |  FAM structure:+
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: ["HUSB", "WIFE"]}) %}

structure 
    -> FAMILY_ATTRIBUTE_STRUCTURE 
        {%id%}
    |  FAM_HUSB 
        {%id%}
    |  FAM_WIFE 
        {%id%}
    |  CHIL 
        {%id%}
    |  TEST 
        {%id%}

FAM 
    -> Level D Xref D "FAM" EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.FAM_RECORD})%}

TEST
    -> Level D "TEST" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}

# =====================================================
# FIRST LEVEL 
# =====================================================
FAM_HUSB 
    -> "1" D "HUSB" D Xref EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  FAM_HUSB PHRASE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: ["PHRASE"]}) %}

FAM_WIFE 
    -> "1" D "WIFE" D Xref EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  FAM_WIFE PHRASE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1], checkCardinalityOf: ["PHRASE"]}) %}

CHIL 
    -> "1" D "CHIL" D Xref EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  CHIL PHRASE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}


FAMILY_ATTRIBUTE_STRUCTURE
    -> NCHI
        {%id%} 
    |  RESI
        {%id%}
    |  FACT
        {%id%}

#HUSB
#    -> Level D "HUSB" EOL Level D "AGE" D Age EOL
#    |  HUSB PHRASE EOL
#WIFE
#    -> Level D "WIFE" Level D "AGE" D Age EOL
#    |  WIFE PHRASE EOL


# =====================================================
# SECOND LEVEL 
# =====================================================
NCHI 
    -> Level D "NCHI" D Integer EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  NCHI TYPE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

RESI
    -> Level D "RESI" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  RESI TYPE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

FACT
    -> Level D "FACT" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  FACT TYPE
        {% (d) => functions.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

#FAMILY_EVENT_DETAIL
#    -> HUSB
#    |  WIFE
#    |  EVENT_DETAIL


# ISSUE: Parsing is not working, when Substructures are imported
# e.g. TYPE: unexpected token "TYPE" -> expecting "T" based on "T" "Y" "P" "E"
# Parsing works if Substructure definition is in main .ne file
# =====================================================
# SUBSTRUCTURES
# =====================================================
PHRASE
    -> Level D "PHRASE" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}

TYPE
    -> Level D "TYPE" D Text EOL
        {% (d) => functions.createStructure({line: d, type: lineTypes.NO_XREF})%}





