(function () { 
  'use strict'; 

  angular.module('data').service('MenuDataService', MenuDataService);  

  MenuDataService.$inject = [ '$http' ]; 
  function MenuDataService($http) { 

    var menuDataService = this;
    menuDataService.getAllCategories = function () { 
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      })
    };

    menuDataService.getItemsForCategory = function (catShortName) { 
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + catShortName
      })
    };
  }

})(); 
