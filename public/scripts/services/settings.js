/**
 * Created by Anton on 5/24/2015.
 */

angular.module("st-schedule")
    .factory("settings", function ($q, $http) {
        var settings = null,
            maxClassesInDay,
            showSchedule;

        return {
            get: function () {
                if (settings) {
                    return $q.when(settings);
                } else {
                    return $http.get("/api/settings").then(function (res) {
                        res.data.map(function (item) {
                            if (item.uniqueId === "maxClassesInDay") {
                                maxClassesInDay = parseInt(item.value, 10);
                            }
                            if (item.uniqueId === "publishSchedule") {
                                showSchedule = item.value === "true";
                            }
                        });

                        settings = {
                            maxClassesInDay: maxClassesInDay,
                            showSchedule: showSchedule
                        };

                        return settings;
                    });
                }
            },
            getObject: function () {
                return settings;
            }
        }
    });