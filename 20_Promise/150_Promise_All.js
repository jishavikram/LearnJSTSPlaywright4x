/* Promise ".all()" - takes an array of Promises and returns one Promise that waits for all 
of them to finish. They run in parallel, not one after another.
*/


let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");


Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
})


Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });


    /* Output:
    All checks: [ 'Auth Ok', 'DB OK', 'Cache OK' ]
Failed: DB DOWN

*/