// 1. Understand JSX and How It Differs from HTML:-

// JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It is used with React to describe what the UI should look like. While JSX resembles HTML, there are some key differences:

// JavaScript Expressions: You can embed JavaScript expressions within curly braces {}.
// Class vs. className: In JSX, you use className instead of class to define CSS classes.
// Self-Closing Tags: JSX requires self-closing tags for elements that do not have children (e.g., <img /> instead of <img>).


const element = <h1 className="greeting">Hello, World!</h1>;



// 2. Build Reusable React Components and Pass Data Using Props
// Components are the building blocks of a React application. They can be reused throughout your application. You can pass data to components using props (short for properties).



// Child Component
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Parent Component
function App() {
    return (
        <div>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
        </div>
    );
}

// In this example, the Greeting component is reusable, and we pass different names as props.




// 3. Manage Component State Effectively with useState
// State is a built-in object that allows components to create and manage their own data. The useState hook is used to add state to functional components.


import React, { useState } from 'react';

function Counter() {
    // Declare a state variable called count, initialized to 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

// In this example, clicking the button updates the count state, and the component re-renders to reflect the new count.