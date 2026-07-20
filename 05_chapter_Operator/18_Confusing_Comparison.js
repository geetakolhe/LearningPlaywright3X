// Rule of Thumb:
// == loose equality (does type coercion, surprising results)
// === strict equality (no type coercion, more predictable)

// console.log("" == 0); // true
// console.log("" === 0); // false

// console.log("0" == 0); // true
// console.log("0" === 0); // false

// console.log("" == "0"); // false
// console.log("" === "0"); // false

// 1. Empty string vs 0 vs "0" vs false (transitivity broken)
console.log("" == 0); // true -> "" coerced to Nummber -> 0
console.log("0" == 0); // true -> "0" coerced to Number -> 0
console.log("" == "0"); // false -> "" and "0" are both strings, no coercion, not equal

// 2. null vs undefined
console.log(null == undefined); // true -> both are falsy values, but not equal
console.log(null === undefined); // false -> different types  

// === fixes it 
console.log("" === 0); // false
console.log("0" === 0); // false
console.log("" === "0"); // false


