@include "./Enums.ne"
@include "./Line.ne"

# =====================================================
# DATA TYPES
# =====================================================
# Defined in https://gedcom.io/specifications/FamilySearchGEDCOMv7.html#datatypes



# Text
anychar     -> notBanned    
Text        -> anychar:* 
                {% (d) => functions.joinAndUnpackAll(d) %}

# Integer
Integer     -> digit:+ 
                {% (d) => functions.joinAndUnpackAll(d) %}

# Enumeration
stdEnum     -> stdTag | Integer
Enum        -> stdEnum | extTag

# Date
DateValue       -> (date | DatePeriod | dateRange | dateApprox):?
DateExact       -> day D month D year 
                    {% (d) => functions.joinAndUnpackAll(d) %}
DatePeriod      -> ("TO" D date):? 
                    {% (d) => functions.joinAndUnpackAll(d) %}
                |  "FROM" D date (D "TO" D date):? 
                    {% (d) => functions.joinAndUnpackAll(d) %}
date            -> (calendar D):? ((day D):? month D):? year (D epoch):? 
                    {% (d) => functions.joinAndUnpackAll(d) %}
dateRange       -> "BET" D date D "AND" D date 
                    {% (d) => functions.joinAndUnpackAll(d) %}
                |  "AFT" D date 
                    {% (d) => functions.joinAndUnpackAll(d) %}
                |  "BEF" D date 
                    {% (d) => functions.joinAndUnpackAll(d) %}
dateApprox      -> ("ABT" | "CAL" | "EST") D date 
                    {% (d) => functions.joinAndUnpackAll(d) %}
dateRestrict    ->  "FROM" {% id %} | "TO" 
                    {% id %} | "BET" {% id %} | "AND" {% id %} | "BEF" {% id %} | "AFT" {% id %} | "ABT" {% id %} | "CAL" {% id %} | "EST" {% id %} | "BCE" {% id %}
calendar        -> "GREGORIAN" {% id %} | "JULIAN" {% id %} | "FRENCH_R" {% id %} | "HEBREW" {% id %} | extTag
day             -> Integer
year            -> Integer
month           -> stdTag | extTag
epoch           -> "BCE" {% id %} | extTag

# Time (represented in 24-hour clock)
Time        -> hour ":" minute (":" second ("." fraction):? ):? ("Z"):? 
                {% (d) => functions.joinAndUnpackAll(d) %}
hour        -> digit | ("0" | "1") digit | "2" ("0" | "1" | "2" | "3") 
                {% (d) => functions.joinAndUnpackAll(d) %}
minute      -> ("0" | "1" | "2" | "3" | "4" | "5") digit 
                {% (d) => functions.joinAndUnpackAll(d) %}
second      -> ("0" | "1" | "2" | "3" | "4" | "5") digit 
                {% (d) => functions.joinAndUnpackAll(d) %}
fraction    -> digit:+ 
                {% (d) => functions.joinAndUnpackAll(d) %}

# Age
Age         -> (ageBound D):? ageDuration 
                {% (d) => functions.joinAndUnpackAll(d) %}
ageBound    -> "<" {% id %} | ">" {% id %}
years       -> Integer "y" 
                {% (d) => functions.joinAndUnpackAll(d) %}
months      -> Integer "m" 
                {% (d) => functions.joinAndUnpackAll(d) %}
weeks       -> Integer "w" 
                {% (d) => functions.joinAndUnpackAll(d) %}
days        -> Integer "d" 
                {% (d) => functions.joinAndUnpackAll(d) %}
ageDuration 
    -> years (D months):? (D weeks):? (D days):? 
        {% (d) => functions.joinAndUnpackAll(d) %}
    |  months (D weeks):? (D days):? 
        {% (d) => functions.joinAndUnpackAll(d) %}
    |  weeks (D days):? 
        {% (d) => functions.joinAndUnpackAll(d) %}
    |  days 

# List
list        -> listItem (listDelim listItem):* 
                {% (d) => functions.joinAndUnpackAll(d) %}
listItem    -> (nocommasp | nocommasp nocomma:* nocommasp):? 
                {% (d) => functions.joinAndUnpackAll(d) %}
                                
listDelim   -> D:* "," D:* 
                {% (d) => functions.joinAndUnpackAll(d) %}
nocomma     -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x2C] {% id %}
nocommasp   -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x2C\x1E-\x20] {% id %}
List_Text   -> list
List_Enum   -> Enum (listDelim Enum):* 
                {% (d) => functions.joinAndUnpackAll(d) %}

