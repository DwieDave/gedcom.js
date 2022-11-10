@include "./Enums.ne"
@include "./Line.ne"

# =====================================================
# DATA TYPES
# =====================================================
# Defined in https://gedcom.io/specifications/FamilySearchGEDCOMv7.html#datatypes



# Text
anychar     -> notBanned    
Text        -> anychar:* 
                {% functions.joinAndUnpackAll %}

# Integer
Integer     -> digit:+ 
                {% functions.joinAndUnpackAll %}

# Enumeration
stdEnum     -> stdTag 
            |  Integer
Enum        -> stdEnum 
            |  extTag

# Date
DateValue   -> (date | DatePeriod | dateRange | dateApprox):?
DateExact   -> day D month D year 
                {% functions.joinAndUnpackAll %}
DatePeriod  -> ("TO" D date):? 
                {% functions.joinAndUnpackAll %}
            |  "FROM" D date (D "TO" D date):? 
                {% functions.joinAndUnpackAll %}
date        -> (calendar D):? ((day D):? month D):? year (D epoch):? 
                {% functions.joinAndUnpackAll %}
dateRange   -> "BET" D date D "AND" D date 
                {% functions.joinAndUnpackAll %}
            |  "AFT" D date 
                {% functions.joinAndUnpackAll %}
            |  "BEF" D date 
                {% functions.joinAndUnpackAll %}
dateApprox  -> ("ABT" | "CAL" | "EST") D date 
                {% functions.joinAndUnpackAll %}
dateRestrict ->  "FROM" {%id%} 
            |  "TO" {%id%} 
            |  "BET" {%id%} 
            |  "AND" {%id%} 
            |  "BEF" {%id%} 
            |  "AFT" {%id%} 
            |  "ABT" {%id%} 
            |  "CAL" {%id%} 
            |  "EST" {%id%} 
            |  "BCE" {%id%}
calendar    -> "GREGORIAN" {%id%} 
            |  "JULIAN" {%id%} 
            |  "FRENCH_R" {%id%} 
            |  "HEBREW" {%id%} 
            |  extTag
day         -> Integer
year        -> Integer
month       -> stdTag 
            |  extTag
epoch       -> "BCE" {%id%} 
            |  extTag

# Time (represented in 24-hour clock)
Time        -> hour ":" minute (":" second ("." fraction):? ):? ("Z"):? 
                {% functions.joinAndUnpackAll %}
hour        -> digit 
            |  ("0" | "1") digit | "2" ("0" | "1" | "2" | "3") 
                {% functions.joinAndUnpackAll %}
minute      -> ("0" | "1" | "2" | "3" | "4" | "5") digit 
                {% functions.joinAndUnpackAll %}
second      -> ("0" | "1" | "2" | "3" | "4" | "5") digit 
                {% functions.joinAndUnpackAll %}
fraction    -> digit:+ 
                {% functions.joinAndUnpackAll %}

# Age
Age         -> (ageBound D):? ageDuration 
                {% functions.joinAndUnpackAll %}
ageBound    -> "<" {% id %} 
            |  ">" {%id%}
years       -> Integer "y" 
                {% functions.joinAndUnpackAll %}
months      -> Integer "m" 
                {% functions.joinAndUnpackAll %}
weeks       -> Integer "w" 
                {% functions.joinAndUnpackAll %}
days        -> Integer "d" 
                {% functions.joinAndUnpackAll %}
ageDuration -> years (D months):? (D weeks):? (D days):? 
                {% functions.joinAndUnpackAll %}
            |  months (D weeks):? (D days):? 
                {% functions.joinAndUnpackAll %}
            |  weeks (D days):? 
                {% functions.joinAndUnpackAll %}
            |  days 

# List
list        -> listItem (listDelim listItem):* 
                {% functions.joinAndUnpackAll %}
listItem    -> (nocommasp | nocommasp nocomma:* nocommasp):? 
                {% functions.joinAndUnpackAll %}
                                
listDelim   -> D:* "," D:* 
                {% functions.joinAndUnpackAll %}
