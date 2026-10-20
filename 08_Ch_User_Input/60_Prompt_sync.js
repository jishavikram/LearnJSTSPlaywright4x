/*  This JavaScript code takes a number from the user, 
    converts the input into a number, and prints it to the console.

*/


const prompt = require("prompt-sync")();  
// This above line prepares JavaScript to accept user input directly in the terminal.

let num = Number(prompt("Enter a number"));
console.log(num);