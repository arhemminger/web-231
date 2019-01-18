/*
=====================================
Title: Discussion 6.1 - -Object Properties
Author: Alan Edwards
Date: 17 January 2019
Modified by: N/A
Description: Showcases object properties
*/

//const header = require('./edwards-header');
/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns a well-formatted header
 */

 //console.log(header.display('Alan', 'Edwards', 'Discussion 6.1') +"\n");


var wife = {
   mood:"Happy",
   who:"wife"
};
console.log (wife.mood  + ' ' + wife.who + ". " + wife.mood + " life.");  //extra + operator returning NaN, missing some spacing to match expected output.

/* expected output

Happy wife. Happy life.

*/
