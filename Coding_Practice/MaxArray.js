//Find and print the maximum element in an array of integers.

const data = "5 3 7 2 9 1";   
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
let max = arr[0];

for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);   // 9