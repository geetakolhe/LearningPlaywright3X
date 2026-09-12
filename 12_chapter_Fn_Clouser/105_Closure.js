function startsBrowser() {
  let browser = "Chrome";

  function installBrowser() {
    console.log(browser); // Output: "Chrome"
  }

  return installBrowser;
}

const runTC = startsBrowser();
runTC(); // Output: "Chrome"


// function outer(){
//   let name = "Pramod";

//   function inner(){
//     console.log(name);
//   }

//   return inner;
// }

// const greet = outer();
// greet(); // Output: "Pramod"