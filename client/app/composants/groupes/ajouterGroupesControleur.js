myApp.controller('AjouterGroupesControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies','GroupeNouveau', 'Relations', function($scope, $route, $routeParams, $location, $cookies, GroupeNouveau, Relations) {
  
  /**/
    $scope.noms = [];
    var utilisateur = new Object();
    utilisateur.nom = $cookies.get('nom');
    utilisateur.mel = $cookies.get('utilisateur');
    $scope.noms.push(utilisateur);


  $scope.ajouterAmi = function(ami) {
    console.log(" ajouterAmi(ami)");
    $scope.noms.push(ami);
  }

  $scope.sauvegarder = function() {
    $scope.tousMembres = $scope.noms;
    $scope.groupe = new GroupeNouveau();
    $scope.groupe.createur = $cookies.get('utilisateur');
    $scope.groupe.NomGroupe = $scope.NomGroupe;
    $scope.groupe.membres = $scope.tousMembres;
    $scope.groupe.description = $scope.description;
    $scope.groupe.$save(function (groupe, headers) {
                    // succès
          $location.path('/relations');
                }, function (error) {
                    // échec
                });
  }

  $scope.recupererAmis = function() {
   AmisGroupe.query(function (amisgp, error) {
     $scope.amisgroupe = amisgp;
      }, function (error) {
          console.log("error")
      });
  }

   Relations.query(function(amis, headers ) {
     $scope.amis = amis;
   });
/**/
}]);