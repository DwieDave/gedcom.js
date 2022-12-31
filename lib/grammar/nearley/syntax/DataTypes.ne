# TO-DO: Implement Syntax for DataType Language
# TO-DO: Implement Syntax for DataType MediaType

@include "./Line.ne"

# call moo-lexer
@lexer lexer

# =====================================================
# Characters
# =====================================================
digit       
    -> %digit 
        {%id%}

nonzero     
    -> [1-9] 
        {%id%}

ucletter    
    -> [A-Z] 
        {%id%}

underscore  
    -> %underscore 
        {%id%}

atsign      
    -> %atsign
        {%id%}

# =====================================================

banned      
    -> [\x00-\x08]  # C0 other than LF CR and Tab
        {%id%}    
    |  [\x0B-\x0C] 
        {%id%}
    |  [\x0E-\x1F] 
        {%id%}
    |  [\x7F]       # DEL 
        {%id%}    
    |  [\x80-\x9F]  # C1
        {%id%}    

notBanned 
    -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F] 
        {%id%}

notBannedNoEOL 
    -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D] 
        {%id%}

notBannedNoEOLNoAt
    -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D\x40] 
        {%id%}


# =====================================================
# DATA TYPES
# =====================================================
# Text
anychar     
    -> notBannedNoEOL {%id%} 

Text        
    -> notBannedNoEOLNoAt anychar:*
        {% postprocessor.joinAndUnpackAll %}
    |  atsign atsign anychar:*
        {% postprocessor.joinAndUnpackAll %}

# =====================================================
# Integer
Integer     
    -> digit:+ 
        {% postprocessor.joinAndUnpackAll %}

# =====================================================
# Enumeration -> NOT NEEDED
stdEnum     
    -> stdTag {%id%} 
    |  Integer {%id%} 

Enum        
    -> Text {%id%}

# =====================================================
# Date
DateValue   
    -> (date | DatePeriod | dateRange | dateApprox):?
        {% postprocessor.joinAndUnpackAll %} 

DateExact   
    -> day D month D year 
        {% postprocessor.joinAndUnpackAll %}

DatePeriod  
    ->  ("FROM" D date D):? "TO" D date
        {% postprocessor.joinAndUnpackAll %}

date        
    -> (calendar D):? ((day D):? month D):? year (D epoch):? 
        {% postprocessor.joinAndUnpackAll %}

dateRange   
    -> "BET" D date D "AND" D date 
        {% postprocessor.joinAndUnpackAll %}
    |  "AFT" D date 
        {% postprocessor.joinAndUnpackAll %}
    |  "BEF" D date 
        {% postprocessor.joinAndUnpackAll %}

dateApprox  
    -> ("ABT" | "CAL" | "EST") D date 
        {% postprocessor.joinAndUnpackAll %}

dateRestrict 
    -> "FROM" {%id%} 
    |  "TO" {%id%} 
    |  "BET" {%id%} 
    |  "AND" {%id%} 
    |  "BEF" {%id%} 
    |  "AFT" {%id%} 
    |  "ABT" {%id%} 
    |  "CAL" {%id%} 
    |  "EST" {%id%} 
    |  "BCE" {%id%}

calendar    
    -> "GREGORIAN" {%id%} 
    |  "JULIAN" {%id%} 
    |  "FRENCH_R" {%id%} 
    |  "HEBREW" {%id%} 
    |  extTag

day         
    -> Integer {%id%} 

year        
    -> Integer {%id%} 

month       
    -> stdTag {%id%} 
    |  extTag {%id%} 

epoch       
    -> "BCE" {%id%} 
    |  extTag {%id%} 

# =====================================================
# Time (represented in 24-hour clock)
Time        
    -> hour ":" minute (":" second ("." fraction):? ):? ("Z"):? 
        {% postprocessor.joinAndUnpackAll %}
hour        
    -> digit {%id%} 
    |  ("0" | "1") digit | "2" ("0" | "1" | "2" | "3") 
        {% postprocessor.joinAndUnpackAll %}
