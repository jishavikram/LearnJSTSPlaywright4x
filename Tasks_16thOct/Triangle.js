//Write a javascript program that takes three sides of a triangle and classifies it as
//  Equilateral, Isosceles, or Scalene

let a = 5;
let b = 5;
let c = 3;

if (a <= 0 || b <= 0 || c <= 0 ||
    a + b <= c || a + c <= b || b + c <= a) {
    console.log("Not a Triangle");
}
else if (a === b && b === c) {
    console.log("Equilateral");
}
else if (a === b || b === c || a === c) {
    console.log("Isosceles");
}
else {
    console.log("Scalene");
}
