var path    = require('path');
var express = require('express');


var port    = process.env.PORT || 5000;
var server  = express();

var indexRouter = require('./routes/index')

var expHbs  = require('express-handlebars');
var hbs     = expHbs.create({
    extname:'hbs',
    defaultLayout:'main', 
    layoutsDir: path.join(__dirname, '/views/layouts/') ,
    partialsDir: path.join(__dirname, '/views/partials/')
});
server.engine('.hbs', hbs.engine);
server.set('view engine', '.hbs');

server.use('/', indexRouter);

server.use('/public', express.static(path.join(__dirname, '/public')));

server.listen(port, function(){
    console.log('server running on http://localhost:%s', port);
});

module.exports = server;