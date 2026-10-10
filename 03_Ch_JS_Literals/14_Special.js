/*-------------------------------------------------------
        SPECIAL NUMERIC VALUES
--------------------------------------------------------
In JavaScript, there are some special numeric values that behave 
differently from ordinary numbers. 
The most important ones are:
i) Infinity
ii) -Infinity
iii) NaN
iv) -0 (negative zero)

*/

//Infinity represents a value greater than any finite JavaScript Number.
console.log("Infinity:", Infinity);           // Infinity
console.log("1 / 0:", 1 / 0);                 // Infinity
console.log("-1 / 0:", -1 / 0);               // -Infinity
console.log("typeof Infinity:", typeof Infinity); // "number"

let a = 10 / 0;
console.log(a);        // Infinity
console.log(typeof a); // "number"


// -Infinity (Negative Infinity)
console.log("-Infinity:", -Infinity);

let b = -10 / 0;
console.log(b); // -Infinity


// NaN (Not a Number) - It indicates that a numeric operation could not produce a valid numeric result.
console.log("NaN:", NaN);                     // NaN
console.log("0 / 0:", 0 / 0);                 // NaN
console.log("'hello' * 2:", "hello" * 2);     // NaN
console.log("typeof NaN:", typeof NaN);       // "number" (quirky!)

let result = "hello" * 5;
console.log(result); // NaN
console.log(typeof result); // "number"

//Negative (-0)
//JavaScript supports both positive zero (0) and negative zero (-0).

let a = 0;
let b = -0;

console.log(a); // 0
console.log(b); // -0

console.log(a === b); //    true
console.log(Object.is(a, b)); // false

//Although 0 === -0 is true, JavaScript can distinguish them using Object.is()

/* Quick identification cheat sheet
===================================
Infinity: 
Positive infinity - Example: 10 / 0

-Infinity:
Negative infinity - Example: -10 / 0

NaN
Invalid numeric result - Example: "abc" * 2

-0
Negative zeroExample: -1 / Infinity

*/