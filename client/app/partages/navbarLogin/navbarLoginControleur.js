myApp.controller('NavbarLoginControleur', ['$scope', '$location', function($scope, $route, $routeParams, $location) {
  $scope.login = ""
  $scope.motDePasse = ""

  $scope.envoyerLogin = function() {
    // Vérifier cordonées saisis 
    $location.path("/tableauDeBord")
  };
}]);