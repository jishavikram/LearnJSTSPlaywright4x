/*
In JavaScript, String Operators are used to join (concatenate) two or more strings together.
JavaScript mainly uses two operators for string concatenation:
   1. + — Concatenation Operator
   2. += — Concatenation Assignment Operator

*/

let s = "Hi, ";
console.log(typeof s);
s += "Dev";
console.log(s);

console.log("HELLO", "Jess");
console.log("Hello" + "World");

console.log(1, 2, 3, 4, "Hello", true);

// ************************************************
//Ex 1. Concatenation Operator (+) --> Joins two or more strings into a single string.
let firstName = "John";
let lastName = "Smith";

let fullName = firstName + lastName;
console.log(fullName);

//Example 2: Joining strings with a space

let fullName1 = firstName + " " + lastName;
console.log (fullName1);

//Ex 2. Concatenation Assignment Operator (+=) --> adds a new string to an existing string and 
// assigns the result back to the same variable.

let message = "Learn";

message += " Javascript";
console.log(message);

