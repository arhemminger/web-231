/*
============================================
; Title:  Filtering
; Author: Professor Krasso
; Date:   6 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 4.3 filtering
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 4.3"));
console.log('\n');

// Start program

var v = ["Dune Buggy", "Dirt Bike", "Motorcycle", "Car", "Truck"]

//function
function getValue(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === str)
            console.log(arr[i]);
    }
}

//Output
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var x = 0; x < v.length; x++) {
    console.log(v[x]);
}

//Selection 1 on new line
console.log('\n' + "-- SELECTED VALUE --");
getValue(v, "Dirt Bike");

//Selection 2 on new line
console.log('\n' + "-- SELECTED VALUE --");
getValue(v, "Motorcycle");

//End program
