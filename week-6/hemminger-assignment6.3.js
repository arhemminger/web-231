/*
============================================
; Title:  Object Literals
; Author: Professor Krasso
; Date:   18 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 6.3 Object Literals
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 6.3'));
console.log('\n');

//Start program

//Setting object literal with 3 properties
const ticketSys = {
  id: 6,
  name: 'Tech Support',
  requestor: 'David Flanagan'
}

//output
console.log(
  '{id: ' + ticketSys.id + ', name: ' + ticketSys.name + ', requestor: ' + ticketSys.requestor + '}'
  );

//End program
