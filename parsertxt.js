var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var now = require('performance-now');

// var instream = fs.createReadStream('test.txt');
var instream = fs.createReadStream('transcripts/4-NCT02292771-005180-q2-2017.txt');
var outstream = new stream();
var rl = readline.createInterface(instream, outstream);
var lineCount = 0;
var names = [];
var dupeNames = {};
var firstNames = [];
console.time('line count');
console.time('names');

rl.on('line', function (line) {
    // increment line count
    lineCount++;

    // get all names
    var name = line.split(':')
if (line !== "") {
names.push(name)    
    console.log(names)
}

});