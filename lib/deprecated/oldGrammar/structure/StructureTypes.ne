# call moo-lexer
@lexer lexer

# =====================================================
# STRUCTURE TYPES
# =====================================================
FAM_HUSB 
    -> Level D "HUSB" D %Xref EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.NO_XREF, checkCardinalityOf: {PHRASE:"0:1"}})%} 
    |  FAM_HUSB PHRASE
        {% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

FAM_WIFE 
    -> Level D "WIFE" D %Xref EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.NO_XREF, checkCardinalityOf: {PHRASE:"0:1"}})%}
    |  FAM_WIFE PHRASE
        {% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

CHIL 
    -> Level D "CHIL" D %Xref EOL
        {% (d) => postprocessor.createStructure({line: d, type: lineTypes.NO_XREF})%}
    |  CHIL PHRASE
        {% (d) => postprocessor.addSubstructure({superstruct: d[0], substructs: d[1]}) %}

#ABBR (Abbreviation)
#g7_ABBR
#	->

#ADDR (Address)
#g7_ADDR
#	->

#ADOP (Adoption)
#g7_ADOP
#	->

#ADOP (Adoption)
#g7_FAMC_ADOP
#	->

#ALIA (Alias)
#g7_ALIA
#	->

#ANUL (Annulment)
#g7_ANUL
#	->

#ASSO (Associates)
#g7_ASSO
#	->

#AUTH (Author)
#g7_AUTH
#	->

#BAPM (Baptism)
#g7_BAPM
#	->

#BIRT (Birth)
#g7_BIRT
#	->

#BLES (Blessing)
#g7_BLES
#	->

#BURI (Burial)
#g7_BURI
#	->

#CAST (Caste)
#g7_CAST
#	->

#CAUS (Cause)
#g7_CAUS
#	->

#CENS (Census)
#g7_FAM_CENS
#	->

#CENS (Census)
#g7_INDI_CENS
#	->

#CHAN (Change)
#g7_CHAN
#	->

#CHIL (Child)
#g7_CHIL
#	->

#CHR (Christening)
#g7_CHR
#	->

#CITY (City)
#g7_CITY
#	->

#CONF (Confirmation)
#g7_CONF
#	->

#COPR (Copyright)
#g7_COPR
#	->

#CREA (Creation)
#g7_CREA
#	->

#CREM (Cremation)
#g7_CREM
#	->

#CROP (Crop)
#g7_CROP
#	->

#CTRY (Country)
#g7_CTRY
#	->

#DATA (Data)
#g7_DATA
#	->

#DATA (Data)
#g7_SOUR_DATA
#	->

#DATA (Data)
#g7_HEAD_SOUR_DATA
#	->

#DATE (Date)
#g7_DATE
#	->

#DATE (Date)
#g7_DATE_exact
#	->

#DATE (Date)
#g7_HEAD_DATE
#	->

#DATE (Date)
#g7_NO_DATE
#	->

#DATE (Date)
#g7_DATA_EVEN_DATE
#	->

#DEAT (Death)
#g7_DEAT
#	->

#DEST (Destination)
#g7_DEST
#	->

#DIV (Divorce)
#g7_DIV
#	->

#DSCR (Description)
#g7_DSCR
#	->

#EDUC (Description)
#g7_EDUC
#	->

#EMAIL (Email)
#g7_EMAIL
#	->

#EMIG (Description)
#g7_EMIG
#	->

#ENGA (Engagement)
#g7_ENGA
#	->

#EVEN (Event)
#g7_FAM_EVEN
#	->

#EVEN (Event)
#g7_INDI_EVEN
#	->

#EVEN (Event)
#g7_DATA_EVEN
#	->

#EVEN (Event)
#g7_SOUR_EVEN
#	->

#FACT (Fact)
#g7_FAM_FACT
#	->

#FACT (Fact)
#g7_INDI_FACT
#	->

#FAX (Facsimile)
#g7_FAX
#	->

#FORM (Format)
#g7_FORM
#	->

#FORM (Format)
#g7_PLAC_FORM
#	->

#FORM (Format)
#g7_HEAD_PLAC_FORM
#	->

#GEDC (GEDCOM)
#g7_GEDC
#	->

#GRAD (Graduation)
#g7_GRAD
#	->

#HUSB (Husband)
#g7_HUSB
#	->

#HUSB (Husband)
#g7_FAM_HUSB
#	->

#IMMI (Immigration)
#g7_IMMI
#	->

#INDI (Individual)
#g7_record_INDI
#	->

#LANG (Language)
#g7_LANG
#	->

#LANG (Language)
#g7_HEAD_LANG
#	->

#LANG (Language)
#g7_SUBM_LANG
#	->

#LATI (Latitude)
#g7_LATI
#	->

#LONG (Longitude)
#g7_LONG
#	->

#MAP (Map)
#g7_MAP
#	->

#MARR (Marriage)
#g7_MARR
#	->

#MEDI (Medium)
#g7_MEDI
#	->

#NAME (Name)
#g7_NAME
#	->

#NAME (Name)
#g7_INDI_NAME
#	->

#NATI (Nationality)
#g7_NATI
#	->

#NATU (Naturalization)
#g7_NATU
#	->

#NICK (Nickname)
#g7_NICK
#	->

#NOTE (Note)
#g7_NOTE
#	->

#OBJE (Object)
#g7_OBJE
#	->

#OBJE (Object)
#g7_record_OBJE
#	->

#OCCU (Occupation)
#g7_OCCU
#	->

#ORDN (Ordination)
#g7_ORDN
#	->

#PAGE (Page)
#g7_PAGE
#	->

#PEDI (Pedigree)
#g7_PEDI
#	->

#PHON (Phone)
#g7_PHON
#	->

#PHRASE (Phrase)
#g7_PHRASE
#	->

#PLAC (Place)
#g7_PLAC
#	->

#PLAC (Place)
#g7_HEAD_PLAC
#	->

#PROB (Probate)
#g7_PROB
#	->

#PROP (Property)
#g7_PROP
#	->

#PUBL (Publication)
#g7_PUBL
#	->

#REFN (Reference)
#g7_REFN
#	->

#RELI (Religion)
#g7_RELI
#	->

#RELI (Religion)
#g7_INDI_RELI
#	->

#RESN (Restriction)
#g7_RESN
#	->

#REPO (Repository)
#g7_REPO
#	->

#REPO (Repository)
#g7_record_REPO
#	->

#RESI (Residence)
#g7_FAM_RESI
#	->

#RESI (Residence)
#g7_INDI_RESI
#	->

#RETI (Retirement)
#g7_RETI
#	->

#ROLE (Role)
#g7_ROLE
#	->

#SEX (Sex)
#g7_SEX
#	->

#SOUR (Source)
#g7_SOUR
#	->

#SOUR (Source)
#g7_record_SOUR
#	->

#SOUR (Source)
#g7_HEAD_SOUR
#	->

#STAE (State)
#g7_STAE
#	->

#STAT (Status)
#g7_ord_STAT
#	->

#STAT (Status)
#g7_FAMC_STAT
#	->

#SUBM (Submitter)
#g7_SUBM
#	->

#SUBM (Submitter)
#g7_record_SUBM
#	->

#SURN (Surname)
#g7_SURN
#	->

#TEMP (Temple)
#g7_TEMP
#	->

#TIME (Time)
#g7_TIME
#	->

#TITL (Title)
#g7_TITL
#	->

#TITL (Title)
#g7_INDI_TITL
#	->

#TRAN (Translation)
#g7_NAME_TRAN
#	->

#TRAN (Translation)
#g7_PLAC_TRAN
#	->

#TRAN (Translation)
#g7_NOTE_TRAN
#	->

#TRAN (Translation)
#g7_FILE_TRAN
#	->

#TYPE (Type)
#g7_TYPE
#	->

#TYPE (Type)
#g7_NAME_TYPE
#	->

#TYPE (Type)
#g7_EXID_TYPE
#	->

#VERS (Version)
#g7_VERS
#	->

#VERS (Version)
#g7_GEDC_VERS
#	->

#WIFE (Wife)
#g7_WIFE
#	->

#WIFE (Wife)
#g7_FAM_WIFE
#	->

#WILL (Will)
#g7_WILL
#	->