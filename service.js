angular.module('app').service('service', function($http, $q) {
  this.promise = function() {
    var promise = $q(function(res, rej) {
      console.log('starting external web call');
      setTimeout(function() {
        console.log("we're back from the external web call");
        res('Promise resolved');
      }, 5000);
    });
    return promise;
  };
});
