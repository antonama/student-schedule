/**
 * Created by Anton on 5/24/2015.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.listen(process.env.PORT || 1337);

require("./server/main");

GLOBAL.app = app;