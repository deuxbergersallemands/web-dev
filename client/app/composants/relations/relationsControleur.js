myApp.controller('RelationsControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Relations', 'Groupes', function($scope, $route, $routeParams, $location, $cookies, Relations, Groupes) {

  $scope.recupererAmis = function() {    
  	var relation = Relations.query(function (relation, error) {
               $scope.amis = relation;
               console.log("aaaaaaa")
  })}

  $scope.recupererGroupes = function() {    
    Groupes.query(function (groupe, error) {
               $scope.groupes = groupe;
               console.log(groupe)
  })}

  $scope.recupererAmis();
  $scope.recupererGroupes();

  $scope.ajouterAmis = function() {
  	$location.path("/amis");

  }

  $scope.ajouterGroupe = function() {
    $location.path("/groupes");

  }

}]);