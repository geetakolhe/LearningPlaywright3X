// console.log("Enter the Number!");
// const data = require('fs').readFileSync(0, 'utf8').trim();
// console.log("Hi",data);

// node "08_UserInputs/51_Fs.js"

// In the Terminal 
// Type 15
// Press enter 
// Press Ctrl +D

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the Number!\n', (answer) => {
  console.log('Hi', answer.trim());
  rl.close();
});