angular.module('app', []).controller('Ctrl', function($scope, service) {
  var bool = true;
  var counter = 0;
  service.promise().then(function(response) {
    console.log(response);
    bool = false;
  });
  setInterval(function() {
    if (bool) {
      counter++;
      console.log('waiting ' + counter);
    } else {
      console.log('all done after ' + counter + ' seconds');
    }
  }, 1000);
});
