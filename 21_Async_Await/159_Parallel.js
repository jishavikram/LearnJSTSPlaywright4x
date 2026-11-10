// Parallel executiom:


function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name + ": 200 OK");
        }, 1000);
    });
}

async function parallelTest() {

    console.log("Starting of the Test");
    let start = Date.now();

     let [r1, r2, r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Service"),
        apiCall("Payment Service")
    ]);

    console.log(r1);
    console.log(r2);
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start) + "ms");


}

parallelTest();

/* Output:
Starting of the Test
Auth Service: 200 OK
User Service: 200 OK
Payment Service: 200 OK
Time: ~1006ms

*/