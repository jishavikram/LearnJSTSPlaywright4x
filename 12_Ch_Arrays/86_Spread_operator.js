// ------------Spread operator ------------

const a = [1, 2, 3];
const b = [4, 5, 6];

const result = [...a, ...b];
console.log(result);  // [1, 2, 3, 4, 5, 6]

// You can also mix in extra values anywhere
console.log([0, ...a, 99, ...b]);  // [0, 1, 2, 3, 99, 4, 5, 6]