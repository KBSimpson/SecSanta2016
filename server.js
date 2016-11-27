var express = require('express');
var mongoose = require('mongoose');
var app=express();
var port=8080; 
app.get('/', function(req, res){
	res.sendFile(__dirname+'\\SecSanta.html');
});
app.listen(port, function(){
	console.log("I'm listening on port: "+port);
}); 
