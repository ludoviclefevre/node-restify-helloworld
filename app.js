var restify = require('restify'),
    server = restify.createServer(),
    port = process.argv[1] || 4444;

server.use(restify.bodyParser());

server.get('/helloworld', function (req, res, next) {
    console.log("Hello World from " + server.url);
    res.send(200, {
        'value': 'Hello World'
    });
    return next();
});

server.listen(port, function () {
    console.log(server.url);
});
