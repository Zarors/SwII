var express = require('express');

var app= express.createServer(express.logger());

var path = require('path');

app.get('/',function(req,res){
  res.sendFile(path.join('/home.html'));
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