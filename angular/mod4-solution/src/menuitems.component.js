(function () {
  'use strict'; 

  angular.module('MenuApp')
    .component('menuItems', {
      templateUrl: 'src/templates/menu-items-component.template.html',
      bindings: {
        list: '<',
        category: '<'
      }
    });

})(); 
