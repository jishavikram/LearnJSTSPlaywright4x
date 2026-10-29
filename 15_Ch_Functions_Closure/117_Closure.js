/* ---------- Functions CLosure
  A closure is a function that remembers the variables from the place where it was created, 
  even after that outer place has finished running.

In other words: a function + the surrounding variables it had access to when it was defined.
*/

function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();

//O/P: edge