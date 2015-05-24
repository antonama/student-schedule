/**
 * Created by Anton on 5/24/2015.
 */

var mongoose = require("mongoose");

var settingsSchema = mongoose.Schema({
    title: String,
    uniqueId: String,
    value: String
});