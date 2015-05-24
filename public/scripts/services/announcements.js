/**
 * Created by Anton on 5/24/2015.
 */

angular.module("st-schedule")
    .factory("announcements", function ($http) {
        return {
            get: function (group) {
                return $http.get("/api/announcements", {
                    params: {
                        group: group
                    }
                }).then(function (res) {
                    return res.data;
                });
            }
        }
    });