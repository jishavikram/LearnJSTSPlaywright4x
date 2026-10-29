// Type 1 - No param / argument, No Return -> final return undefined.

// Fn Define
function greet(){
  console.log("Hello, TheTesting Academy");  
}

// Fn Calling
greet();



function openBrowser(){
    console.log("Open Browser");
    // open the brower
}

openBrowser();

let msg = greet(); // undefined, since there is no return.
console.log(msg);

console.log ("............................");

//Ex2:
function sayHello() {
    console.log("Hello JavaScript");
}

sayHello();
