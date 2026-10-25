// ----Sorting an array-----------
// sort() arranges the elements of an array in order. It changes the original array and also returns it.

let fruits = ["banana", "apple", "cherry"];
console.log(fruits);
fruits.sort();
console.log(fruits);
//  alphabetical by default 

console.log ("----------------------------------------------------");

// Ex 2:  Sorting numbers

let nums = [10,1,21,2];
nums.sort();
console.log(nums);
// Natural Sorting, Lexicographic Sort

let n = [11,-11];
console.log(n.sort());

/* Lexicographic means dictionary order. Two strings are compared one character at a time from the left, and 
the first character that differs decides which one comes first. 
That's the order sort() uses by default. */


