/*
============================================
; Title:  Predicates
; Author: Professor Krasso
; Date:   6 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 4.4 predicates
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 4.4"));
console.log('\n');

// Start program

var states = ["Nebraska", "Iowa", "Utah", "Colorado", "Hawaii"];

//function
function getState(str1, str2) {
    if (str1 === str2)
        return str2;
}

//Output for starting array
console.log("-- ORIGINAL ARRAY --");
for (i = 0; i < states.length; i++) {
    console.log(states[i]);
}

//Output for alphabetized array
console.log('\n' + "-- SORTED ARRAY --");
states.sort();
var x = states.join(", ");
for (i = 0; i < states.length; i++) {
  console.log(states[i]);
}

//Output for selected value in array
console.log('\n' + "-- SELECTED VALUE --");
console.log(
  states.filter
  (
    function (str1) {
      return getState(str1, "Utah")
    }
  )[0]
);

//End program
