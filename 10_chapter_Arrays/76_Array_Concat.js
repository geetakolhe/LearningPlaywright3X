let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
console.log(c);

// Spread modern way concating 
//... all the elements of the array

let d = [...a, ...b];
console.log(d);

// joining arrays with join method
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);