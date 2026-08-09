// Shallow Copy of an array

let origional = [1,2,3];
let copy = [...origional]; // spread operator
// console.log(copy);
// console.log(origional);

let copy2 = origional.slice(); // slice method
// console.log(copy2);

let copy3 = Array.from(origional); // Array.from method
// console.log(copy3);

let copy4 = origional.concat(); // concat method
// console.log(copy4);

console.log("--------------");
copy1.push(99);
console.log(origional);
console.log(copy1);

// Deep Copy of an array
let deep_copy_array = origional;

// Deep copy

origional.push(91);
console.log(origional);
console.log(deep_copy_array);