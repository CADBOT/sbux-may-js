var lib = require('./lib'); //pattern 1. Namespaced lib
// pattern 2 top level functions
var add = require('./lib').add
var sub = require('./lib').sub

console.log(lib.add(2, 4));
console.log(lib.sub(6, 1));

var Person = require('./exportDefaultEx')







