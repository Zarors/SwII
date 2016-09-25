var express = require('express');

var app= express.createServer(expressLogger());

app.get('/', function (request, response) {
    
    response.send('Hola mun3');
});

var port = process.env.PORT || 8000;
app.listen(port, function(){
    console.log("Listening on: " + port);
});