craigslistTracker.controller('newItemCtrl', ['$location', '$scope', 'itemData', function($location, $scope, itemData){
  console.log('Inside newItemCtrl');

  $scope.rootPage = function(){
    $location.url('/');
  }

  $scope.submitForm = function() {
    itemData.addItem(
    {
      item: {
        name: $scope.formName, description: $scope.formDescription, expected_sales_price: $scope.formExpecPrice,  actual_sales_price: $scope.formActPrice, marketplace: $scope.formMarketplace
      }
    });
    $location.url('/');
  };
}]);