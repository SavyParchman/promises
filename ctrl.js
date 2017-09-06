angular.module('app', []).controller('Ctrl', function($scope, service) {
  service.getTodos().then(function(response) {
    $scope.todos = response.data;
  });
  $scope.submitTodo = function(todo) {
    service.submitTodo(todo).then(function(response) {
      $scope.todos = response.data;
    });
  };
});
