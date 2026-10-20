/* This code reads user input from standard input (stdin) and 
   prints it in terminal */

console.log("Enter the number!");

const data = require('fs').readFileSync(0, 'utf8');
console.log("Hi", data);


// In the terminal:
// Type 15
// Press Enter
// Press Ctrl+D

/*

Code	                  Meaning
 require('fs')	           Loads Node.js's built-in File System module.
 .readFileSync()	        Reads input synchronously, meaning the program waits until the input is available or the input stream ends.
  0	                       Refers to standard input (stdin), where input comes from.
 'utf8'	                   Reads the input as text.
const data =	          Stores the input in a variable called data.

*/