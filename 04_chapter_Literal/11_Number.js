//-------------------------------------------------
// Topic : All Number Types in JavaScript
//-------------------------------------------------

/*
In JavaScript, numbers are represented using the Number type, which is a double-precision 64-bit binary format IEEE 754 value. This means that all numbers in JavaScript, whether they are integers or floating-point numbers, are treated as the same type.
*/

// --------------------------------------------
// 1. Integer Literals    
//-------------------------------------------

// Decimal (Base 10) - The most common 
let decimalNumber = 42; // Decimal integer
console.log("Decimal: " + decimalNumber); // Output: Decimal: 42

// Binary (Base 2) - start with 0b or 0B
let binaryNumber = 0b101010; // Binary integer
console.log("Binary: " + binaryNumber); // Output: Binary: 42

// Octal (Base 8) - start with 0o or 0O
let octalNumber = 0o52; // Octal integer
console.log("Octal: " + octalNumber); // Output: Octal: 42

// Hexadecimal (Base 16) - start with 0x or 0X
let hexadecimalNumber = 0x2A; // Hexadecimal integer
console.log("Hexadecimal: " + hexadecimalNumber); // Output: Hexadecimal: 42

// --------------------------------------------
// 2. Floating-Point Literals
//-------------------------------------------

let floatNumber = 3.14; // Floating-point number
console.log("Floating-point: " + floatNumber); // Output: Floating-point: 3.14  
let float2 = 0.5; // Floating-point number
console.log("Floating-point: " + float2); // Output: Floating-point: 0.5

let float3 = .5; // Floating-point number
console.log("Floating-point: " + float3); // Output: Floating-point: 0.5

let float4 = 5.; // Floating-point number
console.log("Floating-point: " + float4); // Output: Floating-point: 5  

// --------------------------------------------
// 3. Scientific Notation (Exponential Notation)
//-------------------------------------------

let exp1 = 1.5e3; // 1.5 * 10^3 = 1500
console.log("Scientific Notation: " + exp1); // Output: Scientific Notation: 1500

let exp2 = 2.5e-2; // 2.5 * 10^-2 = 0.025
console.log("Scientific Notation: " + exp2); // Output: Scientific Notation: 0.025

let exp3 = 3.14e2; // 3.14 * 10^2 = 314
console.log("Scientific Notation: " + exp3); // Output: Scientific Notation: 314