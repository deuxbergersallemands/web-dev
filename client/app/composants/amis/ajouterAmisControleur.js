myApp.controller('AjouterAmisControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Amis', 'AmiNouveau', function($scope, $route, $routeParams, $location, $cookies, Amis, AmiNouveau) {

  $scope.recupererAmis = function() {
    Amis.query(function (amis, error) {
     $scope.utilisateurs = amis;
          // succès
      }, function (error) {
          // échec
      });
  }

  $scope.ajouterAmi = function(id) {
    $scope.amiNouveau = new Amis();
    $scope.amiNouveau.id = id;
    $scope.amiNouveau.$save(function(ami, etc) {
      $location.path('/relations');
    }, function(error) {
      console.log("errrr");
    });
  };

    $scope.recupererAmis();



}]);