/**
 * Created by Anton on 5/24/2015.
 */

var mongoose = require("mongoose");

var announcementSchema = mongoose.Schema({
    body: String,
    expireAt: Date,
    for: [{type: mongoose.Schema.Types.ObjectId, ref: 'Group'}]
});