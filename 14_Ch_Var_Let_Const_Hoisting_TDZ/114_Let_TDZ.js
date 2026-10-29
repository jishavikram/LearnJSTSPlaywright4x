// -------- TDZ stands for Temporal Dead Zone. ---------------

/* It is the period between entering a scope and the point where a variable declared 
using let or const is initialized.  During this period, you cannot access that variable. 
If you try, JavaScript throws a ReferenceError.

*/


var a = "Jess";
// 10,0000 lines
if(true){
    console.log(a);
    var a = "temp";
    console.log(a);
}

//Jess
//temp

console.log("-------------------------------------");

// Ex 2:
{
    console.log(a);
    let a = 10;
}
// ReferenceError: Cannot access 'a' before initialization

// Enter Block
//  ↓
// a is created ✅
// if a -> var-> undefined
// if a -> let -> no value
// a has NO value yet ❌ 

// console.log(a) // Error TDZ (let, const), Var => undefined

// let a = 10;
//     ↓
// a = 10 ✅