// TO-DO: check meaning of g7:enumset-EVEN and g7:enumset-EVENATTR

module.exports = {
  lineTypes: {
    DATASET: 'DATASET',

    // records
    HEADER: 'HEADER',
    FAM_RECORD: 'FAM_RECORD',
    INDI_RECORD: 'INDI_RECORD',
    OBJE_RECORD: 'OBJE_RECORD',
    REPO_RECORD: 'REPO_RECORD',
    SNOTE_RECORD: 'SNOTE_RECORD',
    SOUR_RECORD: 'SOUR_RECORD',
    SUBM_RECORD: 'SUBM_RECORD',

    // structures
    NO_XREF: 'NO_XREF',
    NO_LINEVAL: 'NO_LINEVAL',
    NO_XREF_NO_LINEVAL: 'NO_XREF_NO_LINEVAL',
    SUBSTRUCTURE: 'SUBSTRUCTURE',
    DEFAULT_LINE: 'DEFAULT_LINE'
  },
  dataTypes: {
    Text: 'Text',
    Integer: 'Integer',
    stdEnum: 'stdEnum',
    Enum: 'Enum',
    DateValue: 'DateValue',
    DateExact: 'DateExact',
    DatePeriod: 'DatePeriod',
    Time: 'Time',
    Age: 'Age',
    ListText: 'ListText',
    ListEnum: 'ListEnum',
    PersonalName: 'PersonalName',
    Language: 'Language',
    MediaType: 'MediaType',
    Special: 'Special',
    NullOrY: 'NullOrY',
    Xref: 'Xref',
    NoLineVal: 'NO_LINEVAL'
  },
  gedcomSpecialValues: {
    VOID_LINE_VAL: null,
    VOID_POINTER: '@VOID@'
  },
  gedcomEnumTypes: {
    g7_enumset_ADOP: ['HUSB', 'WIFE', 'BOTH'],
    // g7_enumset_EVEN
    // g7_enumset_EVENATTR
    g7_enumset_MEDI: ['AUDIO', 'BOOK', 'CARD', 'ELECTRONIC', 'FICHE', 'FILM', 'MAGAZINE', 'MANUSCRIPT', 'MAP', 'NEWSPAPER', 'PHOTO', 'TOMBSTONE', 'VIDEO', 'OTHER'],
    g7_enumset_PEDI: ['ADOPTED', 'BIRTH', 'FOSTER', 'SEALING', 'OTHER'],
    g7_enumset_QUAY: ['0', '1', '2', '3'],
    g7_enumset_RESN: ['CONFIDENTIAL', 'LOCKED', 'PRIVACY'],
    g7_enumset_ROLE: ['CHIL', 'CLERGY', 'FATH', 'FRIEND', 'GODP', 'HUSB', 'MOTH', 'MULTIPLE', 'NGHBR', 'OFFICIATOR', 'PARENT', 'SPOU', 'WIFE', 'WITN', 'OTHER'],
    g7_enumset_SEX: ['M', 'F', 'X', 'U'],
    g7_enumset_FAMC_STAT: ['CHALLENGED', 'DISPROVEN', 'PROVEN'],
    g7_enumset_ord_STAT: ['BIC', 'CANCELED', 'CHILD', 'COMPLETED', 'EXCLUDED', 'DNS', 'DNS_CAN', 'INFANT', 'PRE_1970', 'STILLBORN', 'SUBMITTED', 'UNCLEARED'],
    g7_enumset_NAME_TYPE: ['AKA', 'BIRTH', 'IMMIGRANT', 'MAIDEN', 'MARRIED', 'PROFESSIONAL', 'OTHER']
  },
  continuationTypes: {
    Text: 'TEXT_CONTINUATION',
    Integer: 'INTEGER_CONTINUATION',
    stdEnum: 'TEXT_CONTINUATION',
    Enum: 'TEXT_CONTINUATION',
    DateValue: 'TEXT_CONTINUATION',
    DateExact: 'TEXT_CONTINUATION',
    DatePeriod: 'TEXT_CONTINUATION',
    Time: 'TEXT_CONTINUATION',
    Age: 'TEXT_CONTINUATION',
    ListText: 'TEXT_CONTINUATION',
    ListEnum: 'TEXT_CONTINUATION',
    PersonalName: 'TEXT_CONTINUATION',
    Language: 'TEXT_CONTINUATION',
    MediaType: 'TEXT_CONTINUATION',
    Special: 'TEXT_CONTINUATION',
    NullOrY: 'TEXT_CONTINUATION',
    Xref: 'TEXT_CONTINUATION'
  },
  emptyHeader: {
    type: 'HEADER',
    line: {
      level: '0',
      xref: '',
      tag: 'HEAD',
      lineVal: '',
      EOL: '\r\n'
    },
    substructs: [{
      type: 'NO_XREF_NO_LINEVAL',
      line: {
        level: '1',
        xref: '',
        tag: 'GEDC',
        lineVal: '',
        EOL: '\r\n'
      },
      substructs: [{
        type: 'NO_XREF',
        lineValType: 'Special',
        line: {
          level: '2',
          xref: '',
          tag: 'VERS',
          lineVal: '',
          EOL: '\r\n'
        },
        substructs: []
      }]
    }]
  },
  emptyTrailer: {
    type: 'NO_XREF_NO_LINEVAL',
    line: {
      level: '0',
      xref: '',
      tag: 'TRLR',
      lineVal: '',
      EOL: '\r\n'
    },
    substructs: []
  },
  dateDescriptions: {
    'FROM': "Date Period: Lasted for multiple days, beginning on x and ending on y", 
    'BET': "Date Range: Between x and y",
    'AFT': "After date: Exact date unknown, but no earlier than x",
    'BEF': "Before date: Exact date unknown, but no later than x",
    'ABT': "Exact date unknown, but near x",
    'CAL': "x is calculated from other data.",
    'EST': "x is estimated from other data.",
  },
  calendarDescriptions: {
    'GREGORIAN': "Gregorian Calendar",
    'JULIAN': "Julian Calendar",
    'FRENCH_R': "French Republican Calendar",
    'HEBREW': "Hebrew Calendar",
  }
};
