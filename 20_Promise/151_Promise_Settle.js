/* Promise.allSettled() takes an array of Promises, runs them in parallel, and waits until 
every one has finished, whether it succeeded or failed. It never rejects. 
Instead, it gives you a report on each Promise. 
*/


Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})

/* Output:
Test 1: fulfilled - Test A Passed!
Test 2: rejected - Test B failed
Test 3: fulfilled - Test C passed

*/