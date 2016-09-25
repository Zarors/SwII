var express = require('express');

var app= express();

var path = require('path');

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
/*app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/howtoplay.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/sidebar-left.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/sidebar-right.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/signin.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/signup.html'));
  //__dirname : It will resolve to your project folder.
});
/*app.get('/', function (request, response) {
    
   // response.send('Hola mun3');
   // response.sendFile('home.html');
    
});*/
var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on: " + port);
});