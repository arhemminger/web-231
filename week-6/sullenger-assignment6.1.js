/*
============================================
; Title:  sullenger-discussion-board-6.1.js
; Author: Jason Sullenger
; Date:   16 January 2019
; Description: Console logs the details of the genericPerson object.
;===========================================
*/

/*
Expected output:

James is 34 years old and is married to Wanda. They have two children together named Gerald and Quinton.
*/

// genericPerson object defined
var genericPerson = {
  name: "James", //replaced semi-colon with colon
  age: 34,
  children: {  //replaced square bracket with curly bracket to properly declare nested object properties
    firstChild: "Gerald",
    secondChild: "Quinton"  //removed extra comma
  },
  spouse: "Wanda"  //removed extra comma
  };

// Console logs the header created in previous weeks
//const header = require('../week -2/sullenger-header.js');
//console.log(header.display("Jason" , "Sullenger" , "Assignment 6.4"));

console.log("\n" + genericPerson.name + " is " + genericPerson.age +" years old and is married to " + genericPerson.spouse + ". They have two children together named " + genericPerson.children.firstChild + " and " + genericPerson.children.secondChild + ".");
//was expecting spouse and had a capitol s on secondChild at the end of string corrected to lowercase.
