/* ---- Template Literal ------
A template literal is a way to write strings using backticks (`) instead of quotes. 
It lets you put variables and expressions directly inside the string, and write strings 
over multiple lines.

  Syntax: `text ${expression} more text`  */

// Ex: from class  
function greet(name){
    return `Hello, ${name}`;
}

let op = greet('Alice');
console.log(op);     // Hello, Alice

// Ex2:
let userName = "Jess";
let age = 28;

console.log("My name is " + userName + " and I am " + age + " years old.");

