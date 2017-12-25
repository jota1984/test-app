(function () {
"use strict";

angular.module('public')
.controller('NewsletterInfoController', NewsletterInfoController);

NewsletterInfoController.$inject = [ 'RegistrationService', 'ApiPath' ]; 
function NewsletterInfoController(RegistrationService, ApiPath) {
  var infoCtrl = this;

  infoCtrl.user = RegistrationService.getUser();
  infoCtrl.basePath = ApiPath;


  infoCtrl.registered = function () { 
    return RegistrationService.isRegistered(); 
  }
}


})();
