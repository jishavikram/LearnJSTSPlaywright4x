//------ Array Concat --------------------
// concat() joins two or more arrays into a new array. The original arrays are not changed.

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a,...b];
console.log(d);

console.log("----------------------------------------------------");

// Ex2:
const x= [1, 2, 3];
const y= [4, 5, 6];

const result = a.concat(b);

console.log(result);  // [1, 2, 3, 4, 5, 6]
console.log(x);      // [1, 2, 3] (unchanged)
console.log(y);  // [4, 5, 6] (unchanged)