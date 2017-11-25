(function () { 
  'use strict'; 
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'] 
  function LunchCheckController ($scope) { 

    $scope.checkMenu = function () {
      if(!$scope.lunch_menu) {
        $scope.menu_message = "Please enter data first";
        return;
      }
      var items = $scope.lunch_menu.split(",").
        filter(item => item.trim().length > 0);
      if(items.length <= 3) {
        $scope.menu_message = "Enjoy!"; 

      } else {
        $scope.menu_message = "Too much!"; 
      }
    };
  };
})();
