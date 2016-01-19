myApp.controller('TableauDeDetteControleur', ['$scope', '$route', '$routeParams', '$location', 'Transactions', 'TransactionsParticipant', '$cookies', function($scope, $route, $routeParams, $location, Transactions, TransactionsParticipant, $cookies) {
  // TODO
  $scope.solde = 0; // à remplacer avec fonction

  $scope.mel = $cookies.get('utilisateur');

  // TODO
  $scope.recuperDettes = function() {
    var transactions = Transactions.query(function (transaction, headers) {
                        $scope.transactionsDebiteur = transaction;
                       }, function (error) {
                        // échec
                       });

    var transactions2 = TransactionsParticipant.query(function (transaction, headers) {
                        $scope.transactionsParticipant = transaction;
                       }, function (error) {
                        // échec
                       });
  }

  $scope.recuperDettes();

  $scope.ajouterTransaction = function() {
  	$location.path("/transaction/nouvelle");

  }


}]);