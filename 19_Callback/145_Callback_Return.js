/* Callback Return - It refers to the data returned by a callback function back to the outer 
function that invoked it.
*/

function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log(sum);