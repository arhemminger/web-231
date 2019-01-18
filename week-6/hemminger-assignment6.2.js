/*
============================================
; Title:  Exception Handling
; Author: Professor Krasso
; Date:   17 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 6.2 Exception Handling
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 6.2'));
console.log('\n');

//Start program

try {
  // variables
  let day = 1547791510662
  //get todays date using built-in method
  const today = Date.now()

  // if statement
  if (day != today) throw 'WrongDate'

  // output
  console.log(sum)
} catch (err) {
  console.log('Catch clause: ' + err)
} finally {
  console.log('Finally clause reached...');
}

//End program
