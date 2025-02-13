                                //   DOM Manipulation:-


                                // Selecting Elements:
                                       
//  You can select elements in the DOM using various methods:

document.getElementById(id);              //Selects an element by its ID.
document.getElementsByClassName(className)      //Selects elements by their class name.
document.getElementsByTagName(tagName)             //Selects elements by their tag name.
document.querySelector(selector)          //Selects the first element that matches a CSS selector.
document.querySelectorAll(selector)             //Selects all elements that match a CSS selector.                                

const element = document.getElementById('myElement');
const items = document.querySelectorAll('.myClass');



   // Manipulating Elements:

//You can change the content, attributes, and styles of elements:
element.innerHTML           //Get or set the HTML content of an element.
element.textContent         //Get or set the text content of an element.
element.setAttribute(attribute, value)    // Set an attribute of an element.
element.style.property       // Change the CSS styles of an element.


element.innerHTML = 'New Content';
element.style.color = 'blue';



           // Creating and Removing Elements:

//You can create new elements and remove existing ones:
document.createElement(tagName) //Creates a new element.
parentElement.appendChild(childElement) // Adds a child element to a parent.
element.remove() // Removes an element from the DOM.           

const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
document.body.appendChild(newDiv);


             // Modifying Classes:

            //  You can add, remove, or toggle classes on elements:
element.classList.add(className) //Adds a class.
element.classList.remove(className) //Removes a class.
element.classList.toggle(className) //Toggles a class.

element.classList.add('active');




                                                  //Event Handling:-

// Event handling in JavaScript allows you to execute code in response to user interactions with the web page, such as clicks, key presses, and mouse movements.                                                  

                                // Adding Event Listeners:
// You can listen for events on elements using addEventListener():

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});


                                           // Event Object:

 //    When an event occurs, an event object is created, which contains information about the event (e.g., the target element, mouse position).

 button.addEventListener('click', function(event) {
    console.log(event.target); // The element that triggered the event
});

                                        // Removing Event Listeners:

//  You can remove an event listener using removeEventListener():       

function handleClick() {
    alert('Button clicked!');
}
button.addEventListener('click', handleClick);
// Later, to remove the listener
button.removeEventListener('click', handleClick);


                                             //Event Propagation

//                                              Events can propagate in two phases: capturing and bubbling. You can control this behavior using the useCapture parameter in addEventListener().
// Bubbling is the default behavior, where the event starts from the target element and bubbles up to the root.
// Capturing is the opposite, where the event starts from the root and goes down to the target.

parentElement.addEventListener('click', function() {
    console.log('Parent clicked!');
}, true); // true for capturing phase



                                            //Event Delegation:

 // Event Delegation is a technique in JavaScript that allows you to manage events more efficiently by taking advantage of the event bubbling phase. Instead of attaching event listeners to individual child elements, you attach a single event listener to a parent element.

 // Select the parent element
 const list = document.getElementById('myList');

 // Add a single event listener to the parent
 list.addEventListener('click', function(event) {
     // Check if the clicked element is a list item
     if (event.target && event.target.matches('.item')) {
         // Handle the click event
         alert('You clicked on ' + event.target.textContent);
     }
 });
