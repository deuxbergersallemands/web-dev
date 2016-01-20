myApp.controller('AjouterAmisControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Amis', 'AmiNouveau', function($scope, $route, $routeParams, $location, $cookies, Amis, AmiNouveau) {

  $scope.recupererAmis = function() {
    Amis.query(function (transaction, error) {
     $scope.utilisateurs = transaction;
          // succès
      }, function (error) {
          // échec
      });
  }

  $scope.ajouterAmi = function(id) {
    $scope.amiNouveau = new Amis();
    $scope.amiNouveau.id = id;
    $scope.amiNouveau.$save(function(ami, etc) {
      console.log("addddd");
    }, function(error) {
      console.log("errrr");
    });
  };

    $scope.recupererAmis();



}]);