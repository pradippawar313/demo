var express = require('express');
var app = express();

// define routes here..
res.write(`this is string ${2+4}`)
res.end()

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});