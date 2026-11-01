// How to access object properties

// Method 1: Dot notation

let student = {
    name: "Arun",
    age: 25,
    course: "JavaScript"
};

console.log(student.name);
console.log(student.age);

console.log("------Method2..............");

//Method2: Bracket notation

let student1 = {
    name: "Arun",
    age: 25,
    course: "JavaScript"
};

console.log(student1["name"]);
console.log(student1["course"]);

//Both methods work.One important difference: bracket notation allows you to use a variable 
// as the property name.