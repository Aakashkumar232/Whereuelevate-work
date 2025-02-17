


// Promises: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states:

// Pending: The initial state, where the operation is still ongoing.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
// Async/Await: This syntax allows you to write asynchronous code in a more synchronous manner.

// Async: Declares a function as asynchronous, which always returns a Promise.
// Await: Pauses the execution of the async function until the Promise is resolved or rejected.



async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchData();




// Fetch API
// The Fetch API provides a modern way to make network requests. It returns a Promise that resolves to the Response object representing the response to the request.

// Basic Usage:

// You can use the Fetch API to make GET requests, POST data, and handle responses easily.


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
