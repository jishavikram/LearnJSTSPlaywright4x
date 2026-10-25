//Using spread operator

const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log(copy);      // [1, 2, 3, 4]
console.log(original);  // [1, 2, 3]  (unchanged)

console.log("----------------------------");

//Ex2: Other ways to copy
const original1 = ["Chrome", "Firefox", "Edge"];

const c1 = original1.slice();
const c2 = Array.from(original1);
const c3 = [].concat(original1);

// With a simple for loop
const c4 = [];
for (let i = 0; i < original1.length; i++) {
  c4.push(original1[i]);
}

console.log(c1, c2, c3, c4);
// all four print: ["Chrome", "Firefox", "Edge"]