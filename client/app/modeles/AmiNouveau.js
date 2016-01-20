myApp.factory('AmiNouveau', function($resource) {
  return $resource('/amis/:id');
});