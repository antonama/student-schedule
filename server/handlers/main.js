/**
 * Created by Anton on 5/24/2015.
 */

var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function (Schedule, Group, Announcements, Settings) {

    app.get("/api/schedule", function (req, res) {
        Schedule
            .find()
            .populate("lecturer class room")
            .where("group").equals(req.query.group)
            .exec(function (err, found) {
                if (!err) {
                    res.send(found);
                } else {
                    res.send(err);
                }
            });
    });

    app.get("/api/groups", function (req, res) {
        var year = parseInt(req.query.year, 10);

        Group
            .find()
            .where("year").equals(year)
            .sort("title")
            .exec(function (err, found) {
                if (!err) {
                    res.send(found);
                } else {
                    res.send(err);
                }
            });
    });

    app.get("/api/groups/years", function (req, res) {

    });

    app.get("/api/announcements", function (req, res) {
        Announcements
            .find()
            .where("for").in([new ObjectId(req.query.group)])
            .exec(function (err, found) {
                if (!err) {
                    res.send(found);
                } else {
                    res.send(err);
                }
            });
    });

    app.get("/api/settings", function (req, res) {
        Settings
            .find()
            .exec(function (err, found) {
                if (!err) {
                    res.send(found);
                } else {
                    res.send(err);
                }
            });
    });
};