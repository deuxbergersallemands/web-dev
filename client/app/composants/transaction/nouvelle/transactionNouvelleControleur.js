
myApp.controller('TransactionNouvelleControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies','TransactionNouvelle', 'Relations', function($scope, $route, $routeParams, $location, $cookies, TransactionNouvelle, Relations) {
  
  $scope.participants = [];
  var utilisateur = new Object();
  utilisateur.nom = $cookies.get('nom');
  utilisateur.mel = $cookies.get('utilisateur');
  $scope.participants.push(utilisateur);
  
  $scope.ajouterAmi = function(ami) {
  	$scope.participants.push(ami);
  }

  $scope.sauvegarder = function() {
   
    $scope.tousParticipants = $scope.participants;

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

   Relations.query(function(amis, headers ) {
     $scope.amis = amis;

   });
}]);