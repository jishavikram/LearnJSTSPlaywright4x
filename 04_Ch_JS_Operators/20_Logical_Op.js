/*  ---------------  Logical Operator ------------

  Used to combine conditions or reverse a condition.
    && -> AND Gate
   || -> OR Gate
   !  -> NOT Gate

   && —  both conditions must be truthy.
   || —  at least one condition must be truthy.
    ! -  reverses the truthiness of a value

*/

//Ex 1:
let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

// _______________________________________________________________

//Ex 2:
let age = 25;
let hasID = true;

console.log(age >= 18 && hasID);  // true
console.log(age < 18 || hasID);  // true
console.log(!hasID);             // false