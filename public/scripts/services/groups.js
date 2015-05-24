/**
 * Created by Anton on 5/24/2015.
 */

angular.module("st-schedule")
    .factory("groups", function ($http) {
        return {
            getGroupsForYear: function (year) {
                return $http.get("/api/groups", {
                    params: {
                        year: year
                    }
                }).then(function (res) {
                    return res.data;
                });
            }
        }
    });