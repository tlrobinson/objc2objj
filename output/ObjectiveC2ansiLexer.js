// $ANTLR 3.2 Sep 23, 2009 12:02:23 ObjectiveC2ansi.g 2010-02-01 00:29:55

var ObjectiveC2ansiLexer = function(input, state) {
// alternate constructor @todo
// public ObjectiveC2ansiLexer(CharStream input)
// public ObjectiveC2ansiLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa23 = new ObjectiveC2ansiLexer.DFA23(this);
    ObjectiveC2ansiLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(ObjectiveC2ansiLexer, {
    T__29: 29,
    T__28: 28,
    T__27: 27,
    T__26: 26,
    FloatTypeSuffix: 18,
    T__25: 25,
    T__24: 24,
    LETTER: 13,
    T__23: 23,
    T__22: 22,
    EOF: -1,
    T__93: 93,
    T__94: 94,
    T__91: 91,
    T__92: 92,
    STRING_LITERAL: 7,
    T__90: 90,
    FLOATING_POINT_LITERAL: 12,
    COMMENT: 4,
    T__99: 99,
    T__98: 98,
    T__97: 97,
    T__96: 96,
    T__95: 95,
    T__80: 80,
    T__81: 81,
    T__82: 82,
    T__83: 83,
    LINE_COMMENT: 5,
    IntegerTypeSuffix: 16,
    CHARACTER_LITERAL: 11,
    T__85: 85,
    T__84: 84,
    T__87: 87,
    T__86: 86,
    T__89: 89,
    T__88: 88,
    T__126: 126,
    T__125: 125,
    T__128: 128,
    T__127: 127,
    WS: 21,
    T__71: 71,
    T__129: 129,
    T__72: 72,
    T__70: 70,
    T__76: 76,
    T__75: 75,
    T__130: 130,
    T__74: 74,
    EscapeSequence: 14,
    DECIMAL_LITERAL: 8,
    T__131: 131,
    T__73: 73,
    T__132: 132,
    T__133: 133,
    T__79: 79,
    T__134: 134,
    T__78: 78,
    T__135: 135,
    T__77: 77,
    T__68: 68,
    T__69: 69,
    T__66: 66,
    T__67: 67,
    T__64: 64,
    T__65: 65,
    T__62: 62,
    T__63: 63,
    T__118: 118,
    T__119: 119,
    T__116: 116,
    T__117: 117,
    T__114: 114,
    T__115: 115,
    T__124: 124,
    T__123: 123,
    Exponent: 17,
    T__122: 122,
    T__121: 121,
    T__120: 120,
    T__61: 61,
    T__60: 60,
    HexDigit: 15,
    T__55: 55,
    T__56: 56,
    T__57: 57,
    T__58: 58,
    T__51: 51,
    T__52: 52,
    T__53: 53,
    T__54: 54,
    T__107: 107,
    T__108: 108,
    T__109: 109,
    IDENTIFIER: 6,
    T__103: 103,
    T__59: 59,
    T__104: 104,
    T__105: 105,
    T__106: 106,
    T__111: 111,
    T__110: 110,
    T__113: 113,
    T__112: 112,
    HEX_LITERAL: 9,
    T__50: 50,
    T__42: 42,
    T__43: 43,
    T__40: 40,
    T__41: 41,
    T__46: 46,
    T__47: 47,
    T__44: 44,
    T__45: 45,
    T__48: 48,
    T__49: 49,
    OCTAL_LITERAL: 10,
    T__102: 102,
    T__101: 101,
    T__100: 100,
    T__30: 30,
    T__31: 31,
    T__32: 32,
    T__33: 33,
    T__34: 34,
    T__35: 35,
    T__36: 36,
    T__37: 37,
    T__38: 38,
    T__39: 39,
    UnicodeEscape: 20,
    OctalEscape: 19
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(ObjectiveC2ansiLexer, org.antlr.runtime.Lexer, {
    T__29 : 29,
    T__28 : 28,
    T__27 : 27,
    T__26 : 26,
    FloatTypeSuffix : 18,
    T__25 : 25,
    T__24 : 24,
    LETTER : 13,
    T__23 : 23,
    T__22 : 22,
    EOF : -1,
    T__93 : 93,
    T__94 : 94,
    T__91 : 91,
    T__92 : 92,
    STRING_LITERAL : 7,
    T__90 : 90,
    FLOATING_POINT_LITERAL : 12,
    COMMENT : 4,
    T__99 : 99,
    T__98 : 98,
    T__97 : 97,
    T__96 : 96,
    T__95 : 95,
    T__80 : 80,
    T__81 : 81,
    T__82 : 82,
    T__83 : 83,
    LINE_COMMENT : 5,
    IntegerTypeSuffix : 16,
    CHARACTER_LITERAL : 11,
    T__85 : 85,
    T__84 : 84,
    T__87 : 87,
    T__86 : 86,
    T__89 : 89,
    T__88 : 88,
    T__126 : 126,
    T__125 : 125,
    T__128 : 128,
    T__127 : 127,
    WS : 21,
    T__71 : 71,
    T__129 : 129,
    T__72 : 72,
    T__70 : 70,
    T__76 : 76,
    T__75 : 75,
    T__130 : 130,
    T__74 : 74,
    EscapeSequence : 14,
    DECIMAL_LITERAL : 8,
    T__131 : 131,
    T__73 : 73,
    T__132 : 132,
    T__133 : 133,
    T__79 : 79,
    T__134 : 134,
    T__78 : 78,
    T__135 : 135,
    T__77 : 77,
    T__68 : 68,
    T__69 : 69,
    T__66 : 66,
    T__67 : 67,
    T__64 : 64,
    T__65 : 65,
    T__62 : 62,
    T__63 : 63,
    T__118 : 118,
    T__119 : 119,
    T__116 : 116,
    T__117 : 117,
    T__114 : 114,
    T__115 : 115,
    T__124 : 124,
    T__123 : 123,
    Exponent : 17,
    T__122 : 122,
    T__121 : 121,
    T__120 : 120,
    T__61 : 61,
    T__60 : 60,
    HexDigit : 15,
    T__55 : 55,
    T__56 : 56,
    T__57 : 57,
    T__58 : 58,
    T__51 : 51,
    T__52 : 52,
    T__53 : 53,
    T__54 : 54,
    T__107 : 107,
    T__108 : 108,
    T__109 : 109,
    IDENTIFIER : 6,
    T__103 : 103,
    T__59 : 59,
    T__104 : 104,
    T__105 : 105,
    T__106 : 106,
    T__111 : 111,
    T__110 : 110,
    T__113 : 113,
    T__112 : 112,
    HEX_LITERAL : 9,
    T__50 : 50,
    T__42 : 42,
    T__43 : 43,
    T__40 : 40,
    T__41 : 41,
    T__46 : 46,
    T__47 : 47,
    T__44 : 44,
    T__45 : 45,
    T__48 : 48,
    T__49 : 49,
    OCTAL_LITERAL : 10,
    T__102 : 102,
    T__101 : 101,
    T__100 : 100,
    T__30 : 30,
    T__31 : 31,
    T__32 : 32,
    T__33 : 33,
    T__34 : 34,
    T__35 : 35,
    T__36 : 36,
    T__37 : 37,
    T__38 : 38,
    T__39 : 39,
    UnicodeEscape : 20,
    OctalEscape : 19,
    getGrammarFileName: function() { return "ObjectiveC2ansi.g"; }
});
org.antlr.lang.augmentObject(ObjectiveC2ansiLexer.prototype, {
    // $ANTLR start T__22
    mT__22: function()  {
        try {
            var _type = this.T__22;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:7:7: ( '#import' )
            // ObjectiveC2ansi.g:7:9: '#import'
            this.match("#import"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__22",

    // $ANTLR start T__23
    mT__23: function()  {
        try {
            var _type = this.T__23;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:8:7: ( '#include' )
            // ObjectiveC2ansi.g:8:9: '#include'
            this.match("#include"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__23",

    // $ANTLR start T__24
    mT__24: function()  {
        try {
            var _type = this.T__24;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:9:7: ( '#define' )
            // ObjectiveC2ansi.g:9:9: '#define'
            this.match("#define"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__24",

    // $ANTLR start T__25
    mT__25: function()  {
        try {
            var _type = this.T__25;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:10:7: ( '#ifdef' )
            // ObjectiveC2ansi.g:10:9: '#ifdef'
            this.match("#ifdef"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__25",

    // $ANTLR start T__26
    mT__26: function()  {
        try {
            var _type = this.T__26;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:11:7: ( '#if' )
            // ObjectiveC2ansi.g:11:9: '#if'
            this.match("#if"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__26",

    // $ANTLR start T__27
    mT__27: function()  {
        try {
            var _type = this.T__27;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:12:7: ( '#undef' )
            // ObjectiveC2ansi.g:12:9: '#undef'
            this.match("#undef"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__27",

    // $ANTLR start T__28
    mT__28: function()  {
        try {
            var _type = this.T__28;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:13:7: ( '#ifndef' )
            // ObjectiveC2ansi.g:13:9: '#ifndef'
            this.match("#ifndef"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__28",

    // $ANTLR start T__29
    mT__29: function()  {
        try {
            var _type = this.T__29;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:14:7: ( '#endif' )
            // ObjectiveC2ansi.g:14:9: '#endif'
            this.match("#endif"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__29",

    // $ANTLR start T__30
    mT__30: function()  {
        try {
            var _type = this.T__30;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:15:7: ( '<' )
            // ObjectiveC2ansi.g:15:9: '<'
            this.match('<'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__30",

    // $ANTLR start T__31
    mT__31: function()  {
        try {
            var _type = this.T__31;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:16:7: ( '\"' )
            // ObjectiveC2ansi.g:16:9: '\"'
            this.match('\"'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__31",

    // $ANTLR start T__32
    mT__32: function()  {
        try {
            var _type = this.T__32;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:17:7: ( '/' )
            // ObjectiveC2ansi.g:17:9: '/'
            this.match('/'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__32",

    // $ANTLR start T__33
    mT__33: function()  {
        try {
            var _type = this.T__33;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:18:7: ( '\\\\' )
            // ObjectiveC2ansi.g:18:9: '\\\\'
            this.match('\\'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__33",

    // $ANTLR start T__34
    mT__34: function()  {
        try {
            var _type = this.T__34;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:19:7: ( '.' )
            // ObjectiveC2ansi.g:19:9: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__34",

    // $ANTLR start T__35
    mT__35: function()  {
        try {
            var _type = this.T__35;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:20:7: ( '>' )
            // ObjectiveC2ansi.g:20:9: '>'
            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__35",

    // $ANTLR start T__36
    mT__36: function()  {
        try {
            var _type = this.T__36;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:21:7: ( '.+' )
            // ObjectiveC2ansi.g:21:9: '.+'
            this.match(".+"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__36",

    // $ANTLR start T__37
    mT__37: function()  {
        try {
            var _type = this.T__37;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:22:7: ( '@interface' )
            // ObjectiveC2ansi.g:22:9: '@interface'
            this.match("@interface"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__37",

    // $ANTLR start T__38
    mT__38: function()  {
        try {
            var _type = this.T__38;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:23:7: ( ':' )
            // ObjectiveC2ansi.g:23:9: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__38",

    // $ANTLR start T__39
    mT__39: function()  {
        try {
            var _type = this.T__39;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:24:7: ( '@end' )
            // ObjectiveC2ansi.g:24:9: '@end'
            this.match("@end"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__39",

    // $ANTLR start T__40
    mT__40: function()  {
        try {
            var _type = this.T__40;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:25:7: ( '(' )
            // ObjectiveC2ansi.g:25:9: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__40",

    // $ANTLR start T__41
    mT__41: function()  {
        try {
            var _type = this.T__41;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:26:7: ( ')' )
            // ObjectiveC2ansi.g:26:9: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__41",

    // $ANTLR start T__42
    mT__42: function()  {
        try {
            var _type = this.T__42;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:27:7: ( '@implementation' )
            // ObjectiveC2ansi.g:27:9: '@implementation'
            this.match("@implementation"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__42",

    // $ANTLR start T__43
    mT__43: function()  {
        try {
            var _type = this.T__43;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:28:7: ( '@protocol' )
            // ObjectiveC2ansi.g:28:9: '@protocol'
            this.match("@protocol"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__43",

    // $ANTLR start T__44
    mT__44: function()  {
        try {
            var _type = this.T__44;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:29:7: ( ';' )
            // ObjectiveC2ansi.g:29:9: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__44",

    // $ANTLR start T__45
    mT__45: function()  {
        try {
            var _type = this.T__45;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:30:7: ( '@class' )
            // ObjectiveC2ansi.g:30:9: '@class'
            this.match("@class"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__45",

    // $ANTLR start T__46
    mT__46: function()  {
        try {
            var _type = this.T__46;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:31:7: ( ',' )
            // ObjectiveC2ansi.g:31:9: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__46",

    // $ANTLR start T__47
    mT__47: function()  {
        try {
            var _type = this.T__47;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:32:7: ( '{' )
            // ObjectiveC2ansi.g:32:9: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__47",

    // $ANTLR start T__48
    mT__48: function()  {
        try {
            var _type = this.T__48;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:33:7: ( '}' )
            // ObjectiveC2ansi.g:33:9: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__48",

    // $ANTLR start T__49
    mT__49: function()  {
        try {
            var _type = this.T__49;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:34:7: ( '@private' )
            // ObjectiveC2ansi.g:34:9: '@private'
            this.match("@private"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__49",

    // $ANTLR start T__50
    mT__50: function()  {
        try {
            var _type = this.T__50;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:35:7: ( '@protected' )
            // ObjectiveC2ansi.g:35:9: '@protected'
            this.match("@protected"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__50",

    // $ANTLR start T__51
    mT__51: function()  {
        try {
            var _type = this.T__51;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:36:7: ( '@package' )
            // ObjectiveC2ansi.g:36:9: '@package'
            this.match("@package"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__51",

    // $ANTLR start T__52
    mT__52: function()  {
        try {
            var _type = this.T__52;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:37:7: ( '@public' )
            // ObjectiveC2ansi.g:37:9: '@public'
            this.match("@public"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__52",

    // $ANTLR start T__53
    mT__53: function()  {
        try {
            var _type = this.T__53;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:38:7: ( '+' )
            // ObjectiveC2ansi.g:38:9: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__53",

    // $ANTLR start T__54
    mT__54: function()  {
        try {
            var _type = this.T__54;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:39:7: ( '-' )
            // ObjectiveC2ansi.g:39:9: '-'
            this.match('-'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__54",

    // $ANTLR start T__55
    mT__55: function()  {
        try {
            var _type = this.T__55;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:40:7: ( 'void' )
            // ObjectiveC2ansi.g:40:9: 'void'
            this.match("void"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__55",

    // $ANTLR start T__56
    mT__56: function()  {
        try {
            var _type = this.T__56;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:41:7: ( 'char' )
            // ObjectiveC2ansi.g:41:9: 'char'
            this.match("char"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__56",

    // $ANTLR start T__57
    mT__57: function()  {
        try {
            var _type = this.T__57;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:42:7: ( 'short' )
            // ObjectiveC2ansi.g:42:9: 'short'
            this.match("short"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__57",

    // $ANTLR start T__58
    mT__58: function()  {
        try {
            var _type = this.T__58;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:43:7: ( 'int' )
            // ObjectiveC2ansi.g:43:9: 'int'
            this.match("int"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__58",

    // $ANTLR start T__59
    mT__59: function()  {
        try {
            var _type = this.T__59;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:44:7: ( 'long' )
            // ObjectiveC2ansi.g:44:9: 'long'
            this.match("long"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__59",

    // $ANTLR start T__60
    mT__60: function()  {
        try {
            var _type = this.T__60;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:45:7: ( 'float' )
            // ObjectiveC2ansi.g:45:9: 'float'
            this.match("float"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__60",

    // $ANTLR start T__61
    mT__61: function()  {
        try {
            var _type = this.T__61;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:46:7: ( 'double' )
            // ObjectiveC2ansi.g:46:9: 'double'
            this.match("double"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__61",

    // $ANTLR start T__62
    mT__62: function()  {
        try {
            var _type = this.T__62;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:47:7: ( 'signed' )
            // ObjectiveC2ansi.g:47:9: 'signed'
            this.match("signed"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__62",

    // $ANTLR start T__63
    mT__63: function()  {
        try {
            var _type = this.T__63;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:48:7: ( 'unsigned' )
            // ObjectiveC2ansi.g:48:9: 'unsigned'
            this.match("unsigned"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__63",

    // $ANTLR start T__64
    mT__64: function()  {
        try {
            var _type = this.T__64;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:49:7: ( 'id' )
            // ObjectiveC2ansi.g:49:9: 'id'
            this.match("id"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__64",

    // $ANTLR start T__65
    mT__65: function()  {
        try {
            var _type = this.T__65;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:50:7: ( 'const' )
            // ObjectiveC2ansi.g:50:9: 'const'
            this.match("const"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__65",

    // $ANTLR start T__66
    mT__66: function()  {
        try {
            var _type = this.T__66;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:51:7: ( 'volatile' )
            // ObjectiveC2ansi.g:51:9: 'volatile'
            this.match("volatile"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__66",

    // $ANTLR start T__67
    mT__67: function()  {
        try {
            var _type = this.T__67;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:52:7: ( 'in' )
            // ObjectiveC2ansi.g:52:9: 'in'
            this.match("in"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__67",

    // $ANTLR start T__68
    mT__68: function()  {
        try {
            var _type = this.T__68;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:53:7: ( 'out' )
            // ObjectiveC2ansi.g:53:9: 'out'
            this.match("out"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__68",

    // $ANTLR start T__69
    mT__69: function()  {
        try {
            var _type = this.T__69;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:54:7: ( 'inout' )
            // ObjectiveC2ansi.g:54:9: 'inout'
            this.match("inout"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__69",

    // $ANTLR start T__70
    mT__70: function()  {
        try {
            var _type = this.T__70;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:55:7: ( 'bycopy' )
            // ObjectiveC2ansi.g:55:9: 'bycopy'
            this.match("bycopy"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__70",

    // $ANTLR start T__71
    mT__71: function()  {
        try {
            var _type = this.T__71;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:56:7: ( 'byref' )
            // ObjectiveC2ansi.g:56:9: 'byref'
            this.match("byref"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__71",

    // $ANTLR start T__72
    mT__72: function()  {
        try {
            var _type = this.T__72;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:57:7: ( 'oneway' )
            // ObjectiveC2ansi.g:57:9: 'oneway'
            this.match("oneway"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__72",

    // $ANTLR start T__73
    mT__73: function()  {
        try {
            var _type = this.T__73;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:58:7: ( 'self' )
            // ObjectiveC2ansi.g:58:9: 'self'
            this.match("self"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__73",

    // $ANTLR start T__74
    mT__74: function()  {
        try {
            var _type = this.T__74;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:59:7: ( '[' )
            // ObjectiveC2ansi.g:59:9: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__74",

    // $ANTLR start T__75
    mT__75: function()  {
        try {
            var _type = this.T__75;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:60:7: ( ']' )
            // ObjectiveC2ansi.g:60:9: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__75",

    // $ANTLR start T__76
    mT__76: function()  {
        try {
            var _type = this.T__76;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:61:7: ( 'super' )
            // ObjectiveC2ansi.g:61:9: 'super'
            this.match("super"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__76",

    // $ANTLR start T__77
    mT__77: function()  {
        try {
            var _type = this.T__77;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:62:7: ( '@selector' )
            // ObjectiveC2ansi.g:62:9: '@selector'
            this.match("@selector"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__77",

    // $ANTLR start T__78
    mT__78: function()  {
        try {
            var _type = this.T__78;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:63:7: ( '@encode' )
            // ObjectiveC2ansi.g:63:9: '@encode'
            this.match("@encode"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__78",

    // $ANTLR start T__79
    mT__79: function()  {
        try {
            var _type = this.T__79;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:64:7: ( '@trystatement' )
            // ObjectiveC2ansi.g:64:9: '@trystatement'
            this.match("@trystatement"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__79",

    // $ANTLR start T__80
    mT__80: function()  {
        try {
            var _type = this.T__80;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:65:7: ( '@catch' )
            // ObjectiveC2ansi.g:65:9: '@catch'
            this.match("@catch"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__80",

    // $ANTLR start T__81
    mT__81: function()  {
        try {
            var _type = this.T__81;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:66:7: ( '@finally' )
            // ObjectiveC2ansi.g:66:9: '@finally'
            this.match("@finally"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__81",

    // $ANTLR start T__82
    mT__82: function()  {
        try {
            var _type = this.T__82;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:67:7: ( '@throw' )
            // ObjectiveC2ansi.g:67:9: '@throw'
            this.match("@throw"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__82",

    // $ANTLR start T__83
    mT__83: function()  {
        try {
            var _type = this.T__83;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:68:7: ( '@synchronized' )
            // ObjectiveC2ansi.g:68:9: '@synchronized'
            this.match("@synchronized"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__83",

    // $ANTLR start T__84
    mT__84: function()  {
        try {
            var _type = this.T__84;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:69:7: ( 'auto' )
            // ObjectiveC2ansi.g:69:9: 'auto'
            this.match("auto"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__84",

    // $ANTLR start T__85
    mT__85: function()  {
        try {
            var _type = this.T__85;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:70:7: ( 'register' )
            // ObjectiveC2ansi.g:70:9: 'register'
            this.match("register"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__85",

    // $ANTLR start T__86
    mT__86: function()  {
        try {
            var _type = this.T__86;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:71:7: ( 'static' )
            // ObjectiveC2ansi.g:71:9: 'static'
            this.match("static"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__86",

    // $ANTLR start T__87
    mT__87: function()  {
        try {
            var _type = this.T__87;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:72:7: ( 'extern' )
            // ObjectiveC2ansi.g:72:9: 'extern'
            this.match("extern"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__87",

    // $ANTLR start T__88
    mT__88: function()  {
        try {
            var _type = this.T__88;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:73:7: ( 'typedef' )
            // ObjectiveC2ansi.g:73:9: 'typedef'
            this.match("typedef"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__88",

    // $ANTLR start T__89
    mT__89: function()  {
        try {
            var _type = this.T__89;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:74:7: ( '=' )
            // ObjectiveC2ansi.g:74:9: '='
            this.match('='); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__89",

    // $ANTLR start T__90
    mT__90: function()  {
        try {
            var _type = this.T__90;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:75:7: ( 'struct' )
            // ObjectiveC2ansi.g:75:9: 'struct'
            this.match("struct"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__90",

    // $ANTLR start T__91
    mT__91: function()  {
        try {
            var _type = this.T__91;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:76:7: ( 'union' )
            // ObjectiveC2ansi.g:76:9: 'union'
            this.match("union"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__91",

    // $ANTLR start T__92
    mT__92: function()  {
        try {
            var _type = this.T__92;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:77:7: ( 'enum' )
            // ObjectiveC2ansi.g:77:9: 'enum'
            this.match("enum"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__92",

    // $ANTLR start T__93
    mT__93: function()  {
        try {
            var _type = this.T__93;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:78:7: ( '*' )
            // ObjectiveC2ansi.g:78:9: '*'
            this.match('*'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__93",

    // $ANTLR start T__94
    mT__94: function()  {
        try {
            var _type = this.T__94;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:79:7: ( '...' )
            // ObjectiveC2ansi.g:79:9: '...'
            this.match("..."); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__94",

    // $ANTLR start T__95
    mT__95: function()  {
        try {
            var _type = this.T__95;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:80:7: ( 'case' )
            // ObjectiveC2ansi.g:80:9: 'case'
            this.match("case"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__95",

    // $ANTLR start T__96
    mT__96: function()  {
        try {
            var _type = this.T__96;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:81:7: ( 'default' )
            // ObjectiveC2ansi.g:81:9: 'default'
            this.match("default"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__96",

    // $ANTLR start T__97
    mT__97: function()  {
        try {
            var _type = this.T__97;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:82:7: ( 'if' )
            // ObjectiveC2ansi.g:82:9: 'if'
            this.match("if"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__97",

    // $ANTLR start T__98
    mT__98: function()  {
        try {
            var _type = this.T__98;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:83:7: ( 'else' )
            // ObjectiveC2ansi.g:83:9: 'else'
            this.match("else"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__98",

    // $ANTLR start T__99
    mT__99: function()  {
        try {
            var _type = this.T__99;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:84:7: ( 'switch' )
            // ObjectiveC2ansi.g:84:9: 'switch'
            this.match("switch"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__99",

    // $ANTLR start T__100
    mT__100: function()  {
        try {
            var _type = this.T__100;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:85:8: ( 'while' )
            // ObjectiveC2ansi.g:85:10: 'while'
            this.match("while"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__100",

    // $ANTLR start T__101
    mT__101: function()  {
        try {
            var _type = this.T__101;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:86:8: ( 'do' )
            // ObjectiveC2ansi.g:86:10: 'do'
            this.match("do"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__101",

    // $ANTLR start T__102
    mT__102: function()  {
        try {
            var _type = this.T__102;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:87:8: ( 'for' )
            // ObjectiveC2ansi.g:87:10: 'for'
            this.match("for"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__102",

    // $ANTLR start T__103
    mT__103: function()  {
        try {
            var _type = this.T__103;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:88:8: ( 'goto' )
            // ObjectiveC2ansi.g:88:10: 'goto'
            this.match("goto"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__103",

    // $ANTLR start T__104
    mT__104: function()  {
        try {
            var _type = this.T__104;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:89:8: ( 'continue' )
            // ObjectiveC2ansi.g:89:10: 'continue'
            this.match("continue"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__104",

    // $ANTLR start T__105
    mT__105: function()  {
        try {
            var _type = this.T__105;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:90:8: ( 'break' )
            // ObjectiveC2ansi.g:90:10: 'break'
            this.match("break"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__105",

    // $ANTLR start T__106
    mT__106: function()  {
        try {
            var _type = this.T__106;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:91:8: ( 'return' )
            // ObjectiveC2ansi.g:91:10: 'return'
            this.match("return"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__106",

    // $ANTLR start T__107
    mT__107: function()  {
        try {
            var _type = this.T__107;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:92:8: ( '*=' )
            // ObjectiveC2ansi.g:92:10: '*='
            this.match("*="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__107",

    // $ANTLR start T__108
    mT__108: function()  {
        try {
            var _type = this.T__108;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:93:8: ( '/=' )
            // ObjectiveC2ansi.g:93:10: '/='
            this.match("/="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__108",

    // $ANTLR start T__109
    mT__109: function()  {
        try {
            var _type = this.T__109;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:94:8: ( '%=' )
            // ObjectiveC2ansi.g:94:10: '%='
            this.match("%="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__109",

    // $ANTLR start T__110
    mT__110: function()  {
        try {
            var _type = this.T__110;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:95:8: ( '+=' )
            // ObjectiveC2ansi.g:95:10: '+='
            this.match("+="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__110",

    // $ANTLR start T__111
    mT__111: function()  {
        try {
            var _type = this.T__111;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:96:8: ( '-=' )
            // ObjectiveC2ansi.g:96:10: '-='
            this.match("-="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__111",

    // $ANTLR start T__112
    mT__112: function()  {
        try {
            var _type = this.T__112;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:97:8: ( '<<=' )
            // ObjectiveC2ansi.g:97:10: '<<='
            this.match("<<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__112",

    // $ANTLR start T__113
    mT__113: function()  {
        try {
            var _type = this.T__113;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:98:8: ( '>>=' )
            // ObjectiveC2ansi.g:98:10: '>>='
            this.match(">>="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__113",

    // $ANTLR start T__114
    mT__114: function()  {
        try {
            var _type = this.T__114;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:99:8: ( '&=' )
            // ObjectiveC2ansi.g:99:10: '&='
            this.match("&="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__114",

    // $ANTLR start T__115
    mT__115: function()  {
        try {
            var _type = this.T__115;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:100:8: ( '^=' )
            // ObjectiveC2ansi.g:100:10: '^='
            this.match("^="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__115",

    // $ANTLR start T__116
    mT__116: function()  {
        try {
            var _type = this.T__116;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:101:8: ( '|=' )
            // ObjectiveC2ansi.g:101:10: '|='
            this.match("|="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__116",

    // $ANTLR start T__117
    mT__117: function()  {
        try {
            var _type = this.T__117;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:102:8: ( '?' )
            // ObjectiveC2ansi.g:102:10: '?'
            this.match('?'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__117",

    // $ANTLR start T__118
    mT__118: function()  {
        try {
            var _type = this.T__118;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:103:8: ( '||' )
            // ObjectiveC2ansi.g:103:10: '||'
            this.match("||"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__118",

    // $ANTLR start T__119
    mT__119: function()  {
        try {
            var _type = this.T__119;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:104:8: ( '&&' )
            // ObjectiveC2ansi.g:104:10: '&&'
            this.match("&&"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__119",

    // $ANTLR start T__120
    mT__120: function()  {
        try {
            var _type = this.T__120;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:105:8: ( '|' )
            // ObjectiveC2ansi.g:105:10: '|'
            this.match('|'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__120",

    // $ANTLR start T__121
    mT__121: function()  {
        try {
            var _type = this.T__121;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:106:8: ( '^' )
            // ObjectiveC2ansi.g:106:10: '^'
            this.match('^'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__121",

    // $ANTLR start T__122
    mT__122: function()  {
        try {
            var _type = this.T__122;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:107:8: ( '&' )
            // ObjectiveC2ansi.g:107:10: '&'
            this.match('&'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__122",

    // $ANTLR start T__123
    mT__123: function()  {
        try {
            var _type = this.T__123;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:108:8: ( '!=' )
            // ObjectiveC2ansi.g:108:10: '!='
            this.match("!="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__123",

    // $ANTLR start T__124
    mT__124: function()  {
        try {
            var _type = this.T__124;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:109:8: ( '==' )
            // ObjectiveC2ansi.g:109:10: '=='
            this.match("=="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__124",

    // $ANTLR start T__125
    mT__125: function()  {
        try {
            var _type = this.T__125;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:110:8: ( '<=' )
            // ObjectiveC2ansi.g:110:10: '<='
            this.match("<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__125",

    // $ANTLR start T__126
    mT__126: function()  {
        try {
            var _type = this.T__126;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:111:8: ( '>=' )
            // ObjectiveC2ansi.g:111:10: '>='
            this.match(">="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__126",

    // $ANTLR start T__127
    mT__127: function()  {
        try {
            var _type = this.T__127;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:112:8: ( '<<' )
            // ObjectiveC2ansi.g:112:10: '<<'
            this.match("<<"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__127",

    // $ANTLR start T__128
    mT__128: function()  {
        try {
            var _type = this.T__128;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:113:8: ( '>>' )
            // ObjectiveC2ansi.g:113:10: '>>'
            this.match(">>"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__128",

    // $ANTLR start T__129
    mT__129: function()  {
        try {
            var _type = this.T__129;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:114:8: ( '%' )
            // ObjectiveC2ansi.g:114:10: '%'
            this.match('%'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__129",

    // $ANTLR start T__130
    mT__130: function()  {
        try {
            var _type = this.T__130;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:115:8: ( '++' )
            // ObjectiveC2ansi.g:115:10: '++'
            this.match("++"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__130",

    // $ANTLR start T__131
    mT__131: function()  {
        try {
            var _type = this.T__131;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:116:8: ( '--' )
            // ObjectiveC2ansi.g:116:10: '--'
            this.match("--"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__131",

    // $ANTLR start T__132
    mT__132: function()  {
        try {
            var _type = this.T__132;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:117:8: ( 'sizeof' )
            // ObjectiveC2ansi.g:117:10: 'sizeof'
            this.match("sizeof"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__132",

    // $ANTLR start T__133
    mT__133: function()  {
        try {
            var _type = this.T__133;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:118:8: ( '~' )
            // ObjectiveC2ansi.g:118:10: '~'
            this.match('~'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__133",

    // $ANTLR start T__134
    mT__134: function()  {
        try {
            var _type = this.T__134;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:119:8: ( '!' )
            // ObjectiveC2ansi.g:119:10: '!'
            this.match('!'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__134",

    // $ANTLR start T__135
    mT__135: function()  {
        try {
            var _type = this.T__135;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:120:8: ( '->' )
            // ObjectiveC2ansi.g:120:10: '->'
            this.match("->"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__135",

    // $ANTLR start IDENTIFIER
    mIDENTIFIER: function()  {
        try {
            var _type = this.IDENTIFIER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:405:2: ( LETTER ( LETTER | '0' .. '9' )* )
            // ObjectiveC2ansi.g:405:4: LETTER ( LETTER | '0' .. '9' )*
            this.mLETTER(); 
            // ObjectiveC2ansi.g:405:11: ( LETTER | '0' .. '9' )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0=='$'||(LA1_0>='0' && LA1_0<='9')||(LA1_0>='A' && LA1_0<='Z')||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // ObjectiveC2ansi.g:
                    if ( this.input.LA(1)=='$'||(this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop1;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IDENTIFIER",

    // $ANTLR start LETTER
    mLETTER: function()  {
        try {
            // ObjectiveC2ansi.g:410:2: ( '$' | 'A' .. 'Z' | 'a' .. 'z' | '_' )
            // ObjectiveC2ansi.g:
            if ( this.input.LA(1)=='$'||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "LETTER",

    // $ANTLR start CHARACTER_LITERAL
    mCHARACTER_LITERAL: function()  {
        try {
            var _type = this.CHARACTER_LITERAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:417:5: ( '\\'' ( EscapeSequence | ~ ( '\\'' | '\\\\' ) ) '\\'' )
            // ObjectiveC2ansi.g:417:9: '\\'' ( EscapeSequence | ~ ( '\\'' | '\\\\' ) ) '\\''
            this.match('\''); 
            // ObjectiveC2ansi.g:417:14: ( EscapeSequence | ~ ( '\\'' | '\\\\' ) )
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0=='\\') ) {
                alt2=1;
            }
            else if ( ((LA2_0>='\u0000' && LA2_0<='&')||(LA2_0>='(' && LA2_0<='[')||(LA2_0>=']' && LA2_0<='\uFFFF')) ) {
                alt2=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }
            switch (alt2) {
                case 1 :
                    // ObjectiveC2ansi.g:417:16: EscapeSequence
                    this.mEscapeSequence(); 


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:417:33: ~ ( '\\'' | '\\\\' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            this.match('\''); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHARACTER_LITERAL",

    // $ANTLR start STRING_LITERAL
    mSTRING_LITERAL: function()  {
        try {
            var _type = this.STRING_LITERAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:421:5: ( '\"' ( EscapeSequence | ~ ( '\\\\' | '\"' ) )* '\"' )
            // ObjectiveC2ansi.g:421:8: '\"' ( EscapeSequence | ~ ( '\\\\' | '\"' ) )* '\"'
            this.match('\"'); 
            // ObjectiveC2ansi.g:421:12: ( EscapeSequence | ~ ( '\\\\' | '\"' ) )*
            loop3:
            do {
                var alt3=3;
                var LA3_0 = this.input.LA(1);

                if ( (LA3_0=='\\') ) {
                    alt3=1;
                }
                else if ( ((LA3_0>='\u0000' && LA3_0<='!')||(LA3_0>='#' && LA3_0<='[')||(LA3_0>=']' && LA3_0<='\uFFFF')) ) {
                    alt3=2;
                }


                switch (alt3) {
                case 1 :
                    // ObjectiveC2ansi.g:421:14: EscapeSequence
                    this.mEscapeSequence(); 


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:421:31: ~ ( '\\\\' | '\"' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop3;
                }
            } while (true);

            this.match('\"'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING_LITERAL",

    // $ANTLR start HEX_LITERAL
    mHEX_LITERAL: function()  {
        try {
            var _type = this.HEX_LITERAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:424:13: ( '0' ( 'x' | 'X' ) ( HexDigit )+ ( IntegerTypeSuffix )? )
            // ObjectiveC2ansi.g:424:15: '0' ( 'x' | 'X' ) ( HexDigit )+ ( IntegerTypeSuffix )?
            this.match('0'); 
            if ( this.input.LA(1)=='X'||this.input.LA(1)=='x' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // ObjectiveC2ansi.g:424:29: ( HexDigit )+
            var cnt4=0;
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( ((LA4_0>='0' && LA4_0<='9')||(LA4_0>='A' && LA4_0<='F')||(LA4_0>='a' && LA4_0<='f')) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // ObjectiveC2ansi.g:424:29: HexDigit
                    this.mHexDigit(); 


                    break;

                default :
                    if ( cnt4 >= 1 ) {
                        break loop4;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(4, this.input);
                        throw eee;
                }
                cnt4++;
            } while (true);

            // ObjectiveC2ansi.g:424:39: ( IntegerTypeSuffix )?
            var alt5=2;
            var LA5_0 = this.input.LA(1);

            if ( (LA5_0=='L'||LA5_0=='U'||LA5_0=='l'||LA5_0=='u') ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // ObjectiveC2ansi.g:424:39: IntegerTypeSuffix
                    this.mIntegerTypeSuffix(); 


                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "HEX_LITERAL",

    // $ANTLR start DECIMAL_LITERAL
    mDECIMAL_LITERAL: function()  {
        try {
            var _type = this.DECIMAL_LITERAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:426:17: ( ( '0' | '1' .. '9' ( '0' .. '9' )* ) ( IntegerTypeSuffix )? )
            // ObjectiveC2ansi.g:426:19: ( '0' | '1' .. '9' ( '0' .. '9' )* ) ( IntegerTypeSuffix )?
            // ObjectiveC2ansi.g:426:19: ( '0' | '1' .. '9' ( '0' .. '9' )* )
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0=='0') ) {
                alt7=1;
            }
            else if ( ((LA7_0>='1' && LA7_0<='9')) ) {
                alt7=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // ObjectiveC2ansi.g:426:20: '0'
                    this.match('0'); 


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:426:26: '1' .. '9' ( '0' .. '9' )*
                    this.matchRange('1','9'); 
                    // ObjectiveC2ansi.g:426:35: ( '0' .. '9' )*
                    loop6:
                    do {
                        var alt6=2;
                        var LA6_0 = this.input.LA(1);

                        if ( ((LA6_0>='0' && LA6_0<='9')) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                        case 1 :
                            // ObjectiveC2ansi.g:426:35: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop6;
                        }
                    } while (true);



                    break;

            }

            // ObjectiveC2ansi.g:426:46: ( IntegerTypeSuffix )?
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0=='L'||LA8_0=='U'||LA8_0=='l'||LA8_0=='u') ) {
                alt8=1;
            }
            switch (alt8) {
                case 1 :
                    // ObjectiveC2ansi.g:426:46: IntegerTypeSuffix
                    this.mIntegerTypeSuffix(); 


                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DECIMAL_LITERAL",

    // $ANTLR start OCTAL_LITERAL
    mOCTAL_LITERAL: function()  {
        try {
            var _type = this.OCTAL_LITERAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:428:15: ( '0' ( '0' .. '7' )+ ( IntegerTypeSuffix )? )
            // ObjectiveC2ansi.g:428:17: '0' ( '0' .. '7' )+ ( IntegerTypeSuffix )?
            this.match('0'); 
            // ObjectiveC2ansi.g:428:21: ( '0' .. '7' )+
            var cnt9=0;
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( ((LA9_0>='0' && LA9_0<='7')) ) {
                    alt9=1;
                }


                switch (alt9) {
                case 1 :
                    // ObjectiveC2ansi.g:428:22: '0' .. '7'
                    this.matchRange('0','7'); 


                    break;

                default :
                    if ( cnt9 >= 1 ) {
                        break loop9;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(9, this.input);
                        throw eee;
                }
                cnt9++;
            } while (true);

            // ObjectiveC2ansi.g:428:33: ( IntegerTypeSuffix )?
            var alt10=2;
            var LA10_0 = this.input.LA(1);

            if ( (LA10_0=='L'||LA10_0=='U'||LA10_0=='l'||LA10_0=='u') ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // ObjectiveC2ansi.g:428:33: IntegerTypeSuffix
                    this.mIntegerTypeSuffix(); 


                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OCTAL_LITERAL",

    // $ANTLR start HexDigit
    mHexDigit: function()  {
        try {
            // ObjectiveC2ansi.g:431:10: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            // ObjectiveC2ansi.g:431:12: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='F')||(this.input.LA(1)>='a' && this.input.LA(1)<='f') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "HexDigit",

    // $ANTLR start IntegerTypeSuffix
    mIntegerTypeSuffix: function()  {
        try {
            // ObjectiveC2ansi.g:435:2: ( ( 'u' | 'U' | 'l' | 'L' ) )
            // ObjectiveC2ansi.g:435:4: ( 'u' | 'U' | 'l' | 'L' )
            if ( this.input.LA(1)=='L'||this.input.LA(1)=='U'||this.input.LA(1)=='l'||this.input.LA(1)=='u' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "IntegerTypeSuffix",

    // $ANTLR start FLOATING_POINT_LITERAL
    mFLOATING_POINT_LITERAL: function()  {
        try {
            var _type = this.FLOATING_POINT_LITERAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:439:5: ( ( '0' .. '9' )+ ( '.' ( '0' .. '9' )* )? ( Exponent )? ( FloatTypeSuffix )? )
            // ObjectiveC2ansi.g:439:9: ( '0' .. '9' )+ ( '.' ( '0' .. '9' )* )? ( Exponent )? ( FloatTypeSuffix )?
            // ObjectiveC2ansi.g:439:9: ( '0' .. '9' )+
            var cnt11=0;
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( ((LA11_0>='0' && LA11_0<='9')) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // ObjectiveC2ansi.g:439:10: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt11 >= 1 ) {
                        break loop11;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(11, this.input);
                        throw eee;
                }
                cnt11++;
            } while (true);

            // ObjectiveC2ansi.g:439:21: ( '.' ( '0' .. '9' )* )?
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( (LA13_0=='.') ) {
                alt13=1;
            }
            switch (alt13) {
                case 1 :
                    // ObjectiveC2ansi.g:439:22: '.' ( '0' .. '9' )*
                    this.match('.'); 
                    // ObjectiveC2ansi.g:439:26: ( '0' .. '9' )*
                    loop12:
                    do {
                        var alt12=2;
                        var LA12_0 = this.input.LA(1);

                        if ( ((LA12_0>='0' && LA12_0<='9')) ) {
                            alt12=1;
                        }


                        switch (alt12) {
                        case 1 :
                            // ObjectiveC2ansi.g:439:27: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop12;
                        }
                    } while (true);



                    break;

            }

            // ObjectiveC2ansi.g:439:40: ( Exponent )?
            var alt14=2;
            var LA14_0 = this.input.LA(1);

            if ( (LA14_0=='E'||LA14_0=='e') ) {
                alt14=1;
            }
            switch (alt14) {
                case 1 :
                    // ObjectiveC2ansi.g:439:40: Exponent
                    this.mExponent(); 


                    break;

            }

            // ObjectiveC2ansi.g:439:50: ( FloatTypeSuffix )?
            var alt15=2;
            var LA15_0 = this.input.LA(1);

            if ( (LA15_0=='D'||LA15_0=='F'||LA15_0=='d'||LA15_0=='f') ) {
                alt15=1;
            }
            switch (alt15) {
                case 1 :
                    // ObjectiveC2ansi.g:439:50: FloatTypeSuffix
                    this.mFloatTypeSuffix(); 


                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOATING_POINT_LITERAL",

    // $ANTLR start Exponent
    mExponent: function()  {
        try {
            // ObjectiveC2ansi.g:443:10: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            // ObjectiveC2ansi.g:443:12: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // ObjectiveC2ansi.g:443:22: ( '+' | '-' )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0=='+'||LA16_0=='-') ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // ObjectiveC2ansi.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // ObjectiveC2ansi.g:443:33: ( '0' .. '9' )+
            var cnt17=0;
            loop17:
            do {
                var alt17=2;
                var LA17_0 = this.input.LA(1);

                if ( ((LA17_0>='0' && LA17_0<='9')) ) {
                    alt17=1;
                }


                switch (alt17) {
                case 1 :
                    // ObjectiveC2ansi.g:443:34: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt17 >= 1 ) {
                        break loop17;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(17, this.input);
                        throw eee;
                }
                cnt17++;
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "Exponent",

    // $ANTLR start FloatTypeSuffix
    mFloatTypeSuffix: function()  {
        try {
            // ObjectiveC2ansi.g:446:17: ( ( 'f' | 'F' | 'd' | 'D' ) )
            // ObjectiveC2ansi.g:446:19: ( 'f' | 'F' | 'd' | 'D' )
            if ( this.input.LA(1)=='D'||this.input.LA(1)=='F'||this.input.LA(1)=='d'||this.input.LA(1)=='f' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "FloatTypeSuffix",

    // $ANTLR start EscapeSequence
    mEscapeSequence: function()  {
        try {
            // ObjectiveC2ansi.g:450:5: ( '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' ) | OctalEscape )
            var alt18=2;
            var LA18_0 = this.input.LA(1);

            if ( (LA18_0=='\\') ) {
                var LA18_1 = this.input.LA(2);

                if ( (LA18_1=='\"'||LA18_1=='\''||LA18_1=='\\'||LA18_1=='b'||LA18_1=='f'||LA18_1=='n'||LA18_1=='r'||LA18_1=='t') ) {
                    alt18=1;
                }
                else if ( ((LA18_1>='0' && LA18_1<='7')) ) {
                    alt18=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 18, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                throw nvae;
            }
            switch (alt18) {
                case 1 :
                    // ObjectiveC2ansi.g:450:9: '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' )
                    this.match('\\'); 
                    if ( this.input.LA(1)=='\"'||this.input.LA(1)=='\''||this.input.LA(1)=='\\'||this.input.LA(1)=='b'||this.input.LA(1)=='f'||this.input.LA(1)=='n'||this.input.LA(1)=='r'||this.input.LA(1)=='t' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // ObjectiveC2ansi.g:451:9: OctalEscape
                    this.mOctalEscape(); 


                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "EscapeSequence",

    // $ANTLR start OctalEscape
    mOctalEscape: function()  {
        try {
            // ObjectiveC2ansi.g:456:5: ( '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) )
            var alt19=3;
            var LA19_0 = this.input.LA(1);

            if ( (LA19_0=='\\') ) {
                var LA19_1 = this.input.LA(2);

                if ( ((LA19_1>='0' && LA19_1<='3')) ) {
                    var LA19_2 = this.input.LA(3);

                    if ( ((LA19_2>='0' && LA19_2<='7')) ) {
                        var LA19_5 = this.input.LA(4);

                        if ( ((LA19_5>='0' && LA19_5<='7')) ) {
                            alt19=1;
                        }
                        else {
                            alt19=2;}
                    }
                    else {
                        alt19=3;}
                }
                else if ( ((LA19_1>='4' && LA19_1<='7')) ) {
                    var LA19_3 = this.input.LA(3);

                    if ( ((LA19_3>='0' && LA19_3<='7')) ) {
                        alt19=2;
                    }
                    else {
                        alt19=3;}
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 19, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 19, 0, this.input);

                throw nvae;
            }
            switch (alt19) {
                case 1 :
                    // ObjectiveC2ansi.g:456:9: '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // ObjectiveC2ansi.g:456:14: ( '0' .. '3' )
                    // ObjectiveC2ansi.g:456:15: '0' .. '3'
                    this.matchRange('0','3'); 



                    // ObjectiveC2ansi.g:456:25: ( '0' .. '7' )
                    // ObjectiveC2ansi.g:456:26: '0' .. '7'
                    this.matchRange('0','7'); 



                    // ObjectiveC2ansi.g:456:36: ( '0' .. '7' )
                    // ObjectiveC2ansi.g:456:37: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 2 :
                    // ObjectiveC2ansi.g:457:9: '\\\\' ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // ObjectiveC2ansi.g:457:14: ( '0' .. '7' )
                    // ObjectiveC2ansi.g:457:15: '0' .. '7'
                    this.matchRange('0','7'); 



                    // ObjectiveC2ansi.g:457:25: ( '0' .. '7' )
                    // ObjectiveC2ansi.g:457:26: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 3 :
                    // ObjectiveC2ansi.g:458:9: '\\\\' ( '0' .. '7' )
                    this.match('\\'); 
                    // ObjectiveC2ansi.g:458:14: ( '0' .. '7' )
                    // ObjectiveC2ansi.g:458:15: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "OctalEscape",

    // $ANTLR start UnicodeEscape
    mUnicodeEscape: function()  {
        try {
            // ObjectiveC2ansi.g:463:5: ( '\\\\' 'u' HexDigit HexDigit HexDigit HexDigit )
            // ObjectiveC2ansi.g:463:9: '\\\\' 'u' HexDigit HexDigit HexDigit HexDigit
            this.match('\\'); 
            this.match('u'); 
            this.mHexDigit(); 
            this.mHexDigit(); 
            this.mHexDigit(); 
            this.mHexDigit(); 



        }
        finally {
        }
    },
    // $ANTLR end "UnicodeEscape",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:466:5: ( ( ' ' | '\\r' | '\\t' | '\\u000C' | '\\n' ) )
            // ObjectiveC2ansi.g:466:8: ( ' ' | '\\r' | '\\t' | '\\u000C' | '\\n' )
            if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||(this.input.LA(1)>='\f' && this.input.LA(1)<='\r')||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            channel=99;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    // $ANTLR start COMMENT
    mCOMMENT: function()  {
        try {
            var _type = this.COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:470:5: ( '/*' ( options {greedy=false; } : . )* '*/' )
            // ObjectiveC2ansi.g:470:9: '/*' ( options {greedy=false; } : . )* '*/'
            this.match("/*"); 

            // ObjectiveC2ansi.g:470:14: ( options {greedy=false; } : . )*
            loop20:
            do {
                var alt20=2;
                var LA20_0 = this.input.LA(1);

                if ( (LA20_0=='*') ) {
                    var LA20_1 = this.input.LA(2);

                    if ( (LA20_1=='/') ) {
                        alt20=2;
                    }
                    else if ( ((LA20_1>='\u0000' && LA20_1<='.')||(LA20_1>='0' && LA20_1<='\uFFFF')) ) {
                        alt20=1;
                    }


                }
                else if ( ((LA20_0>='\u0000' && LA20_0<=')')||(LA20_0>='+' && LA20_0<='\uFFFF')) ) {
                    alt20=1;
                }


                switch (alt20) {
                case 1 :
                    // ObjectiveC2ansi.g:470:42: .
                    this.matchAny(); 


                    break;

                default :
                    break loop20;
                }
            } while (true);

            this.match("*/"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMENT",

    // $ANTLR start LINE_COMMENT
    mLINE_COMMENT: function()  {
        try {
            var _type = this.LINE_COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ObjectiveC2ansi.g:474:5: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' )
            // ObjectiveC2ansi.g:474:7: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
            this.match("//"); 

            // ObjectiveC2ansi.g:474:12: (~ ( '\\n' | '\\r' ) )*
            loop21:
            do {
                var alt21=2;
                var LA21_0 = this.input.LA(1);

                if ( ((LA21_0>='\u0000' && LA21_0<='\t')||(LA21_0>='\u000B' && LA21_0<='\f')||(LA21_0>='\u000E' && LA21_0<='\uFFFF')) ) {
                    alt21=1;
                }


                switch (alt21) {
                case 1 :
                    // ObjectiveC2ansi.g:474:12: ~ ( '\\n' | '\\r' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop21;
                }
            } while (true);

            // ObjectiveC2ansi.g:474:26: ( '\\r' )?
            var alt22=2;
            var LA22_0 = this.input.LA(1);

            if ( (LA22_0=='\r') ) {
                alt22=1;
            }
            switch (alt22) {
                case 1 :
                    // ObjectiveC2ansi.g:474:26: '\\r'
                    this.match('\r'); 


                    break;

            }

            this.match('\n'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LINE_COMMENT",

    mTokens: function() {
        // ObjectiveC2ansi.g:1:8: ( T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | T__30 | T__31 | T__32 | T__33 | T__34 | T__35 | T__36 | T__37 | T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | T__56 | T__57 | T__58 | T__59 | T__60 | T__61 | T__62 | T__63 | T__64 | T__65 | T__66 | T__67 | T__68 | T__69 | T__70 | T__71 | T__72 | T__73 | T__74 | T__75 | T__76 | T__77 | T__78 | T__79 | T__80 | T__81 | T__82 | T__83 | T__84 | T__85 | T__86 | T__87 | T__88 | T__89 | T__90 | T__91 | T__92 | T__93 | T__94 | T__95 | T__96 | T__97 | T__98 | T__99 | T__100 | T__101 | T__102 | T__103 | T__104 | T__105 | T__106 | T__107 | T__108 | T__109 | T__110 | T__111 | T__112 | T__113 | T__114 | T__115 | T__116 | T__117 | T__118 | T__119 | T__120 | T__121 | T__122 | T__123 | T__124 | T__125 | T__126 | T__127 | T__128 | T__129 | T__130 | T__131 | T__132 | T__133 | T__134 | T__135 | IDENTIFIER | CHARACTER_LITERAL | STRING_LITERAL | HEX_LITERAL | DECIMAL_LITERAL | OCTAL_LITERAL | FLOATING_POINT_LITERAL | WS | COMMENT | LINE_COMMENT )
        var alt23=124;
        alt23 = this.dfa23.predict(this.input);
        switch (alt23) {
            case 1 :
                // ObjectiveC2ansi.g:1:10: T__22
                this.mT__22(); 


                break;
            case 2 :
                // ObjectiveC2ansi.g:1:16: T__23
                this.mT__23(); 


                break;
            case 3 :
                // ObjectiveC2ansi.g:1:22: T__24
                this.mT__24(); 


                break;
            case 4 :
                // ObjectiveC2ansi.g:1:28: T__25
                this.mT__25(); 


                break;
            case 5 :
                // ObjectiveC2ansi.g:1:34: T__26
                this.mT__26(); 


                break;
            case 6 :
                // ObjectiveC2ansi.g:1:40: T__27
                this.mT__27(); 


                break;
            case 7 :
                // ObjectiveC2ansi.g:1:46: T__28
                this.mT__28(); 


                break;
            case 8 :
                // ObjectiveC2ansi.g:1:52: T__29
                this.mT__29(); 


                break;
            case 9 :
                // ObjectiveC2ansi.g:1:58: T__30
                this.mT__30(); 


                break;
            case 10 :
                // ObjectiveC2ansi.g:1:64: T__31
                this.mT__31(); 


                break;
            case 11 :
                // ObjectiveC2ansi.g:1:70: T__32
                this.mT__32(); 


                break;
            case 12 :
                // ObjectiveC2ansi.g:1:76: T__33
                this.mT__33(); 


                break;
            case 13 :
                // ObjectiveC2ansi.g:1:82: T__34
                this.mT__34(); 


                break;
            case 14 :
                // ObjectiveC2ansi.g:1:88: T__35
                this.mT__35(); 


                break;
            case 15 :
                // ObjectiveC2ansi.g:1:94: T__36
                this.mT__36(); 


                break;
            case 16 :
                // ObjectiveC2ansi.g:1:100: T__37
                this.mT__37(); 


                break;
            case 17 :
                // ObjectiveC2ansi.g:1:106: T__38
                this.mT__38(); 


                break;
            case 18 :
                // ObjectiveC2ansi.g:1:112: T__39
                this.mT__39(); 


                break;
            case 19 :
                // ObjectiveC2ansi.g:1:118: T__40
                this.mT__40(); 


                break;
            case 20 :
                // ObjectiveC2ansi.g:1:124: T__41
                this.mT__41(); 


                break;
            case 21 :
                // ObjectiveC2ansi.g:1:130: T__42
                this.mT__42(); 


                break;
            case 22 :
                // ObjectiveC2ansi.g:1:136: T__43
                this.mT__43(); 


                break;
            case 23 :
                // ObjectiveC2ansi.g:1:142: T__44
                this.mT__44(); 


                break;
            case 24 :
                // ObjectiveC2ansi.g:1:148: T__45
                this.mT__45(); 


                break;
            case 25 :
                // ObjectiveC2ansi.g:1:154: T__46
                this.mT__46(); 


                break;
            case 26 :
                // ObjectiveC2ansi.g:1:160: T__47
                this.mT__47(); 


                break;
            case 27 :
                // ObjectiveC2ansi.g:1:166: T__48
                this.mT__48(); 


                break;
            case 28 :
                // ObjectiveC2ansi.g:1:172: T__49
                this.mT__49(); 


                break;
            case 29 :
                // ObjectiveC2ansi.g:1:178: T__50
                this.mT__50(); 


                break;
            case 30 :
                // ObjectiveC2ansi.g:1:184: T__51
                this.mT__51(); 


                break;
            case 31 :
                // ObjectiveC2ansi.g:1:190: T__52
                this.mT__52(); 


                break;
            case 32 :
                // ObjectiveC2ansi.g:1:196: T__53
                this.mT__53(); 


                break;
            case 33 :
                // ObjectiveC2ansi.g:1:202: T__54
                this.mT__54(); 


                break;
            case 34 :
                // ObjectiveC2ansi.g:1:208: T__55
                this.mT__55(); 


                break;
            case 35 :
                // ObjectiveC2ansi.g:1:214: T__56
                this.mT__56(); 


                break;
            case 36 :
                // ObjectiveC2ansi.g:1:220: T__57
                this.mT__57(); 


                break;
            case 37 :
                // ObjectiveC2ansi.g:1:226: T__58
                this.mT__58(); 


                break;
            case 38 :
                // ObjectiveC2ansi.g:1:232: T__59
                this.mT__59(); 


                break;
            case 39 :
                // ObjectiveC2ansi.g:1:238: T__60
                this.mT__60(); 


                break;
            case 40 :
                // ObjectiveC2ansi.g:1:244: T__61
                this.mT__61(); 


                break;
            case 41 :
                // ObjectiveC2ansi.g:1:250: T__62
                this.mT__62(); 


                break;
            case 42 :
                // ObjectiveC2ansi.g:1:256: T__63
                this.mT__63(); 


                break;
            case 43 :
                // ObjectiveC2ansi.g:1:262: T__64
                this.mT__64(); 


                break;
            case 44 :
                // ObjectiveC2ansi.g:1:268: T__65
                this.mT__65(); 


                break;
            case 45 :
                // ObjectiveC2ansi.g:1:274: T__66
                this.mT__66(); 


                break;
            case 46 :
                // ObjectiveC2ansi.g:1:280: T__67
                this.mT__67(); 


                break;
            case 47 :
                // ObjectiveC2ansi.g:1:286: T__68
                this.mT__68(); 


                break;
            case 48 :
                // ObjectiveC2ansi.g:1:292: T__69
                this.mT__69(); 


                break;
            case 49 :
                // ObjectiveC2ansi.g:1:298: T__70
                this.mT__70(); 


                break;
            case 50 :
                // ObjectiveC2ansi.g:1:304: T__71
                this.mT__71(); 


                break;
            case 51 :
                // ObjectiveC2ansi.g:1:310: T__72
                this.mT__72(); 


                break;
            case 52 :
                // ObjectiveC2ansi.g:1:316: T__73
                this.mT__73(); 


                break;
            case 53 :
                // ObjectiveC2ansi.g:1:322: T__74
                this.mT__74(); 


                break;
            case 54 :
                // ObjectiveC2ansi.g:1:328: T__75
                this.mT__75(); 


                break;
            case 55 :
                // ObjectiveC2ansi.g:1:334: T__76
                this.mT__76(); 


                break;
            case 56 :
                // ObjectiveC2ansi.g:1:340: T__77
                this.mT__77(); 


                break;
            case 57 :
                // ObjectiveC2ansi.g:1:346: T__78
                this.mT__78(); 


                break;
            case 58 :
                // ObjectiveC2ansi.g:1:352: T__79
                this.mT__79(); 


                break;
            case 59 :
                // ObjectiveC2ansi.g:1:358: T__80
                this.mT__80(); 


                break;
            case 60 :
                // ObjectiveC2ansi.g:1:364: T__81
                this.mT__81(); 


                break;
            case 61 :
                // ObjectiveC2ansi.g:1:370: T__82
                this.mT__82(); 


                break;
            case 62 :
                // ObjectiveC2ansi.g:1:376: T__83
                this.mT__83(); 


                break;
            case 63 :
                // ObjectiveC2ansi.g:1:382: T__84
                this.mT__84(); 


                break;
            case 64 :
                // ObjectiveC2ansi.g:1:388: T__85
                this.mT__85(); 


                break;
            case 65 :
                // ObjectiveC2ansi.g:1:394: T__86
                this.mT__86(); 


                break;
            case 66 :
                // ObjectiveC2ansi.g:1:400: T__87
                this.mT__87(); 


                break;
            case 67 :
                // ObjectiveC2ansi.g:1:406: T__88
                this.mT__88(); 


                break;
            case 68 :
                // ObjectiveC2ansi.g:1:412: T__89
                this.mT__89(); 


                break;
            case 69 :
                // ObjectiveC2ansi.g:1:418: T__90
                this.mT__90(); 


                break;
            case 70 :
                // ObjectiveC2ansi.g:1:424: T__91
                this.mT__91(); 


                break;
            case 71 :
                // ObjectiveC2ansi.g:1:430: T__92
                this.mT__92(); 


                break;
            case 72 :
                // ObjectiveC2ansi.g:1:436: T__93
                this.mT__93(); 


                break;
            case 73 :
                // ObjectiveC2ansi.g:1:442: T__94
                this.mT__94(); 


                break;
            case 74 :
                // ObjectiveC2ansi.g:1:448: T__95
                this.mT__95(); 


                break;
            case 75 :
                // ObjectiveC2ansi.g:1:454: T__96
                this.mT__96(); 


                break;
            case 76 :
                // ObjectiveC2ansi.g:1:460: T__97
                this.mT__97(); 


                break;
            case 77 :
                // ObjectiveC2ansi.g:1:466: T__98
                this.mT__98(); 


                break;
            case 78 :
                // ObjectiveC2ansi.g:1:472: T__99
                this.mT__99(); 


                break;
            case 79 :
                // ObjectiveC2ansi.g:1:478: T__100
                this.mT__100(); 


                break;
            case 80 :
                // ObjectiveC2ansi.g:1:485: T__101
                this.mT__101(); 


                break;
            case 81 :
                // ObjectiveC2ansi.g:1:492: T__102
                this.mT__102(); 


                break;
            case 82 :
                // ObjectiveC2ansi.g:1:499: T__103
                this.mT__103(); 


                break;
            case 83 :
                // ObjectiveC2ansi.g:1:506: T__104
                this.mT__104(); 


                break;
            case 84 :
                // ObjectiveC2ansi.g:1:513: T__105
                this.mT__105(); 


                break;
            case 85 :
                // ObjectiveC2ansi.g:1:520: T__106
                this.mT__106(); 


                break;
            case 86 :
                // ObjectiveC2ansi.g:1:527: T__107
                this.mT__107(); 


                break;
            case 87 :
                // ObjectiveC2ansi.g:1:534: T__108
                this.mT__108(); 


                break;
            case 88 :
                // ObjectiveC2ansi.g:1:541: T__109
                this.mT__109(); 


                break;
            case 89 :
                // ObjectiveC2ansi.g:1:548: T__110
                this.mT__110(); 


                break;
            case 90 :
                // ObjectiveC2ansi.g:1:555: T__111
                this.mT__111(); 


                break;
            case 91 :
                // ObjectiveC2ansi.g:1:562: T__112
                this.mT__112(); 


                break;
            case 92 :
                // ObjectiveC2ansi.g:1:569: T__113
                this.mT__113(); 


                break;
            case 93 :
                // ObjectiveC2ansi.g:1:576: T__114
                this.mT__114(); 


                break;
            case 94 :
                // ObjectiveC2ansi.g:1:583: T__115
                this.mT__115(); 


                break;
            case 95 :
                // ObjectiveC2ansi.g:1:590: T__116
                this.mT__116(); 


                break;
            case 96 :
                // ObjectiveC2ansi.g:1:597: T__117
                this.mT__117(); 


                break;
            case 97 :
                // ObjectiveC2ansi.g:1:604: T__118
                this.mT__118(); 


                break;
            case 98 :
                // ObjectiveC2ansi.g:1:611: T__119
                this.mT__119(); 


                break;
            case 99 :
                // ObjectiveC2ansi.g:1:618: T__120
                this.mT__120(); 


                break;
            case 100 :
                // ObjectiveC2ansi.g:1:625: T__121
                this.mT__121(); 


                break;
            case 101 :
                // ObjectiveC2ansi.g:1:632: T__122
                this.mT__122(); 


                break;
            case 102 :
                // ObjectiveC2ansi.g:1:639: T__123
                this.mT__123(); 


                break;
            case 103 :
                // ObjectiveC2ansi.g:1:646: T__124
                this.mT__124(); 


                break;
            case 104 :
                // ObjectiveC2ansi.g:1:653: T__125
                this.mT__125(); 


                break;
            case 105 :
                // ObjectiveC2ansi.g:1:660: T__126
                this.mT__126(); 


                break;
            case 106 :
                // ObjectiveC2ansi.g:1:667: T__127
                this.mT__127(); 


                break;
            case 107 :
                // ObjectiveC2ansi.g:1:674: T__128
                this.mT__128(); 


                break;
            case 108 :
                // ObjectiveC2ansi.g:1:681: T__129
                this.mT__129(); 


                break;
            case 109 :
                // ObjectiveC2ansi.g:1:688: T__130
                this.mT__130(); 


                break;
            case 110 :
                // ObjectiveC2ansi.g:1:695: T__131
                this.mT__131(); 


                break;
            case 111 :
                // ObjectiveC2ansi.g:1:702: T__132
                this.mT__132(); 


                break;
            case 112 :
                // ObjectiveC2ansi.g:1:709: T__133
                this.mT__133(); 


                break;
            case 113 :
                // ObjectiveC2ansi.g:1:716: T__134
                this.mT__134(); 


                break;
            case 114 :
                // ObjectiveC2ansi.g:1:723: T__135
                this.mT__135(); 


                break;
            case 115 :
                // ObjectiveC2ansi.g:1:730: IDENTIFIER
                this.mIDENTIFIER(); 


                break;
            case 116 :
                // ObjectiveC2ansi.g:1:741: CHARACTER_LITERAL
                this.mCHARACTER_LITERAL(); 


                break;
            case 117 :
                // ObjectiveC2ansi.g:1:759: STRING_LITERAL
                this.mSTRING_LITERAL(); 


                break;
            case 118 :
                // ObjectiveC2ansi.g:1:774: HEX_LITERAL
                this.mHEX_LITERAL(); 


                break;
            case 119 :
                // ObjectiveC2ansi.g:1:786: DECIMAL_LITERAL
                this.mDECIMAL_LITERAL(); 


                break;
            case 120 :
                // ObjectiveC2ansi.g:1:802: OCTAL_LITERAL
                this.mOCTAL_LITERAL(); 


                break;
            case 121 :
                // ObjectiveC2ansi.g:1:816: FLOATING_POINT_LITERAL
                this.mFLOATING_POINT_LITERAL(); 


                break;
            case 122 :
                // ObjectiveC2ansi.g:1:839: WS
                this.mWS(); 


                break;
            case 123 :
                // ObjectiveC2ansi.g:1:842: COMMENT
                this.mCOMMENT(); 


                break;
            case 124 :
                // ObjectiveC2ansi.g:1:850: LINE_COMMENT
                this.mLINE_COMMENT(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(ObjectiveC2ansiLexer, {
    DFA23_eotS:
        "\u0002\uffff\u0001\u0038\u0001\u003a\u0001\u003e\u0001\uffff\u0001"+
    "\u0041\u0001\u0044\u0008\uffff\u0001\u004e\u0001\u0052\u000a\u002d\u0002"+
    "\uffff\u0004\u002d\u0001\u0071\u0001\u0073\u0002\u002d\u0001\u0077\u0001"+
    "\u007a\u0001\u007c\u0001\u007f\u0001\uffff\u0001\u0081\u0003\uffff\u0002"+
    "\u0083\u0005\uffff\u0001\u008b\u000b\uffff\u0001\u008d\u0010\uffff\u000a"+
    "\u002d\u0001\u00a9\u0001\u00aa\u0001\u00ab\u0003\u002d\u0001\u00b0\u000c"+
    "\u002d\u0004\uffff\u0002\u002d\u000f\uffff\u0001\u00c2\u0001\u0083\u0002"+
    "\uffff\u0001\u00c5\u0010\uffff\u000d\u002d\u0001\u00d8\u0001\u002d\u0003"+
    "\uffff\u0002\u002d\u0001\u00dc\u0001\u002d\u0001\uffff\u0003\u002d\u0001"+
    "\u00e1\u000d\u002d\u0008\uffff\u0001\u00f0\u0001\u002d\u0001\u00f2\u0002"+
    "\u002d\u0001\u00f5\u0003\u002d\u0001\u00f9\u0004\u002d\u0001\uffff\u0001"+
    "\u002d\u0001\u00ff\u0001\u002d\u0001\uffff\u0004\u002d\u0001\uffff\u0004"+
    "\u002d\u0001\u0109\u0003\u002d\u0001\u010d\u0001\u010e\u0002\u002d\u0001"+
    "\u0111\u0002\uffff\u0001\u002d\u0001\uffff\u0001\u0115\u0001\u002d\u0001"+
    "\uffff\u0001\u0117\u0002\u002d\u0001\uffff\u0001\u011a\u0003\u002d\u0001"+
    "\u011e\u0001\uffff\u0001\u011f\u0003\u002d\u0001\u0123\u0002\u002d\u0001"+
    "\u0126\u0001\u0127\u0001\uffff\u0003\u002d\u0002\uffff\u0001\u002d\u0001"+
    "\u012c\u0003\uffff\u0001\u002d\u0001\uffff\u0001\u002d\u0001\uffff\u0001"+
    "\u012f\u0001\u0130\u0001\uffff\u0001\u0131\u0001\u0132\u0001\u0133\u0002"+
    "\uffff\u0001\u0134\u0002\u002d\u0001\uffff\u0001\u0137\u0001\u0138\u0002"+
    "\uffff\u0001\u002d\u0001\u013a\u0001\u013b\u0001\u002d\u0001\uffff\u0002"+
    "\u002d\u0006\uffff\u0001\u013f\u0001\u002d\u0002\uffff\u0001\u002d\u0002"+
    "\uffff\u0001\u0142\u0001\u0143\u0001\u0144\u0001\uffff\u0001\u0145\u0001"+
    "\u0146\u0005\uffff",
    DFA23_eofS:
        "\u0147\uffff",
    DFA23_minS:
        "\u0001\u0009\u0001\u0064\u0001\u003c\u0001\u0000\u0001\u002a\u0001"+
    "\uffff\u0001\u002b\u0001\u003d\u0001\u0063\u0007\uffff\u0001\u002b\u0001"+
    "\u002d\u0001\u006f\u0001\u0061\u0001\u0065\u0001\u0064\u0001\u006f\u0001"+
    "\u006c\u0001\u0065\u0002\u006e\u0001\u0072\u0002\uffff\u0001\u0075\u0001"+
    "\u0065\u0001\u006c\u0001\u0079\u0002\u003d\u0001\u0068\u0001\u006f\u0001"+
    "\u003d\u0001\u0026\u0002\u003d\u0001\uffff\u0001\u003d\u0003\uffff\u0002"+
    "\u002e\u0001\uffff\u0001\u0066\u0003\uffff\u0001\u003d\u000b\uffff\u0001"+
    "\u003d\u0002\uffff\u0001\u006d\u0001\u006e\u0002\u0061\u0001\u0065\u0001"+
    "\u0068\u0008\uffff\u0001\u0069\u0001\u0061\u0001\u006e\u0001\u0073\u0001"+
    "\u006f\u0001\u0067\u0001\u006c\u0001\u0070\u0001\u0061\u0001\u0069\u0003"+
    "\u0024\u0001\u006e\u0001\u006f\u0001\u0072\u0001\u0024\u0001\u0066\u0001"+
    "\u0069\u0001\u0074\u0001\u0065\u0001\u0063\u0001\u0065\u0001\u0074\u0001"+
    "\u0067\u0001\u0074\u0001\u0075\u0001\u0073\u0001\u0070\u0004\uffff\u0001"+
    "\u0069\u0001\u0074\u000f\uffff\u0002\u002e\u0002\uffff\u0001\u0064\u0006"+
    "\uffff\u0001\u0063\u0001\u0069\u0008\uffff\u0001\u0064\u0001\u0061\u0001"+
    "\u0072\u0001\u0073\u0001\u0065\u0001\u0072\u0001\u006e\u0001\u0065\u0001"+
    "\u0066\u0001\u0065\u0001\u0074\u0001\u0075\u0001\u0074\u0001\u0024\u0001"+
    "\u0075\u0003\uffff\u0001\u0067\u0001\u0061\u0001\u0024\u0001\u0062\u0001"+
    "\uffff\u0001\u0061\u0001\u0069\u0001\u006f\u0001\u0024\u0001\u0077\u0001"+
    "\u006f\u0001\u0065\u0001\u0061\u0001\u006f\u0001\u0069\u0001\u0075\u0001"+
    "\u0065\u0001\u006d\u0002\u0065\u0001\u006c\u0001\u006f\u0006\uffff\u0001"+
    "\u0074\u0001\uffff\u0001\u0024\u0001\u0074\u0001\u0024\u0001\u0074\u0001"+
    "\u0069\u0001\u0024\u0001\u0074\u0001\u0065\u0001\u006f\u0001\u0024\u0001"+
    "\u0072\u0001\u0069\u0002\u0063\u0001\uffff\u0001\u0074\u0001\u0024\u0001"+
    "\u0074\u0001\uffff\u0001\u006c\u0001\u0075\u0001\u0067\u0001\u006e\u0001"+
    "\uffff\u0001\u0061\u0001\u0070\u0001\u0066\u0001\u006b\u0001\u0024\u0001"+
    "\u0073\u0002\u0072\u0002\u0024\u0001\u0064\u0001\u0065\u0001\u0024\u0001"+
    "\u0065\u0001\uffff\u0001\u0069\u0001\uffff\u0001\u0024\u0001\u006e\u0001"+
    "\uffff\u0001\u0024\u0001\u0064\u0001\u0066\u0001\uffff\u0001\u0024\u0001"+
    "\u0063\u0001\u0074\u0001\u0068\u0001\u0024\u0001\uffff\u0001\u0024\u0001"+
    "\u0065\u0001\u006c\u0001\u006e\u0001\u0024\u0002\u0079\u0002\u0024\u0001"+
    "\uffff\u0001\u0074\u0002\u006e\u0002\uffff\u0001\u0065\u0001\u0024\u0003"+
    "\uffff\u0001\u006c\u0001\uffff\u0001\u0075\u0001\uffff\u0002\u0024\u0001"+
    "\uffff\u0003\u0024\u0002\uffff\u0001\u0024\u0001\u0074\u0001\u0065\u0001"+
    "\uffff\u0002\u0024\u0002\uffff\u0001\u0065\u0002\u0024\u0001\u0066\u0001"+
    "\uffff\u0002\u0065\u0006\uffff\u0001\u0024\u0001\u0064\u0002\uffff\u0001"+
    "\u0072\u0002\uffff\u0003\u0024\u0001\uffff\u0002\u0024\u0005\uffff",
    DFA23_maxS:
        "\u0001\u007e\u0001\u0075\u0001\u003d\u0001\uffff\u0001\u003d\u0001"+
    "\uffff\u0001\u002e\u0001\u003e\u0001\u0074\u0007\uffff\u0001\u003d\u0001"+
    "\u003e\u0002\u006f\u0001\u0077\u0001\u006e\u0003\u006f\u0001\u006e\u0001"+
    "\u0075\u0001\u0079\u0002\uffff\u0001\u0075\u0001\u0065\u0001\u0078\u0001"+
    "\u0079\u0002\u003d\u0001\u0068\u0001\u006f\u0003\u003d\u0001\u007c\u0001"+
    "\uffff\u0001\u003d\u0003\uffff\u0001\u0078\u0001\u0066\u0001\uffff\u0001"+
    "\u006e\u0003\uffff\u0001\u003d\u000b\uffff\u0001\u003d\u0002\uffff\u0002"+
    "\u006e\u0001\u0075\u0001\u006c\u0001\u0079\u0001\u0072\u0008\uffff\u0001"+
    "\u006c\u0001\u0061\u0001\u006e\u0001\u0073\u0001\u006f\u0001\u007a\u0001"+
    "\u006c\u0001\u0070\u0001\u0072\u0001\u0069\u0003\u007a\u0001\u006e\u0001"+
    "\u006f\u0001\u0072\u0001\u007a\u0001\u0066\u0001\u0073\u0001\u0074\u0001"+
    "\u0065\u0001\u0072\u0001\u0065\u0003\u0074\u0001\u0075\u0001\u0073\u0001"+
    "\u0070\u0004\uffff\u0001\u0069\u0001\u0074\u000f\uffff\u0002\u0066\u0002"+
    "\uffff\u0001\u006e\u0006\uffff\u0001\u0064\u0001\u006f\u0008\uffff\u0001"+
    "\u0064\u0001\u0061\u0001\u0072\u0001\u0074\u0001\u0065\u0001\u0072\u0001"+
    "\u006e\u0001\u0065\u0001\u0066\u0001\u0065\u0001\u0074\u0001\u0075\u0001"+
    "\u0074\u0001\u007a\u0001\u0075\u0003\uffff\u0001\u0067\u0001\u0061\u0001"+
    "\u007a\u0001\u0062\u0001\uffff\u0001\u0061\u0001\u0069\u0001\u006f\u0001"+
    "\u007a\u0001\u0077\u0001\u006f\u0001\u0065\u0001\u0061\u0001\u006f\u0001"+
    "\u0069\u0001\u0075\u0001\u0065\u0001\u006d\u0002\u0065\u0001\u006c\u0001"+
    "\u006f\u0006\uffff\u0001\u0074\u0001\uffff\u0001\u007a\u0001\u0074\u0001"+
    "\u007a\u0001\u0074\u0001\u0069\u0001\u007a\u0001\u0074\u0001\u0065\u0001"+
    "\u006f\u0001\u007a\u0001\u0072\u0001\u0069\u0002\u0063\u0001\uffff\u0001"+
    "\u0074\u0001\u007a\u0001\u0074\u0001\uffff\u0001\u006c\u0001\u0075\u0001"+
    "\u0067\u0001\u006e\u0001\uffff\u0001\u0061\u0001\u0070\u0001\u0066\u0001"+
    "\u006b\u0001\u007a\u0001\u0073\u0002\u0072\u0002\u007a\u0001\u0064\u0001"+
    "\u0065\u0001\u007a\u0001\u006f\u0001\uffff\u0001\u0069\u0001\uffff\u0001"+
    "\u007a\u0001\u006e\u0001\uffff\u0001\u007a\u0001\u0064\u0001\u0066\u0001"+
    "\uffff\u0001\u007a\u0001\u0063\u0001\u0074\u0001\u0068\u0001\u007a\u0001"+
    "\uffff\u0001\u007a\u0001\u0065\u0001\u006c\u0001\u006e\u0001\u007a\u0002"+
    "\u0079\u0002\u007a\u0001\uffff\u0001\u0074\u0002\u006e\u0002\uffff\u0001"+
    "\u0065\u0001\u007a\u0003\uffff\u0001\u006c\u0001\uffff\u0001\u0075\u0001"+
    "\uffff\u0002\u007a\u0001\uffff\u0003\u007a\u0002\uffff\u0001\u007a\u0001"+
    "\u0074\u0001\u0065\u0001\uffff\u0002\u007a\u0002\uffff\u0001\u0065\u0002"+
    "\u007a\u0001\u0066\u0001\uffff\u0002\u0065\u0006\uffff\u0001\u007a\u0001"+
    "\u0064\u0002\uffff\u0001\u0072\u0002\uffff\u0003\u007a\u0001\uffff\u0002"+
    "\u007a\u0005\uffff",
    DFA23_acceptS:
        "\u0005\uffff\u0001\u000c\u0003\uffff\u0001\u0011\u0001\u0013\u0001"+
    "\u0014\u0001\u0017\u0001\u0019\u0001\u001a\u0001\u001b\u000c\uffff\u0001"+
    "\u0035\u0001\u0036\u000c\uffff\u0001\u0060\u0001\uffff\u0001\u0070\u0001"+
    "\u0073\u0001\u0074\u0002\uffff\u0001\u007a\u0001\uffff\u0001\u0003\u0001"+
    "\u0006\u0001\u0008\u0001\uffff\u0001\u0068\u0001\u0009\u0001\u0075\u0001"+
    "\u000a\u0001\u0057\u0001\u007b\u0001\u007c\u0001\u000b\u0001\u000f\u0001"+
    "\u0049\u0001\u000d\u0001\uffff\u0001\u0069\u0001\u000e\u0006\uffff\u0001"+
    "\u003c\u0001\u0059\u0001\u006d\u0001\u0020\u0001\u005a\u0001\u006e\u0001"+
    "\u0072\u0001\u0021\u001d\uffff\u0001\u0067\u0001\u0044\u0001\u0056\u0001"+
    "\u0048\u0002\uffff\u0001\u0058\u0001\u006c\u0001\u005d\u0001\u0062\u0001"+
    "\u0065\u0001\u005e\u0001\u0064\u0001\u005f\u0001\u0061\u0001\u0063\u0001"+
    "\u0066\u0001\u0071\u0001\u0076\u0001\u0077\u0001\u0079\u0002\uffff\u0001"+
    "\u0001\u0001\u0002\u0001\uffff\u0001\u005b\u0001\u006a\u0001\u005c\u0001"+
    "\u006b\u0001\u0010\u0001\u0015\u0002\uffff\u0001\u001e\u0001\u001f\u0001"+
    "\u0018\u0001\u003b\u0001\u0038\u0001\u003e\u0001\u003a\u0001\u003d\u000f"+
    "\uffff\u0001\u002e\u0001\u002b\u0001\u004c\u0004\uffff\u0001\u0050\u0011"+
    "\uffff\u0001\u0078\u0001\u0004\u0001\u0007\u0001\u0005\u0001\u0012\u0001"+
    "\u0039\u0001\uffff\u0001\u001c\u000e\uffff\u0001\u0025\u0003\uffff\u0001"+
    "\u0051\u0004\uffff\u0001\u002f\u000e\uffff\u0001\u0022\u0001\uffff\u0001"+
    "\u0023\u0002\uffff\u0001\u004a\u0003\uffff\u0001\u0034\u0005\uffff\u0001"+
    "\u0026\u0009\uffff\u0001\u003f\u0003\uffff\u0001\u0047\u0001\u004d\u0002"+
    "\uffff\u0001\u0052\u0001\u0016\u0001\u001d\u0001\uffff\u0001\u002c\u0001"+
    "\uffff\u0001\u0024\u0002\uffff\u0001\u0037\u0003\uffff\u0001\u0030\u0001"+
    "\u0027\u0003\uffff\u0001\u0046\u0002\uffff\u0001\u0032\u0001\u0054\u0004"+
    "\uffff\u0001\u004f\u0002\uffff\u0001\u0029\u0001\u006f\u0001\u0041\u0001"+
    "\u0045\u0001\u004e\u0001\u0028\u0002\uffff\u0001\u0033\u0001\u0031\u0001"+
    "\uffff\u0001\u0055\u0001\u0042\u0003\uffff\u0001\u004b\u0002\uffff\u0001"+
    "\u0043\u0001\u002d\u0001\u0053\u0001\u002a\u0001\u0040",
    DFA23_specialS:
        "\u0003\uffff\u0001\u0000\u0143\uffff}>",
    DFA23_transitionS: [
            "\u0002\u0031\u0001\uffff\u0002\u0031\u0012\uffff\u0001\u0031"+
            "\u0001\u002b\u0001\u0003\u0001\u0001\u0001\u002d\u0001\u0026"+
            "\u0001\u0027\u0001\u002e\u0001\u000a\u0001\u000b\u0001\u0023"+
            "\u0001\u0010\u0001\u000d\u0001\u0011\u0001\u0006\u0001\u0004"+
            "\u0001\u002f\u0009\u0030\u0001\u0009\u0001\u000c\u0001\u0002"+
            "\u0001\u0022\u0001\u0007\u0001\u002a\u0001\u0008\u001a\u002d"+
            "\u0001\u001c\u0001\u0005\u0001\u001d\u0001\u0028\u0001\u002d"+
            "\u0001\uffff\u0001\u001e\u0001\u001b\u0001\u0013\u0001\u0018"+
            "\u0001\u0020\u0001\u0017\u0001\u0025\u0001\u002d\u0001\u0015"+
            "\u0002\u002d\u0001\u0016\u0002\u002d\u0001\u001a\u0002\u002d"+
            "\u0001\u001f\u0001\u0014\u0001\u0021\u0001\u0019\u0001\u0012"+
            "\u0001\u0024\u0003\u002d\u0001\u000e\u0001\u0029\u0001\u000f"+
            "\u0001\u002c",
            "\u0001\u0033\u0001\u0035\u0003\uffff\u0001\u0032\u000b\uffff"+
            "\u0001\u0034",
            "\u0001\u0036\u0001\u0037",
            "\u0000\u0039",
            "\u0001\u003c\u0004\uffff\u0001\u003d\u000d\uffff\u0001\u003b",
            "",
            "\u0001\u003f\u0002\uffff\u0001\u0040",
            "\u0001\u0043\u0001\u0042",
            "\u0001\u0048\u0001\uffff\u0001\u0046\u0001\u004b\u0002\uffff"+
            "\u0001\u0045\u0006\uffff\u0001\u0047\u0002\uffff\u0001\u0049"+
            "\u0001\u004a",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u004d\u0011\uffff\u0001\u004c",
            "\u0001\u0050\u000f\uffff\u0001\u004f\u0001\u0051",
            "\u0001\u0053",
            "\u0001\u0056\u0006\uffff\u0001\u0054\u0006\uffff\u0001\u0055",
            "\u0001\u0059\u0002\uffff\u0001\u0057\u0001\u0058\u000a\uffff"+
            "\u0001\u005b\u0001\u005a\u0001\uffff\u0001\u005c",
            "\u0001\u005e\u0001\uffff\u0001\u005f\u0007\uffff\u0001\u005d",
            "\u0001\u0060",
            "\u0001\u0061\u0002\uffff\u0001\u0062",
            "\u0001\u0064\u0009\uffff\u0001\u0063",
            "\u0001\u0065",
            "\u0001\u0067\u0006\uffff\u0001\u0066",
            "\u0001\u0069\u0006\uffff\u0001\u0068",
            "",
            "",
            "\u0001\u006a",
            "\u0001\u006b",
            "\u0001\u006e\u0001\uffff\u0001\u006d\u0009\uffff\u0001\u006c",
            "\u0001\u006f",
            "\u0001\u0070",
            "\u0001\u0072",
            "\u0001\u0074",
            "\u0001\u0075",
            "\u0001\u0076",
            "\u0001\u0079\u0016\uffff\u0001\u0078",
            "\u0001\u007b",
            "\u0001\u007d\u003e\uffff\u0001\u007e",
            "",
            "\u0001\u0080",
            "",
            "",
            "",
            "\u0001\u0084\u0001\uffff\u0008\u0085\u0002\u0084\u000a\uffff"+
            "\u0003\u0084\u0011\uffff\u0001\u0082\u000b\uffff\u0003\u0084"+
            "\u0011\uffff\u0001\u0082",
            "\u0001\u0084\u0001\uffff\u000a\u0086\u000a\uffff\u0003\u0084"+
            "\u001d\uffff\u0003\u0084",
            "",
            "\u0001\u0089\u0006\uffff\u0001\u0087\u0001\u0088",
            "",
            "",
            "",
            "\u0001\u008a",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u008c",
            "",
            "",
            "\u0001\u008f\u0001\u008e",
            "\u0001\u0090",
            "\u0001\u0092\u0010\uffff\u0001\u0091\u0002\uffff\u0001\u0093",
            "\u0001\u0095\u000a\uffff\u0001\u0094",
            "\u0001\u0096\u0013\uffff\u0001\u0097",
            "\u0001\u0099\u0009\uffff\u0001\u0098",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u009a\u0002\uffff\u0001\u009b",
            "\u0001\u009c",
            "\u0001\u009d",
            "\u0001\u009e",
            "\u0001\u009f",
            "\u0001\u00a0\u0012\uffff\u0001\u00a1",
            "\u0001\u00a2",
            "\u0001\u00a3",
            "\u0001\u00a4\u0010\uffff\u0001\u00a5",
            "\u0001\u00a6",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u000e\u002d\u0001\u00a8"+
            "\u0004\u002d\u0001\u00a7\u0006\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u00ac",
            "\u0001\u00ad",
            "\u0001\u00ae",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u0014\u002d\u0001\u00af"+
            "\u0005\u002d",
            "\u0001\u00b1",
            "\u0001\u00b3\u0009\uffff\u0001\u00b2",
            "\u0001\u00b4",
            "\u0001\u00b5",
            "\u0001\u00b6\u000e\uffff\u0001\u00b7",
            "\u0001\u00b8",
            "\u0001\u00b9",
            "\u0001\u00ba\u000c\uffff\u0001\u00bb",
            "\u0001\u00bc",
            "\u0001\u00bd",
            "\u0001\u00be",
            "\u0001\u00bf",
            "",
            "",
            "",
            "",
            "\u0001\u00c0",
            "\u0001\u00c1",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0084\u0001\uffff\u0008\u0085\u0002\u0084\u000a\uffff"+
            "\u0003\u0084\u001d\uffff\u0003\u0084",
            "\u0001\u0084\u0001\uffff\u000a\u0086\u000a\uffff\u0003\u0084"+
            "\u001d\uffff\u0003\u0084",
            "",
            "",
            "\u0001\u00c3\u0009\uffff\u0001\u00c4",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u00c7\u0001\u00c6",
            "\u0001\u00c9\u0005\uffff\u0001\u00c8",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u00ca",
            "\u0001\u00cb",
            "\u0001\u00cc",
            "\u0001\u00cd\u0001\u00ce",
            "\u0001\u00cf",
            "\u0001\u00d0",
            "\u0001\u00d1",
            "\u0001\u00d2",
            "\u0001\u00d3",
            "\u0001\u00d4",
            "\u0001\u00d5",
            "\u0001\u00d6",
            "\u0001\u00d7",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u00d9",
            "",
            "",
            "",
            "\u0001\u00da",
            "\u0001\u00db",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u00dd",
            "",
            "\u0001\u00de",
            "\u0001\u00df",
            "\u0001\u00e0",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u00e2",
            "\u0001\u00e3",
            "\u0001\u00e4",
            "\u0001\u00e5",
            "\u0001\u00e6",
            "\u0001\u00e7",
            "\u0001\u00e8",
            "\u0001\u00e9",
            "\u0001\u00ea",
            "\u0001\u00eb",
            "\u0001\u00ec",
            "\u0001\u00ed",
            "\u0001\u00ee",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u00ef",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u00f1",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u00f3",
            "\u0001\u00f4",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u00f6",
            "\u0001\u00f7",
            "\u0001\u00f8",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u00fa",
            "\u0001\u00fb",
            "\u0001\u00fc",
            "\u0001\u00fd",
            "",
            "\u0001\u00fe",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u0100",
            "",
            "\u0001\u0101",
            "\u0001\u0102",
            "\u0001\u0103",
            "\u0001\u0104",
            "",
            "\u0001\u0105",
            "\u0001\u0106",
            "\u0001\u0107",
            "\u0001\u0108",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u010a",
            "\u0001\u010b",
            "\u0001\u010c",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u010f",
            "\u0001\u0110",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u0113\u0009\uffff\u0001\u0112",
            "",
            "\u0001\u0114",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u0116",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u0118",
            "\u0001\u0119",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u011b",
            "\u0001\u011c",
            "\u0001\u011d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u0120",
            "\u0001\u0121",
            "\u0001\u0122",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u0124",
            "\u0001\u0125",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "",
            "\u0001\u0128",
            "\u0001\u0129",
            "\u0001\u012a",
            "",
            "",
            "\u0001\u012b",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "",
            "",
            "",
            "\u0001\u012d",
            "",
            "\u0001\u012e",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u0135",
            "\u0001\u0136",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "",
            "",
            "\u0001\u0139",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u013c",
            "",
            "\u0001\u013d",
            "\u0001\u013e",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u0140",
            "",
            "",
            "\u0001\u0141",
            "",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "\u0001\u002d\u000b\uffff\u000a\u002d\u0007\uffff\u001a\u002d"+
            "\u0004\uffff\u0001\u002d\u0001\uffff\u001a\u002d",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiLexer, {
    DFA23_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiLexer.DFA23_eotS),
    DFA23_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiLexer.DFA23_eofS),
    DFA23_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiLexer.DFA23_minS),
    DFA23_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiLexer.DFA23_maxS),
    DFA23_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiLexer.DFA23_acceptS),
    DFA23_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiLexer.DFA23_specialS),
    DFA23_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiLexer.DFA23_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiLexer.DFA23_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiLexer.DFA23 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 23;
    this.eot = ObjectiveC2ansiLexer.DFA23_eot;
    this.eof = ObjectiveC2ansiLexer.DFA23_eof;
    this.min = ObjectiveC2ansiLexer.DFA23_min;
    this.max = ObjectiveC2ansiLexer.DFA23_max;
    this.accept = ObjectiveC2ansiLexer.DFA23_accept;
    this.special = ObjectiveC2ansiLexer.DFA23_special;
    this.transition = ObjectiveC2ansiLexer.DFA23_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiLexer.DFA23, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | T__30 | T__31 | T__32 | T__33 | T__34 | T__35 | T__36 | T__37 | T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | T__56 | T__57 | T__58 | T__59 | T__60 | T__61 | T__62 | T__63 | T__64 | T__65 | T__66 | T__67 | T__68 | T__69 | T__70 | T__71 | T__72 | T__73 | T__74 | T__75 | T__76 | T__77 | T__78 | T__79 | T__80 | T__81 | T__82 | T__83 | T__84 | T__85 | T__86 | T__87 | T__88 | T__89 | T__90 | T__91 | T__92 | T__93 | T__94 | T__95 | T__96 | T__97 | T__98 | T__99 | T__100 | T__101 | T__102 | T__103 | T__104 | T__105 | T__106 | T__107 | T__108 | T__109 | T__110 | T__111 | T__112 | T__113 | T__114 | T__115 | T__116 | T__117 | T__118 | T__119 | T__120 | T__121 | T__122 | T__123 | T__124 | T__125 | T__126 | T__127 | T__128 | T__129 | T__130 | T__131 | T__132 | T__133 | T__134 | T__135 | IDENTIFIER | CHARACTER_LITERAL | STRING_LITERAL | HEX_LITERAL | DECIMAL_LITERAL | OCTAL_LITERAL | FLOATING_POINT_LITERAL | WS | COMMENT | LINE_COMMENT );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA23_3 = input.LA(1);

                            s = -1;
                            if ( ((LA23_3>='\u0000' && LA23_3<='\uFFFF')) ) {s = 57;}

                            else s = 58;

                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 23, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 
})();