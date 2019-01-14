/*
============================================
; Title:  Filtering/Reducing Complex Data Structures
; Author: Professor Krasso
; Date:   13 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 5.4 Filtering/Reducing Complex Data Structures
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 5.4'));
console.log('\n');

//Start program

//declare variable using collection style array
const famousComposers = [
  {
    firstName: 'Ludwig van',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8
  },
  {
    firstName: 'Wolfgang Anadeus',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 10
  },
  {
    firstName: 'Johann Sebastian',
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9
  },
  {
    firstName: 'Joseph',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6
  },
  {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5
  },
];

console.log('--COMPOSER BY RATING --');

// return a new list of objects with only the rating and lastName field
let ratings = famousComposers.map((composerRating) => {
  return console.log(
    'Rating: ' + composerRating.rating  + '\nComposer: ' + composerRating.lastName + '\n'
    )
});

ratings.forEach((rating) => {});

console.log('--COMPOSER BY GENRE --');

// return a new list of objects with only the genre and lastName field
let genres = famousComposers.map((composerGenre) => {
  return console.log(
    'Genre: ' + composerGenre.genre  + '\nComposer: ' + composerGenre.lastName + '\n'
    )
});

genres.forEach((genre) => {});

//End program
