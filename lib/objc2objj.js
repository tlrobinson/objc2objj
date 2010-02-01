var FILE = require("file");
var SYSTEM = require("system");
var OS = require("os");

var homePath = FILE.dirname(FILE.dirname(module.path));

eval(FILE.read(FILE.join(homePath, "antlr-javascript-runtime-3.1", "antlr3-all.js")));
eval(FILE.read(FILE.join(homePath, "antlr-javascript-runtime-3.1", "antlr3-cli.js")));
eval(FILE.read(FILE.join(homePath, "output", "ObjectiveC2ansiLexer.js")));
eval(FILE.read(FILE.join(homePath, "output", "ObjectiveC2ansiParser.js")));

exports.main = function(args) {
    var path = args[1] || FILE.join(homePath, "Foo.m")
    
    var input = FILE.read(path);
    var cstream = new org.antlr.runtime.ANTLRStringStream(input);
    var lexer = new ObjectiveC2ansiLexer(cstream);
    var tstream = new org.antlr.runtime.CommonTokenStream(lexer);
    var parser = new ObjectiveC2ansiParser(tstream);

    var r = parser.translation_unit();

    print(r.getTree());
}

if (require.main === module)
    OS.exit(exports.main(SYSTEM.args));

// 
// nodes = new org.antlr.runtime.tree.CommonTreeNodeStream(r.getTree());
// nodes.setTokenStream(tstream);
// print(nodes);