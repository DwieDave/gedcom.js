# call moo-lexer
@lexer lexer

3_ADDRESS_STRUCTURE
	-> 3_g7_ADDR
		{%id%}

2_EVENT_DETAIL
	-> 2_g7_DATE
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