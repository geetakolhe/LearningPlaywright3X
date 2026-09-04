// Immedialy Invoked Function Expression (IIFE)
// IIFE is a function that runs as soon as it is defined.

function name1() {
    console.log("This is an IIFE!");
};
name1(); // This is an IIFE!

// IIFW

(function(){
  console.log("Anonymous function that runs immediately!");
})(); // Anonymous function that runs immediately!

(function(){
  console.log("Staging");
})(); // Staging

(() => {
  console.log("Setup complete!");
})();
