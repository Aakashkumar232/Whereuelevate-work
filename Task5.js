// Task => Create custom Higher-order functions using Prototype (map, filter, reduce)

                           
                      //replication of high-order functions (map, filter, reduce)


// Custom map function
Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Custom filter function
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Custom reduce function
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Example usage
const arr = [1, 2, 3, 4, 5];

// Using custom map
const mapped = arr.myMap(num => num * 2);
console.log("Mapped:", mapped); 

// Using custom filter
const filtered = arr.myFilter(num => num % 2 === 0);
console.log("Filtered:", filtered);

// Using custom reduce
const reduced = arr.myReduce((sum, curr) => sum + curr, 0);
console.log("Reduced:", reduced);          




                                        //custom Higher-order functions (map, filter, reduce)


//custom map function
Array.prototype.myMapWithCondition = function (callback, condition) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (condition(this[i], i, this)) {
            result.push(callback(this[i], i, this));
        } else {
            result.push(this[i]); // Keep original value if condition is false
        }
    }
    return result;
};

// Example: Double only even numbers
const numbers = [1, 2, 3, 4, 5];

const doubledEvens = numbers.myMapWithCondition(
    (num) => num * 2, 
    (num) => num % 2 === 0
);

console.log(doubledEvens); 


//custom filter function


Array.prototype.myReject = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            result.push(this[i]); // Keep elements that do NOT match the condition
        }
    }
    return result;
};

// Example: Remove negative numbers
const values = [-3, 2, -7, 8, -1, 5];

const positiveNumbers = values.myReject((num) => num < 0);

console.log(positiveNumbers); 



//custom reduce function
Array.prototype.myReduceWithLogging = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        console.log(`Step ${i}: Accumulator = ${accumulator}, Current Value = ${this[i]}`);
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Example: Calculate product of all numbers
const nums = [2, 3, 4];

const product = nums.myReduceWithLogging((acc, num) => acc * num, 1);

console.log("Final Product:", product);