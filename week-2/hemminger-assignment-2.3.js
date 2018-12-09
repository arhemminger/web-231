/*
============================================
; Title:  function-properties.js
; Author: Professor Krasso
; Date:   9 December 2018
; Modified by: Andrew Hemminger
; Description: Demonstrates how to define and call function properties
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 2.3")); 
/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

// start program

// function properties
myName.andrew = "Andrew";
myName.hemminger = "Hemminger";

 
// function
function myName() {
    return myName.andrew + " " + myName.hemminger;
    }

// output
console.log('\n');
console.log("Hello " + myName() + "!");


// end program