// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
(function () { 
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].toLowerCase().charAt(0);

    if ( firstLetter == "j" ) {
      byeSpeaker.speak(names[i])
    } else {
      helloSpeaker.speak(names[i])
    }
  }
})();
