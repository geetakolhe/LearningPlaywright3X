function add(a, b,c){
  return a + b + c;
}

let num = [1, 2, 3];
add(...num); // Spread operator to pass array elements as individual arguments

console.log(add(...num)); // Output: 6

// ---------------------------------------------------

function hasError(...codes){
  return codes.some(c => c >= 400);
}

let responseCodes = [52, 51, 50];  // [501, 503, 404] // true
console.log(hasError(...responseCodes)); // Output: false