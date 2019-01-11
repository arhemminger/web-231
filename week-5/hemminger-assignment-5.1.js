/*
============================================
; Title:  Advanced Arrays
; Author: Professor Krasso
; Date:   10 January 2019
; Modified by: Andrew Hemminger
; Description: Exercise 5.1 Advanced Arrays
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 5.1"));
console.log('\n');

// Start program

console.log("Summer 2019 Bellevue race events:");

var trackRace = {dist1: '100m', dist2: '200m', dist3: '400m',};
trackRace.dist6 = '1600m';
trackRace.dist7 = '3200m';
trackRace.dist8 = '400m Hurdles';
trackRace.dist3 = '400m Relay';
trackRace.dist4 = '1600m Relay';

for (var id in trackRace) {
  console.log(id + " " + trackRace[key]);
}

//End program

/*
Expected Output:

Summer 2019 Bellevue race events:
dist1 100M
dist2 200M
dist3 400M
dist6 1600M
dist7 3200M
dist8 400M Hurdles
dist4 1600m Relay

*/
