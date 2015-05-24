/**
 * Created by Anton on 5/24/2015.
 */

var mongoose = require("mongoose");

var classSchema = mongoose.Schema({
    title: String,
    types: [String],
    lecturers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Staff'}]
});