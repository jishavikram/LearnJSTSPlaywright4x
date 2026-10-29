/* Template literal vs normal string
	
                    Normal string ("..." or '...')	     Template literal (`...`)
Quotes used	           " " or ' '	                         Backticks ` `
Insert variables	     Needs +	                         ${variable}
Multi-line	            Needs \n	                        Just press Enter
Expressions inside	      No	                            Yes, inside ${ }

*/

// 1: Inserting variables

let userName = "Jess";
let age = 28;

// Normal string (concatenation with +)
console.log("My name is " + userName + " and I am " + age + " years old.");

// Template literal (backticks and ${ })
console.log(`My name is ${userName} and I am ${age} years old.`);

// Output(both lines): My name is Jess and I am 28 years old.
console.log ("-----------------------------------"); 

// 2: Expressions inside the string

let price = 500;
let qty = 3;

// Normal string
console.log("Total: " + (price * qty));

// Template literal
console.log(`Total: ${price * qty}`);

// Output(both lines): 1500
console.log ("-----------------------------------");

//3:  Multi-line strings

// Normal string: needs \n for each new line
let msg1 = "Test: Login\nStatus: PASS\nTime: 2s";

// Template literal: just press Enter
let msg2 = `Test: Login
Status: PASS
Time: 2s`;

console.log(msg1);
console.log(msg2);

// Output(both lines): 
// Test: Login
// Status: PASS
// Time : 2s   
console.log ("-----------------------------------");

//4: Quotes inside the string

// Normal string: must escape the same quote type with \
console.log('It\'s a "great" day');

// Template literal: no escaping needed
console.log(`It's a "great" day`);

// Output(both lines): "It's a "great" day
console.log ("---------------------------------------");

// 5: Calling a function inside a string

function square(n) {
    return n * n;
}

// Normal string
console.log("Square of 5 is " + square(5));

// Template literal
console.log(`Square of 5 is ${square(5)}`);

// Output(both lines): Square of 5 is 25
console.log ("---------------------------------------");

// Ex 6: Real-time QA example: test log

let testName = "Checkout Test";
let testStatus = "FAIL";
let expected = 3;
let actual = 2;

// Normal string
console.log("[" + testStatus + "] " + testName + " - expected " + expected + " but got " + actual);

// Template literal
console.log(`[${testStatus}] ${testName} - expected ${expected} but got ${actual}`);

// Output(both lines): [FAIL] Checkout Test - expected 3 but got 2