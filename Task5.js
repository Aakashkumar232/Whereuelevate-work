// var c = "kumar";

// {
//     let d = "rathi";
//     console.log(d);
// }

// console.log(c);


// // ARROW FUNCTION  


// function greet(){
//     console.log("good morning india");
// }
// greet();

// or 

// let greet = ()=>{
//     console.log("good morning india");
// }
// greet();

// let sum = (a,b)=>{
//     return a+b;
// }
// let sum2 = sum(12,23);
// console.log(sum2);

// let num = (a,b)=>a+b;      //here is the most shorter method to define the arrow function
// console.log(num(12,67));
//       //   or
// let half = (a) => a/2;
// console.log(half(45));


// setTimeout(() =>{           //means that it use for that self return the value
//     console.log("we are hiring");
// });


// let obj = {
//     greetings:"good morning",
//     names:["rathi","verma","suhan","approx","ji","yess"],
//     speak(){
//         this.names.forEach((names) =>{
//             console.log(this.greetings + " kukdoo koo " + names);
//         });
//     }
// }
// console.log(obj.speak()); 


//        Destructuring (Arrays & Objects)


// let arr = [1,2,3,4];
// let [a,b,c,d] = arr;
// console.log(a,b,c,d); 


// let arr = [1,2,3,4,5,6,8,9];    // using rest remaining element will be count or print
// let [a,b,c,d,...rest] = arr;
// console.log(a,b,c,d,rest);


// let {a,b} = {a:2,b:5};
// console.log(a,b);


// spread operator 

// let arr1 = [3,5,8]
// let obj1 = {...arr1}
// console.log(obj1)



// let arr1 = [3,5,8]
// function sum(a,b,c){
//     return a+b+c;
// }

// console.log(sum(...arr1));


// let obj1 = {
//     name:"harry",
//     company:"xyzx",
//     address:"xyz"
// }

// console.log({...obj1, address:"mdh"});



// 2.	Higher-Order Functions:
// o	map()
// o	filter()
// o	reduce()

// o	map(method)

// let arr = [45,23,21]
// let a = arr.map((value) =>{
//     return value+1;
// })
// console.log(a)

// o	filter(method)

// let arr1 = [45,23,21,0,5,7,8,9];
//  let a2 = arr1.filter((a1) =>{
//     return a1<10;
//  })

//  console.log(a2);


 // o	reduce(method)

//  let arr4 = [1,2,3,4,5];
//  let arr5 = arr4.reduce((h1,h2) =>{
//     return h1+h2;
// })
// console.log(arr5)








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