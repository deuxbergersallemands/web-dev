myApp.controller('TransactionNouvelleControleur', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {

  $scope.historique = [{texte:'Transaction1', date:'la date'}, {texte:'Transaction1', date:'la date'}];
  
  $scope.noms = [];

  $scope.nomAjouter = "";

  $scope.ajouterNom = function() {
  	$scope.noms.push($scope.nomAjouter);
  	$scope.nomAjouter = "";
  }

  $scope.sauvegarder =function() {
  	console.log("sauvegarder");
  }

}]);