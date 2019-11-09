var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set('view engine','ejs');

app.use('/css', express.static('css'));

app.get('/',function(req,res){
    res.render('home');
});
app.get('/contact',function(req,res){
    res.render('contact',{qs: req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success',{data: req.body});
});

app.get('/404',function(req,res){
    res.sendFile(__dirname+'/404.html');
});

app.get('/profile/:name',function(req,res){
    var data = {age:23, job: 'web_developer', hobbies:['eating','solving rubic cube','playing chess']};
    res.render('profile', {person: req.params.name, data : data});
});

app.listen(3000);