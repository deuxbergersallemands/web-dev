myApp.controller('RelationsControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Relations', 'Groupes', function($scope, $route, $routeParams, $location, $cookies, Relations, Groupes) {

  $scope.recupererAmis = function() {    
  	var relation = Relations.query(function (relation, error) {
               $scope.amis = relation;
               console.log("aaaaaaa")
  })}

  $scope.recupererGroupes = function() {    
    var relation = Groupes.query(function (relation, error) {
               $scope.groupes = relation;
  })}

  $scope.recupererAmis();
  $scope.recupererGroupes();

  $scope.ajouterAmis = function() {
  	$location.path("/amis");

  }

}]);