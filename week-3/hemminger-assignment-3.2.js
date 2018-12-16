/*
============================================
; Title:  Pattern Matching Functions
; Author: Professor Krasso
; Date:   16 December 2018
; Modified by: Andrew Hemminger
; Description: Pattern matching functions, conditional statements.
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 3.2"));
console.log("\n");

// Start program

var lv1 = 1, lv2 = 2, lv3 = 3, lv4 = 3, lv5 = 4, lv6 = 5;

//Function with two parameter using equality operation
function match(x,y) {
  if (x === y)
      return true;
  else
      return false;
}

// output from the match() function
console.log(match(4,5));
console.log(match(5,5) + "\n");

//Function with two parameters returning a string message on mismatch

function logMismatch(a,b) {
  return a + " and " + b + " do not match!";
}

//Function with two parameters returning a string message on match

function logMatch(a,b) {
  return a + " and " + b + " match!";
}

// output from the if...else blocks
//lv1 and lv2 compare
  if (match(lv1,lv2)) {
    console.log(logMatch(lv1,lv2));
  } else {
    console.log(logMismatch(lv1,lv2));
  }

//lv3 and lv4 compare
  if (match(lv3,lv4)) {
    console.log(logMatch(lv3,lv4));
  } else {
    console.log(logMismatch(lv3,lv4));
  }

  //lv5 and lv6 compare
  if (match(lv5,lv6)) {
    console.log(logMatch(lv5,lv6));
  } else {
    console.log(logMismatch(lv5,lv6));
  }

// End program
