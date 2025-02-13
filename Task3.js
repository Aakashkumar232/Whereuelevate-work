//          1. Variables & Data Types:-

// Declaring variables using var, let, and const
var name = "John"; // String
let age = 30; // Number
const isStudent = false; // Boolean

// Array
let hobbies = ["reading", "gaming", "coding"];

// Object
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

// Logging the variables to the console
console.log(name); // John
console.log(age); // 30
console.log(isStudent); // false
console.log(hobbies); // ["reading", "gaming", "coding"]
console.log(person); // { name: "Alice", age: 25, isStudent: true }


//               2. Operators

// Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division

// Comparison Operators
let isEqual = (a === b); // Strict equality
let isGreater = (a > b); // Greater than

// Logical Operators
let andCondition = (a > 5 && b < 10); // Logical AND
let orCondition = (a > 15 || b < 10); // Logical OR

// Assignment Operators
let c = 20;
c += 5; // c = c + 5

// Logging results to the console
console.log(sum, difference, product, quotient); // 15, 5, 50, 2
console.log(isEqual, isGreater); // false, true
console.log(andCondition, orCondition); // true, true
console.log(c); // 25


//                 3. Functions

// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow Function
const add = (x, y) => x + y;

// Calling the functions
console.log(greet("John")); // Hello, John!
console.log(add(5, 10)); // 15


//                4. Loops

// For Loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// While Loop
console.log("While Loop:");
let j = 0;
while (j < 5) {
    console.log(j); // 0, 1, 2, 3, 4
    j++;
}

// Do...While Loop
console.log("Do...While Loop:");
let k = 0;
do {
    console.log(k); // 0, 1, 2, 3, 4
    k++;
} while (k < 5);



//            5. Conditionals

// If...Else Statement
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// Switch Statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Unknown Day";
}

console.log(dayName); // Wednesday
