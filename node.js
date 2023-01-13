var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..
res.write(`this is string ${2+2}`)
res.end()

});

server.listen(5); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..') 