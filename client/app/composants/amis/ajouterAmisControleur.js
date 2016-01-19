myApp.controller('AjouterAmisControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Amis', function($scope, $route, $routeParams, $location, $cookies, Amis) {



  $scope.recupererAmis = function() {
    
  var amis = Amis.query(function (transaction, error) {
               $scope.testtt = transaction;
                  for(i in transaction )
                    console.log(transaction[i]);
                        // succès
                }, function (error) {
                  console.log("erreur");
                    // échec
                });

    console.log(amis)
  }

    $scope.recupererAmis();

}]);