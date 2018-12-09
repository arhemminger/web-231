/*
============================================
; Title:  functions.js
; Author: Professor Krasso
; Date:   9 December 2018
; Modified by: Andrew Hemminger
; Description: Demonstrates how to create and invoke functions
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 2.4"));

// Start program

// Functions
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function dateWriter(year, month, day) {
  return year + "/" + month + "/" + day;
}

function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

function convertToInt(x) {
  return parseInt(x);
}

function convertToFloat(y) {
  return parseFloat(y);
}

// output
console.log('\n');

console.log("Hello my name is " + fullName("Andrew", "Hemminger") + "!" + '\n');

console.log("Today's date is " + dateWriter(2018, 12, 9) + " and the current temperature is " + formatNumber(33.6, 1) + " degrees." + '\n');

console.log("I am " + convertToInt(31) + " years old and my savings account goal is " + convertToFloat("10000") +  " dollars.");

// End program
