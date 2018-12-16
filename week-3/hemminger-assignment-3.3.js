/*
============================================
; Title:  Control Statements
; Author: Professor Krasso
; Date:   16 December 2018
; Modified by: Andrew Hemminger
; Description: Control statements exercise.
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 3.3"));
console.log("\n");

// Start program

let eventKeyCode = 13

switch(eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.')
    break;
  case 16:
    console.log('The shift key was pressed.')
    break;
  case 32:
    console.log('The spacebar key was pressed.')
    break;
  case 8:
    console.log('The backspace / delete key was pressed.')
    break;
  default:
    console.log('Unrecognized key.')
    break;
}

// End program
