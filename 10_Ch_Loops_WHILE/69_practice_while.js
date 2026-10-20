// Eg 1:  Multiplication table of 5

let num = 5;
let i = 1;

while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
}

console.log("..............................");

//  Eg 2: Sum of numbers from 1 to 5

let y = 1;
let sum = 0;

while (y <= 5) {
    sum = sum + y;
    y++;
}

console.log("Sum =", sum);
