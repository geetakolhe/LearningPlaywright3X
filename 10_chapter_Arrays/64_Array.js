let fruit = [];
const browsers = ["chrome", "firefox", "webkit"];
console.log(browsers[0]);          // chrome
console.log(browsers.at(-1));      // webkit  (negative index)
console.log(browsers.length);      // 3
console.log(fruit.length);

// For the Negative indexed, use the at
 console.log(browsers[-1]); // undefined we need to add .at
 console.log(browsers.at(0));