myApp.controller('NavbarConnecteContoleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', function($scope, $route, $routeParams, $location, $cookies) {
  
  $scope.deconnecter = function() {
    $cookies.remove('utilisateur');
    $location.path('/');
  }

}]);