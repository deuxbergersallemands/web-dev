myApp.controller('NavbarLoginControleur', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {
  $scope.motDePasse = ""
  $scope.mel = ""

  $scope.envoyerLogin = function() {
    // Vérifier cordonées saisis 
    $location.path("/tableauDeBord")
  };
}]);