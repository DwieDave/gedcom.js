# call moo-lexer
@lexer lexer

# =====================================================
# LINE GRAMMAR
# =====================================================
# Defined in https://gedcom.io/specifications/FamilySearchGEDCOMv7.html#lines

Level       
    -> "0" {%id%} 
    |  nonzero digit:*
        {% postprocessor.joinAndUnpackAll %}

D           
    -> [ ] {%id%}

Xref        
    -> atsign tagChar:+ atsign  
        {% postprocessor.joinAndUnpackAll %}

Tag         
    -> stdTag {%id%}
    |  extTag {%id%}

LineVal     
    -> pointer {%id%}
    |  lineStr {%id%}

#EOL         
#    -> [\x0D] [\x0A] {%id%}
#    |  [\x0A] {%id%}
#    |  [\x0D] {%id%}

EOL         
    -> [\x0A] {%id%}

stdTag      
    -> ucletter tagChar:* 
        {% postprocessor.joinAndUnpackAll %}

extTag      
    -> underscore tagChar:+ 
        {% postprocessor.joinAndUnpackAll %}

tagChar     
    -> ucletter {%id%}
    |  digit {%id%}
    |  underscore {%id%}

pointer     
    -> voidPrt {%id%}
    |  Xref {%id%}

voidPrt     
    -> "@VOID@" {%id%}

nonAt       
    -> [^@\n] {%id%}

nonEOL      
    -> [^\n] {%id%}

lineStr     
    -> nonAt nonEOL:*
        {% postprocessor.joinAndUnpackAll %} 
    |  atsign atsign nonEOL:*
        {% postprocessor.joinAndUnpackAll %}

digit       
    -> [0-9] {%id%}

nonzero     
    -> [1-9] {%id%}

ucletter    
    -> [A-Z] {%id%}

underscore  
    -> "_" {%id%}

atsign      
    -> "@" {%id%}

banned      
    -> [\x00-\x08] {%id%}    # C0 other than LF CR and Tab
    |  [\x0B-\x0C] {%id%}
    |  [\x0E-\x1F] {%id%}
    |  [\x7F]      {%id%}    # DEL
    |  [\x80-\x9F] {%id%}    # C1

notBanned 
    -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F] {%id%}

notBannedNoEOL 
    -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D] {%id%}
