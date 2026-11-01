/*  Shallow copy - A shallow copy creates a new object, but copies only the first level of properties.
You can create a shallow copy using:
- Spread operator (...)
- Object.assign() */

let student1 = {
    name: "Arun",
    age: 25
};

let student2 = { ...student1 };

student2.name = "Rahul";

console.log(student1.name);
console.log(student2.name);

console.log ("-------------------------------");

/*Deep Copy: A deep copy creates a completely independent copy, including nested objects and arrays.
- Changes to the copied object will not affect the original object.
 - One modern way to create a deep copy is structuredClone().
*/

let stu1 = {
    name: "Arun",
    address: {
        city: "Bangalore"
    }
};

let stu2 = structuredClone(stu1);

stu2.address.city = "Chennai";

console.log(stu1.address.city);
console.log(stu2.address.city);

console.log ("--------------------------------");

// Quick example to remember:
let original = {
    name: "Arun",
    skills: ["JavaScript", "Playwright"]
};

// Reference copy
let refCopy = original;

// Shallow copy
let shallowCopy = { ...original };

// Deep copy
let deepCopy = structuredClone(original);

//refCopy: Same object.
//shallowCopy: New outer object, shared nested array.
//deepCopy: New outer object and new nested array.