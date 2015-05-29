var taskerApp = angular.module('taskerApp', []);


taskerApp.controller('TaskListCtrl', function ($scope) {
  $scope.tasks = [
    {'name': 'Take out of the trash',
    'description': 'Don\'t forget the recyclables!',
    'completed': true },
    {'name': 'Reload ventra card',
    'description': 'Balance is low',
    'completed': false },
    {'name': 'Pick up surprise from UPS...',
    'description': 'its a secret to everyone',
    'completed': false },
  ];
});