minute      
    -> ("0" | "1" | "2" | "3" | "4" | "5") digit 
        {% postprocessor.joinAndUnpackAll %}
second      
    -> ("0" | "1" | "2" | "3" | "4" | "5") digit 
        {% postprocessor.joinAndUnpackAll %}
fraction    
    -> digit:+ 
        {% postprocessor.joinAndUnpackAll %}

# =====================================================
# Age
Age         
    -> (ageBound D):? ageDuration 
        {% postprocessor.joinAndUnpackAll %}

ageBound    
    -> "<" {%id%} 
    |  ">" {%id%}

years       
    -> Integer "y" 
        {% postprocessor.joinAndUnpackAll %}

months      
    -> Integer "m" 
        {% postprocessor.joinAndUnpackAll %}

weeks       
    -> Integer "w" 
        {% postprocessor.joinAndUnpackAll %}

days        
    -> Integer "d" 
        {% postprocessor.joinAndUnpackAll %}

ageDuration 
    -> years (D months):? (D weeks):? (D days):? 
        {% postprocessor.joinAndUnpackAll %}
    |  months (D weeks):? (D days):? 
        {% postprocessor.joinAndUnpackAll %}
    |  weeks (D days):? 
        {% postprocessor.joinAndUnpackAll %}
    |  days {%id%}

# =====================================================
# List
list        
    -> Text
        {% postprocessor.joinAndUnpackAll %}

ListText   
    -> list 
        {%id%}

ListEnum   
    -> list
        {%id%}

# =====================================================
# Personal Name
PersonalName 
    -> nameStr 
        {%id%}
    |  nameStr:? "/" nameStr:? "/" nameStr:? 
        {% postprocessor.joinAndUnpackAll %}

nameChar    
    -> [^\x00-\x19\x2F] 
        {%id%}
nameStr     
    -> nameChar:+ 
        {% postprocessor.joinAndUnpackAll %}

# =====================================================
# Language
Language     
    #-> lang ("-" script):? ("-" region):? ("-" variant):* ("-" extension):* ("-" privateuse):? 
    #    {% postprocessor.joinAndUnpackAll %}
    -> Text
        {%id%}

lang    
    -> alpha alpha alpha:? ("-" extlang):? 
        {% postprocessor.joinAndUnpackAll %} 
    |  alpha alpha alpha alpha 
        {% postprocessor.joinAndUnpackAll %} 
    |  alpha alpha alpha alpha alpha (alpha):? (alpha):? (alpha):? 
        {% postprocessor.joinAndUnpackAll %}

extlang     
    -> alpha alpha alpha ("-" alpha alpha alpha):? ("-" alpha alpha alpha):? 
        {% postprocessor.joinAndUnpackAll %}

script      
    -> alpha alpha alpha alpha 
        {% postprocessor.joinAndUnpackAll %}

region      
    -> alpha alpha 
        {% postprocessor.joinAndUnpackAll %} 
    |  digit digit digit 
        {% postprocessor.joinAndUnpackAll %}

variant     
    -> digit alphanum alphanum alphanum 
        {% postprocessor.joinAndUnpackAll %} 
    |  alphanum alphanum alphanum alphanum alphanum (alphanum):? (alphanum):? (alphanum):? 
        {% postprocessor.joinAndUnpackAll %}

extension   
    -> singleton ("-" alphanum alphanum (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):?):+ 
        {% postprocessor.joinAndUnpackAll %}

singleton   
    -> digit 
        {%id%}
    |  [\x41-\x57\x59-\x5A\x61-\x77\x79-\x7A] 
        {%id%}

privateuse  
    -> "x" ("-" alphanum (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):?):+ 
        {% postprocessor.joinAndUnpackAll %}

alpha       
    -> [a-zA-z] {%id%}

alphanum    
    -> alpha {%id%}
    |  digit {%id%}

