//-------------------------------------------
// Topis: null vs undefined in JavaScript
//-------------------------------------------

/*
 Simple Definition:

 undefined: A variable that has been declared but has not yet been assigned a value is considered undefined. It represents the absence of a value or an uninitialized state.

 null: null is an assignment value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object reference is intentionally empty.
*/

// var x; // x is declared but not assigned a value, so it is undefined
// console.log(x); // Output: undefined  

// var y = null; // y is assigned the value null
// console.log(y); // Output: null

//-------------------------------------------
// 1. undefined
//-------------------------------------------

let userName; // Declared but not assigned a value
console.log(userName); // Output: undefined

function greet() {
// Function without a return statement
}
console.log(greet()); // Output: undefined

let x;
x = 10;
console.log(x); // Output: 10

//-------------------------------------------
// 2. null
//-------------------------------------------

let profilePicture = null; // Explicitly assigned null
console.log(profilePicture); // Output: null
console.log(typeof profilePicture); // Output: object (this is a known quirk in JavaScript)

// -------------------------------------------
// 3. Key difference summmary table
//-------------------------------------------

/*

*/