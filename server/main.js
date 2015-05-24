/**
 * Created by Anton on 5/24/2015.
 */

var mongoose = require("mongoose"),
    db = mongoose.createConnection('mongodb://anton.abramovich:9875321Velvifoz@ds053139.mongolab.com:53139/schedule');

mongoose.set('debug', true);

db.once('open', function () {
    var groupSchema = require("./schemas/groupSchema"),
        scheduleSchema = require("./schemas/scheduleSchema"),
        classSchema = require("./schemas/classSchema"),
        roomSchema = require("./schemas/roomSchema"),
        settingsSchema = require("./schemas/settingsSchema"),
        staffSchema = require("./schemas/staffSchema"),
        announcementSchema = require("./schemas/announcementSchema");

    var Schedule,
        Class,
        Group,
        Room,
        Settings,
        Staff,
        Announcement;

    Schedule = db.model("Schedule", scheduleSchema);
    Class = db.model("Class", classSchema);
    Group = db.model("Group", groupSchema);
    Room = db.model("Room", roomSchema);
    Settings = db.model("Settings", settingsSchema);
    Staff = db.model("Staff", staffSchema);
    Announcement = db.model("Announcement", announcementSchema);

    require("./handlers/main")(Schedule, Group, Announcement);
});
