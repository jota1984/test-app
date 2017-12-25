(function () {
"use strict";

angular.module('public')
.controller('NewsletterSignupController', NewsletterSignupController);

NewsletterSignupController.$inject = [ 'RegistrationService'];
function NewsletterSignupController(RegistrationService) {
  var signupCtrl = this;

  signupCtrl.signup = function () {
    RegistrationService.registerUser( signupCtrl.firstName,
        signupCtrl.lastName,
        signupCtrl.email,
        signupCtrl.phone,
        signupCtrl.dish);
  }
}


})();
