var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/bower', express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'app')));

// app.get('/api', function(res,res){
//   res.send('api');
// })

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/app/index.html'));
})

module.exports = app;
