var taskerApp = angular.module('taskerApp', []);


taskerApp.controller('TaskListCtrl', function ($scope, $http) {

  $scope.fetch = function() {
    $http.get('/api/tasks').success(function(data) {
      console.log('fetched data')
      console.log(data);
      $scope.tasks = data;
    });
  };

  $scope.createTask = function(name, description) {
    $http.post("/api/tasks/", {name : name, description: description}).success(function(data, status) {
        $scope.fetch();
    });
  };

  $scope.completeTask = function(task) {
    console.log(task);
    var answer = confirm("Are you sure you want to complete this task?");
    if (answer == true) {
      console.log("Deleted Task with _id:" + task["_id"]);
      $http.delete('/api/tasks/' + task["_id"]);
      $scope.fetch();
    }

  };

  $scope.fetch();
});