irregular   
    -> "en-GB-oed" {%id%} 
    |  "i-ami" {%id%}
    |  "i-bnn" {%id%} 
    |  "i-default" {%id%} 
    |  "i-enochian" {%id%} 
    |  "i-hak" {%id%} 
    |  "i-klingon" {%id%} 
    |  "i-lux" {%id%} 
    |  "i-mingo" {%id%} 
    |  "i-navajo" {%id%} 
    |  "i-pwn" {%id%} 
    |  "i-tao" {%id%} 
    |  "i-tay" {%id%} 
    |  "i-tsu" {%id%} 
    |  "sgn-BE-FR" {%id%} 
    |  "sgn-BE-NL" {%id%} 
    |  "sgn-CH-DE" {%id%}
regular     
    ->  "art-lojban" {%id%} 
    |  "cel-gaulish" {%id%} 
    |  "no-bok" {%id%} 
    |  "no-nyn" {%id%} 
    |  "zh-guoyu" {%id%} 
    |  "zh-hakka" {%id%} 
    |  "zh-min" {%id%} 
    |  "zh-min-nan" {%id%} 
    |  "zh-xiang" {%id%}
grandfathered 
    -> irregular {%id%}
    | regular {%id%}

# =====================================================
# Media Type
MediaType       
    # -> mt_type "/" mt_subtype (";" mt_parameter):*
    #     {% postprocessor.joinAndUnpackAll %}
    -> Text
        {% postprocessor.joinAndUnpackAll %}

mt_type         
    -> mt_token {%id%}

mt_subtype      
    -> mt_token {%id%}

mt_parameter    
    -> mt_attribute "=" mt_value
        {% postprocessor.joinAndUnpackAll %}

mt_token        
    -> (mt_char):+
        {% postprocessor.joinAndUnpackAll %}

mt_attribute    
    -> mt_token {%id%}

mt_value        
    -> mt_token {%id%}
    |  mt_qstring {%id%}

mt_char         
    -> [\x20-\x21] {%id%} 
    |  [\x23-\x27] {%id%} 
    |  [\x2A-\x2B] {%id%} 
    |  [\x2D-\x2E] {%id%} 
    |  [\x30-\x39] {%id%} 
    |  [\x41-\x5A] {%id%} 
    |  [\x5E-\x7E] {%id%}

mt_qstring      
    -> [\x22] (mt_qtext |  mt_qpair):* [\x22]
        {% postprocessor.joinAndUnpackAll %}

mt_qtext        
    -> [\x09-\x0A] {%id%} 
    |  [\x20-\x21] {%id%} 
    |  [\x23-\x5B] {%id%} 
    |  [\x5D-\x7E] {%id%}

mt_qpair        
    -> "\\" [\x09-7E] 
        {% postprocessor.joinAndUnpackAll %}

# =====================================================
# Special
Special     
    -> Text {%id%}
NullOrY    
    -> "Y" {%id%}

ByteOrderMark 
    -> ByteOrderMark1
        {%id%}
    |  ByteOrderMark2
        {%id%}
    |  ByteOrderMark3
        {%id%}

# =====================================================
# CONTINUATION
# =====================================================
# A pseudo-structure to indicate a line break
#TEXT_CONTINUATION[level] -> $level D "CONT" (D Text):? EOL
#		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}
#
#INTEGER_CONTINUATION[level] -> $Level D "CONT" (D Integer):? EOL
#		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Integer"})%}


0_TEXT_CONTINUATION -> "0" D "CONT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}

1_TEXT_CONTINUATION -> "1" D "CONT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}

2_TEXT_CONTINUATION -> "2" D "CONT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}

3_TEXT_CONTINUATION -> "3" D "CONT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}

4_TEXT_CONTINUATION -> "4" D "CONT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}

5_TEXT_CONTINUATION -> "5" D "CONT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}

6_TEXT_CONTINUATION -> "6" D "CONT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}

7_TEXT_CONTINUATION -> "7" D "CONT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}

8_TEXT_CONTINUATION -> "8" D "CONT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}

9_TEXT_CONTINUATION -> "9" D "CONT" (D Text):? EOL
		{% (d) => postprocessor.createStructure({line: d, uri: "CONT", type: "NO_XREF", lineValType: "Text"})%}


