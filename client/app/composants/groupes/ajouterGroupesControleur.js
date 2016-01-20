myApp.controller('AjouterGroupesControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies','GroupeNouveau', function($scope, $route, $routeParams, $location, $cookies, GroupeNouveau) {
  
  /**/
    $scope.noms = [];

  $scope.nomAjouter = "";
  $scope.ajouterNom = function() {
    console.log(" ajouterNom()");
    $scope.noms.push($scope.nomAjouter);
    $scope.nomAjouter = "";
  }

  $scope.sauvegarder = function() {
    $scope.tousMembres = $scope.noms;
    $scope.tousMembres.push($cookies.get('utilisateur'));
    $scope.groupe = new GroupeNouveau();
    $scope.groupe.createur = $cookies.get('utilisateur');


    $scope.groupe.membres = $scope.tousMembres;
    $scope.groupe.description = $scope.description;
    $scope.groupe.$save(function (groupe, headers) {
                    // succès

                }, function (error) {
                    // échec
                });
  }
/**/
}]);