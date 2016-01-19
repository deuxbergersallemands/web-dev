myApp.controller('AjouterGroupesControleur', ['$scope', '$route', '$routeParams', '$location', '$cookies', 'Groupes', function($scope, $route, $routeParams, $location, $cookies, Groupes) {


  $scope.noms;

  $scope.recupererGroupes = function() {
  	console.log('$scope.recupererGroupes = function() --- appelée !');
    $scope.groupes = [];
    $scope.groupes = new Groupes().$query(function (transaction, headers) {
                   console.log(transaction);
                        // succès
                }, function (error) {
                	console.log("erreur");
                    // échec
                });
  }
 
  $scope.recupererGroupes();

    $scope.noms = $scope.recupererGroupes();

 
  $scope.nomGroupe = "";
  $scope.ajouterGroupe = function() {

    $scope.tousMembres = $scope.noms;
    $scope.tousMembres.push($cookies.get('utilisateur'));
    $scope.transaction = new TransactionNouvelle();
    $scope.transaction.createur = $cookies.get('utilisateur');
    $scope.transaction.membres = $scope.tousMembres;
    $scope.transaction.description = $scope.description;
    $scope.transaction.montant = $scope.montant;
    $scope.transaction.type = $scope.typeTransaction;
    $scope.transaction.membreRembourse = $scope.membreRembourse;
    
    $scope.transaction.$save(function (transaction, headers) {
                    // succès

                }, function (error) {
                    // échec
                });
  //	$scope.noms.push($scope.nomGroupe);
  //	$scope.nomGroupe = "";
  }
}]);