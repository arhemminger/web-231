// Header
/*
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "discussion 5.1"));
console.log('\n');

/*
============================================
; Title:  townsend-discussion-5.1.js
; Author: Professor Krasso
; Date:   09 January 2019
; Modified By: Ethan Townsend
; Description:  Advanced Arrays
;===========================================
*/

//my variables
var sandwich = new Set();  //changed from newMap to declare set with new Set();
sandwich.set(['peanut butter', 'jelly']);   //replaced comma with period between sandwich.set
sandwich.add(['bacon lettuce', 'tomato']);  //added comma between lettuce and tomato (spellchecked tomato)
sandwich.add(['ham', 'cheese']);    //switched .set to .add on lines 19-21 in order to correctly build set. Added open and close square brackets to sets in order to properly set multiple items in the array.

console.log('----My Favorite Sandwiches----');  //Spellchecked sandwiches

//output
for(var [key, value] of sandwich) {
    console.log('I like ' + key + ' and ' + value + ' sandwiches.');
} //removed extra closing parentheses.
