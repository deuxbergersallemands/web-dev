myApp.controller('TransactionIdControleur', ['$scope', '$route', '$routeParams', '$cookies', 'TransactionId','$location', function($scope, $route, $routeParams, $cookies, TransactionId, $location) {

  $scope.tid = $location.path().split("/")[2]||null;
  if ($scope.tid == null){
  	$location.path('/tableauDeBord')
  }
 

  $scope.recuperMontantDu = function() {
  	TransactionId.get({id:$scope.tid},function (transaction, headers) {

  		$scope.transaction = transaction;
      $scope.montantDu = transaction.participants[0].montantDu
      console.log($scope.montantDu)
                       }, function (error) {
                       });
  }

  $scope.payer = function() {
   console.log("payer")
   TransactionId.post({id:$scope.tid},function (transaction, headers) {

      console.log("qsdmlfkjqmsdlfjqsmdlfkjqmsdlfjmqsdlkjfmqsdljf SUCCCESSS");

      //$location.path('/tableauDeBord');
      })
  }

  $scope.recuperMontantDu();

}]);