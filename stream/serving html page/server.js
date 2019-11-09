var http = require('http');
var fs =  require('fs');

 var server = http.createServer(function(req, res){
 console.log("request was made: " +req.url);

 res.writeHead(200, {'content-type':'text/html'});

 var readstream = fs.createReadStream(__dirname+'/index.html','utf8');
 readstream.pipe(res);
 });

 server.listen(4000);
 console.log('yo dawgs, now listening to port 4000');