@include "./Enums.ne"

# =====================================================
# DATA TYPES
# =====================================================
# Defined in https://gedcom.io/specifications/FamilySearchGEDCOMv7.html#datatypes

# Text
anychar     -> notBanned
Text        -> anychar:*

# Integer
Integer     -> digit:+

# Enumeration
stdEnum     -> stdTag | Integer
Enum        -> stdEnum | extTag

# Date
DateValue       -> (date | DatePeriod | dateRange | dateApprox):?
DateExact       -> day D month D year
DatePeriod      -> ("TO" D date):? | "FROM" D date (D "TO" D date):?
date            -> (calendar D):? ((day D):? month D):? year (D epoch):?
dateRange       -> "BET" D date D "AND" D date | "AFT" D date | "BEF" D date
dateApprox      -> ("ABT" | "CAL" | "EST") D date
dateRestrict    ->  "FROM" | "TO" | "BET" | "AND" | "BEF" | "AFT" | "ABT" | "CAL" | "EST" | "BCE"
calendar        -> "GREGORIAN" | "JULIAN" | "FRENCH_R" | "HEBREW" | extTag
day             -> Integer
year            -> Integer
month           -> stdTag | extTag
epoch           -> "BCE" | extTag

# Time (represented in 24-hour clock)
Time        -> hour ":" minute (":" second ("." fraction):? ):? ("Z"):?
hour        -> digit | ("0" | "1") digit | "2" ("0" | "1" | "2" | "3")
minute      -> ("0" | "1" | "2" | "3" | "4" | "5") digit
second      -> ("0" | "1" | "2" | "3" | "4" | "5") digit
fraction    -> digit:+

# Age
Age         -> (ageBound D):? ageDuration
ageBound    -> "<" | ">"
years       -> Integer "y"
months      -> Integer "m"
weeks       -> Integer "w"
days        -> Integer "d"
ageDuration 
    -> years (D months):? (D weeks):? (D days):?
    |  months (D weeks):? (D days):?
    |  weeks (D days):?
    |  days

# List
list        -> listItem (listDelim listItem):*
listItem    -> (nocommasp | nocommasp nocomma:* nocommasp):?
listDelim   -> D:* "," D:*
nocomma     -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x2C]
nocommasp   -> [^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x2C\x1E-\x20]
List_Text   -> list
List_Enum   -> Enum (listDelim Enum):*

# Personal Name
PersonalName    -> nameStr | nameStr:? "/" nameStr:? "/" nameStr:?
nameChar        -> [^\x00-\x19\x2F]
nameStr         -> nameChar:+

# Language
LangTag         -> language ("-" script):? ("-" region):? ("-" variant):* ("-" extension):* ("-" privateuse):?
language        -> alpha alpha alpha:? ("-" extlang):? | alpha alpha alpha alpha | alpha alpha alpha alpha alpha (alpha):? (alpha):? (alpha):?
extlang         -> alpha alpha alpha ("-" alpha alpha alpha):? ("-" alpha alpha alpha):?
script          -> alpha alpha alpha alpha
region          -> alpha alpha | digit digit digit
variant         -> digit alphanum alphanum alphanum | alphanum alphanum alphanum alphanum alphanum (alphanum):? (alphanum):? (alphanum):?
extension       -> singleton ("-" alphanum alphanum (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):?):+
singleton       -> digit | [\x41-\x57\x59-\x5A\x61-\x77\x79-\x7A]
privateuse      -> "x" ("-" alphanum (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):? (alphanum):?):+
alpha           -> [a-zA-z]
alphanum        -> alpha | digit
irregular       -> "en-GB-oed" | "i-ami" | "i-bnn" | "i-default" | "i-enochian" | "i-hak" | "i-klingon" | "i-lux" | "i-mingo" | "i-navajo" | "i-pwn" | "i-tao" | "i-tay" | "i-tsu" | "sgn-BE-FR" | "sgn-BE-NL" | "sgn-CH-DE"
regular         ->  "art-lojban" | "cel-gaulish" | "no-bok" | "no-nyn" | "zh-guoyu" | "zh-hakka" | "zh-min" | "zh-min-nan" | "zh-xiang"
grandfathered   -> irregular | regular

# Media Type
MediaType       -> mt_type "/" mt_subtype (";" mt_parameter):*
mt_type         -> mt_token
mt_subtype      -> mt_token
mt_parameter    -> mt_attribute "=" mt_value
mt_token        -> (mt_char):+
mt_attribute    -> mt_token
mt_value        -> mt_token | mt_qstring
mt_char         -> [\x20-\x21] | [\x23-\x27] | [\x2A-\x2B] | [\x2D-\x2E] | [\x30-\x39] | [\x41-\x5A] | [\x5E-\x7E]
mt_qstring      -> [\x22] (mt_qtext | mt_qpair):* [\x22]
mt_qtext        -> [\x09-\x0A] | [\x20-\x21] | [\x23-\x5B] | [\x5D-\x7E] 
mt_qpair        -> "\\" [\x09-7E]

# Special
Special         -> Text

Null -> "NULL"
NullOrY -> "Y" | Null