var indexCtrl = craigslistTracker.controller('indexCtrl', function($scope, itemData, $location){
  console.log('inside indexCtrl');
  $scope.items = itemData.data;
  console.log($scope.items);
  itemData.loadItems();

  $scope.deleteItem = function(itemId) {
    itemData.deleteItem(itemId);
  }

  $scope.newItem = function() {
    console.log('newItem firing')
    $location.url('/items/new')
  }

  $scope.editItem = function(itemId){
    console.log('editItem firing');
    $location.url('/items/' + itemId + '/edit')
  }

});