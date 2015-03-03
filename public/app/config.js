angular.module("calendarApp")
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    //Routes not defined will go to the root
    $urlRouterProvider.otherwise('/');
    //Separate states for Month,Day, Year
    $stateProvider
        .state('month', {
            url: "/month",
            templateUrl: "app/views/templates/month.ejs"
        })
        .state('day', {
            url: "/day",
            templateUrl: ""
        })
        .state('year', {
            url: "/year",
            templateUrl: ""
        });
}]);