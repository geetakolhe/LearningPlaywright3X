function greet1(name) {
    return `Hello, ${name}!`;
}


// Function as Expression
const greet = function(name) {
    return `Hello, ${name}!`;
}

const greet2 = (name) => {
    return `Hello, ${name}!`;
}

console.log(greet1("Bob")); // Hello, Bob!
console.log(greet("Bob")); // Hello, Bob!
console.log(greet2("Bob")); // Hello, Bob!