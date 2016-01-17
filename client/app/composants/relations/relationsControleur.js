myApp.controller('RelationsControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', function($scope, $route, $routeParams, $location, $cookies) {

  $scope.amis = [{texte:'activite1', date:'la date'}, {texte:'activite2', date:'la date'}, {texte:'activite3', date:'la date'}, {texte:'activite4', date:'la date'}, 
                             {texte:'activite5', date:'la date'}, {texte:'activite6', date:'la date'}, {texte:'activite7', date:'la date'}, {texte:'activite8', date:'la date'}];

  $scope.groupes = [{texte:'activite1', date:'la date'}, {texte:'activite2', date:'la date'}, {texte:'activite3', date:'la date'}, {texte:'activite4', date:'la date'}, 
                             {texte:'activite5', date:'la date'}, {texte:'activite6', date:'la date'}, {texte:'activite7', date:'la date'}, {texte:'activite8', date:'la date'}];
}]);