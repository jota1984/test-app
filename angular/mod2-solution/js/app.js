(function () { 
  'use strict';

  angular.module("ShoppingListCheckoff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckoffService", ShoppingListCheckoffService);

  
  ToBuyController.$inject = [ "ShoppingListCheckoffService"];
  function ToBuyController(ShoppingListCheckoffService) {
    this.items = ShoppingListCheckoffService.getToBuyItems();

    this.markBoughtItem = function(index) {
      ShoppingListCheckoffService.markBoughtItem(index);
    };

    this.isEmpty = function () { 
      return this.items.length == 0;
    }
  }

  AlreadyBoughtController.$inject = [ "ShoppingListCheckoffService" ]; 
  function AlreadyBoughtController(ShoppingListCheckoffService) {
    this.items = ShoppingListCheckoffService.getBoughtItems();

    this.isEmpty = function () { 
      return this.items.length == 0;
    }
  }

  function ShoppingListCheckoffService() { 
    var tobuy_items = [
      { name: "cookies", quantity: 5 },
      { name: "chips", quantity: 2},
      { name: "apples", quantity: 2},
      { name: "oranges", quantity: 3},
      { name: "carrots", quantity: 5},
    ];

    var bought_items = [];

    this.markBoughtItem = function (index) {
      bought_items.push(tobuy_items.splice(index,1)[0]);
      console.log( tobuy_items); 
      console.log( bought_items); 
    };

    this.getBoughtItems = function () { 
      return bought_items;
    };

    this.getToBuyItems = function () {
      return tobuy_items;
    };

  }
})();
