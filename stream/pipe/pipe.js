var http = require('http');
var fs = require('fs');

var readstream = fs.createReadStream(__dirname + '/read.txt','utf8');
var writestream  = fs.createWriteStream(__dirname + '/write.txt');

readstream.pipe(writestream);