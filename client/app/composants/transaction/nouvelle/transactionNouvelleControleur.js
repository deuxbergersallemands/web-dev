myApp.controller('TransactionNouvelleControleur', ['$scope', '$route', '$routeParams', '$location', 'TransactionNouvelle', function($scope, $route, $routeParams, $location, TransactionNouvelle) {

  $scope.historique = [{texte:'Transaction1', date:'la date'}, {texte:'Transaction1', date:'la date'}];
  
  $scope.noms = [];

  $scope.nomAjouter = "";

  $scope.ajouterNom = function() {
  	$scope.noms.push($scope.nomAjouter);
  	$scope.nomAjouter = "";
  }

  $scope.sauvegarder = function() {

    $scope.tousParticipants = $scope.noms;
    $scope.tousParticipants.push($scope.nomAjouter);

  	$scope.transaction = new TransactionNouvelle();
    $scope.createur = ""; // À remplir
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