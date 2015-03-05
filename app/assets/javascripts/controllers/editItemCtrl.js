craigslistTracker.controller('editItemCtrl', ['$location', '$scope', 'itemData', '$routeParams', '$q', function($location, $scope, itemData, $routeParams, $q){
  console.log('Inside editItemCtrl');

  $scope.editItem = null;
  $scope.findItem = function(){
    console.log('findItem firing -' + $routeParams.id);
    $scope.editItem = itemData.findItem($routeParams.id);
    console.log('$scope.editItem:' + $scope.editItem);
  }

  $scope.findItem();
  this.deferred = $q.defer();
  this.deferred.promise.then($scope.findItem);
  itemData.loadItems(this.deferred);

  $scope.submitForm = function() {
    itemData.updateItem(
    {
      item: {
        id: $routeParams.id, name: $scope.editItem.name, description: $scope.editItem.description, expected_sales_price: $scope.editItem.expected_sales_price,  actual_sales_price: $scope.editItem.actual_sales_price, marketplace: $scope.editItem.marketplace
      }
    });
        $location.url('/');
  };

  $scope.rootPage = function(){
    $location.url('/');
  };

}]);