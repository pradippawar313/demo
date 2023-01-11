var express = require('express');
var app = express();

// define routes here..
res.write(`this is string ${2+2}`)
res.end()

var server = app.listen(500, function () {// port is change
    
    console.log('Node server is running..');
});