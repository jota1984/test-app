(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // // *** Set up UI states ***
  $stateProvider

  // // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller:['$scope','categories', function ($scope, categories) { 
      $scope.categories = categories; 
    }],
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

  // Item detail
  .state('categories.menuItems', {
    url: '/{catId}',
    templateUrl: 'src/templates/menu-items.template.html',
    //controller: 'ItemDetailController as itemDetail',
    params: {
      catId: null
    }
  });

}

})();
