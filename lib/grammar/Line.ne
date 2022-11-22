# =====================================================
# LINE GRAMMAR
# =====================================================
# Defined in https://gedcom.io/specifications/FamilySearchGEDCOMv7.html#lines


Level       -> "0" {%id%} 
            |  nonzero digit:* 
                {% functions.joinAndUnpackAll %}
D           -> [ ] {%id%}
Xref        -> atsign tagChar:+ atsign  
                {% functions.joinAndUnpackAll %}
Tag         -> stdTag 
            |  extTag 
LineVal     -> pointer 
            |  lineStr
EOL         -> [\x0D] [\x0A]:? 
            |  [\x0A]

stdTag      -> ucletter tagChar:* 
                {% functions.joinAndUnpackAll %}
extTag      -> underscore tagChar:+ 
                {% functions.joinAndUnpackAll %}
tagChar     -> ucletter 
            |  digit 
            |  underscore

pointer     -> voidPrt 
            |  Xref
voidPrt     -> "@VOID@" {%id%}

nonAt       -> [^@\n]   {%id%}
nonEOL      -> [^\n]    {%id%}
lineStr     -> nonAt nonEOL:* 
                {% functions.joinAndUnpackAll %} 
            |  atsign atsign nonEOL:* 
                {% functions.joinAndUnpackAll %}

digit       -> [0-9]    {%id%}
nonzero     -> [1-9]    {%id%}
ucletter    -> [A-Z]    {%id%}
underscore  -> "_"      {%id%}
atsign      -> "@"      {%id%}
newLine     -> "\n"     {%id%} 
            |  "\n\r"   {%id%} 
            |  "\r"     {%id%} 
            |  "\r\n"   {%id%}

banned      -> [\x00-\x08] {%id%}    # C0 other than LF CR and Tab
            |  [\x0B-\x0C] {%id%}
            |  [\x0E-\x1F] {%id%}
            |  [\x7F]      {%id%}    # DEL
            |  [\x80-\x9F] {%id%}    # C1

notBanned -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F] {%id%}
notBannedNoEOL -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D]