/*
============================================
; Title:  hemminger-header-test.js
; Author: Professor Krasso 
; Date:   9 December 2018
; Modified By: Andrew Hemminger
; Description: Tests the display of a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
var header = require('./hemminger-header.js');

console.log(header.display("Andrew", "Hemminger", "Assignment 2.2 - Header")); 