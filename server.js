/**
 * Created by Anton on 5/24/2015.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 1337);


