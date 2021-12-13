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

//!React Props
//!recommended naming props from the component’s own point of view rather than the context in which it is being used.
//Props are arguments passed into React components.
//Props are passed to components via HTML attributes.
//!    props stands for properties.
//React Props are like function arguments in JavaScript and attributes in HTML.
