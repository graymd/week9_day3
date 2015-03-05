var craigslistTracker = angular.module('craigslistTracker', ['ngRoute']).config(['$httpProvider', function($httpProvider){
$httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/items/new', {
      templateUrl: 'assets/templates/newItem.html',
      controller: 'newItemCtrl'
    })
    .when('/items/:id/edit/',{
      templateUrl: 'assets/templates/editItem.html',
      controller: 'editItemCtrl'
    })
    .otherwise({
      templateUrl: 'assets/templates/index.html',
      controller: 'indexCtrl'
    })
}]);

