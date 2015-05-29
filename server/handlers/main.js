/**
 * Created by Anton on 5/24/2015.
 */

var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function (Schedule, Group, Announcements, Settings, Staff, Room) {

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

    app.get("/api/schedule/staff", function (req, res) {
        Schedule
            .find()
            .distinct("lecturer")
            .exec(function (err, found) {
                if (!err) {
                    Staff
                        .find()
                        .where("_id").in(found)
                        .exec(function(err, found){
                            if (!err) {
                                res.send(found);
                            } else {
                                res.send(err);
                            }
                        });
                } else {
                    res.send(err);
                }
        });
    });

    app.get("/api/schedule/rooms", function (req, res) {
        Schedule
            .find()
            .distinct("room")
            .exec(function (err, found) {
                if (!err) {
                    Room
                        .find()
                        .where("_id").in(found)
                        .exec(function(err, found){
                            if (!err) {
                                res.send(found);
                            } else {
                                res.send(err);
                            }
                        });
                } else {
                    res.send(err);
                }
        });
    });

    app.get("/api/schedule/staff/schedule", function (req, res) {
        Schedule
            .find()
            .where("lecturer").equals(req.query.lecturer)
            .populate("lecturer class room group")
            .exec(function (err, found) {
                if (!err) {
                    res.send(found);
                } else {
                    res.send(err);
                }
            });
    });

    app.get("/api/schedule/room/schedule", function (req, res) {
        Schedule
            .find()
            .where("room").equals(req.query.room)
            .populate("lecturer class room group")
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