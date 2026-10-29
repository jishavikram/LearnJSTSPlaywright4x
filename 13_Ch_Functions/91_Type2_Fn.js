// Type 2 Functions

//  No argument/parameter but return type. 

function sayHello(){
    return "Hello";
}

let msg = sayHello();
console.log(msg);

// Output : Hello

console.log("----------------------------");

//note: Important:- return vs console.log(),if a small change in above code the output will give different

function sayHello1() {
    console.log("Hello");
}

let msg1 = sayHello1();
console.log(msg1);

// Output: 
// Hello
//undefined.  Because console.log("Hello") only prints the message. It does not return the value.

//To remember: return sends the value back to the caller, and console.log() prints it in the terminal.