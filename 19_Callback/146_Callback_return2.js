
/* What NOT to do

function fetchUserData() {
  setTimeout(() => {
    return { name: "Alice" }; // ❌ This returns to setTimeout, NOT fetchUserData
  }, 1000);
}

const data = fetchUserData();
console.log(data); // Output: undefined

*/

// Alternative: Pass the result forward instead of returning it
function fetchUserData(callback) {
  setTimeout(() => {
    const user = { name: "Alice" };
    callback(user); // Pass the data into the next step
  }, 1000);
}

fetchUserData((data) => {
  console.log("Received data:", data.name); // Output: Received data: Alice
});
