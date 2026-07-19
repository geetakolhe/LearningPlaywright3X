//--------------------------------------------------
// Java Script Identifier Rules IQ
//--------------------------------------------------

let validName = "Starts with letter"; // Valid identifier, can start with a letter
let _validName = "Starts with Undescore"; // Valid identifier, can start with an underscore
let $validName = "Starts with Dollar Sign"; // Valid identifier, can start with a dollar sign

let item1 = "Contains letters, digits, and underscores"; // Valid identifier, can contain letters, digits, and underscores
let _temp2 = "Contains letters, digits, and underscores"; // Valid identifier, can contain letters, digits, and underscores
let $data3 = "Contains letters, digits, and underscores"; // Valid identifier, can contain letters, digits, and underscores
let a1_b2_c3$ = "Contains letters, digits, and underscores"; // Valid identifier, can contain letters, digits, and underscores

// Invalid identifiers
// let 1item = "Invalid"; // Invalid identifier, cannot start with a digit
// let -item = "Invalid"; // Invalid identifier, cannot start with a hyphen
// let item-name = "Invalid"; // Invalid identifier, cannot contain a hyphen

// Keywords and Reserved Words
// let var = "Invalid"; // Invalid identifier, cannot use reserved keywords
// let function = "Invalid"; // Invalid identifier, cannot use reserved keywords
// let class = "Invalid"; // Invalid identifier, cannot use reserved keywords

let myVariable = "Valid"; // Valid identifier, can start with a letter
let MyVariable = "Valid"; // Valid identifier, can start with a letter (case-sensitive)

// let my@Name = "Invalid"; // Invalid identifier, cannot contain special characters like @
// let my name = "Invalid"; // Invalid identifier, cannot contain spaces

// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase"; 
let totalPrice = 99.99;
let isLoggedIn = true;

// 2. PascalCase (standard for JS classes and constructors)
let UserProfile ="PascalCase";
let ShoppingCart = "Class name style";

// 3. snake_case (not commonly used in JS, but valid also Underscore is used in some libraries)
let user_name = "snake_case";
let total_price = 99.99;
let is_logged_in = true;

// 4. SCREAMING_SNAKE_CASE (used for constants)
const MAX_USERS = 100;
const API_KEY = "12345-ABCDE";
const DATABASE_URL = "localhost";

// 5. Hungarian Notation (not commonly used in modern JS, but still valid)
// we are not using Hungarian Notation in modern JS, but it is still valid and can be used if desired.
let strName = "Hungarian Notation";
let bActive = true;
let iCount = 10;
let arrItems = [1, 2, 3];
