'use strict';

var env = process.env.NODE_ENV || 'development';
var compression = require('compression');
var express = require('express');
var app = module.exports = express();
var http = require('http');

app.set('views', __dirname + '/build');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(compression());

app.use(express.static(__dirname + '/build', { maxAge: 86400000 }));

app.get('*', function(req, res) {
    res.render('index.html');
});

app.get('/sitemap.xml', function(req, res) {
    res.render('sitemap.xml');
});

app.get('/robots.txt', function(req, res) {
    res.render('robots.txt');
});

app.get('*', function(req, res) {
    res.render('index.html');
});

//you may also need an error handler too (below), to serve a 404 perhaps?
app.use(function(err, req, res, next) {
    if ( ! err) {
        return next();
    }

    console.log('error: ' + err.stack);
    res.send(err.stack);
});

/**
 * Start server
 */
app.listen(process.env.NODE_PORT || 8601, function() {
    console.log('listening on port %d using %s ', process.env.NODE_PORT || 8601, app.get('env'));
});
