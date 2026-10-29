//Mutiline
const getResult = (score) => {
    if(score > 70) return "Pass";
    return "fail";
}

console.log(getResult(78));  // Pass
console.log(getResult(43));  // Fail

console.log("---------------------------");

// Ex: Add two numbers

const add = (a, b) => {        
    let sum = a + b;
    console.log("Adding two numbers");
    return sum;
};

let result = add(10, 20);
console.log(result);

/* O/P: 
Adding two numbers
30
*/

// (a,b) - Accepts two parameters
