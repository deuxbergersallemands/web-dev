myApp.controller('TouteActiviteControleur', 
	['$scope', '$route', '$routeParams', '$location', '$cookies','TouteActivites' ,
	function($scope, $route, $routeParams, $location, $cookies,TouteActivites) {
		TouteActivites.query(function (activites, headers) {
                        $scope.toutesActivites = activites;
                       }, function (error) {
                        // échec
                       });
/*
  $scope.historique = [
  {texte:'activite1', date:'la date'}, 
  {texte:'activite2', date:'la date'}, 
  {texte:'activite3', date:'la date'}, 
  {texte:'activite4', date:'la date'}, 
   {texte:'activite5', date:'la date'}, 
   {texte:'activite6', date:'la date'}, 
   {texte:'activite7', date:'la date'}, 
   {texte:'activite8', date:'la date'}]; */

}]);
