/* ---------------- Nested Ternary Operator ---------------

A nested ternary operator means using another ternary operator inside an existing ternary expression.
Useful when you need to check multiple conditions and choose among several results.

*/

let marks = 75;

let grade = marks >= 90 ? "A" :
            marks >= 75 ? "B" :
            marks >= 50 ? "C" : "Fail";

console.log(grade);

//O/P = B

//Ex 2:
let num = -5;

let result = num > 0 ? "Positive"
           : num < 0 ? "Negative"
                     : "Zero";

console.log(result);

//O/P : Negative