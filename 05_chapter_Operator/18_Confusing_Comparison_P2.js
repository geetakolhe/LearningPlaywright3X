// Rule of Thumb:
// == -> loose equality (does type coercion, surprising results)
// === -> strict equality (no type coercion, more predictable)

console.log("- - Confusing Comparison in JS --");

// ---------------2. Nulll and Undefined-----------------

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null == 0); // false
console.log(null >=0); // true
console.log(null > 0); //false
console.log(null == 0 || null >0); // false - but null >= 0 is 