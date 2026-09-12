var greeting; // Memory is created for variable 'greeting' and initialized with undefined
console.log(greeting); // Output: undefined
var greeting = "Hello, World!";
console.log(greeting); // Output: "Hello, World!"

// ----Phase 1: Memory Creation Phase (Hoisting)----
// var greeting; // Memory is created for variable 'greeting' and initialized with undefined
// var greeting = undefined; // Memory is created for variable 'greeting' and initialized with undefined
// ----Phase 2: Code Execution Phase----
// greeting = "Hello, World!"; // The value is assigned to the variable 'greeting'
