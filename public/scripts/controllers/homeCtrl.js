/**
 * Created by Anton on 5/24/2015.
 */

angular.module("st-schedule")
    .controller("HomeCtrl", function ($scope, $cookies, groups, schedule, announcements, cfpLoadingBar, settings) {
        var yearGroup = $cookies.getObject("rfe-year-group");

        $scope.years = [1,2,3,4,5];
        $scope.moment = moment;

        $scope.changeYear = function (year) {
            cfpLoadingBar.start();

            $scope.selectedYear = year;

            groups.getGroupsForYear(year).then(function (groups) {
                $scope.groups = groups;
                $scope.selectedGroup = groups[0];

                $cookies.putObject("rfe-year-group", {
                    year: $scope.selectedYear,
                    group: $scope.selectedGroup
                });

                $scope.getSchedule().then(function () {
                    cfpLoadingBar.complete();
                });
            });
        };

        $scope.getSchedule = function () {
            cfpLoadingBar.start();

            $cookies.putObject("rfe-year-group", {
                year: $scope.selectedYear,
                group: $scope.selectedGroup
            });

            getAnnouncements($scope.selectedGroup._id);
            return schedule.getSchedule($scope.selectedGroup._id).then(function (schedule) {
                $scope.schedule = schedule;
                cfpLoadingBar.complete();
            });
        };

        function getAnnouncements (group) {
            announcements.get(group).then(function (announcements) {
                $scope.announcements = announcements;
            });
        }

        if (!yearGroup) {
            $scope.changeYear(1);
        } else {
            cfpLoadingBar.start();

            $scope.selectedYear = yearGroup.year;
            groups.getGroupsForYear($scope.selectedYear).then(function (groups) {
                $scope.groups = groups;
                groups.map(function (item) {
                    if (item.title === yearGroup.group.title) {
                        $scope.selectedGroup = item;
                    }
                });
                $scope.getSchedule();
            });
        }
    });

