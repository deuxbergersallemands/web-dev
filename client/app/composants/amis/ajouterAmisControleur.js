myApp.controller('AjouterAmisControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Amis', function($scope, $route, $routeParams, $location, $cookies, Amis) {



  $scope.recupererAmis = function() {
  	console.log("apppelll");
    $scope.amis = new Amis();
    $scope.amis.$query(function (transaction, headers) {
                  	console.log("dddd");
                        // succès
                }, function (error) {
                	console.log("erreur");
                    // échec
                });
  }

    $scope.noms = $scope.recupererAmis();

 
  $scope.nomAmi = "";
  $scope.ajouterAmi = function() {
  //	$scope.noms.push($scope.nomAmi);
  //	$scope.nomAmi = "";
  }
}]);