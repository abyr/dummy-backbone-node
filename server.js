var restify = require('restify');

var dummy, dummies;
var iterator;

iterator = 1;

dummy = {
    id: 0,
    dummy: true
}

dummies = []

var server = restify.createServer();

server.use(restify.CORS());
server.use(restify.fullResponse());

server.get('/reset', function create(req, res, next) {
    dummies = [];
    res.send(200, dummies);
    return next();
});

server.get('/dummies', function create(req, res, next) {
    res.send(200, dummies);
    return next();
});

server.get('/dummies/:id', function create(req, res, next) {
    var clone = {id: req.params.id, dummy: true};;
    clone.id = req.params.id
    res.send(200, clone);
    return next();
});

server.post('/dummies', function create(req, res, next) {
    var clone = {id: iterator,dummy: true};
    dummies.push(clone)
    ++iterator;
    res.send(201, clone);
    return next();
});

server.put('/dummies/:id', function create(req, res, next) {
    var clone = {id: 0,dummy: true};;
    clone.id = req.params.id
    res.send(200, clone);
    return next();
});

server.del('/dummies/:id', function create(req, res, next) {
    res.send(200);
    return next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});