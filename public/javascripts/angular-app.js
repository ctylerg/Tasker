var taskerApp = angular.module('taskerApp', []);


taskerApp.controller('TaskListCtrl', function ($scope, $http) {
  $http.get('/api/tasks').success(function(data) {
    console.log('fetched data')
    console.log(data);
    $scope.tasks = data;
  });
});
