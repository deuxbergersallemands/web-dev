myApp.controller('TableauDeDetteControleur', ['$scope', '$route', '$routeParams', '$location', 'Transactions', '$cookies', function($scope, $route, $routeParams, $location, Transactions, $cookies) {
  // TODO
  $scope.solde = 0; // à remplacer avec fonction

  // TODO
  $scope.recuperDettes = function() {
    var transactions = Transactions.query(function (transaction, headers) {
                        $scope.transactions = transaction;
                       }, function (error) {
                        // échec
                       });
  }

  $scope.recuperDettes();

  $scope.ajouterTransaction = function() {
  	$location.path("/transaction/nouvelle");

  }


}]);