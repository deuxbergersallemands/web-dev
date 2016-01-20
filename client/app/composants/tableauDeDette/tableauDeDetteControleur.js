myApp.controller('TableauDeDetteControleur', ['$scope', '$route', '$routeParams', '$location', 'Transactions', 'TransactionsParticipant', 'Solde', '$cookies', function($scope, $route, $routeParams, $location, Transactions, TransactionsParticipant, Solde, $cookies) {

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

  $scope.recupererSolde = function() {
    Solde.get(function (solde, headers) {
                       // $cookies.put('nom', solde.nom);
                        $scope.solde = solde.solde;
                        $cookies.put('nom', solde.nom)
                       }, function (error) {
                        console.log(error);
                        // échec
                       });
  }

  $scope.recuperDettes();
  $scope.recupererSolde();

  $scope.ajouterTransaction = function() {
  	$location.path("/transaction/nouvelle");
  }

  $scope.dirigerVers = function(chemin) {
    console.log("chemin: " + chemin);
    $location.path('/transaction/'+chemin);
  }

}]);