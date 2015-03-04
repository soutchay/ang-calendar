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
        templateUrl: 'app/views/templates/monthDirective.ejs',
        controller: function($scope){
            $scope.showDay = function(){
                console.log('turn true');
                $scope.dayShown = true;
            };
            this.test = "testing";
        },
        controllerAs: "month",
        link: function(scope){
            scope.days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            //Get current time
            scope.selectDay = removeTime(scope.selectDay || moment());
            //Set up for month as well, don't want a pointer to object so we create a new object with same values
            scope.month = scope.selectDay.clone();
            //the beginning of the month, keeps current time
            var start = scope.selectDay.clone();
            start.date(1);
            //remove the current time to get the real start of the month at 00:00
            removeTime(start);

            createMonth(scope, start, scope.month);
            console.log(scope.weeks, "weeks");
            console.log(scope.weeks[0].days, "days");
            scope.select = function(day){
                scope.selected = day.date;
            };
            //Function to get next month
            scope.next = function(){
                var next = scope.month.clone();
                removeTime((next.month(next.month()+1)).date(1));
                scope.month.month(scope.month.month()+1);
                createMonth(scope, next, scope.month);
            };
            //Functin to get previous month
            scope.previous = function(){
                var previous = scope.month.clone();
                removeTime((previous.month(previous.month()-1)).date(1));
                scope.month.month(scope.month.month()-1);
                createMonth(scope, previous, scope.month);
            };
        }
    };
    //Function to get the start of the day/month at 00:00
    function removeTime(date){
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }
    //Function to create a month
    function createMonth(scope, start, month){
        scope.weeks = [];
        var done = false;
        var date = start.clone();
        //moment().month(), starts at 0 index to 11
        var monthIndex = date.month();
        var count = 0;
        while(!done){
            scope.weeks.push({ days: createWeek(date.clone(), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
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
                date: date,
                events: [{}]
            });
            date = date.clone();
            date.add(1, "d");
        }

        return days;
    }

});
//Directive to show day selected
app.directive("day", function(){
    return {
        restrict: "E",
        scope: {
            shown: '='
        },
        require: "month",
        replace: true,
        transclude: true,
        link: function(scope, element, attrs, monthCtrl){
            console.log('day directive');
            console.log(monthCtrl.test);
            //Toggle view of a selected day
            scope.hideDay = function(){
                scope.shown = false;
                console.log(monthCtrl.showDay);
            };
        },
        templateUrl: "app/views/templates/dayDirective.ejs"
    };
});