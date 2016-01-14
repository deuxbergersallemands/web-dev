myApp.controller('InscriptionControleur', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {
  $scope.mel = ""
  $scope.motDePasse = ""
  $scope.confirmerMDP = ""

  $scope.seConnecter = function() {
    // Vérifier cordonées saisies 
    $location.path("/tableauDeBord")
  };
}]);