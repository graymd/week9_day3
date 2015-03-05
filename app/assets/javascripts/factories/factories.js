craigslistTracker.factory('itemData', function($http){
  itemData = {
    data: {
      items: [
      ]
    },
    isLoaded: false
  }

  itemData.loadItems = function(){
    if(itemData.isLoaded == false){
      $http.get("/items.json").success(function(
        itemsFromServer) {
        console.log(itemsFromServer);
        itemData.isLoaded = true;
        _.each(itemsFromServer, function(item){
          itemData.pushItem(item)
        })
      });
    }
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
    return _.findWhere( itemData.data.items, {
      id: parseInt(itemId)
    });
  }


return itemData;
});

