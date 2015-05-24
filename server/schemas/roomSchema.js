/**
 * Created by Anton on 5/24/2015.
 */

var mongoose = require("mongoose");

var roomSchema = mongoose.Schema({
    title: String,
    types: [String]
});