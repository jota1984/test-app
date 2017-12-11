(function () { 
  'use strict';

  angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems',FoundItems);


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {

    var narrowCtrl = this;

    narrowCtrl.empty = false; 

    narrowCtrl.removeItem = function(index){
      narrowCtrl.found.splice(index,1);
    }

    narrowCtrl.getItems = function () {
      narrowCtrl.found = [];
      if (this.searchTerm == undefined || this.searchTerm.length == 0){
        narrowCtrl.empty = true; 
      } else {
        MenuSearchService.getMatchedMenuitems(this.searchTerm)
          .then( function(result) {
            if( result.length > 0 ) {
              narrowCtrl.found = result;
              narrowCtrl.empty = false;
            } else {
              narrowCtrl.empty = true;
            }
          });
      }
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {

    this.getMatchedMenuitems = function (searchTerm) { 
      return $http({url:'https://davids-restaurant.herokuapp.com/menu_items.json'})
        .then( function (result) {
          var items = result.data.menu_items;
          var narrowedItems = [];
          for( var i = 0; i < items.length; i++) { 
            if( items[i].description.match(searchTerm) ) {
              narrowedItems.push(items[i]); 
            }
          }
          return narrowedItems;
        });
    };

  }

  function FoundItems() { 
    var ddo = {
      scope: {
        items: '<',
        onRemove: '&' 
      },
      templateUrl: 'found-item.html',
      retrict: 'E'
    }
    return ddo;
  }


})(); 
