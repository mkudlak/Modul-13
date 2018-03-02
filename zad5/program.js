var http = require("http");
var fs = require("fs");

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.write('<h1>Działa to!</h1>');
            response.end();
        });;
    } else {
            response.statusCode = 404;
            fs.readFile('./index.html', 'utf-8', function(err, data) {
                response.write('<h1>bla bla!</h1>');
                response.write('<img src="web.jpg">');
                response.end();
            });
    }
});

server.listen(8080);


