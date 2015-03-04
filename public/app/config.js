angular.module("calendarApp")
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    //Routes not defined will go to the root
    $urlRouterProvider.otherwise('/');
    //Separate states for Month,Day, Year
    $stateProvider
        .state('month', {
            url: "/",
            templateUrl: "app/views/templates/month.ejs",
            controller: function(){
                
            },
            controllerAs: "month"
        })
        .state('day', {
            url: "/day",
            templateUrl: "app/views/templates/day.ejs"
        })
        .state('year', {
            url: "/year",
            templateUrl: "app/views/templates/year.ejs"
        });
}]);