nocomma     -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x2C] {%id%}
nocommasp   -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x2C\x1E-\x20] {%id%}
List_Text   -> list
List_Enum   -> Enum (listDelim Enum):* 
                {% functions.joinAndUnpackAll %}

# Personal Name
PersonalName -> nameStr 
            |  nameStr:? "/" nameStr:? "/" nameStr:? 
                {% functions.joinAndUnpackAll %}
nameChar    -> [^\x00-\x19\x2F] {%id%}
nameStr     -> nameChar:+ 
                {% functions.joinAndUnpackAll %}

# Language
LangTag     -> language ("-" script):? ("-" region):? ("-" variant):* ("-" extension):* ("-" privateuse):? 
                {% functions.joinAndUnpackAll %}
language    -> alpha alpha alpha:? ("-" extlang):? 
                {% functions.joinAndUnpackAll %} 
            |  alpha alpha alpha alpha 
                {% functions.joinAndUnpackAll %} 
            |  alpha alpha alpha alpha alpha (alpha):? (alpha):? (alpha):? 
                {% functions.joinAndUnpackAll %}
extlang     -> alpha alpha alpha ("-" alpha alpha alpha):? ("-" alpha alpha alpha):? 
                {% functions.joinAndUnpackAll %}
script      -> alpha alpha alpha alpha 
                {% functions.joinAndUnpackAll %}
region      -> alpha alpha 
                {% functions.joinAndUnpackAll %} 
            |  digit digit digit 
                {% functions.joinAndUnpackAll %}
variant     -> digit alphanum alphanum alphanum 
                {% functions.joinAndUnpackAll %} 
            |  alphanum alphanum alphanum alphanum alphanum (alphanum):? (alphanum):? (alphanum):? 
                {% functions.joinAndUnpackAll %}
extension   -> singleton ("-" alphanum alphanum (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):?):+ 
                {% functions.joinAndUnpackAll %}
singleton   -> digit 
            |  [\x41-\x57\x59-\x5A\x61-\x77\x79-\x7A] {% id %}
privateuse  -> "x" ("-" alphanum (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):?):+ 
                {% functions.joinAndUnpackAll %}
alpha       -> [a-zA-z]
alphanum    -> alpha 
            |  digit
irregular   -> "en-GB-oed" {%id%} 
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
regular     ->  "art-lojban" {%id%} 
            |  "cel-gaulish" {%id%} 
            |  "no-bok" {%id%} 
            |  "no-nyn" {%id%} 
            |  "zh-guoyu" {%id%} 
            |  "zh-hakka" {%id%} 
            |  "zh-min" {%id%} 
            |  "zh-min-nan" {%id%} 
            |  "zh-xiang" {%id%}
grandfathered -> irregular 
            | regular

# Media Type
MediaType       -> mt_type "/" mt_subtype (";" mt_parameter):*
                    {% functions.joinAndUnpackAll %}
mt_type         -> mt_token
mt_subtype      -> mt_token
mt_parameter    -> mt_attribute "=" mt_value
                    {% functions.joinAndUnpackAll %}
mt_token        -> (mt_char):+
                    {% functions.joinAndUnpackAll %}
mt_attribute    -> mt_token
mt_value        -> mt_token 
                |  mt_qstring
mt_char         -> [\x20-\x21] {%id%} 
                |  [\x23-\x27] {%id%} 
                |  [\x2A-\x2B] {%id%} 
                |  [\x2D-\x2E] {%id%} 
                |  [\x30-\x39] {%id%} 
                |  [\x41-\x5A] {%id%} 
                |  [\x5E-\x7E] {%id%}
mt_qstring      -> [\x22] (mt_qtext |  mt_qpair):* [\x22]
                    {% functions.joinAndUnpackAll %}
mt_qtext        -> [\x09-\x0A] {%id%} 
                |  [\x20-\x21] {%id%} 
                |  [\x23-\x5B] {%id%} 
                |  [\x5D-\x7E] {%id%}
mt_qpair        -> "\\" [\x09-7E] 
                    {% functions.joinAndUnpackAll %}

# Special
Special     -> Text
NullOrY     -> "Y":? {%id%}