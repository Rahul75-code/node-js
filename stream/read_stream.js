var http = require('http');
var fs = require('fs');
 var readstream = fs.createReadStream(__dirname +'/read.txt','utf8');

 readstream.on('data', function(chunk){
     console.log('new chunk received:');
     console.log(chunk);
 });
