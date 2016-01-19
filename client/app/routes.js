myApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	  .when('/', {
	  	templateUrl: 'app/composants/reception/reception.html',
	  })
	  .when('/inscription', {
		templateUrl: 'app/composants/inscription/inscription.html',
	  })
	  .when('/tableauDeBord', {
		templateUrl: 'app/composants/tableauDeBord/tableauDeBord.html',
	  })
	  .when('/historique', {
		templateUrl: 'app/composants/historique/historique.html',
	  })
	  .when('/transaction/nouvelle', {
		templateUrl: 'app/composants/transaction/nouvelle/transaction.html',
	  })
	  .when('/transaction/:id', {
		templateUrl: 'app/composants/transaction/id/transaction.html',
	  })
	  .when('/relations', {
		templateUrl: 'app/composants/relations/relations.html',
	  })
	  .when('/amis', {
		templateUrl: 'app/composants/amis/ajouterAmis.html',
	  })	  
	  .when('/groupes', {
		templateUrl: 'app/composants/groupes/ajouterGroupes.html',
	  })	  
	  .otherwise({ redirectTo: '/'});

	 $locationProvider.html5Mode(true);
});