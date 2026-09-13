let str = "Hello, World!";
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

// Trim Whitespace
console.log(str.trim());

str.trimStart();
str.trimEnd();

//Replace
let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL", "PASS"); 
msg.replaceAll("FAIL", "PASS");
msg.replace(/FAIL/g,"PASS");

// Concatation
"Hellow" + " " + "World";
"Hellow".concat(" ","World");
`${"Hellow"} ${"World"}`;
