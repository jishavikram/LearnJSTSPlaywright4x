//Note:  In JavaScript, the + operator behaves differently depending on the data types..
// When one operand is a string, JavaScript generally converts the 
// other operand into a string and performs concatenation.

console.log(10 + 20);        // 30
console.log("10" + 20);      // 1020
console.log(10 + "20");      // 1020
console.log("Hello" + 10);   // Hello10
console.log(10 + 20 + "30"); // 3030
console.log("10" + 20 + 30); // 102030

// String Comparison Operators --> JavaScript also supports comparing strings 
// using comparison operators.

// Ex 1: 
let str1 = "Apple";
let str2 = "Banana";

console.log(str1 == str2);  // false
console.log(str1 < str2);   // true
console.log(str1 != str2);  // true
