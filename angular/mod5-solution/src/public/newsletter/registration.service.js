(function () {
"use strict";

angular.module('public')
.service('RegistrationService', RegistrationService);

RegistrationService.$inject = [ 'MenuService' ]; 
function RegistrationService(MenuService) {
  var regService = this;

  regService.registered = false; 

  regService.registerUser = function(firstName,lastName,email,phone,dish) {
    return MenuService.getMenuItem(dish).then( function (item) {
      regService.user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        dish: item 
      };
      regService.registered = true; 
      return item; 
    });
  }

  regService.isRegistered = function () { 
    return regService.registered; 
  }

  regService.getUser = function () { 
    return regService.user;
  }
}

})();
