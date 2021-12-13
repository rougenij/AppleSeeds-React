//* Day 1
//! React JSX

//! What is JSX?
//* JSX stands for JavaScript XML.
//* JSX allows us to write HTML in React.
//* JSX makes it easier to write and add HTML in React.
// JSX can only take //!ONE PARENT ELEMENT

//! Coding JSX
//* JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
//* JSX converts HTML tags into react elements.

//! Expressions in JSX
//* With JSX you can write expressions inside curly braces { }.
//* The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:
const myelement = (
  <h1>PC Gaming is {50 + 51} times better than console Gaming</h1>
);
// myelement returns PC Gaming is 101 times better than console gaming

//! Inserting a Large Block of HTML
//*To write HTML on multiple lines, put the HTML inside parentheses
//! For Example:
const myelement = (
  <ul>
    <li>Apple</li>
    <li>Seeds</li>
    <li>BootCamp</li>
    <li>is</li>
    <li>the</li>
    <li>Best</li>
  </ul>
);
//my Element here will return a list

//! Adding Class to JSX
//* className = "className"
const myelement = <h1 className="myclass">Hello World</h1>;

//! React Component
//When creating a React component, the component's name MUST start with an upper case letter.
//Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

//!How to define a component
//The simplest way to define a component is to write a JavaScript function:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
//This function is a valid React component because it accepts a single “props” (which stands for properties)
//object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

//* Day 2
//* React Props
//!recommended naming props from the component’s own point of view rather than the context in which it is being used.
//Props are arguments passed into React components.
//Props are passed to components via HTML attributes.
//!    props stands for properties.
//React Props are like function arguments in JavaScript and attributes in HTML.

//! React State
//  A state can be modified based on user action or network changes
//  Every time the state of an object changes, React re-renders the component to the browser
//  The state object is initialized in the constructor
//  The state object can store multiple properties
//  this.setState() is used to change the value of the state object
//  setState() function performs a shallow merge between the new and the previous state

//! setState()
// State can be updated in response to event handlers, server responses, or prop changes.
// This is done using the setState() method. The setState() method enqueues all of the updates
// made to the component state and instructs React to re-render the component and its children
// with the updated state.

//Always use the setState() method to change the state object, since it will ensure that the component knows it’s been updated and calls the render() method.

//!                                 State                                              Props
//                   |State is used to store the data of   |        |      Props are used to pass data and     |
//Use Case:          | components that have to be rendered |        | event handlers to the children components|
//                   |       to the view                   |        |                                          |
//                   |_____________________________________|        |__________________________________________|
//! -------------------------------------------------------------------------------------------------------------------------------------------------------
//                   |       State holds the data          |        |        Props are immutable               |
//Mutability         |      and can change over time       |        |    once set, props cannot be changed     |
//                   |_____________________________________|        |__________________________________________|
//! -------------------------------------------------------------------------------------------------------------------------------------------------------
//                   |       State can only be used        |        |    Props can be used in both functional  |
//Component          |        in class components          |        |              class components            |
//                   |_____________________________________|        |__________________________________________|
//! -------------------------------------------------------------------------------------------------------------------------------------------------------
//                   |  Event handlers generally update    |        |     The parent component sets props      |
//Updation           |              state                  |        |        for the children components       |
//                   |_____________________________________|        |__________________________________________|
