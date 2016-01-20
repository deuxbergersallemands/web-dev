myApp.controller('ActiviteRecenteControleur', ['$scope', '$route', '$routeParams', '$location','ActivitesRecentes',
 function($scope, $route, $routeParams, $location,ActivitesRecentes) {
   ActivitesRecentes.query(function (activites, headers) {
                        $scope.activitesRecentes = activites;
                       }, function (error) {
                        // échec
                       });

}]);