myApp.controller('NavbarLoginControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Utilisateur', function($scope, $route, $routeParams, $location, $cookies, Utilisateur) {
  $scope.motDePasse = ""
  $scope.mel = ""

   var user = new Utilisateur(); 

   $scope.envoyerLogin = function() {
    // Vérifier cordonées saisis 
    if ($scope.motDePasse.length && $scope.mel.length) {
      user.motDePasse =  $scope.motDePasse; 
      user.mel = $scope.mel;
      user.$save(function (user, headers) {
                   $cookies.put('utilisateur', $scope.mel);
                   console.log($cookies.get('utilisateur'));
                   $location.path("/tableauDeBord");
              }, function (error) {
                    // échec
                }); 
    }

  };
}]);