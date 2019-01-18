/*
============================================
; Title:  Nested Object Literals
; Author: Professor Krasso
; Date:   18 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 6.4 Nested Object Literals
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 6.4'));
console.log('\n');

//Start program

// object with nested object
const ticket = {
  id: 105,
  name: "John Doe",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: 1,

  // nested object
  person: {
    id: 100,
    firstName: 'Bob',
    lastName: 'Jones',
    jobTitle: 'Programmer I'
  }
}

//output
console.log(
  'Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated + ' and assigned to employee ' + ticket.person.firstName + ' ' + ticket.person.lastName + ' (' + ticket.person.jobTitle + ').'
  );

//End program
