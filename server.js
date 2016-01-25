"use strict";

var express = require("express"),
    app = express();
  
var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('App running on port # ' + port);
}); 
