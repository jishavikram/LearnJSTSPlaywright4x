// ============================================================
// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.

  ----- Numeric Literal - Numeric ----
  1. int
  2. float
*/

// --------------------------------------------------------
// 1. INTEGER LITERALS
// ---------------------------------------------------------

// Decimal (Base 10) - most common
let decimal = 45;    // Decimal
console.log(decimal);

let decimal1 = 42;
console.log("Decimal:", decimal1); // 42

// Binary (Base 2) - starts with 0b or 0B
let binary = 0b1010;  // Binary : 10
console.log(binary);

// Octal (Base 8) - starts with 0o or 0O
let octal = 0o12;     // Octal : 10
console.log(octal);

let octal1 = 0o52; // 42 in decimal
console.log("Octal:", octal1); // 42

// Hexadecimal (Base 16) - starts with 0x or 0X
let hexadecimal = 0xA;  // Hexadecimal: 10
console.log(hexadecimal);

let b = 0xFF;
console.log(b); // 255

// --------------------------------------------------------
// 2. FLOATING-POINT LITERALS
// ------------------------------------------------------

let float = 3.14
console.log("Float:", float);

let float1 = -0.5;
console.log("Float1:", float1);

let float2 = 0.8;  //valid, but should be avoided for readbility
console.log("Float2:", float2);

let float3 = 5.;   //valid, but should be avoided for readbility
console.log("Float3:", float3);

// --------------------------------------------------------
// 3. EXPONENTIAL NOTATION LITERALS
// ------------------------------------------------------

//Represents a number using powers of 10. The letter e means “multiply by 10 to the power of.”

let exp1 = 1.5e3;   // 1.5 * 10^3 = 1500
console.log("Exponential:", exp1);   // 1500

let exp2 = 1e3;
console.log("Exponential:", exp2); // 1000  (ie, 1e3 means 1×10^3)

let exp3 = 1.5e-3;  // 1.5 * 10^-3 = 0.0015
console.log("Exponential:", exp3);  // 0.0015

let exp4 = 2E10;    // 2 * 10^10 = 20000000000
console.log("Exponential:", exp4);

/* --------------------------------------------------------
   4. BigInt LITERALS
  ------------------------------------------------------
Represent integers larger than JavaScript's safe integer range. Add n to the end of an integer literal.
  BigInt cannot be mixed directly with a regular Number in arithmetic.

  */

let a = 12345678901234567890n;
console.log(a);

let b = 100n;
console.log(b + 50n); // 150n

/* _______________________________________________________________________________________________

Important rules to remember
==================================
Decimal: No prefix is required.
Binary: Use 0b.
Octal: Use 0o.
Hexadecimal: Use 0x.
Exponential: Use e or E.
BigInt: Append n to an integer literal.
A negative number such as -25 is technically a unary minus operator applied to the numeric literal 25.
Numeric separators (_) can improve readability: let amount = 1_000_000;. They do not change the value.

Memory trick: b = Binary, o = Octal, x = Hexadecimal, e = Exponential, n = BigInt.

*/