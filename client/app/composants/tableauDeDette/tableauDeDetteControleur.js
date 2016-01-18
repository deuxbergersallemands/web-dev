myApp.controller('TableauDeDetteControleur', ['$scope', '$route', '$routeParams', '$location', 'Transactions', '$cookies', function($scope, $route, $routeParams, $location, Transactions, $cookies) {
  // TODO
  $scope.solde = 0; // à remplacer avec fonction

  // TODO
  $scope.recuperDettes = function() {
    $scope.transaction = new Transactions();
    $scope.transaction.$query(function (transaction, headers) {
                   console.log(transaction);
                        // succès
                }, function (error) {
                	console.log("erreur");
                    // échec
                });
  }

  $scope.recuperDettes();

  $scope.ajouterTransaction = function() {
  	$location.path("/transaction/nouvelle");

  }


}]);