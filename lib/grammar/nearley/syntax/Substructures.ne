# call moo-lexer
@lexer lexer

1_ADDRESS_STRUCTURE
	-> 1_g7_ADDR
		{%id%}

2_ADDRESS_STRUCTURE
	-> 2_g7_ADDR
		{%id%}

3_ADDRESS_STRUCTURE
	-> 3_g7_ADDR
		{%id%}

1_ASSOCIATION_STRUCTURE
	-> 1_g7_ASSO
		{%id%}

2_ASSOCIATION_STRUCTURE
	-> 2_g7_ASSO
		{%id%}

1_CHANGE_DATE
	-> 1_g7_CHAN
		{%id%}

2_CHANGE_DATE
	-> 2_g7_CHAN
		{%id%}

1_CREATION_DATE
	-> 1_g7_CREA
		{%id%}

2_EVENT_DETAIL
	-> 2_g7_DATE
		{%id%}
	|  2_PLACE_STRUCTURE
		{%id%}
	|  2_ADDRESS_STRUCTURE
		{%id%}
	|  2_g7_PHON
		{%id%}
	|  2_g7_EMAIL
		{%id%}
	|  2_g7_FAX
		{%id%}
	|  2_g7_WWW
		{%id%}
	|  2_g7_AGNC
		{%id%}
	|  2_g7_RELI
		{%id%}
	|  2_g7_CAUS
		{%id%}
	|  2_g7_RESN
		{%id%}
	|  2_g7_SDATE
		{%id%}
	|  2_ASSOCIATION_STRUCTURE
		{%id%}
	|  2_NOTE_STRUCTURE
		{%id%}
	|  2_SOURCE_CITATION
		{%id%}
	|  2_MULTIMEDIA_LINK
		{%id%}
	|  2_g7_UID
		{%id%}

1_FAMILY_ATTRIBUTE_STRUCTURE
	-> 1_g7_FAM_NCHI
		{%id%}
	|  1_g7_FAM_RESI
		{%id%}
	|  1_g7_FAM_FACT
		{%id%}

2_FAMILY_EVENT_DETAIL
	-> 2_g7_HUSB
		{%id%}
	|  2_g7_WIFE
		{%id%}
	|  2_EVENT_DETAIL
		{%id%}

1_FAMILY_EVENT_STRUCTURE
	-> 1_g7_ANUL
		{%id%}
	|  1_g7_FAM_CENS
		{%id%}
	|  1_g7_DIVF
		{%id%}
	|  1_g7_ENGA
		{%id%}
	|  1_g7_MARB
		{%id%}
	|  1_g7_MARC
		{%id%}
	|  1_g7_MARL
		{%id%}
	|  1_g7_MARR
		{%id%}
	|  1_g7_MARS
		{%id%}
	|  1_g7_FAM_EVEN
		{%id%}

1_IDENTIFIER_STRUCTURE
	-> 1_g7_REFN
		{%id%}
	|  1_g7_UID
		{%id%}
	|  1_g7_EXID
		{%id%}

1_INDIVIDUAL_ATTRIBUTE_STRUCTURE
	-> 1_g7_CAST
		{%id%}
	|  1_g7_DSCR
		{%id%}
	|  1_g7_EDUC
		{%id%}
	|  1_g7_IDNO
		{%id%}
	|  1_g7_NATI
		{%id%}
	|  1_g7_INDI_NCHI
		{%id%}
	|  1_g7_NMR
		{%id%}
	|  1_g7_OCCU
		{%id%}
	|  1_g7_PROP
		{%id%}
	|  1_g7_INDI_RELI
		{%id%}
	|  1_g7_INDI_RESI
		{%id%}
	|  1_g7_SSN
		{%id%}
	|  1_g7_INDI_TITL
		{%id%}
	|  1_g7_INDI_FACT
		{%id%}

2_INDIVIDUAL_EVENT_DETAIL
	-> 2_EVENT_DETAIL
		{%id%}
	|  2_g7_AGE
		{%id%}

1_INDIVIDUAL_EVENT_STRUCTURE
	-> 1_g7_ADOP
		{%id%}
	|  1_g7_BAPM
		{%id%}
	|  1_g7_BARM
		{%id%}
	|  1_g7_BASM
		{%id%}
	|  1_g7_BIRT
		{%id%}
	|  1_g7_BLES
		{%id%}
	|  1_g7_BURI
		{%id%}
	|  1_g7_INDI_CENS
		{%id%}
	|  1_g7_CHR
		{%id%}
	|  1_g7_CHRA
		{%id%}
	|  1_g7_CONF
		{%id%}
	|  1_g7_CREM
		{%id%}
	|  1_g7_DEAT
		{%id%}
	|  1_g7_EMIG
		{%id%}
	|  1_g7_FCOM
		{%id%}
	|  1_g7_GRAD
		{%id%}
	|  1_g7_IMMI
		{%id%}
	|  1_g7_NATU
		{%id%}
	|  1_g7_ORDN
		{%id%}
	|  1_g7_PROB
		{%id%}
	|  1_g7_RETI
		{%id%}
	|  1_g7_WILL
		{%id%}
	|  1_g7_INDI_EVEN
		{%id%}

1_LDS_INDIVIDUAL_ORDINANCE
	-> 1_g7_BAPL
		{%id%}
	|  1_g7_CONL
		{%id%}
	|  1_g7_ENDL
		{%id%}
	|  1_g7_INIL
		{%id%}
	|  1_g7_SLGC
		{%id%}

2_LDS_ORDINANCE_DETAIL
	-> 2_g7_DATE
		{%id%}
	|  2_g7_TEMP
		{%id%}
	|  2_PLACE_STRUCTURE
		{%id%}
	|  2_g7_ord_STAT
		{%id%}
	|  2_NOTE_STRUCTURE
		{%id%}
	|  2_SOURCE_CITATION
		{%id%}

1_LDS_SPOUSE_SEALING
	-> 1_g7_SLGS
		{%id%}

1_MULTIMEDIA_LINK
	-> 1_g7_OBJE
		{%id%}

2_MULTIMEDIA_LINK
	-> 2_g7_OBJE
		{%id%}

3_MULTIMEDIA_LINK
	-> 3_g7_OBJE
		{%id%}

4_MULTIMEDIA_LINK
	-> 4_g7_OBJE
		{%id%}

5_MULTIMEDIA_LINK
	-> 5_g7_OBJE
		{%id%}

6_MULTIMEDIA_LINK
	-> 6_g7_OBJE
		{%id%}

1_NOTE_STRUCTURE
	-> 1_g7_NOTE
		{%id%}
	|  1_g7_SNOTE
		{%id%}

3_NOTE_STRUCTURE
	-> 3_g7_NOTE
		{%id%}
	|  3_g7_SNOTE
		{%id%}

2_PLACE_STRUCTURE
	-> 2_g7_PLAC
		{%id%}

1_SOURCE_CITATION
	-> 1_g7_SOUR
		{%id%}

3_SOURCE_CITATION
	-> 3_g7_SOUR
		{%id%}