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
   TransactionId.get({id:$scope.tid},function (transaction, headers) {

      $scope.montantDu = transaction.participants[0].montantDu
      $scope.montantPaye = $scope.montantDu;
      $scope.montantDu = 0
      transaction.participants[0].solde = $scope.transaction.montantPaye;
    
  }

  $scope.recuperMontantDu();

}]);