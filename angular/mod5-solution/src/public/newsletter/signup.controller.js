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
        signupCtrl.dish).then(function (item){
          signupCtrl.status = "Your Information has been saved"; 
        }).catch( function () { 
          signupCtrl.status = "No such menu number exists"; 
        });
  }
}


})();
