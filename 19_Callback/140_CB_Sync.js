let testResults = ["Pass","Fail","Pass","Skip"];

testResults.forEach(function(result,index){
        console.log("Test", index, result);
});

// "All done" prints LAST because forEach is synchronous — it finishes all 4 iterations first, then moves on.

/*  Output:
Test 0 Pass
Test 1 Fail
Test 2 Pass
Test 3 Skip

*/