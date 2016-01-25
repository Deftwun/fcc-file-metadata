"use strict";

var express = require("express"),
    app = express(),
    multer = require("multer");
  
var port = process.env.PORT || 8080;

app.use("/",express.static("client"));

app.post('/upload', multer({}).single('file-input'), function(req,res){
    res.json({size:req.file.size});
});

app.listen(port, function () {
  console.log('App running on port # ' + port);
}); 
