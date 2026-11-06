/* --- Callback function -> callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete a routine or action.
*/


function placeOrder(item, callback){
    console.log("Placing an order");
    console.log("Order Placed", item);
    callback();
}

// // First Way -- Normal Fn
function CompleteOrderPrint() {
    console.log("Normal Fn");
}

placeOrder("Burger", CompleteOrderPrint);

/* Output:

Placing an order
Order Placed Burger
Normal Fn

*/