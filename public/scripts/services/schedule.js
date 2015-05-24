/**
 * Created by Anton on 5/24/2015.
 */

angular.module("st-schedule")
    .factory("schedule", function ($http) {
        return {
            getSchedule: function (group) {
                return $http.get("/api/schedule", {
                    params: {
                        group: group
                    }
                }).then(function (res) {
                    var schedule = [],
                        daysInWeek = 6,
                        serverSchedule = res.data;

                    for (var i = 0; i < daysInWeek; i++) {
                        schedule[i] = [];
                    }

                    schedule.forEach(function (item, index, array) {
                        for (var i = 0; i < 7; i++) {
                            array[index].push({});
                        }
                    });

                    serverSchedule.forEach(function (item, index, array) {
                        schedule[item.day][item.index] = angular.extend(item, {
                            title: item.class.title
                        });
                    });

                    return schedule;
                });
            }
        }
    });