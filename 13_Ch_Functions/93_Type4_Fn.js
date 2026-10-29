// Type 4 Fn - With arg / With return

//Ex 1:
function sumOfTwoNumbers(a,b){
    return a+b;
}

let c = sumOfTwoNumbers(4,5);
console.log(c);   // O/P: 9

console.log("---------------------------------");

//Ex2:
function square(num) {
    return num * num;
}

let result = square(5);
console.log(result);   // O/P: 25

console.log("---------------------------------");

//Ex3:
function multi(num1) {
    return num1 * 5;
}

let result1 = multi(4);
console.log(result1);

/* Important:
A parameter is a placeholder that is created only while the function runs. When you call the function, 
you must give it a real value or a variable that already exists in that scope.

                Name                Where it exists
Parameter	    num1	            Only inside multi()
Argument	    num1(your call)     Must exist outside, or be a value
*/