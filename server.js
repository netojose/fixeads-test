const path = require('path');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build/'));

app.listen(process.env.PORT || 8080);

app.get('*', function (request, response){
    response.sendFile( __dirname + path.resolve(__dirname, '/build/index.html') );
});