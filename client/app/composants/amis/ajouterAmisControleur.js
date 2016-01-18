myApp.controller('AjouterAmisControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Amis', function($scope, $route, $routeParams, $location, $cookies, Amis) {


  $scope.noms;

  $scope.recupererAmis = function() {
  	console.log('qpppel');
    $scope.amis = [];
    $scope.amis = new Amis().$query(function (transaction, headers) {
                   console.log(transaction);
                        // succès
                }, function (error) {
                	console.log("erreur");
                    // échec
                });
  }
 
  $scope.recupererAmis();

    $scope.noms = $scope.recupererAmis();

 
  $scope.nomAmi = "";
  $scope.ajouterAmi = function() {
  //	$scope.noms.push($scope.nomAmi);
  //	$scope.nomAmi = "";
  }
}]);