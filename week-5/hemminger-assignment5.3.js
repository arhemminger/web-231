/*
============================================
; Title:  Object Collections
; Author: Professor Krasso
; Date:   13 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 5.3 Object Collections
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 5.3"));
console.log('\n');

//Start program

//declare variable using collection style array
var famousComposers = [
  {
    firstName: 'Ludwig van',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8,
  },
  {
    firstName: 'Wolfgang Anadeus',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 10,
  },
  {
    firstName: 'Johann Sebastian',
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9,
  },
  {
    firstName: 'Joseph',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6,
  },
  {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5,
  },
];

console.log("-- COMPOSERS --");

//Using built-in forEach function iterate through array and output to console log
famousComposers.forEach(function(composer) {
  console.log(
    "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
    )
  });

//End Program
