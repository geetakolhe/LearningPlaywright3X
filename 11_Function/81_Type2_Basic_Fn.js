// Type 2 Function: With Parameters and no return (void)

// so with arguments/parameters but no return type.

function greetByName(name) {
    console.log("Hello, " + name + "!");  
}

greetByName("Alice");
greetByName("Bob");
greetByName("Charlie"); 

let name1 = greetByName("David");
console.log(name1); // undefined