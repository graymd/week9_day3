craigslistTracker.factory('itemData', ['$http', function($http){
  itemData = {
    data: {
      items: [
      ]
    },
    isLoaded: false
  }

  itemData.loadItems = function(deferred){
    if(itemData.isLoaded == false){
      $http.get("/items.json").success(function(
        itemsFromServer) {
        console.log(itemsFromServer);
        itemData.isLoaded = true;
        _.each(itemsFromServer, function(item){
          itemData.pushItem(item)
        })
        if(deferred) {
          deferred.resolve()
        }
      });
    }
  }

    itemData.addItem = function(item) {
    console.log('addItem running')
    $http.post('/items.json', item).success(function(itemFromServer){
      itemData.pushItem(itemFromServer);
    })
  }

  itemData.pushItem = function(item){
    itemData.data.items.push(item);
  }

  itemData.deleteItem = function(itemId) {
    $http.delete('/items/' + itemId + '.json').success(function(data){
      console.log('Delete Success')
      var deletedItem = itemData.findItem(itemId);
      itemData.data.items = _.without(itemData.data.items, deletedItem)
    })
  }

  itemData.findItem = function(itemId) {
    return _.findWhere( itemData.data.items, {id: parseInt(itemId)});
  }


  itemData.updateItem = function(item) {
    $http.patch('items/' + item.item.id + '.json', item).success(function(data){
    })
  }


return itemData;
}]);


