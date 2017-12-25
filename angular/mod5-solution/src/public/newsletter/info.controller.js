(function () {
"use strict";

angular.module('public')
.controller('NewsletterInfoController', NewsletterInfoController);

NewsletterInfoController.$inject = [ 'RegistrationService' ]; 
function NewsletterInfoController(RegistrationService) {
  var infoCtrl = this;


  infoCtrl.registered = function () { 
    return RegistrationService.isRegistered(); 
  }
}


})();
