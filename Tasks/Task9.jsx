// Step 1: Implement Functional Components & Props:-


// Create a Functional Component: Open the src directory and create a new file called Greeting.jsx.


// src/Greeting.jsx
import React from 'react';

const Greeting1 = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

export default Greeting1;


// Use the Component in App: Open src/App.jsx and use the Greeting component


// src/App.jsx
import React from 'react';
import Greeting from './Greeting';

const App = () => {
    return (
        <div>
            <Greeting name="John" />
            <Greeting name="Jane" />
        </div>
    );
};

export default App;



// Step 2: Use useState for State Management:-

// Add State Management: Modify the App component to use useState for managing a counter.


// src/App.jsx
import React, { useState } from 'react';
import Greeting from './Greeting';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Greeting name="John" />
            <Greeting name="Jane" />
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default App;


// Step 3: Add Basic Styling to Enhance UI:-


// Add Basic Styles: You can add some basic styles directly in the App component or create a separate CSS file.


/* src/App.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

h1 {
    color: #333;
}

button {
    margin: 5px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}


// src/App.jsx
import './App.css'; // Add this line at the top
 





