var http = require('http');
var fs = require('fs');
 
var server = http.createServer(function(req, res){
    console.log('request was made:' + req.url);
    res.writeHead(200,{ 'content-type':'application/json'});
    var obj = {
        name:'rahul kumar',
        job:'Web Developer',
        age: 23
    };
    res.end(JSON.stringify(obj));
});
server.listen(5000);
