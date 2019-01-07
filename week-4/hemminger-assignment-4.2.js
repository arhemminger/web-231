/*
============================================
; Title:  Arrays
; Author: Professor Krasso
; Date:   6 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 4.2 arrays
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 4.2"));
console.log('\n');

// Start program

var a = ["Apple", "Kiwi", "Banana", "Orange", "Peach"];

//function
function getFruit(arr) {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
}

//Output of getFruit() function
getFruit(a);

//End program
