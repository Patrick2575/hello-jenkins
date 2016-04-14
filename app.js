var express = require('express');
var server  = express();


var port = process.env.PORT || 5000;

server.get('/', function(req, res){
    res.send('Hello Jenkins!');
});

server.listen(port, function(){
    console.log('server running on http://localhost:%s', port);
});

module.exports = server;