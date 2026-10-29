// Type3 Fn =  with argument/parameter but no return type. 


function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Jisha");
sayHello("Jess");

/* O/P: 
Hello Jisha
Hello Jess
*/
console.log("------------------------------");

// Ex2: from class

function greetByName(name){
    console.log("Hi", name);
}

greetByName("Pramod");
greetByName("Dipak");
greetByName("Meeti");
greetByName("Sangeetha");

let name1 = greetByName("Sumit"); 
console.log(name1); 

/* O/P: 
Prints all names and last gives undefined, since the function does not have return statement.
    -- the returned undefined is saved in name1
    -- name1 is printed, so you see undefined
*/