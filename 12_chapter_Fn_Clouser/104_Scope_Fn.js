// Scope in the Functions

let env = "Staging"; // global scope

function setConfig() {
  let timeout = 3000; // local scope
  console.log(env); // Accessing global scope variable
  console.log(timeout); // Accessing local scope variable
}

setConfig();
console.log(env); // Accessing global scope
console.log(timeout); // Error: timeout is not defined, as it is in local scope of setConfig function

// -----

let g_x = 10; // global scope

function outerFunction() {
  let l_y = 20; // local scope of outerFunction
  console.log(g_x); // Accessing global scope variable
}

inner();
console.log(l_y); // Error: l_y is not defined, as it is in local scope of outerFunction
console.log(g_x); // Accessing global scope variable