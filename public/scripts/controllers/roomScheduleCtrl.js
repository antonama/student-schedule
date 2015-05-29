angular.module("st-schedule")
    .controller("RoomScheduleCtrl", function ($scope, schedule, $stateParams, cfpLoadingBar) {
        cfpLoadingBar.start();

        $scope.moment = moment;

        $scope.changeRoom = function (room) {
            cfpLoadingBar.start();
            schedule.getRoomSchedule(room).then(function (schedule) {
                $scope.schedule = schedule;
                cfpLoadingBar.complete();
            });
        };

        schedule.getRooms().then(function (rooms) {
            $scope.rooms = rooms;
            $scope.roomId = rooms[0]._id;
            $scope.changeRoom($scope.roomId);
        });
    });