myApp.factory('TransactionsParticipant', function($resource) {
  return $resource('/tableauDeBord/Transactions/Participant'); 
});