angular.module("calendarApp", ['ui.router'])
.controller("CalendarController", function($scope){
    this.title = "Calendar";
    this.day = moment();
    console.log("basic angular setup");
});