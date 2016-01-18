myApp.controller('InscriptionControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Inscription', function($scope, $route, $routeParams, $location, $cookies, Inscription) {
  $scope.mel = ""
  $scope.motDePasse = ""
  $scope.confirmerMDP = ""
  $scope.nom = ""

  $scope.seConnecter = function() {
    // Vérifier cordonées saisies 

    	if ($scope.mel.length && $scope.motDePasse.length && $scope.motDePasse.length && $scope.nom.length) {
          
          $scope.inscription = new Inscription();
          $scope.inscription.mel = $scope.mel;
          $scope.inscription.motDePasse = $scope.motDePasse;
          $scope.inscription.nom = $scope.nom;

          $scope.inscription.$save(function (utilisateur, headers) {
                    console.log("successs");
                    // succès
                }, function (error) {
                    // échec
                });
    	} 
    //$location.path("/tableauDeBord")
  };
}]);