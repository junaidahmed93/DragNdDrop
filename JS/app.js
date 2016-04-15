angular.module("myApp", ["ngMaterial","angular-sortable-view"])

.controller("appController",function($scope){
     $scope.add;
     $scope.data = {

        Todo :["Android ","Hybrid",],
        Doing : [],
        Review : [ ],
        Done : [ "IOS"]
    };
    
    $scope.AddTaskWalaButton = function (add) {
        $scope.data.Todo.push($scope.add);
    }
});


