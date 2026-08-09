// Checking Arrays

// Check if something IS an array

let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
console.log(result);
console.log(result1);

// map  filter  reduce  

// every, some
[80, 90, 100].every(s => s >= 80); // true
[80, 60, 85].every(s => s >= 90); // false
[80, 90, 100].some(s => s >= 90); // true
[80, 60, 85].some(s => s >= 90); // false

// some - AT LEAST one must pass
[80, 90, 100].some(s => s >= 90); // true
[80, 60, 85].some(s => s >= 90); // false

