myApp.controller('TransactionNouvelleControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies','TransactionNouvelle', function($scope, $route, $routeParams, $location, $cookies, TransactionNouvelle) {
  
  $scope.noms = [];

  $scope.nomAjouter = "";
  $scope.ajouterNom = function() {
  	$scope.noms.push($scope.nomAjouter);
  	$scope.nomAjouter = "";
  }

  $scope.sauvegarder = function() {
   
    $scope.tousParticipants = $scope.noms;
    $scope.tousParticipants.push($cookies.get('utilisateur'));

  	$scope.transaction = new TransactionNouvelle();
    $scope.transaction.createur = $cookies.get('utilisateur');
    $scope.transaction.participants = $scope.tousParticipants;
    $scope.transaction.description = $scope.description;
    $scope.transaction.montant = $scope.montant;
    $scope.transaction.type = $scope.typeTransaction;
    $scope.transaction.participantRembourse = $scope.participantRembourse;
    
    $scope.transaction.$save(function (transaction, headers) {
                    // succès

                }, function (error) {
                    // échec
                });
  }


}]);