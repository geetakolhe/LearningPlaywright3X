greet ("Alice"); // Delclaration - hoisted, works before definition

function greet(name) {
    return `Hello, ${name}!`;
}

sayHello("Bob"); // Type Error : sayHHello is not a function - function expression is not hoisted

const sayHello = function(name) {
    return `Hello, ${name}!`;
}
