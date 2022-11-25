@{%

    const moo = require("moo");
    // moo-lexer to pre-compile input
    const lexer = moo.compile({
        lexer_D          : /[ ]/,
        lexer_digit      : /[0-9]/,
        lexer_underscore : /[_]/,
        lexer_xref     : /\@[A-Z0-9\_]+\@/,
        lexer_EOL: {match: /[\n]/, lineBreaks: true },
        // not Banned, no EOL, no Space, no @, no _
        lexer_notBannedNoEOLNoSpace:  /[^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D\x20\x40\x5F]+/
    });
%}

# call moo-lexer
@lexer lexer

input -> fam

fam -> Level D %lexer_xref D "FAM" EOL
    {%
        (data) => {
            console.log("postprocessor called");
            return data;
        }
    %}

EOL -> "\n"
D -> " "

Level       
    -> "0" {%id%} 
    |  nonzero digit:*

digit       
    -> [0-9] {%id%}

nonzero     
    -> [1-9] {%id%}

Xref        
    -> %lexer_atsign tagChar %lexer_atsign  

atsign      
    -> "@" {%id%}

tagChar     
    -> ucletter {%id%}
    |  digit {%id%}
    |  underscore {%id%}

ucletter    
    -> [A-Z] {%id%}

underscore  
    -> "_" {%id%}