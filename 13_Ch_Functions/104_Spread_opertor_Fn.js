
//Example without Spread Operator
function add(a, b, c) {
    return a + b + c;
}

let numbers = [10, 20, 30];

console.log(add(numbers[0], numbers[1], numbers[2]));   // 60



// Example using Spread Operator (...)
function add(a, b, c) {
    return a + b + c;
}

let numbers1 = [10, 20, 30];

console.log(add(...numbers1)); // 60
