var indexCtrl = craigslistTracker.controller('indexCtrl', function($scope, $location){
  console.log('inside indexCtrl');
  $scope.item = {name: 'tv', description: 'big tv', expected_sales_price: '$100', actual_sales_price: '$75' }

})