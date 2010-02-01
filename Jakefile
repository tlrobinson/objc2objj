var JAKE = require("jake");
var OS = require("os");
var FILE = require("file");

JAKE.task("default", "build");

JAKE.task("build", function() {
    OS.system("sed -i '' -E 's/Java(Script)?/Java/' ObjectiveC2ansi.g");
    OS.system(["java", "-jar", "antlr-3.2.jar", "ObjectiveC2ansi.g", "-o", "output"]);
    OS.system("javac -cp antlr-3.2.jar output/*.java");

    OS.system("sed -i '' -E 's/Java(Script)?/JavaScript/'q ObjectiveC2ansi.g");
    OS.system(["java", "-jar", "antlr-3.2.jar", "ObjectiveC2ansi.g", "-o", "output"]);
});

JAKE.task("run-java", function() {
    OS.system("USE_JAVA=1 NARWHAL_CLASSPATH=antlr-3.2.jar:output NARWHAL_ENGINE=rhino narwhal lib/objc2objj.js");
});

JAKE.task("run", function() {
    OS.system("narwhal lib/objc2objj.js");
});