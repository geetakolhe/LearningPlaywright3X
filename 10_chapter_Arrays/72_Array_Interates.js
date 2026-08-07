let tests = ["login", "checkout", "search"];

for (let i=0; i<tests.length; i++){
  console.log(i,tests[i]);
}

console.log("--------------");

// for .... of (cleanest for values)

for (let test of tests){
  console.log(test); // values
}

// forEach (no return value)
tests.forEach((test, index) => {
  console.log(`${index}: ${tests}`);
});