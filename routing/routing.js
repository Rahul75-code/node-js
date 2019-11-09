var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made:' + req.url);
    if(req.url === '/home'||req.url === '/'){
    res.writeHead(200,{'content-type':'text/html'});
    fs.createReadStream(__dirname + '/home.html').pipe(res);
 }
 else if(req.url==='/contact'){
    res.writeHead(200,{'content-type':'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res); 
 }
 else if(req.url==='/api/rah'){
     var rah = [{name:'ryu', age:29},{name:'boli', age: 32}];
     res.writeHead(200,{'content-type':'application/json'});
     res.end(JSON.stringify(rah));
 }
 else{
    res.writeHead(200,{'content-type':'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res); 
 }
});

server.listen(8080);
console.log('yeh, now you listening to port 8080');