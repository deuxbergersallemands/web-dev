myApp.controller('AjouterAmisControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Amis', function($scope, $route, $routeParams, $location, $cookies, Amis) {


  $scope.noms = [{nom:'Nathy', prenom:'Moimeme'}, {nom:'Jolie', prenom:'Nature'}];

  $scope.recupererAmis = function() {
    $scope.amis = new Amis();

  }

  $scope.nomAmi = "";
  $scope.ajouterAmi = function() {
  	$scope.noms.push($scope.nomAmi);
  	$scope.nomAmi = "";
  }
}]);