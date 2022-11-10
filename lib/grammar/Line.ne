# =====================================================
# LINE GRAMMAR
# =====================================================
# Defined in https://gedcom.io/specifications/FamilySearchGEDCOMv7.html#lines


Level       -> "0" {% id %} 
            |  nonzero digit:* 
                {% (d) => functions.joinAndUnpackAll(d) %}
D           -> [ ] {% id %}
Xref        -> atsign tagChar:+ atsign  
                {% (d) => functions.joinAndUnpackAll(d) %}
Tag         -> stdTag 
            |  extTag 
LineVal     -> pointer 
            |  lineStr
EOL         -> [\x0D] [\x0A]:? 
                {% (d) => functions.joinAndUnpackAll(d) %}
            |  [\x0A] {% id %}

stdTag      -> ucletter tagChar:* 
                {% (d) => functions.joinAndUnpackAll(d) %}
extTag      -> underscore tagChar:+ 
                {% (d) => functions.joinAndUnpackAll(d) %}
tagChar     -> ucletter | digit | underscore

pointer     -> voidPrt | Xref
voidPrt     -> "@VOID@" {% id %}

nonAt       -> [^@\n]   {% id %}
nonEOL      -> [^\n]    {% id %}
lineStr     -> nonAt nonEOL:* 
                {% (d) => functions.joinAndUnpackAll(d) %} 
            |  atsign atsign nonEOL:* 
                {% (d) => functions.joinAndUnpackAll(d) %}

digit       -> [0-9]    {% id %}
nonzero     -> [1-9]    {% id %}
ucletter    -> [A-Z]    {% id %}
underscore  -> "_"      {% id %}
atsign      -> "@"      {% id %}
newLine     -> "\n" {% id %} 
            |  "\n\r" {% id %} 
            |  "\r" {% id %} 
            |  "\r\n" {% id %}

banned      -> [\x00-\x08] {% id %}    # C0 other than LF CR and Tab
            |  [\x0B-\x0C] {% id %}
            |  [\x0E-\x1F] {% id %}
            |  [\x7F]      {% id %}    # DEL
            |  [\x80-\x9F] {% id %}    # C1

notBanned -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F] {% id %}