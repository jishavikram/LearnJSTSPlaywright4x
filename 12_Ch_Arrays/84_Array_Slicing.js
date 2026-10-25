// --- Slicing an array  -> slice() copies a portion of an array into a new array. 
// The original array is not changed.

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically 
// take from start to end.

// console.log(arr.slice(1, 3));
console.log(arr);

// console.log(arr.slice(2));

// console.log(arr.slice(-2));
// console.log(arr.slice(-3));

console.log("-----------------------------------------");
// Ex2:
const nums = [10, 20, 30, 40, 50];

console.log(nums.slice(1, 4));  // [20, 30, 40]
console.log(nums);              // [10, 20, 30, 40, 50] (unchanged)

console.log(nums.slice(2));      // [30, 40, 50]  (from index 2 to the end)
console.log(nums.slice(0, 2));   // [10, 20]      (first 2 elements)
console.log(nums.slice());       // [10, 20, 30, 40, 50]  (full copy)
console.log(nums.slice(3, 3));   // []            (start equals end, nothing to copy)
console.log(nums.slice(10));     // []            (start is beyond the array)