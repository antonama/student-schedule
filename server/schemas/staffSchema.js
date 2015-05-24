/**
 * Created by Anton on 5/24/2015.
 */

var mongoose = require("mongoose");

var staffSchema = mongoose.Schema({
    avatar: String,
    position: String,
    rank: String,
    name: {
        full: String,
        first: String,
        surname: String,
        patronymic: String,
        initials: String
    },
    telephones: [String],
    email: {
        type: String
    },
    address: String
});