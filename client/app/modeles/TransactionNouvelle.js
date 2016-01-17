myApp.factory('TransactionNouvelle', function($resource) {
  return $resource('/transaction/nouvelle'); 
});