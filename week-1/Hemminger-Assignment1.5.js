/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   1 December 2018
; Modified By: Andrew Hemminger
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Albert";
var myLastName = "Einstein";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n");

// start of program - your code goes below this line

//Employee record 1

var empFirstName = "Bob";
var empLastName = "Smith";
var empAddress = "505 Main Street Omaha, NE";
var empPayRate = 10.5.toFixed(2);
var empHireDate = new Date("5/22/2016").toLocaleDateString('en-US');

var empSummary = "First Name: " + empFirstName + "\n"
    + "Last Name: " + empLastName + "\n"
    + "Address: " + empAddress + "\n"
    + "Pay Rate: $" + empPayRate + "\n"
    + "Hire Date: " + empHireDate + "\n";

console.log(empSummary);
 
//Employee record 2

var empFirstName = "Chad";
var empLastName = "Anderson";
var empAddress = "211 S. Grant Street Omaha, NE";
var empPayRate = 7.25.toFixed(2);
var empHireDate = new Date("2/2/2012").toLocaleDateString('en-US');

var empSummary = "First Name: " + empFirstName + "\n"
    + "Last Name: " + empLastName + "\n"
    + "Address: " + empAddress + "\n"
    + "Pay Rate: $" + empPayRate + "\n"
    + "Hire Date: " + empHireDate + "\n";

console.log(empSummary);

//Employee record 3

var empFirstName = "Steve";
var empLastName = "Valentine";
var empAddress = "1500 Peach Rd. Cresent, IA";
var empPayRate = 22.67.toFixed(2);
var empHireDate = new Date("3/3/2013").toLocaleDateString('en-US');

var empSummary = "First Name: " + empFirstName + "\n"
    + "Last Name: " + empLastName + "\n"
    + "Address: " + empAddress + "\n"
    + "Pay Rate: $" + empPayRate + "\n"
    + "Hire Date: " + empHireDate + "\n";

console.log(empSummary);
 
 //Employee record 4

var empFirstName = "Lisa";
var empLastName = "Lee";
var empAddress = "2118 N. Capitol apt.808 Omaha, NE";
var empPayRate = 110.76.toFixed(2);
var empHireDate = new Date("4/4/2014").toLocaleDateString('en-US');

var empSummary = "First Name: " + empFirstName + "\n"
    + "Last Name: " + empLastName + "\n"
    + "Address: " + empAddress + "\n"
    + "Pay Rate: $" + empPayRate + "\n"
    + "Hire Date: " + empHireDate + "\n";
    

console.log(empSummary);

//Employee record 5

var empFirstName = "Jessica";
var empLastName = "Fields";
var empAddress = "12 Lake Ave. St. Louis, MO";
var empPayRate = 17.1.toFixed(2);
var empHireDate = new Date("5/5/2015").toLocaleDateString('en-US');

var empSummary = "First Name: " + empFirstName + "\n"
    + "Last Name: " + empLastName + "\n"
    + "Address: " + empAddress + "\n"
    + "Pay Rate: $" + empPayRate + "\n"
    + "Hire Date: " + empHireDate + "\n";

console.log(empSummary);
 
// end of program 