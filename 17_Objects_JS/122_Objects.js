// ---------- Objects in JS -----------------------

// An Object in JavaScript is a collection of related data stored as key-value pairs.
//While an array stores values using indexes, an object stores values 
// using named keys (also called properties).

let a1 = {
    name : "Jisha"
};


let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

// keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);

console.log("----------------------------------------");

//Ex2:

let student = {
    name: "Arun",
    age: 25,
    course: "JavaScript",
    passed: true
};

console.log(student);

/* Output:
{
  name: 'Arun',
  age: 25,
  course: 'JavaScript',
  passed: true
}
*/