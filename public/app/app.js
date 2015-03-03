var app = angular.module("calendarApp", ['ui.router']);
app.controller("CalendarController", function($scope){
    this.title = "Calendar";
    this.day = moment();
    console.log("basic angular setup");
});
app.directive("month", function(){
    return {
        // match element name
        restrict: "E",
        //set up two way binding
        scope: {
            selected: '='
        },
        link: function(scope){
            scope.days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri"];
            //Get current time
            scope.selectDay = moment();
            //Set up for month as well, don't want a pointer to object so we create a new object with same values
            scope.month = scope.selectDay.clone();
            //the beginning of the month
            var start = scope.selectDay.clone().date(1);
            console.log(start);
            removeTime(start);
            console.log(start);
        }
    };
    //Function to get the start of the day/month at 0
    function removeTime(date){
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }
    //Function to create a month
    function createMonth(scope, start, month){
        scope.weeks = [];

    }
    //Function to create week
    function createWeek(date, month){
        var days = [];
        //7 days in a week
        for (var i =0; i<7; i++){
        //Create a day object
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            });
            date = date.clone();
            date.add(1, "d");
        }

        return days;
    }

});