/**
 * Created by Anton on 5/24/2015.
 */

var http = require('http');
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    console.log("Ok");
}).listen(port);