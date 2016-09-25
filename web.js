var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

fs.readfile/('./home.html', function(err,html){
    if (err){
        throw.err;
    }
    app.get('/', function (request, response) {
    
   // response.send('Hola mun3');
   // response.open('index.html');
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(html);  
    response.end();  
});
}  );



var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on: " + port);
});