# Personal Name
PersonalName    -> nameStr 
                |  nameStr:? "/" nameStr:? "/" nameStr:? {% (d) => functions.joinAndUnpackAll(d) %}
nameChar        -> [^\x00-\x19\x2F] {% id %}
nameStr         -> nameChar:+ 
                    {% (d) => functions.joinAndUnpackAll(d) %}

# Language
LangTag         -> language ("-" script):? ("-" region):? ("-" variant):* ("-" extension):* ("-" privateuse):? 
                    {% (d) => functions.joinAndUnpackAll(d) %}
language        -> alpha alpha alpha:? ("-" extlang):? 
                    {% (d) => functions.joinAndUnpackAll(d) %} 
                |  alpha alpha alpha alpha 
                    {% (d) => functions.joinAndUnpackAll(d) %} 
                |  alpha alpha alpha alpha alpha (alpha):? (alpha):? (alpha):? 
                    {% (d) => functions.joinAndUnpackAll(d) %}
extlang         -> alpha alpha alpha ("-" alpha alpha alpha):? ("-" alpha alpha alpha):? 
                    {% (d) => functions.joinAndUnpackAll(d) %}
script          -> alpha alpha alpha alpha 
                    {% (d) => functions.joinAndUnpackAll(d) %}
region          -> alpha alpha 
                    {% (d) => functions.joinAndUnpackAll(d) %} 
                |  digit digit digit 
                    {% (d) => functions.joinAndUnpackAll(d) %}
variant         -> digit alphanum alphanum alphanum 
                    {% (d) => functions.joinAndUnpackAll(d) %} 
                |  alphanum alphanum alphanum alphanum alphanum (alphanum):? (alphanum):? (alphanum):? 
                    {% (d) => functions.joinAndUnpackAll(d) %}
extension       -> singleton ("-" alphanum alphanum (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):?):+ 
                    {% (d) => functions.joinAndUnpackAll(d) %}
singleton       -> digit 
                |  [\x41-\x57\x59-\x5A\x61-\x77\x79-\x7A] {% id %}
privateuse      -> "x" ("-" alphanum (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):?):+ 
                    {% (d) => functions.joinAndUnpackAll(d) %}
alpha           -> [a-zA-z]
alphanum        -> alpha | digit
irregular       -> "en-GB-oed" {% id %} | "i-ami" {% id %} | "i-bnn" {% id %} | "i-default" {% id %} | "i-enochian" {% id %} | "i-hak" {% id %} | "i-klingon" {% id %} | "i-lux" {% id %} | "i-mingo" {% id %} | "i-navajo" {% id %} | "i-pwn" {% id %} | "i-tao" {% id %} | "i-tay" {% id %} | "i-tsu" {% id %} | "sgn-BE-FR" {% id %} | "sgn-BE-NL" {% id %} | "sgn-CH-DE" {% id %}
regular         ->  "art-lojban" {% id %} | "cel-gaulish" {% id %} | "no-bok" {% id %} | "no-nyn" {% id %} | "zh-guoyu" {% id %} | "zh-hakka" {% id %} | "zh-min" {% id %} | "zh-min-nan" {% id %} | "zh-xiang" {% id %}
grandfathered   -> irregular | regular

# Media Type
MediaType       -> mt_type "/" mt_subtype (";" mt_parameter):*
                    {% (d) => functions.joinAndUnpackAll(d) %}
mt_type         -> mt_token
mt_subtype      -> mt_token
mt_parameter    -> mt_attribute "=" mt_value
                    {% (d) => functions.joinAndUnpackAll(d) %}
mt_token        -> (mt_char):+
                    {% (d) => functions.joinAndUnpackAll(d) %}
mt_attribute    -> mt_token
mt_value        -> mt_token | mt_qstring
mt_char         -> [\x20-\x21] {% id %} | [\x23-\x27] {% id %} | [\x2A-\x2B] {% id %} | [\x2D-\x2E] {% id %} | [\x30-\x39] {% id %} | [\x41-\x5A] {% id %} | [\x5E-\x7E] {% id %}
mt_qstring      -> [\x22] (mt_qtext | mt_qpair):* [\x22]
                    {% (d) => functions.joinAndUnpackAll(d) %}
mt_qtext        -> [\x09-\x0A] {% id %} | [\x20-\x21] {% id %} | [\x23-\x5B] {% id %} | [\x5D-\x7E]  {% id %}
mt_qpair        -> "\\" [\x09-7E] 
                    {% (d) => functions.joinAndUnpackAll(d) %}

# Special
Special         -> Text

NullOrY         -> "Y":? {% id %}