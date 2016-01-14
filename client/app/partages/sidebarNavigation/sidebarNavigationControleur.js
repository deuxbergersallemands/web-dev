myApp.controller('SidebarNavigationControleur', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {

  $scope.dirigerVersURL = function(url) {
	$location.path(url);
  }

}]);