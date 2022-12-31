# call moo-lexer
@lexer lexer

# Defined in https://gedcom.io/specifications/FamilySearchGEDCOMv7.html#lines
# =====================================================
# LINE GRAMMAR
# =====================================================
Level       
    -> "0" 
        {%id%} 
    |  nonzero digit:*
        {% postprocessor.joinAndUnpackAll %}

D           
    -> [\x20] 
        {%id%}

Xref
    -> %Xref 
        {%id%}

Tag
    -> stdTag
        {%id%}
    |  extTag
        {%id%}

LineVal
    -> pointer
        {%id%}
    |  lineStr
        {%id%}

EOL         
    -> %EOL 
        {%id%}

# =====================================================
stdTag      
    -> ucletter tagChar:* 
        {% postprocessor.joinAndUnpackAll %}

extTag      
    -> underscore tagChar:+ 
        {% postprocessor.joinAndUnpackAll %}

tagChar     
    -> ucletter 
        {%id%}
    |  digit 
        {%id%}
    |  underscore 
        {%id%}

# =====================================================
pointer     
    -> voidPrt 
        {%id%}
    |  Xref 
        {%id%}

voidPrt     
    -> "@VOID@" {%id%}

# =====================================================

nonAt       
    -> [^\x00-\x08\x0A-\x1F\x40] 
        {%id%}

nonEOL      
    -> [^\x00-\x08\x0A-\x1F] 
        {%id%}

lineStr     
    -> nonAt nonEOL:*
        {% postprocessor.joinAndUnpackAll %} 
    |  atsign atsign nonEOL:*
        {% postprocessor.joinAndUnpackAll %}


