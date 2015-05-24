/**
 * Created by Anton on 5/24/2015.
 */

angular.module("st-schedule").config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("home", {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: "HomeCtrl"
    });
});