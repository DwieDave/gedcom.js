# call moo-lexer
@lexer lexer

2_ADDRESS_STRUCTURE
	-> 2_g7_ADDR
		{%id%}

3_ADDRESS_STRUCTURE
	-> 3_g7_ADDR
		{%id%}

2_ASSOCIATION_STRUCTURE
	-> 2_g7_ASSO
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