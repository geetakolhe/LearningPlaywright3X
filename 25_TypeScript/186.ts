// Primitive types

let name: string = "john";
let age: number = 30;
let pi: number = 3.14;
let distance_to_moon: number = 38677565;
// let pi: float = 3.14;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Array
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["john", "jane"];

// Any (avoid when possible)
let anything: any = "hello";

// Unknown (Safer.than.any)
let unknown: unknown = "hello";

let message: String = "Hello, TypeScript";
let count: number = 42;

console.log("Message:", message);
console.log("Count:", count);
console.log("Is Active:", isActive);