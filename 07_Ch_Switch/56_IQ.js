
// typeof, switch, and strict equality (===) in JavaScript.

let status1 = 0;
console.log(typeof status1);
switch (status1) { // // === Strict, value and data type both of them should be same.

    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}


/*
Expression	Result	   Reason
0 == false	     true	   Loose equality allows type conversion
0 === false	     false	   Different data types
0 === 0	         true	   Same type and value
typeof 0	   "number"	   Zero is a number

*/