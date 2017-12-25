(function () {
"use strict";

angular.module('public')
.controller('NewsletterInfoController', NewsletterInfoController);

function NewsletterInfoController() {
  var infoCtrl = this;


  infoCtrl.registered = function () { 
    return false;
  }
}


})();
