/*
============================================
; Title:  Loops
; Author: Professor Krasso
; Date:   16 December 2018
; Modified by: Andrew Hemminger
; Description: Using loops exercise.
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 3.4"));
console.log("\n");

// Start program

var count = 0, a = 3

console.log("-- DO THE NUMBERS MATCH GAME --");

//Function with two parameter using equality operation
function match(x,y) {
  if (x === y)
      return true;
  else
      return false;
}

function logMismatch(x,y) {
  return x + " does not match " + y + "!";
}

function logMatch(x,y) {
  return x + " does match " + y + "!";
}

//Matching game loop
while(count < 10){

  var b = randomNumber()

  if (match(a,b)) {
    console.log(logMatch(a,b));
  } else {
    console.log(logMismatch(a,b));
  }
  count++;
}

function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// End program
