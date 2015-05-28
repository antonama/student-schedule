/**
 * Created by Anton on 5/24/2015.
 */

angular.module("st-schedule").config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("main", {
        abstract: true,
        resolve: {
            "settings": function (settings) {
                return settings.get();
            }
        },
        controller: function ($rootScope, settings) {
            $rootScope.settings = settings;
        },
        template: "<ui-view></ui-view>"
    }).state("main.home", {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: "HomeCtrl"
    }).state("main.staff", {
        url: "/staff/list",
        templateUrl: "templates/staff.html",
        controller: "StaffCtrl"
    }).state("main.staff_schedule", {
        url: "/staff/{id}",
        templateUrl: "templates/staff.schedule.html",
        controller: "StaffScheduleCtrl"
    });
});