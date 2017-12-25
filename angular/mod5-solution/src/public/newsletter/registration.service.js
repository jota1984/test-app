(function () {
"use strict";

angular.module('public')
.service('RegistrationService', RegistrationService);

function RegistrationService() {
  var regService = this;

  regService.registered = false; 

  regService.registerUser = function(firstName,lastName,email,phone,dish) {
    regService.user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      dish: dish
    };
    regService.registered = true; 
  }

  regService.isRegistered = function () { 
    return regService.registered; 
  }

  regService.getUser = function () { 
    return regService.user;
  }
}

})();
