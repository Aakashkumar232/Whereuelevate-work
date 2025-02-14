//                1. ES6+ Features

// a. let & const:-
// let: Used to declare block-scoped variables. It allows you to create variables that can be reassigned.
// const: Used to declare block-scoped constants. Once a value is assigned to a const variable, it cannot be reassigned.


// Using let
let x = 10;
console.log(x); // 10
x = 20; // Reassigning
console.log(x); // 20

// Using const
const y = 30;
console.log(y); // 30
// y = 40; // This will throw an error: TypeError: Assignment to constant variable.


// b. Arrow Functions:-
// Arrow functions provide a more concise syntax for writing function expressions. They also lexically bind the this value, which means they inherit this from the surrounding context.

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3)); // 5
console.log(addArrow(2, 3)); // 5

// Arrow function with no parameters
const greet = () => "Hello, World!";
console.log(greet()); // Hello, World!

// Arrow function with a single parameter
const square = x => x * x;
console.log(square(4)); // 16


// c. Destructuring (Arrays & Objects)
// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

// Array Destructuring:
const numbers = [1, 2, 3];

// Destructuring
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3


// Object Destructuring:


const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

// Destructuring
const { name, age } = person;
console.log(name, age); // Alice 25


// 2. Higher-Order Functions
// Higher-order functions are functions that can take other functions as arguments or return functions as their result.


// a. map()
// The map() function creates a new array populated with the results of calling a provided function on every element in the calling array.


const numbers1 = [1, 2, 3, 4, 5];

// Using map to square each number
const squares = numbers1.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]



// b. filter()
// The filter() function creates a new array with all elements that pass the test implemented by the provided function.


const numbers2 = [1, 2, 3, 4, 5];

// Using filter to get even numbers
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]



// c. reduce()
// The reduce() function executes a reducer function (that you provide) on each element of the array, resulting in a single output value.


const numbers3 = [1, 2, 3, 4, 5];

// Using reduce to sum all numbers
const sum = numbers3.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15



                            //    Task:-


 // Sample dataset: an array of objects representing products
const products = [
    { id: 1, name: 'Laptop', price: 800, category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 600, category: 'Electronics' },
    { id: 3, name: 'Tablet', price: 300, category: 'Electronics' },
    { id: 4, name: 'Chair', price: 150, category: 'Furniture' },
    { id: 5, name: 'Desk', price: 250, category: 'Furniture' },
];

// 1. Destructuring to extract data from the first product
const [firstProduct] = products;
const { name: firstProductName, price: firstProductPrice } = firstProduct;

console.log(`First Product: ${firstProductName}, Price: $${firstProductPrice}`);

// 2. Processing the dataset
// a. Filter products that are in the 'Electronics' category
const electronics = products.filter(({ category }) => category === 'Electronics');

// b. Map to get an array of product names and their prices
const electronicsDetails = electronics.map(({ name, price }) => `${name}: $${price}`);

// c. Reduce to calculate the total price of all electronics
const totalElectronicsPrice = electronics.reduce((total, { price }) => total + price, 0);

// Output results
console.log('Electronics Products:', electronicsDetails);
console.log('Total Price of Electronics: $', totalElectronicsPrice);
