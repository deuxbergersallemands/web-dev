myApp.factory('TransactionId', function($resource) {
  return $resource('/transaction/:id', {id:'@tid'}); 
});