(function () { 
  'use strict';

  angular.module('MenuApp')
    .controller('MenuItemsController', MenuItemsController); 

  MenuItemsController.$inject = [ 'menu_data' ]; 
  function MenuItemsController(menu_data) { 
    var menuItemsCtrl = this; 
    menuItemsCtrl.items = menu_data.menu_items; 
    menuItemsCtrl.category_name = menu_data.category.name;
  }

})();
