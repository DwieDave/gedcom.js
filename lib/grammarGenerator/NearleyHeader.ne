@{%
    // required modules
    const postprocessor = require('../Postprocessors.js');
    const {lineTypes} = require('../../util/Constants.js')
    const moo = require("moo");

    // moo-lexer to pre-compile input
    const lexer = moo.compile({
        BOM          : /[\ufeff]/,
        D            : /[ ]/,
        digit        : /[0-9]/,
        underscore   : /[_]/,
        Xref         : /\@[A-Z0-9\_]+\@/,
        atsign       : /\@/,
        comma        : /[\,]/,
        dot          : /[.]/,
        colon        : /[:]/,
        Z            : /[Z]/,
        EOL          : {match: /(?:\r\n?|\n)/, lineBreaks: true },

        // not Banned, no EOL, no Space, no @, no _, no comma
        notBannedNoEOLNoSpace:  /[^\x00-\x08\x0B-\x0C\x0E-\x1F\x7F\x80-\x9F\x0A\x0D\x20\x40\x5F\x2C]+/
    });
%}



