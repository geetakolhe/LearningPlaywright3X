// Array literal (prefered)

let browser = ["Chrome", "Firefox", "Safari"]; // Prefer this way

// Array constructor
let scores = new Array(3); // creates [empty * 3]
scores[0]="1";
let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]


let numbers = new Array(100, 200, 300, 400);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test.length);

// Array.form()
let chars = Array.from("hello");
// .["h","e","l","l","o"]