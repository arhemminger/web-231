/*
============================================
; Title:  ES5 Built-In Functions
; Author: Professor Krasso
; Date:   13 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 5.2 ES5 Built-In Functions
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 5.2"));
console.log('\n');

// Start program

//declaring variable with array values
var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

//outputting variable values using built-in forEach function
foods.forEach(function(food) {
  console.log(food);
});

//End Program
