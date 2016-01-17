myApp.factory('Transaction', function($resource) {
  return $resource('/transaction'); 
});