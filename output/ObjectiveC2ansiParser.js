// $ANTLR 3.2 Sep 23, 2009 12:02:23 ObjectiveC2ansi.g 2010-02-01 00:29:53

/**
* ObjectiveC version 2
* based on an LL ansic grammars and
* and ObjectiveC grammar found in Learning Object C
*
* It's a Work in progress, most of the .h file can be parsed
* June 2008 Cedric Cuche
**/
var ObjectiveC2ansiParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    ObjectiveC2ansiParser.superclass.constructor.call(this, input, state);

    this.dfa2 = new ObjectiveC2ansiParser.DFA2(this);
    this.dfa22 = new ObjectiveC2ansiParser.DFA22(this);
    this.dfa32 = new ObjectiveC2ansiParser.DFA32(this);
    this.dfa54 = new ObjectiveC2ansiParser.DFA54(this);
    this.dfa60 = new ObjectiveC2ansiParser.DFA60(this);
    this.dfa61 = new ObjectiveC2ansiParser.DFA61(this);
    this.dfa68 = new ObjectiveC2ansiParser.DFA68(this);
    this.dfa67 = new ObjectiveC2ansiParser.DFA67(this);
    this.dfa75 = new ObjectiveC2ansiParser.DFA75(this);
    this.dfa72 = new ObjectiveC2ansiParser.DFA72(this);
    this.dfa83 = new ObjectiveC2ansiParser.DFA83(this);
    this.dfa106 = new ObjectiveC2ansiParser.DFA106(this);
    this.dfa107 = new ObjectiveC2ansiParser.DFA107(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
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
    T__59: 59,
    T__103: 103,
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
// public class variables
var T__29= 29,
    T__28= 28,
    T__27= 27,
    T__26= 26,
    FloatTypeSuffix= 18,
    T__25= 25,
    T__24= 24,
    LETTER= 13,
    T__23= 23,
    T__22= 22,
    EOF= -1,
    T__93= 93,
    T__94= 94,
    T__91= 91,
    T__92= 92,
    STRING_LITERAL= 7,
    T__90= 90,
    FLOATING_POINT_LITERAL= 12,
    COMMENT= 4,
    T__99= 99,
    T__98= 98,
    T__97= 97,
    T__96= 96,
    T__95= 95,
    T__80= 80,
    T__81= 81,
    T__82= 82,
    T__83= 83,
    LINE_COMMENT= 5,
    IntegerTypeSuffix= 16,
    CHARACTER_LITERAL= 11,
    T__85= 85,
    T__84= 84,
    T__87= 87,
    T__86= 86,
    T__89= 89,
    T__88= 88,
    T__126= 126,
    T__125= 125,
    T__128= 128,
    T__127= 127,
    WS= 21,
    T__71= 71,
    T__129= 129,
    T__72= 72,
    T__70= 70,
    T__76= 76,
    T__75= 75,
    T__130= 130,
    T__74= 74,
    EscapeSequence= 14,
    DECIMAL_LITERAL= 8,
    T__131= 131,
    T__73= 73,
    T__132= 132,
    T__133= 133,
    T__79= 79,
    T__134= 134,
    T__78= 78,
    T__135= 135,
    T__77= 77,
    T__68= 68,
    T__69= 69,
    T__66= 66,
    T__67= 67,
    T__64= 64,
    T__65= 65,
    T__62= 62,
    T__63= 63,
    T__118= 118,
    T__119= 119,
    T__116= 116,
    T__117= 117,
    T__114= 114,
    T__115= 115,
    T__124= 124,
    T__123= 123,
    Exponent= 17,
    T__122= 122,
    T__121= 121,
    T__120= 120,
    T__61= 61,
    T__60= 60,
    HexDigit= 15,
    T__55= 55,
    T__56= 56,
    T__57= 57,
    T__58= 58,
    T__51= 51,
    T__52= 52,
    T__53= 53,
    T__54= 54,
    T__107= 107,
    T__108= 108,
    T__109= 109,
    IDENTIFIER= 6,
    T__59= 59,
    T__103= 103,
    T__104= 104,
    T__105= 105,
    T__106= 106,
    T__111= 111,
    T__110= 110,
    T__113= 113,
    T__112= 112,
    HEX_LITERAL= 9,
    T__50= 50,
    T__42= 42,
    T__43= 43,
    T__40= 40,
    T__41= 41,
    T__46= 46,
    T__47= 47,
    T__44= 44,
    T__45= 45,
    T__48= 48,
    T__49= 49,
    OCTAL_LITERAL= 10,
    T__102= 102,
    T__101= 101,
    T__100= 100,
    T__30= 30,
    T__31= 31,
    T__32= 32,
    T__33= 33,
    T__34= 34,
    T__35= 35,
    T__36= 36,
    T__37= 37,
    T__38= 38,
    T__39= 39,
    UnicodeEscape= 20,
    OctalEscape= 19;

// public instance methods/vars
org.antlr.lang.extend(ObjectiveC2ansiParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return ObjectiveC2ansiParser.tokenNames; },
    getGrammarFileName: function() { return "ObjectiveC2ansi.g"; }
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser.prototype, {

    // inline static return class
    translation_unit_return: (function() {
        ObjectiveC2ansiParser.translation_unit_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.translation_unit_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:17:1: translation_unit : ( external_declaration )+ EOF ;
    // $ANTLR start "translation_unit"
    translation_unit: function() {
        var retval = new ObjectiveC2ansiParser.translation_unit_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var EOF2 = null;
         var external_declaration1 = null;

        var EOF2_tree=null;

        try {
            // ObjectiveC2ansi.g:17:17: ( ( external_declaration )+ EOF )
            // ObjectiveC2ansi.g:17:19: ( external_declaration )+ EOF
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:17:19: ( external_declaration )+
            var cnt1=0;
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>=COMMENT && LA1_0<=IDENTIFIER)||(LA1_0>=22 && LA1_0<=29)||LA1_0==37||(LA1_0>=42 && LA1_0<=43)||LA1_0==45||(LA1_0>=55 && LA1_0<=72)||(LA1_0>=84 && LA1_0<=88)||(LA1_0>=90 && LA1_0<=92)) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // ObjectiveC2ansi.g:0:0: external_declaration
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_external_declaration_in_translation_unit37);
                    external_declaration1=this.external_declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, external_declaration1.getTree());


                    break;

                default :
                    if ( cnt1 >= 1 ) {
                        break loop1;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(1, this.input);
                        throw eee;
                }
                cnt1++;
            } while (true);

            EOF2=this.match(this.input,EOF,ObjectiveC2ansiParser.FOLLOW_EOF_in_translation_unit40); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            EOF2_tree = this.adaptor.create(EOF2);
            this.adaptor.addChild(root_0, EOF2_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    external_declaration_return: (function() {
        ObjectiveC2ansiParser.external_declaration_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.external_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:19:1: external_declaration : ( COMMENT | LINE_COMMENT | preprocessor_declaration | function_definition | declaration | class_interface | class_implementation | category_interface | category_implementation | protocol_declaration | protocol_declaration_list | class_declaration_list );
    // $ANTLR start "external_declaration"
    external_declaration: function() {
        var retval = new ObjectiveC2ansiParser.external_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var COMMENT3 = null;
        var LINE_COMMENT4 = null;
         var preprocessor_declaration5 = null;
         var function_definition6 = null;
         var declaration7 = null;
         var class_interface8 = null;
         var class_implementation9 = null;
         var category_interface10 = null;
         var category_implementation11 = null;
         var protocol_declaration12 = null;
         var protocol_declaration_list13 = null;
         var class_declaration_list14 = null;

        var COMMENT3_tree=null;
        var LINE_COMMENT4_tree=null;

        try {
            // ObjectiveC2ansi.g:19:21: ( COMMENT | LINE_COMMENT | preprocessor_declaration | function_definition | declaration | class_interface | class_implementation | category_interface | category_implementation | protocol_declaration | protocol_declaration_list | class_declaration_list )
            var alt2=12;
            alt2 = this.dfa2.predict(this.input);
            switch (alt2) {
                case 1 :
                    // ObjectiveC2ansi.g:20:1: COMMENT
                    root_0 = this.adaptor.nil();

                    COMMENT3=this.match(this.input,COMMENT,ObjectiveC2ansiParser.FOLLOW_COMMENT_in_external_declaration47); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    COMMENT3_tree = this.adaptor.create(COMMENT3);
                    this.adaptor.addChild(root_0, COMMENT3_tree);
                    }


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:20:11: LINE_COMMENT
                    root_0 = this.adaptor.nil();

                    LINE_COMMENT4=this.match(this.input,LINE_COMMENT,ObjectiveC2ansiParser.FOLLOW_LINE_COMMENT_in_external_declaration51); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LINE_COMMENT4_tree = this.adaptor.create(LINE_COMMENT4);
                    this.adaptor.addChild(root_0, LINE_COMMENT4_tree);
                    }


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:20:26: preprocessor_declaration
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_preprocessor_declaration_in_external_declaration55);
                    preprocessor_declaration5=this.preprocessor_declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, preprocessor_declaration5.getTree());


                    break;
                case 4 :
                    // ObjectiveC2ansi.g:21:2: function_definition
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_function_definition_in_external_declaration58);
                    function_definition6=this.function_definition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_definition6.getTree());


                    break;
                case 5 :
                    // ObjectiveC2ansi.g:22:3: declaration
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declaration_in_external_declaration62);
                    declaration7=this.declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration7.getTree());


                    break;
                case 6 :
                    // ObjectiveC2ansi.g:23:3: class_interface
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_interface_in_external_declaration67);
                    class_interface8=this.class_interface();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_interface8.getTree());


                    break;
                case 7 :
                    // ObjectiveC2ansi.g:24:3: class_implementation
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_implementation_in_external_declaration71);
                    class_implementation9=this.class_implementation();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_implementation9.getTree());


                    break;
                case 8 :
                    // ObjectiveC2ansi.g:25:3: category_interface
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_category_interface_in_external_declaration75);
                    category_interface10=this.category_interface();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, category_interface10.getTree());


                    break;
                case 9 :
                    // ObjectiveC2ansi.g:26:3: category_implementation
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_category_implementation_in_external_declaration79);
                    category_implementation11=this.category_implementation();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, category_implementation11.getTree());


                    break;
                case 10 :
                    // ObjectiveC2ansi.g:27:3: protocol_declaration
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_declaration_in_external_declaration83);
                    protocol_declaration12=this.protocol_declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_declaration12.getTree());


                    break;
                case 11 :
                    // ObjectiveC2ansi.g:28:3: protocol_declaration_list
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_declaration_list_in_external_declaration87);
                    protocol_declaration_list13=this.protocol_declaration_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_declaration_list13.getTree());


                    break;
                case 12 :
                    // ObjectiveC2ansi.g:29:3: class_declaration_list
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_declaration_list_in_external_declaration91);
                    class_declaration_list14=this.class_declaration_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_declaration_list14.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    preprocessor_declaration_return: (function() {
        ObjectiveC2ansiParser.preprocessor_declaration_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.preprocessor_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:31:1: preprocessor_declaration : ( '#import' file_specification | '#include' file_specification | '#define' macro_specification | '#ifdef' expression | '#if' expression | '#undef' expression | '#ifndef' expression | '#endif' );
    // $ANTLR start "preprocessor_declaration"
    preprocessor_declaration: function() {
        var retval = new ObjectiveC2ansiParser.preprocessor_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal15 = null;
        var string_literal17 = null;
        var string_literal19 = null;
        var string_literal21 = null;
        var string_literal23 = null;
        var string_literal25 = null;
        var string_literal27 = null;
        var string_literal29 = null;
         var file_specification16 = null;
         var file_specification18 = null;
         var macro_specification20 = null;
         var expression22 = null;
         var expression24 = null;
         var expression26 = null;
         var expression28 = null;

        var string_literal15_tree=null;
        var string_literal17_tree=null;
        var string_literal19_tree=null;
        var string_literal21_tree=null;
        var string_literal23_tree=null;
        var string_literal25_tree=null;
        var string_literal27_tree=null;
        var string_literal29_tree=null;

        try {
            // ObjectiveC2ansi.g:31:25: ( '#import' file_specification | '#include' file_specification | '#define' macro_specification | '#ifdef' expression | '#if' expression | '#undef' expression | '#ifndef' expression | '#endif' )
            var alt3=8;
            switch ( this.input.LA(1) ) {
            case 22:
                alt3=1;
                break;
            case 23:
                alt3=2;
                break;
            case 24:
                alt3=3;
                break;
            case 25:
                alt3=4;
                break;
            case 26:
                alt3=5;
                break;
            case 27:
                alt3=6;
                break;
            case 28:
                alt3=7;
                break;
            case 29:
                alt3=8;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                throw nvae;
            }

            switch (alt3) {
                case 1 :
                    // ObjectiveC2ansi.g:32:1: '#import' file_specification
                    root_0 = this.adaptor.nil();

                    string_literal15=this.match(this.input,22,ObjectiveC2ansiParser.FOLLOW_22_in_preprocessor_declaration98); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal15_tree = this.adaptor.create(string_literal15);
                    this.adaptor.addChild(root_0, string_literal15_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_file_specification_in_preprocessor_declaration100);
                    file_specification16=this.file_specification();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, file_specification16.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:33:3: '#include' file_specification
                    root_0 = this.adaptor.nil();

                    string_literal17=this.match(this.input,23,ObjectiveC2ansiParser.FOLLOW_23_in_preprocessor_declaration104); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal17_tree = this.adaptor.create(string_literal17);
                    this.adaptor.addChild(root_0, string_literal17_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_file_specification_in_preprocessor_declaration106);
                    file_specification18=this.file_specification();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, file_specification18.getTree());


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:34:3: '#define' macro_specification
                    root_0 = this.adaptor.nil();

                    string_literal19=this.match(this.input,24,ObjectiveC2ansiParser.FOLLOW_24_in_preprocessor_declaration110); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal19_tree = this.adaptor.create(string_literal19);
                    this.adaptor.addChild(root_0, string_literal19_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_macro_specification_in_preprocessor_declaration112);
                    macro_specification20=this.macro_specification();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, macro_specification20.getTree());


                    break;
                case 4 :
                    // ObjectiveC2ansi.g:35:3: '#ifdef' expression
                    root_0 = this.adaptor.nil();

                    string_literal21=this.match(this.input,25,ObjectiveC2ansiParser.FOLLOW_25_in_preprocessor_declaration116); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal21_tree = this.adaptor.create(string_literal21);
                    this.adaptor.addChild(root_0, string_literal21_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_preprocessor_declaration118);
                    expression22=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression22.getTree());


                    break;
                case 5 :
                    // ObjectiveC2ansi.g:36:3: '#if' expression
                    root_0 = this.adaptor.nil();

                    string_literal23=this.match(this.input,26,ObjectiveC2ansiParser.FOLLOW_26_in_preprocessor_declaration122); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal23_tree = this.adaptor.create(string_literal23);
                    this.adaptor.addChild(root_0, string_literal23_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_preprocessor_declaration124);
                    expression24=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression24.getTree());


                    break;
                case 6 :
                    // ObjectiveC2ansi.g:37:3: '#undef' expression
                    root_0 = this.adaptor.nil();

                    string_literal25=this.match(this.input,27,ObjectiveC2ansiParser.FOLLOW_27_in_preprocessor_declaration128); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal25_tree = this.adaptor.create(string_literal25);
                    this.adaptor.addChild(root_0, string_literal25_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_preprocessor_declaration130);
                    expression26=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression26.getTree());


                    break;
                case 7 :
                    // ObjectiveC2ansi.g:38:3: '#ifndef' expression
                    root_0 = this.adaptor.nil();

                    string_literal27=this.match(this.input,28,ObjectiveC2ansiParser.FOLLOW_28_in_preprocessor_declaration134); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal27_tree = this.adaptor.create(string_literal27);
                    this.adaptor.addChild(root_0, string_literal27_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_preprocessor_declaration136);
                    expression28=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression28.getTree());


                    break;
                case 8 :
                    // ObjectiveC2ansi.g:39:3: '#endif'
                    root_0 = this.adaptor.nil();

                    string_literal29=this.match(this.input,29,ObjectiveC2ansiParser.FOLLOW_29_in_preprocessor_declaration140); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal29_tree = this.adaptor.create(string_literal29);
                    this.adaptor.addChild(root_0, string_literal29_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    file_specification_return: (function() {
        ObjectiveC2ansiParser.file_specification_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.file_specification_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:41:1: file_specification : ( '<' | '\"' ) ( IDENTIFIER ( '/' | '\\\\' | '.' )? )+ ( '>' | '\"' ) ;
    // $ANTLR start "file_specification"
    file_specification: function() {
        var retval = new ObjectiveC2ansiParser.file_specification_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set30 = null;
        var IDENTIFIER31 = null;
        var set32 = null;
        var set33 = null;

        var set30_tree=null;
        var IDENTIFIER31_tree=null;
        var set32_tree=null;
        var set33_tree=null;

        try {
            // ObjectiveC2ansi.g:41:19: ( ( '<' | '\"' ) ( IDENTIFIER ( '/' | '\\\\' | '.' )? )+ ( '>' | '\"' ) )
            // ObjectiveC2ansi.g:41:21: ( '<' | '\"' ) ( IDENTIFIER ( '/' | '\\\\' | '.' )? )+ ( '>' | '\"' )
            root_0 = this.adaptor.nil();

            set30=this.input.LT(1);
            if ( (this.input.LA(1)>=30 && this.input.LA(1)<=31) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set30));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }

            // ObjectiveC2ansi.g:41:30: ( IDENTIFIER ( '/' | '\\\\' | '.' )? )+
            var cnt5=0;
            loop5:
            do {
                var alt5=2;
                var LA5_0 = this.input.LA(1);

                if ( (LA5_0==IDENTIFIER) ) {
                    alt5=1;
                }


                switch (alt5) {
                case 1 :
                    // ObjectiveC2ansi.g:41:31: IDENTIFIER ( '/' | '\\\\' | '.' )?
                    IDENTIFIER31=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_file_specification153); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENTIFIER31_tree = this.adaptor.create(IDENTIFIER31);
                    this.adaptor.addChild(root_0, IDENTIFIER31_tree);
                    }
                    // ObjectiveC2ansi.g:41:42: ( '/' | '\\\\' | '.' )?
                    var alt4=2;
                    var LA4_0 = this.input.LA(1);

                    if ( ((LA4_0>=32 && LA4_0<=34)) ) {
                        alt4=1;
                    }
                    switch (alt4) {
                        case 1 :
                            // ObjectiveC2ansi.g:
                            set32=this.input.LT(1);
                            if ( (this.input.LA(1)>=32 && this.input.LA(1)<=34) ) {
                                this.input.consume();
                                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set32));
                                this.state.errorRecovery=false;this.state.failed=false;
                            }
                            else {
                                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                throw mse;
                            }



                            break;

                    }



                    break;

                default :
                    if ( cnt5 >= 1 ) {
                        break loop5;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(5, this.input);
                        throw eee;
                }
                cnt5++;
            } while (true);

            set33=this.input.LT(1);
            if ( this.input.LA(1)==31||this.input.LA(1)==35 ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set33));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    macro_specification_return: (function() {
        ObjectiveC2ansiParser.macro_specification_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.macro_specification_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:43:1: macro_specification : '.+' ;
    // $ANTLR start "macro_specification"
    macro_specification: function() {
        var retval = new ObjectiveC2ansiParser.macro_specification_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal34 = null;

        var string_literal34_tree=null;

        try {
            // ObjectiveC2ansi.g:43:20: ( '.+' )
            // ObjectiveC2ansi.g:43:22: '.+'
            root_0 = this.adaptor.nil();

            string_literal34=this.match(this.input,36,ObjectiveC2ansiParser.FOLLOW_36_in_macro_specification183); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal34_tree = this.adaptor.create(string_literal34);
            this.adaptor.addChild(root_0, string_literal34_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    class_interface_return: (function() {
        ObjectiveC2ansiParser.class_interface_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.class_interface_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:45:1: class_interface : '@interface' ( class_name ( ':' superclass_name )? ( protocol_reference_list )? ( instance_variables )? ( interface_declaration_list )? ) '@end' ;
    // $ANTLR start "class_interface"
    class_interface: function() {
        var retval = new ObjectiveC2ansiParser.class_interface_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal35 = null;
        var char_literal37 = null;
        var string_literal42 = null;
         var class_name36 = null;
         var superclass_name38 = null;
         var protocol_reference_list39 = null;
         var instance_variables40 = null;
         var interface_declaration_list41 = null;

        var string_literal35_tree=null;
        var char_literal37_tree=null;
        var string_literal42_tree=null;

        try {
            // ObjectiveC2ansi.g:45:16: ( '@interface' ( class_name ( ':' superclass_name )? ( protocol_reference_list )? ( instance_variables )? ( interface_declaration_list )? ) '@end' )
            // ObjectiveC2ansi.g:46:2: '@interface' ( class_name ( ':' superclass_name )? ( protocol_reference_list )? ( instance_variables )? ( interface_declaration_list )? ) '@end'
            root_0 = this.adaptor.nil();

            string_literal35=this.match(this.input,37,ObjectiveC2ansiParser.FOLLOW_37_in_class_interface191); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal35_tree = this.adaptor.create(string_literal35);
            this.adaptor.addChild(root_0, string_literal35_tree);
            }
            // ObjectiveC2ansi.g:47:2: ( class_name ( ':' superclass_name )? ( protocol_reference_list )? ( instance_variables )? ( interface_declaration_list )? )
            // ObjectiveC2ansi.g:48:2: class_name ( ':' superclass_name )? ( protocol_reference_list )? ( instance_variables )? ( interface_declaration_list )?
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_name_in_class_interface197);
            class_name36=this.class_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_name36.getTree());
            // ObjectiveC2ansi.g:48:13: ( ':' superclass_name )?
            var alt6=2;
            var LA6_0 = this.input.LA(1);

            if ( (LA6_0==38) ) {
                alt6=1;
            }
            switch (alt6) {
                case 1 :
                    // ObjectiveC2ansi.g:48:14: ':' superclass_name
                    char_literal37=this.match(this.input,38,ObjectiveC2ansiParser.FOLLOW_38_in_class_interface200); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal37_tree = this.adaptor.create(char_literal37);
                    this.adaptor.addChild(root_0, char_literal37_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_superclass_name_in_class_interface202);
                    superclass_name38=this.superclass_name();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, superclass_name38.getTree());


                    break;

            }

            // ObjectiveC2ansi.g:49:2: ( protocol_reference_list )?
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0==30) ) {
                alt7=1;
            }
            switch (alt7) {
                case 1 :
                    // ObjectiveC2ansi.g:49:4: protocol_reference_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_reference_list_in_class_interface209);
                    protocol_reference_list39=this.protocol_reference_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_reference_list39.getTree());


                    break;

            }

            // ObjectiveC2ansi.g:50:2: ( instance_variables )?
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0==47) ) {
                alt8=1;
            }
            switch (alt8) {
                case 1 :
                    // ObjectiveC2ansi.g:50:4: instance_variables
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_instance_variables_in_class_interface217);
                    instance_variables40=this.instance_variables();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, instance_variables40.getTree());


                    break;

            }

            // ObjectiveC2ansi.g:51:2: ( interface_declaration_list )?
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( (LA9_0==IDENTIFIER||(LA9_0>=53 && LA9_0<=72)||(LA9_0>=84 && LA9_0<=88)||(LA9_0>=90 && LA9_0<=92)) ) {
                alt9=1;
            }
            switch (alt9) {
                case 1 :
                    // ObjectiveC2ansi.g:51:4: interface_declaration_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_interface_declaration_list_in_class_interface225);
                    interface_declaration_list41=this.interface_declaration_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, interface_declaration_list41.getTree());


                    break;

            }




            string_literal42=this.match(this.input,39,ObjectiveC2ansiParser.FOLLOW_39_in_class_interface234); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal42_tree = this.adaptor.create(string_literal42);
            this.adaptor.addChild(root_0, string_literal42_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    category_interface_return: (function() {
        ObjectiveC2ansiParser.category_interface_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.category_interface_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:55:1: category_interface : '@interface' ( class_name '(' category_name ')' ( protocol_reference_list )? ( interface_declaration_list )? ) '@end' ;
    // $ANTLR start "category_interface"
    category_interface: function() {
        var retval = new ObjectiveC2ansiParser.category_interface_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal43 = null;
        var char_literal45 = null;
        var char_literal47 = null;
        var string_literal50 = null;
         var class_name44 = null;
         var category_name46 = null;
         var protocol_reference_list48 = null;
         var interface_declaration_list49 = null;

        var string_literal43_tree=null;
        var char_literal45_tree=null;
        var char_literal47_tree=null;
        var string_literal50_tree=null;

        try {
            // ObjectiveC2ansi.g:55:19: ( '@interface' ( class_name '(' category_name ')' ( protocol_reference_list )? ( interface_declaration_list )? ) '@end' )
            // ObjectiveC2ansi.g:56:2: '@interface' ( class_name '(' category_name ')' ( protocol_reference_list )? ( interface_declaration_list )? ) '@end'
            root_0 = this.adaptor.nil();

            string_literal43=this.match(this.input,37,ObjectiveC2ansiParser.FOLLOW_37_in_category_interface242); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal43_tree = this.adaptor.create(string_literal43);
            this.adaptor.addChild(root_0, string_literal43_tree);
            }
            // ObjectiveC2ansi.g:57:2: ( class_name '(' category_name ')' ( protocol_reference_list )? ( interface_declaration_list )? )
            // ObjectiveC2ansi.g:58:2: class_name '(' category_name ')' ( protocol_reference_list )? ( interface_declaration_list )?
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_name_in_category_interface248);
            class_name44=this.class_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_name44.getTree());
            char_literal45=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_category_interface250); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal45_tree = this.adaptor.create(char_literal45);
            this.adaptor.addChild(root_0, char_literal45_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_category_name_in_category_interface252);
            category_name46=this.category_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, category_name46.getTree());
            char_literal47=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_category_interface254); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal47_tree = this.adaptor.create(char_literal47);
            this.adaptor.addChild(root_0, char_literal47_tree);
            }
            // ObjectiveC2ansi.g:59:2: ( protocol_reference_list )?
            var alt10=2;
            var LA10_0 = this.input.LA(1);

            if ( (LA10_0==30) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // ObjectiveC2ansi.g:59:4: protocol_reference_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_reference_list_in_category_interface259);
                    protocol_reference_list48=this.protocol_reference_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_reference_list48.getTree());


                    break;

            }

            // ObjectiveC2ansi.g:60:2: ( interface_declaration_list )?
            var alt11=2;
            var LA11_0 = this.input.LA(1);

            if ( (LA11_0==IDENTIFIER||(LA11_0>=53 && LA11_0<=72)||(LA11_0>=84 && LA11_0<=88)||(LA11_0>=90 && LA11_0<=92)) ) {
                alt11=1;
            }
            switch (alt11) {
                case 1 :
                    // ObjectiveC2ansi.g:60:4: interface_declaration_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_interface_declaration_list_in_category_interface267);
                    interface_declaration_list49=this.interface_declaration_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, interface_declaration_list49.getTree());


                    break;

            }




            string_literal50=this.match(this.input,39,ObjectiveC2ansiParser.FOLLOW_39_in_category_interface276); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal50_tree = this.adaptor.create(string_literal50);
            this.adaptor.addChild(root_0, string_literal50_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    class_implementation_return: (function() {
        ObjectiveC2ansiParser.class_implementation_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.class_implementation_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:64:1: class_implementation : '@implementation' ( class_name ( ':' superclass_name )? ( implementation_definition_list )? ) '@end' ;
    // $ANTLR start "class_implementation"
    class_implementation: function() {
        var retval = new ObjectiveC2ansiParser.class_implementation_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal51 = null;
        var char_literal53 = null;
        var string_literal56 = null;
         var class_name52 = null;
         var superclass_name54 = null;
         var implementation_definition_list55 = null;

        var string_literal51_tree=null;
        var char_literal53_tree=null;
        var string_literal56_tree=null;

        try {
            // ObjectiveC2ansi.g:64:21: ( '@implementation' ( class_name ( ':' superclass_name )? ( implementation_definition_list )? ) '@end' )
            // ObjectiveC2ansi.g:65:2: '@implementation' ( class_name ( ':' superclass_name )? ( implementation_definition_list )? ) '@end'
            root_0 = this.adaptor.nil();

            string_literal51=this.match(this.input,42,ObjectiveC2ansiParser.FOLLOW_42_in_class_implementation284); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal51_tree = this.adaptor.create(string_literal51);
            this.adaptor.addChild(root_0, string_literal51_tree);
            }
            // ObjectiveC2ansi.g:66:2: ( class_name ( ':' superclass_name )? ( implementation_definition_list )? )
            // ObjectiveC2ansi.g:67:2: class_name ( ':' superclass_name )? ( implementation_definition_list )?
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_name_in_class_implementation290);
            class_name52=this.class_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_name52.getTree());
            // ObjectiveC2ansi.g:67:13: ( ':' superclass_name )?
            var alt12=2;
            var LA12_0 = this.input.LA(1);

            if ( (LA12_0==38) ) {
                alt12=1;
            }
            switch (alt12) {
                case 1 :
                    // ObjectiveC2ansi.g:67:15: ':' superclass_name
                    char_literal53=this.match(this.input,38,ObjectiveC2ansiParser.FOLLOW_38_in_class_implementation294); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal53_tree = this.adaptor.create(char_literal53);
                    this.adaptor.addChild(root_0, char_literal53_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_superclass_name_in_class_implementation296);
                    superclass_name54=this.superclass_name();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, superclass_name54.getTree());


                    break;

            }

            // ObjectiveC2ansi.g:68:2: ( implementation_definition_list )?
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( (LA13_0==IDENTIFIER||(LA13_0>=53 && LA13_0<=72)||(LA13_0>=84 && LA13_0<=88)||(LA13_0>=90 && LA13_0<=92)) ) {
                alt13=1;
            }
            switch (alt13) {
                case 1 :
                    // ObjectiveC2ansi.g:68:4: implementation_definition_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_implementation_definition_list_in_class_implementation304);
                    implementation_definition_list55=this.implementation_definition_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, implementation_definition_list55.getTree());


                    break;

            }




            string_literal56=this.match(this.input,39,ObjectiveC2ansiParser.FOLLOW_39_in_class_implementation313); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal56_tree = this.adaptor.create(string_literal56);
            this.adaptor.addChild(root_0, string_literal56_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    category_implementation_return: (function() {
        ObjectiveC2ansiParser.category_implementation_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.category_implementation_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:72:1: category_implementation : '@implementation' ( class_name '(' category_name ')' ( implementation_definition_list )? ) '@end' ;
    // $ANTLR start "category_implementation"
    category_implementation: function() {
        var retval = new ObjectiveC2ansiParser.category_implementation_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal57 = null;
        var char_literal59 = null;
        var char_literal61 = null;
        var string_literal63 = null;
         var class_name58 = null;
         var category_name60 = null;
         var implementation_definition_list62 = null;

        var string_literal57_tree=null;
        var char_literal59_tree=null;
        var char_literal61_tree=null;
        var string_literal63_tree=null;

        try {
            // ObjectiveC2ansi.g:72:24: ( '@implementation' ( class_name '(' category_name ')' ( implementation_definition_list )? ) '@end' )
            // ObjectiveC2ansi.g:73:2: '@implementation' ( class_name '(' category_name ')' ( implementation_definition_list )? ) '@end'
            root_0 = this.adaptor.nil();

            string_literal57=this.match(this.input,42,ObjectiveC2ansiParser.FOLLOW_42_in_category_implementation321); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal57_tree = this.adaptor.create(string_literal57);
            this.adaptor.addChild(root_0, string_literal57_tree);
            }
            // ObjectiveC2ansi.g:73:19: ( class_name '(' category_name ')' ( implementation_definition_list )? )
            // ObjectiveC2ansi.g:74:2: class_name '(' category_name ')' ( implementation_definition_list )?
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_name_in_category_implementation325);
            class_name58=this.class_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_name58.getTree());
            char_literal59=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_category_implementation327); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal59_tree = this.adaptor.create(char_literal59);
            this.adaptor.addChild(root_0, char_literal59_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_category_name_in_category_implementation329);
            category_name60=this.category_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, category_name60.getTree());
            char_literal61=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_category_implementation331); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal61_tree = this.adaptor.create(char_literal61);
            this.adaptor.addChild(root_0, char_literal61_tree);
            }
            // ObjectiveC2ansi.g:75:2: ( implementation_definition_list )?
            var alt14=2;
            var LA14_0 = this.input.LA(1);

            if ( (LA14_0==IDENTIFIER||(LA14_0>=53 && LA14_0<=72)||(LA14_0>=84 && LA14_0<=88)||(LA14_0>=90 && LA14_0<=92)) ) {
                alt14=1;
            }
            switch (alt14) {
                case 1 :
                    // ObjectiveC2ansi.g:75:4: implementation_definition_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_implementation_definition_list_in_category_implementation336);
                    implementation_definition_list62=this.implementation_definition_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, implementation_definition_list62.getTree());


                    break;

            }




            string_literal63=this.match(this.input,39,ObjectiveC2ansiParser.FOLLOW_39_in_category_implementation343); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal63_tree = this.adaptor.create(string_literal63);
            this.adaptor.addChild(root_0, string_literal63_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    protocol_declaration_return: (function() {
        ObjectiveC2ansiParser.protocol_declaration_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.protocol_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:78:1: protocol_declaration : '@protocol' ( protocol_name ( protocol_reference_list )? ( interface_declaration_list )? ) '@end' ;
    // $ANTLR start "protocol_declaration"
    protocol_declaration: function() {
        var retval = new ObjectiveC2ansiParser.protocol_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal64 = null;
        var string_literal68 = null;
         var protocol_name65 = null;
         var protocol_reference_list66 = null;
         var interface_declaration_list67 = null;

        var string_literal64_tree=null;
        var string_literal68_tree=null;

        try {
            // ObjectiveC2ansi.g:78:21: ( '@protocol' ( protocol_name ( protocol_reference_list )? ( interface_declaration_list )? ) '@end' )
            // ObjectiveC2ansi.g:79:2: '@protocol' ( protocol_name ( protocol_reference_list )? ( interface_declaration_list )? ) '@end'
            root_0 = this.adaptor.nil();

            string_literal64=this.match(this.input,43,ObjectiveC2ansiParser.FOLLOW_43_in_protocol_declaration351); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal64_tree = this.adaptor.create(string_literal64);
            this.adaptor.addChild(root_0, string_literal64_tree);
            }
            // ObjectiveC2ansi.g:79:13: ( protocol_name ( protocol_reference_list )? ( interface_declaration_list )? )
            // ObjectiveC2ansi.g:80:2: protocol_name ( protocol_reference_list )? ( interface_declaration_list )?
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_name_in_protocol_declaration355);
            protocol_name65=this.protocol_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_name65.getTree());
            // ObjectiveC2ansi.g:80:16: ( protocol_reference_list )?
            var alt15=2;
            var LA15_0 = this.input.LA(1);

            if ( (LA15_0==30) ) {
                alt15=1;
            }
            switch (alt15) {
                case 1 :
                    // ObjectiveC2ansi.g:80:18: protocol_reference_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_reference_list_in_protocol_declaration359);
                    protocol_reference_list66=this.protocol_reference_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_reference_list66.getTree());


                    break;

            }

            // ObjectiveC2ansi.g:81:2: ( interface_declaration_list )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0==IDENTIFIER||(LA16_0>=53 && LA16_0<=72)||(LA16_0>=84 && LA16_0<=88)||(LA16_0>=90 && LA16_0<=92)) ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // ObjectiveC2ansi.g:81:4: interface_declaration_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_interface_declaration_list_in_protocol_declaration367);
                    interface_declaration_list67=this.interface_declaration_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, interface_declaration_list67.getTree());


                    break;

            }




            string_literal68=this.match(this.input,39,ObjectiveC2ansiParser.FOLLOW_39_in_protocol_declaration374); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal68_tree = this.adaptor.create(string_literal68);
            this.adaptor.addChild(root_0, string_literal68_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    protocol_declaration_list_return: (function() {
        ObjectiveC2ansiParser.protocol_declaration_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.protocol_declaration_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:84:1: protocol_declaration_list : ( '@protocol' protocol_list ';' ) ;
    // $ANTLR start "protocol_declaration_list"
    protocol_declaration_list: function() {
        var retval = new ObjectiveC2ansiParser.protocol_declaration_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal69 = null;
        var char_literal71 = null;
         var protocol_list70 = null;

        var string_literal69_tree=null;
        var char_literal71_tree=null;

        try {
            // ObjectiveC2ansi.g:84:26: ( ( '@protocol' protocol_list ';' ) )
            // ObjectiveC2ansi.g:85:2: ( '@protocol' protocol_list ';' )
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:85:2: ( '@protocol' protocol_list ';' )
            // ObjectiveC2ansi.g:85:3: '@protocol' protocol_list ';'
            string_literal69=this.match(this.input,43,ObjectiveC2ansiParser.FOLLOW_43_in_protocol_declaration_list383); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal69_tree = this.adaptor.create(string_literal69);
            this.adaptor.addChild(root_0, string_literal69_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_list_in_protocol_declaration_list385);
            protocol_list70=this.protocol_list();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_list70.getTree());
            char_literal71=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_protocol_declaration_list386); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal71_tree = this.adaptor.create(char_literal71);
            this.adaptor.addChild(root_0, char_literal71_tree);
            }






            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    class_declaration_list_return: (function() {
        ObjectiveC2ansiParser.class_declaration_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.class_declaration_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:88:1: class_declaration_list : ( '@class' class_list ';' ) ;
    // $ANTLR start "class_declaration_list"
    class_declaration_list: function() {
        var retval = new ObjectiveC2ansiParser.class_declaration_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal72 = null;
        var char_literal74 = null;
         var class_list73 = null;

        var string_literal72_tree=null;
        var char_literal74_tree=null;

        try {
            // ObjectiveC2ansi.g:88:23: ( ( '@class' class_list ';' ) )
            // ObjectiveC2ansi.g:89:2: ( '@class' class_list ';' )
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:89:2: ( '@class' class_list ';' )
            // ObjectiveC2ansi.g:89:3: '@class' class_list ';'
            string_literal72=this.match(this.input,45,ObjectiveC2ansiParser.FOLLOW_45_in_class_declaration_list398); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal72_tree = this.adaptor.create(string_literal72);
            this.adaptor.addChild(root_0, string_literal72_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_list_in_class_declaration_list400);
            class_list73=this.class_list();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_list73.getTree());
            char_literal74=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_class_declaration_list401); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal74_tree = this.adaptor.create(char_literal74);
            this.adaptor.addChild(root_0, char_literal74_tree);
            }






            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    class_list_return: (function() {
        ObjectiveC2ansiParser.class_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.class_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:92:1: class_list : class_name ( ',' class_name )* ;
    // $ANTLR start "class_list"
    class_list: function() {
        var retval = new ObjectiveC2ansiParser.class_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal76 = null;
         var class_name75 = null;
         var class_name77 = null;

        var char_literal76_tree=null;

        try {
            // ObjectiveC2ansi.g:92:11: ( class_name ( ',' class_name )* )
            // ObjectiveC2ansi.g:93:2: class_name ( ',' class_name )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_name_in_class_list412);
            class_name75=this.class_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_name75.getTree());
            // ObjectiveC2ansi.g:93:13: ( ',' class_name )*
            loop17:
            do {
                var alt17=2;
                var LA17_0 = this.input.LA(1);

                if ( (LA17_0==46) ) {
                    alt17=1;
                }


                switch (alt17) {
                case 1 :
                    // ObjectiveC2ansi.g:93:14: ',' class_name
                    char_literal76=this.match(this.input,46,ObjectiveC2ansiParser.FOLLOW_46_in_class_list415); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal76_tree = this.adaptor.create(char_literal76);
                    this.adaptor.addChild(root_0, char_literal76_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_name_in_class_list417);
                    class_name77=this.class_name();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_name77.getTree());


                    break;

                default :
                    break loop17;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    protocol_reference_list_return: (function() {
        ObjectiveC2ansiParser.protocol_reference_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.protocol_reference_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:95:1: protocol_reference_list : ( '<' protocol_list '>' ) ;
    // $ANTLR start "protocol_reference_list"
    protocol_reference_list: function() {
        var retval = new ObjectiveC2ansiParser.protocol_reference_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal78 = null;
        var char_literal80 = null;
         var protocol_list79 = null;

        var char_literal78_tree=null;
        var char_literal80_tree=null;

        try {
            // ObjectiveC2ansi.g:95:24: ( ( '<' protocol_list '>' ) )
            // ObjectiveC2ansi.g:96:2: ( '<' protocol_list '>' )
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:96:2: ( '<' protocol_list '>' )
            // ObjectiveC2ansi.g:96:3: '<' protocol_list '>'
            char_literal78=this.match(this.input,30,ObjectiveC2ansiParser.FOLLOW_30_in_protocol_reference_list428); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal78_tree = this.adaptor.create(char_literal78);
            this.adaptor.addChild(root_0, char_literal78_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_list_in_protocol_reference_list430);
            protocol_list79=this.protocol_list();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_list79.getTree());
            char_literal80=this.match(this.input,35,ObjectiveC2ansiParser.FOLLOW_35_in_protocol_reference_list432); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal80_tree = this.adaptor.create(char_literal80);
            this.adaptor.addChild(root_0, char_literal80_tree);
            }






            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    protocol_list_return: (function() {
        ObjectiveC2ansiParser.protocol_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.protocol_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:98:1: protocol_list : protocol_name ( ',' protocol_name )* ;
    // $ANTLR start "protocol_list"
    protocol_list: function() {
        var retval = new ObjectiveC2ansiParser.protocol_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal82 = null;
         var protocol_name81 = null;
         var protocol_name83 = null;

        var char_literal82_tree=null;

        try {
            // ObjectiveC2ansi.g:98:14: ( protocol_name ( ',' protocol_name )* )
            // ObjectiveC2ansi.g:99:2: protocol_name ( ',' protocol_name )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_name_in_protocol_list441);
            protocol_name81=this.protocol_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_name81.getTree());
            // ObjectiveC2ansi.g:99:16: ( ',' protocol_name )*
            loop18:
            do {
                var alt18=2;
                var LA18_0 = this.input.LA(1);

                if ( (LA18_0==46) ) {
                    alt18=1;
                }


                switch (alt18) {
                case 1 :
                    // ObjectiveC2ansi.g:99:17: ',' protocol_name
                    char_literal82=this.match(this.input,46,ObjectiveC2ansiParser.FOLLOW_46_in_protocol_list444); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal82_tree = this.adaptor.create(char_literal82);
                    this.adaptor.addChild(root_0, char_literal82_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_name_in_protocol_list446);
                    protocol_name83=this.protocol_name();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_name83.getTree());


                    break;

                default :
                    break loop18;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    class_name_return: (function() {
        ObjectiveC2ansiParser.class_name_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.class_name_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:101:1: class_name : IDENTIFIER ;
    // $ANTLR start "class_name"
    class_name: function() {
        var retval = new ObjectiveC2ansiParser.class_name_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER84 = null;

        var IDENTIFIER84_tree=null;

        try {
            // ObjectiveC2ansi.g:101:11: ( IDENTIFIER )
            // ObjectiveC2ansi.g:102:2: IDENTIFIER
            root_0 = this.adaptor.nil();

            IDENTIFIER84=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_class_name456); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER84_tree = this.adaptor.create(IDENTIFIER84);
            this.adaptor.addChild(root_0, IDENTIFIER84_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    superclass_name_return: (function() {
        ObjectiveC2ansiParser.superclass_name_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.superclass_name_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:104:1: superclass_name : IDENTIFIER ;
    // $ANTLR start "superclass_name"
    superclass_name: function() {
        var retval = new ObjectiveC2ansiParser.superclass_name_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER85 = null;

        var IDENTIFIER85_tree=null;

        try {
            // ObjectiveC2ansi.g:104:16: ( IDENTIFIER )
            // ObjectiveC2ansi.g:105:2: IDENTIFIER
            root_0 = this.adaptor.nil();

            IDENTIFIER85=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_superclass_name464); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER85_tree = this.adaptor.create(IDENTIFIER85);
            this.adaptor.addChild(root_0, IDENTIFIER85_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    category_name_return: (function() {
        ObjectiveC2ansiParser.category_name_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.category_name_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:107:1: category_name : IDENTIFIER ;
    // $ANTLR start "category_name"
    category_name: function() {
        var retval = new ObjectiveC2ansiParser.category_name_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER86 = null;

        var IDENTIFIER86_tree=null;

        try {
            // ObjectiveC2ansi.g:107:14: ( IDENTIFIER )
            // ObjectiveC2ansi.g:108:2: IDENTIFIER
            root_0 = this.adaptor.nil();

            IDENTIFIER86=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_category_name472); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER86_tree = this.adaptor.create(IDENTIFIER86);
            this.adaptor.addChild(root_0, IDENTIFIER86_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    protocol_name_return: (function() {
        ObjectiveC2ansiParser.protocol_name_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.protocol_name_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:110:1: protocol_name : IDENTIFIER ;
    // $ANTLR start "protocol_name"
    protocol_name: function() {
        var retval = new ObjectiveC2ansiParser.protocol_name_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER87 = null;

        var IDENTIFIER87_tree=null;

        try {
            // ObjectiveC2ansi.g:110:14: ( IDENTIFIER )
            // ObjectiveC2ansi.g:111:2: IDENTIFIER
            root_0 = this.adaptor.nil();

            IDENTIFIER87=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_protocol_name480); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER87_tree = this.adaptor.create(IDENTIFIER87);
            this.adaptor.addChild(root_0, IDENTIFIER87_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    instance_variables_return: (function() {
        ObjectiveC2ansiParser.instance_variables_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.instance_variables_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:113:1: instance_variables : '{' instance_variable_declaration '}' ;
    // $ANTLR start "instance_variables"
    instance_variables: function() {
        var retval = new ObjectiveC2ansiParser.instance_variables_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal88 = null;
        var char_literal90 = null;
         var instance_variable_declaration89 = null;

        var char_literal88_tree=null;
        var char_literal90_tree=null;

        try {
            // ObjectiveC2ansi.g:113:19: ( '{' instance_variable_declaration '}' )
            // ObjectiveC2ansi.g:114:2: '{' instance_variable_declaration '}'
            root_0 = this.adaptor.nil();

            char_literal88=this.match(this.input,47,ObjectiveC2ansiParser.FOLLOW_47_in_instance_variables488); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal88_tree = this.adaptor.create(char_literal88);
            this.adaptor.addChild(root_0, char_literal88_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_instance_variable_declaration_in_instance_variables490);
            instance_variable_declaration89=this.instance_variable_declaration();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, instance_variable_declaration89.getTree());
            char_literal90=this.match(this.input,48,ObjectiveC2ansiParser.FOLLOW_48_in_instance_variables492); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal90_tree = this.adaptor.create(char_literal90);
            this.adaptor.addChild(root_0, char_literal90_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    instance_variable_declaration_return: (function() {
        ObjectiveC2ansiParser.instance_variable_declaration_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.instance_variable_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:116:1: instance_variable_declaration : ( visibility_specification | struct_declarator_list instance_variables )+ ;
    // $ANTLR start "instance_variable_declaration"
    instance_variable_declaration: function() {
        var retval = new ObjectiveC2ansiParser.instance_variable_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var visibility_specification91 = null;
         var struct_declarator_list92 = null;
         var instance_variables93 = null;


        try {
            // ObjectiveC2ansi.g:116:30: ( ( visibility_specification | struct_declarator_list instance_variables )+ )
            // ObjectiveC2ansi.g:117:2: ( visibility_specification | struct_declarator_list instance_variables )+
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:117:2: ( visibility_specification | struct_declarator_list instance_variables )+
            var cnt19=0;
            loop19:
            do {
                var alt19=3;
                var LA19_0 = this.input.LA(1);

                if ( ((LA19_0>=49 && LA19_0<=52)) ) {
                    alt19=1;
                }
                else if ( (LA19_0==IDENTIFIER||LA19_0==38||LA19_0==40||LA19_0==93) ) {
                    alt19=2;
                }


                switch (alt19) {
                case 1 :
                    // ObjectiveC2ansi.g:117:3: visibility_specification
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_visibility_specification_in_instance_variable_declaration502);
                    visibility_specification91=this.visibility_specification();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, visibility_specification91.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:117:30: struct_declarator_list instance_variables
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_struct_declarator_list_in_instance_variable_declaration506);
                    struct_declarator_list92=this.struct_declarator_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_declarator_list92.getTree());
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_instance_variables_in_instance_variable_declaration508);
                    instance_variables93=this.instance_variables();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, instance_variables93.getTree());


                    break;

                default :
                    if ( cnt19 >= 1 ) {
                        break loop19;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(19, this.input);
                        throw eee;
                }
                cnt19++;
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    visibility_specification_return: (function() {
        ObjectiveC2ansiParser.visibility_specification_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.visibility_specification_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:120:1: visibility_specification : ( '@private' | '@protected' | '@package' | '@public' );
    // $ANTLR start "visibility_specification"
    visibility_specification: function() {
        var retval = new ObjectiveC2ansiParser.visibility_specification_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set94 = null;

        var set94_tree=null;

        try {
            // ObjectiveC2ansi.g:120:25: ( '@private' | '@protected' | '@package' | '@public' )
            // ObjectiveC2ansi.g:
            root_0 = this.adaptor.nil();

            set94=this.input.LT(1);
            if ( (this.input.LA(1)>=49 && this.input.LA(1)<=52) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set94));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    interface_declaration_list_return: (function() {
        ObjectiveC2ansiParser.interface_declaration_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.interface_declaration_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:126:1: interface_declaration_list : ( declaration | class_method_declaration | instance_method_declaration )+ ;
    // $ANTLR start "interface_declaration_list"
    interface_declaration_list: function() {
        var retval = new ObjectiveC2ansiParser.interface_declaration_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var declaration95 = null;
         var class_method_declaration96 = null;
         var instance_method_declaration97 = null;


        try {
            // ObjectiveC2ansi.g:126:27: ( ( declaration | class_method_declaration | instance_method_declaration )+ )
            // ObjectiveC2ansi.g:127:2: ( declaration | class_method_declaration | instance_method_declaration )+
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:127:2: ( declaration | class_method_declaration | instance_method_declaration )+
            var cnt20=0;
            loop20:
            do {
                var alt20=4;
                switch ( this.input.LA(1) ) {
                case IDENTIFIER:
                case 55:
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 90:
                case 91:
                case 92:
                    alt20=1;
                    break;
                case 53:
                    alt20=2;
                    break;
                case 54:
                    alt20=3;
                    break;

                }

                switch (alt20) {
                case 1 :
                    // ObjectiveC2ansi.g:127:3: declaration
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declaration_in_interface_declaration_list545);
                    declaration95=this.declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration95.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:127:17: class_method_declaration
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_method_declaration_in_interface_declaration_list549);
                    class_method_declaration96=this.class_method_declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_method_declaration96.getTree());


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:127:44: instance_method_declaration
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_instance_method_declaration_in_interface_declaration_list553);
                    instance_method_declaration97=this.instance_method_declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, instance_method_declaration97.getTree());


                    break;

                default :
                    if ( cnt20 >= 1 ) {
                        break loop20;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(20, this.input);
                        throw eee;
                }
                cnt20++;
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    class_method_declaration_return: (function() {
        ObjectiveC2ansiParser.class_method_declaration_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.class_method_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:130:1: class_method_declaration : ( '+' method_declaration ) ;
    // $ANTLR start "class_method_declaration"
    class_method_declaration: function() {
        var retval = new ObjectiveC2ansiParser.class_method_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal98 = null;
         var method_declaration99 = null;

        var char_literal98_tree=null;

        try {
            // ObjectiveC2ansi.g:130:25: ( ( '+' method_declaration ) )
            // ObjectiveC2ansi.g:131:2: ( '+' method_declaration )
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:131:2: ( '+' method_declaration )
            // ObjectiveC2ansi.g:131:3: '+' method_declaration
            char_literal98=this.match(this.input,53,ObjectiveC2ansiParser.FOLLOW_53_in_class_method_declaration566); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal98_tree = this.adaptor.create(char_literal98);
            this.adaptor.addChild(root_0, char_literal98_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_method_declaration_in_class_method_declaration568);
            method_declaration99=this.method_declaration();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, method_declaration99.getTree());






            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    instance_method_declaration_return: (function() {
        ObjectiveC2ansiParser.instance_method_declaration_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.instance_method_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:134:1: instance_method_declaration : ( '-' method_declaration ) ;
    // $ANTLR start "instance_method_declaration"
    instance_method_declaration: function() {
        var retval = new ObjectiveC2ansiParser.instance_method_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal100 = null;
         var method_declaration101 = null;

        var char_literal100_tree=null;

        try {
            // ObjectiveC2ansi.g:134:28: ( ( '-' method_declaration ) )
            // ObjectiveC2ansi.g:135:2: ( '-' method_declaration )
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:135:2: ( '-' method_declaration )
            // ObjectiveC2ansi.g:135:3: '-' method_declaration
            char_literal100=this.match(this.input,54,ObjectiveC2ansiParser.FOLLOW_54_in_instance_method_declaration580); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal100_tree = this.adaptor.create(char_literal100);
            this.adaptor.addChild(root_0, char_literal100_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_method_declaration_in_instance_method_declaration582);
            method_declaration101=this.method_declaration();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, method_declaration101.getTree());






            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    method_declaration_return: (function() {
        ObjectiveC2ansiParser.method_declaration_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.method_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:138:1: method_declaration : ( method_type )? method_selector ';' ;
    // $ANTLR start "method_declaration"
    method_declaration: function() {
        var retval = new ObjectiveC2ansiParser.method_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal104 = null;
         var method_type102 = null;
         var method_selector103 = null;

        var char_literal104_tree=null;

        try {
            // ObjectiveC2ansi.g:138:19: ( ( method_type )? method_selector ';' )
            // ObjectiveC2ansi.g:139:2: ( method_type )? method_selector ';'
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:139:2: ( method_type )?
            var alt21=2;
            var LA21_0 = this.input.LA(1);

            if ( (LA21_0==40) ) {
                alt21=1;
            }
            switch (alt21) {
                case 1 :
                    // ObjectiveC2ansi.g:139:4: method_type
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_method_type_in_method_declaration595);
                    method_type102=this.method_type();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, method_type102.getTree());


                    break;

            }

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_method_selector_in_method_declaration600);
            method_selector103=this.method_selector();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, method_selector103.getTree());
            char_literal104=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_method_declaration602); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal104_tree = this.adaptor.create(char_literal104);
            this.adaptor.addChild(root_0, char_literal104_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    implementation_definition_list_return: (function() {
        ObjectiveC2ansiParser.implementation_definition_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.implementation_definition_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:141:1: implementation_definition_list : ( function_definition | declaration | class_method_definition | instance_method_definition )+ ;
    // $ANTLR start "implementation_definition_list"
    implementation_definition_list: function() {
        var retval = new ObjectiveC2ansiParser.implementation_definition_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var function_definition105 = null;
         var declaration106 = null;
         var class_method_definition107 = null;
         var instance_method_definition108 = null;


        try {
            // ObjectiveC2ansi.g:141:31: ( ( function_definition | declaration | class_method_definition | instance_method_definition )+ )
            // ObjectiveC2ansi.g:142:2: ( function_definition | declaration | class_method_definition | instance_method_definition )+
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:142:2: ( function_definition | declaration | class_method_definition | instance_method_definition )+
            var cnt22=0;
            loop22:
            do {
                var alt22=5;
                alt22 = this.dfa22.predict(this.input);
                switch (alt22) {
                case 1 :
                    // ObjectiveC2ansi.g:142:3: function_definition
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_function_definition_in_implementation_definition_list611);
                    function_definition105=this.function_definition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_definition105.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:142:25: declaration
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declaration_in_implementation_definition_list615);
                    declaration106=this.declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration106.getTree());


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:142:39: class_method_definition
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_method_definition_in_implementation_definition_list619);
                    class_method_definition107=this.class_method_definition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_method_definition107.getTree());


                    break;
                case 4 :
                    // ObjectiveC2ansi.g:142:65: instance_method_definition
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_instance_method_definition_in_implementation_definition_list623);
                    instance_method_definition108=this.instance_method_definition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, instance_method_definition108.getTree());


                    break;

                default :
                    if ( cnt22 >= 1 ) {
                        break loop22;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(22, this.input);
                        throw eee;
                }
                cnt22++;
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    class_method_definition_return: (function() {
        ObjectiveC2ansiParser.class_method_definition_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.class_method_definition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:144:1: class_method_definition : ( '+' method_definition ) ;
    // $ANTLR start "class_method_definition"
    class_method_definition: function() {
        var retval = new ObjectiveC2ansiParser.class_method_definition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal109 = null;
         var method_definition110 = null;

        var char_literal109_tree=null;

        try {
            // ObjectiveC2ansi.g:144:24: ( ( '+' method_definition ) )
            // ObjectiveC2ansi.g:145:2: ( '+' method_definition )
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:145:2: ( '+' method_definition )
            // ObjectiveC2ansi.g:145:3: '+' method_definition
            char_literal109=this.match(this.input,53,ObjectiveC2ansiParser.FOLLOW_53_in_class_method_definition634); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal109_tree = this.adaptor.create(char_literal109);
            this.adaptor.addChild(root_0, char_literal109_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_method_definition_in_class_method_definition636);
            method_definition110=this.method_definition();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, method_definition110.getTree());






            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    instance_method_definition_return: (function() {
        ObjectiveC2ansiParser.instance_method_definition_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.instance_method_definition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:148:1: instance_method_definition : ( '-' method_definition ) ;
    // $ANTLR start "instance_method_definition"
    instance_method_definition: function() {
        var retval = new ObjectiveC2ansiParser.instance_method_definition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal111 = null;
         var method_definition112 = null;

        var char_literal111_tree=null;

        try {
            // ObjectiveC2ansi.g:148:27: ( ( '-' method_definition ) )
            // ObjectiveC2ansi.g:149:2: ( '-' method_definition )
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:149:2: ( '-' method_definition )
            // ObjectiveC2ansi.g:149:3: '-' method_definition
            char_literal111=this.match(this.input,54,ObjectiveC2ansiParser.FOLLOW_54_in_instance_method_definition648); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal111_tree = this.adaptor.create(char_literal111);
            this.adaptor.addChild(root_0, char_literal111_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_method_definition_in_instance_method_definition650);
            method_definition112=this.method_definition();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, method_definition112.getTree());






            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    method_definition_return: (function() {
        ObjectiveC2ansiParser.method_definition_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.method_definition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:152:1: method_definition : ( method_type )? method_selector ( init_declarator_list )? compound_statement ;
    // $ANTLR start "method_definition"
    method_definition: function() {
        var retval = new ObjectiveC2ansiParser.method_definition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var method_type113 = null;
         var method_selector114 = null;
         var init_declarator_list115 = null;
         var compound_statement116 = null;


        try {
            // ObjectiveC2ansi.g:152:18: ( ( method_type )? method_selector ( init_declarator_list )? compound_statement )
            // ObjectiveC2ansi.g:153:2: ( method_type )? method_selector ( init_declarator_list )? compound_statement
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:153:2: ( method_type )?
            var alt23=2;
            var LA23_0 = this.input.LA(1);

            if ( (LA23_0==40) ) {
                alt23=1;
            }
            switch (alt23) {
                case 1 :
                    // ObjectiveC2ansi.g:153:3: method_type
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_method_type_in_method_definition663);
                    method_type113=this.method_type();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, method_type113.getTree());


                    break;

            }

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_method_selector_in_method_definition667);
            method_selector114=this.method_selector();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, method_selector114.getTree());
            // ObjectiveC2ansi.g:153:33: ( init_declarator_list )?
            var alt24=2;
            var LA24_0 = this.input.LA(1);

            if ( (LA24_0==IDENTIFIER||LA24_0==40||LA24_0==93) ) {
                alt24=1;
            }
            switch (alt24) {
                case 1 :
                    // ObjectiveC2ansi.g:153:34: init_declarator_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_init_declarator_list_in_method_definition670);
                    init_declarator_list115=this.init_declarator_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, init_declarator_list115.getTree());


                    break;

            }

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_compound_statement_in_method_definition674);
            compound_statement116=this.compound_statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, compound_statement116.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    method_selector_return: (function() {
        ObjectiveC2ansiParser.method_selector_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.method_selector_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:155:1: method_selector : ( selector | ( ( keyword_declarator )+ ( parameter_list )? ) );
    // $ANTLR start "method_selector"
    method_selector: function() {
        var retval = new ObjectiveC2ansiParser.method_selector_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var selector117 = null;
         var keyword_declarator118 = null;
         var parameter_list119 = null;


        try {
            // ObjectiveC2ansi.g:155:16: ( selector | ( ( keyword_declarator )+ ( parameter_list )? ) )
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( (LA27_0==IDENTIFIER) ) {
                var LA27_1 = this.input.LA(2);

                if ( (LA27_1==38) ) {
                    alt27=2;
                }
                else if ( (LA27_1==IDENTIFIER||LA27_1==40||LA27_1==44||LA27_1==47||LA27_1==93) ) {
                    alt27=1;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 27, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA27_0==38) ) {
                alt27=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 27, 0, this.input);

                throw nvae;
            }
            switch (alt27) {
                case 1 :
                    // ObjectiveC2ansi.g:156:2: selector
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_selector_in_method_selector682);
                    selector117=this.selector();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selector117.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:156:12: ( ( keyword_declarator )+ ( parameter_list )? )
                    root_0 = this.adaptor.nil();

                    // ObjectiveC2ansi.g:156:12: ( ( keyword_declarator )+ ( parameter_list )? )
                    // ObjectiveC2ansi.g:156:13: ( keyword_declarator )+ ( parameter_list )?
                    // ObjectiveC2ansi.g:156:13: ( keyword_declarator )+
                    var cnt25=0;
                    loop25:
                    do {
                        var alt25=2;
                        var LA25_0 = this.input.LA(1);

                        if ( (LA25_0==IDENTIFIER) ) {
                            var LA25_2 = this.input.LA(2);

                            if ( (LA25_2==38) ) {
                                alt25=1;
                            }


                        }
                        else if ( (LA25_0==38) ) {
                            alt25=1;
                        }


                        switch (alt25) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: keyword_declarator
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_keyword_declarator_in_method_selector686);
                            keyword_declarator118=this.keyword_declarator();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, keyword_declarator118.getTree());


                            break;

                        default :
                            if ( cnt25 >= 1 ) {
                                break loop25;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(25, this.input);
                                throw eee;
                        }
                        cnt25++;
                    } while (true);

                    // ObjectiveC2ansi.g:156:33: ( parameter_list )?
                    var alt26=2;
                    var LA26_0 = this.input.LA(1);

                    if ( ((LA26_0>=55 && LA26_0<=72)||(LA26_0>=84 && LA26_0<=88)||(LA26_0>=90 && LA26_0<=92)) ) {
                        alt26=1;
                    }
                    else if ( (LA26_0==IDENTIFIER) ) {
                        var LA26_2 = this.input.LA(2);

                        if ( (this.synpred56_ObjectiveC2ansi()) ) {
                            alt26=1;
                        }
                    }
                    switch (alt26) {
                        case 1 :
                            // ObjectiveC2ansi.g:156:34: parameter_list
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_parameter_list_in_method_selector690);
                            parameter_list119=this.parameter_list();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, parameter_list119.getTree());


                            break;

                    }






                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    keyword_declarator_return: (function() {
        ObjectiveC2ansiParser.keyword_declarator_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.keyword_declarator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:159:1: keyword_declarator : ( selector )? ':' ( method_type )* IDENTIFIER ;
    // $ANTLR start "keyword_declarator"
    keyword_declarator: function() {
        var retval = new ObjectiveC2ansiParser.keyword_declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal121 = null;
        var IDENTIFIER123 = null;
         var selector120 = null;
         var method_type122 = null;

        var char_literal121_tree=null;
        var IDENTIFIER123_tree=null;

        try {
            // ObjectiveC2ansi.g:159:19: ( ( selector )? ':' ( method_type )* IDENTIFIER )
            // ObjectiveC2ansi.g:160:2: ( selector )? ':' ( method_type )* IDENTIFIER
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:160:2: ( selector )?
            var alt28=2;
            var LA28_0 = this.input.LA(1);

            if ( (LA28_0==IDENTIFIER) ) {
                alt28=1;
            }
            switch (alt28) {
                case 1 :
                    // ObjectiveC2ansi.g:0:0: selector
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_selector_in_keyword_declarator704);
                    selector120=this.selector();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selector120.getTree());


                    break;

            }

            char_literal121=this.match(this.input,38,ObjectiveC2ansiParser.FOLLOW_38_in_keyword_declarator707); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal121_tree = this.adaptor.create(char_literal121);
            this.adaptor.addChild(root_0, char_literal121_tree);
            }
            // ObjectiveC2ansi.g:160:16: ( method_type )*
            loop29:
            do {
                var alt29=2;
                var LA29_0 = this.input.LA(1);

                if ( (LA29_0==40) ) {
                    alt29=1;
                }


                switch (alt29) {
                case 1 :
                    // ObjectiveC2ansi.g:0:0: method_type
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_method_type_in_keyword_declarator709);
                    method_type122=this.method_type();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, method_type122.getTree());


                    break;

                default :
                    break loop29;
                }
            } while (true);

            IDENTIFIER123=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_keyword_declarator712); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER123_tree = this.adaptor.create(IDENTIFIER123);
            this.adaptor.addChild(root_0, IDENTIFIER123_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    selector_return: (function() {
        ObjectiveC2ansiParser.selector_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.selector_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:162:1: selector : IDENTIFIER ;
    // $ANTLR start "selector"
    selector: function() {
        var retval = new ObjectiveC2ansiParser.selector_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER124 = null;

        var IDENTIFIER124_tree=null;

        try {
            // ObjectiveC2ansi.g:162:9: ( IDENTIFIER )
            // ObjectiveC2ansi.g:163:1: IDENTIFIER
            root_0 = this.adaptor.nil();

            IDENTIFIER124=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_selector719); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER124_tree = this.adaptor.create(IDENTIFIER124);
            this.adaptor.addChild(root_0, IDENTIFIER124_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    method_type_return: (function() {
        ObjectiveC2ansiParser.method_type_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.method_type_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:165:1: method_type : '(' type_name ')' ;
    // $ANTLR start "method_type"
    method_type: function() {
        var retval = new ObjectiveC2ansiParser.method_type_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal125 = null;
        var char_literal127 = null;
         var type_name126 = null;

        var char_literal125_tree=null;
        var char_literal127_tree=null;

        try {
            // ObjectiveC2ansi.g:165:12: ( '(' type_name ')' )
            // ObjectiveC2ansi.g:166:1: '(' type_name ')'
            root_0 = this.adaptor.nil();

            char_literal125=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_method_type726); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal125_tree = this.adaptor.create(char_literal125);
            this.adaptor.addChild(root_0, char_literal125_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_name_in_method_type728);
            type_name126=this.type_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_name126.getTree());
            char_literal127=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_method_type730); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal127_tree = this.adaptor.create(char_literal127);
            this.adaptor.addChild(root_0, char_literal127_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    type_specifier_return: (function() {
        ObjectiveC2ansiParser.type_specifier_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.type_specifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:168:1: type_specifier : ( 'void' | 'char' | 'short' | 'int' | 'long' | 'float' | 'double' | 'signed' | 'unsigned' | ( 'id' ( protocol_reference_list )? ) | ( class_name ( protocol_reference_list )? ) | struct_or_union_specifier | enum_specifier | IDENTIFIER );
    // $ANTLR start "type_specifier"
    type_specifier: function() {
        var retval = new ObjectiveC2ansiParser.type_specifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal128 = null;
        var string_literal129 = null;
        var string_literal130 = null;
        var string_literal131 = null;
        var string_literal132 = null;
        var string_literal133 = null;
        var string_literal134 = null;
        var string_literal135 = null;
        var string_literal136 = null;
        var string_literal137 = null;
        var IDENTIFIER143 = null;
         var protocol_reference_list138 = null;
         var class_name139 = null;
         var protocol_reference_list140 = null;
         var struct_or_union_specifier141 = null;
         var enum_specifier142 = null;

        var string_literal128_tree=null;
        var string_literal129_tree=null;
        var string_literal130_tree=null;
        var string_literal131_tree=null;
        var string_literal132_tree=null;
        var string_literal133_tree=null;
        var string_literal134_tree=null;
        var string_literal135_tree=null;
        var string_literal136_tree=null;
        var string_literal137_tree=null;
        var IDENTIFIER143_tree=null;

        try {
            // ObjectiveC2ansi.g:168:15: ( 'void' | 'char' | 'short' | 'int' | 'long' | 'float' | 'double' | 'signed' | 'unsigned' | ( 'id' ( protocol_reference_list )? ) | ( class_name ( protocol_reference_list )? ) | struct_or_union_specifier | enum_specifier | IDENTIFIER )
            var alt32=14;
            alt32 = this.dfa32.predict(this.input);
            switch (alt32) {
                case 1 :
                    // ObjectiveC2ansi.g:169:1: 'void'
                    root_0 = this.adaptor.nil();

                    string_literal128=this.match(this.input,55,ObjectiveC2ansiParser.FOLLOW_55_in_type_specifier737); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal128_tree = this.adaptor.create(string_literal128);
                    this.adaptor.addChild(root_0, string_literal128_tree);
                    }


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:169:10: 'char'
                    root_0 = this.adaptor.nil();

                    string_literal129=this.match(this.input,56,ObjectiveC2ansiParser.FOLLOW_56_in_type_specifier741); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal129_tree = this.adaptor.create(string_literal129);
                    this.adaptor.addChild(root_0, string_literal129_tree);
                    }


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:169:19: 'short'
                    root_0 = this.adaptor.nil();

                    string_literal130=this.match(this.input,57,ObjectiveC2ansiParser.FOLLOW_57_in_type_specifier745); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal130_tree = this.adaptor.create(string_literal130);
                    this.adaptor.addChild(root_0, string_literal130_tree);
                    }


                    break;
                case 4 :
                    // ObjectiveC2ansi.g:169:29: 'int'
                    root_0 = this.adaptor.nil();

                    string_literal131=this.match(this.input,58,ObjectiveC2ansiParser.FOLLOW_58_in_type_specifier749); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal131_tree = this.adaptor.create(string_literal131);
                    this.adaptor.addChild(root_0, string_literal131_tree);
                    }


                    break;
                case 5 :
                    // ObjectiveC2ansi.g:169:37: 'long'
                    root_0 = this.adaptor.nil();

                    string_literal132=this.match(this.input,59,ObjectiveC2ansiParser.FOLLOW_59_in_type_specifier753); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal132_tree = this.adaptor.create(string_literal132);
                    this.adaptor.addChild(root_0, string_literal132_tree);
                    }


                    break;
                case 6 :
                    // ObjectiveC2ansi.g:169:46: 'float'
                    root_0 = this.adaptor.nil();

                    string_literal133=this.match(this.input,60,ObjectiveC2ansiParser.FOLLOW_60_in_type_specifier757); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal133_tree = this.adaptor.create(string_literal133);
                    this.adaptor.addChild(root_0, string_literal133_tree);
                    }


                    break;
                case 7 :
                    // ObjectiveC2ansi.g:169:56: 'double'
                    root_0 = this.adaptor.nil();

                    string_literal134=this.match(this.input,61,ObjectiveC2ansiParser.FOLLOW_61_in_type_specifier761); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal134_tree = this.adaptor.create(string_literal134);
                    this.adaptor.addChild(root_0, string_literal134_tree);
                    }


                    break;
                case 8 :
                    // ObjectiveC2ansi.g:169:67: 'signed'
                    root_0 = this.adaptor.nil();

                    string_literal135=this.match(this.input,62,ObjectiveC2ansiParser.FOLLOW_62_in_type_specifier765); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal135_tree = this.adaptor.create(string_literal135);
                    this.adaptor.addChild(root_0, string_literal135_tree);
                    }


                    break;
                case 9 :
                    // ObjectiveC2ansi.g:169:78: 'unsigned'
                    root_0 = this.adaptor.nil();

                    string_literal136=this.match(this.input,63,ObjectiveC2ansiParser.FOLLOW_63_in_type_specifier769); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal136_tree = this.adaptor.create(string_literal136);
                    this.adaptor.addChild(root_0, string_literal136_tree);
                    }


                    break;
                case 10 :
                    // ObjectiveC2ansi.g:170:4: ( 'id' ( protocol_reference_list )? )
                    root_0 = this.adaptor.nil();

                    // ObjectiveC2ansi.g:170:4: ( 'id' ( protocol_reference_list )? )
                    // ObjectiveC2ansi.g:170:5: 'id' ( protocol_reference_list )?
                    string_literal137=this.match(this.input,64,ObjectiveC2ansiParser.FOLLOW_64_in_type_specifier776); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal137_tree = this.adaptor.create(string_literal137);
                    this.adaptor.addChild(root_0, string_literal137_tree);
                    }
                    // ObjectiveC2ansi.g:170:10: ( protocol_reference_list )?
                    var alt30=2;
                    var LA30_0 = this.input.LA(1);

                    if ( (LA30_0==30) ) {
                        alt30=1;
                    }
                    switch (alt30) {
                        case 1 :
                            // ObjectiveC2ansi.g:170:12: protocol_reference_list
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_reference_list_in_type_specifier780);
                            protocol_reference_list138=this.protocol_reference_list();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_reference_list138.getTree());


                            break;

                    }






                    break;
                case 11 :
                    // ObjectiveC2ansi.g:171:4: ( class_name ( protocol_reference_list )? )
                    root_0 = this.adaptor.nil();

                    // ObjectiveC2ansi.g:171:4: ( class_name ( protocol_reference_list )? )
                    // ObjectiveC2ansi.g:171:5: class_name ( protocol_reference_list )?
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_name_in_type_specifier791);
                    class_name139=this.class_name();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_name139.getTree());
                    // ObjectiveC2ansi.g:171:16: ( protocol_reference_list )?
                    var alt31=2;
                    var LA31_0 = this.input.LA(1);

                    if ( (LA31_0==30) ) {
                        alt31=1;
                    }
                    switch (alt31) {
                        case 1 :
                            // ObjectiveC2ansi.g:171:18: protocol_reference_list
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_reference_list_in_type_specifier795);
                            protocol_reference_list140=this.protocol_reference_list();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_reference_list140.getTree());


                            break;

                    }






                    break;
                case 12 :
                    // ObjectiveC2ansi.g:172:4: struct_or_union_specifier
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_struct_or_union_specifier_in_type_specifier804);
                    struct_or_union_specifier141=this.struct_or_union_specifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_or_union_specifier141.getTree());


                    break;
                case 13 :
                    // ObjectiveC2ansi.g:173:4: enum_specifier
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_enum_specifier_in_type_specifier809);
                    enum_specifier142=this.enum_specifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, enum_specifier142.getTree());


                    break;
                case 14 :
                    // ObjectiveC2ansi.g:174:4: IDENTIFIER
                    root_0 = this.adaptor.nil();

                    IDENTIFIER143=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_type_specifier815); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENTIFIER143_tree = this.adaptor.create(IDENTIFIER143);
                    this.adaptor.addChild(root_0, IDENTIFIER143_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    type_qualifier_return: (function() {
        ObjectiveC2ansiParser.type_qualifier_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.type_qualifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:176:1: type_qualifier : ( 'const' | 'volatile' | protocol_qualifier );
    // $ANTLR start "type_qualifier"
    type_qualifier: function() {
        var retval = new ObjectiveC2ansiParser.type_qualifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal144 = null;
        var string_literal145 = null;
         var protocol_qualifier146 = null;

        var string_literal144_tree=null;
        var string_literal145_tree=null;

        try {
            // ObjectiveC2ansi.g:176:15: ( 'const' | 'volatile' | protocol_qualifier )
            var alt33=3;
            switch ( this.input.LA(1) ) {
            case 65:
                alt33=1;
                break;
            case 66:
                alt33=2;
                break;
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
                alt33=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 33, 0, this.input);

                throw nvae;
            }

            switch (alt33) {
                case 1 :
                    // ObjectiveC2ansi.g:177:2: 'const'
                    root_0 = this.adaptor.nil();

                    string_literal144=this.match(this.input,65,ObjectiveC2ansiParser.FOLLOW_65_in_type_qualifier823); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal144_tree = this.adaptor.create(string_literal144);
                    this.adaptor.addChild(root_0, string_literal144_tree);
                    }


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:177:12: 'volatile'
                    root_0 = this.adaptor.nil();

                    string_literal145=this.match(this.input,66,ObjectiveC2ansiParser.FOLLOW_66_in_type_qualifier827); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal145_tree = this.adaptor.create(string_literal145);
                    this.adaptor.addChild(root_0, string_literal145_tree);
                    }


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:177:25: protocol_qualifier
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_qualifier_in_type_qualifier831);
                    protocol_qualifier146=this.protocol_qualifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_qualifier146.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    protocol_qualifier_return: (function() {
        ObjectiveC2ansiParser.protocol_qualifier_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.protocol_qualifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:179:1: protocol_qualifier : ( 'in' | 'out' | 'inout' | 'bycopy' | 'byref' | 'oneway' );
    // $ANTLR start "protocol_qualifier"
    protocol_qualifier: function() {
        var retval = new ObjectiveC2ansiParser.protocol_qualifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set147 = null;

        var set147_tree=null;

        try {
            // ObjectiveC2ansi.g:179:19: ( 'in' | 'out' | 'inout' | 'bycopy' | 'byref' | 'oneway' )
            // ObjectiveC2ansi.g:
            root_0 = this.adaptor.nil();

            set147=this.input.LT(1);
            if ( (this.input.LA(1)>=67 && this.input.LA(1)<=72) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set147));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    primary_expression_return: (function() {
        ObjectiveC2ansiParser.primary_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.primary_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:182:1: primary_expression : ( IDENTIFIER | constant | STRING_LITERAL | ( '(' expression ')' ) | 'self' | message_expression | selector_expression | protocol_expression | encode_expression );
    // $ANTLR start "primary_expression"
    primary_expression: function() {
        var retval = new ObjectiveC2ansiParser.primary_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER148 = null;
        var STRING_LITERAL150 = null;
        var char_literal151 = null;
        var char_literal153 = null;
        var string_literal154 = null;
         var constant149 = null;
         var expression152 = null;
         var message_expression155 = null;
         var selector_expression156 = null;
         var protocol_expression157 = null;
         var encode_expression158 = null;

        var IDENTIFIER148_tree=null;
        var STRING_LITERAL150_tree=null;
        var char_literal151_tree=null;
        var char_literal153_tree=null;
        var string_literal154_tree=null;

        try {
            // ObjectiveC2ansi.g:182:19: ( IDENTIFIER | constant | STRING_LITERAL | ( '(' expression ')' ) | 'self' | message_expression | selector_expression | protocol_expression | encode_expression )
            var alt34=9;
            switch ( this.input.LA(1) ) {
            case IDENTIFIER:
                alt34=1;
                break;
            case DECIMAL_LITERAL:
            case HEX_LITERAL:
            case OCTAL_LITERAL:
            case CHARACTER_LITERAL:
            case FLOATING_POINT_LITERAL:
                alt34=2;
                break;
            case STRING_LITERAL:
                alt34=3;
                break;
            case 40:
                alt34=4;
                break;
            case 73:
                alt34=5;
                break;
            case 74:
                alt34=6;
                break;
            case 77:
                alt34=7;
                break;
            case 43:
                alt34=8;
                break;
            case 78:
                alt34=9;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 34, 0, this.input);

                throw nvae;
            }

            switch (alt34) {
                case 1 :
                    // ObjectiveC2ansi.g:183:2: IDENTIFIER
                    root_0 = this.adaptor.nil();

                    IDENTIFIER148=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_primary_expression867); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENTIFIER148_tree = this.adaptor.create(IDENTIFIER148);
                    this.adaptor.addChild(root_0, IDENTIFIER148_tree);
                    }


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:184:4: constant
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_constant_in_primary_expression872);
                    constant149=this.constant();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant149.getTree());


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:185:4: STRING_LITERAL
                    root_0 = this.adaptor.nil();

                    STRING_LITERAL150=this.match(this.input,STRING_LITERAL,ObjectiveC2ansiParser.FOLLOW_STRING_LITERAL_in_primary_expression877); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    STRING_LITERAL150_tree = this.adaptor.create(STRING_LITERAL150);
                    this.adaptor.addChild(root_0, STRING_LITERAL150_tree);
                    }


                    break;
                case 4 :
                    // ObjectiveC2ansi.g:186:4: ( '(' expression ')' )
                    root_0 = this.adaptor.nil();

                    // ObjectiveC2ansi.g:186:4: ( '(' expression ')' )
                    // ObjectiveC2ansi.g:186:5: '(' expression ')'
                    char_literal151=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_primary_expression883); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal151_tree = this.adaptor.create(char_literal151);
                    this.adaptor.addChild(root_0, char_literal151_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_primary_expression885);
                    expression152=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression152.getTree());
                    char_literal153=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_primary_expression887); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal153_tree = this.adaptor.create(char_literal153);
                    this.adaptor.addChild(root_0, char_literal153_tree);
                    }





                    break;
                case 5 :
                    // ObjectiveC2ansi.g:187:4: 'self'
                    root_0 = this.adaptor.nil();

                    string_literal154=this.match(this.input,73,ObjectiveC2ansiParser.FOLLOW_73_in_primary_expression893); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal154_tree = this.adaptor.create(string_literal154);
                    this.adaptor.addChild(root_0, string_literal154_tree);
                    }


                    break;
                case 6 :
                    // ObjectiveC2ansi.g:188:4: message_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_message_expression_in_primary_expression898);
                    message_expression155=this.message_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, message_expression155.getTree());


                    break;
                case 7 :
                    // ObjectiveC2ansi.g:189:4: selector_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_selector_expression_in_primary_expression903);
                    selector_expression156=this.selector_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selector_expression156.getTree());


                    break;
                case 8 :
                    // ObjectiveC2ansi.g:190:4: protocol_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_expression_in_primary_expression908);
                    protocol_expression157=this.protocol_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_expression157.getTree());


                    break;
                case 9 :
                    // ObjectiveC2ansi.g:191:4: encode_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_encode_expression_in_primary_expression913);
                    encode_expression158=this.encode_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, encode_expression158.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    message_expression_return: (function() {
        ObjectiveC2ansiParser.message_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.message_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:193:1: message_expression : ( '[' receiver message_selector ']' ) ;
    // $ANTLR start "message_expression"
    message_expression: function() {
        var retval = new ObjectiveC2ansiParser.message_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal159 = null;
        var char_literal162 = null;
         var receiver160 = null;
         var message_selector161 = null;

        var char_literal159_tree=null;
        var char_literal162_tree=null;

        try {
            // ObjectiveC2ansi.g:193:19: ( ( '[' receiver message_selector ']' ) )
            // ObjectiveC2ansi.g:194:2: ( '[' receiver message_selector ']' )
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:194:2: ( '[' receiver message_selector ']' )
            // ObjectiveC2ansi.g:194:3: '[' receiver message_selector ']'
            char_literal159=this.match(this.input,74,ObjectiveC2ansiParser.FOLLOW_74_in_message_expression922); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal159_tree = this.adaptor.create(char_literal159);
            this.adaptor.addChild(root_0, char_literal159_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_receiver_in_message_expression924);
            receiver160=this.receiver();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, receiver160.getTree());
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_message_selector_in_message_expression926);
            message_selector161=this.message_selector();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, message_selector161.getTree());
            char_literal162=this.match(this.input,75,ObjectiveC2ansiParser.FOLLOW_75_in_message_expression928); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal162_tree = this.adaptor.create(char_literal162);
            this.adaptor.addChild(root_0, char_literal162_tree);
            }






            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    receiver_return: (function() {
        ObjectiveC2ansiParser.receiver_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.receiver_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:197:1: receiver : ( expression | class_name | 'super' );
    // $ANTLR start "receiver"
    receiver: function() {
        var retval = new ObjectiveC2ansiParser.receiver_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal165 = null;
         var expression163 = null;
         var class_name164 = null;

        var string_literal165_tree=null;

        try {
            // ObjectiveC2ansi.g:197:9: ( expression | class_name | 'super' )
            var alt35=3;
            switch ( this.input.LA(1) ) {
            case STRING_LITERAL:
            case DECIMAL_LITERAL:
            case HEX_LITERAL:
            case OCTAL_LITERAL:
            case CHARACTER_LITERAL:
            case FLOATING_POINT_LITERAL:
            case 40:
            case 43:
            case 54:
            case 73:
            case 74:
            case 77:
            case 78:
            case 93:
            case 122:
            case 130:
            case 131:
            case 132:
            case 133:
            case 134:
                alt35=1;
                break;
            case IDENTIFIER:
                var LA35_2 = this.input.LA(2);

                if ( (this.synpred89_ObjectiveC2ansi()) ) {
                    alt35=1;
                }
                else if ( (this.synpred90_ObjectiveC2ansi()) ) {
                    alt35=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 35, 2, this.input);

                    throw nvae;
                }
                break;
            case 76:
                alt35=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 35, 0, this.input);

                throw nvae;
            }

            switch (alt35) {
                case 1 :
                    // ObjectiveC2ansi.g:198:2: expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_receiver939);
                    expression163=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression163.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:199:4: class_name
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_name_in_receiver944);
                    class_name164=this.class_name();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, class_name164.getTree());


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:200:4: 'super'
                    root_0 = this.adaptor.nil();

                    string_literal165=this.match(this.input,76,ObjectiveC2ansiParser.FOLLOW_76_in_receiver950); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal165_tree = this.adaptor.create(string_literal165);
                    this.adaptor.addChild(root_0, string_literal165_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    message_selector_return: (function() {
        ObjectiveC2ansiParser.message_selector_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.message_selector_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:202:1: message_selector : ( selector | ( keyword_argument )+ );
    // $ANTLR start "message_selector"
    message_selector: function() {
        var retval = new ObjectiveC2ansiParser.message_selector_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var selector166 = null;
         var keyword_argument167 = null;


        try {
            // ObjectiveC2ansi.g:202:17: ( selector | ( keyword_argument )+ )
            var alt37=2;
            var LA37_0 = this.input.LA(1);

            if ( (LA37_0==IDENTIFIER) ) {
                var LA37_1 = this.input.LA(2);

                if ( (LA37_1==75) ) {
                    alt37=1;
                }
                else if ( (LA37_1==38) ) {
                    alt37=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 37, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA37_0==38) ) {
                alt37=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 37, 0, this.input);

                throw nvae;
            }
            switch (alt37) {
                case 1 :
                    // ObjectiveC2ansi.g:203:2: selector
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_selector_in_message_selector958);
                    selector166=this.selector();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selector166.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:204:4: ( keyword_argument )+
                    root_0 = this.adaptor.nil();

                    // ObjectiveC2ansi.g:204:4: ( keyword_argument )+
                    var cnt36=0;
                    loop36:
                    do {
                        var alt36=2;
                        var LA36_0 = this.input.LA(1);

                        if ( (LA36_0==IDENTIFIER||LA36_0==38) ) {
                            alt36=1;
                        }


                        switch (alt36) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: keyword_argument
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_keyword_argument_in_message_selector963);
                            keyword_argument167=this.keyword_argument();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, keyword_argument167.getTree());


                            break;

                        default :
                            if ( cnt36 >= 1 ) {
                                break loop36;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(36, this.input);
                                throw eee;
                        }
                        cnt36++;
                    } while (true);



                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    keyword_argument_return: (function() {
        ObjectiveC2ansiParser.keyword_argument_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.keyword_argument_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:206:1: keyword_argument : ( selector )? ':' expression ;
    // $ANTLR start "keyword_argument"
    keyword_argument: function() {
        var retval = new ObjectiveC2ansiParser.keyword_argument_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal169 = null;
         var selector168 = null;
         var expression170 = null;

        var char_literal169_tree=null;

        try {
            // ObjectiveC2ansi.g:206:17: ( ( selector )? ':' expression )
            // ObjectiveC2ansi.g:207:2: ( selector )? ':' expression
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:207:2: ( selector )?
            var alt38=2;
            var LA38_0 = this.input.LA(1);

            if ( (LA38_0==IDENTIFIER) ) {
                alt38=1;
            }
            switch (alt38) {
                case 1 :
                    // ObjectiveC2ansi.g:0:0: selector
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_selector_in_keyword_argument972);
                    selector168=this.selector();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selector168.getTree());


                    break;

            }

            char_literal169=this.match(this.input,38,ObjectiveC2ansiParser.FOLLOW_38_in_keyword_argument975); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal169_tree = this.adaptor.create(char_literal169);
            this.adaptor.addChild(root_0, char_literal169_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_keyword_argument977);
            expression170=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression170.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    selector_expression_return: (function() {
        ObjectiveC2ansiParser.selector_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.selector_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:209:1: selector_expression : '@selector' '(' selector_name ')' ;
    // $ANTLR start "selector_expression"
    selector_expression: function() {
        var retval = new ObjectiveC2ansiParser.selector_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal171 = null;
        var char_literal172 = null;
        var char_literal174 = null;
         var selector_name173 = null;

        var string_literal171_tree=null;
        var char_literal172_tree=null;
        var char_literal174_tree=null;

        try {
            // ObjectiveC2ansi.g:209:20: ( '@selector' '(' selector_name ')' )
            // ObjectiveC2ansi.g:210:2: '@selector' '(' selector_name ')'
            root_0 = this.adaptor.nil();

            string_literal171=this.match(this.input,77,ObjectiveC2ansiParser.FOLLOW_77_in_selector_expression985); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal171_tree = this.adaptor.create(string_literal171);
            this.adaptor.addChild(root_0, string_literal171_tree);
            }
            char_literal172=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_selector_expression987); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal172_tree = this.adaptor.create(char_literal172);
            this.adaptor.addChild(root_0, char_literal172_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_selector_name_in_selector_expression989);
            selector_name173=this.selector_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selector_name173.getTree());
            char_literal174=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_selector_expression991); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal174_tree = this.adaptor.create(char_literal174);
            this.adaptor.addChild(root_0, char_literal174_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    selector_name_return: (function() {
        ObjectiveC2ansiParser.selector_name_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.selector_name_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:212:1: selector_name : ( selector | ( ( selector )? ':' )+ );
    // $ANTLR start "selector_name"
    selector_name: function() {
        var retval = new ObjectiveC2ansiParser.selector_name_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal177 = null;
         var selector175 = null;
         var selector176 = null;

        var char_literal177_tree=null;

        try {
            // ObjectiveC2ansi.g:212:14: ( selector | ( ( selector )? ':' )+ )
            var alt41=2;
            var LA41_0 = this.input.LA(1);

            if ( (LA41_0==IDENTIFIER) ) {
                var LA41_1 = this.input.LA(2);

                if ( (LA41_1==41) ) {
                    alt41=1;
                }
                else if ( (LA41_1==38) ) {
                    alt41=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 41, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA41_0==38) ) {
                alt41=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 41, 0, this.input);

                throw nvae;
            }
            switch (alt41) {
                case 1 :
                    // ObjectiveC2ansi.g:213:2: selector
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_selector_in_selector_name999);
                    selector175=this.selector();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selector175.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:214:4: ( ( selector )? ':' )+
                    root_0 = this.adaptor.nil();

                    // ObjectiveC2ansi.g:214:4: ( ( selector )? ':' )+
                    var cnt40=0;
                    loop40:
                    do {
                        var alt40=2;
                        var LA40_0 = this.input.LA(1);

                        if ( (LA40_0==IDENTIFIER||LA40_0==38) ) {
                            alt40=1;
                        }


                        switch (alt40) {
                        case 1 :
                            // ObjectiveC2ansi.g:214:5: ( selector )? ':'
                            // ObjectiveC2ansi.g:214:5: ( selector )?
                            var alt39=2;
                            var LA39_0 = this.input.LA(1);

                            if ( (LA39_0==IDENTIFIER) ) {
                                alt39=1;
                            }
                            switch (alt39) {
                                case 1 :
                                    // ObjectiveC2ansi.g:0:0: selector
                                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_selector_in_selector_name1005);
                                    selector176=this.selector();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selector176.getTree());


                                    break;

                            }

                            char_literal177=this.match(this.input,38,ObjectiveC2ansiParser.FOLLOW_38_in_selector_name1008); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            char_literal177_tree = this.adaptor.create(char_literal177);
                            this.adaptor.addChild(root_0, char_literal177_tree);
                            }


                            break;

                        default :
                            if ( cnt40 >= 1 ) {
                                break loop40;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(40, this.input);
                                throw eee;
                        }
                        cnt40++;
                    } while (true);



                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    protocol_expression_return: (function() {
        ObjectiveC2ansiParser.protocol_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.protocol_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:216:1: protocol_expression : '@protocol' '(' protocol_name ')' ;
    // $ANTLR start "protocol_expression"
    protocol_expression: function() {
        var retval = new ObjectiveC2ansiParser.protocol_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal178 = null;
        var char_literal179 = null;
        var char_literal181 = null;
         var protocol_name180 = null;

        var string_literal178_tree=null;
        var char_literal179_tree=null;
        var char_literal181_tree=null;

        try {
            // ObjectiveC2ansi.g:216:20: ( '@protocol' '(' protocol_name ')' )
            // ObjectiveC2ansi.g:217:2: '@protocol' '(' protocol_name ')'
            root_0 = this.adaptor.nil();

            string_literal178=this.match(this.input,43,ObjectiveC2ansiParser.FOLLOW_43_in_protocol_expression1018); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal178_tree = this.adaptor.create(string_literal178);
            this.adaptor.addChild(root_0, string_literal178_tree);
            }
            char_literal179=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_protocol_expression1020); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal179_tree = this.adaptor.create(char_literal179);
            this.adaptor.addChild(root_0, char_literal179_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_name_in_protocol_expression1022);
            protocol_name180=this.protocol_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, protocol_name180.getTree());
            char_literal181=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_protocol_expression1024); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal181_tree = this.adaptor.create(char_literal181);
            this.adaptor.addChild(root_0, char_literal181_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    encode_expression_return: (function() {
        ObjectiveC2ansiParser.encode_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.encode_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:219:1: encode_expression : '@encode' '(' type_name ')' ;
    // $ANTLR start "encode_expression"
    encode_expression: function() {
        var retval = new ObjectiveC2ansiParser.encode_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal182 = null;
        var char_literal183 = null;
        var char_literal185 = null;
         var type_name184 = null;

        var string_literal182_tree=null;
        var char_literal183_tree=null;
        var char_literal185_tree=null;

        try {
            // ObjectiveC2ansi.g:219:18: ( '@encode' '(' type_name ')' )
            // ObjectiveC2ansi.g:220:2: '@encode' '(' type_name ')'
            root_0 = this.adaptor.nil();

            string_literal182=this.match(this.input,78,ObjectiveC2ansiParser.FOLLOW_78_in_encode_expression1032); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal182_tree = this.adaptor.create(string_literal182);
            this.adaptor.addChild(root_0, string_literal182_tree);
            }
            char_literal183=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_encode_expression1034); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal183_tree = this.adaptor.create(char_literal183);
            this.adaptor.addChild(root_0, char_literal183_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_name_in_encode_expression1036);
            type_name184=this.type_name();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_name184.getTree());
            char_literal185=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_encode_expression1038); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal185_tree = this.adaptor.create(char_literal185);
            this.adaptor.addChild(root_0, char_literal185_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    exception_declarator_return: (function() {
        ObjectiveC2ansiParser.exception_declarator_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.exception_declarator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:222:1: exception_declarator : declarator ;
    // $ANTLR start "exception_declarator"
    exception_declarator: function() {
        var retval = new ObjectiveC2ansiParser.exception_declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var declarator186 = null;


        try {
            // ObjectiveC2ansi.g:222:21: ( declarator )
            // ObjectiveC2ansi.g:223:2: declarator
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_exception_declarator1046);
            declarator186=this.declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declarator186.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    try_statement_return: (function() {
        ObjectiveC2ansiParser.try_statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.try_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:225:1: try_statement : '@trystatement' ;
    // $ANTLR start "try_statement"
    try_statement: function() {
        var retval = new ObjectiveC2ansiParser.try_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal187 = null;

        var string_literal187_tree=null;

        try {
            // ObjectiveC2ansi.g:225:14: ( '@trystatement' )
            // ObjectiveC2ansi.g:226:2: '@trystatement'
            root_0 = this.adaptor.nil();

            string_literal187=this.match(this.input,79,ObjectiveC2ansiParser.FOLLOW_79_in_try_statement1054); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal187_tree = this.adaptor.create(string_literal187);
            this.adaptor.addChild(root_0, string_literal187_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    catch_statement_return: (function() {
        ObjectiveC2ansiParser.catch_statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.catch_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:228:1: catch_statement : '@catch' '(' exception_declarator ')' statement ;
    // $ANTLR start "catch_statement"
    catch_statement: function() {
        var retval = new ObjectiveC2ansiParser.catch_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal188 = null;
        var char_literal189 = null;
        var char_literal191 = null;
         var exception_declarator190 = null;
         var statement192 = null;

        var string_literal188_tree=null;
        var char_literal189_tree=null;
        var char_literal191_tree=null;

        try {
            // ObjectiveC2ansi.g:228:16: ( '@catch' '(' exception_declarator ')' statement )
            // ObjectiveC2ansi.g:229:2: '@catch' '(' exception_declarator ')' statement
            root_0 = this.adaptor.nil();

            string_literal188=this.match(this.input,80,ObjectiveC2ansiParser.FOLLOW_80_in_catch_statement1062); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal188_tree = this.adaptor.create(string_literal188);
            this.adaptor.addChild(root_0, string_literal188_tree);
            }
            char_literal189=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_catch_statement1064); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal189_tree = this.adaptor.create(char_literal189);
            this.adaptor.addChild(root_0, char_literal189_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_exception_declarator_in_catch_statement1065);
            exception_declarator190=this.exception_declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, exception_declarator190.getTree());
            char_literal191=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_catch_statement1066); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal191_tree = this.adaptor.create(char_literal191);
            this.adaptor.addChild(root_0, char_literal191_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_catch_statement1067);
            statement192=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement192.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    finally_statement_return: (function() {
        ObjectiveC2ansiParser.finally_statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.finally_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:231:1: finally_statement : '@finally' statement ;
    // $ANTLR start "finally_statement"
    finally_statement: function() {
        var retval = new ObjectiveC2ansiParser.finally_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal193 = null;
         var statement194 = null;

        var string_literal193_tree=null;

        try {
            // ObjectiveC2ansi.g:231:18: ( '@finally' statement )
            // ObjectiveC2ansi.g:232:2: '@finally' statement
            root_0 = this.adaptor.nil();

            string_literal193=this.match(this.input,81,ObjectiveC2ansiParser.FOLLOW_81_in_finally_statement1075); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal193_tree = this.adaptor.create(string_literal193);
            this.adaptor.addChild(root_0, string_literal193_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_finally_statement1077);
            statement194=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement194.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    throw_statement_return: (function() {
        ObjectiveC2ansiParser.throw_statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.throw_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:234:1: throw_statement : '@throw' '(' IDENTIFIER ')' ;
    // $ANTLR start "throw_statement"
    throw_statement: function() {
        var retval = new ObjectiveC2ansiParser.throw_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal195 = null;
        var char_literal196 = null;
        var IDENTIFIER197 = null;
        var char_literal198 = null;

        var string_literal195_tree=null;
        var char_literal196_tree=null;
        var IDENTIFIER197_tree=null;
        var char_literal198_tree=null;

        try {
            // ObjectiveC2ansi.g:234:16: ( '@throw' '(' IDENTIFIER ')' )
            // ObjectiveC2ansi.g:235:2: '@throw' '(' IDENTIFIER ')'
            root_0 = this.adaptor.nil();

            string_literal195=this.match(this.input,82,ObjectiveC2ansiParser.FOLLOW_82_in_throw_statement1085); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal195_tree = this.adaptor.create(string_literal195);
            this.adaptor.addChild(root_0, string_literal195_tree);
            }
            char_literal196=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_throw_statement1087); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal196_tree = this.adaptor.create(char_literal196);
            this.adaptor.addChild(root_0, char_literal196_tree);
            }
            IDENTIFIER197=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_throw_statement1088); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER197_tree = this.adaptor.create(IDENTIFIER197);
            this.adaptor.addChild(root_0, IDENTIFIER197_tree);
            }
            char_literal198=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_throw_statement1089); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal198_tree = this.adaptor.create(char_literal198);
            this.adaptor.addChild(root_0, char_literal198_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    try_block_return: (function() {
        ObjectiveC2ansiParser.try_block_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.try_block_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:237:1: try_block : try_statement catch_statement ( finally_statement )? ;
    // $ANTLR start "try_block"
    try_block: function() {
        var retval = new ObjectiveC2ansiParser.try_block_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var try_statement199 = null;
         var catch_statement200 = null;
         var finally_statement201 = null;


        try {
            // ObjectiveC2ansi.g:237:10: ( try_statement catch_statement ( finally_statement )? )
            // ObjectiveC2ansi.g:238:2: try_statement catch_statement ( finally_statement )?
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_try_statement_in_try_block1097);
            try_statement199=this.try_statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, try_statement199.getTree());
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_catch_statement_in_try_block1100);
            catch_statement200=this.catch_statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, catch_statement200.getTree());
            // ObjectiveC2ansi.g:240:2: ( finally_statement )?
            var alt42=2;
            var LA42_0 = this.input.LA(1);

            if ( (LA42_0==81) ) {
                alt42=1;
            }
            switch (alt42) {
                case 1 :
                    // ObjectiveC2ansi.g:240:4: finally_statement
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_finally_statement_in_try_block1105);
                    finally_statement201=this.finally_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, finally_statement201.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    synchronized_statement_return: (function() {
        ObjectiveC2ansiParser.synchronized_statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.synchronized_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:242:1: synchronized_statement : '@synchronized' '(' IDENTIFIER ')' statement ;
    // $ANTLR start "synchronized_statement"
    synchronized_statement: function() {
        var retval = new ObjectiveC2ansiParser.synchronized_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal202 = null;
        var char_literal203 = null;
        var IDENTIFIER204 = null;
        var char_literal205 = null;
         var statement206 = null;

        var string_literal202_tree=null;
        var char_literal203_tree=null;
        var IDENTIFIER204_tree=null;
        var char_literal205_tree=null;

        try {
            // ObjectiveC2ansi.g:242:23: ( '@synchronized' '(' IDENTIFIER ')' statement )
            // ObjectiveC2ansi.g:243:2: '@synchronized' '(' IDENTIFIER ')' statement
            root_0 = this.adaptor.nil();

            string_literal202=this.match(this.input,83,ObjectiveC2ansiParser.FOLLOW_83_in_synchronized_statement1116); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal202_tree = this.adaptor.create(string_literal202);
            this.adaptor.addChild(root_0, string_literal202_tree);
            }
            char_literal203=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_synchronized_statement1118); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal203_tree = this.adaptor.create(char_literal203);
            this.adaptor.addChild(root_0, char_literal203_tree);
            }
            IDENTIFIER204=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_synchronized_statement1120); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER204_tree = this.adaptor.create(IDENTIFIER204);
            this.adaptor.addChild(root_0, IDENTIFIER204_tree);
            }
            char_literal205=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_synchronized_statement1122); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal205_tree = this.adaptor.create(char_literal205);
            this.adaptor.addChild(root_0, char_literal205_tree);
            }
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_synchronized_statement1124);
            statement206=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement206.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_definition_return: (function() {
        ObjectiveC2ansiParser.function_definition_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.function_definition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:245:1: function_definition : declaration_specifiers declarator compound_statement ;
    // $ANTLR start "function_definition"
    function_definition: function() {
        var retval = new ObjectiveC2ansiParser.function_definition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var declaration_specifiers207 = null;
         var declarator208 = null;
         var compound_statement209 = null;


        try {
            // ObjectiveC2ansi.g:245:21: ( declaration_specifiers declarator compound_statement )
            // ObjectiveC2ansi.g:245:23: declaration_specifiers declarator compound_statement
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declaration_specifiers_in_function_definition1132);
            declaration_specifiers207=this.declaration_specifiers();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration_specifiers207.getTree());
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_function_definition1134);
            declarator208=this.declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declarator208.getTree());
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_compound_statement_in_function_definition1136);
            compound_statement209=this.compound_statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, compound_statement209.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    declaration_return: (function() {
        ObjectiveC2ansiParser.declaration_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:247:1: declaration : declaration_specifiers ( init_declarator_list )? ';' ;
    // $ANTLR start "declaration"
    declaration: function() {
        var retval = new ObjectiveC2ansiParser.declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal212 = null;
         var declaration_specifiers210 = null;
         var init_declarator_list211 = null;

        var char_literal212_tree=null;

        try {
            // ObjectiveC2ansi.g:247:13: ( declaration_specifiers ( init_declarator_list )? ';' )
            // ObjectiveC2ansi.g:247:15: declaration_specifiers ( init_declarator_list )? ';'
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declaration_specifiers_in_declaration1145);
            declaration_specifiers210=this.declaration_specifiers();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration_specifiers210.getTree());
            // ObjectiveC2ansi.g:247:38: ( init_declarator_list )?
            var alt43=2;
            var LA43_0 = this.input.LA(1);

            if ( (LA43_0==IDENTIFIER||LA43_0==40||LA43_0==93) ) {
                alt43=1;
            }
            switch (alt43) {
                case 1 :
                    // ObjectiveC2ansi.g:0:0: init_declarator_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_init_declarator_list_in_declaration1147);
                    init_declarator_list211=this.init_declarator_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, init_declarator_list211.getTree());


                    break;

            }

            char_literal212=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_declaration1150); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal212_tree = this.adaptor.create(char_literal212);
            this.adaptor.addChild(root_0, char_literal212_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    declaration_specifiers_return: (function() {
        ObjectiveC2ansiParser.declaration_specifiers_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.declaration_specifiers_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:249:1: declaration_specifiers : ( storage_class_specifier | type_specifier | type_qualifier )+ ;
    // $ANTLR start "declaration_specifiers"
    declaration_specifiers: function() {
        var retval = new ObjectiveC2ansiParser.declaration_specifiers_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var storage_class_specifier213 = null;
         var type_specifier214 = null;
         var type_qualifier215 = null;


        try {
            // ObjectiveC2ansi.g:250:3: ( ( storage_class_specifier | type_specifier | type_qualifier )+ )
            // ObjectiveC2ansi.g:250:5: ( storage_class_specifier | type_specifier | type_qualifier )+
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:250:5: ( storage_class_specifier | type_specifier | type_qualifier )+
            var cnt44=0;
            loop44:
            do {
                var alt44=4;
                switch ( this.input.LA(1) ) {
                case IDENTIFIER:
                    var LA44_2 = this.input.LA(2);

                    if ( (this.synpred100_ObjectiveC2ansi()) ) {
                        alt44=2;
                    }


                    break;
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                    alt44=1;
                    break;
                case 55:
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 90:
                case 91:
                case 92:
                    alt44=2;
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                    alt44=3;
                    break;

                }

                switch (alt44) {
                case 1 :
                    // ObjectiveC2ansi.g:250:6: storage_class_specifier
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_storage_class_specifier_in_declaration_specifiers1162);
                    storage_class_specifier213=this.storage_class_specifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, storage_class_specifier213.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:250:32: type_specifier
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_specifier_in_declaration_specifiers1166);
                    type_specifier214=this.type_specifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_specifier214.getTree());


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:250:49: type_qualifier
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_qualifier_in_declaration_specifiers1170);
                    type_qualifier215=this.type_qualifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_qualifier215.getTree());


                    break;

                default :
                    if ( cnt44 >= 1 ) {
                        break loop44;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(44, this.input);
                        throw eee;
                }
                cnt44++;
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    storage_class_specifier_return: (function() {
        ObjectiveC2ansiParser.storage_class_specifier_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.storage_class_specifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:252:1: storage_class_specifier : ( 'auto' | 'register' | 'static' | 'extern' | 'typedef' );
    // $ANTLR start "storage_class_specifier"
    storage_class_specifier: function() {
        var retval = new ObjectiveC2ansiParser.storage_class_specifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set216 = null;

        var set216_tree=null;

        try {
            // ObjectiveC2ansi.g:252:24: ( 'auto' | 'register' | 'static' | 'extern' | 'typedef' )
            // ObjectiveC2ansi.g:
            root_0 = this.adaptor.nil();

            set216=this.input.LT(1);
            if ( (this.input.LA(1)>=84 && this.input.LA(1)<=88) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set216));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    init_declarator_list_return: (function() {
        ObjectiveC2ansiParser.init_declarator_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.init_declarator_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:254:1: init_declarator_list : init_declarator ( ',' init_declarator )* ;
    // $ANTLR start "init_declarator_list"
    init_declarator_list: function() {
        var retval = new ObjectiveC2ansiParser.init_declarator_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal218 = null;
         var init_declarator217 = null;
         var init_declarator219 = null;

        var char_literal218_tree=null;

        try {
            // ObjectiveC2ansi.g:254:22: ( init_declarator ( ',' init_declarator )* )
            // ObjectiveC2ansi.g:254:24: init_declarator ( ',' init_declarator )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_init_declarator_in_init_declarator_list1204);
            init_declarator217=this.init_declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, init_declarator217.getTree());
            // ObjectiveC2ansi.g:254:40: ( ',' init_declarator )*
            loop45:
            do {
                var alt45=2;
                var LA45_0 = this.input.LA(1);

                if ( (LA45_0==46) ) {
                    alt45=1;
                }


                switch (alt45) {
                case 1 :
                    // ObjectiveC2ansi.g:254:41: ',' init_declarator
                    char_literal218=this.match(this.input,46,ObjectiveC2ansiParser.FOLLOW_46_in_init_declarator_list1207); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal218_tree = this.adaptor.create(char_literal218);
                    this.adaptor.addChild(root_0, char_literal218_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_init_declarator_in_init_declarator_list1209);
                    init_declarator219=this.init_declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, init_declarator219.getTree());


                    break;

                default :
                    break loop45;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    init_declarator_return: (function() {
        ObjectiveC2ansiParser.init_declarator_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.init_declarator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:255:1: init_declarator : declarator ( '=' initializer )? ;
    // $ANTLR start "init_declarator"
    init_declarator: function() {
        var retval = new ObjectiveC2ansiParser.init_declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal221 = null;
         var declarator220 = null;
         var initializer222 = null;

        var char_literal221_tree=null;

        try {
            // ObjectiveC2ansi.g:255:17: ( declarator ( '=' initializer )? )
            // ObjectiveC2ansi.g:255:19: declarator ( '=' initializer )?
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_init_declarator1219);
            declarator220=this.declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declarator220.getTree());
            // ObjectiveC2ansi.g:255:30: ( '=' initializer )?
            var alt46=2;
            var LA46_0 = this.input.LA(1);

            if ( (LA46_0==89) ) {
                alt46=1;
            }
            switch (alt46) {
                case 1 :
                    // ObjectiveC2ansi.g:255:31: '=' initializer
                    char_literal221=this.match(this.input,89,ObjectiveC2ansiParser.FOLLOW_89_in_init_declarator1222); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal221_tree = this.adaptor.create(char_literal221);
                    this.adaptor.addChild(root_0, char_literal221_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_initializer_in_init_declarator1224);
                    initializer222=this.initializer();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, initializer222.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    struct_or_union_specifier_return: (function() {
        ObjectiveC2ansiParser.struct_or_union_specifier_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.struct_or_union_specifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:257:1: struct_or_union_specifier : ( 'struct' | 'union' ) ( IDENTIFIER | ( IDENTIFIER )? '{' ( struct_declaration )+ '}' ) ;
    // $ANTLR start "struct_or_union_specifier"
    struct_or_union_specifier: function() {
        var retval = new ObjectiveC2ansiParser.struct_or_union_specifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set223 = null;
        var IDENTIFIER224 = null;
        var IDENTIFIER225 = null;
        var char_literal226 = null;
        var char_literal228 = null;
         var struct_declaration227 = null;

        var set223_tree=null;
        var IDENTIFIER224_tree=null;
        var IDENTIFIER225_tree=null;
        var char_literal226_tree=null;
        var char_literal228_tree=null;

        try {
            // ObjectiveC2ansi.g:257:26: ( ( 'struct' | 'union' ) ( IDENTIFIER | ( IDENTIFIER )? '{' ( struct_declaration )+ '}' ) )
            // ObjectiveC2ansi.g:257:28: ( 'struct' | 'union' ) ( IDENTIFIER | ( IDENTIFIER )? '{' ( struct_declaration )+ '}' )
            root_0 = this.adaptor.nil();

            set223=this.input.LT(1);
            if ( (this.input.LA(1)>=90 && this.input.LA(1)<=91) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set223));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }

            // ObjectiveC2ansi.g:258:3: ( IDENTIFIER | ( IDENTIFIER )? '{' ( struct_declaration )+ '}' )
            var alt49=2;
            var LA49_0 = this.input.LA(1);

            if ( (LA49_0==IDENTIFIER) ) {
                var LA49_1 = this.input.LA(2);

                if ( (this.synpred109_ObjectiveC2ansi()) ) {
                    alt49=1;
                }
                else if ( (true) ) {
                    alt49=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 49, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA49_0==47) ) {
                alt49=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 49, 0, this.input);

                throw nvae;
            }
            switch (alt49) {
                case 1 :
                    // ObjectiveC2ansi.g:258:5: IDENTIFIER
                    IDENTIFIER224=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_struct_or_union_specifier1247); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENTIFIER224_tree = this.adaptor.create(IDENTIFIER224);
                    this.adaptor.addChild(root_0, IDENTIFIER224_tree);
                    }


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:258:18: ( IDENTIFIER )? '{' ( struct_declaration )+ '}'
                    // ObjectiveC2ansi.g:258:18: ( IDENTIFIER )?
                    var alt47=2;
                    var LA47_0 = this.input.LA(1);

                    if ( (LA47_0==IDENTIFIER) ) {
                        alt47=1;
                    }
                    switch (alt47) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: IDENTIFIER
                            IDENTIFIER225=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_struct_or_union_specifier1251); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            IDENTIFIER225_tree = this.adaptor.create(IDENTIFIER225);
                            this.adaptor.addChild(root_0, IDENTIFIER225_tree);
                            }


                            break;

                    }

                    char_literal226=this.match(this.input,47,ObjectiveC2ansiParser.FOLLOW_47_in_struct_or_union_specifier1254); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal226_tree = this.adaptor.create(char_literal226);
                    this.adaptor.addChild(root_0, char_literal226_tree);
                    }
                    // ObjectiveC2ansi.g:258:34: ( struct_declaration )+
                    var cnt48=0;
                    loop48:
                    do {
                        var alt48=2;
                        var LA48_0 = this.input.LA(1);

                        if ( (LA48_0==IDENTIFIER||(LA48_0>=55 && LA48_0<=72)||(LA48_0>=90 && LA48_0<=92)) ) {
                            alt48=1;
                        }


                        switch (alt48) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: struct_declaration
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_struct_declaration_in_struct_or_union_specifier1256);
                            struct_declaration227=this.struct_declaration();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_declaration227.getTree());


                            break;

                        default :
                            if ( cnt48 >= 1 ) {
                                break loop48;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(48, this.input);
                                throw eee;
                        }
                        cnt48++;
                    } while (true);

                    char_literal228=this.match(this.input,48,ObjectiveC2ansiParser.FOLLOW_48_in_struct_or_union_specifier1259); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal228_tree = this.adaptor.create(char_literal228);
                    this.adaptor.addChild(root_0, char_literal228_tree);
                    }


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    struct_declaration_return: (function() {
        ObjectiveC2ansiParser.struct_declaration_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.struct_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:260:1: struct_declaration : specifier_qualifier_list struct_declarator_list ';' ;
    // $ANTLR start "struct_declaration"
    struct_declaration: function() {
        var retval = new ObjectiveC2ansiParser.struct_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal231 = null;
         var specifier_qualifier_list229 = null;
         var struct_declarator_list230 = null;

        var char_literal231_tree=null;

        try {
            // ObjectiveC2ansi.g:260:20: ( specifier_qualifier_list struct_declarator_list ';' )
            // ObjectiveC2ansi.g:260:22: specifier_qualifier_list struct_declarator_list ';'
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_specifier_qualifier_list_in_struct_declaration1269);
            specifier_qualifier_list229=this.specifier_qualifier_list();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, specifier_qualifier_list229.getTree());
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_struct_declarator_list_in_struct_declaration1271);
            struct_declarator_list230=this.struct_declarator_list();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_declarator_list230.getTree());
            char_literal231=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_struct_declaration1273); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal231_tree = this.adaptor.create(char_literal231);
            this.adaptor.addChild(root_0, char_literal231_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    specifier_qualifier_list_return: (function() {
        ObjectiveC2ansiParser.specifier_qualifier_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.specifier_qualifier_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:262:1: specifier_qualifier_list : ( type_specifier | type_qualifier )+ ;
    // $ANTLR start "specifier_qualifier_list"
    specifier_qualifier_list: function() {
        var retval = new ObjectiveC2ansiParser.specifier_qualifier_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var type_specifier232 = null;
         var type_qualifier233 = null;


        try {
            // ObjectiveC2ansi.g:262:26: ( ( type_specifier | type_qualifier )+ )
            // ObjectiveC2ansi.g:262:28: ( type_specifier | type_qualifier )+
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:262:28: ( type_specifier | type_qualifier )+
            var cnt50=0;
            loop50:
            do {
                var alt50=3;
                switch ( this.input.LA(1) ) {
                case IDENTIFIER:
                    var LA50_2 = this.input.LA(2);

                    if ( (this.synpred112_ObjectiveC2ansi()) ) {
                        alt50=1;
                    }


                    break;
                case 55:
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 90:
                case 91:
                case 92:
                    alt50=1;
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                    alt50=2;
                    break;

                }

                switch (alt50) {
                case 1 :
                    // ObjectiveC2ansi.g:262:29: type_specifier
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_specifier_in_specifier_qualifier_list1283);
                    type_specifier232=this.type_specifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_specifier232.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:262:46: type_qualifier
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_qualifier_in_specifier_qualifier_list1287);
                    type_qualifier233=this.type_qualifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_qualifier233.getTree());


                    break;

                default :
                    if ( cnt50 >= 1 ) {
                        break loop50;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(50, this.input);
                        throw eee;
                }
                cnt50++;
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    struct_declarator_list_return: (function() {
        ObjectiveC2ansiParser.struct_declarator_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.struct_declarator_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:264:1: struct_declarator_list : struct_declarator ( ',' struct_declarator )* ;
    // $ANTLR start "struct_declarator_list"
    struct_declarator_list: function() {
        var retval = new ObjectiveC2ansiParser.struct_declarator_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal235 = null;
         var struct_declarator234 = null;
         var struct_declarator236 = null;

        var char_literal235_tree=null;

        try {
            // ObjectiveC2ansi.g:264:24: ( struct_declarator ( ',' struct_declarator )* )
            // ObjectiveC2ansi.g:264:26: struct_declarator ( ',' struct_declarator )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_struct_declarator_in_struct_declarator_list1298);
            struct_declarator234=this.struct_declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_declarator234.getTree());
            // ObjectiveC2ansi.g:264:44: ( ',' struct_declarator )*
            loop51:
            do {
                var alt51=2;
                var LA51_0 = this.input.LA(1);

                if ( (LA51_0==46) ) {
                    alt51=1;
                }


                switch (alt51) {
                case 1 :
                    // ObjectiveC2ansi.g:264:45: ',' struct_declarator
                    char_literal235=this.match(this.input,46,ObjectiveC2ansiParser.FOLLOW_46_in_struct_declarator_list1301); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal235_tree = this.adaptor.create(char_literal235);
                    this.adaptor.addChild(root_0, char_literal235_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_struct_declarator_in_struct_declarator_list1303);
                    struct_declarator236=this.struct_declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_declarator236.getTree());


                    break;

                default :
                    break loop51;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    struct_declarator_return: (function() {
        ObjectiveC2ansiParser.struct_declarator_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.struct_declarator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:266:1: struct_declarator : ( declarator | ( declarator )? ':' constant );
    // $ANTLR start "struct_declarator"
    struct_declarator: function() {
        var retval = new ObjectiveC2ansiParser.struct_declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal239 = null;
         var declarator237 = null;
         var declarator238 = null;
         var constant240 = null;

        var char_literal239_tree=null;

        try {
            // ObjectiveC2ansi.g:266:19: ( declarator | ( declarator )? ':' constant )
            var alt53=2;
            switch ( this.input.LA(1) ) {
            case 93:
                var LA53_1 = this.input.LA(2);

                if ( (this.synpred115_ObjectiveC2ansi()) ) {
                    alt53=1;
                }
                else if ( (true) ) {
                    alt53=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 53, 1, this.input);

                    throw nvae;
                }
                break;
            case IDENTIFIER:
                var LA53_2 = this.input.LA(2);

                if ( (this.synpred115_ObjectiveC2ansi()) ) {
                    alt53=1;
                }
                else if ( (true) ) {
                    alt53=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 53, 2, this.input);

                    throw nvae;
                }
                break;
            case 40:
                var LA53_3 = this.input.LA(2);

                if ( (this.synpred115_ObjectiveC2ansi()) ) {
                    alt53=1;
                }
                else if ( (true) ) {
                    alt53=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 53, 3, this.input);

                    throw nvae;
                }
                break;
            case 38:
                alt53=2;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 53, 0, this.input);

                throw nvae;
            }

            switch (alt53) {
                case 1 :
                    // ObjectiveC2ansi.g:266:21: declarator
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_struct_declarator1314);
                    declarator237=this.declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declarator237.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:266:34: ( declarator )? ':' constant
                    root_0 = this.adaptor.nil();

                    // ObjectiveC2ansi.g:266:34: ( declarator )?
                    var alt52=2;
                    var LA52_0 = this.input.LA(1);

                    if ( (LA52_0==IDENTIFIER||LA52_0==40||LA52_0==93) ) {
                        alt52=1;
                    }
                    switch (alt52) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: declarator
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_struct_declarator1318);
                            declarator238=this.declarator();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declarator238.getTree());


                            break;

                    }

                    char_literal239=this.match(this.input,38,ObjectiveC2ansiParser.FOLLOW_38_in_struct_declarator1321); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal239_tree = this.adaptor.create(char_literal239);
                    this.adaptor.addChild(root_0, char_literal239_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_constant_in_struct_declarator1323);
                    constant240=this.constant();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant240.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    enum_specifier_return: (function() {
        ObjectiveC2ansiParser.enum_specifier_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.enum_specifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:268:1: enum_specifier : 'enum' ( identifier ( '{' enumerator_list '}' )? | '{' enumerator_list '}' ) ;
    // $ANTLR start "enum_specifier"
    enum_specifier: function() {
        var retval = new ObjectiveC2ansiParser.enum_specifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal241 = null;
        var char_literal243 = null;
        var char_literal245 = null;
        var char_literal246 = null;
        var char_literal248 = null;
         var identifier242 = null;
         var enumerator_list244 = null;
         var enumerator_list247 = null;

        var string_literal241_tree=null;
        var char_literal243_tree=null;
        var char_literal245_tree=null;
        var char_literal246_tree=null;
        var char_literal248_tree=null;

        try {
            // ObjectiveC2ansi.g:268:16: ( 'enum' ( identifier ( '{' enumerator_list '}' )? | '{' enumerator_list '}' ) )
            // ObjectiveC2ansi.g:268:18: 'enum' ( identifier ( '{' enumerator_list '}' )? | '{' enumerator_list '}' )
            root_0 = this.adaptor.nil();

            string_literal241=this.match(this.input,92,ObjectiveC2ansiParser.FOLLOW_92_in_enum_specifier1331); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal241_tree = this.adaptor.create(string_literal241);
            this.adaptor.addChild(root_0, string_literal241_tree);
            }
            // ObjectiveC2ansi.g:269:3: ( identifier ( '{' enumerator_list '}' )? | '{' enumerator_list '}' )
            var alt55=2;
            var LA55_0 = this.input.LA(1);

            if ( (LA55_0==IDENTIFIER) ) {
                alt55=1;
            }
            else if ( (LA55_0==47) ) {
                alt55=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 55, 0, this.input);

                throw nvae;
            }
            switch (alt55) {
                case 1 :
                    // ObjectiveC2ansi.g:269:5: identifier ( '{' enumerator_list '}' )?
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_identifier_in_enum_specifier1338);
                    identifier242=this.identifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, identifier242.getTree());
                    // ObjectiveC2ansi.g:269:16: ( '{' enumerator_list '}' )?
                    var alt54=2;
                    alt54 = this.dfa54.predict(this.input);
                    switch (alt54) {
                        case 1 :
                            // ObjectiveC2ansi.g:269:17: '{' enumerator_list '}'
                            char_literal243=this.match(this.input,47,ObjectiveC2ansiParser.FOLLOW_47_in_enum_specifier1341); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            char_literal243_tree = this.adaptor.create(char_literal243);
                            this.adaptor.addChild(root_0, char_literal243_tree);
                            }
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_enumerator_list_in_enum_specifier1343);
                            enumerator_list244=this.enumerator_list();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, enumerator_list244.getTree());
                            char_literal245=this.match(this.input,48,ObjectiveC2ansiParser.FOLLOW_48_in_enum_specifier1345); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            char_literal245_tree = this.adaptor.create(char_literal245);
                            this.adaptor.addChild(root_0, char_literal245_tree);
                            }


                            break;

                    }



                    break;
                case 2 :
                    // ObjectiveC2ansi.g:270:5: '{' enumerator_list '}'
                    char_literal246=this.match(this.input,47,ObjectiveC2ansiParser.FOLLOW_47_in_enum_specifier1354); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal246_tree = this.adaptor.create(char_literal246);
                    this.adaptor.addChild(root_0, char_literal246_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_enumerator_list_in_enum_specifier1356);
                    enumerator_list247=this.enumerator_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, enumerator_list247.getTree());
                    char_literal248=this.match(this.input,48,ObjectiveC2ansiParser.FOLLOW_48_in_enum_specifier1358); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal248_tree = this.adaptor.create(char_literal248);
                    this.adaptor.addChild(root_0, char_literal248_tree);
                    }


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    enumerator_list_return: (function() {
        ObjectiveC2ansiParser.enumerator_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.enumerator_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:271:1: enumerator_list : enumerator ( ',' enumerator )* ;
    // $ANTLR start "enumerator_list"
    enumerator_list: function() {
        var retval = new ObjectiveC2ansiParser.enumerator_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal250 = null;
         var enumerator249 = null;
         var enumerator251 = null;

        var char_literal250_tree=null;

        try {
            // ObjectiveC2ansi.g:271:17: ( enumerator ( ',' enumerator )* )
            // ObjectiveC2ansi.g:271:19: enumerator ( ',' enumerator )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_enumerator_in_enumerator_list1367);
            enumerator249=this.enumerator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, enumerator249.getTree());
            // ObjectiveC2ansi.g:271:30: ( ',' enumerator )*
            loop56:
            do {
                var alt56=2;
                var LA56_0 = this.input.LA(1);

                if ( (LA56_0==46) ) {
                    alt56=1;
                }


                switch (alt56) {
                case 1 :
                    // ObjectiveC2ansi.g:271:31: ',' enumerator
                    char_literal250=this.match(this.input,46,ObjectiveC2ansiParser.FOLLOW_46_in_enumerator_list1370); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal250_tree = this.adaptor.create(char_literal250);
                    this.adaptor.addChild(root_0, char_literal250_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_enumerator_in_enumerator_list1372);
                    enumerator251=this.enumerator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, enumerator251.getTree());


                    break;

                default :
                    break loop56;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    enumerator_return: (function() {
        ObjectiveC2ansiParser.enumerator_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.enumerator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:272:1: enumerator : identifier ( '=' constant_expression )? ;
    // $ANTLR start "enumerator"
    enumerator: function() {
        var retval = new ObjectiveC2ansiParser.enumerator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal253 = null;
         var identifier252 = null;
         var constant_expression254 = null;

        var char_literal253_tree=null;

        try {
            // ObjectiveC2ansi.g:272:12: ( identifier ( '=' constant_expression )? )
            // ObjectiveC2ansi.g:272:14: identifier ( '=' constant_expression )?
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_identifier_in_enumerator1382);
            identifier252=this.identifier();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, identifier252.getTree());
            // ObjectiveC2ansi.g:272:25: ( '=' constant_expression )?
            var alt57=2;
            var LA57_0 = this.input.LA(1);

            if ( (LA57_0==89) ) {
                alt57=1;
            }
            switch (alt57) {
                case 1 :
                    // ObjectiveC2ansi.g:272:26: '=' constant_expression
                    char_literal253=this.match(this.input,89,ObjectiveC2ansiParser.FOLLOW_89_in_enumerator1385); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal253_tree = this.adaptor.create(char_literal253);
                    this.adaptor.addChild(root_0, char_literal253_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_constant_expression_in_enumerator1387);
                    constant_expression254=this.constant_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant_expression254.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    declarator_return: (function() {
        ObjectiveC2ansiParser.declarator_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.declarator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:274:1: declarator : ( '*' ( type_qualifier )* declarator | direct_declarator );
    // $ANTLR start "declarator"
    declarator: function() {
        var retval = new ObjectiveC2ansiParser.declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal255 = null;
         var type_qualifier256 = null;
         var declarator257 = null;
         var direct_declarator258 = null;

        var char_literal255_tree=null;

        try {
            // ObjectiveC2ansi.g:274:12: ( '*' ( type_qualifier )* declarator | direct_declarator )
            var alt59=2;
            var LA59_0 = this.input.LA(1);

            if ( (LA59_0==93) ) {
                alt59=1;
            }
            else if ( (LA59_0==IDENTIFIER||LA59_0==40) ) {
                alt59=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 59, 0, this.input);

                throw nvae;
            }
            switch (alt59) {
                case 1 :
                    // ObjectiveC2ansi.g:274:14: '*' ( type_qualifier )* declarator
                    root_0 = this.adaptor.nil();

                    char_literal255=this.match(this.input,93,ObjectiveC2ansiParser.FOLLOW_93_in_declarator1397); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal255_tree = this.adaptor.create(char_literal255);
                    this.adaptor.addChild(root_0, char_literal255_tree);
                    }
                    // ObjectiveC2ansi.g:274:18: ( type_qualifier )*
                    loop58:
                    do {
                        var alt58=2;
                        var LA58_0 = this.input.LA(1);

                        if ( ((LA58_0>=65 && LA58_0<=72)) ) {
                            alt58=1;
                        }


                        switch (alt58) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: type_qualifier
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_qualifier_in_declarator1399);
                            type_qualifier256=this.type_qualifier();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_qualifier256.getTree());


                            break;

                        default :
                            break loop58;
                        }
                    } while (true);

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_declarator1402);
                    declarator257=this.declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declarator257.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:274:47: direct_declarator
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_direct_declarator_in_declarator1406);
                    direct_declarator258=this.direct_declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, direct_declarator258.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    direct_declarator_return: (function() {
        ObjectiveC2ansiParser.direct_declarator_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.direct_declarator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:276:1: direct_declarator : ( identifier ( declarator_suffix )* | '(' declarator ')' ( declarator_suffix )* );
    // $ANTLR start "direct_declarator"
    direct_declarator: function() {
        var retval = new ObjectiveC2ansiParser.direct_declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal261 = null;
        var char_literal263 = null;
         var identifier259 = null;
         var declarator_suffix260 = null;
         var declarator262 = null;
         var declarator_suffix264 = null;

        var char_literal261_tree=null;
        var char_literal263_tree=null;

        try {
            // ObjectiveC2ansi.g:276:19: ( identifier ( declarator_suffix )* | '(' declarator ')' ( declarator_suffix )* )
            var alt62=2;
            var LA62_0 = this.input.LA(1);

            if ( (LA62_0==IDENTIFIER) ) {
                alt62=1;
            }
            else if ( (LA62_0==40) ) {
                alt62=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 62, 0, this.input);

                throw nvae;
            }
            switch (alt62) {
                case 1 :
                    // ObjectiveC2ansi.g:276:21: identifier ( declarator_suffix )*
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_identifier_in_direct_declarator1415);
                    identifier259=this.identifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, identifier259.getTree());
                    // ObjectiveC2ansi.g:276:32: ( declarator_suffix )*
                    loop60:
                    do {
                        var alt60=2;
                        alt60 = this.dfa60.predict(this.input);
                        switch (alt60) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: declarator_suffix
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_suffix_in_direct_declarator1417);
                            declarator_suffix260=this.declarator_suffix();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declarator_suffix260.getTree());


                            break;

                        default :
                            break loop60;
                        }
                    } while (true);



                    break;
                case 2 :
                    // ObjectiveC2ansi.g:277:21: '(' declarator ')' ( declarator_suffix )*
                    root_0 = this.adaptor.nil();

                    char_literal261=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_direct_declarator1440); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal261_tree = this.adaptor.create(char_literal261);
                    this.adaptor.addChild(root_0, char_literal261_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_direct_declarator1442);
                    declarator262=this.declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declarator262.getTree());
                    char_literal263=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_direct_declarator1444); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal263_tree = this.adaptor.create(char_literal263);
                    this.adaptor.addChild(root_0, char_literal263_tree);
                    }
                    // ObjectiveC2ansi.g:277:40: ( declarator_suffix )*
                    loop61:
                    do {
                        var alt61=2;
                        alt61 = this.dfa61.predict(this.input);
                        switch (alt61) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: declarator_suffix
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_suffix_in_direct_declarator1446);
                            declarator_suffix264=this.declarator_suffix();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declarator_suffix264.getTree());


                            break;

                        default :
                            break loop61;
                        }
                    } while (true);



                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    declarator_suffix_return: (function() {
        ObjectiveC2ansiParser.declarator_suffix_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.declarator_suffix_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:279:1: declarator_suffix : ( '[' ( constant_expression )? ']' | '(' ( parameter_list )? ')' );
    // $ANTLR start "declarator_suffix"
    declarator_suffix: function() {
        var retval = new ObjectiveC2ansiParser.declarator_suffix_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal265 = null;
        var char_literal267 = null;
        var char_literal268 = null;
        var char_literal270 = null;
         var constant_expression266 = null;
         var parameter_list269 = null;

        var char_literal265_tree=null;
        var char_literal267_tree=null;
        var char_literal268_tree=null;
        var char_literal270_tree=null;

        try {
            // ObjectiveC2ansi.g:279:19: ( '[' ( constant_expression )? ']' | '(' ( parameter_list )? ')' )
            var alt65=2;
            var LA65_0 = this.input.LA(1);

            if ( (LA65_0==74) ) {
                alt65=1;
            }
            else if ( (LA65_0==40) ) {
                alt65=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 65, 0, this.input);

                throw nvae;
            }
            switch (alt65) {
                case 1 :
                    // ObjectiveC2ansi.g:279:21: '[' ( constant_expression )? ']'
                    root_0 = this.adaptor.nil();

                    char_literal265=this.match(this.input,74,ObjectiveC2ansiParser.FOLLOW_74_in_declarator_suffix1456); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal265_tree = this.adaptor.create(char_literal265);
                    this.adaptor.addChild(root_0, char_literal265_tree);
                    }
                    // ObjectiveC2ansi.g:279:25: ( constant_expression )?
                    var alt63=2;
                    var LA63_0 = this.input.LA(1);

                    if ( ((LA63_0>=IDENTIFIER && LA63_0<=FLOATING_POINT_LITERAL)||LA63_0==40||LA63_0==43||LA63_0==54||(LA63_0>=73 && LA63_0<=74)||(LA63_0>=77 && LA63_0<=78)||LA63_0==93||LA63_0==122||(LA63_0>=130 && LA63_0<=134)) ) {
                        alt63=1;
                    }
                    switch (alt63) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: constant_expression
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_constant_expression_in_declarator_suffix1458);
                            constant_expression266=this.constant_expression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant_expression266.getTree());


                            break;

                    }

                    char_literal267=this.match(this.input,75,ObjectiveC2ansiParser.FOLLOW_75_in_declarator_suffix1461); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal267_tree = this.adaptor.create(char_literal267);
                    this.adaptor.addChild(root_0, char_literal267_tree);
                    }


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:280:7: '(' ( parameter_list )? ')'
                    root_0 = this.adaptor.nil();

                    char_literal268=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_declarator_suffix1469); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal268_tree = this.adaptor.create(char_literal268);
                    this.adaptor.addChild(root_0, char_literal268_tree);
                    }
                    // ObjectiveC2ansi.g:280:11: ( parameter_list )?
                    var alt64=2;
                    var LA64_0 = this.input.LA(1);

                    if ( (LA64_0==IDENTIFIER||(LA64_0>=55 && LA64_0<=72)||(LA64_0>=84 && LA64_0<=88)||(LA64_0>=90 && LA64_0<=92)) ) {
                        alt64=1;
                    }
                    switch (alt64) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: parameter_list
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_parameter_list_in_declarator_suffix1471);
                            parameter_list269=this.parameter_list();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, parameter_list269.getTree());


                            break;

                    }

                    char_literal270=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_declarator_suffix1474); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal270_tree = this.adaptor.create(char_literal270);
                    this.adaptor.addChild(root_0, char_literal270_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    parameter_list_return: (function() {
        ObjectiveC2ansiParser.parameter_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.parameter_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:282:1: parameter_list : parameter_declaration_list ( ',' '...' )? ;
    // $ANTLR start "parameter_list"
    parameter_list: function() {
        var retval = new ObjectiveC2ansiParser.parameter_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal272 = null;
        var string_literal273 = null;
         var parameter_declaration_list271 = null;

        var char_literal272_tree=null;
        var string_literal273_tree=null;

        try {
            // ObjectiveC2ansi.g:282:16: ( parameter_declaration_list ( ',' '...' )? )
            // ObjectiveC2ansi.g:282:18: parameter_declaration_list ( ',' '...' )?
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_parameter_declaration_list_in_parameter_list1482);
            parameter_declaration_list271=this.parameter_declaration_list();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, parameter_declaration_list271.getTree());
            // ObjectiveC2ansi.g:282:45: ( ',' '...' )?
            var alt66=2;
            var LA66_0 = this.input.LA(1);

            if ( (LA66_0==46) ) {
                alt66=1;
            }
            switch (alt66) {
                case 1 :
                    // ObjectiveC2ansi.g:282:47: ',' '...'
                    char_literal272=this.match(this.input,46,ObjectiveC2ansiParser.FOLLOW_46_in_parameter_list1486); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal272_tree = this.adaptor.create(char_literal272);
                    this.adaptor.addChild(root_0, char_literal272_tree);
                    }
                    string_literal273=this.match(this.input,94,ObjectiveC2ansiParser.FOLLOW_94_in_parameter_list1488); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal273_tree = this.adaptor.create(string_literal273);
                    this.adaptor.addChild(root_0, string_literal273_tree);
                    }


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    parameter_declaration_return: (function() {
        ObjectiveC2ansiParser.parameter_declaration_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.parameter_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:284:1: parameter_declaration : declaration_specifiers ( ( declarator )? | abstract_declarator ) ;
    // $ANTLR start "parameter_declaration"
    parameter_declaration: function() {
        var retval = new ObjectiveC2ansiParser.parameter_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var declaration_specifiers274 = null;
         var declarator275 = null;
         var abstract_declarator276 = null;


        try {
            // ObjectiveC2ansi.g:285:3: ( declaration_specifiers ( ( declarator )? | abstract_declarator ) )
            // ObjectiveC2ansi.g:285:5: declaration_specifiers ( ( declarator )? | abstract_declarator )
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declaration_specifiers_in_parameter_declaration1503);
            declaration_specifiers274=this.declaration_specifiers();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration_specifiers274.getTree());
            // ObjectiveC2ansi.g:285:28: ( ( declarator )? | abstract_declarator )
            var alt68=2;
            alt68 = this.dfa68.predict(this.input);
            switch (alt68) {
                case 1 :
                    // ObjectiveC2ansi.g:285:29: ( declarator )?
                    // ObjectiveC2ansi.g:285:29: ( declarator )?
                    var alt67=2;
                    alt67 = this.dfa67.predict(this.input);
                    switch (alt67) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: declarator
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_parameter_declaration1506);
                            declarator275=this.declarator();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declarator275.getTree());


                            break;

                    }



                    break;
                case 2 :
                    // ObjectiveC2ansi.g:285:43: abstract_declarator
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_abstract_declarator_in_parameter_declaration1511);
                    abstract_declarator276=this.abstract_declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, abstract_declarator276.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    initializer_return: (function() {
        ObjectiveC2ansiParser.initializer_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.initializer_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:287:1: initializer : ( assignment_expression | '{' initializer ( ',' initializer )* '}' );
    // $ANTLR start "initializer"
    initializer: function() {
        var retval = new ObjectiveC2ansiParser.initializer_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal278 = null;
        var char_literal280 = null;
        var char_literal282 = null;
         var assignment_expression277 = null;
         var initializer279 = null;
         var initializer281 = null;

        var char_literal278_tree=null;
        var char_literal280_tree=null;
        var char_literal282_tree=null;

        try {
            // ObjectiveC2ansi.g:287:13: ( assignment_expression | '{' initializer ( ',' initializer )* '}' )
            var alt70=2;
            var LA70_0 = this.input.LA(1);

            if ( ((LA70_0>=IDENTIFIER && LA70_0<=FLOATING_POINT_LITERAL)||LA70_0==40||LA70_0==43||LA70_0==54||(LA70_0>=73 && LA70_0<=74)||(LA70_0>=77 && LA70_0<=78)||LA70_0==93||LA70_0==122||(LA70_0>=130 && LA70_0<=134)) ) {
                alt70=1;
            }
            else if ( (LA70_0==47) ) {
                alt70=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 70, 0, this.input);

                throw nvae;
            }
            switch (alt70) {
                case 1 :
                    // ObjectiveC2ansi.g:287:15: assignment_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_assignment_expression_in_initializer1521);
                    assignment_expression277=this.assignment_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression277.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:288:8: '{' initializer ( ',' initializer )* '}'
                    root_0 = this.adaptor.nil();

                    char_literal278=this.match(this.input,47,ObjectiveC2ansiParser.FOLLOW_47_in_initializer1530); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal278_tree = this.adaptor.create(char_literal278);
                    this.adaptor.addChild(root_0, char_literal278_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_initializer_in_initializer1532);
                    initializer279=this.initializer();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, initializer279.getTree());
                    // ObjectiveC2ansi.g:288:24: ( ',' initializer )*
                    loop69:
                    do {
                        var alt69=2;
                        var LA69_0 = this.input.LA(1);

                        if ( (LA69_0==46) ) {
                            alt69=1;
                        }


                        switch (alt69) {
                        case 1 :
                            // ObjectiveC2ansi.g:288:25: ',' initializer
                            char_literal280=this.match(this.input,46,ObjectiveC2ansiParser.FOLLOW_46_in_initializer1535); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            char_literal280_tree = this.adaptor.create(char_literal280);
                            this.adaptor.addChild(root_0, char_literal280_tree);
                            }
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_initializer_in_initializer1537);
                            initializer281=this.initializer();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, initializer281.getTree());


                            break;

                        default :
                            break loop69;
                        }
                    } while (true);

                    char_literal282=this.match(this.input,48,ObjectiveC2ansiParser.FOLLOW_48_in_initializer1541); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal282_tree = this.adaptor.create(char_literal282);
                    this.adaptor.addChild(root_0, char_literal282_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    type_name_return: (function() {
        ObjectiveC2ansiParser.type_name_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.type_name_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:290:1: type_name : specifier_qualifier_list abstract_declarator ;
    // $ANTLR start "type_name"
    type_name: function() {
        var retval = new ObjectiveC2ansiParser.type_name_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var specifier_qualifier_list283 = null;
         var abstract_declarator284 = null;


        try {
            // ObjectiveC2ansi.g:290:11: ( specifier_qualifier_list abstract_declarator )
            // ObjectiveC2ansi.g:290:13: specifier_qualifier_list abstract_declarator
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_specifier_qualifier_list_in_type_name1550);
            specifier_qualifier_list283=this.specifier_qualifier_list();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, specifier_qualifier_list283.getTree());
            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_abstract_declarator_in_type_name1552);
            abstract_declarator284=this.abstract_declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, abstract_declarator284.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    abstract_declarator_return: (function() {
        ObjectiveC2ansiParser.abstract_declarator_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.abstract_declarator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:292:1: abstract_declarator : ( '*' ( type_qualifier )* abstract_declarator | '(' abstract_declarator ')' ( abstract_declarator_suffix )+ | ( '[' ( constant_expression )? ']' )+ | );
    // $ANTLR start "abstract_declarator"
    abstract_declarator: function() {
        var retval = new ObjectiveC2ansiParser.abstract_declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal285 = null;
        var char_literal288 = null;
        var char_literal290 = null;
        var char_literal292 = null;
        var char_literal294 = null;
         var type_qualifier286 = null;
         var abstract_declarator287 = null;
         var abstract_declarator289 = null;
         var abstract_declarator_suffix291 = null;
         var constant_expression293 = null;

        var char_literal285_tree=null;
        var char_literal288_tree=null;
        var char_literal290_tree=null;
        var char_literal292_tree=null;
        var char_literal294_tree=null;

        try {
            // ObjectiveC2ansi.g:292:21: ( '*' ( type_qualifier )* abstract_declarator | '(' abstract_declarator ')' ( abstract_declarator_suffix )+ | ( '[' ( constant_expression )? ']' )+ | )
            var alt75=4;
            alt75 = this.dfa75.predict(this.input);
            switch (alt75) {
                case 1 :
                    // ObjectiveC2ansi.g:292:23: '*' ( type_qualifier )* abstract_declarator
                    root_0 = this.adaptor.nil();

                    char_literal285=this.match(this.input,93,ObjectiveC2ansiParser.FOLLOW_93_in_abstract_declarator1561); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal285_tree = this.adaptor.create(char_literal285);
                    this.adaptor.addChild(root_0, char_literal285_tree);
                    }
                    // ObjectiveC2ansi.g:292:27: ( type_qualifier )*
                    loop71:
                    do {
                        var alt71=2;
                        var LA71_0 = this.input.LA(1);

                        if ( ((LA71_0>=65 && LA71_0<=72)) ) {
                            alt71=1;
                        }


                        switch (alt71) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: type_qualifier
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_qualifier_in_abstract_declarator1563);
                            type_qualifier286=this.type_qualifier();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_qualifier286.getTree());


                            break;

                        default :
                            break loop71;
                        }
                    } while (true);

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_abstract_declarator_in_abstract_declarator1566);
                    abstract_declarator287=this.abstract_declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, abstract_declarator287.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:293:5: '(' abstract_declarator ')' ( abstract_declarator_suffix )+
                    root_0 = this.adaptor.nil();

                    char_literal288=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_abstract_declarator1573); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal288_tree = this.adaptor.create(char_literal288);
                    this.adaptor.addChild(root_0, char_literal288_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_abstract_declarator_in_abstract_declarator1575);
                    abstract_declarator289=this.abstract_declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, abstract_declarator289.getTree());
                    char_literal290=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_abstract_declarator1577); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal290_tree = this.adaptor.create(char_literal290);
                    this.adaptor.addChild(root_0, char_literal290_tree);
                    }
                    // ObjectiveC2ansi.g:293:33: ( abstract_declarator_suffix )+
                    var cnt72=0;
                    loop72:
                    do {
                        var alt72=2;
                        alt72 = this.dfa72.predict(this.input);
                        switch (alt72) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: abstract_declarator_suffix
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_abstract_declarator_suffix_in_abstract_declarator1579);
                            abstract_declarator_suffix291=this.abstract_declarator_suffix();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, abstract_declarator_suffix291.getTree());


                            break;

                        default :
                            if ( cnt72 >= 1 ) {
                                break loop72;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(72, this.input);
                                throw eee;
                        }
                        cnt72++;
                    } while (true);



                    break;
                case 3 :
                    // ObjectiveC2ansi.g:294:5: ( '[' ( constant_expression )? ']' )+
                    root_0 = this.adaptor.nil();

                    // ObjectiveC2ansi.g:294:5: ( '[' ( constant_expression )? ']' )+
                    var cnt74=0;
                    loop74:
                    do {
                        var alt74=2;
                        var LA74_0 = this.input.LA(1);

                        if ( (LA74_0==74) ) {
                            alt74=1;
                        }


                        switch (alt74) {
                        case 1 :
                            // ObjectiveC2ansi.g:294:6: '[' ( constant_expression )? ']'
                            char_literal292=this.match(this.input,74,ObjectiveC2ansiParser.FOLLOW_74_in_abstract_declarator1587); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            char_literal292_tree = this.adaptor.create(char_literal292);
                            this.adaptor.addChild(root_0, char_literal292_tree);
                            }
                            // ObjectiveC2ansi.g:294:10: ( constant_expression )?
                            var alt73=2;
                            var LA73_0 = this.input.LA(1);

                            if ( ((LA73_0>=IDENTIFIER && LA73_0<=FLOATING_POINT_LITERAL)||LA73_0==40||LA73_0==43||LA73_0==54||(LA73_0>=73 && LA73_0<=74)||(LA73_0>=77 && LA73_0<=78)||LA73_0==93||LA73_0==122||(LA73_0>=130 && LA73_0<=134)) ) {
                                alt73=1;
                            }
                            switch (alt73) {
                                case 1 :
                                    // ObjectiveC2ansi.g:0:0: constant_expression
                                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_constant_expression_in_abstract_declarator1589);
                                    constant_expression293=this.constant_expression();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant_expression293.getTree());


                                    break;

                            }

                            char_literal294=this.match(this.input,75,ObjectiveC2ansiParser.FOLLOW_75_in_abstract_declarator1592); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            char_literal294_tree = this.adaptor.create(char_literal294);
                            this.adaptor.addChild(root_0, char_literal294_tree);
                            }


                            break;

                        default :
                            if ( cnt74 >= 1 ) {
                                break loop74;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                                var eee = new org.antlr.runtime.EarlyExitException(74, this.input);
                                throw eee;
                        }
                        cnt74++;
                    } while (true);



                    break;
                case 4 :
                    // ObjectiveC2ansi.g:295:5: 
                    root_0 = this.adaptor.nil();


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    abstract_declarator_suffix_return: (function() {
        ObjectiveC2ansiParser.abstract_declarator_suffix_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.abstract_declarator_suffix_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:297:1: abstract_declarator_suffix : ( '[' ( constant_expression )? ']' | '(' ( parameter_declaration_list )? ')' );
    // $ANTLR start "abstract_declarator_suffix"
    abstract_declarator_suffix: function() {
        var retval = new ObjectiveC2ansiParser.abstract_declarator_suffix_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal295 = null;
        var char_literal297 = null;
        var char_literal298 = null;
        var char_literal300 = null;
         var constant_expression296 = null;
         var parameter_declaration_list299 = null;

        var char_literal295_tree=null;
        var char_literal297_tree=null;
        var char_literal298_tree=null;
        var char_literal300_tree=null;

        try {
            // ObjectiveC2ansi.g:298:3: ( '[' ( constant_expression )? ']' | '(' ( parameter_declaration_list )? ')' )
            var alt78=2;
            var LA78_0 = this.input.LA(1);

            if ( (LA78_0==74) ) {
                alt78=1;
            }
            else if ( (LA78_0==40) ) {
                alt78=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 78, 0, this.input);

                throw nvae;
            }
            switch (alt78) {
                case 1 :
                    // ObjectiveC2ansi.g:298:5: '[' ( constant_expression )? ']'
                    root_0 = this.adaptor.nil();

                    char_literal295=this.match(this.input,74,ObjectiveC2ansiParser.FOLLOW_74_in_abstract_declarator_suffix1609); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal295_tree = this.adaptor.create(char_literal295);
                    this.adaptor.addChild(root_0, char_literal295_tree);
                    }
                    // ObjectiveC2ansi.g:298:9: ( constant_expression )?
                    var alt76=2;
                    var LA76_0 = this.input.LA(1);

                    if ( ((LA76_0>=IDENTIFIER && LA76_0<=FLOATING_POINT_LITERAL)||LA76_0==40||LA76_0==43||LA76_0==54||(LA76_0>=73 && LA76_0<=74)||(LA76_0>=77 && LA76_0<=78)||LA76_0==93||LA76_0==122||(LA76_0>=130 && LA76_0<=134)) ) {
                        alt76=1;
                    }
                    switch (alt76) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: constant_expression
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_constant_expression_in_abstract_declarator_suffix1611);
                            constant_expression296=this.constant_expression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant_expression296.getTree());


                            break;

                    }

                    char_literal297=this.match(this.input,75,ObjectiveC2ansiParser.FOLLOW_75_in_abstract_declarator_suffix1614); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal297_tree = this.adaptor.create(char_literal297);
                    this.adaptor.addChild(root_0, char_literal297_tree);
                    }


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:299:5: '(' ( parameter_declaration_list )? ')'
                    root_0 = this.adaptor.nil();

                    char_literal298=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_abstract_declarator_suffix1620); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal298_tree = this.adaptor.create(char_literal298);
                    this.adaptor.addChild(root_0, char_literal298_tree);
                    }
                    // ObjectiveC2ansi.g:299:10: ( parameter_declaration_list )?
                    var alt77=2;
                    var LA77_0 = this.input.LA(1);

                    if ( (LA77_0==IDENTIFIER||(LA77_0>=55 && LA77_0<=72)||(LA77_0>=84 && LA77_0<=88)||(LA77_0>=90 && LA77_0<=92)) ) {
                        alt77=1;
                    }
                    switch (alt77) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: parameter_declaration_list
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_parameter_declaration_list_in_abstract_declarator_suffix1623);
                            parameter_declaration_list299=this.parameter_declaration_list();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, parameter_declaration_list299.getTree());


                            break;

                    }

                    char_literal300=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_abstract_declarator_suffix1626); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal300_tree = this.adaptor.create(char_literal300);
                    this.adaptor.addChild(root_0, char_literal300_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    parameter_declaration_list_return: (function() {
        ObjectiveC2ansiParser.parameter_declaration_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.parameter_declaration_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:301:1: parameter_declaration_list : parameter_declaration ( ',' parameter_declaration )* ;
    // $ANTLR start "parameter_declaration_list"
    parameter_declaration_list: function() {
        var retval = new ObjectiveC2ansiParser.parameter_declaration_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal302 = null;
         var parameter_declaration301 = null;
         var parameter_declaration303 = null;

        var char_literal302_tree=null;

        try {
            // ObjectiveC2ansi.g:302:3: ( parameter_declaration ( ',' parameter_declaration )* )
            // ObjectiveC2ansi.g:302:5: parameter_declaration ( ',' parameter_declaration )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_parameter_declaration_in_parameter_declaration_list1637);
            parameter_declaration301=this.parameter_declaration();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, parameter_declaration301.getTree());
            // ObjectiveC2ansi.g:302:27: ( ',' parameter_declaration )*
            loop79:
            do {
                var alt79=2;
                var LA79_0 = this.input.LA(1);

                if ( (LA79_0==46) ) {
                    var LA79_1 = this.input.LA(2);

                    if ( (LA79_1==IDENTIFIER||(LA79_1>=55 && LA79_1<=72)||(LA79_1>=84 && LA79_1<=88)||(LA79_1>=90 && LA79_1<=92)) ) {
                        alt79=1;
                    }


                }


                switch (alt79) {
                case 1 :
                    // ObjectiveC2ansi.g:302:29: ',' parameter_declaration
                    char_literal302=this.match(this.input,46,ObjectiveC2ansiParser.FOLLOW_46_in_parameter_declaration_list1641); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal302_tree = this.adaptor.create(char_literal302);
                    this.adaptor.addChild(root_0, char_literal302_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_parameter_declaration_in_parameter_declaration_list1643);
                    parameter_declaration303=this.parameter_declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, parameter_declaration303.getTree());


                    break;

                default :
                    break loop79;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    statement_list_return: (function() {
        ObjectiveC2ansiParser.statement_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.statement_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:304:1: statement_list : ( statement )+ ;
    // $ANTLR start "statement_list"
    statement_list: function() {
        var retval = new ObjectiveC2ansiParser.statement_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var statement304 = null;


        try {
            // ObjectiveC2ansi.g:304:16: ( ( statement )+ )
            // ObjectiveC2ansi.g:304:18: ( statement )+
            root_0 = this.adaptor.nil();

            // ObjectiveC2ansi.g:304:18: ( statement )+
            var cnt80=0;
            loop80:
            do {
                var alt80=2;
                var LA80_0 = this.input.LA(1);

                if ( ((LA80_0>=IDENTIFIER && LA80_0<=FLOATING_POINT_LITERAL)||LA80_0==40||(LA80_0>=43 && LA80_0<=44)||LA80_0==47||LA80_0==54||(LA80_0>=73 && LA80_0<=74)||(LA80_0>=77 && LA80_0<=78)||LA80_0==93||(LA80_0>=95 && LA80_0<=97)||(LA80_0>=99 && LA80_0<=106)||LA80_0==122||(LA80_0>=130 && LA80_0<=134)) ) {
                    alt80=1;
                }


                switch (alt80) {
                case 1 :
                    // ObjectiveC2ansi.g:304:19: statement
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_statement_list1656);
                    statement304=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement304.getTree());


                    break;

                default :
                    if ( cnt80 >= 1 ) {
                        break loop80;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(80, this.input);
                        throw eee;
                }
                cnt80++;
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    statement_return: (function() {
        ObjectiveC2ansiParser.statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:306:1: statement : ( labeled_statement | expression ';' | compound_statement | selection_statement | iteration_statement | jump_statement | ';' );
    // $ANTLR start "statement"
    statement: function() {
        var retval = new ObjectiveC2ansiParser.statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal307 = null;
        var char_literal312 = null;
         var labeled_statement305 = null;
         var expression306 = null;
         var compound_statement308 = null;
         var selection_statement309 = null;
         var iteration_statement310 = null;
         var jump_statement311 = null;

        var char_literal307_tree=null;
        var char_literal312_tree=null;

        try {
            // ObjectiveC2ansi.g:307:3: ( labeled_statement | expression ';' | compound_statement | selection_statement | iteration_statement | jump_statement | ';' )
            var alt81=7;
            switch ( this.input.LA(1) ) {
            case IDENTIFIER:
                var LA81_1 = this.input.LA(2);

                if ( (LA81_1==30||LA81_1==32||(LA81_1>=34 && LA81_1<=35)||LA81_1==40||LA81_1==44||LA81_1==46||(LA81_1>=53 && LA81_1<=54)||LA81_1==74||LA81_1==89||LA81_1==93||(LA81_1>=107 && LA81_1<=131)||LA81_1==135) ) {
                    alt81=2;
                }
                else if ( (LA81_1==38) ) {
                    alt81=1;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 81, 1, this.input);

                    throw nvae;
                }
                break;
            case 95:
            case 96:
                alt81=1;
                break;
            case STRING_LITERAL:
            case DECIMAL_LITERAL:
            case HEX_LITERAL:
            case OCTAL_LITERAL:
            case CHARACTER_LITERAL:
            case FLOATING_POINT_LITERAL:
            case 40:
            case 43:
            case 54:
            case 73:
            case 74:
            case 77:
            case 78:
            case 93:
            case 122:
            case 130:
            case 131:
            case 132:
            case 133:
            case 134:
                alt81=2;
                break;
            case 47:
                alt81=3;
                break;
            case 97:
            case 99:
                alt81=4;
                break;
            case 100:
            case 101:
            case 102:
                alt81=5;
                break;
            case 103:
            case 104:
            case 105:
            case 106:
                alt81=6;
                break;
            case 44:
                alt81=7;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 81, 0, this.input);

                throw nvae;
            }

            switch (alt81) {
                case 1 :
                    // ObjectiveC2ansi.g:307:5: labeled_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_labeled_statement_in_statement1670);
                    labeled_statement305=this.labeled_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, labeled_statement305.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:308:5: expression ';'
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_statement1676);
                    expression306=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression306.getTree());
                    char_literal307=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_statement1678); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal307_tree = this.adaptor.create(char_literal307);
                    this.adaptor.addChild(root_0, char_literal307_tree);
                    }


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:309:5: compound_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_compound_statement_in_statement1684);
                    compound_statement308=this.compound_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, compound_statement308.getTree());


                    break;
                case 4 :
                    // ObjectiveC2ansi.g:310:5: selection_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_selection_statement_in_statement1690);
                    selection_statement309=this.selection_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selection_statement309.getTree());


                    break;
                case 5 :
                    // ObjectiveC2ansi.g:311:5: iteration_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_iteration_statement_in_statement1696);
                    iteration_statement310=this.iteration_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, iteration_statement310.getTree());


                    break;
                case 6 :
                    // ObjectiveC2ansi.g:312:5: jump_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_jump_statement_in_statement1702);
                    jump_statement311=this.jump_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, jump_statement311.getTree());


                    break;
                case 7 :
                    // ObjectiveC2ansi.g:313:5: ';'
                    root_0 = this.adaptor.nil();

                    char_literal312=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_statement1708); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal312_tree = this.adaptor.create(char_literal312);
                    this.adaptor.addChild(root_0, char_literal312_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    labeled_statement_return: (function() {
        ObjectiveC2ansiParser.labeled_statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.labeled_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:315:1: labeled_statement : ( identifier ':' statement | 'case' constant_expression ':' statement | 'default' ':' statement );
    // $ANTLR start "labeled_statement"
    labeled_statement: function() {
        var retval = new ObjectiveC2ansiParser.labeled_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal314 = null;
        var string_literal316 = null;
        var char_literal318 = null;
        var string_literal320 = null;
        var char_literal321 = null;
         var identifier313 = null;
         var statement315 = null;
         var constant_expression317 = null;
         var statement319 = null;
         var statement322 = null;

        var char_literal314_tree=null;
        var string_literal316_tree=null;
        var char_literal318_tree=null;
        var string_literal320_tree=null;
        var char_literal321_tree=null;

        try {
            // ObjectiveC2ansi.g:316:3: ( identifier ':' statement | 'case' constant_expression ':' statement | 'default' ':' statement )
            var alt82=3;
            switch ( this.input.LA(1) ) {
            case IDENTIFIER:
                alt82=1;
                break;
            case 95:
                alt82=2;
                break;
            case 96:
                alt82=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 82, 0, this.input);

                throw nvae;
            }

            switch (alt82) {
                case 1 :
                    // ObjectiveC2ansi.g:316:5: identifier ':' statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_identifier_in_labeled_statement1719);
                    identifier313=this.identifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, identifier313.getTree());
                    char_literal314=this.match(this.input,38,ObjectiveC2ansiParser.FOLLOW_38_in_labeled_statement1721); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal314_tree = this.adaptor.create(char_literal314);
                    this.adaptor.addChild(root_0, char_literal314_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_labeled_statement1723);
                    statement315=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement315.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:317:5: 'case' constant_expression ':' statement
                    root_0 = this.adaptor.nil();

                    string_literal316=this.match(this.input,95,ObjectiveC2ansiParser.FOLLOW_95_in_labeled_statement1729); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal316_tree = this.adaptor.create(string_literal316);
                    this.adaptor.addChild(root_0, string_literal316_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_constant_expression_in_labeled_statement1731);
                    constant_expression317=this.constant_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant_expression317.getTree());
                    char_literal318=this.match(this.input,38,ObjectiveC2ansiParser.FOLLOW_38_in_labeled_statement1733); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal318_tree = this.adaptor.create(char_literal318);
                    this.adaptor.addChild(root_0, char_literal318_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_labeled_statement1735);
                    statement319=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement319.getTree());


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:318:5: 'default' ':' statement
                    root_0 = this.adaptor.nil();

                    string_literal320=this.match(this.input,96,ObjectiveC2ansiParser.FOLLOW_96_in_labeled_statement1741); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal320_tree = this.adaptor.create(string_literal320);
                    this.adaptor.addChild(root_0, string_literal320_tree);
                    }
                    char_literal321=this.match(this.input,38,ObjectiveC2ansiParser.FOLLOW_38_in_labeled_statement1743); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal321_tree = this.adaptor.create(char_literal321);
                    this.adaptor.addChild(root_0, char_literal321_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_labeled_statement1745);
                    statement322=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement322.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    compound_statement_return: (function() {
        ObjectiveC2ansiParser.compound_statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.compound_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:320:1: compound_statement : '{' ( declaration )* ( statement_list )? '}' ;
    // $ANTLR start "compound_statement"
    compound_statement: function() {
        var retval = new ObjectiveC2ansiParser.compound_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal323 = null;
        var char_literal326 = null;
         var declaration324 = null;
         var statement_list325 = null;

        var char_literal323_tree=null;
        var char_literal326_tree=null;

        try {
            // ObjectiveC2ansi.g:320:20: ( '{' ( declaration )* ( statement_list )? '}' )
            // ObjectiveC2ansi.g:320:22: '{' ( declaration )* ( statement_list )? '}'
            root_0 = this.adaptor.nil();

            char_literal323=this.match(this.input,47,ObjectiveC2ansiParser.FOLLOW_47_in_compound_statement1754); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal323_tree = this.adaptor.create(char_literal323);
            this.adaptor.addChild(root_0, char_literal323_tree);
            }
            // ObjectiveC2ansi.g:320:26: ( declaration )*
            loop83:
            do {
                var alt83=2;
                alt83 = this.dfa83.predict(this.input);
                switch (alt83) {
                case 1 :
                    // ObjectiveC2ansi.g:320:27: declaration
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declaration_in_compound_statement1757);
                    declaration324=this.declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration324.getTree());


                    break;

                default :
                    break loop83;
                }
            } while (true);

            // ObjectiveC2ansi.g:320:41: ( statement_list )?
            var alt84=2;
            var LA84_0 = this.input.LA(1);

            if ( ((LA84_0>=IDENTIFIER && LA84_0<=FLOATING_POINT_LITERAL)||LA84_0==40||(LA84_0>=43 && LA84_0<=44)||LA84_0==47||LA84_0==54||(LA84_0>=73 && LA84_0<=74)||(LA84_0>=77 && LA84_0<=78)||LA84_0==93||(LA84_0>=95 && LA84_0<=97)||(LA84_0>=99 && LA84_0<=106)||LA84_0==122||(LA84_0>=130 && LA84_0<=134)) ) {
                alt84=1;
            }
            switch (alt84) {
                case 1 :
                    // ObjectiveC2ansi.g:0:0: statement_list
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_list_in_compound_statement1761);
                    statement_list325=this.statement_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement_list325.getTree());


                    break;

            }

            char_literal326=this.match(this.input,48,ObjectiveC2ansiParser.FOLLOW_48_in_compound_statement1764); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal326_tree = this.adaptor.create(char_literal326);
            this.adaptor.addChild(root_0, char_literal326_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    selection_statement_return: (function() {
        ObjectiveC2ansiParser.selection_statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.selection_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:322:1: selection_statement : ( 'if' '(' expression ')' statement ( 'else' statement )? | 'switch' '(' expression ')' statement );
    // $ANTLR start "selection_statement"
    selection_statement: function() {
        var retval = new ObjectiveC2ansiParser.selection_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal327 = null;
        var char_literal328 = null;
        var char_literal330 = null;
        var string_literal332 = null;
        var string_literal334 = null;
        var char_literal335 = null;
        var char_literal337 = null;
         var expression329 = null;
         var statement331 = null;
         var statement333 = null;
         var expression336 = null;
         var statement338 = null;

        var string_literal327_tree=null;
        var char_literal328_tree=null;
        var char_literal330_tree=null;
        var string_literal332_tree=null;
        var string_literal334_tree=null;
        var char_literal335_tree=null;
        var char_literal337_tree=null;

        try {
            // ObjectiveC2ansi.g:323:3: ( 'if' '(' expression ')' statement ( 'else' statement )? | 'switch' '(' expression ')' statement )
            var alt86=2;
            var LA86_0 = this.input.LA(1);

            if ( (LA86_0==97) ) {
                alt86=1;
            }
            else if ( (LA86_0==99) ) {
                alt86=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 86, 0, this.input);

                throw nvae;
            }
            switch (alt86) {
                case 1 :
                    // ObjectiveC2ansi.g:323:5: 'if' '(' expression ')' statement ( 'else' statement )?
                    root_0 = this.adaptor.nil();

                    string_literal327=this.match(this.input,97,ObjectiveC2ansiParser.FOLLOW_97_in_selection_statement1775); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal327_tree = this.adaptor.create(string_literal327);
                    this.adaptor.addChild(root_0, string_literal327_tree);
                    }
                    char_literal328=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_selection_statement1777); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal328_tree = this.adaptor.create(char_literal328);
                    this.adaptor.addChild(root_0, char_literal328_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_selection_statement1779);
                    expression329=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression329.getTree());
                    char_literal330=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_selection_statement1781); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal330_tree = this.adaptor.create(char_literal330);
                    this.adaptor.addChild(root_0, char_literal330_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_selection_statement1783);
                    statement331=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement331.getTree());
                    // ObjectiveC2ansi.g:323:39: ( 'else' statement )?
                    var alt85=2;
                    var LA85_0 = this.input.LA(1);

                    if ( (LA85_0==98) ) {
                        var LA85_1 = this.input.LA(2);

                        if ( (this.synpred156_ObjectiveC2ansi()) ) {
                            alt85=1;
                        }
                    }
                    switch (alt85) {
                        case 1 :
                            // ObjectiveC2ansi.g:323:40: 'else' statement
                            string_literal332=this.match(this.input,98,ObjectiveC2ansiParser.FOLLOW_98_in_selection_statement1786); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            string_literal332_tree = this.adaptor.create(string_literal332);
                            this.adaptor.addChild(root_0, string_literal332_tree);
                            }
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_selection_statement1788);
                            statement333=this.statement();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement333.getTree());


                            break;

                    }



                    break;
                case 2 :
                    // ObjectiveC2ansi.g:324:5: 'switch' '(' expression ')' statement
                    root_0 = this.adaptor.nil();

                    string_literal334=this.match(this.input,99,ObjectiveC2ansiParser.FOLLOW_99_in_selection_statement1796); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal334_tree = this.adaptor.create(string_literal334);
                    this.adaptor.addChild(root_0, string_literal334_tree);
                    }
                    char_literal335=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_selection_statement1798); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal335_tree = this.adaptor.create(char_literal335);
                    this.adaptor.addChild(root_0, char_literal335_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_selection_statement1800);
                    expression336=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression336.getTree());
                    char_literal337=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_selection_statement1802); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal337_tree = this.adaptor.create(char_literal337);
                    this.adaptor.addChild(root_0, char_literal337_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_selection_statement1804);
                    statement338=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement338.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    iteration_statement_return: (function() {
        ObjectiveC2ansiParser.iteration_statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.iteration_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:326:1: iteration_statement : ( 'while' '(' expression ')' statement | 'do' statement 'while' '(' expression ')' ';' | 'for' '(' ( expression )? ';' ( expression )? ';' ( expression )? ')' statement );
    // $ANTLR start "iteration_statement"
    iteration_statement: function() {
        var retval = new ObjectiveC2ansiParser.iteration_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal339 = null;
        var char_literal340 = null;
        var char_literal342 = null;
        var string_literal344 = null;
        var string_literal346 = null;
        var char_literal347 = null;
        var char_literal349 = null;
        var char_literal350 = null;
        var string_literal351 = null;
        var char_literal352 = null;
        var char_literal354 = null;
        var char_literal356 = null;
        var char_literal358 = null;
         var expression341 = null;
         var statement343 = null;
         var statement345 = null;
         var expression348 = null;
         var expression353 = null;
         var expression355 = null;
         var expression357 = null;
         var statement359 = null;

        var string_literal339_tree=null;
        var char_literal340_tree=null;
        var char_literal342_tree=null;
        var string_literal344_tree=null;
        var string_literal346_tree=null;
        var char_literal347_tree=null;
        var char_literal349_tree=null;
        var char_literal350_tree=null;
        var string_literal351_tree=null;
        var char_literal352_tree=null;
        var char_literal354_tree=null;
        var char_literal356_tree=null;
        var char_literal358_tree=null;

        try {
            // ObjectiveC2ansi.g:327:3: ( 'while' '(' expression ')' statement | 'do' statement 'while' '(' expression ')' ';' | 'for' '(' ( expression )? ';' ( expression )? ';' ( expression )? ')' statement )
            var alt90=3;
            switch ( this.input.LA(1) ) {
            case 100:
                alt90=1;
                break;
            case 101:
                alt90=2;
                break;
            case 102:
                alt90=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 90, 0, this.input);

                throw nvae;
            }

            switch (alt90) {
                case 1 :
                    // ObjectiveC2ansi.g:327:5: 'while' '(' expression ')' statement
                    root_0 = this.adaptor.nil();

                    string_literal339=this.match(this.input,100,ObjectiveC2ansiParser.FOLLOW_100_in_iteration_statement1815); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal339_tree = this.adaptor.create(string_literal339);
                    this.adaptor.addChild(root_0, string_literal339_tree);
                    }
                    char_literal340=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_iteration_statement1817); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal340_tree = this.adaptor.create(char_literal340);
                    this.adaptor.addChild(root_0, char_literal340_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_iteration_statement1819);
                    expression341=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression341.getTree());
                    char_literal342=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_iteration_statement1821); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal342_tree = this.adaptor.create(char_literal342);
                    this.adaptor.addChild(root_0, char_literal342_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_iteration_statement1823);
                    statement343=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement343.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:328:5: 'do' statement 'while' '(' expression ')' ';'
                    root_0 = this.adaptor.nil();

                    string_literal344=this.match(this.input,101,ObjectiveC2ansiParser.FOLLOW_101_in_iteration_statement1829); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal344_tree = this.adaptor.create(string_literal344);
                    this.adaptor.addChild(root_0, string_literal344_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_iteration_statement1831);
                    statement345=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement345.getTree());
                    string_literal346=this.match(this.input,100,ObjectiveC2ansiParser.FOLLOW_100_in_iteration_statement1833); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal346_tree = this.adaptor.create(string_literal346);
                    this.adaptor.addChild(root_0, string_literal346_tree);
                    }
                    char_literal347=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_iteration_statement1835); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal347_tree = this.adaptor.create(char_literal347);
                    this.adaptor.addChild(root_0, char_literal347_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_iteration_statement1837);
                    expression348=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression348.getTree());
                    char_literal349=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_iteration_statement1839); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal349_tree = this.adaptor.create(char_literal349);
                    this.adaptor.addChild(root_0, char_literal349_tree);
                    }
                    char_literal350=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_iteration_statement1841); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal350_tree = this.adaptor.create(char_literal350);
                    this.adaptor.addChild(root_0, char_literal350_tree);
                    }


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:329:5: 'for' '(' ( expression )? ';' ( expression )? ';' ( expression )? ')' statement
                    root_0 = this.adaptor.nil();

                    string_literal351=this.match(this.input,102,ObjectiveC2ansiParser.FOLLOW_102_in_iteration_statement1847); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal351_tree = this.adaptor.create(string_literal351);
                    this.adaptor.addChild(root_0, string_literal351_tree);
                    }
                    char_literal352=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_iteration_statement1849); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal352_tree = this.adaptor.create(char_literal352);
                    this.adaptor.addChild(root_0, char_literal352_tree);
                    }
                    // ObjectiveC2ansi.g:329:15: ( expression )?
                    var alt87=2;
                    var LA87_0 = this.input.LA(1);

                    if ( ((LA87_0>=IDENTIFIER && LA87_0<=FLOATING_POINT_LITERAL)||LA87_0==40||LA87_0==43||LA87_0==54||(LA87_0>=73 && LA87_0<=74)||(LA87_0>=77 && LA87_0<=78)||LA87_0==93||LA87_0==122||(LA87_0>=130 && LA87_0<=134)) ) {
                        alt87=1;
                    }
                    switch (alt87) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: expression
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_iteration_statement1851);
                            expression353=this.expression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression353.getTree());


                            break;

                    }

                    char_literal354=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_iteration_statement1854); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal354_tree = this.adaptor.create(char_literal354);
                    this.adaptor.addChild(root_0, char_literal354_tree);
                    }
                    // ObjectiveC2ansi.g:329:31: ( expression )?
                    var alt88=2;
                    var LA88_0 = this.input.LA(1);

                    if ( ((LA88_0>=IDENTIFIER && LA88_0<=FLOATING_POINT_LITERAL)||LA88_0==40||LA88_0==43||LA88_0==54||(LA88_0>=73 && LA88_0<=74)||(LA88_0>=77 && LA88_0<=78)||LA88_0==93||LA88_0==122||(LA88_0>=130 && LA88_0<=134)) ) {
                        alt88=1;
                    }
                    switch (alt88) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: expression
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_iteration_statement1856);
                            expression355=this.expression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression355.getTree());


                            break;

                    }

                    char_literal356=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_iteration_statement1859); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal356_tree = this.adaptor.create(char_literal356);
                    this.adaptor.addChild(root_0, char_literal356_tree);
                    }
                    // ObjectiveC2ansi.g:329:47: ( expression )?
                    var alt89=2;
                    var LA89_0 = this.input.LA(1);

                    if ( ((LA89_0>=IDENTIFIER && LA89_0<=FLOATING_POINT_LITERAL)||LA89_0==40||LA89_0==43||LA89_0==54||(LA89_0>=73 && LA89_0<=74)||(LA89_0>=77 && LA89_0<=78)||LA89_0==93||LA89_0==122||(LA89_0>=130 && LA89_0<=134)) ) {
                        alt89=1;
                    }
                    switch (alt89) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: expression
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_iteration_statement1861);
                            expression357=this.expression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression357.getTree());


                            break;

                    }

                    char_literal358=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_iteration_statement1864); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal358_tree = this.adaptor.create(char_literal358);
                    this.adaptor.addChild(root_0, char_literal358_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_iteration_statement1866);
                    statement359=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement359.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    jump_statement_return: (function() {
        ObjectiveC2ansiParser.jump_statement_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.jump_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:331:1: jump_statement : ( 'goto' identifier ';' | 'continue' ';' | 'break' ';' | 'return' ( expression )? ';' );
    // $ANTLR start "jump_statement"
    jump_statement: function() {
        var retval = new ObjectiveC2ansiParser.jump_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal360 = null;
        var char_literal362 = null;
        var string_literal363 = null;
        var char_literal364 = null;
        var string_literal365 = null;
        var char_literal366 = null;
        var string_literal367 = null;
        var char_literal369 = null;
         var identifier361 = null;
         var expression368 = null;

        var string_literal360_tree=null;
        var char_literal362_tree=null;
        var string_literal363_tree=null;
        var char_literal364_tree=null;
        var string_literal365_tree=null;
        var char_literal366_tree=null;
        var string_literal367_tree=null;
        var char_literal369_tree=null;

        try {
            // ObjectiveC2ansi.g:332:3: ( 'goto' identifier ';' | 'continue' ';' | 'break' ';' | 'return' ( expression )? ';' )
            var alt92=4;
            switch ( this.input.LA(1) ) {
            case 103:
                alt92=1;
                break;
            case 104:
                alt92=2;
                break;
            case 105:
                alt92=3;
                break;
            case 106:
                alt92=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 92, 0, this.input);

                throw nvae;
            }

            switch (alt92) {
                case 1 :
                    // ObjectiveC2ansi.g:332:5: 'goto' identifier ';'
                    root_0 = this.adaptor.nil();

                    string_literal360=this.match(this.input,103,ObjectiveC2ansiParser.FOLLOW_103_in_jump_statement1877); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal360_tree = this.adaptor.create(string_literal360);
                    this.adaptor.addChild(root_0, string_literal360_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_identifier_in_jump_statement1879);
                    identifier361=this.identifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, identifier361.getTree());
                    char_literal362=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_jump_statement1881); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal362_tree = this.adaptor.create(char_literal362);
                    this.adaptor.addChild(root_0, char_literal362_tree);
                    }


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:333:5: 'continue' ';'
                    root_0 = this.adaptor.nil();

                    string_literal363=this.match(this.input,104,ObjectiveC2ansiParser.FOLLOW_104_in_jump_statement1887); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal363_tree = this.adaptor.create(string_literal363);
                    this.adaptor.addChild(root_0, string_literal363_tree);
                    }
                    char_literal364=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_jump_statement1889); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal364_tree = this.adaptor.create(char_literal364);
                    this.adaptor.addChild(root_0, char_literal364_tree);
                    }


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:334:5: 'break' ';'
                    root_0 = this.adaptor.nil();

                    string_literal365=this.match(this.input,105,ObjectiveC2ansiParser.FOLLOW_105_in_jump_statement1895); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal365_tree = this.adaptor.create(string_literal365);
                    this.adaptor.addChild(root_0, string_literal365_tree);
                    }
                    char_literal366=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_jump_statement1897); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal366_tree = this.adaptor.create(char_literal366);
                    this.adaptor.addChild(root_0, char_literal366_tree);
                    }


                    break;
                case 4 :
                    // ObjectiveC2ansi.g:335:5: 'return' ( expression )? ';'
                    root_0 = this.adaptor.nil();

                    string_literal367=this.match(this.input,106,ObjectiveC2ansiParser.FOLLOW_106_in_jump_statement1903); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal367_tree = this.adaptor.create(string_literal367);
                    this.adaptor.addChild(root_0, string_literal367_tree);
                    }
                    // ObjectiveC2ansi.g:335:14: ( expression )?
                    var alt91=2;
                    var LA91_0 = this.input.LA(1);

                    if ( ((LA91_0>=IDENTIFIER && LA91_0<=FLOATING_POINT_LITERAL)||LA91_0==40||LA91_0==43||LA91_0==54||(LA91_0>=73 && LA91_0<=74)||(LA91_0>=77 && LA91_0<=78)||LA91_0==93||LA91_0==122||(LA91_0>=130 && LA91_0<=134)) ) {
                        alt91=1;
                    }
                    switch (alt91) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: expression
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_jump_statement1905);
                            expression368=this.expression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression368.getTree());


                            break;

                    }

                    char_literal369=this.match(this.input,44,ObjectiveC2ansiParser.FOLLOW_44_in_jump_statement1908); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal369_tree = this.adaptor.create(char_literal369);
                    this.adaptor.addChild(root_0, char_literal369_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expression_return: (function() {
        ObjectiveC2ansiParser.expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:338:1: expression : assignment_expression ( ',' assignment_expression )* ;
    // $ANTLR start "expression"
    expression: function() {
        var retval = new ObjectiveC2ansiParser.expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal371 = null;
         var assignment_expression370 = null;
         var assignment_expression372 = null;

        var char_literal371_tree=null;

        try {
            // ObjectiveC2ansi.g:338:12: ( assignment_expression ( ',' assignment_expression )* )
            // ObjectiveC2ansi.g:338:14: assignment_expression ( ',' assignment_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_assignment_expression_in_expression1920);
            assignment_expression370=this.assignment_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression370.getTree());
            // ObjectiveC2ansi.g:338:36: ( ',' assignment_expression )*
            loop93:
            do {
                var alt93=2;
                var LA93_0 = this.input.LA(1);

                if ( (LA93_0==46) ) {
                    alt93=1;
                }


                switch (alt93) {
                case 1 :
                    // ObjectiveC2ansi.g:338:37: ',' assignment_expression
                    char_literal371=this.match(this.input,46,ObjectiveC2ansiParser.FOLLOW_46_in_expression1923); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal371_tree = this.adaptor.create(char_literal371);
                    this.adaptor.addChild(root_0, char_literal371_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_assignment_expression_in_expression1925);
                    assignment_expression372=this.assignment_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression372.getTree());


                    break;

                default :
                    break loop93;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    assignment_expression_return: (function() {
        ObjectiveC2ansiParser.assignment_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.assignment_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:340:1: assignment_expression : conditional_expression ( assignment_operator assignment_expression )? ;
    // $ANTLR start "assignment_expression"
    assignment_expression: function() {
        var retval = new ObjectiveC2ansiParser.assignment_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var conditional_expression373 = null;
         var assignment_operator374 = null;
         var assignment_expression375 = null;


        try {
            // ObjectiveC2ansi.g:340:23: ( conditional_expression ( assignment_operator assignment_expression )? )
            // ObjectiveC2ansi.g:340:25: conditional_expression ( assignment_operator assignment_expression )?
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_conditional_expression_in_assignment_expression1936);
            conditional_expression373=this.conditional_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, conditional_expression373.getTree());
            // ObjectiveC2ansi.g:341:3: ( assignment_operator assignment_expression )?
            var alt94=2;
            var LA94_0 = this.input.LA(1);

            if ( (LA94_0==89||(LA94_0>=107 && LA94_0<=116)) ) {
                alt94=1;
            }
            switch (alt94) {
                case 1 :
                    // ObjectiveC2ansi.g:341:5: assignment_operator assignment_expression
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_assignment_operator_in_assignment_expression1943);
                    assignment_operator374=this.assignment_operator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_operator374.getTree());
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_assignment_expression_in_assignment_expression1945);
                    assignment_expression375=this.assignment_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression375.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    assignment_operator_return: (function() {
        ObjectiveC2ansiParser.assignment_operator_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.assignment_operator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:342:1: assignment_operator : ( '=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|=' );
    // $ANTLR start "assignment_operator"
    assignment_operator: function() {
        var retval = new ObjectiveC2ansiParser.assignment_operator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set376 = null;

        var set376_tree=null;

        try {
            // ObjectiveC2ansi.g:342:20: ( '=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|=' )
            // ObjectiveC2ansi.g:
            root_0 = this.adaptor.nil();

            set376=this.input.LT(1);
            if ( this.input.LA(1)==89||(this.input.LA(1)>=107 && this.input.LA(1)<=116) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set376));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    conditional_expression_return: (function() {
        ObjectiveC2ansiParser.conditional_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.conditional_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:345:1: conditional_expression : logical_or_expression ( '?' logical_or_expression ':' logical_or_expression )? ;
    // $ANTLR start "conditional_expression"
    conditional_expression: function() {
        var retval = new ObjectiveC2ansiParser.conditional_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal378 = null;
        var char_literal380 = null;
         var logical_or_expression377 = null;
         var logical_or_expression379 = null;
         var logical_or_expression381 = null;

        var char_literal378_tree=null;
        var char_literal380_tree=null;

        try {
            // ObjectiveC2ansi.g:345:24: ( logical_or_expression ( '?' logical_or_expression ':' logical_or_expression )? )
            // ObjectiveC2ansi.g:345:26: logical_or_expression ( '?' logical_or_expression ':' logical_or_expression )?
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_logical_or_expression_in_conditional_expression2005);
            logical_or_expression377=this.logical_or_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logical_or_expression377.getTree());
            // ObjectiveC2ansi.g:346:3: ( '?' logical_or_expression ':' logical_or_expression )?
            var alt95=2;
            var LA95_0 = this.input.LA(1);

            if ( (LA95_0==117) ) {
                alt95=1;
            }
            switch (alt95) {
                case 1 :
                    // ObjectiveC2ansi.g:346:4: '?' logical_or_expression ':' logical_or_expression
                    char_literal378=this.match(this.input,117,ObjectiveC2ansiParser.FOLLOW_117_in_conditional_expression2011); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal378_tree = this.adaptor.create(char_literal378);
                    this.adaptor.addChild(root_0, char_literal378_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_logical_or_expression_in_conditional_expression2013);
                    logical_or_expression379=this.logical_or_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logical_or_expression379.getTree());
                    char_literal380=this.match(this.input,38,ObjectiveC2ansiParser.FOLLOW_38_in_conditional_expression2015); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal380_tree = this.adaptor.create(char_literal380);
                    this.adaptor.addChild(root_0, char_literal380_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_logical_or_expression_in_conditional_expression2017);
                    logical_or_expression381=this.logical_or_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logical_or_expression381.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    constant_expression_return: (function() {
        ObjectiveC2ansiParser.constant_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.constant_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:348:1: constant_expression : conditional_expression ;
    // $ANTLR start "constant_expression"
    constant_expression: function() {
        var retval = new ObjectiveC2ansiParser.constant_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var conditional_expression382 = null;


        try {
            // ObjectiveC2ansi.g:348:21: ( conditional_expression )
            // ObjectiveC2ansi.g:348:23: conditional_expression
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_conditional_expression_in_constant_expression2028);
            conditional_expression382=this.conditional_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, conditional_expression382.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    logical_or_expression_return: (function() {
        ObjectiveC2ansiParser.logical_or_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.logical_or_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:350:1: logical_or_expression : logical_and_expression ( '||' logical_and_expression )* ;
    // $ANTLR start "logical_or_expression"
    logical_or_expression: function() {
        var retval = new ObjectiveC2ansiParser.logical_or_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal384 = null;
         var logical_and_expression383 = null;
         var logical_and_expression385 = null;

        var string_literal384_tree=null;

        try {
            // ObjectiveC2ansi.g:350:23: ( logical_and_expression ( '||' logical_and_expression )* )
            // ObjectiveC2ansi.g:350:25: logical_and_expression ( '||' logical_and_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_logical_and_expression_in_logical_or_expression2037);
            logical_and_expression383=this.logical_and_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logical_and_expression383.getTree());
            // ObjectiveC2ansi.g:351:3: ( '||' logical_and_expression )*
            loop96:
            do {
                var alt96=2;
                var LA96_0 = this.input.LA(1);

                if ( (LA96_0==118) ) {
                    alt96=1;
                }


                switch (alt96) {
                case 1 :
                    // ObjectiveC2ansi.g:351:4: '||' logical_and_expression
                    string_literal384=this.match(this.input,118,ObjectiveC2ansiParser.FOLLOW_118_in_logical_or_expression2043); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal384_tree = this.adaptor.create(string_literal384);
                    this.adaptor.addChild(root_0, string_literal384_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_logical_and_expression_in_logical_or_expression2045);
                    logical_and_expression385=this.logical_and_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logical_and_expression385.getTree());


                    break;

                default :
                    break loop96;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    logical_and_expression_return: (function() {
        ObjectiveC2ansiParser.logical_and_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.logical_and_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:353:1: logical_and_expression : inclusive_or_expression ( '&&' inclusive_or_expression )* ;
    // $ANTLR start "logical_and_expression"
    logical_and_expression: function() {
        var retval = new ObjectiveC2ansiParser.logical_and_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal387 = null;
         var inclusive_or_expression386 = null;
         var inclusive_or_expression388 = null;

        var string_literal387_tree=null;

        try {
            // ObjectiveC2ansi.g:353:24: ( inclusive_or_expression ( '&&' inclusive_or_expression )* )
            // ObjectiveC2ansi.g:353:26: inclusive_or_expression ( '&&' inclusive_or_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_inclusive_or_expression_in_logical_and_expression2056);
            inclusive_or_expression386=this.inclusive_or_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, inclusive_or_expression386.getTree());
            // ObjectiveC2ansi.g:354:3: ( '&&' inclusive_or_expression )*
            loop97:
            do {
                var alt97=2;
                var LA97_0 = this.input.LA(1);

                if ( (LA97_0==119) ) {
                    alt97=1;
                }


                switch (alt97) {
                case 1 :
                    // ObjectiveC2ansi.g:354:4: '&&' inclusive_or_expression
                    string_literal387=this.match(this.input,119,ObjectiveC2ansiParser.FOLLOW_119_in_logical_and_expression2062); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal387_tree = this.adaptor.create(string_literal387);
                    this.adaptor.addChild(root_0, string_literal387_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_inclusive_or_expression_in_logical_and_expression2064);
                    inclusive_or_expression388=this.inclusive_or_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, inclusive_or_expression388.getTree());


                    break;

                default :
                    break loop97;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    inclusive_or_expression_return: (function() {
        ObjectiveC2ansiParser.inclusive_or_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.inclusive_or_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:356:1: inclusive_or_expression : exclusive_or_expression ( '|' exclusive_or_expression )* ;
    // $ANTLR start "inclusive_or_expression"
    inclusive_or_expression: function() {
        var retval = new ObjectiveC2ansiParser.inclusive_or_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal390 = null;
         var exclusive_or_expression389 = null;
         var exclusive_or_expression391 = null;

        var char_literal390_tree=null;

        try {
            // ObjectiveC2ansi.g:356:25: ( exclusive_or_expression ( '|' exclusive_or_expression )* )
            // ObjectiveC2ansi.g:356:27: exclusive_or_expression ( '|' exclusive_or_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_exclusive_or_expression_in_inclusive_or_expression2075);
            exclusive_or_expression389=this.exclusive_or_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, exclusive_or_expression389.getTree());
            // ObjectiveC2ansi.g:357:3: ( '|' exclusive_or_expression )*
            loop98:
            do {
                var alt98=2;
                var LA98_0 = this.input.LA(1);

                if ( (LA98_0==120) ) {
                    alt98=1;
                }


                switch (alt98) {
                case 1 :
                    // ObjectiveC2ansi.g:357:4: '|' exclusive_or_expression
                    char_literal390=this.match(this.input,120,ObjectiveC2ansiParser.FOLLOW_120_in_inclusive_or_expression2081); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal390_tree = this.adaptor.create(char_literal390);
                    this.adaptor.addChild(root_0, char_literal390_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_exclusive_or_expression_in_inclusive_or_expression2083);
                    exclusive_or_expression391=this.exclusive_or_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, exclusive_or_expression391.getTree());


                    break;

                default :
                    break loop98;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    exclusive_or_expression_return: (function() {
        ObjectiveC2ansiParser.exclusive_or_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.exclusive_or_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:359:1: exclusive_or_expression : and_expression ( '^' and_expression )* ;
    // $ANTLR start "exclusive_or_expression"
    exclusive_or_expression: function() {
        var retval = new ObjectiveC2ansiParser.exclusive_or_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal393 = null;
         var and_expression392 = null;
         var and_expression394 = null;

        var char_literal393_tree=null;

        try {
            // ObjectiveC2ansi.g:359:25: ( and_expression ( '^' and_expression )* )
            // ObjectiveC2ansi.g:359:27: and_expression ( '^' and_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_and_expression_in_exclusive_or_expression2094);
            and_expression392=this.and_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, and_expression392.getTree());
            // ObjectiveC2ansi.g:359:42: ( '^' and_expression )*
            loop99:
            do {
                var alt99=2;
                var LA99_0 = this.input.LA(1);

                if ( (LA99_0==121) ) {
                    alt99=1;
                }


                switch (alt99) {
                case 1 :
                    // ObjectiveC2ansi.g:359:43: '^' and_expression
                    char_literal393=this.match(this.input,121,ObjectiveC2ansiParser.FOLLOW_121_in_exclusive_or_expression2097); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal393_tree = this.adaptor.create(char_literal393);
                    this.adaptor.addChild(root_0, char_literal393_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_and_expression_in_exclusive_or_expression2099);
                    and_expression394=this.and_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, and_expression394.getTree());


                    break;

                default :
                    break loop99;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    and_expression_return: (function() {
        ObjectiveC2ansiParser.and_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.and_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:361:1: and_expression : equality_expression ( '&' equality_expression )* ;
    // $ANTLR start "and_expression"
    and_expression: function() {
        var retval = new ObjectiveC2ansiParser.and_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal396 = null;
         var equality_expression395 = null;
         var equality_expression397 = null;

        var char_literal396_tree=null;

        try {
            // ObjectiveC2ansi.g:361:16: ( equality_expression ( '&' equality_expression )* )
            // ObjectiveC2ansi.g:361:18: equality_expression ( '&' equality_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_equality_expression_in_and_expression2110);
            equality_expression395=this.equality_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equality_expression395.getTree());
            // ObjectiveC2ansi.g:361:38: ( '&' equality_expression )*
            loop100:
            do {
                var alt100=2;
                var LA100_0 = this.input.LA(1);

                if ( (LA100_0==122) ) {
                    alt100=1;
                }


                switch (alt100) {
                case 1 :
                    // ObjectiveC2ansi.g:361:39: '&' equality_expression
                    char_literal396=this.match(this.input,122,ObjectiveC2ansiParser.FOLLOW_122_in_and_expression2113); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal396_tree = this.adaptor.create(char_literal396);
                    this.adaptor.addChild(root_0, char_literal396_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_equality_expression_in_and_expression2115);
                    equality_expression397=this.equality_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equality_expression397.getTree());


                    break;

                default :
                    break loop100;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    equality_expression_return: (function() {
        ObjectiveC2ansiParser.equality_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.equality_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:363:1: equality_expression : relational_expression ( ( '!=' | '==' ) relational_expression )* ;
    // $ANTLR start "equality_expression"
    equality_expression: function() {
        var retval = new ObjectiveC2ansiParser.equality_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set399 = null;
         var relational_expression398 = null;
         var relational_expression400 = null;

        var set399_tree=null;

        try {
            // ObjectiveC2ansi.g:363:21: ( relational_expression ( ( '!=' | '==' ) relational_expression )* )
            // ObjectiveC2ansi.g:363:23: relational_expression ( ( '!=' | '==' ) relational_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_relational_expression_in_equality_expression2126);
            relational_expression398=this.relational_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relational_expression398.getTree());
            // ObjectiveC2ansi.g:364:3: ( ( '!=' | '==' ) relational_expression )*
            loop101:
            do {
                var alt101=2;
                var LA101_0 = this.input.LA(1);

                if ( ((LA101_0>=123 && LA101_0<=124)) ) {
                    alt101=1;
                }


                switch (alt101) {
                case 1 :
                    // ObjectiveC2ansi.g:364:4: ( '!=' | '==' ) relational_expression
                    set399=this.input.LT(1);
                    if ( (this.input.LA(1)>=123 && this.input.LA(1)<=124) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set399));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_relational_expression_in_equality_expression2140);
                    relational_expression400=this.relational_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relational_expression400.getTree());


                    break;

                default :
                    break loop101;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    relational_expression_return: (function() {
        ObjectiveC2ansiParser.relational_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.relational_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:366:1: relational_expression : shift_expression ( ( '<' | '>' | '<=' | '>=' ) shift_expression )* ;
    // $ANTLR start "relational_expression"
    relational_expression: function() {
        var retval = new ObjectiveC2ansiParser.relational_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set402 = null;
         var shift_expression401 = null;
         var shift_expression403 = null;

        var set402_tree=null;

        try {
            // ObjectiveC2ansi.g:366:23: ( shift_expression ( ( '<' | '>' | '<=' | '>=' ) shift_expression )* )
            // ObjectiveC2ansi.g:366:25: shift_expression ( ( '<' | '>' | '<=' | '>=' ) shift_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_shift_expression_in_relational_expression2151);
            shift_expression401=this.shift_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, shift_expression401.getTree());
            // ObjectiveC2ansi.g:367:2: ( ( '<' | '>' | '<=' | '>=' ) shift_expression )*
            loop102:
            do {
                var alt102=2;
                var LA102_0 = this.input.LA(1);

                if ( (LA102_0==30||LA102_0==35||(LA102_0>=125 && LA102_0<=126)) ) {
                    alt102=1;
                }


                switch (alt102) {
                case 1 :
                    // ObjectiveC2ansi.g:367:3: ( '<' | '>' | '<=' | '>=' ) shift_expression
                    set402=this.input.LT(1);
                    if ( this.input.LA(1)==30||this.input.LA(1)==35||(this.input.LA(1)>=125 && this.input.LA(1)<=126) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set402));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_shift_expression_in_relational_expression2171);
                    shift_expression403=this.shift_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, shift_expression403.getTree());


                    break;

                default :
                    break loop102;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    shift_expression_return: (function() {
        ObjectiveC2ansiParser.shift_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.shift_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:369:1: shift_expression : additive_expression ( ( '<<' | '>>' ) additive_expression )* ;
    // $ANTLR start "shift_expression"
    shift_expression: function() {
        var retval = new ObjectiveC2ansiParser.shift_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set405 = null;
         var additive_expression404 = null;
         var additive_expression406 = null;

        var set405_tree=null;

        try {
            // ObjectiveC2ansi.g:369:18: ( additive_expression ( ( '<<' | '>>' ) additive_expression )* )
            // ObjectiveC2ansi.g:369:20: additive_expression ( ( '<<' | '>>' ) additive_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_additive_expression_in_shift_expression2182);
            additive_expression404=this.additive_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additive_expression404.getTree());
            // ObjectiveC2ansi.g:369:40: ( ( '<<' | '>>' ) additive_expression )*
            loop103:
            do {
                var alt103=2;
                var LA103_0 = this.input.LA(1);

                if ( ((LA103_0>=127 && LA103_0<=128)) ) {
                    alt103=1;
                }


                switch (alt103) {
                case 1 :
                    // ObjectiveC2ansi.g:369:41: ( '<<' | '>>' ) additive_expression
                    set405=this.input.LT(1);
                    if ( (this.input.LA(1)>=127 && this.input.LA(1)<=128) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set405));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_additive_expression_in_shift_expression2193);
                    additive_expression406=this.additive_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additive_expression406.getTree());


                    break;

                default :
                    break loop103;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    additive_expression_return: (function() {
        ObjectiveC2ansiParser.additive_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.additive_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:371:1: additive_expression : multiplicative_expression ( ( '+' | '-' ) multiplicative_expression )* ;
    // $ANTLR start "additive_expression"
    additive_expression: function() {
        var retval = new ObjectiveC2ansiParser.additive_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set408 = null;
         var multiplicative_expression407 = null;
         var multiplicative_expression409 = null;

        var set408_tree=null;

        try {
            // ObjectiveC2ansi.g:371:21: ( multiplicative_expression ( ( '+' | '-' ) multiplicative_expression )* )
            // ObjectiveC2ansi.g:371:23: multiplicative_expression ( ( '+' | '-' ) multiplicative_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_multiplicative_expression_in_additive_expression2204);
            multiplicative_expression407=this.multiplicative_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicative_expression407.getTree());
            // ObjectiveC2ansi.g:372:3: ( ( '+' | '-' ) multiplicative_expression )*
            loop104:
            do {
                var alt104=2;
                var LA104_0 = this.input.LA(1);

                if ( ((LA104_0>=53 && LA104_0<=54)) ) {
                    alt104=1;
                }


                switch (alt104) {
                case 1 :
                    // ObjectiveC2ansi.g:372:4: ( '+' | '-' ) multiplicative_expression
                    set408=this.input.LT(1);
                    if ( (this.input.LA(1)>=53 && this.input.LA(1)<=54) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set408));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_multiplicative_expression_in_additive_expression2217);
                    multiplicative_expression409=this.multiplicative_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicative_expression409.getTree());


                    break;

                default :
                    break loop104;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    multiplicative_expression_return: (function() {
        ObjectiveC2ansiParser.multiplicative_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.multiplicative_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:374:1: multiplicative_expression : cast_expression ( ( '*' | '/' | '%' ) cast_expression )* ;
    // $ANTLR start "multiplicative_expression"
    multiplicative_expression: function() {
        var retval = new ObjectiveC2ansiParser.multiplicative_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set411 = null;
         var cast_expression410 = null;
         var cast_expression412 = null;

        var set411_tree=null;

        try {
            // ObjectiveC2ansi.g:374:27: ( cast_expression ( ( '*' | '/' | '%' ) cast_expression )* )
            // ObjectiveC2ansi.g:374:29: cast_expression ( ( '*' | '/' | '%' ) cast_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_cast_expression_in_multiplicative_expression2228);
            cast_expression410=this.cast_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, cast_expression410.getTree());
            // ObjectiveC2ansi.g:375:3: ( ( '*' | '/' | '%' ) cast_expression )*
            loop105:
            do {
                var alt105=2;
                var LA105_0 = this.input.LA(1);

                if ( (LA105_0==32||LA105_0==93||LA105_0==129) ) {
                    alt105=1;
                }


                switch (alt105) {
                case 1 :
                    // ObjectiveC2ansi.g:375:4: ( '*' | '/' | '%' ) cast_expression
                    set411=this.input.LT(1);
                    if ( this.input.LA(1)==32||this.input.LA(1)==93||this.input.LA(1)==129 ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set411));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_cast_expression_in_multiplicative_expression2246);
                    cast_expression412=this.cast_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, cast_expression412.getTree());


                    break;

                default :
                    break loop105;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    cast_expression_return: (function() {
        ObjectiveC2ansiParser.cast_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.cast_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:377:1: cast_expression : ( '(' type_name ')' cast_expression | unary_expression );
    // $ANTLR start "cast_expression"
    cast_expression: function() {
        var retval = new ObjectiveC2ansiParser.cast_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal413 = null;
        var char_literal415 = null;
         var type_name414 = null;
         var cast_expression416 = null;
         var unary_expression417 = null;

        var char_literal413_tree=null;
        var char_literal415_tree=null;

        try {
            // ObjectiveC2ansi.g:377:17: ( '(' type_name ')' cast_expression | unary_expression )
            var alt106=2;
            alt106 = this.dfa106.predict(this.input);
            switch (alt106) {
                case 1 :
                    // ObjectiveC2ansi.g:377:19: '(' type_name ')' cast_expression
                    root_0 = this.adaptor.nil();

                    char_literal413=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_cast_expression2257); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal413_tree = this.adaptor.create(char_literal413);
                    this.adaptor.addChild(root_0, char_literal413_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_name_in_cast_expression2259);
                    type_name414=this.type_name();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_name414.getTree());
                    char_literal415=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_cast_expression2261); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal415_tree = this.adaptor.create(char_literal415);
                    this.adaptor.addChild(root_0, char_literal415_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_cast_expression_in_cast_expression2263);
                    cast_expression416=this.cast_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, cast_expression416.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:377:55: unary_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_unary_expression_in_cast_expression2267);
                    unary_expression417=this.unary_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unary_expression417.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unary_expression_return: (function() {
        ObjectiveC2ansiParser.unary_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.unary_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:379:1: unary_expression : ( postfix_expression | '++' unary_expression | '--' unary_expression | unary_operator cast_expression | 'sizeof' ( '(' type_name ')' | unary_expression ) );
    // $ANTLR start "unary_expression"
    unary_expression: function() {
        var retval = new ObjectiveC2ansiParser.unary_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal419 = null;
        var string_literal421 = null;
        var string_literal425 = null;
        var char_literal426 = null;
        var char_literal428 = null;
         var postfix_expression418 = null;
         var unary_expression420 = null;
         var unary_expression422 = null;
         var unary_operator423 = null;
         var cast_expression424 = null;
         var type_name427 = null;
         var unary_expression429 = null;

        var string_literal419_tree=null;
        var string_literal421_tree=null;
        var string_literal425_tree=null;
        var char_literal426_tree=null;
        var char_literal428_tree=null;

        try {
            // ObjectiveC2ansi.g:380:3: ( postfix_expression | '++' unary_expression | '--' unary_expression | unary_operator cast_expression | 'sizeof' ( '(' type_name ')' | unary_expression ) )
            var alt108=5;
            switch ( this.input.LA(1) ) {
            case IDENTIFIER:
            case STRING_LITERAL:
            case DECIMAL_LITERAL:
            case HEX_LITERAL:
            case OCTAL_LITERAL:
            case CHARACTER_LITERAL:
            case FLOATING_POINT_LITERAL:
            case 40:
            case 43:
            case 73:
            case 74:
            case 77:
            case 78:
                alt108=1;
                break;
            case 130:
                alt108=2;
                break;
            case 131:
                alt108=3;
                break;
            case 54:
            case 93:
            case 122:
            case 133:
            case 134:
                alt108=4;
                break;
            case 132:
                alt108=5;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 108, 0, this.input);

                throw nvae;
            }

            switch (alt108) {
                case 1 :
                    // ObjectiveC2ansi.g:380:5: postfix_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_postfix_expression_in_unary_expression2279);
                    postfix_expression418=this.postfix_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, postfix_expression418.getTree());


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:381:5: '++' unary_expression
                    root_0 = this.adaptor.nil();

                    string_literal419=this.match(this.input,130,ObjectiveC2ansiParser.FOLLOW_130_in_unary_expression2285); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal419_tree = this.adaptor.create(string_literal419);
                    this.adaptor.addChild(root_0, string_literal419_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_unary_expression_in_unary_expression2287);
                    unary_expression420=this.unary_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unary_expression420.getTree());


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:382:5: '--' unary_expression
                    root_0 = this.adaptor.nil();

                    string_literal421=this.match(this.input,131,ObjectiveC2ansiParser.FOLLOW_131_in_unary_expression2293); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal421_tree = this.adaptor.create(string_literal421);
                    this.adaptor.addChild(root_0, string_literal421_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_unary_expression_in_unary_expression2295);
                    unary_expression422=this.unary_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unary_expression422.getTree());


                    break;
                case 4 :
                    // ObjectiveC2ansi.g:383:5: unary_operator cast_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_unary_operator_in_unary_expression2301);
                    unary_operator423=this.unary_operator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unary_operator423.getTree());
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_cast_expression_in_unary_expression2303);
                    cast_expression424=this.cast_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, cast_expression424.getTree());


                    break;
                case 5 :
                    // ObjectiveC2ansi.g:384:5: 'sizeof' ( '(' type_name ')' | unary_expression )
                    root_0 = this.adaptor.nil();

                    string_literal425=this.match(this.input,132,ObjectiveC2ansiParser.FOLLOW_132_in_unary_expression2309); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal425_tree = this.adaptor.create(string_literal425);
                    this.adaptor.addChild(root_0, string_literal425_tree);
                    }
                    // ObjectiveC2ansi.g:384:14: ( '(' type_name ')' | unary_expression )
                    var alt107=2;
                    alt107 = this.dfa107.predict(this.input);
                    switch (alt107) {
                        case 1 :
                            // ObjectiveC2ansi.g:384:15: '(' type_name ')'
                            char_literal426=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_unary_expression2312); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            char_literal426_tree = this.adaptor.create(char_literal426);
                            this.adaptor.addChild(root_0, char_literal426_tree);
                            }
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_name_in_unary_expression2314);
                            type_name427=this.type_name();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_name427.getTree());
                            char_literal428=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_unary_expression2316); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            char_literal428_tree = this.adaptor.create(char_literal428);
                            this.adaptor.addChild(root_0, char_literal428_tree);
                            }


                            break;
                        case 2 :
                            // ObjectiveC2ansi.g:384:35: unary_expression
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_unary_expression_in_unary_expression2320);
                            unary_expression429=this.unary_expression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unary_expression429.getTree());


                            break;

                    }



                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unary_operator_return: (function() {
        ObjectiveC2ansiParser.unary_operator_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.unary_operator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:386:1: unary_operator : ( '&' | '*' | '-' | '~' | '!' );
    // $ANTLR start "unary_operator"
    unary_operator: function() {
        var retval = new ObjectiveC2ansiParser.unary_operator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set430 = null;

        var set430_tree=null;

        try {
            // ObjectiveC2ansi.g:386:16: ( '&' | '*' | '-' | '~' | '!' )
            // ObjectiveC2ansi.g:
            root_0 = this.adaptor.nil();

            set430=this.input.LT(1);
            if ( this.input.LA(1)==54||this.input.LA(1)==93||this.input.LA(1)==122||(this.input.LA(1)>=133 && this.input.LA(1)<=134) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set430));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    postfix_expression_return: (function() {
        ObjectiveC2ansiParser.postfix_expression_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.postfix_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:388:1: postfix_expression : primary_expression ( '[' expression ']' | '(' ( argument_expression_list )? ')' | '.' identifier | '->' identifier | '++' | '--' )* ;
    // $ANTLR start "postfix_expression"
    postfix_expression: function() {
        var retval = new ObjectiveC2ansiParser.postfix_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal432 = null;
        var char_literal434 = null;
        var char_literal435 = null;
        var char_literal437 = null;
        var char_literal438 = null;
        var string_literal440 = null;
        var string_literal442 = null;
        var string_literal443 = null;
         var primary_expression431 = null;
         var expression433 = null;
         var argument_expression_list436 = null;
         var identifier439 = null;
         var identifier441 = null;

        var char_literal432_tree=null;
        var char_literal434_tree=null;
        var char_literal435_tree=null;
        var char_literal437_tree=null;
        var char_literal438_tree=null;
        var string_literal440_tree=null;
        var string_literal442_tree=null;
        var string_literal443_tree=null;

        try {
            // ObjectiveC2ansi.g:388:20: ( primary_expression ( '[' expression ']' | '(' ( argument_expression_list )? ')' | '.' identifier | '->' identifier | '++' | '--' )* )
            // ObjectiveC2ansi.g:388:22: primary_expression ( '[' expression ']' | '(' ( argument_expression_list )? ')' | '.' identifier | '->' identifier | '++' | '--' )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_primary_expression_in_postfix_expression2355);
            primary_expression431=this.primary_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primary_expression431.getTree());
            // ObjectiveC2ansi.g:389:3: ( '[' expression ']' | '(' ( argument_expression_list )? ')' | '.' identifier | '->' identifier | '++' | '--' )*
            loop110:
            do {
                var alt110=7;
                switch ( this.input.LA(1) ) {
                case 74:
                    alt110=1;
                    break;
                case 40:
                    alt110=2;
                    break;
                case 34:
                    alt110=3;
                    break;
                case 135:
                    alt110=4;
                    break;
                case 130:
                    alt110=5;
                    break;
                case 131:
                    alt110=6;
                    break;

                }

                switch (alt110) {
                case 1 :
                    // ObjectiveC2ansi.g:389:4: '[' expression ']'
                    char_literal432=this.match(this.input,74,ObjectiveC2ansiParser.FOLLOW_74_in_postfix_expression2360); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal432_tree = this.adaptor.create(char_literal432);
                    this.adaptor.addChild(root_0, char_literal432_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_postfix_expression2362);
                    expression433=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression433.getTree());
                    char_literal434=this.match(this.input,75,ObjectiveC2ansiParser.FOLLOW_75_in_postfix_expression2364); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal434_tree = this.adaptor.create(char_literal434);
                    this.adaptor.addChild(root_0, char_literal434_tree);
                    }


                    break;
                case 2 :
                    // ObjectiveC2ansi.g:390:5: '(' ( argument_expression_list )? ')'
                    char_literal435=this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_postfix_expression2371); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal435_tree = this.adaptor.create(char_literal435);
                    this.adaptor.addChild(root_0, char_literal435_tree);
                    }
                    // ObjectiveC2ansi.g:390:9: ( argument_expression_list )?
                    var alt109=2;
                    var LA109_0 = this.input.LA(1);

                    if ( ((LA109_0>=IDENTIFIER && LA109_0<=FLOATING_POINT_LITERAL)||LA109_0==40||LA109_0==43||LA109_0==54||(LA109_0>=73 && LA109_0<=74)||(LA109_0>=77 && LA109_0<=78)||LA109_0==93||LA109_0==122||(LA109_0>=130 && LA109_0<=134)) ) {
                        alt109=1;
                    }
                    switch (alt109) {
                        case 1 :
                            // ObjectiveC2ansi.g:0:0: argument_expression_list
                            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_argument_expression_list_in_postfix_expression2373);
                            argument_expression_list436=this.argument_expression_list();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, argument_expression_list436.getTree());


                            break;

                    }

                    char_literal437=this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_postfix_expression2376); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal437_tree = this.adaptor.create(char_literal437);
                    this.adaptor.addChild(root_0, char_literal437_tree);
                    }


                    break;
                case 3 :
                    // ObjectiveC2ansi.g:391:5: '.' identifier
                    char_literal438=this.match(this.input,34,ObjectiveC2ansiParser.FOLLOW_34_in_postfix_expression2382); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal438_tree = this.adaptor.create(char_literal438);
                    this.adaptor.addChild(root_0, char_literal438_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_identifier_in_postfix_expression2384);
                    identifier439=this.identifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, identifier439.getTree());


                    break;
                case 4 :
                    // ObjectiveC2ansi.g:392:5: '->' identifier
                    string_literal440=this.match(this.input,135,ObjectiveC2ansiParser.FOLLOW_135_in_postfix_expression2390); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal440_tree = this.adaptor.create(string_literal440);
                    this.adaptor.addChild(root_0, string_literal440_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_identifier_in_postfix_expression2392);
                    identifier441=this.identifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, identifier441.getTree());


                    break;
                case 5 :
                    // ObjectiveC2ansi.g:393:5: '++'
                    string_literal442=this.match(this.input,130,ObjectiveC2ansiParser.FOLLOW_130_in_postfix_expression2398); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal442_tree = this.adaptor.create(string_literal442);
                    this.adaptor.addChild(root_0, string_literal442_tree);
                    }


                    break;
                case 6 :
                    // ObjectiveC2ansi.g:394:5: '--'
                    string_literal443=this.match(this.input,131,ObjectiveC2ansiParser.FOLLOW_131_in_postfix_expression2404); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal443_tree = this.adaptor.create(string_literal443);
                    this.adaptor.addChild(root_0, string_literal443_tree);
                    }


                    break;

                default :
                    break loop110;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    argument_expression_list_return: (function() {
        ObjectiveC2ansiParser.argument_expression_list_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.argument_expression_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:397:1: argument_expression_list : assignment_expression ( ',' assignment_expression )* ;
    // $ANTLR start "argument_expression_list"
    argument_expression_list: function() {
        var retval = new ObjectiveC2ansiParser.argument_expression_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal445 = null;
         var assignment_expression444 = null;
         var assignment_expression446 = null;

        var char_literal445_tree=null;

        try {
            // ObjectiveC2ansi.g:398:3: ( assignment_expression ( ',' assignment_expression )* )
            // ObjectiveC2ansi.g:398:5: assignment_expression ( ',' assignment_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(ObjectiveC2ansiParser.FOLLOW_assignment_expression_in_argument_expression_list2420);
            assignment_expression444=this.assignment_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression444.getTree());
            // ObjectiveC2ansi.g:398:27: ( ',' assignment_expression )*
            loop111:
            do {
                var alt111=2;
                var LA111_0 = this.input.LA(1);

                if ( (LA111_0==46) ) {
                    alt111=1;
                }


                switch (alt111) {
                case 1 :
                    // ObjectiveC2ansi.g:398:28: ',' assignment_expression
                    char_literal445=this.match(this.input,46,ObjectiveC2ansiParser.FOLLOW_46_in_argument_expression_list2423); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal445_tree = this.adaptor.create(char_literal445);
                    this.adaptor.addChild(root_0, char_literal445_tree);
                    }
                    this.pushFollow(ObjectiveC2ansiParser.FOLLOW_assignment_expression_in_argument_expression_list2425);
                    assignment_expression446=this.assignment_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression446.getTree());


                    break;

                default :
                    break loop111;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    identifier_return: (function() {
        ObjectiveC2ansiParser.identifier_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.identifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:400:1: identifier : IDENTIFIER ;
    // $ANTLR start "identifier"
    identifier: function() {
        var retval = new ObjectiveC2ansiParser.identifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER447 = null;

        var IDENTIFIER447_tree=null;

        try {
            // ObjectiveC2ansi.g:400:12: ( IDENTIFIER )
            // ObjectiveC2ansi.g:400:14: IDENTIFIER
            root_0 = this.adaptor.nil();

            IDENTIFIER447=this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_identifier2436); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER447_tree = this.adaptor.create(IDENTIFIER447);
            this.adaptor.addChild(root_0, IDENTIFIER447_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    constant_return: (function() {
        ObjectiveC2ansiParser.constant_return = function(){};
        org.antlr.lang.extend(ObjectiveC2ansiParser.constant_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ObjectiveC2ansi.g:402:1: constant : ( DECIMAL_LITERAL | HEX_LITERAL | OCTAL_LITERAL | CHARACTER_LITERAL | FLOATING_POINT_LITERAL );
    // $ANTLR start "constant"
    constant: function() {
        var retval = new ObjectiveC2ansiParser.constant_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set448 = null;

        var set448_tree=null;

        try {
            // ObjectiveC2ansi.g:402:10: ( DECIMAL_LITERAL | HEX_LITERAL | OCTAL_LITERAL | CHARACTER_LITERAL | FLOATING_POINT_LITERAL )
            // ObjectiveC2ansi.g:
            root_0 = this.adaptor.nil();

            set448=this.input.LT(1);
            if ( (this.input.LA(1)>=DECIMAL_LITERAL && this.input.LA(1)<=FLOATING_POINT_LITERAL) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set448));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // $ANTLR start "synpred5_ObjectiveC2ansi"
    synpred5_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:21:2: ( function_definition )
        // ObjectiveC2ansi.g:21:2: function_definition
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_function_definition_in_synpred5_ObjectiveC2ansi58);
        this.function_definition();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred5_ObjectiveC2ansi",

    // $ANTLR start "synpred6_ObjectiveC2ansi"
    synpred6_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:22:3: ( declaration )
        // ObjectiveC2ansi.g:22:3: declaration
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declaration_in_synpred6_ObjectiveC2ansi62);
        this.declaration();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred6_ObjectiveC2ansi",

    // $ANTLR start "synpred7_ObjectiveC2ansi"
    synpred7_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:23:3: ( class_interface )
        // ObjectiveC2ansi.g:23:3: class_interface
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_interface_in_synpred7_ObjectiveC2ansi67);
        this.class_interface();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred7_ObjectiveC2ansi",

    // $ANTLR start "synpred8_ObjectiveC2ansi"
    synpred8_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:24:3: ( class_implementation )
        // ObjectiveC2ansi.g:24:3: class_implementation
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_implementation_in_synpred8_ObjectiveC2ansi71);
        this.class_implementation();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred8_ObjectiveC2ansi",

    // $ANTLR start "synpred9_ObjectiveC2ansi"
    synpred9_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:25:3: ( category_interface )
        // ObjectiveC2ansi.g:25:3: category_interface
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_category_interface_in_synpred9_ObjectiveC2ansi75);
        this.category_interface();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred9_ObjectiveC2ansi",

    // $ANTLR start "synpred10_ObjectiveC2ansi"
    synpred10_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:26:3: ( category_implementation )
        // ObjectiveC2ansi.g:26:3: category_implementation
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_category_implementation_in_synpred10_ObjectiveC2ansi79);
        this.category_implementation();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred10_ObjectiveC2ansi",

    // $ANTLR start "synpred11_ObjectiveC2ansi"
    synpred11_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:27:3: ( protocol_declaration )
        // ObjectiveC2ansi.g:27:3: protocol_declaration
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_declaration_in_synpred11_ObjectiveC2ansi83);
        this.protocol_declaration();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred11_ObjectiveC2ansi",

    // $ANTLR start "synpred12_ObjectiveC2ansi"
    synpred12_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:28:3: ( protocol_declaration_list )
        // ObjectiveC2ansi.g:28:3: protocol_declaration_list
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_declaration_list_in_synpred12_ObjectiveC2ansi87);
        this.protocol_declaration_list();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred12_ObjectiveC2ansi",

    // $ANTLR start "synpred48_ObjectiveC2ansi"
    synpred48_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:142:3: ( function_definition )
        // ObjectiveC2ansi.g:142:3: function_definition
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_function_definition_in_synpred48_ObjectiveC2ansi611);
        this.function_definition();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred48_ObjectiveC2ansi",

    // $ANTLR start "synpred49_ObjectiveC2ansi"
    synpred49_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:142:25: ( declaration )
        // ObjectiveC2ansi.g:142:25: declaration
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declaration_in_synpred49_ObjectiveC2ansi615);
        this.declaration();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred49_ObjectiveC2ansi",

    // $ANTLR start "synpred56_ObjectiveC2ansi"
    synpred56_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:156:34: ( parameter_list )
        // ObjectiveC2ansi.g:156:34: parameter_list
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_parameter_list_in_synpred56_ObjectiveC2ansi690);
        this.parameter_list();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred56_ObjectiveC2ansi",

    // $ANTLR start "synpred71_ObjectiveC2ansi"
    synpred71_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:171:4: ( ( class_name ( protocol_reference_list )? ) )
        // ObjectiveC2ansi.g:171:4: ( class_name ( protocol_reference_list )? )
        // ObjectiveC2ansi.g:171:4: ( class_name ( protocol_reference_list )? )
        // ObjectiveC2ansi.g:171:5: class_name ( protocol_reference_list )?
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_name_in_synpred71_ObjectiveC2ansi791);
        this.class_name();

        this.state._fsp--;
        if (this.state.failed) return ;
        // ObjectiveC2ansi.g:171:16: ( protocol_reference_list )?
        var alt114=2;
        var LA114_0 = this.input.LA(1);

        if ( (LA114_0==30) ) {
            alt114=1;
        }
        switch (alt114) {
            case 1 :
                // ObjectiveC2ansi.g:171:18: protocol_reference_list
                this.pushFollow(ObjectiveC2ansiParser.FOLLOW_protocol_reference_list_in_synpred71_ObjectiveC2ansi795);
                this.protocol_reference_list();

                this.state._fsp--;
                if (this.state.failed) return ;


                break;

        }






    },
    // $ANTLR end "synpred71_ObjectiveC2ansi",

    // $ANTLR start "synpred89_ObjectiveC2ansi"
    synpred89_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:198:2: ( expression )
        // ObjectiveC2ansi.g:198:2: expression
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_expression_in_synpred89_ObjectiveC2ansi939);
        this.expression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred89_ObjectiveC2ansi",

    // $ANTLR start "synpred90_ObjectiveC2ansi"
    synpred90_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:199:4: ( class_name )
        // ObjectiveC2ansi.g:199:4: class_name
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_class_name_in_synpred90_ObjectiveC2ansi944);
        this.class_name();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred90_ObjectiveC2ansi",

    // $ANTLR start "synpred100_ObjectiveC2ansi"
    synpred100_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:250:32: ( type_specifier )
        // ObjectiveC2ansi.g:250:32: type_specifier
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_specifier_in_synpred100_ObjectiveC2ansi1166);
        this.type_specifier();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred100_ObjectiveC2ansi",

    // $ANTLR start "synpred109_ObjectiveC2ansi"
    synpred109_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:258:5: ( IDENTIFIER )
        // ObjectiveC2ansi.g:258:5: IDENTIFIER
        this.match(this.input,IDENTIFIER,ObjectiveC2ansiParser.FOLLOW_IDENTIFIER_in_synpred109_ObjectiveC2ansi1247); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred109_ObjectiveC2ansi",

    // $ANTLR start "synpred112_ObjectiveC2ansi"
    synpred112_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:262:29: ( type_specifier )
        // ObjectiveC2ansi.g:262:29: type_specifier
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_specifier_in_synpred112_ObjectiveC2ansi1283);
        this.type_specifier();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred112_ObjectiveC2ansi",

    // $ANTLR start "synpred115_ObjectiveC2ansi"
    synpred115_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:266:21: ( declarator )
        // ObjectiveC2ansi.g:266:21: declarator
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_synpred115_ObjectiveC2ansi1314);
        this.declarator();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred115_ObjectiveC2ansi",

    // $ANTLR start "synpred117_ObjectiveC2ansi"
    synpred117_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:269:17: ( '{' enumerator_list '}' )
        // ObjectiveC2ansi.g:269:17: '{' enumerator_list '}'
        this.match(this.input,47,ObjectiveC2ansiParser.FOLLOW_47_in_synpred117_ObjectiveC2ansi1341); if (this.state.failed) return ;
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_enumerator_list_in_synpred117_ObjectiveC2ansi1343);
        this.enumerator_list();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,48,ObjectiveC2ansiParser.FOLLOW_48_in_synpred117_ObjectiveC2ansi1345); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred117_ObjectiveC2ansi",

    // $ANTLR start "synpred123_ObjectiveC2ansi"
    synpred123_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:276:32: ( declarator_suffix )
        // ObjectiveC2ansi.g:276:32: declarator_suffix
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_suffix_in_synpred123_ObjectiveC2ansi1417);
        this.declarator_suffix();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred123_ObjectiveC2ansi",

    // $ANTLR start "synpred125_ObjectiveC2ansi"
    synpred125_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:277:40: ( declarator_suffix )
        // ObjectiveC2ansi.g:277:40: declarator_suffix
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_suffix_in_synpred125_ObjectiveC2ansi1446);
        this.declarator_suffix();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred125_ObjectiveC2ansi",

    // $ANTLR start "synpred130_ObjectiveC2ansi"
    synpred130_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:285:29: ( declarator )
        // ObjectiveC2ansi.g:285:29: declarator
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_synpred130_ObjectiveC2ansi1506);
        this.declarator();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred130_ObjectiveC2ansi",

    // $ANTLR start "synpred131_ObjectiveC2ansi"
    synpred131_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:285:29: ( ( declarator )? )
        // ObjectiveC2ansi.g:285:29: ( declarator )?
        // ObjectiveC2ansi.g:285:29: ( declarator )?
        var alt120=2;
        var LA120_0 = this.input.LA(1);

        if ( (LA120_0==IDENTIFIER||LA120_0==40||LA120_0==93) ) {
            alt120=1;
        }
        switch (alt120) {
            case 1 :
                // ObjectiveC2ansi.g:0:0: declarator
                this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declarator_in_synpred131_ObjectiveC2ansi1506);
                this.declarator();

                this.state._fsp--;
                if (this.state.failed) return ;


                break;

        }



    },
    // $ANTLR end "synpred131_ObjectiveC2ansi",

    // $ANTLR start "synpred135_ObjectiveC2ansi"
    synpred135_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:292:23: ( '*' ( type_qualifier )* abstract_declarator )
        // ObjectiveC2ansi.g:292:23: '*' ( type_qualifier )* abstract_declarator
        this.match(this.input,93,ObjectiveC2ansiParser.FOLLOW_93_in_synpred135_ObjectiveC2ansi1561); if (this.state.failed) return ;
        // ObjectiveC2ansi.g:292:27: ( type_qualifier )*
        loop121:
        do {
            var alt121=2;
            var LA121_0 = this.input.LA(1);

            if ( ((LA121_0>=65 && LA121_0<=72)) ) {
                alt121=1;
            }


            switch (alt121) {
            case 1 :
                // ObjectiveC2ansi.g:0:0: type_qualifier
                this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_qualifier_in_synpred135_ObjectiveC2ansi1563);
                this.type_qualifier();

                this.state._fsp--;
                if (this.state.failed) return ;


                break;

            default :
                break loop121;
            }
        } while (true);

        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_abstract_declarator_in_synpred135_ObjectiveC2ansi1566);
        this.abstract_declarator();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred135_ObjectiveC2ansi",

    // $ANTLR start "synpred136_ObjectiveC2ansi"
    synpred136_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:293:33: ( abstract_declarator_suffix )
        // ObjectiveC2ansi.g:293:33: abstract_declarator_suffix
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_abstract_declarator_suffix_in_synpred136_ObjectiveC2ansi1579);
        this.abstract_declarator_suffix();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred136_ObjectiveC2ansi",

    // $ANTLR start "synpred137_ObjectiveC2ansi"
    synpred137_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:293:5: ( '(' abstract_declarator ')' ( abstract_declarator_suffix )+ )
        // ObjectiveC2ansi.g:293:5: '(' abstract_declarator ')' ( abstract_declarator_suffix )+
        this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_synpred137_ObjectiveC2ansi1573); if (this.state.failed) return ;
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_abstract_declarator_in_synpred137_ObjectiveC2ansi1575);
        this.abstract_declarator();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_synpred137_ObjectiveC2ansi1577); if (this.state.failed) return ;
        // ObjectiveC2ansi.g:293:33: ( abstract_declarator_suffix )+
        var cnt122=0;
        loop122:
        do {
            var alt122=2;
            var LA122_0 = this.input.LA(1);

            if ( (LA122_0==40||LA122_0==74) ) {
                alt122=1;
            }


            switch (alt122) {
            case 1 :
                // ObjectiveC2ansi.g:0:0: abstract_declarator_suffix
                this.pushFollow(ObjectiveC2ansiParser.FOLLOW_abstract_declarator_suffix_in_synpred137_ObjectiveC2ansi1579);
                this.abstract_declarator_suffix();

                this.state._fsp--;
                if (this.state.failed) return ;


                break;

            default :
                if ( cnt122 >= 1 ) {
                    break loop122;
                }
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var eee = new org.antlr.runtime.EarlyExitException(122, this.input);
                    throw eee;
            }
            cnt122++;
        } while (true);



    },
    // $ANTLR end "synpred137_ObjectiveC2ansi",

    // $ANTLR start "synpred154_ObjectiveC2ansi"
    synpred154_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:320:27: ( declaration )
        // ObjectiveC2ansi.g:320:27: declaration
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_declaration_in_synpred154_ObjectiveC2ansi1757);
        this.declaration();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred154_ObjectiveC2ansi",

    // $ANTLR start "synpred156_ObjectiveC2ansi"
    synpred156_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:323:40: ( 'else' statement )
        // ObjectiveC2ansi.g:323:40: 'else' statement
        this.match(this.input,98,ObjectiveC2ansiParser.FOLLOW_98_in_synpred156_ObjectiveC2ansi1786); if (this.state.failed) return ;
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_statement_in_synpred156_ObjectiveC2ansi1788);
        this.statement();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred156_ObjectiveC2ansi",

    // $ANTLR start "synpred198_ObjectiveC2ansi"
    synpred198_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:377:19: ( '(' type_name ')' cast_expression )
        // ObjectiveC2ansi.g:377:19: '(' type_name ')' cast_expression
        this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_synpred198_ObjectiveC2ansi2257); if (this.state.failed) return ;
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_name_in_synpred198_ObjectiveC2ansi2259);
        this.type_name();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_synpred198_ObjectiveC2ansi2261); if (this.state.failed) return ;
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_cast_expression_in_synpred198_ObjectiveC2ansi2263);
        this.cast_expression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred198_ObjectiveC2ansi",

    // $ANTLR start "synpred203_ObjectiveC2ansi"
    synpred203_ObjectiveC2ansi_fragment: function() {
        // ObjectiveC2ansi.g:384:15: ( '(' type_name ')' )
        // ObjectiveC2ansi.g:384:15: '(' type_name ')'
        this.match(this.input,40,ObjectiveC2ansiParser.FOLLOW_40_in_synpred203_ObjectiveC2ansi2312); if (this.state.failed) return ;
        this.pushFollow(ObjectiveC2ansiParser.FOLLOW_type_name_in_synpred203_ObjectiveC2ansi2314);
        this.type_name();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,41,ObjectiveC2ansiParser.FOLLOW_41_in_synpred203_ObjectiveC2ansi2316); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred203_ObjectiveC2ansi"

    // Delegated rules



    synpred5_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred5_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred89_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred89_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred100_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred100_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred56_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred56_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred11_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred11_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred112_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred112_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred136_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred136_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred198_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred198_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred130_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred130_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred135_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred135_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred10_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred10_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred203_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred203_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred71_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred71_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred131_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred131_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred6_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred6_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred90_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred90_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred115_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred115_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred48_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred48_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred9_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred9_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred137_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred137_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred109_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred109_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred8_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred8_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred123_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred123_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred49_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred49_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred12_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred12_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred7_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred7_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred125_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred125_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred156_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred156_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred154_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred154_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred117_ObjectiveC2ansi: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred117_ObjectiveC2ansi_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA2_eotS:
        "\u0028\uffff",
    DFA2_eofS:
        "\u0028\uffff",
    DFA2_minS:
        "\u0001\u0004\u000a\uffff\u0014\u0000\u0009\uffff",
    DFA2_maxS:
        "\u0001\u005c\u000a\uffff\u0014\u0000\u0009\uffff",
    DFA2_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0001\u0003\u001b\uffff\u0001"+
    "\u000c\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0008\u0001\u0007\u0001"+
    "\u0009\u0001\u000a\u0001\u000b",
    DFA2_specialS:
        "\u000b\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001"+
    "\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0001\u000f\u0001"+
    "\u0010\u0001\u0011\u0001\u0012\u0001\u0013\u0009\uffff}>",
    DFA2_transitionS: [
            "\u0001\u0001\u0001\u0002\u0001\u0016\u000f\uffff\u0008\u0003"+
            "\u0007\uffff\u0001\u001c\u0004\uffff\u0001\u001d\u0001\u001e"+
            "\u0001\uffff\u0001\u001f\u0009\uffff\u0001\u000c\u0001\u000d"+
            "\u0001\u000e\u0001\u000f\u0001\u0010\u0001\u0011\u0001\u0012"+
            "\u0001\u0013\u0001\u0014\u0001\u0015\u0001\u0019\u0001\u001a"+
            "\u0006\u001b\u000b\uffff\u0005\u000b\u0001\uffff\u0002\u0017"+
            "\u0001\u0018",
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
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA2_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA2_eotS),
    DFA2_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA2_eofS),
    DFA2_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA2_minS),
    DFA2_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA2_maxS),
    DFA2_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA2_acceptS),
    DFA2_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA2_specialS),
    DFA2_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA2_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA2_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA2 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 2;
    this.eot = ObjectiveC2ansiParser.DFA2_eot;
    this.eof = ObjectiveC2ansiParser.DFA2_eof;
    this.min = ObjectiveC2ansiParser.DFA2_min;
    this.max = ObjectiveC2ansiParser.DFA2_max;
    this.accept = ObjectiveC2ansiParser.DFA2_accept;
    this.special = ObjectiveC2ansiParser.DFA2_special;
    this.transition = ObjectiveC2ansiParser.DFA2_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA2, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "19:1: external_declaration : ( COMMENT | LINE_COMMENT | preprocessor_declaration | function_definition | declaration | class_interface | class_implementation | category_interface | category_implementation | protocol_declaration | protocol_declaration_list | class_declaration_list );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA2_11 = input.LA(1);

                             
                            var index2_11 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_11);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA2_12 = input.LA(1);

                             
                            var index2_12 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_12);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA2_13 = input.LA(1);

                             
                            var index2_13 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_13);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA2_14 = input.LA(1);

                             
                            var index2_14 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_14);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA2_15 = input.LA(1);

                             
                            var index2_15 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_15);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA2_16 = input.LA(1);

                             
                            var index2_16 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_16);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA2_17 = input.LA(1);

                             
                            var index2_17 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_17);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA2_18 = input.LA(1);

                             
                            var index2_18 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_18);
                            if ( s>=0 ) return s;
                            break;
                        case 8 : 
                            var LA2_19 = input.LA(1);

                             
                            var index2_19 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_19);
                            if ( s>=0 ) return s;
                            break;
                        case 9 : 
                            var LA2_20 = input.LA(1);

                             
                            var index2_20 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_20);
                            if ( s>=0 ) return s;
                            break;
                        case 10 : 
                            var LA2_21 = input.LA(1);

                             
                            var index2_21 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_21);
                            if ( s>=0 ) return s;
                            break;
                        case 11 : 
                            var LA2_22 = input.LA(1);

                             
                            var index2_22 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_22);
                            if ( s>=0 ) return s;
                            break;
                        case 12 : 
                            var LA2_23 = input.LA(1);

                             
                            var index2_23 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_23);
                            if ( s>=0 ) return s;
                            break;
                        case 13 : 
                            var LA2_24 = input.LA(1);

                             
                            var index2_24 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_24);
                            if ( s>=0 ) return s;
                            break;
                        case 14 : 
                            var LA2_25 = input.LA(1);

                             
                            var index2_25 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_25);
                            if ( s>=0 ) return s;
                            break;
                        case 15 : 
                            var LA2_26 = input.LA(1);

                             
                            var index2_26 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_26);
                            if ( s>=0 ) return s;
                            break;
                        case 16 : 
                            var LA2_27 = input.LA(1);

                             
                            var index2_27 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_ObjectiveC2ansi()) ) {s = 32;}

                            else if ( (this.synpred6_ObjectiveC2ansi()) ) {s = 33;}

                             
                            input.seek(index2_27);
                            if ( s>=0 ) return s;
                            break;
                        case 17 : 
                            var LA2_28 = input.LA(1);

                             
                            var index2_28 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_ObjectiveC2ansi()) ) {s = 34;}

                            else if ( (this.synpred9_ObjectiveC2ansi()) ) {s = 35;}

                             
                            input.seek(index2_28);
                            if ( s>=0 ) return s;
                            break;
                        case 18 : 
                            var LA2_29 = input.LA(1);

                             
                            var index2_29 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_ObjectiveC2ansi()) ) {s = 36;}

                            else if ( (this.synpred10_ObjectiveC2ansi()) ) {s = 37;}

                             
                            input.seek(index2_29);
                            if ( s>=0 ) return s;
                            break;
                        case 19 : 
                            var LA2_30 = input.LA(1);

                             
                            var index2_30 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred11_ObjectiveC2ansi()) ) {s = 38;}

                            else if ( (this.synpred12_ObjectiveC2ansi()) ) {s = 39;}

                             
                            input.seek(index2_30);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 2, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA22_eotS:
        "\u0018\uffff",
    DFA22_eofS:
        "\u0001\u0001\u0017\uffff",
    DFA22_minS:
        "\u0001\u0006\u0002\uffff\u0011\u0000\u0004\uffff",
    DFA22_maxS:
        "\u0001\u005c\u0002\uffff\u0011\u0000\u0004\uffff",
    DFA22_acceptS:
        "\u0001\uffff\u0001\u0005\u0012\uffff\u0001\u0003\u0001\u0004\u0001"+
    "\u0001\u0001\u0002",
    DFA22_specialS:
        "\u0003\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001"+
    "\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0001\u000f\u0001"+
    "\u0010\u0004\uffff}>",
    DFA22_transitionS: [
            "\u0001\u000e\u0020\uffff\u0001\u0001\u000d\uffff\u0001\u0014"+
            "\u0001\u0015\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0007"+
            "\u0001\u0008\u0001\u0009\u0001\u000a\u0001\u000b\u0001\u000c"+
            "\u0001\u000d\u0001\u0011\u0001\u0012\u0006\u0013\u000b\uffff"+
            "\u0005\u0003\u0001\uffff\u0002\u000f\u0001\u0010",
            "",
            "",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA22_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA22_eotS),
    DFA22_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA22_eofS),
    DFA22_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA22_minS),
    DFA22_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA22_maxS),
    DFA22_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA22_acceptS),
    DFA22_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA22_specialS),
    DFA22_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA22_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA22_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA22 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 22;
    this.eot = ObjectiveC2ansiParser.DFA22_eot;
    this.eof = ObjectiveC2ansiParser.DFA22_eof;
    this.min = ObjectiveC2ansiParser.DFA22_min;
    this.max = ObjectiveC2ansiParser.DFA22_max;
    this.accept = ObjectiveC2ansiParser.DFA22_accept;
    this.special = ObjectiveC2ansiParser.DFA22_special;
    this.transition = ObjectiveC2ansiParser.DFA22_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA22, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()+ loopback of 142:2: ( function_definition | declaration | class_method_definition | instance_method_definition )+";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA22_3 = input.LA(1);

                             
                            var index22_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_3);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA22_4 = input.LA(1);

                             
                            var index22_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_4);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA22_5 = input.LA(1);

                             
                            var index22_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_5);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA22_6 = input.LA(1);

                             
                            var index22_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_6);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA22_7 = input.LA(1);

                             
                            var index22_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_7);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA22_8 = input.LA(1);

                             
                            var index22_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_8);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA22_9 = input.LA(1);

                             
                            var index22_9 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_9);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA22_10 = input.LA(1);

                             
                            var index22_10 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_10);
                            if ( s>=0 ) return s;
                            break;
                        case 8 : 
                            var LA22_11 = input.LA(1);

                             
                            var index22_11 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_11);
                            if ( s>=0 ) return s;
                            break;
                        case 9 : 
                            var LA22_12 = input.LA(1);

                             
                            var index22_12 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_12);
                            if ( s>=0 ) return s;
                            break;
                        case 10 : 
                            var LA22_13 = input.LA(1);

                             
                            var index22_13 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_13);
                            if ( s>=0 ) return s;
                            break;
                        case 11 : 
                            var LA22_14 = input.LA(1);

                             
                            var index22_14 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_14);
                            if ( s>=0 ) return s;
                            break;
                        case 12 : 
                            var LA22_15 = input.LA(1);

                             
                            var index22_15 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_15);
                            if ( s>=0 ) return s;
                            break;
                        case 13 : 
                            var LA22_16 = input.LA(1);

                             
                            var index22_16 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_16);
                            if ( s>=0 ) return s;
                            break;
                        case 14 : 
                            var LA22_17 = input.LA(1);

                             
                            var index22_17 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_17);
                            if ( s>=0 ) return s;
                            break;
                        case 15 : 
                            var LA22_18 = input.LA(1);

                             
                            var index22_18 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_18);
                            if ( s>=0 ) return s;
                            break;
                        case 16 : 
                            var LA22_19 = input.LA(1);

                             
                            var index22_19 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred48_ObjectiveC2ansi()) ) {s = 22;}

                            else if ( (this.synpred49_ObjectiveC2ansi()) ) {s = 23;}

                             
                            input.seek(index22_19);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 22, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA32_eotS:
        "\u0010\uffff",
    DFA32_eofS:
        "\u0010\uffff",
    DFA32_minS:
        "\u0001\u0006\u000a\uffff\u0001\u0000\u0004\uffff",
    DFA32_maxS:
        "\u0001\u005c\u000a\uffff\u0001\u0000\u0004\uffff",
    DFA32_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0001\u0003\u0001\u0004\u0001"+
    "\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001\u000a\u0001"+
    "\uffff\u0001\u000c\u0001\u000d\u0001\u000b\u0001\u000e",
    DFA32_specialS:
        "\u000b\uffff\u0001\u0000\u0004\uffff}>",
    DFA32_transitionS: [
            "\u0001\u000b\u0030\uffff\u0001\u0001\u0001\u0002\u0001\u0003"+
            "\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008"+
            "\u0001\u0009\u0001\u000a\u0019\uffff\u0002\u000c\u0001\u000d",
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
            "\u0001\uffff",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA32_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA32_eotS),
    DFA32_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA32_eofS),
    DFA32_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA32_minS),
    DFA32_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA32_maxS),
    DFA32_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA32_acceptS),
    DFA32_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA32_specialS),
    DFA32_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA32_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA32_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA32 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 32;
    this.eot = ObjectiveC2ansiParser.DFA32_eot;
    this.eof = ObjectiveC2ansiParser.DFA32_eof;
    this.min = ObjectiveC2ansiParser.DFA32_min;
    this.max = ObjectiveC2ansiParser.DFA32_max;
    this.accept = ObjectiveC2ansiParser.DFA32_accept;
    this.special = ObjectiveC2ansiParser.DFA32_special;
    this.transition = ObjectiveC2ansiParser.DFA32_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA32, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "168:1: type_specifier : ( 'void' | 'char' | 'short' | 'int' | 'long' | 'float' | 'double' | 'signed' | 'unsigned' | ( 'id' ( protocol_reference_list )? ) | ( class_name ( protocol_reference_list )? ) | struct_or_union_specifier | enum_specifier | IDENTIFIER );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA32_11 = input.LA(1);

                             
                            var index32_11 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred71_ObjectiveC2ansi()) ) {s = 14;}

                            else if ( (true) ) {s = 15;}

                             
                            input.seek(index32_11);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 32, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA54_eotS:
        "\u001c\uffff",
    DFA54_eofS:
        "\u0001\u0002\u001b\uffff",
    DFA54_minS:
        "\u0001\u0006\u0001\u0000\u001a\uffff",
    DFA54_maxS:
        "\u0001\u005d\u0001\u0000\u001a\uffff",
    DFA54_acceptS:
        "\u0002\uffff\u0001\u0002\u0018\uffff\u0001\u0001",
    DFA54_specialS:
        "\u0001\uffff\u0001\u0000\u001a\uffff}>",
    DFA54_transitionS: [
            "\u0001\u0002\u001f\uffff\u0001\u0002\u0001\uffff\u0002\u0002"+
            "\u0002\uffff\u0001\u0002\u0001\uffff\u0001\u0002\u0001\u0001"+
            "\u0007\uffff\u0012\u0002\u0001\uffff\u0001\u0002\u0009\uffff"+
            "\u0005\u0002\u0001\uffff\u0004\u0002",
            "\u0001\uffff",
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
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA54_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA54_eotS),
    DFA54_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA54_eofS),
    DFA54_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA54_minS),
    DFA54_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA54_maxS),
    DFA54_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA54_acceptS),
    DFA54_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA54_specialS),
    DFA54_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA54_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA54_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA54 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 54;
    this.eot = ObjectiveC2ansiParser.DFA54_eot;
    this.eof = ObjectiveC2ansiParser.DFA54_eof;
    this.min = ObjectiveC2ansiParser.DFA54_min;
    this.max = ObjectiveC2ansiParser.DFA54_max;
    this.accept = ObjectiveC2ansiParser.DFA54_accept;
    this.special = ObjectiveC2ansiParser.DFA54_special;
    this.transition = ObjectiveC2ansiParser.DFA54_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA54, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "269:16: ( '{' enumerator_list '}' )?";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA54_1 = input.LA(1);

                             
                            var index54_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred117_ObjectiveC2ansi()) ) {s = 27;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index54_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 54, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA60_eotS:
        "\u000c\uffff",
    DFA60_eofS:
        "\u0001\u0001\u000b\uffff",
    DFA60_minS:
        "\u0001\u0006\u0009\uffff\u0001\u0000\u0001\uffff",
    DFA60_maxS:
        "\u0001\u005d\u0009\uffff\u0001\u0000\u0001\uffff",
    DFA60_acceptS:
        "\u0001\uffff\u0001\u0002\u0009\uffff\u0001\u0001",
    DFA60_specialS:
        "\u000a\uffff\u0001\u0000\u0001\uffff}>",
    DFA60_transitionS: [
            "\u0001\u0001\u001f\uffff\u0001\u0001\u0001\uffff\u0001\u000a"+
            "\u0001\u0001\u0002\uffff\u0001\u0001\u0001\uffff\u0002\u0001"+
            "\u001a\uffff\u0001\u000b\u000e\uffff\u0001\u0001\u0003\uffff"+
            "\u0001\u0001",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\uffff",
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA60_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA60_eotS),
    DFA60_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA60_eofS),
    DFA60_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA60_minS),
    DFA60_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA60_maxS),
    DFA60_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA60_acceptS),
    DFA60_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA60_specialS),
    DFA60_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA60_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA60_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA60 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 60;
    this.eot = ObjectiveC2ansiParser.DFA60_eot;
    this.eof = ObjectiveC2ansiParser.DFA60_eof;
    this.min = ObjectiveC2ansiParser.DFA60_min;
    this.max = ObjectiveC2ansiParser.DFA60_max;
    this.accept = ObjectiveC2ansiParser.DFA60_accept;
    this.special = ObjectiveC2ansiParser.DFA60_special;
    this.transition = ObjectiveC2ansiParser.DFA60_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA60, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 276:32: ( declarator_suffix )*";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA60_10 = input.LA(1);

                             
                            var index60_10 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred123_ObjectiveC2ansi()) ) {s = 11;}

                            else if ( (true) ) {s = 1;}

                             
                            input.seek(index60_10);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 60, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA61_eotS:
        "\u000c\uffff",
    DFA61_eofS:
        "\u0001\u0001\u000b\uffff",
    DFA61_minS:
        "\u0001\u0006\u0009\uffff\u0001\u0000\u0001\uffff",
    DFA61_maxS:
        "\u0001\u005d\u0009\uffff\u0001\u0000\u0001\uffff",
    DFA61_acceptS:
        "\u0001\uffff\u0001\u0002\u0009\uffff\u0001\u0001",
    DFA61_specialS:
        "\u000a\uffff\u0001\u0000\u0001\uffff}>",
    DFA61_transitionS: [
            "\u0001\u0001\u001f\uffff\u0001\u0001\u0001\uffff\u0001\u000a"+
            "\u0001\u0001\u0002\uffff\u0001\u0001\u0001\uffff\u0002\u0001"+
            "\u001a\uffff\u0001\u000b\u000e\uffff\u0001\u0001\u0003\uffff"+
            "\u0001\u0001",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\uffff",
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA61_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA61_eotS),
    DFA61_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA61_eofS),
    DFA61_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA61_minS),
    DFA61_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA61_maxS),
    DFA61_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA61_acceptS),
    DFA61_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA61_specialS),
    DFA61_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA61_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA61_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA61 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 61;
    this.eot = ObjectiveC2ansiParser.DFA61_eot;
    this.eof = ObjectiveC2ansiParser.DFA61_eof;
    this.min = ObjectiveC2ansiParser.DFA61_min;
    this.max = ObjectiveC2ansiParser.DFA61_max;
    this.accept = ObjectiveC2ansiParser.DFA61_accept;
    this.special = ObjectiveC2ansiParser.DFA61_special;
    this.transition = ObjectiveC2ansiParser.DFA61_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA61, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 277:40: ( declarator_suffix )*";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA61_10 = input.LA(1);

                             
                            var index61_10 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred125_ObjectiveC2ansi()) ) {s = 11;}

                            else if ( (true) ) {s = 1;}

                             
                            input.seek(index61_10);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 61, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA68_eotS:
        "\u000b\uffff",
    DFA68_eofS:
        "\u0001\u0008\u000a\uffff",
    DFA68_minS:
        "\u0001\u0006\u0008\u0000\u0002\uffff",
    DFA68_maxS:
        "\u0001\u005d\u0008\u0000\u0002\uffff",
    DFA68_acceptS:
        "\u0009\uffff\u0001\u0002\u0001\u0001",
    DFA68_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0002\uffff}>",
    DFA68_transitionS: [
            "\u0001\u0002\u0021\uffff\u0001\u0003\u0001\u0007\u0002\uffff"+
            "\u0001\u0005\u0001\uffff\u0001\u0004\u0001\u0006\u001a\uffff"+
            "\u0001\u0009\u0012\uffff\u0001\u0001",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA68_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA68_eotS),
    DFA68_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA68_eofS),
    DFA68_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA68_minS),
    DFA68_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA68_maxS),
    DFA68_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA68_acceptS),
    DFA68_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA68_specialS),
    DFA68_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA68_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA68_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA68 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 68;
    this.eot = ObjectiveC2ansiParser.DFA68_eot;
    this.eof = ObjectiveC2ansiParser.DFA68_eof;
    this.min = ObjectiveC2ansiParser.DFA68_min;
    this.max = ObjectiveC2ansiParser.DFA68_max;
    this.accept = ObjectiveC2ansiParser.DFA68_accept;
    this.special = ObjectiveC2ansiParser.DFA68_special;
    this.transition = ObjectiveC2ansiParser.DFA68_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA68, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "285:28: ( ( declarator )? | abstract_declarator )";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA68_1 = input.LA(1);

                             
                            var index68_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred131_ObjectiveC2ansi()) ) {s = 10;}

                            else if ( (true) ) {s = 9;}

                             
                            input.seek(index68_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA68_2 = input.LA(1);

                             
                            var index68_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred131_ObjectiveC2ansi()) ) {s = 10;}

                            else if ( (true) ) {s = 9;}

                             
                            input.seek(index68_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA68_3 = input.LA(1);

                             
                            var index68_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred131_ObjectiveC2ansi()) ) {s = 10;}

                            else if ( (true) ) {s = 9;}

                             
                            input.seek(index68_3);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA68_4 = input.LA(1);

                             
                            var index68_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred131_ObjectiveC2ansi()) ) {s = 10;}

                            else if ( (true) ) {s = 9;}

                             
                            input.seek(index68_4);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA68_5 = input.LA(1);

                             
                            var index68_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred131_ObjectiveC2ansi()) ) {s = 10;}

                            else if ( (true) ) {s = 9;}

                             
                            input.seek(index68_5);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA68_6 = input.LA(1);

                             
                            var index68_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred131_ObjectiveC2ansi()) ) {s = 10;}

                            else if ( (true) ) {s = 9;}

                             
                            input.seek(index68_6);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA68_7 = input.LA(1);

                             
                            var index68_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred131_ObjectiveC2ansi()) ) {s = 10;}

                            else if ( (true) ) {s = 9;}

                             
                            input.seek(index68_7);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA68_8 = input.LA(1);

                             
                            var index68_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred131_ObjectiveC2ansi()) ) {s = 10;}

                            else if ( (true) ) {s = 9;}

                             
                            input.seek(index68_8);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 68, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA67_eotS:
        "\u000a\uffff",
    DFA67_eofS:
        "\u0001\u0004\u0009\uffff",
    DFA67_minS:
        "\u0001\u0006\u0003\u0000\u0006\uffff",
    DFA67_maxS:
        "\u0001\u005d\u0003\u0000\u0006\uffff",
    DFA67_acceptS:
        "\u0004\uffff\u0001\u0002\u0004\uffff\u0001\u0001",
    DFA67_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0006\uffff}>",
    DFA67_transitionS: [
            "\u0001\u0002\u0021\uffff\u0001\u0003\u0001\u0004\u0002\uffff"+
            "\u0001\u0004\u0001\uffff\u0002\u0004\u002d\uffff\u0001\u0001",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA67_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA67_eotS),
    DFA67_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA67_eofS),
    DFA67_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA67_minS),
    DFA67_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA67_maxS),
    DFA67_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA67_acceptS),
    DFA67_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA67_specialS),
    DFA67_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA67_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA67_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA67 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 67;
    this.eot = ObjectiveC2ansiParser.DFA67_eot;
    this.eof = ObjectiveC2ansiParser.DFA67_eof;
    this.min = ObjectiveC2ansiParser.DFA67_min;
    this.max = ObjectiveC2ansiParser.DFA67_max;
    this.accept = ObjectiveC2ansiParser.DFA67_accept;
    this.special = ObjectiveC2ansiParser.DFA67_special;
    this.transition = ObjectiveC2ansiParser.DFA67_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA67, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "285:29: ( declarator )?";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA67_1 = input.LA(1);

                             
                            var index67_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred130_ObjectiveC2ansi()) ) {s = 9;}

                            else if ( (true) ) {s = 4;}

                             
                            input.seek(index67_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA67_2 = input.LA(1);

                             
                            var index67_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred130_ObjectiveC2ansi()) ) {s = 9;}

                            else if ( (true) ) {s = 4;}

                             
                            input.seek(index67_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA67_3 = input.LA(1);

                             
                            var index67_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred130_ObjectiveC2ansi()) ) {s = 9;}

                            else if ( (true) ) {s = 4;}

                             
                            input.seek(index67_3);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 67, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA75_eotS:
        "\u000c\uffff",
    DFA75_eofS:
        "\u0001\u0004\u000b\uffff",
    DFA75_minS:
        "\u0001\u0006\u0002\u0000\u0009\uffff",
    DFA75_maxS:
        "\u0001\u005d\u0002\u0000\u0009\uffff",
    DFA75_acceptS:
        "\u0003\uffff\u0001\u0003\u0001\u0004\u0005\uffff\u0001\u0001\u0001"+
    "\u0002",
    DFA75_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0009\uffff}>",
    DFA75_transitionS: [
            "\u0001\u0004\u0021\uffff\u0001\u0002\u0001\u0004\u0002\uffff"+
            "\u0001\u0004\u0001\uffff\u0002\u0004\u001a\uffff\u0001\u0003"+
            "\u0012\uffff\u0001\u0001",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA75_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA75_eotS),
    DFA75_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA75_eofS),
    DFA75_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA75_minS),
    DFA75_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA75_maxS),
    DFA75_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA75_acceptS),
    DFA75_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA75_specialS),
    DFA75_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA75_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA75_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA75 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 75;
    this.eot = ObjectiveC2ansiParser.DFA75_eot;
    this.eof = ObjectiveC2ansiParser.DFA75_eof;
    this.min = ObjectiveC2ansiParser.DFA75_min;
    this.max = ObjectiveC2ansiParser.DFA75_max;
    this.accept = ObjectiveC2ansiParser.DFA75_accept;
    this.special = ObjectiveC2ansiParser.DFA75_special;
    this.transition = ObjectiveC2ansiParser.DFA75_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA75, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "292:1: abstract_declarator : ( '*' ( type_qualifier )* abstract_declarator | '(' abstract_declarator ')' ( abstract_declarator_suffix )+ | ( '[' ( constant_expression )? ']' )+ | );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA75_1 = input.LA(1);

                             
                            var index75_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred135_ObjectiveC2ansi()) ) {s = 10;}

                            else if ( (true) ) {s = 4;}

                             
                            input.seek(index75_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA75_2 = input.LA(1);

                             
                            var index75_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred137_ObjectiveC2ansi()) ) {s = 11;}

                            else if ( (true) ) {s = 4;}

                             
                            input.seek(index75_2);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 75, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA72_eotS:
        "\u000a\uffff",
    DFA72_eofS:
        "\u0001\u0001\u0009\uffff",
    DFA72_minS:
        "\u0001\u0006\u0004\uffff\u0001\u0000\u0004\uffff",
    DFA72_maxS:
        "\u0001\u005d\u0004\uffff\u0001\u0000\u0004\uffff",
    DFA72_acceptS:
        "\u0001\uffff\u0001\u0002\u0007\uffff\u0001\u0001",
    DFA72_specialS:
        "\u0005\uffff\u0001\u0000\u0004\uffff}>",
    DFA72_transitionS: [
            "\u0001\u0001\u0021\uffff\u0001\u0005\u0001\u0001\u0002\uffff"+
            "\u0001\u0001\u0001\uffff\u0002\u0001\u001a\uffff\u0001\u0009"+
            "\u0012\uffff\u0001\u0001",
            "",
            "",
            "",
            "",
            "\u0001\uffff",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA72_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA72_eotS),
    DFA72_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA72_eofS),
    DFA72_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA72_minS),
    DFA72_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA72_maxS),
    DFA72_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA72_acceptS),
    DFA72_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA72_specialS),
    DFA72_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA72_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA72_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA72 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 72;
    this.eot = ObjectiveC2ansiParser.DFA72_eot;
    this.eof = ObjectiveC2ansiParser.DFA72_eof;
    this.min = ObjectiveC2ansiParser.DFA72_min;
    this.max = ObjectiveC2ansiParser.DFA72_max;
    this.accept = ObjectiveC2ansiParser.DFA72_accept;
    this.special = ObjectiveC2ansiParser.DFA72_special;
    this.transition = ObjectiveC2ansiParser.DFA72_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA72, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()+ loopback of 293:33: ( abstract_declarator_suffix )+";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA72_5 = input.LA(1);

                             
                            var index72_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred136_ObjectiveC2ansi()) ) {s = 9;}

                            else if ( (true) ) {s = 1;}

                             
                            input.seek(index72_5);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 72, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA83_eotS:
        "\u002c\uffff",
    DFA83_eofS:
        "\u002c\uffff",
    DFA83_minS:
        "\u0001\u0006\u0001\u0000\u002a\uffff",
    DFA83_maxS:
        "\u0001\u0086\u0001\u0000\u002a\uffff",
    DFA83_acceptS:
        "\u0002\uffff\u0001\u0002\u0019\uffff\u0001\u0001\u000f\uffff",
    DFA83_specialS:
        "\u0001\uffff\u0001\u0000\u002a\uffff}>",
    DFA83_transitionS: [
            "\u0001\u0001\u0006\u0002\u001b\uffff\u0001\u0002\u0002\uffff"+
            "\u0002\u0002\u0002\uffff\u0002\u0002\u0005\uffff\u0001\u0002"+
            "\u0012\u001c\u0002\u0002\u0002\uffff\u0002\u0002\u0005\uffff"+
            "\u0005\u001c\u0001\uffff\u0003\u001c\u0001\u0002\u0001\uffff"+
            "\u0003\u0002\u0001\uffff\u0008\u0002\u000f\uffff\u0001\u0002"+
            "\u0007\uffff\u0005\u0002",
            "\u0001\uffff",
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
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA83_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA83_eotS),
    DFA83_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA83_eofS),
    DFA83_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA83_minS),
    DFA83_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA83_maxS),
    DFA83_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA83_acceptS),
    DFA83_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA83_specialS),
    DFA83_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA83_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA83_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA83 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 83;
    this.eot = ObjectiveC2ansiParser.DFA83_eot;
    this.eof = ObjectiveC2ansiParser.DFA83_eof;
    this.min = ObjectiveC2ansiParser.DFA83_min;
    this.max = ObjectiveC2ansiParser.DFA83_max;
    this.accept = ObjectiveC2ansiParser.DFA83_accept;
    this.special = ObjectiveC2ansiParser.DFA83_special;
    this.transition = ObjectiveC2ansiParser.DFA83_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA83, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 320:26: ( declaration )*";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA83_1 = input.LA(1);

                             
                            var index83_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred154_ObjectiveC2ansi()) ) {s = 28;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index83_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 83, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA106_eotS:
        "\u000f\uffff",
    DFA106_eofS:
        "\u000f\uffff",
    DFA106_minS:
        "\u0001\u0006\u0001\u0000\u000d\uffff",
    DFA106_maxS:
        "\u0001\u0086\u0001\u0000\u000d\uffff",
    DFA106_acceptS:
        "\u0002\uffff\u0001\u0002\u000b\uffff\u0001\u0001",
    DFA106_specialS:
        "\u0001\uffff\u0001\u0000\u000d\uffff}>",
    DFA106_transitionS: [
            "\u0007\u0002\u001b\uffff\u0001\u0001\u0002\uffff\u0001\u0002"+
            "\u000a\uffff\u0001\u0002\u0012\uffff\u0002\u0002\u0002\uffff"+
            "\u0002\u0002\u000e\uffff\u0001\u0002\u001c\uffff\u0001\u0002"+
            "\u0007\uffff\u0005\u0002",
            "\u0001\uffff",
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
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA106_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA106_eotS),
    DFA106_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA106_eofS),
    DFA106_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA106_minS),
    DFA106_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA106_maxS),
    DFA106_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA106_acceptS),
    DFA106_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA106_specialS),
    DFA106_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA106_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA106_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA106 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 106;
    this.eot = ObjectiveC2ansiParser.DFA106_eot;
    this.eof = ObjectiveC2ansiParser.DFA106_eof;
    this.min = ObjectiveC2ansiParser.DFA106_min;
    this.max = ObjectiveC2ansiParser.DFA106_max;
    this.accept = ObjectiveC2ansiParser.DFA106_accept;
    this.special = ObjectiveC2ansiParser.DFA106_special;
    this.transition = ObjectiveC2ansiParser.DFA106_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA106, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "377:1: cast_expression : ( '(' type_name ')' cast_expression | unary_expression );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA106_1 = input.LA(1);

                             
                            var index106_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred198_ObjectiveC2ansi()) ) {s = 14;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index106_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 106, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA107_eotS:
        "\u000f\uffff",
    DFA107_eofS:
        "\u000f\uffff",
    DFA107_minS:
        "\u0001\u0006\u0001\u0000\u000d\uffff",
    DFA107_maxS:
        "\u0001\u0086\u0001\u0000\u000d\uffff",
    DFA107_acceptS:
        "\u0002\uffff\u0001\u0002\u000b\uffff\u0001\u0001",
    DFA107_specialS:
        "\u0001\uffff\u0001\u0000\u000d\uffff}>",
    DFA107_transitionS: [
            "\u0007\u0002\u001b\uffff\u0001\u0001\u0002\uffff\u0001\u0002"+
            "\u000a\uffff\u0001\u0002\u0012\uffff\u0002\u0002\u0002\uffff"+
            "\u0002\u0002\u000e\uffff\u0001\u0002\u001c\uffff\u0001\u0002"+
            "\u0007\uffff\u0005\u0002",
            "\u0001\uffff",
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
            ""
    ]
});

