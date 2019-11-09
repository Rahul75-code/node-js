var http = require('http');
var fs =  require('fs');

 var server = http.createServer(function(req, res){
 console.log("request was made: " +req.url);

 res.writeHead(200, {'content-type':'text/plain'});

 var readstream = fs.createReadStream(__dirname+'/read.txt','utf8');
 readstream.pipe(res);
 });

 server.listen(3000);
 console.log('yo dawgs, now listening to port 3000');