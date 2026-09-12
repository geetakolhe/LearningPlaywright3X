// var a = 10;
// console.log(a); // Output: 10

// // var - Function scoped(), Traitor

// // Define
// function printHello(){
//   console.log("Hello the testing Academy");
//   var a = 20; // Traitor
//   console.log(a); // Output: 20
//   if(true){
//     var a = 30;
//     console.log(a); // Output: 30
//   }
//   console.log(a); // Output: 30
// }

// printHello(); // Output: 20, 30, 30

// let -Block scoped, No Traitor

// Define

let b = 20; // Global scope
console.log(b); // Output: 20

function printHello1(){
  console.log("Hello the testing Academy");
  let b = 30; // Block scoped
  console.log(b); // Output: 30
  if(true){
    let b = 5; // Block scoped
    console.log(b); // Output: 5
  }
  console.log("let ->",b); // Output: 30
}

// calling of the function
printHello1(); // Output: 30, 5, 30
console.log(b); // Output: 20

let a =10;
// let a = 20; // SyntaxError: Identifier 'a' has already been declared


var c = 10;
var c = 10; // No error, var allows redeclaration

// var nn = "Hello";
// let nn = "Hello"; // SyntaxError: Identifier 'nn' has already been declared not allowed to redeclare with let

const pi = 3.14; // Constant variable, cannot be reassigned
// pi = 3.14159; // TypeError: Assignment to constant variable.

{

}

const numbers = [1, 2, 3];
numbers.push(10); // Allowed, modifying the contents of the array
console.log(numbers); // Output: [1, 2, 3, 10]

function adsd(){

}