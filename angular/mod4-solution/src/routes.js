(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider, $rootScope) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // // *** Set up UI states ***
    $stateProvider

      // // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html',
      })

    // Category list
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'CategoriesController as catCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories()
            .then( function (response) { 
              console.log(response); 
              return response.data;
            });
        }],
      }
    })

    // Menu items list 
    .state('menuItems', {
      url: '/categories/{catId}',
      templateUrl: 'src/templates/menu-items.template.html',
      controller: ['$scope','menu_data', function ($scope,menu_data){ 
        $scope.items = menu_data.menu_items;
        $scope.category_name = menu_data.category.name;
      }] ,
      params: {
        catId: null
      },
      resolve: { 
        menu_data: ['MenuDataService', '$stateParams', function(MenuDataService,$stateParams) { 
          console.log($stateParams.catId);
          return MenuDataService.getItemsForCategory($stateParams.catId)
            .then( function (response) {
              console.log(response.data);
              return response.data;
            });
        }],
      }
    });
  }

})();
