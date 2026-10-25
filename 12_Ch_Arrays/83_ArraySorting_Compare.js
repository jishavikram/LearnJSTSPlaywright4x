
// Using compare function
let fruits = ['apple','banana',"cherry"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);                       // [ 'apple', 'banana', 'cherry' ]

console.log(".............................");

// Sorting numbers: use a compare function

const nums = [10, 9, 1, 100];

nums.sort((a, b) => a - b);
console.log(nums);  // [1, 9, 10, 100]  (ascending)

nums.sort((a, b) => b - a);
console.log(nums);  // [100, 10, 9, 1]  (descending)

/*  Plain sort() puts uppercase letters before lowercase ones:
 localeCompare() sorts the way people expect, ignoring the uppercase and lowercase split.

*/

let names = ['banana', 'Apple', 'cherry'];

names.sort();
console.log(names);  // ["Apple", "banana", "cherry"]  (works here)

let mixed = ['banana', 'apple', 'Cherry'];

mixed.sort();
console.log(mixed);  // ["Cherry", "apple", "banana"]  (wrong: uppercase first)

mixed.sort((a, b) => a.localeCompare(b));
console.log(mixed);  // ["apple", "banana", "Cherry"]  (correct)