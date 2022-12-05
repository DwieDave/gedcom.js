# call moo-lexer
@lexer lexer

# =====================================================
# ENUMS
# =====================================================
g7_enumset_ADOP
    -> "HUSB"   {%id%}
    |  "WIFE"   {%id%}
    |  "BOTH"   {%id%}

#g7_enumset_EVEN
#g7_enumset_EVENATTR

g7_enumset_MEDI
    -> "AUDIO"      {%id%}
    |  "BOOk"       {%id%}
    |  "CARD"       {%id%}
    |  "ELECTRONIC" {%id%}
    |  "FICHE"      {%id%}
    |  "FILM"       {%id%}
    |  "MAGAZINE"   {%id%}
    |  "MANUSKRIPT" {%id%}
    |  "MAP"        {%id%}
    |  "NEWSPAPER"  {%id%}
    |  "PHOTO"      {%id%}
    |  "TOMBSTONE"  {%id%}
    |  "VIDEO"      {%id%}
    |  "OTHER"      {%id%}


g7_enumset_PEDI
    -> "ADOPTED"    {%id%}
    |  "BIRTH"      {%id%}
    |  "FOSTER"     {%id%}   
    |  "SEALING"    {%id%}
    |  "OTHER"      {%id%}


g7_enumset_QUAY
    -> "0"  {%id%}
    |  "1"  {%id%}
    |  "2"  {%id%}
    |  "3"  {%id%}


g7_enumset_RESN 
    -> "CONFIDENTIAL" {%id%} 
    |  "LOCKED"       {%id%}
    |  "PRIVACY"      {%id%}


g7_enumset_ROLE      
    -> "CHIL"       {%id%} 
    |  "CLERGY"     {%id%} 
    |  "FATH"       {%id%} 
    |  "FRIEND"     {%id%} 
    |  "GODP"       {%id%} 
    |  "HUSB"       {%id%} 
    |  "MOTH"       {%id%} 
    |  "MULTIPLE"   {%id%} 
    |  "NGHBR"      {%id%} 
    |  "OFFICIATOR" {%id%} 
    |  "SPOU"       {%id%} 
    |  "WIFE"       {%id%} 
    |  "WITN"       {%id%} 
    |  "OTHER"      {%id%}


g7_enumset_SEX  
    -> "M" {%id%} 
    |  "F" {%id%} 
    |  "X" {%id%} 
    |  "U" {%id%}


g7_enumset_FAMC_STAT
    -> "CHALLENGED" {%id%}
    |  "DISPROVEN"  {%id%}
    |  "PROVEN"     {%id%}


g7_enumset_ord_STAT
    -> "BIC"        {%id%}
    |  "CANCELED"   {%id%}
    |  "CHILD"      {%id%}
    |  "COMPLETED"  {%id%}
    |  "EXCLUDED"   {%id%}
    |  "DNS"        {%id%}
    |  "DNS_CAN"    {%id%}
    |  "INFANT"     {%id%}  
    |  "PRE_1970"   {%id%}
    |  "STILLBORN"  {%id%}
    |  "SUBMITTED"  {%id%}
    |  "UNCLEARED"  {%id%}


g7_enumset_NAME_TYPE
    -> "AKA"            {%id%}
    |  "BIRTH"          {%id%}
    |  "IMMIGRANT"      {%id%}
    |  "MAIDEN"         {%id%}
    |  "MARRIED"        {%id%}
    |  "PROFESSIONAL"   {%id%}
    |  "OTHER"          {%id%}