org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    DFA107_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA107_eotS),
    DFA107_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA107_eofS),
    DFA107_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA107_minS),
    DFA107_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ObjectiveC2ansiParser.DFA107_maxS),
    DFA107_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA107_acceptS),
    DFA107_special:
        org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA107_specialS),
    DFA107_transition: (function() {
        var a = [],
            i,
            numStates = ObjectiveC2ansiParser.DFA107_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ObjectiveC2ansiParser.DFA107_transitionS[i]));
        }
        return a;
    })()
});

ObjectiveC2ansiParser.DFA107 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 107;
    this.eot = ObjectiveC2ansiParser.DFA107_eot;
    this.eof = ObjectiveC2ansiParser.DFA107_eof;
    this.min = ObjectiveC2ansiParser.DFA107_min;
    this.max = ObjectiveC2ansiParser.DFA107_max;
    this.accept = ObjectiveC2ansiParser.DFA107_accept;
    this.special = ObjectiveC2ansiParser.DFA107_special;
    this.transition = ObjectiveC2ansiParser.DFA107_transition;
};

org.antlr.lang.extend(ObjectiveC2ansiParser.DFA107, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "384:14: ( '(' type_name ')' | unary_expression )";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA107_1 = input.LA(1);

                             
                            var index107_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred203_ObjectiveC2ansi()) ) {s = 14;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index107_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 107, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(ObjectiveC2ansiParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "COMMENT", "LINE_COMMENT", "IDENTIFIER", "STRING_LITERAL", "DECIMAL_LITERAL", "HEX_LITERAL", "OCTAL_LITERAL", "CHARACTER_LITERAL", "FLOATING_POINT_LITERAL", "LETTER", "EscapeSequence", "HexDigit", "IntegerTypeSuffix", "Exponent", "FloatTypeSuffix", "OctalEscape", "UnicodeEscape", "WS", "'#import'", "'#include'", "'#define'", "'#ifdef'", "'#if'", "'#undef'", "'#ifndef'", "'#endif'", "'<'", "'\"'", "'/'", "'\\\\'", "'.'", "'>'", "'.+'", "'@interface'", "':'", "'@end'", "'('", "')'", "'@implementation'", "'@protocol'", "';'", "'@class'", "','", "'{'", "'}'", "'@private'", "'@protected'", "'@package'", "'@public'", "'+'", "'-'", "'void'", "'char'", "'short'", "'int'", "'long'", "'float'", "'double'", "'signed'", "'unsigned'", "'id'", "'const'", "'volatile'", "'in'", "'out'", "'inout'", "'bycopy'", "'byref'", "'oneway'", "'self'", "'['", "']'", "'super'", "'@selector'", "'@encode'", "'@trystatement'", "'@catch'", "'@finally'", "'@throw'", "'@synchronized'", "'auto'", "'register'", "'static'", "'extern'", "'typedef'", "'='", "'struct'", "'union'", "'enum'", "'*'", "'...'", "'case'", "'default'", "'if'", "'else'", "'switch'", "'while'", "'do'", "'for'", "'goto'", "'continue'", "'break'", "'return'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'?'", "'||'", "'&&'", "'|'", "'^'", "'&'", "'!='", "'=='", "'<='", "'>='", "'<<'", "'>>'", "'%'", "'++'", "'--'", "'sizeof'", "'~'", "'!'", "'->'"],
    FOLLOW_external_declaration_in_translation_unit37: new org.antlr.runtime.BitSet([0x3FC00070, 0xFF802C20,0x1DF001FF, 0x00000000]),
    FOLLOW_EOF_in_translation_unit40: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_COMMENT_in_external_declaration47: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LINE_COMMENT_in_external_declaration51: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_preprocessor_declaration_in_external_declaration55: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_definition_in_external_declaration58: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_in_external_declaration62: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_class_interface_in_external_declaration67: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_class_implementation_in_external_declaration71: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_category_interface_in_external_declaration75: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_category_implementation_in_external_declaration79: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_protocol_declaration_in_external_declaration83: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_protocol_declaration_list_in_external_declaration87: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_class_declaration_list_in_external_declaration91: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_22_in_preprocessor_declaration98: new org.antlr.runtime.BitSet([0xC0000000, 0x00000000]),
    FOLLOW_file_specification_in_preprocessor_declaration100: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_23_in_preprocessor_declaration104: new org.antlr.runtime.BitSet([0xC0000000, 0x00000000]),
    FOLLOW_file_specification_in_preprocessor_declaration106: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_24_in_preprocessor_declaration110: new org.antlr.runtime.BitSet([0x00000000, 0x00000010]),
    FOLLOW_macro_specification_in_preprocessor_declaration112: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_25_in_preprocessor_declaration116: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_preprocessor_declaration118: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_26_in_preprocessor_declaration122: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_preprocessor_declaration124: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_27_in_preprocessor_declaration128: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_preprocessor_declaration130: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_28_in_preprocessor_declaration134: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_preprocessor_declaration136: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_29_in_preprocessor_declaration140: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_file_specification147: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_IDENTIFIER_in_file_specification153: new org.antlr.runtime.BitSet([0x80000040, 0x0000000F]),
    FOLLOW_set_in_file_specification155: new org.antlr.runtime.BitSet([0x80000040, 0x00000008]),
    FOLLOW_set_in_file_specification170: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_36_in_macro_specification183: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_37_in_class_interface191: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_class_name_in_class_interface197: new org.antlr.runtime.BitSet([0x40000040, 0xFFE080C0,0x1DF001FF, 0x00000000]),
    FOLLOW_38_in_class_interface200: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_superclass_name_in_class_interface202: new org.antlr.runtime.BitSet([0x40000040, 0xFFE08080,0x1DF001FF, 0x00000000]),
    FOLLOW_protocol_reference_list_in_class_interface209: new org.antlr.runtime.BitSet([0x00000040, 0xFFE08080,0x1DF001FF, 0x00000000]),
    FOLLOW_instance_variables_in_class_interface217: new org.antlr.runtime.BitSet([0x00000040, 0xFFE00080,0x1DF001FF, 0x00000000]),
    FOLLOW_interface_declaration_list_in_class_interface225: new org.antlr.runtime.BitSet([0x00000000, 0x00000080]),
    FOLLOW_39_in_class_interface234: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_37_in_category_interface242: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_class_name_in_category_interface248: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_category_interface250: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_category_name_in_category_interface252: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_category_interface254: new org.antlr.runtime.BitSet([0x40000040, 0xFFE00080,0x1DF001FF, 0x00000000]),
    FOLLOW_protocol_reference_list_in_category_interface259: new org.antlr.runtime.BitSet([0x00000040, 0xFFE00080,0x1DF001FF, 0x00000000]),
    FOLLOW_interface_declaration_list_in_category_interface267: new org.antlr.runtime.BitSet([0x00000000, 0x00000080]),
    FOLLOW_39_in_category_interface276: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_42_in_class_implementation284: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_class_name_in_class_implementation290: new org.antlr.runtime.BitSet([0x00000040, 0xFFE000C0,0x1DF001FF, 0x00000000]),
    FOLLOW_38_in_class_implementation294: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_superclass_name_in_class_implementation296: new org.antlr.runtime.BitSet([0x00000040, 0xFFE00080,0x1DF001FF, 0x00000000]),
    FOLLOW_implementation_definition_list_in_class_implementation304: new org.antlr.runtime.BitSet([0x00000000, 0x00000080]),
    FOLLOW_39_in_class_implementation313: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_42_in_category_implementation321: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_class_name_in_category_implementation325: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_category_implementation327: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_category_name_in_category_implementation329: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_category_implementation331: new org.antlr.runtime.BitSet([0x00000040, 0xFFE00080,0x1DF001FF, 0x00000000]),
    FOLLOW_implementation_definition_list_in_category_implementation336: new org.antlr.runtime.BitSet([0x00000000, 0x00000080]),
    FOLLOW_39_in_category_implementation343: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_43_in_protocol_declaration351: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_protocol_name_in_protocol_declaration355: new org.antlr.runtime.BitSet([0x40000040, 0xFFE00080,0x1DF001FF, 0x00000000]),
    FOLLOW_protocol_reference_list_in_protocol_declaration359: new org.antlr.runtime.BitSet([0x00000040, 0xFFE00080,0x1DF001FF, 0x00000000]),
    FOLLOW_interface_declaration_list_in_protocol_declaration367: new org.antlr.runtime.BitSet([0x00000000, 0x00000080]),
    FOLLOW_39_in_protocol_declaration374: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_43_in_protocol_declaration_list383: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_protocol_list_in_protocol_declaration_list385: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_protocol_declaration_list386: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_45_in_class_declaration_list398: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_class_list_in_class_declaration_list400: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_class_declaration_list401: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_class_name_in_class_list412: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_46_in_class_list415: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_class_name_in_class_list417: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_30_in_protocol_reference_list428: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_protocol_list_in_protocol_reference_list430: new org.antlr.runtime.BitSet([0x00000000, 0x00000008]),
    FOLLOW_35_in_protocol_reference_list432: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_protocol_name_in_protocol_list441: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_46_in_protocol_list444: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_protocol_name_in_protocol_list446: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_IDENTIFIER_in_class_name456: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_superclass_name464: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_category_name472: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_protocol_name480: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_47_in_instance_variables488: new org.antlr.runtime.BitSet([0x00000040, 0x001E0140,0x20000000, 0x00000000]),
    FOLLOW_instance_variable_declaration_in_instance_variables490: new org.antlr.runtime.BitSet([0x00000000, 0x00010000]),
    FOLLOW_48_in_instance_variables492: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_visibility_specification_in_instance_variable_declaration502: new org.antlr.runtime.BitSet([0x00000042, 0x001E0140,0x20000000, 0x00000000]),
    FOLLOW_struct_declarator_list_in_instance_variable_declaration506: new org.antlr.runtime.BitSet([0x00000000, 0x00008000]),
    FOLLOW_instance_variables_in_instance_variable_declaration508: new org.antlr.runtime.BitSet([0x00000042, 0x001E0140,0x20000000, 0x00000000]),
    FOLLOW_set_in_visibility_specification0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_in_interface_declaration_list545: new org.antlr.runtime.BitSet([0x00000042, 0xFFE00000,0x1DF001FF, 0x00000000]),
    FOLLOW_class_method_declaration_in_interface_declaration_list549: new org.antlr.runtime.BitSet([0x00000042, 0xFFE00000,0x1DF001FF, 0x00000000]),
    FOLLOW_instance_method_declaration_in_interface_declaration_list553: new org.antlr.runtime.BitSet([0x00000042, 0xFFE00000,0x1DF001FF, 0x00000000]),
    FOLLOW_53_in_class_method_declaration566: new org.antlr.runtime.BitSet([0x00000040, 0x00000140]),
    FOLLOW_method_declaration_in_class_method_declaration568: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_54_in_instance_method_declaration580: new org.antlr.runtime.BitSet([0x00000040, 0x00000140]),
    FOLLOW_method_declaration_in_instance_method_declaration582: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_method_type_in_method_declaration595: new org.antlr.runtime.BitSet([0x00000040, 0x00000140]),
    FOLLOW_method_selector_in_method_declaration600: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_method_declaration602: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_definition_in_implementation_definition_list611: new org.antlr.runtime.BitSet([0x00000042, 0xFFE00000,0x1DF001FF, 0x00000000]),
    FOLLOW_declaration_in_implementation_definition_list615: new org.antlr.runtime.BitSet([0x00000042, 0xFFE00000,0x1DF001FF, 0x00000000]),
    FOLLOW_class_method_definition_in_implementation_definition_list619: new org.antlr.runtime.BitSet([0x00000042, 0xFFE00000,0x1DF001FF, 0x00000000]),
    FOLLOW_instance_method_definition_in_implementation_definition_list623: new org.antlr.runtime.BitSet([0x00000042, 0xFFE00000,0x1DF001FF, 0x00000000]),
    FOLLOW_53_in_class_method_definition634: new org.antlr.runtime.BitSet([0x00000040, 0x00000140]),
    FOLLOW_method_definition_in_class_method_definition636: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_54_in_instance_method_definition648: new org.antlr.runtime.BitSet([0x00000040, 0x00000140]),
    FOLLOW_method_definition_in_instance_method_definition650: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_method_type_in_method_definition663: new org.antlr.runtime.BitSet([0x00000040, 0x00000140]),
    FOLLOW_method_selector_in_method_definition667: new org.antlr.runtime.BitSet([0x00000040, 0x00008100,0x20000000, 0x00000000]),
    FOLLOW_init_declarator_list_in_method_definition670: new org.antlr.runtime.BitSet([0x00000040, 0x00008100,0x20000000, 0x00000000]),
    FOLLOW_compound_statement_in_method_definition674: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selector_in_method_selector682: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_keyword_declarator_in_method_selector686: new org.antlr.runtime.BitSet([0x00000042, 0xFF800140,0x1DF001FF, 0x00000000]),
    FOLLOW_parameter_list_in_method_selector690: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selector_in_keyword_declarator704: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_keyword_declarator707: new org.antlr.runtime.BitSet([0x00000040, 0x00000100]),
    FOLLOW_method_type_in_keyword_declarator709: new org.antlr.runtime.BitSet([0x00000040, 0x00000100]),
    FOLLOW_IDENTIFIER_in_keyword_declarator712: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_selector719: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_40_in_method_type726: new org.antlr.runtime.BitSet([0x00000040, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_type_name_in_method_type728: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_method_type730: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_55_in_type_specifier737: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_56_in_type_specifier741: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_57_in_type_specifier745: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_58_in_type_specifier749: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_59_in_type_specifier753: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_60_in_type_specifier757: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_61_in_type_specifier761: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_62_in_type_specifier765: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_63_in_type_specifier769: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_64_in_type_specifier776: new org.antlr.runtime.BitSet([0x40000002, 0x00000000]),
    FOLLOW_protocol_reference_list_in_type_specifier780: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_class_name_in_type_specifier791: new org.antlr.runtime.BitSet([0x40000002, 0x00000000]),
    FOLLOW_protocol_reference_list_in_type_specifier795: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_struct_or_union_specifier_in_type_specifier804: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_enum_specifier_in_type_specifier809: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_type_specifier815: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_65_in_type_qualifier823: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_66_in_type_qualifier827: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_protocol_qualifier_in_type_qualifier831: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_protocol_qualifier0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_primary_expression867: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_constant_in_primary_expression872: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_LITERAL_in_primary_expression877: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_40_in_primary_expression883: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_primary_expression885: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_primary_expression887: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_73_in_primary_expression893: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_message_expression_in_primary_expression898: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selector_expression_in_primary_expression903: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_protocol_expression_in_primary_expression908: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_encode_expression_in_primary_expression913: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_74_in_message_expression922: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20007600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_receiver_in_message_expression924: new org.antlr.runtime.BitSet([0x00000040, 0x00000040]),
    FOLLOW_message_selector_in_message_expression926: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_75_in_message_expression928: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_receiver939: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_class_name_in_receiver944: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_76_in_receiver950: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selector_in_message_selector958: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_keyword_argument_in_message_selector963: new org.antlr.runtime.BitSet([0x00000042, 0x00000040]),
    FOLLOW_selector_in_keyword_argument972: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_keyword_argument975: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_keyword_argument977: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_77_in_selector_expression985: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_selector_expression987: new org.antlr.runtime.BitSet([0x00000040, 0x00000040]),
    FOLLOW_selector_name_in_selector_expression989: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_selector_expression991: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selector_in_selector_name999: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selector_in_selector_name1005: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_selector_name1008: new org.antlr.runtime.BitSet([0x00000042, 0x00000040]),
    FOLLOW_43_in_protocol_expression1018: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_protocol_expression1020: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_protocol_name_in_protocol_expression1022: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_protocol_expression1024: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_78_in_encode_expression1032: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_encode_expression1034: new org.antlr.runtime.BitSet([0x00000040, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_type_name_in_encode_expression1036: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_encode_expression1038: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_in_exception_declarator1046: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_79_in_try_statement1054: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_80_in_catch_statement1062: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_catch_statement1064: new org.antlr.runtime.BitSet([0x00000040, 0x00000100,0x20000000, 0x00000000]),
    FOLLOW_exception_declarator_in_catch_statement1065: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_catch_statement1066: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_catch_statement1067: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_81_in_finally_statement1075: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_finally_statement1077: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_82_in_throw_statement1085: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_throw_statement1087: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_IDENTIFIER_in_throw_statement1088: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_throw_statement1089: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_try_statement_in_try_block1097: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00010000, 0x00000000]),
    FOLLOW_catch_statement_in_try_block1100: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00020000, 0x00000000]),
    FOLLOW_finally_statement_in_try_block1105: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_83_in_synchronized_statement1116: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_synchronized_statement1118: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_IDENTIFIER_in_synchronized_statement1120: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_synchronized_statement1122: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_synchronized_statement1124: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_specifiers_in_function_definition1132: new org.antlr.runtime.BitSet([0x00000040, 0x00000100,0x20000000, 0x00000000]),
    FOLLOW_declarator_in_function_definition1134: new org.antlr.runtime.BitSet([0x00000040, 0x00008100,0x20000000, 0x00000000]),
    FOLLOW_compound_statement_in_function_definition1136: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_specifiers_in_declaration1145: new org.antlr.runtime.BitSet([0x00000040, 0x00001100,0x20000000, 0x00000000]),
    FOLLOW_init_declarator_list_in_declaration1147: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_declaration1150: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_storage_class_specifier_in_declaration_specifiers1162: new org.antlr.runtime.BitSet([0x00000042, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_type_specifier_in_declaration_specifiers1166: new org.antlr.runtime.BitSet([0x00000042, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_type_qualifier_in_declaration_specifiers1170: new org.antlr.runtime.BitSet([0x00000042, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_set_in_storage_class_specifier0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_init_declarator_in_init_declarator_list1204: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_46_in_init_declarator_list1207: new org.antlr.runtime.BitSet([0x00000040, 0x00000100,0x20000000, 0x00000000]),
    FOLLOW_init_declarator_in_init_declarator_list1209: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_declarator_in_init_declarator1219: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x02000000, 0x00000000]),
    FOLLOW_89_in_init_declarator1222: new org.antlr.runtime.BitSet([0x00001FC0, 0x00408900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_initializer_in_init_declarator1224: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_struct_or_union_specifier1234: new org.antlr.runtime.BitSet([0x00000040, 0x00008000]),
    FOLLOW_IDENTIFIER_in_struct_or_union_specifier1247: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_struct_or_union_specifier1251: new org.antlr.runtime.BitSet([0x00000000, 0x00008000]),
    FOLLOW_47_in_struct_or_union_specifier1254: new org.antlr.runtime.BitSet([0x00000040, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_struct_declaration_in_struct_or_union_specifier1256: new org.antlr.runtime.BitSet([0x00000040, 0xFF810000,0x1DF001FF, 0x00000000]),
    FOLLOW_48_in_struct_or_union_specifier1259: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_specifier_qualifier_list_in_struct_declaration1269: new org.antlr.runtime.BitSet([0x00000040, 0x001E0140,0x20000000, 0x00000000]),
    FOLLOW_struct_declarator_list_in_struct_declaration1271: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_struct_declaration1273: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_specifier_in_specifier_qualifier_list1283: new org.antlr.runtime.BitSet([0x00000042, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_type_qualifier_in_specifier_qualifier_list1287: new org.antlr.runtime.BitSet([0x00000042, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_struct_declarator_in_struct_declarator_list1298: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_46_in_struct_declarator_list1301: new org.antlr.runtime.BitSet([0x00000040, 0x001E0140,0x20000000, 0x00000000]),
    FOLLOW_struct_declarator_in_struct_declarator_list1303: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_declarator_in_struct_declarator1314: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_in_struct_declarator1318: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_struct_declarator1321: new org.antlr.runtime.BitSet([0x00001F00, 0x00000000]),
    FOLLOW_constant_in_struct_declarator1323: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_92_in_enum_specifier1331: new org.antlr.runtime.BitSet([0x00000040, 0x00008000]),
    FOLLOW_identifier_in_enum_specifier1338: new org.antlr.runtime.BitSet([0x00000002, 0x00008000]),
    FOLLOW_47_in_enum_specifier1341: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_enumerator_list_in_enum_specifier1343: new org.antlr.runtime.BitSet([0x00000000, 0x00010000]),
    FOLLOW_48_in_enum_specifier1345: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_47_in_enum_specifier1354: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_enumerator_list_in_enum_specifier1356: new org.antlr.runtime.BitSet([0x00000000, 0x00010000]),
    FOLLOW_48_in_enum_specifier1358: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_enumerator_in_enumerator_list1367: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_46_in_enumerator_list1370: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_enumerator_in_enumerator_list1372: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_identifier_in_enumerator1382: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x02000000, 0x00000000]),
    FOLLOW_89_in_enumerator1385: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_constant_expression_in_enumerator1387: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_93_in_declarator1397: new org.antlr.runtime.BitSet([0x00000040, 0xFF800100,0x3DF001FF, 0x00000000]),
    FOLLOW_type_qualifier_in_declarator1399: new org.antlr.runtime.BitSet([0x00000040, 0xFF800100,0x3DF001FF, 0x00000000]),
    FOLLOW_declarator_in_declarator1402: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_direct_declarator_in_declarator1406: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_identifier_in_direct_declarator1415: new org.antlr.runtime.BitSet([0x00000002, 0x00000100,0x00000400, 0x00000000]),
    FOLLOW_declarator_suffix_in_direct_declarator1417: new org.antlr.runtime.BitSet([0x00000002, 0x00000100,0x00000400, 0x00000000]),
    FOLLOW_40_in_direct_declarator1440: new org.antlr.runtime.BitSet([0x00000040, 0x00000100,0x20000000, 0x00000000]),
    FOLLOW_declarator_in_direct_declarator1442: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_direct_declarator1444: new org.antlr.runtime.BitSet([0x00000002, 0x00000100,0x00000400, 0x00000000]),
    FOLLOW_declarator_suffix_in_direct_declarator1446: new org.antlr.runtime.BitSet([0x00000002, 0x00000100,0x00000400, 0x00000000]),
    FOLLOW_74_in_declarator_suffix1456: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006E00, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_constant_expression_in_declarator_suffix1458: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_75_in_declarator_suffix1461: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_40_in_declarator_suffix1469: new org.antlr.runtime.BitSet([0x00000040, 0xFF800200,0x1DF001FF, 0x00000000]),
    FOLLOW_parameter_list_in_declarator_suffix1471: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_declarator_suffix1474: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_parameter_declaration_list_in_parameter_list1482: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_46_in_parameter_list1486: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x40000000, 0x00000000]),
    FOLLOW_94_in_parameter_list1488: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_specifiers_in_parameter_declaration1503: new org.antlr.runtime.BitSet([0x00000042, 0x00000100,0x20000400, 0x00000000]),
    FOLLOW_declarator_in_parameter_declaration1506: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_abstract_declarator_in_parameter_declaration1511: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignment_expression_in_initializer1521: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_47_in_initializer1530: new org.antlr.runtime.BitSet([0x00001FC0, 0x00408900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_initializer_in_initializer1532: new org.antlr.runtime.BitSet([0x00000000, 0x00014000]),
    FOLLOW_46_in_initializer1535: new org.antlr.runtime.BitSet([0x00001FC0, 0x00408900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_initializer_in_initializer1537: new org.antlr.runtime.BitSet([0x00000000, 0x00014000]),
    FOLLOW_48_in_initializer1541: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_specifier_qualifier_list_in_type_name1550: new org.antlr.runtime.BitSet([0x00000000, 0x00000100,0x20000400, 0x00000000]),
    FOLLOW_abstract_declarator_in_type_name1552: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_93_in_abstract_declarator1561: new org.antlr.runtime.BitSet([0x00000040, 0xFF800100,0x3DF005FF, 0x00000000]),
    FOLLOW_type_qualifier_in_abstract_declarator1563: new org.antlr.runtime.BitSet([0x00000040, 0xFF800100,0x3DF005FF, 0x00000000]),
    FOLLOW_abstract_declarator_in_abstract_declarator1566: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_40_in_abstract_declarator1573: new org.antlr.runtime.BitSet([0x00000000, 0x00000300,0x20000400, 0x00000000]),
    FOLLOW_abstract_declarator_in_abstract_declarator1575: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_abstract_declarator1577: new org.antlr.runtime.BitSet([0x00000000, 0x00000100,0x00000400, 0x00000000]),
    FOLLOW_abstract_declarator_suffix_in_abstract_declarator1579: new org.antlr.runtime.BitSet([0x00000002, 0x00000100,0x00000400, 0x00000000]),
    FOLLOW_74_in_abstract_declarator1587: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006E00, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_constant_expression_in_abstract_declarator1589: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_75_in_abstract_declarator1592: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000400, 0x00000000]),
    FOLLOW_74_in_abstract_declarator_suffix1609: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006E00, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_constant_expression_in_abstract_declarator_suffix1611: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_75_in_abstract_declarator_suffix1614: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_40_in_abstract_declarator_suffix1620: new org.antlr.runtime.BitSet([0x00000040, 0xFF800200,0x1DF001FF, 0x00000000]),
    FOLLOW_parameter_declaration_list_in_abstract_declarator_suffix1623: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_abstract_declarator_suffix1626: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_parameter_declaration_in_parameter_declaration_list1637: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_46_in_parameter_declaration_list1641: new org.antlr.runtime.BitSet([0x00000040, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_parameter_declaration_in_parameter_declaration_list1643: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_statement_in_statement_list1656: new org.antlr.runtime.BitSet([0x00001FC2, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_labeled_statement_in_statement1670: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_statement1676: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_statement1678: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_compound_statement_in_statement1684: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selection_statement_in_statement1690: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_iteration_statement_in_statement1696: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_jump_statement_in_statement1702: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_statement1708: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_identifier_in_labeled_statement1719: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_labeled_statement1721: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_labeled_statement1723: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_95_in_labeled_statement1729: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_constant_expression_in_labeled_statement1731: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_labeled_statement1733: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_labeled_statement1735: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_96_in_labeled_statement1741: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_labeled_statement1743: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_labeled_statement1745: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_47_in_compound_statement1754: new org.antlr.runtime.BitSet([0x00001FC0, 0xFFC19900,0xBDF067FF, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_declaration_in_compound_statement1757: new org.antlr.runtime.BitSet([0x00001FC0, 0xFFC19900,0xBDF067FF, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_list_in_compound_statement1761: new org.antlr.runtime.BitSet([0x00000000, 0x00010000]),
    FOLLOW_48_in_compound_statement1764: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_97_in_selection_statement1775: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_selection_statement1777: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_selection_statement1779: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_selection_statement1781: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_selection_statement1783: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000004]),
    FOLLOW_98_in_selection_statement1786: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_selection_statement1788: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_99_in_selection_statement1796: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_selection_statement1798: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_selection_statement1800: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_selection_statement1802: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_selection_statement1804: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_100_in_iteration_statement1815: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_iteration_statement1817: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_iteration_statement1819: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_iteration_statement1821: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_iteration_statement1823: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_101_in_iteration_statement1829: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_iteration_statement1831: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000010]),
    FOLLOW_100_in_iteration_statement1833: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_iteration_statement1835: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_iteration_statement1837: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_iteration_statement1839: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_iteration_statement1841: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_102_in_iteration_statement1847: new org.antlr.runtime.BitSet([0x00000000, 0x00000100]),
    FOLLOW_40_in_iteration_statement1849: new org.antlr.runtime.BitSet([0x00001FC0, 0x00401900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_iteration_statement1851: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_iteration_statement1854: new org.antlr.runtime.BitSet([0x00001FC0, 0x00401900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_iteration_statement1856: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_iteration_statement1859: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400B00,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_iteration_statement1861: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_iteration_statement1864: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_iteration_statement1866: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_103_in_jump_statement1877: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_identifier_in_jump_statement1879: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_jump_statement1881: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_104_in_jump_statement1887: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_jump_statement1889: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_105_in_jump_statement1895: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_jump_statement1897: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_106_in_jump_statement1903: new org.antlr.runtime.BitSet([0x00001FC0, 0x00401900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_jump_statement1905: new org.antlr.runtime.BitSet([0x00000000, 0x00001000]),
    FOLLOW_44_in_jump_statement1908: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignment_expression_in_expression1920: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_46_in_expression1923: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_assignment_expression_in_expression1925: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_conditional_expression_in_assignment_expression1936: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x02000000, 0x001FF800]),
    FOLLOW_assignment_operator_in_assignment_expression1943: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_assignment_expression_in_assignment_expression1945: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_assignment_operator0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logical_or_expression_in_conditional_expression2005: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00200000]),
    FOLLOW_117_in_conditional_expression2011: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_logical_or_expression_in_conditional_expression2013: new org.antlr.runtime.BitSet([0x00000000, 0x00000040]),
    FOLLOW_38_in_conditional_expression2015: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_logical_or_expression_in_conditional_expression2017: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_conditional_expression_in_constant_expression2028: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logical_and_expression_in_logical_or_expression2037: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00400000]),
    FOLLOW_118_in_logical_or_expression2043: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_logical_and_expression_in_logical_or_expression2045: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00400000]),
    FOLLOW_inclusive_or_expression_in_logical_and_expression2056: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00800000]),
    FOLLOW_119_in_logical_and_expression2062: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_inclusive_or_expression_in_logical_and_expression2064: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00800000]),
    FOLLOW_exclusive_or_expression_in_inclusive_or_expression2075: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x01000000]),
    FOLLOW_120_in_inclusive_or_expression2081: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_exclusive_or_expression_in_inclusive_or_expression2083: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x01000000]),
    FOLLOW_and_expression_in_exclusive_or_expression2094: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x02000000]),
    FOLLOW_121_in_exclusive_or_expression2097: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_and_expression_in_exclusive_or_expression2099: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x02000000]),
    FOLLOW_equality_expression_in_and_expression2110: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x04000000]),
    FOLLOW_122_in_and_expression2113: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_equality_expression_in_and_expression2115: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x04000000]),
    FOLLOW_relational_expression_in_equality_expression2126: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x18000000]),
    FOLLOW_set_in_equality_expression2132: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_relational_expression_in_equality_expression2140: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x18000000]),
    FOLLOW_shift_expression_in_relational_expression2151: new org.antlr.runtime.BitSet([0x40000002, 0x00000008,0x00000000, 0x60000000]),
    FOLLOW_set_in_relational_expression2155: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_shift_expression_in_relational_expression2171: new org.antlr.runtime.BitSet([0x40000002, 0x00000008,0x00000000, 0x60000000]),
    FOLLOW_additive_expression_in_shift_expression2182: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x80000000,0x00000001, 0x00000000]),
    FOLLOW_set_in_shift_expression2185: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_additive_expression_in_shift_expression2193: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x80000000,0x00000001, 0x00000000]),
    FOLLOW_multiplicative_expression_in_additive_expression2204: new org.antlr.runtime.BitSet([0x00000002, 0x00600000]),
    FOLLOW_set_in_additive_expression2209: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_multiplicative_expression_in_additive_expression2217: new org.antlr.runtime.BitSet([0x00000002, 0x00600000]),
    FOLLOW_cast_expression_in_multiplicative_expression2228: new org.antlr.runtime.BitSet([0x00000002, 0x00000001,0x20000000, 0x00000000,0x00000002, 0x00000000]),
    FOLLOW_set_in_multiplicative_expression2234: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_cast_expression_in_multiplicative_expression2246: new org.antlr.runtime.BitSet([0x00000002, 0x00000001,0x20000000, 0x00000000,0x00000002, 0x00000000]),
    FOLLOW_40_in_cast_expression2257: new org.antlr.runtime.BitSet([0x00000040, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_type_name_in_cast_expression2259: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_cast_expression2261: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_cast_expression_in_cast_expression2263: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unary_expression_in_cast_expression2267: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_postfix_expression_in_unary_expression2279: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_130_in_unary_expression2285: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_unary_expression_in_unary_expression2287: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_131_in_unary_expression2293: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_unary_expression_in_unary_expression2295: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unary_operator_in_unary_expression2301: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_cast_expression_in_unary_expression2303: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_132_in_unary_expression2309: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_40_in_unary_expression2312: new org.antlr.runtime.BitSet([0x00000040, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_type_name_in_unary_expression2314: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_unary_expression2316: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unary_expression_in_unary_expression2320: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_unary_operator0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primary_expression_in_postfix_expression2355: new org.antlr.runtime.BitSet([0x00000002, 0x00000104,0x00000400, 0x00000000,0x0000008C, 0x00000000]),
    FOLLOW_74_in_postfix_expression2360: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_expression_in_postfix_expression2362: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_75_in_postfix_expression2364: new org.antlr.runtime.BitSet([0x00000002, 0x00000104,0x00000400, 0x00000000,0x0000008C, 0x00000000]),
    FOLLOW_40_in_postfix_expression2371: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400B00,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_argument_expression_list_in_postfix_expression2373: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_postfix_expression2376: new org.antlr.runtime.BitSet([0x00000002, 0x00000104,0x00000400, 0x00000000,0x0000008C, 0x00000000]),
    FOLLOW_34_in_postfix_expression2382: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_identifier_in_postfix_expression2384: new org.antlr.runtime.BitSet([0x00000002, 0x00000104,0x00000400, 0x00000000,0x0000008C, 0x00000000]),
    FOLLOW_135_in_postfix_expression2390: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_identifier_in_postfix_expression2392: new org.antlr.runtime.BitSet([0x00000002, 0x00000104,0x00000400, 0x00000000,0x0000008C, 0x00000000]),
    FOLLOW_130_in_postfix_expression2398: new org.antlr.runtime.BitSet([0x00000002, 0x00000104,0x00000400, 0x00000000,0x0000008C, 0x00000000]),
    FOLLOW_131_in_postfix_expression2404: new org.antlr.runtime.BitSet([0x00000002, 0x00000104,0x00000400, 0x00000000,0x0000008C, 0x00000000]),
    FOLLOW_assignment_expression_in_argument_expression_list2420: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_46_in_argument_expression_list2423: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_assignment_expression_in_argument_expression_list2425: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_IDENTIFIER_in_identifier2436: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_constant0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_definition_in_synpred5_ObjectiveC2ansi58: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_in_synpred6_ObjectiveC2ansi62: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_class_interface_in_synpred7_ObjectiveC2ansi67: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_class_implementation_in_synpred8_ObjectiveC2ansi71: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_category_interface_in_synpred9_ObjectiveC2ansi75: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_category_implementation_in_synpred10_ObjectiveC2ansi79: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_protocol_declaration_in_synpred11_ObjectiveC2ansi83: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_protocol_declaration_list_in_synpred12_ObjectiveC2ansi87: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_definition_in_synpred48_ObjectiveC2ansi611: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_in_synpred49_ObjectiveC2ansi615: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_parameter_list_in_synpred56_ObjectiveC2ansi690: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_class_name_in_synpred71_ObjectiveC2ansi791: new org.antlr.runtime.BitSet([0x40000002, 0x00000000]),
    FOLLOW_protocol_reference_list_in_synpred71_ObjectiveC2ansi795: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_synpred89_ObjectiveC2ansi939: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_class_name_in_synpred90_ObjectiveC2ansi944: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_specifier_in_synpred100_ObjectiveC2ansi1166: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_synpred109_ObjectiveC2ansi1247: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_specifier_in_synpred112_ObjectiveC2ansi1283: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_in_synpred115_ObjectiveC2ansi1314: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_47_in_synpred117_ObjectiveC2ansi1341: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_enumerator_list_in_synpred117_ObjectiveC2ansi1343: new org.antlr.runtime.BitSet([0x00000000, 0x00010000]),
    FOLLOW_48_in_synpred117_ObjectiveC2ansi1345: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_suffix_in_synpred123_ObjectiveC2ansi1417: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_suffix_in_synpred125_ObjectiveC2ansi1446: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_in_synpred130_ObjectiveC2ansi1506: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declarator_in_synpred131_ObjectiveC2ansi1506: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_93_in_synpred135_ObjectiveC2ansi1561: new org.antlr.runtime.BitSet([0x00000040, 0xFF800100,0x3DF005FF, 0x00000000]),
    FOLLOW_type_qualifier_in_synpred135_ObjectiveC2ansi1563: new org.antlr.runtime.BitSet([0x00000040, 0xFF800100,0x3DF005FF, 0x00000000]),
    FOLLOW_abstract_declarator_in_synpred135_ObjectiveC2ansi1566: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_abstract_declarator_suffix_in_synpred136_ObjectiveC2ansi1579: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_40_in_synpred137_ObjectiveC2ansi1573: new org.antlr.runtime.BitSet([0x00000000, 0x00000300,0x20000400, 0x00000000]),
    FOLLOW_abstract_declarator_in_synpred137_ObjectiveC2ansi1575: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_synpred137_ObjectiveC2ansi1577: new org.antlr.runtime.BitSet([0x00000000, 0x00000100,0x00000400, 0x00000000]),
    FOLLOW_abstract_declarator_suffix_in_synpred137_ObjectiveC2ansi1579: new org.antlr.runtime.BitSet([0x00000002, 0x00000100,0x00000400, 0x00000000]),
    FOLLOW_declaration_in_synpred154_ObjectiveC2ansi1757: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_98_in_synpred156_ObjectiveC2ansi1786: new org.antlr.runtime.BitSet([0x00001FC0, 0x00409900,0xA0006600, 0x040007FB,0x0000007C, 0x00000000]),
    FOLLOW_statement_in_synpred156_ObjectiveC2ansi1788: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_40_in_synpred198_ObjectiveC2ansi2257: new org.antlr.runtime.BitSet([0x00000040, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_type_name_in_synpred198_ObjectiveC2ansi2259: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_synpred198_ObjectiveC2ansi2261: new org.antlr.runtime.BitSet([0x00001FC0, 0x00400900,0x20006600, 0x04000000,0x0000007C, 0x00000000]),
    FOLLOW_cast_expression_in_synpred198_ObjectiveC2ansi2263: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_40_in_synpred203_ObjectiveC2ansi2312: new org.antlr.runtime.BitSet([0x00000040, 0xFF800000,0x1DF001FF, 0x00000000]),
    FOLLOW_type_name_in_synpred203_ObjectiveC2ansi2314: new org.antlr.runtime.BitSet([0x00000000, 0x00000200]),
    FOLLOW_41_in_synpred203_ObjectiveC2ansi2316: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();