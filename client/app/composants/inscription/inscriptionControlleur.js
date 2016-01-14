myApp.controller('InscriptionControlleur', ['$scope', '$location', function($scope, $route, $routeParams, $location) {
  $scope.mel = ""
  $scope.motDePasse = ""
  $scope.confirmerMDP = ""

  $scope.seConnecter = function() {
    // Vérifier cordonées saisis 
    $location.path("/tableauDeBord")
  };
}]);