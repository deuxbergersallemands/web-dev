myApp.controller('RelationsControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Relations', function($scope, $route, $routeParams, $location, $cookies, Relations) {

  $scope.recupererRelation = function() {    
  	var relation = Relations.query(function (relation, error) {
               $scope.amis = relation;
               console.log("aaaaaaa")
  })}

  $scope.recupererRelation();

  $scope.groupes = [{texte:'groupe1', date:'la date'}, {texte:'groupe2', date:'la date'}, {texte:'groupe3', date:'la date'}];

  $scope.ajouterAmis = function() {
  	$location.path("/amis");

  }

}]);