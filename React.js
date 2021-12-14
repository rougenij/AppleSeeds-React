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
// this.state.number = 1
// this.setState({number : 1})
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

//* Day 3
//* LifeCycle Methods
//
//
//You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death.
//Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.
//
//! Mounting – Birth of your component
//! Update – Growth of your component
//! Unmount – Death of your component
//
//! Common React Lifecycle Methods
//
//! render()
//! The only required method withing a class component in React!
// The render() method is the most used lifecycle method.
//You will see it in all React classes. This is because render() is the only required method within a class component in React.
//! A render() method has to be pure with no side-effects.
//! You cannot modify the component state within the render().
//! componentDidMount()
//
//componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint.
//Unlike the render() method, componentDidMount() allows the use of setState(). Calling the setState() here will update state and cause another
//rendering but it will happen before  the browser updates the UI. This is to ensure that the user will not see any UI updates with the double rendering.
//! You can modify the component state within the componentDidMount(), but use it with caution.
//
//! componentDidUpdate()
//
//This lifecycle method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.
//You can call setState() in this lifecycle, but keep in mind that you will need to wrap it in a condition to check for state or prop changes from previous state.
//Incorrect usage of setState() can lead to an infinite loop.
//! You can modify the component state within the componentDidUpdate(), but use it with caution.
//
//! componentWillUnmount()
//
//As the name suggests this lifecycle method is called just before the component is unmounted and destroyed.
//If there are any cleanup actions that you would need to do, this would be the right spot.
//As the name suggests this lifecycle method is called just before the component is unmounted and destroyed.
//If there are any cleanup actions that you would need to do, this would be the right spot.
//! You cannot modify the component state in componentWillUnmount lifecycle.
//

//! Recap
// React component lifecycle has three categories – Mounting, Updating and Unmounting.

// The render() is the most used lifecycle method.
// It is a pure function.
// You cannot set state in render()

// The componentDidMount() happens as soon as your component is mounted.
// You can set state here but with caution.

// The componentDidUpdate() happens as soon as the updating happens.
// You can set state here but with caution.

// The componentWillUnmount() happens just before the component unmounts and is destroyed.
// This is a good place to cleanup all the data.
// You cannot set state here.

// The shouldComponentUpdate() can be used rarely.
// It can be called if you need to tell React not to re-render for a certain state or prop change.
// This needs to be used with caution only for certain performance optimizations.
// The two new lifecycle methods are getDerivedStateFromProps() and getSnapshotBeforeUpdate().
// They need to be used only occasionally.
// Not many examples are out there for these two methods and they are still being discussed and will have more references in the future.
