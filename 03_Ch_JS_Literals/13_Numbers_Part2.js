/* --------------------------------------------------------
    Numeric Separators (_)
--------------------------------------------------------
  i. In JavaScript, numeric separators are underscores (_) 
      used inside numeric literals to make large numbers easier to read.
  ii. They were introduced in ES2021 (ECMAScript 2021).
  iii. The underscore improves readability; it does not change the value.

*/ 

let million = 1_000_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;

//Ex: 
let salary = 1000000;
console.log(salary); // 1000000

let sal = 1_000_000;
console.log(sal);   // 1000000

// Can use numeric separators in several types of numeric literals
// Decimal literals
let amount = 1_000_000;
let price = 12_345.67;

console.log(amount); // 1000000
console.log(price);  // 12345.67

//Binary literals
let binary = 0b1010_1100;
console.log(binary); // 172


let a = 1_000     //valid
let b = 1_000_000  // valid
let c = _1000       // Invalid
let d =  1000_      // Invalid
let dc = 10_.5     // Invalid
let dc2 = 10._5    // Invalid
let dc3 = 1_e3     //Invalid


// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let big = 123456789012345678901234567890n;
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); // "bigint"