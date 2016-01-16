myApp.controller('NavbarLoginControleur', ['$scope', '$route', '$routeParams', '$location', 'Utilisateur', function($scope, $route, $routeParams, $location, Utilisateur) {
  $scope.motDePasse = ""
  $scope.mel = ""

   var user = new Utilisateur(); 
   //$scope.testtt = user.$query();

   $scope.envoyerLogin = function() {
    // Vérifier cordonées saisis 
    
    user.test = {"mdp": $scope.motDePasse, "mel": $scope.mel};
    user.$save();

    //$location.path("/tableauDeBord")
  };
}]);