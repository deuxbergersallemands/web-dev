myApp.controller('NavbarLoginControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Utilisateur', function($scope, $route, $routeParams, $location, $cookies, Utilisateur) {

   var user = new Utilisateur(); 
      
   $scope.envoyerLogin = function() {
    // Vérifier cordonées saisis 
    if ($scope.motDePasse.length && $scope.mel.length) {
      user.motDePasse =  $scope.motDePasse; 
      user.mel = $scope.mel;
      user.$save(function (user, headers) {
                   $cookies.put('utilisateur', $scope.mel);
                   $location.path("/tableauDeBord");
              }, function (error) {
                    // échec
                }); 
    }

  };
}]);