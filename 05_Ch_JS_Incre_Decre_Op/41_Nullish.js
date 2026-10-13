/*  ------------------ Nullish Coalescing Operator (??) ---------------

    The nullish coalescing operator (??) returns a default value
    when the left-hand value is either null or undefined

    Syntax: value ?? defaultValue
    - If value is null or undefined, it returns defaultValue.
    - Otherwise, it returns value.

*/

//Ex1:

let usrname = null;

let result = usrname ?? "Guest";

console.log(result);      // OP: Guest

// let amul = null;
// let val = amul ?? "NANDANI Milk";
// console.log(val);


// let api_response = null;
// let responsedata = api_response ?? "{}";
// console.log(responsedata);

let api_response1 = "Jess";
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);