/**
 * Created by Anton on 5/27/2015.
 */

angular.module("st-schedule")
    .controller("StaffScheduleCtrl", function ($scope, schedule, $stateParams, cfpLoadingBar) {
        cfpLoadingBar.start();

        $scope.moment = moment;

        $scope.changeLecturer = function (lecturer) {
            cfpLoadingBar.start();
            schedule.getStaffSchedule(lecturer).then(function (schedule) {
                $scope.schedule = schedule;
                cfpLoadingBar.complete();
            });
        };

        schedule.getStaff().then(function (staff) {
            $scope.staff = staff;
            $scope.lecturerId = staff[0]._id;
            $scope.changeLecturer($scope.lecturerId);
        });
    });