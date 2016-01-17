myApp.controller('TableauDeDetteControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', function($scope, $route, $routeParams, $location, $cookies) {
  // TODO
  $scope.solde = 0; // à remplacer avec fonction

  // TODO
  $scope.recuperDettes = function() {
  
  }

  $scope.ajouterTransaction = function() {
  	$location.path("/transaction/nouvelle");

  }


}]);