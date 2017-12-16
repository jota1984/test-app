(function () {
  'use strict'; 

  //function CategoryListController() { 
  //  var ctrl = this; 

  //  ctrl.categories = function () {
  //    return ctrl.list;
  //  }

  //}

  angular.module('MenuApp')
    .component('categoryList', {
      templateUrl: 'src/templates/category-list.template.html',
      //controller: CategoryListController,
      bindings: {
        list: '<'
      }
    });

})(); 
