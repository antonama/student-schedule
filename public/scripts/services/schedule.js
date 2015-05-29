/**
 * Created by Anton on 5/24/2015.
 */

angular.module("st-schedule")
    .factory("schedule", function ($q, $http, settings) {

        function formSchedule (serverSchedule) {
            var schedule = [],
                daysInWeek = 6;

            for (var i = 0; i < daysInWeek; i++) {
                schedule[i] = [];
            }

            schedule.forEach(function (item, index, array) {
                for (var i = 0; i < settings.getObject().maxClassesInDay; i++) {
                    array[index].push([]);
                }
            });

            serverSchedule.forEach(function (item, index, array) {
                schedule[item.day][item.index].push(angular.extend(item, {
                    title: item.class.title
                }));
            });

            return schedule;
        }

        return {
            getSchedule: function (group) {
                if (!settings.getObject().showSchedule) {
                    return $q.when([]);
                } else {
                    return $http.get("/api/schedule", {
                        params: {
                            group: group
                        }
                    }).then(function (res) {
                        return formSchedule(res.data);
                    });
                }
            },
            getStaff: function () {
                if (!settings.getObject().showSchedule) {
                    return $q.when([]);
                } else {
                    return $http.get("/api/schedule/staff").then(function (res) {
                        return res.data;
                    });
                }
            },
            getRooms: function () {
                if (!settings.getObject().showSchedule) {
                    return $q.when([]);
                } else {
                    return $http.get("/api/schedule/rooms").then(function (res) {
                        return res.data;
                    });
                }
            },
            getStaffSchedule: function (lecturerId) {
                if (!settings.getObject().showSchedule) {
                    return $q.when([]);
                } else {
                    return $http.get("/api/schedule/staff/schedule", {
                        params: {
                            lecturer: lecturerId
                        }
                    }).then(function (res) {
                        return formSchedule(res.data);
                    });
                }
            },
            getRoomSchedule: function (roomId) {
                if (!settings.getObject().showSchedule) {
                    return $q.when([]);
                } else {
                    return $http.get("/api/schedule/room/schedule", {
                        params: {
                            room: roomId
                        }
                    }).then(function (res) {
                        return formSchedule(res.data);
                    });
                }
            }
        }
    });