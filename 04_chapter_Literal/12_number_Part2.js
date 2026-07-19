//-------------------------------------------------
// 3. Numeric Separators (ES2021+)
//-------------------------------------------------

let largeNumber = 1_000_000; // 1,000,000
console.log("Large Number: " + largeNumber); // Output: Large Number: 1000000

let floatWithSeparator = 3.141_592_653_589_793; // Pi with separators
console.log("Pi: " + floatWithSeparator); // Output: Pi: 3.141592653589793

let million = 1_000_000; // 1,000,000
let binarySep = 0b1010_1010; // Binary with separators
let hexSep = 0xFF_FF_FF; // Hexadecimal with separators

console.log("Million: " + million); // Output: Million: 1000000
console.log("Binary with Separator: " + binarySep); // Output: Binary with Separator: 170
console.log("Hexadecimal with Separator: " + hexSep); // Output: Hexadecimal with Separator: 16777215

//-------------------------------------------------------------------------
// 4. BIGINT - FOR ARBITRARY LARGE INTEGERS (ES2020+)
//-------------------------------------------------------------------------

let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt literal
console.log("BigInt Value: " + bigIntValue);
let anotherBigInt = BigInt("1234567890123456789012345678901234567890"); // Using BigInt constructor
console.log("Another BigInt Value: " + anotherBigInt);
let bigFromNum = BigInt(42); // Using BigInt constructor with a number
console.log("BigInt from Number: " + bigFromNum);