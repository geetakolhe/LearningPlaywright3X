const greet = function(name) {
    return `Hello, ${name}!`;
}

const greet1 = function (name1){
    return `Hello, ${name1}!`;
};

// Arrow Function

// If you want to make a normal function into an arrow function.
// Remove the keyword function, remove the keyword return, remove the curly braces and add an arrow => after the parameter.

const greet2 = (name2) => `Hello, ${name2}!`;


console.log(greet("Bob")); // Hello, Bob!
console.log(greet1("Bob")); // Hello, Bob!
console.log(greet2("Bob")); // Hello, Bob!  
