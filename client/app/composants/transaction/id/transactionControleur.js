myApp.controller('TransactionIdControleur', ['$scope', '$route', '$routeParams', '$cookies', 'TransactionId','$location', function($scope, $route, $routeParams, $cookies, TransactionId, $location) {

  $scope.tid = $location.path().split("/")[2]||null;
  if ($scope.tid == null){
  	$location.path('/tableauDeBord')
  }
 

  $scope.recupererTransaction = function() {
  	TransactionId.get({id:$scope.tid},function (transaction, headers) {
  		console.log("successss")
  		$scope.transaction = transaction;
                       }, function (error) {
                       	console.log('errrerrurrr');
                        // échec
                       });
  }

 $scope.recupererTransaction();

  $scope.historique = [{texte:'Transaction1', date:'la date'}, {texte:'Transaction1', date:'la date'}];
}]);