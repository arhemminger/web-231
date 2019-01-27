/*
============================================
; Title:  Constructor Functions
; Author: Professor Krasso
; Date:   27 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 7.2 Constructor Functions
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 7.2'));
console.log('\n');

// start program

/**
 * Params: id, firstName, lastName, title
 * Response: void
 * Description: sets the id, firstName, lastName and title of an object
 */
function Inventor(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// create 5 new objects
const Inventors = [
  new Inventor(1, 'Thomas', 'Edison', 'Software Engineer'),
  new Inventor(2, 'Benjamin', 'Franklin', 'Programmer'),
  new Inventor(3, 'Nikola', 'Tesla', 'Project Manager'),
  new Inventor(4, 'Charles', 'Babbage', 'Project Manager'),
  new Inventor(5, 'Alexander', 'Bell', 'Business Analyst')
];

// output
for (let x = 0; x < Inventors.length; x++) {
  console.log(Inventors[x].id + ' ' + Inventors[x].firstName + ' ' + Inventors[x].lastName + ' ' + Inventors[x].title)

}

// end program
