const { lineTypes, dataTypes, gedcomEnumTypes } = require('../../util/Constants');

module.exports = {
  grammarName: 'StructureTypes',
  rules: [
    {
      // Test
      uri: 'g7:TEST',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.DatePeriod,
      tag: 'TEST',
      substructs: {
      }
    },
    {
      // Abbreviation
      uri: 'g7:ABBR',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'ABBR',
      substructs: {}
    },
    {
      // Address
      uri: 'g7:ADDR',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3],
      lineValType: dataTypes.Special,
      tag: 'ADDR',
      substructs: {
        'g7:ADR1': '0:1',
        'g7:ADR2': '0:1',
        'g7:ADR3': '0:1',
        'g7:CITY': '0:1',
        'g7:STAE': '0:1',
        'g7:POST': '0:1',
        'g7:CTRY': '0:1'
      }
    },
    {
      // Adoption
      uri: 'g7:ADOP',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'ADOP',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1',
        'g7:ADOP-FAMC': '0:1'
      }
    },
    {
      // Adoption
      uri: 'g7:FAMC-ADOP',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [3],
      lineValType: dataTypes.Enum,
      enumType: 'g7:enumset-ADOP',
      tag: 'ADOP',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Address Line 1
      uri: 'g7:ADR1',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4],
      lineValType: dataTypes.Special,
      tag: 'ADR1',
      substructs: {}
    },
    {
      // Address Line 2
      uri: 'g7:ADR2',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4],
      lineValType: dataTypes.Special,
      tag: 'ADR2',
      substructs: {}
    },
    {
      // Address Line 3
      uri: 'g7:ADR3',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4],
      lineValType: dataTypes.Special,
      tag: 'ADR3',
      substructs: {}
    },
    {
      // Age at event
      uri: 'g7:AGE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3],
      lineValType: dataTypes.Age,
      tag: 'AGE',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Responsible agency
      uri: 'g7:AGNC',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Text,
      tag: 'AGNC',
      substructs: {}
    },
    {
      // Alias
      uri: 'g7:ALIA',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Xref,
      tag: 'ALIA',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Ancestor interest
      uri: 'g7:ANCI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Xref,
      tag: 'ANCI',
      substructs: {}
    },
    {
      // Annulment
      uri: 'g7:ANUL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'ANUL',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Associates
      uri: 'g7:ASSO',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2],
      lineValType: dataTypes.Xref,
      tag: 'ASSO',
      substructs: {
        'g7:PHRASE': '0:1',
        'g7:ROLE': '1:1',
        NOTE_STRUCTURE: '0:M',
        SOURCE_CITATION: '0:M'
      }
    },
    {
      // Author
      uri: 'g7:AUTH',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'AUTH',
      substructs: {}
    },
    {
      // Baptism, Latter-Day Saint
      uri: 'g7:BAPL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [1],
      tag: 'BAPL',
      substructs: {
        LDS_ORDINANCE_DETAIL: '0:1'
      }
    },
    {
      // Baptism
      uri: 'g7:BAPM',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'BAPM',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Bar Mitzvah
      uri: 'g7:BARM',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'BARM',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Bas Mitzvah
      uri: 'g7:BASM',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'BASM',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Birth
      uri: 'g7:BIRT',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'BIRT',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1',
        'g7:FAMC': '0:1'
      }
    },
    {
      // Blessing
      uri: 'g7:BLES',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'BLES',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Burial
      uri: 'g7:BURI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'BURI',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Call number
      uri: 'g7:CALN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Special,
      tag: 'CALN',
      substructs: {
        'g7:MEDI': '0:1'
      }
    },
    {
      // Caste
      uri: 'g7:CAST',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'CAST',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Cause
      uri: 'g7:CAUS',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Text,
      tag: 'CAUS',
      substructs: {}
    },
    {
      // Census
      uri: 'g7:FAM-CENS',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'CENS',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Census
      uri: 'g7:INDI-CENS',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'CENS',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Change
      uri: 'g7:CHAN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [1, 2],
      tag: 'CHAN',
      substructs: {
        'g7:DATE-exact': '1:1',
        NOTE_STRUCTURE: '0:M'
      }
    },
    {
      // Child
      uri: 'g7:CHIL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Xref,
      tag: 'CHIL',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Christening, adult
      uri: 'g7:CHRA',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'CHRA',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Christening
      uri: 'g7:CHR',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'CHR',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1',
        'g7:FAMC': '0:1'
      }
    },
    {
      // City
      uri: 'g7:CITY',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4],
      lineValType: dataTypes.Special,
      tag: 'CITY',
      substructs: {}
    },
    {
      // Confirmation
      uri: 'g7:CONF',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'CONF',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Confirmation, Latter-Day Saint
      uri: 'g7:CONL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [1],
      tag: 'CONL',
      substructs: {
        LDS_ORDINANCE_DETAIL: '0:1'
      }
    },
    {
      // Copyright
      uri: 'g7:COPR',
      info: 'Structure Info coming soon!',
      level: [1, 3],
      lineType: lineTypes.NO_XREF,
      lineValType: dataTypes.Text,
      tag: 'COPR',
      substructs: {}
    },
    {
      // Corporate name
      uri: 'g7:CORP',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Text,
      tag: 'CORP',
      substructs: {
        ADDRESS_STRUCTURE: '0:1',
        'g7:PHON': '0:M',
        'g7:EMAIL': '0:M',
        'g7:FAX': '0:M',
        'g7:WWW': '0:M'
      }
    },
    {
      // Creation
      uri: 'g7:CREA',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [1],
      tag: 'CREA',
      substructs: {
        'g7:DATE-exact': '1:1'
      }
    },
    {
      // Cremation
      uri: 'g7:CREM',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'CREM',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Crop
      uri: 'g7:CROP',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [2, 3, 4, 5, 6, 7],
      tag: 'CROP',
      substructs: {
        'g7:TOP': '0:1',
        'g7:LEFT': '0:1',
        'g7:HEIGHT': '0:1',
        'g7:WIDTH': '0:1'
      }
    },
    {
      // Country
      uri: 'g7:CTRY',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4],
      lineValType: dataTypes.Special,
      tag: 'CTRY',
      substructs: {}
    },
    {
      // Data
      uri: 'g7:DATA',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [1],
      tag: 'DATA',
      substructs: {
        'g7:DATA-EVEN': '0:M',
        'g7:AGNC': '0:1',
        NOTE_STRUCTURE: '0:M'
      }
    },
    {
      // Data
      uri: 'g7:SOUR-DATA',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [2, 3, 4, 5, 6],
      tag: 'DATA',
      substructs: {
        'g7:DATE': '0:1',
        'g7:TEXT': '0:M'
      }
    },
    {
      // Data
      uri: 'g7:HEAD-SOUR-DATA',
      info: 'Structure Info coming soon!',
      level: [2],
      lineType: lineTypes.NO_XREF,
      lineValType: dataTypes.Text,
      tag: 'DATA',
      substructs: {
        'g7:DATE-exact': '0:1',
        'g7:COPR': '0:1'
      }
    },
    {
      // Date
      uri: 'g7:DATE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4, 5, 6, 7],
      lineValType: dataTypes.DateValue,
      tag: 'DATE',
      substructs: {
        'g7:TIME': '0:1',
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Date
      uri: 'g7:DATE-exact',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3],
      lineValType: dataTypes.DateExact,
      tag: 'DATE',
      substructs: {
        'g7:TIME': '0:1'
      }
    },
    {
      // Date
      uri: 'g7:HEAD-DATE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.DateExact,
      tag: 'DATE',
      substructs: {
        'g7:TIME': '0:1'
      }
    },
    {
      // Date
      uri: 'g7:NO-DATE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.DatePeriod,
      tag: 'DATE',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Date
      uri: 'g7:DATA-EVEN-DATE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [3],
      lineValType: dataTypes.DatePeriod,
      // enumType:"g7:enumset-EVENATTR"
      tag: 'DATE',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Death
      uri: 'g7:DEAT',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'DEAT',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Descendant Interest
      uri: 'g7:DESI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Xref,
      tag: 'DESI',
      substructs: {}
    },
    {
      // Destination
      uri: 'g7:DEST',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Special,
      tag: 'DEST',
      substructs: {}
    },
    {
      // Divorce filing
      uri: 'g7:DIVF',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'DIVF',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Divorce
      uri: 'g7:DIV',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'DIV',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Description
      uri: 'g7:DSCR',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'DSCR',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Description
      uri: 'g7:EDUC',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'EDUC',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Email
      uri: 'g7:EMAIL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3],
      lineValType: dataTypes.Special,
      tag: 'EMAIL',
      substructs: {}
    },
    {
      // Description
      uri: 'g7:EMIG',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'EMIG',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Endowment, Latter-Day Saint
      uri: 'g7:ENDL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [1],
      tag: 'ENDL',
      substructs: {
        LDS_ORDINANCE_DETAIL: '0:1'
      }
    },
    {
      // Engagement
      uri: 'g7:ENGA',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'ENGA',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Event
      uri: 'g7:FAM-EVEN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'EVEN',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Event
      uri: 'g7:INDI-EVEN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'EVEN',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Event
      uri: 'g7:DATA-EVEN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.ListText,
      // enumType:"g7:enumset-EVENATTR"
      tag: 'EVEN',
      substructs: {
        'g7:DATA-EVEN-DATE': '0:1',
        PLACE_STRUCTURE: '0:1'
      }
    },
    {
      // Event
      uri: 'g7:SOUR-EVEN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4, 5, 6],
      lineValType: dataTypes.Text,
      // enumType:"g7:enumset-EVENATTR",
      tag: 'EVEN',
      substructs: {
        'g7:PHRASE': '0:1',
        'g7:ROLE': '0:1'
      }
    },
    {
      // External Identifier
      uri: 'g7:EXID',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 3, 4],
      lineValType: dataTypes.Special,
      tag: 'EXID',
      substructs: {
        'g7:EXID-TYPE': '0:1'
      }
    },
    {
      // Fact
      uri: 'g7:FAM-FACT',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'FACT',
      substructs: {
        'g7:TYPE': '1:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Fact
      uri: 'g7:INDI-FACT',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'FACT',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Family child
      uri: 'g7:INDI-FAMC',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Xref,
      tag: 'FAMC',
      substructs: {
        'g7:PEDI': '0:1',
        'g7:FAMC-STAT': '0:1',
        NOTE_STRUCTURE: '0:M'
      }
    },
    {
      // Family child
      uri: 'g7:FAMC',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Xref,
      tag: 'FAMC',
      substructs: {}
    },
    {
      // Family child
      uri: 'g7:ADOP-FAMC',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Xref,
      tag: 'FAMC',
      substructs: {
        'g7:FAMC-ADOP': '0:1'
      }
    },
    {
      // Family spouse
      uri: 'g7:FAMS',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Xref,
      tag: 'FAMS',
      substructs: {
        NOTE_STRUCTURE: '0:M'
      }
    },
    {
      // Facsimile
      uri: 'g7:FAX',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3],
      lineValType: dataTypes.Special,
      tag: 'FAX',
      substructs: {}
    },
    {
      // First communion
      uri: 'g7:FCOM',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'FCOM',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // File reference
      uri: 'g7:FILE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Special,
      tag: 'FILE',
      substructs: {
        'g7:FORM': '1:1',
        'g7:TITL': '0:1',
        'g7:FILE-TRAN': '0:M'
      }
    },
    {
      // Format
      uri: 'g7:FORM',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3],
      lineValType: dataTypes.MediaType,
      tag: 'FORM',
      substructs: {
        'g7:MEDI': '0:1'
      }
    },
    {
      // Format
      uri: 'g7:PLAC-FORM',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [3, 4],
      lineValType: dataTypes.ListText,
      tag: 'FORM',
      substructs: {}
    },
    {
      // Format
      uri: 'g7:HEAD-PLAC-FORM',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.ListText,
      tag: 'FORM',
      substructs: {}
    },
    {
      // GEDCOM
      uri: 'g7:GEDC',
      info: 'Structure Info coming soon!',
      level: [1],
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      tag: 'GEDC',
      substructs: {
        'g7:GEDC-VERS': '1:1'
      }
    },
    {
      // Given name
      uri: 'g7:GIVN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3],
      lineValType: dataTypes.Text,
      tag: 'GIVN',
      substructs: {}
    },
    {
      // Graduation
      uri: 'g7:GRAD',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'GRAD',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Height in pixels
      uri: 'g7:HEIGHT',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [3, 4, 5, 6, 7, 8],
      lineValType: dataTypes.Integer,
      tag: 'HEIGHT',
      substructs: {}
    },
    {
      // Husband
      uri: 'g7:HUSB',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [2],
      tag: 'HUSB',
      substructs: {
        'g7:AGE': '1:1'
      }
    },
    {
      // Husband
      uri: 'g7:FAM-HUSB',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Xref,
      tag: 'HUSB',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Identification number
      uri: 'g7:IDNO',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Special,
      tag: 'IDNO',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Immigration
      uri: 'g7:IMMI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'IMMI',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Initiatory, Latter-Day Saint
      uri: 'g7:INIL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [1],
      tag: 'INIL',
      substructs: {
        LDS_ORDINANCE_DETAIL: '0:1'
      }
    },
    {
      // Language
      uri: 'g7:LANG',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3, 4, 5, 6, 7, 8],
      lineValType: dataTypes.Language,
      tag: 'LANG',
      substructs: {}
    },
    {
      // Language
      uri: 'g7:HEAD-LANG',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Language,
      tag: 'LANG',
      substructs: {}
    },
    {
      // Language
      uri: 'g7:SUBM-LANG',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Language,
      tag: 'LANG',
      substructs: {}
    },
    {
      // Latitude
      uri: 'g7:LATI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [4, 5],
      lineValType: dataTypes.Special,
      tag: 'LATI',
      substructs: {}
    },
    {
      // Left crop width
      uri: 'g7:LEFT',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [3, 4, 5, 6, 7, 8],
      lineValType: dataTypes.Integer,
      tag: 'LEFT',
      substructs: {}
    },
    {
      // Longitude
      uri: 'g7:LONG',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [4, 5],
      lineValType: dataTypes.Special,
      tag: 'LONG',
      substructs: {}
    },
    {
      // Map
      uri: 'g7:MAP',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [3, 4],
      tag: 'MAP',
      substructs: {
        'g7:LATI': '1:1',
        'g7:LONG': '1:1'
      }
    },
    {
      // Marriage banns
      uri: 'g7:MARB',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'MARB',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Marriage contract
      uri: 'g7:MARC',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'MARC',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Marriage license
      uri: 'g7:MARL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'MARL',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Marriage
      uri: 'g7:MARR',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'MARR',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Marriage settlement
      uri: 'g7:MARS',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'MARS',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Medium
      uri: 'g7:MEDI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [3, 4],
      lineValType: dataTypes.Enum,
      enumType: 'g7:enumset-MEDI',
      tag: 'MEDI',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Media type
      uri: 'g7:MIME',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3, 4, 5, 6, 7, 8],
      lineValType: dataTypes.MediaType,
      tag: 'MIME',
      substructs: {}
    },
    {
      // Name
      uri: 'g7:NAME',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2],
      lineValType: dataTypes.Text,
      tag: 'NAME',
      substructs: {}
    },
    {
      // Name
      uri: 'g7:INDI-NAME',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.PersonalName,
      tag: 'NAME',
      substructs: {
        'g7:NAME-TYPE': '0:1',
        PERSONAL_NAME_PIECES: '0:1',
        'g7:NAME-TRAN': '0:M',
        NOTE_STRUCTURE: '0:M',
        SOURCE_CITATION: '0:M'
      }
    },
    {
      // Nationality
      uri: 'g7:NATI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'NATI',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Naturalization
      uri: 'g7:NATU',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'NATU',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Number of children
      uri: 'g7:FAM-NCHI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Integer,
      tag: 'NCHI',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Number of children
      uri: 'g7:INDI-NCHI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Integer,
      tag: 'NCHI',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Nickname
      uri: 'g7:NICK',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3],
      lineValType: dataTypes.Text,
      tag: 'NICK',
      substructs: {}
    },
    {
      // Number of marriages
      uri: 'g7:NMR',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Integer,
      tag: 'NMR',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Did not happen
      uri: 'g7:NO',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      // enumType: "g7:enumset-EVEN",
      tag: 'NO',
      substructs: {
        'g7:NO-DATE': '0:1',
        NOTE_STRUCTURE: '0:M',
        SOURCE_CITATION: '0:M'
      }
    },
    {
      // Note
      uri: 'g7:NOTE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3, 4],
      lineValType: dataTypes.Text,
      tag: 'NOTE',
      substructs: {
        'g7:MIME': '0:1',
        'g7:LANG': '0:1',
        'g7:NOTE-TRAN': '0:M',
        SOURCE_CITATION: '0:M'
      }
    },
    {
      // Name prefix
      uri: 'g7:NPFX',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3],
      lineValType: dataTypes.Text,
      tag: 'NPFX',
      substructs: {}
    },
    {
      // Name suffix
      uri: 'g7:NSFX',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3],
      lineValType: dataTypes.Text,
      tag: 'NSFX',
      substructs: {}
    },
    {
      // Object
      uri: 'g7:OBJE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3, 4, 5, 6],
      lineValType: dataTypes.Xref,
      tag: 'OBJE',
      substructs: {
        'g7:CROP': '0:1',
        'g7:TITL': '0:1'
      }
    },
    {
      // Occupation
      uri: 'g7:OCCU',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'OCCU',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Ordination
      uri: 'g7:ORDN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'ORDN',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Page
      uri: 'g7:PAGE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4, 5, 6],
      lineValType: dataTypes.Text,
      tag: 'PAGE',
      substructs: {}
    },
    {
      // Pedigree
      uri: 'g7:PEDI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Enum,
      enumType: 'g7:enumset-PEDI',
      tag: 'PEDI',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Phone
      uri: 'g7:PHON',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3],
      lineValType: dataTypes.Special,
      tag: 'PHON',
      substructs: {}
    },
    {
      // Phrase
      uri: 'g7:PHRASE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4, 5, 6, 7, 8],
      lineValType: dataTypes.Text,
      tag: 'PHRASE',
      substructs: {}
    },
    {
      // Place
      uri: 'g7:PLAC',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3],
      lineValType: dataTypes.ListText,
      tag: 'PLAC',
      substructs: {
        'g7:PLAC-FORM': '0:1',
        'g7:LANG': '0:1',
        'g7:PLAC-TRAN': '0:M',
        'g7:MAP': '0:1',
        'g7:EXID': '0:M',
        NOTE_STRUCTURE: '0:M'
      }
    },
    {
      // Place
      uri: 'g7:HEAD-PLAC',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [1],
      tag: 'PLAC',
      substructs: {
        'g7:HEAD-PLAC-FORM': '1:1'
      }
    },
    {
      // Postal code
      uri: 'g7:POST',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4],
      lineValType: dataTypes.Special,
      tag: 'POST',
      substructs: {}
    },
    {
      // Probate
      uri: 'g7:PROB',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'PROB',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Property
      uri: 'g7:PROP',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'PROP',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Publication
      uri: 'g7:PUBL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'PUBL',
      substructs: {}
    },
    {
      // Quality of data
      uri: 'g7:QUAY',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4, 5, 6],
      lineValType: dataTypes.Enum,
      enumType: 'g7:enumset-QUAY',
      tag: 'QUAY',
      substructs: {}
    },
    {
      // Reference
      uri: 'g7:REFN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Special,
      tag: 'REFN',
      substructs: {
        'g7:TYPE': '0:1'
      }
    },
    {
      // Religion
      uri: 'g7:RELI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Text,
      tag: 'RELI',
      substructs: {}
    },
    {
      // Religion
      uri: 'g7:INDI-RELI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'RELI',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Restriction
      uri: 'g7:RESN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2],
      lineValType: dataTypes.ListEnum,
      enumType: 'g7:enumset-RESN',
      tag: 'RESN',
      substructs: {}
    },
    {
      // Repository
      uri: 'g7:REPO',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Xref,
      tag: 'REPO',
      substructs: {
        NOTE_STRUCTURE: '0:M',
        'g7:CALN': '0:M'
      }
    },
    {
      // Residence
      uri: 'g7:FAM-RESI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'RESI',
      substructs: {
        'g7:TYPE': '0:1',
        FAMILY_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Residence
      uri: 'g7:INDI-RESI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'RESI',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Retirement
      uri: 'g7:RETI',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'RETI',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Role
      uri: 'g7:ROLE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4, 5, 6, 7],
      lineValType: dataTypes.Enum,
      enumType: 'g7:enumset-ROLE',
      tag: 'ROLE',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Extension schema
      uri: 'g7:SCHMA',
      info: 'Structure Info coming soon!',
      level: [1],
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      tag: 'SCHMA',
      substructs: {
        'g7:TAG': '0:M'
      }
    },
    {
      // Sort date
      uri: 'g7:SDATE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.DateValue,
      tag: 'SDATE',
      substructs: {
        'g7:TIME': '0:1',
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Sex
      uri: 'g7:SEX',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Enum,
      enumType: 'g7:enumset-SEX',
      tag: 'SEX',
      substructs: {}
    },
    {
      // Sealing, child
      uri: 'g7:SLGC',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [1],
      tag: 'SLGC',
      substructs: {
        LDS_ORDINANCE_DETAIL: '0:1',
        'g7:FAMC': '1:1'
      }
    },
    {
      // Sealing, spouse
      uri: 'g7:SLGS',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [1],
      tag: 'SLGS',
      substructs: {
        LDS_ORDINANCE_DETAIL: '0:1'
      }
    },
    {
      // Shared note
      uri: 'g7:SNOTE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3, 4],
      lineValType: dataTypes.Xref,
      tag: 'SNOTE',
      substructs: {}
    },
    {
      // Source
      uri: 'g7:SOUR',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3, 4, 5],
      lineValType: dataTypes.Xref,
      tag: 'SOUR',
      substructs: {
        'g7:PAGE': '0:1',
        'g7:SOUR-DATA': '0:1',
        'g7:SOUR-EVEN': '0:1',
        'g7:QUAY': '0:1',
        MULTIMEDIA_LINK: '0:M',
        NOTE_STRUCTURE: '0:M'

      }
    },
    {
      // Source
      uri: 'g7:HEAD-SOUR',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Special,
      tag: 'SOUR',
      substructs: {
        'g7:VERS': '0:1',
        'g7:NAME': '0:1',
        'g7:CORP': '0:1',
        'g7:HEAD-SOUR-DATA': '0:1'
      }
    },
    {
      // Surname prefix
      uri: 'g7:SPFX',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3],
      lineValType: dataTypes.Text,
      tag: 'SPFX',
      substructs: {}
    },
    {
      // Social security number
      uri: 'g7:SSN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Special,
      tag: 'SSN',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // State
      uri: 'g7:STAE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4],
      lineValType: dataTypes.Special,
      tag: 'STAE',
      substructs: {}
    },
    {
      // Status
      uri: 'g7:ord-STAT',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Enum,
      enumType: 'g7:enumset-ord-STAT',
      tag: 'STAT',
      substructs: {
        'g7:DATE-exact': '1:1'
      }
    },
    {
      // Status
      uri: 'g7:FAMC-STAT',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Enum,
      enumType: 'g7:enumset-FAMC-STAT',
      tag: 'STAT',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Submitter
      uri: 'g7:SUBM',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Xref,
      tag: 'SUBM',
      substructs: {}
    },
    {
      // Surname
      uri: 'g7:SURN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3],
      lineValType: dataTypes.Text,
      tag: 'SURN',
      substructs: {}
    },
    {
      // Extension tag
      uri: 'g7:TAG',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Special,
      tag: 'TAG',
      substructs: {}
    },
    {
      // Temple
      uri: 'g7:TEMP',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Text,
      tag: 'TEMP',
      substructs: {}
    },
    {
      // Text from Source
      uri: 'g7:TEXT',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 3, 4, 5, 6, 7],
      lineValType: dataTypes.Text,
      tag: 'TEXT',
      substructs: {
        'g7:MIME': '0:1',
        'g7:LANG': '0:1'
      }
    },
    {
      // Time
      uri: 'g7:TIME',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 3, 4, 5, 6, 7, 8],
      lineValType: dataTypes.Time,
      tag: 'TIME',
      substructs: {}
    },
    {
      // Title
      uri: 'g7:TITL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3, 4, 5, 6, 7],
      lineValType: dataTypes.Text,
      tag: 'TITL',
      substructs: {}
    },
    {
      // Title
      uri: 'g7:INDI-TITL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Text,
      tag: 'TITL',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Top crop width
      uri: 'g7:TOP',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [3, 4, 5, 6, 7, 8],
      lineValType: dataTypes.Integer,
      tag: 'TOP',
      substructs: {}
    },
    {
      // Translation
      uri: 'g7:NAME-TRAN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.PersonalName,
      tag: 'TRAN',
      substructs: {
        'g7:LANG': '1:1',
        PERSONAL_NAME_PIECES: '0:1'
      }
    },
    {
      // Translation
      uri: 'g7:PLAC-TRAN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [3, 4],
      lineValType: dataTypes.ListText,
      tag: 'TRAN',
      substructs: {
        'g7:LANG': '1:1'
      }
    },
    {
      // Translation
      uri: 'g7:NOTE-TRAN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3, 4, 5],
      lineValType: dataTypes.Text,
      tag: 'TRAN',
      substructs: {
        'g7:MIME': '0:1',
        'g7:LANG': '0:1'
      }
    },
    {
      // Translation
      uri: 'g7:FILE-TRAN',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Special,
      tag: 'TRAN',
      substructs: {
        'g7:FORM': '1:1'
      }
    },
    {
      // Type
      uri: 'g7:TYPE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Text,
      tag: 'TYPE',
      substructs: {}
    },
    {
      // Type
      uri: 'g7:NAME-TYPE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Enum,
      enumType: 'g7:enumset-NAME-TYPE',
      tag: 'TYPE',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Type
      uri: 'g7:EXID-TYPE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2, 4, 5],
      lineValType: dataTypes.Special,
      tag: 'TYPE',
      substructs: {}
    },
    {
      // Unique Identifier
      uri: 'g7:UID',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2],
      lineValType: dataTypes.Special,
      tag: 'UID',
      substructs: {}
    },
    {
      // Version
      uri: 'g7:VERS',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Special,
      tag: 'VERS',
      substructs: {}
    },
    {
      // Version
      uri: 'g7:GEDC-VERS',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [2],
      lineValType: dataTypes.Special,
      tag: 'VERS',
      substructs: {}
    },
    {
      // Width in pixels
      uri: 'g7:WIDTH',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [3, 4, 5, 6, 7, 8],
      lineValType: dataTypes.Integer,
      tag: 'WIDTH',
      substructs: {}
    },
    {
      // Wife
      uri: 'g7:WIFE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF_NO_LINEVAL,
      level: [2],
      tag: 'WIFE',
      substructs: { 'g7:AGE': '1:1' }
    },
    {
      // Wife
      uri: 'g7:FAM-WIFE',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.Xref,
      tag: 'WIFE',
      substructs: {
        'g7:PHRASE': '0:1'
      }
    },
    {
      // Will
      uri: 'g7:WILL',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1],
      lineValType: dataTypes.NullOrY,
      tag: 'WILL',
      substructs: {
        'g7:TYPE': '0:1',
        INDIVIDUAL_EVENT_DETAIL: '0:1'
      }
    },
    {
      // Web address
      uri: 'g7:WWW',
      info: 'Structure Info coming soon!',
      lineType: lineTypes.NO_XREF,
      level: [1, 2, 3],
      lineValType: dataTypes.Special,
      tag: 'WWW',
      substructs: {}
    }
  ]
};
