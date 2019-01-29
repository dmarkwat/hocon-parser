var parser  = include ("lib/parser");
var no_path = require ("path");


parser.$homedir   = no_path.join (__dirname, "/../resources/home");
process.execPath  = no_path.join (__dirname, "../resources/usr/bin/node");


test.func (parser)
    .should ("load the global plugins when invoked via the CLI")
    .given ({ text: "a: 1" })
    .returns ({ a: 1 });
