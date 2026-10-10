/* ============================================================
       Topic: null vs undefined in JavaScript
 ============================================================

  undefined  ->  A variable exists, but it has not been assigned any value yet or is missing.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but explicitly specify that there is "no value" or "empty".
                 It is intentional absence of any value.
*/

//Eg:

let usrname;        // The variable name is declared, but no value is assigned to it.
let age = null;     // The variable age is explicitly assigned null.

console.log(usrname);  // undefined.  
console.log(age);      // null

console.log(typeof userName);

// More examples

// Example A: Variable declaration

let city;

console.log(city);       // undefined
console.log(typeof city);  // undefined

//Example B: Explicitly assigning null
let selectedUser = null;

console.log(selectedUser);     // null
console.log (typeof selectedUser); // object

// Note: typeof null returning "object" is a longstanding JavaScript quirk. null is not actually an object.

//Example C: Function without a return value

function greet() {
    console.log("Hello!");
}

let result = greet();

console.log(result); // undefined

// Example D: Missing object property

let qa = {
    name: "Jess"
};

console.log(qa.name);       // "Jess"
console.log(qa.experience);   // undefined

//The experience property does not exist, so reading it returns undefined.