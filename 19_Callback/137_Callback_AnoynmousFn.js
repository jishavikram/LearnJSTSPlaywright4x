//  Callback using Anonymous function

function placeOrder(item, callback) {
    console.log("Placing an order");
    console.log("Order Placed", item);
    callback();
}



// Second Way Anoy
placeOrder("Burger", function() {
    console.log("Order is ready!, pick it up!");
});

/* Output:

Placing an order
Order Placed Burger
Order is ready!, pick it up!

*/