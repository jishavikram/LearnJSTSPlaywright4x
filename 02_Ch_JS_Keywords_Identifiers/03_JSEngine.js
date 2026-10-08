// -- COLD CODE:  Code that runs only once or a few times.

// This function is only declared and called once at startup.
function welcomeUser() {
    console.log("Welcome to the application!");
}

welcomeUser();

// -- Hot Code: Code that runs frequently or repeatedly (like inside a loop or a high-frequency function).

function calculateTotal(price, quantity) {
    return price * quantity;
}

for (let i = 0; i < 100000; i++) {
    calculateTotal(100, 2);
}

