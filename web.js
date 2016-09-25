var express = require('express'),
    app= express(),
    server= require('http').createServer(app);

var path = require('path');

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/game', express.static(__dirname + '/game'));
app.use('/', express.static(__dirname + '/'));

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on: " + port);
});