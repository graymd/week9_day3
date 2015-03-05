craigslistTracker.controller('editItemCtrl', function($location, $scope, itemData, $routeParams, $q){
  console.log('Inside editItemCtrl');

  $scope.editItem = null;
  $scope.findItem = function(){
    console.log('findItem firign')
    $scope.editItem = itemData.findItem($routeParams.id)
  }

  $scope.findItem();
  this.deferred = $q.defer();
  this.deferred.promise.then($scope.findItem);
  itemData.loadItems(this.deferred);

  $scope.submitForm = function() {
    itemData.updateItem(
    {
      item: {
        id: $routeParams.id, name: $scope.formName, description: $scope.formDescription, expected_sales_price: $scope.formExpecPrice,  actual_sales_price: $scope.formActPrice, marketplace: $scope.formMarketplace
      }
    });
        $location.url('/');
  };

  $scope.rootPage = function(){
    $location.url('/');
  };

});