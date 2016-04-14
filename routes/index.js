var express    = require('express');
var indexRouter = express.Router();

indexRouter.get('/', function(req, res){
    res.render('home');
});

indexRouter.get('/register', function(req, res){
    res.render('home');
});

indexRouter.get('/login', function(req, res){
    res.render('home');
});

module.exports = indexRouter;