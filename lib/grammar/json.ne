# nearley starts with the very first rule of the file
# terminal: are to be taken literally and must be wrapped inside of ""
# nonterminal: describe a set of possible strings and is described by a rule (like value, number, ...)
inputs
    -> input
    |  input inputs

input -> _ value _  # {% id %} == {% (data) => data[0] %}
    {% (data) => data[1] %}

value 
    -> number   {% id %}    
    |  boolean  {% id %}
    |  myNull   {% id %}
    |  string   {% id %}
    |  array    {% id %}


# ====== NUMBER ======
number 
    -> digits "." digits
        {% (data) => Number(data[0] + "." + data[2]) %} 
    |  digits   
       {% (data) => Number(data.join("")) %}  

digits    # one or more digits 
    -> digit 
        {% id %}
    |  digit digits
        {% (data) => data.join("") %}  

digit -> [0-9]  {% id %}  # charakter class


# ===== BOLEAN =====
boolean
    -> "true"
        {% () => true %}
    |  "false"
        {% () => false %}


# ===== MYNULL =====
myNull -> "null"
    {% () => null %}



# ====== STRING ======
string -> "\"" characters "\""  # starts with " then characters and end with "  
        {% (data) => data[1] %}

characters
    -> character {% id %}
    |  character characters
        {% (data) =>  data[0] + data[1] %}

character -> [^\"]  {% id %}    # match every character but "



# ====== ARRAY ======
array 
    -> "[" _ array_items _ "]"
        {% (data) => data[2] %}
    |  "[" _ "]"
        {% () => [] %}

array_items
    -> value 
        {% (data => [data[0]]) %}
    |  value _ "," _ array_items
        {% (data => [data[0], ...data[4]]) %}


_ -> [ \t]:*





    

