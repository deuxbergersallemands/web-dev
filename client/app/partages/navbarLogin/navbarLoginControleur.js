myApp.controller('NavbarLoginControleur', ['$scope', '$route', '$routeParams', '$location', 'Utilisateur', function($scope, $route, $routeParams, $location, Utilisateur) {
  $scope.motDePasse = ""
  $scope.mel = ""

   var user = new Utilisateur(); 

   $scope.envoyerLogin = function() {
    // Vérifier cordonées saisis 
    if ($scope.motDePasse.length && $scope.mel.length) {
      user.test = {"mdp": $scope.motDePasse, "mel": $scope.mel};
      user.$save(function (user, headers) {
                    // succès
                }, function (error) {
                    // échec
                }); 
    }

  };
}]);