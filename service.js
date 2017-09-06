angular.module('app').service('service', function($http, $q) {
  var baseUrl = 'http://127.0.0.1:3000/api/list';
  this.getTodos = function() {
    var promise = $http({
      method: 'GET',
      url: baseUrl
    });

    return promise;
  };
  this.submitTodo = function(todo) {
    // var promise = $http({
    //   method: 'POST',
    //   url: baseUrl,
    //   data: { todo }
    // });

    var promise = $http.post(baseUrl, { todo: todo });
    return promise;
  };
});

// angular.module("app").service("service", function($http){
//   this.promise = function(){
//     var promise = $q(function(res, rej){
//       console.log('starting external web call');
//       setTimeout(function() {
//         console.log("we're back from the external web call");
//         res('SomethingFromSomeoneElse');
//       }, 2000);
//     })
//   }
// })
