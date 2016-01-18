myApp.factory('Transactions', function($resource) {
  return $resource('/tableauDeBord'); 
});