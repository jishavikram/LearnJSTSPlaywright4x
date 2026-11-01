// Write a javascript program to reverse a given string.

const data = "Java";
const str = data.trim();

let reverse = "";

for (let i = str.length-1; i>=0; i--) {
 reverse += str[i];
}

console.log(reverse);