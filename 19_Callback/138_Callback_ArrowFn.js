// Callback using Arrow Function

function placeOrder(item, callback){
    console.log("Placing an order");
    console.log("Order Placed", item);
    callback();
}


// Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});

/*  Output:

Placing an order
Order Placed Burger
Arrow Fn, I am also a function wihtout name!

*/