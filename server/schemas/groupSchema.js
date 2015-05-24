/**
 * Created by Anton on 5/24/2015.
 */

var mongoose = require("mongoose");

var groupSchema = mongoose.Schema({
    title: String,
    year: Number
});

module.exports = groupSchema;