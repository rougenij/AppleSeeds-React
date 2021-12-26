import ToDoList from "./ToDoList";

function App() {
  const arr = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ];

  const displayList = () => {
    return arr.map((item) => {
      return <ToDoList text={item.name} completed={item.completed} />;
    });
  };
  return <div className="App">{displayList()}</div>;
}

export default App;
