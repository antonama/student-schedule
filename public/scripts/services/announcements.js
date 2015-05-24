/**
 * Created by Anton on 5/24/2015.
 */

angular.module("st-schedule")
    .factory("announcements", function ($q, $http, settings) {
        return {
            get: function (group) {
                if (!settings.getObject().showSchedule) {
                    return $q.when([]);
                } else {
                    return $http.get("/api/announcements", {
                        params: {
                            group: group
                        }
                    }).then(function (res) {
                        return res.data;
                    });
                }
            }
        }
    });